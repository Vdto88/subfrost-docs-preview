---
title: Lending Protocol
sidebar_label: Lending Protocol
sidebar_position: 8
description: How a peer-to-peer loan settles in one Bitcoin transaction, using a pre-signed PSBT escrow.
---

# Lending Protocol

SUBFROST lending is a **peer-to-peer, fixed-term, over-collateralized loan market** for Alkanes tokens, settled in a **single Bitcoin transaction** through a pre-signed PSBT escrow. There is no pooled liquidity and no custodian. A lender and a borrower agree on terms off chain, and one transaction atomically creates the loan, delivers the borrowed tokens, and locks the collateral in a freshly cloned loan contract.

Every loan is its own on-chain contract instance, so a loan's entire lifecycle (repayment, collateral release, default) is enforced by code rather than by a counterparty.

If you just want to lend or borrow in the app, read [Lending](../using-subfrost/lending) instead. This page is the mechanism underneath it.

## Core ideas

- **Off-chain order book, on-chain settlement.** Makers publish *signed but un-broadcast* offers. Nothing touches the chain until a taker accepts, at which point a single settlement transaction is assembled and broadcast.
- **One transaction, one loan.** The settlement transaction clones the loan-contract template, initializes it with the agreed terms, hands the loan token to the borrower, and locks the collateral, atomically. The loan is `LOAN_ACTIVE` the moment it confirms.
- **No bearer token, no admin.** A party's identity is simply the `scriptPubKey` of the output they receive at settlement. Every later action is authorized by committing that same script. There are no auth NFTs and no privileged roles.
- **Fixed terms.** Interest is `principal × APR × duration`, not floating, so the exact repayment is known at creation and computable in any state.

## Roles and terms

A loan has two parties and a fixed set of terms:

| Term | Meaning |
| --- | --- |
| **loan token / amount** | what the borrower receives (for example 1 DIESEL) |
| **collateral token / amount** | what the borrower locks to back the loan (for example 0.1 frBTC) |
| **APR** | annual rate, stored in basis points |
| **duration** | loan term in blocks. The repayment deadline is `loan_start + duration` |

The **maker** is whoever publishes the offer, and the **taker** accepts it. Either side can be the maker:

- **Lend offer.** The maker is the **creditor** and brings the loan token. A taker borrows against it.
- **Loan request.** The maker is the **debitor** and brings the collateral. A taker fills it by lending.

Internally the contract only knows **creditor** (lender) and **debitor** (borrower). The maker/taker distinction is purely about who published the offer.

## Lifecycle at a glance

```
 maker builds + signs offer (off-chain)        taker accepts (one tx)
 ────────────────────────────────────────►  ─────────────────────────►  LOAN_ACTIVE
   • CPFP "prep" (deferred, not broadcast)       • taker prep (token+fee)
   • partial settlement PSBT                      • append taker input + sign
   • POST to order book                           • broadcast maker prep + taker prep
                                                  • broadcast settlement (clone+init)

 LOAN_ACTIVE ──repay──► REPAID ──claims──► FULLY_CLOSED
            └─past deadline─► DEFAULTED ──claim collateral──► DEFAULTED_CLAIMED
```

## The on-chain contract

### Template and per-loan clone

A single `lending-contract-psbt` **template** is deployed at a block-4 slot. On mainnet it is **`4:47876`**. Each loan is a **block-6 clone** of that template, produced inside the settlement transaction's first protostone. The clone becomes a child contract at `[2:seq]` and is `LOAN_ACTIVE` immediately. There is **no factory contract**: the host's block-6 clone mechanism creates each loan directly.

### State machine

```
0 UNINITIALIZED
2 LOAN_ACTIVE
3 LOAN_REPAID
4 LOAN_DEFAULTED
5 REPAYMENT_CLAIMED
7 COLLATERAL_CLAIMED
8 DEFAULTED_CLAIMED
9 FULLY_CLOSED
```

The two claims in the happy path (`ClaimRepayment` by the creditor, `ClaimCollateral` by the debitor) are **independent and order-free** from `REPAID`. Each advances the state before paying, so a repeat reverts, and the loan reaches `FULLY_CLOSED` once both have run.

### Opcodes

| Op | Name | Caller | Effect |
| --- | --- | --- | --- |
| 0 | Initialize | (settlement) | create and arm the loan from the agreed terms |
| 1 | RepayLoan | debitor (permissionless tokens-in) | send the loan token back, giving `REPAID` |
| 2 | ClaimRepayment | creditor | pull principal plus interest |
| 3 | ClaimCollateral | debitor | reclaim the collateral after repayment |
| 4 | TriggerDefault | anyone, after the deadline | flip an expired `ACTIVE` loan to `DEFAULTED` |
| 5 | ClaimDefaultedCollateral | creditor | seize the collateral after default |

**Views:** `90 GetLoanDetails`, `91 GetRepaymentAmount`, `92 GetState`, `93 GetTimeRemaining`, `99 GetName`.

### Authorization model

A claim (op 2, 3 or 5) has no signature check. Instead the **calling protostone's `pointer` must reference a real transaction output** whose `scriptPubKey` equals the party's stored script, and the payout is routed to that same output.

The creditor and debitor scripts are recorded at `Initialize` from the settlement's receive outputs. So to claim, a party simply puts their own address at the protostone's pointer output: only they can produce that script, and the payout lands there. A reconnected wallet works because its taproot address still matches.

## The settlement transaction

A single transaction does everything. Its **outputs** are fixed:

```
 vout 0  OP_RETURN   ← the two protostones (Initialize + refund splitter)
 vout 1  3000 sats   ← protocol fee
 vout 2  dust        ← maker's receive output
 vout 3  dust        ← taker's receive output
```

Which party is creditor and which is debitor maps onto outputs 2 and 3 by the maker's role:

- maker is **creditor**, so `creditorOutput = 2` (maker) and `debitorOutput = 3` (taker)
- maker is **debitor**, so `creditorOutput = 3` (taker) and `debitorOutput = 2` (maker)

### The two protostones

- **p0, the Initialize message.** Target `{6, templateTx}` (clone the template), opcode `0`, with the terms as calldata. Its `pointer` is the **debitor output**, so the borrowed loan token routes to the borrower. Its `refundPointer` is **p1's shadow vout**, so if anything reverts the inputs flow into the splitter instead of being lost.
- **p1, the refund splitter (edicts only).** On the revert path it returns the **loan token to the creditor** and the **collateral to the debitor** (amount `0` meaning "all"), making both parties whole if the clone and init fails.

`Initialize` calldata argument order:

```
collateral_token(block,tx) · collateral_amount · loan_token(block,tx) · loan_amount
  · duration_blocks · desired_apr(bp) · creditor_output · debitor_output
```

The Initialize message's `pointer` **must equal `debitor_output`**. This is how the contract knows which output is the borrower, and therefore the loan recipient.

### The SIGHASH scheme, why an escrow works

This is the heart of the design. The maker signs **before the taker even exists**, yet the taker can complete the transaction without invalidating the maker's signatures:

- **Maker inputs (0, 1, 2) use `SIGHASH_SINGLE | ANYONECANPAY` (`0x83`).** `SINGLE` makes each maker input commit to **only its own corresponding output**, so the maker pre-commits outputs 0, 1 and 2 (the OP_RETURN, the protocol fee, and their own receive). `ANYONECANPAY` makes each input commit to **only itself** and not the other inputs, so the taker can freely append input 3 later.
- **The taker input (3) uses `SIGHASH_ALL` (`0x01`).** Signed last, it commits the **entire assembled transaction**, locking it in place.

The result: the maker publishes a partial transaction committing exactly their side, any taker can later add their input and output and finalize, and the maker's commitment still verifies.

### Why the protocol-fee output exists

The maker's partial transaction has **outputs worth more than its inputs**: its three dust inputs come to about 1,638 sats, but it commits the 3,000 sat protocol fee plus dust outputs. That negative balance makes the partial transaction **impossible to broadcast on its own**. It stays inert until the taker adds an input that funds the deficit and the miner fee.

This is deliberate. It prevents a published offer's PSBT from being broadcast early or out of context, and it routes a small protocol fee to the treasury on every settlement.

## PSBT lifecycle in detail

### 1. Exact-amount UTXOs (the CPFP prep)

The contract requires the **incoming alkanes to equal the agreed amounts exactly**, and there is no edict-shifter in the settlement OP_RETURN to peel off excess. So before signing, each party splits their token UTXO into exact-amount pieces with a small **prep transaction**:

```
 maker prep → v0 token-only dust (EXACT loan/collateral) · v1 dust · v2 dust · v3 change · v4 OP_RETURN
              (v0/v1/v2 become the maker's three SIGHASH_SINGLE settlement inputs)
 taker prep → v0 token + btc (exact token + fee budget) · v1 change · v2 OP_RETURN
              (v0 becomes the taker's single settlement input)
```

The prep's leading edict peels exactly the needed amount to a dedicated output and routes the leftover (excess token plus BTC) to change.

### 2. Maker side, building the offer

When a maker publishes an offer, the client:

1. Builds and signs the **CPFP prep**, but **does not broadcast it**. The prep's txid is deterministic, so a settlement that spends its outputs is valid even before the prep is on chain.
2. Builds the **partial settlement PSBT** (three maker inputs at `0x83`, the three committed outputs, the OP_RETURN) and signs the maker's inputs.
3. Submits the signed prep hex, the partial PSBT and the terms to the order book.

The maker can then go offline. **Nothing has touched the chain**, and the maker's funds stay in their wallet.

### 3. Taker side, accepting

When a taker accepts:

1. They build and sign their own **prep** (their token plus a BTC fee budget).
2. They **append** their input (input 3, `SIGHASH_ALL`) and receive output (vout 3) to the maker's partial PSBT, then sign input 3. The maker's `0x83` signatures survive untouched.
3. They **broadcast the maker's deferred prep**, their own prep, and the **settlement**, which is a child of both unconfirmed preps.

### 4. Dynamic fee, CPFP across both parents

Because the settlement spends two **unconfirmed** parents, the taker sizes the settlement's fee to **carry the whole package** at the chosen fee rate (Child Pays For Parent). The fee is:

```
max( ceil(feeRate × packageVsize) − prepsAlreadyPaid , ceil(feeRate × settlementVsize) )
```

So the package clears together even though the parents paid only a minimal prep fee.

## Loan lifecycle operations

After settlement the loan is `ACTIVE`. The portfolio surfaces the right action per party and state.

### Repay and reclaim (borrower), one transaction

The borrower's "Repay & reclaim" combines **two** operations in a single transaction by appending a second protostone:

```
 p0 (shifter)  route exactly the repayment (principal+interest) into p1
 p1  [child, 1] RepayLoan       ACTIVE → REPAID
 p2  [child, 3] ClaimCollateral REPAID → COLLATERAL_CLAIMED   (collateral → borrower's output)
```

Protostones execute **in order within the transaction**, so `ClaimCollateral` sees the just-`REPAID` state and releases the collateral. One click takes the loan from `ACTIVE` to `REPAID` to `COLLATERAL_CLAIMED`.

### Default and claim (lender), one transaction

Symmetrically, once the deadline passes, the lender's "Default & claim" combines:

```
 p0  [child, 4] TriggerDefault           ACTIVE → DEFAULTED
 p1  [child, 5] ClaimDefaultedCollateral DEFAULTED → DEFAULTED_CLAIMED  (collateral → lender's output)
```

### Claim repayment (lender)

After the borrower repays, the lender runs `ClaimRepayment` to pull the principal plus interest. Once both the lender's repayment claim and the borrower's collateral reclaim have run, the loan is `FULLY_CLOSED`.

### Intermediary recovery

If a combined transaction only half-lands (one protostone succeeds, the other reverts), the loan sits in the intermediate state and the UI offers the remaining step:

- repay and reclaim where the reclaim reverted leaves the loan at `REPAID`, and the borrower still sees **Claim Collateral**.
- default and claim where the claim reverted leaves the loan at `DEFAULTED`, and the lender still sees **Claim Collateral**.

The available actions are derived from the **live on-chain state**, so the finish step is always offered.

## Interest math

Interest is fixed at creation, not accrued during the term:

```
interest   = floor( loanRaw × aprBasisPoints × durationBlocks / (APR_PRECISION × BLOCKS_PER_YEAR) )
repayment  = principal + interest
APR_PRECISION   = 10,000       (basis-point denominator)
BLOCKS_PER_YEAR = 52,560       (144 blocks/day × 365)
```

Example, 1 DIESEL at 12.5% APR for 1,008 blocks:

```
100,000,000 × 1250 × 1008 / (10,000 × 52,560) = 239,726
```

giving a repayment of `1.00239726 DIESEL`.

Because it is deterministic from the terms, the exact repayment is known at offer time and computable in any later state. The on-chain `GetRepaymentAmount` view only returns it while the loan is `ACTIVE`.

The division floors, which has a consequence worth knowing: if the terms are small enough that interest rounds to **zero**, the contract **reverts the create**. Clients mirror that guard so the offer fails in the form rather than on chain.

## Collateral policy

The contract itself enforces the collateral **that was agreed**, and nothing more. It has no notion of price, no margin call, and no liquidation path. An active loan can only end by repayment or by claim after default.

The **loan-to-value ceiling** described in the [user guide](../using-subfrost/lending) is an **application-layer policy**, not a contract rule. It is applied when an offer is created and while it sits in the book, using USD prices resolved off chain. It never touches a settled loan. Two consequences follow:

- A loan that was within its LTV ceiling at creation stays valid no matter how far prices move afterwards.
- An offer that nobody has taken can be dropped from the book if its collateral falls below what is owed on it, because it is not yet a loan.

## Off-chain order book

Offers live in a database with **complete physical isolation per network**: a separate offer database per network, selected at request time. There is no shared offers table, so a test loan can never appear on mainnet. Identity and auth data live on a shared default database, since those are global rather than per-network.

Each open offer holds only the **off-chain matching data**: the terms, the maker's role and address, the signed **partial PSBT**, the signed **deferred prep transaction hex**, and a status (`open`, then `taken` or `cancelled`). Once a loan settles, **nothing about it is read from the database**. The live loan lives entirely on chain.

### Submission is verified against the signature

A submitted offer is not trusted. The maker's `SIGHASH_SINGLE|ANYONECANPAY` signatures must be valid, **and** the PSBT's committed outputs (the OP_RETURN terms and edicts, the protocol fee, the maker payout) must byte-match what the client builds from the declared terms. Stored metadata therefore cannot diverge from what the maker actually signed. This check is offline and applies on every network.

### Ownership of edits and deletes

Editing an offer is a full **re-sign**: the amounts are committed in the settlement's OP_RETURN, so changing them rebuilds and re-signs the whole PSBT. On an edit, the old offer is cancelled atomically alongside the new submission, authorized by the new offer's verified maker signatures, so an edit needs no separate cancel proof.

Cancelling or deleting is gated server-side: the request must carry the connected wallet's address, and it must equal the offer's maker address.

### Dead-offer pruning

A deferred-prep offer is only valid while the maker's funding UTXO is unspent. If the maker spends it elsewhere, the prep can never broadcast and the offer can never settle. The list endpoint prunes such offers: on networks the server can reach it **deletes** them, and where the chain is only reachable in the browser the client **hides** them. If the UTXO check is unavailable it does **not** prune, surfacing a loading state rather than risking the deletion of a live offer.

## Loan portfolio

Active and historical loans are read **from the chain via the indexer**, not from the database:

1. `get_factory_children` on the lending template enumerates every loan clone.
2. For each clone, `get_keys(/creditor_script, /debitor_script)` is matched against the connected wallet's receive `scriptPubKey`, which gives the wallet's role.
3. Live terms and state come from the contract views (`GetLoanDetails`, `GetRepaymentAmount`, `GetTimeRemaining`).

The UI shows an **effective state**. An `ACTIVE` loan past its deadline is displayed as **Defaulted** even before anyone calls `TriggerDefault`, and the borrower's repay action is withdrawn. The on-chain state only flips to `DEFAULTED` once someone triggers it. Time remaining is computed as `deadline − current_tip_height`.

:::info[Which indexer should an integrator use to enumerate loans?]
The loan portfolio reads through an indexer that exposes `get_factory_children` and `get_keys`, and this page deliberately keeps that generic. The service the lending code reads through is not the one the [Build track](../build/indexing-with-metashrew) documents, and naming two different indexers across the documentation without explaining how they relate would raise more questions than it answers. Confirm which indexer a third-party integrator should use here, and whether it should be named.
:::

## Wallets and signing

The hand-built flows (offer creation, take, BTC send) all funnel through one signing entrypoint, so the protocol is wallet-agnostic at the app layer: build PSBT, sign, finalize, broadcast.

- **Keystore, in app.** BIP86 key-path signing with the BIP-341 tweak. P2WPKH (segwit) fee inputs are signed with the BIP84 key.
- **Browser wallets.** The same PSBT is signed through the wallet's adapter, after patching the taproot internal key so the wallet accepts it.
- **Finalization is wallet-agnostic.** Only not-yet-finalized inputs are finalized, so a self-finalizing wallet's pre-finalized maker inputs do not break the taker's finalize.

The alkanes (loan and collateral) always live at the **taproot** address. The BTC prep fee is sourced from the **taproot address first, then the segwit address**, where dual-address wallets keep clean BTC.

## Network configuration

Lending is enabled on a network only when its lending template id is configured, meaning the deployed template's `[4, tx]` slot. Today that is **mainnet**, at `4:47876`, plus the local development network.

Bringing lending to a new network requires three things: deploying the template on that chain and setting its slot in config, a per-network order book database, and an indexer that serves `get_factory_children`.

:::info[Confirm the mainnet template id before publishing]
This page states the mainnet lending template as **`4:47876`**, and says lending is live on mainnet. The previous version of this page labelled the same id as a devnet example, which conflicts with the app's own configuration: the id sits in the mainnet contract set, the code comment describes the template as deployed on mainnet, and mainnet is the only non-development network whose config enables lending. Integrators need this id to enumerate loans, the same way they need the frBTC id. Confirm the value and that it is meant to be public.
:::

## Security properties

- **Atomic settlement.** The loan, the loan delivery, and the collateral lock all happen in one transaction. If the clone and init reverts, the refund splitter returns both legs to their owners.
- **No early broadcast.** The maker's partial PSBT cannot be broadcast until a taker funds it, because the protocol-fee output makes its outputs exceed its inputs.
- **Tamper-evident escrow.** The maker's `SIGHASH_SINGLE|ANYONECANPAY` signatures commit exactly their side, and the taker's `SIGHASH_ALL` locks the rest. Neither can alter the other's committed portion.
- **Verified submissions.** An offer's stored terms must byte-match the outputs the maker signed, so the book cannot advertise terms the maker did not commit to.
- **No custodian, no admin keys.** Authorization is "commit your own script". Collateral and repayments are only ever released to the party whose stored script matches the claim's output.
- **Per-network isolation.** Offer data is physically separated per network, so test and production loans can never mix.

## Next steps

- [Lending](../using-subfrost/lending): the user guide for the same feature.
- [Alkanes Protocol](./alkanes): protostones, cellpacks, and the contract model this builds on.
- [How SUBFROST Works](./how-subfrost-works): the big picture.
