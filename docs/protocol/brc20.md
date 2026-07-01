---
title: BRC2.0
sidebar_label: BRC2.0
sidebar_position: 7
description: BRC2.0 brings EVM-compatible smart contracts to Bitcoin, and SUBFROST assets connect to it.
---

# BRC2.0

**BRC2.0** (also called brc20-prog) brings **EVM-compatible smart contracts** to Bitcoin. It lets developers write contracts in Solidity, the language of Ethereum, and deploy them so their state is derived from Bitcoin transactions, without a separate chain. SUBFROST treats it as one of the execution environments that Bitcoin-backed value can move into, alongside [Alkanes](./alkanes).

## How it works

BRC2.0 follows the same broad pattern as Alkanes: state is not held by a new blockchain, it is **derived by an indexer** from data written into Bitcoin transactions.

- Contract deployments and function calls are inscribed as data in Bitcoin transactions.
- An indexer reads those inscriptions, runs the embedded **EVM bytecode**, and maintains contract state across transactions.

Because the execution environment is the EVM, BRC2.0 reuses Ethereum's conventions directly. Contract addresses are derived the Ethereum way, from the deployer and a nonce, and function calls use standard Ethereum **ABI encoding** (a four-byte selector followed by 32-byte arguments). In practice this means much of the existing Solidity toolchain works with little change.

## Inscriptions and front-running protection

A deploy or a call is carried by a Bitcoin inscription, which uses a commit-then-reveal flow. Naively, an inscription flow is exposed to front-running: someone watching the mempool could try to publish a competing reveal first. BRC2.0 guards against this by pre-building and pre-signing the transactions and broadcasting them together, so the reveal is already committed to its rightful creator by the time anything is public.

:::info[Confirm the exact inscription and transaction flow before publishing]
The older docs described a three-transaction deploy flow (commit, reveal, activation) and specific reveal-script details, plus hard-coded contract addresses and a `wrapAndExecute2` entry point whose signature differed between two pages. The ord-canonical inscription flow is commit then reveal. Confirm the real transaction pattern, entry points, and any addresses against the brc20-prog / frBTC contract source, and keep dev-level specifics in the developer guides where they can be verified against the repo. Source: `Diagnostico-docs.md` §10 C.
:::

## frBTC on BRC2.0

frBTC is available inside BRC2.0, so contracts written there can hold and move Bitcoin-backed value the same way any EVM token would. This is what lets Solidity developers build on Bitcoin liquidity without leaving the language and tooling they already know. The programmatic details of wrapping and using frBTC from a contract belong in the developer guides.

## Where to go next

- [Alkanes](./alkanes): the other execution environment SUBFROST is built around.
- [How SUBFROST Works](./how-subfrost-works): the big picture.
