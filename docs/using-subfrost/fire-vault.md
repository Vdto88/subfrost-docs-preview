---
title: FIRE Vault
sidebar_label: FIRE Vault
sidebar_position: 5
description: Stake liquidity to earn FIRE, or buy FIRE at a discount through bonds.
---

# FIRE Vault

**FIRE** is the SUBFROST rewards token. It rewards the people who provide liquidity to the [DIESEL / frBTC pool](./pools-liquidity), and it is earned two ways: by **staking** your liquidity, or by **bonding**.

There is no premine. Every FIRE that exists was emitted by the protocol, and the only way FIRE leaves circulation is redemption against the treasury.

## FIRE at a glance

| Metric | Value |
| --- | --- |
| Maximum supply | 2,100,000 FIRE |
| Decimals | 8 (same as Bitcoin) |
| Premine | 0% |
| Staking pool | 85% (1,785,000 FIRE) |
| Bonding pool | 15% (315,000 FIRE) |
| Halving interval | 105,000 blocks (about 2 years) |
| Activation block | 950,420 |
| First halving | Block 1,050,000 |

FIRE emission halves every 105,000 blocks, which is half of Bitcoin's own halving interval. Every second FIRE halving therefore lands on a Bitcoin halving.

## How the vault pays you

The vault accepts **DIESEL / frBTC LP tokens**. It pays out FIRE with a reward accumulator (the standard Synthetix staking model): every block, a fixed amount of FIRE is divided pro-rata across all weighted stake. Your share of a block's emission is your weighted stake divided by the total weighted stake in the vault, so rewards accrue continuously rather than in discrete payouts.

Per-block emission in epoch 0:

| Pool | Base units per block | FIRE per block | Per day | Per year |
| --- | --- | --- | --- | --- |
| Staking (85%) | 850,000,000 | 8.5 | ~1,224 FIRE | ~446,250 FIRE |
| Bonding (15%) | 150,000,000 | 1.5 | ~216 FIRE | ~78,750 FIRE |
| **Total** | **1,000,000,000** | **10** | **~1,440 FIRE** | **~525,000 FIRE** |

Day and year figures assume Bitcoin's average of 144 blocks per day and 52,500 blocks per year.

## The emission schedule

Every 105,000 blocks the per-block rate halves. Epoch boundaries align to a global grid anchored at block 0, not to the activation block, and every second FIRE halving coincides with a Bitcoin halving. The 85 / 15 split between the staking pool and the bonding pool holds in every epoch.

| Epoch | Length | Total per day | Cumulative supply at epoch end |
| --- | --- | --- | --- |
| 0 | 105,000 blocks | ~1,440 FIRE | 1,050,000 FIRE |
| 1 | 105,000 blocks | ~720 FIRE | 1,575,000 FIRE |
| 2 | 105,000 blocks | ~360 FIRE | 1,837,500 FIRE |
| 3 | 105,000 blocks | ~180 FIRE | 1,968,750 FIRE |
| ... | ... | ... | 2,100,000 FIRE (cap) |

### Why the cap needs no premine

Each epoch emits exactly half of the one before it, so the total emission is an infinite geometric series bounded by the supply cap:

```
total = epoch_0_emission x sum(1/2^i) for i = 0..infinity
      = epoch_0_emission x 2
      = 1,050,000 x 2
      = 2,100,000 FIRE
```

The schedule itself is what enforces the cap. Nothing needs to be held back at genesis to make the numbers work, which is why the premine is 0%.

Worth being precise about: a halving series approaches its total without ever landing on it. Supply gets arbitrarily close to 2,100,000 FIRE and is always slightly under it, in the same way Bitcoin's own 21 million is a ceiling rather than a figure that ever gets minted. The cap is a limit, not a milestone.

:::info[Which is right for epoch 0, block 1,050,000 or 1,055,420?]
Two internal sources disagree. The written schedule says epoch boundaries follow a fixed grid anchored at block 0, which puts the first halving at block **1,050,000** and makes the first epoch shorter than the rest (99,580 blocks instead of 105,000), since FIRE activated at block 950,420 partway through a grid slot. The deployment record instead lists epoch 0 as covering **950,420 to 1,055,420**, which is a full 105,000 blocks and would put the first halving 5,420 blocks later. A note in the app says the value read from the contract itself is 1,049,999, checked a couple of days after that deployment record was written, which favours the first reading. This matters beyond trivia: if the first epoch is short, it emits about 995,800 FIRE rather than 1,050,000, and the series then approaches roughly 2,045,800 rather than 2,100,000. Please confirm which is live, and whether the first epoch is meant to be truncated.
:::

## Lock multipliers

You can lock your stake for longer to earn more. A longer lock applies a higher reward multiplier to the same amount of LP. Locks cannot extend past the current epoch's expiry.

| Lock period | Blocks | Reward multiplier |
| --- | --- | --- |
| No lock | 0 | 1.0x |
| 1 week | 1,050 | 1.25x |
| 1 month | 4,375 | 1.5x |
| 3 months | 13,125 | 2.0x |
| 6 months | 26,250 | 2.5x |
| 1 year | 52,500 | 3.0x |

The longer you commit, the larger your share of the staking emissions.

:::info[Only long locks move the bond price]
The bond price oracle counts **only LP staked with a lock of 6 months or longer**, and it counts the raw amount rather than the multiplied weight. Short-term stakers still earn FIRE, but they do not move the oracle. What bonders pay is set by the people who committed for the long term.
:::

## Staking your LP

1. **Get DIESEL / frBTC LP.** Provide liquidity to the [DIESEL / frBTC pool](./pools-liquidity) first. The vault accepts that LP token and nothing else.
2. **Choose a lock duration.** Anything from no lock to one year. A higher multiplier earns proportionally more FIRE for the same LP, but your position is locked until expiry.
3. **Stake and receive an NFT position.** The NFT carries two things at once: your **FIRE yield rights** (the emissions you can claim) and your **LP claim** (the liquidity you get back at expiry).
4. **Earn every block.** Rewards accrue per block. Claim or compound whenever you want.

```
Stake(LP, lock, amount) -> NFT position (FIRE yield + LP claim)
```

## Getting your LP back

There are three exit paths, depending on how much flexibility you want.

### Unstake

Wait for the lock to expire, then unstake the NFT. You get your LP back plus all accrued FIRE.

```
Unstake(NFT) -> LP + FIRE
```

Once the lock has expired, claiming your rewards does this for you: on a position you have not split, a claim after expiry returns the FIRE **and** the LP and closes the position out. You do not need to unstake separately.

### Split into wLP

Split the NFT position into its two halves. The **NFT** keeps the FIRE yield rights. A fungible **wLP** token carries the LP claim, and you can transfer or sell it on its own. Merging puts the position back together.

```
Split(NFT)       -> NFT (FIRE yield only) + wLP (fungible LP claim)
Merge(NFT + wLP) -> NFT (full position restored)
```

This is how you move the LP liquidity out without giving up the FIRE yield stream.

### Redeem expired wLP

Once the epoch has expired, anyone holding wLP can redeem it straight for LP. No NFT required.

```
RedeemExpired(wLP) -> LP
```

## Bonding

Bonding is for people who want FIRE **now** instead of earning it over time. You hand the protocol LP tokens permanently, and you get FIRE at a **10% discount** to the staking oracle price, vested over about **7 days** (1,050 blocks). The discount is a setting the protocol can adjust, so treat 10% as the current rate rather than a fixed rule.

The pricing is fully transparent:

```
oracle_price    = max(LP_locked_6mo_or_more, 1 LP) x 10^8 / annual_FIRE_emission

effective_price = oracle_price x (10000 - discount_bps) / 10000

bond_price      = max(effective_price, floor_price)

FIRE_out        = LP_in x 10^8 / bond_price
```

The `max(..., 1 LP)` in the oracle price is a bootstrap guard: before anyone has locked LP for six months or more, it keeps the price defined instead of dividing into zero.

Bond LP goes directly to the treasury and stays there. It is not returned, and it permanently backs the redemption floor.

In plain language, a bond is this trade: you give the protocol LP forever, and in exchange you get FIRE at a 10% discount to the year-equivalent staking yield, vested over 7 days.

### The floor guard

Look at the `max()` in `bond_price`. That is the floor guard, and it exists to stop a free round-trip.

Once the treasury holds LP and FIRE has been minted, the floor price is real money. Without the guard, you could bond below the floor and immediately redeem for more LP than you put in. With `bond_price = max(effective_price, floor_price)`, bonding can never be cheaper than redemption:

```
Bond at floor_price    -> mint X FIRE  (LP goes into treasury)
Redeem X FIRE at floor -> burn for LP  (LP comes out of treasury)
                       = same LP back  (zero net change)
```

A bonder who redeems immediately nets zero. The 7-day vest means a bonder is betting on price appreciation, not extracting value from the protocol.

### Bonding capacity builds up over time

Bonding is metered rather than unlimited. Capacity accrues block by block from the moment the contract goes live, so shortly after launch there is little of it and a large bond may not fit. If a bond is rejected for capacity, it is not broken: wait and try again, or bond a smaller amount.

## Redemption and the price floor

Any FIRE holder can burn FIRE for a proportional share of the treasury's LP backing:

```
floor_price = total_treasury_LP / total_FIRE_supply
```

**Redeeming charges a 1% fee**, which is not paid to anyone: it stays in the treasury. So you receive about 99% of your proportional share, and the LP you leave behind raises the floor slightly for everyone still holding FIRE.

This is a hard floor, and it scales with the treasury. Every bond deposits LP that never leaves, so the floor only moves in one direction over time as bonding activity grows.

### There is no FIRE market to arbitrage

FIRE has **no AMM pool, no exchange listing, and no swap path**. You cannot buy or sell it the way you trade other Bitcoin assets. The only ways to acquire FIRE are to **stake** LP and earn it, or to **bond** LP and receive it at a discount. The only way to dispose of it is to **redeem** it against the treasury.

That is why the two prices below are not market quotes. They are protocol-computed figures, and the "price" of FIRE means one of them.

If a price does appear somewhere off-platform, the same forces still bound it: below the floor, anyone can buy and redeem for treasury LP at a profit, which pushes it back up. Above the year-equivalent staking yield, staking and selling becomes the better trade, which absorbs the demand. The floor is a hard lower bound and the staking yield is a soft upper one.

## The two reference prices

Outside of market quotes, FIRE has two distinct "prices," and they answer different questions.

| Price | Formula | What it means |
| --- | --- | --- |
| **Oracle** | `locked_LP / annual_emission` | What a 6-month staker earns in a year |
| **Floor** | `treasury_LP / total_supply` | What a redeemer gets for burning FIRE |

If you see a "discount" quoted anywhere, check which of the two it is discounting from. Oracle and floor answer different questions, and a discount against one is not a discount against the other.

## The flywheel

Staking, bonding, and redemption are not three separate features. They feed each other in a closed loop.

| Who | Does | Which causes |
| --- | --- | --- |
| LP providers | Stake DIESEL / frBTC LP, locking longer for more FIRE | Long locks raise the oracle price |
| Bonders | Pay LP for discounted FIRE at the oracle price | A higher oracle means bonders pay more LP per FIRE, so the treasury fills faster |
| Treasury | Keeps every bonded LP permanently | A bigger treasury raises the floor price |
| Redeemers | Burn FIRE for a proportional slice of treasury LP | The floor guard kicks in, so bonding cheaply gets harder |

Read it as a loop: more long-term stakers raise the oracle, a higher oracle makes bonders pay more LP, more LP raises the floor, and a higher floor both protects FIRE holders and clamps how cheaply the next bonder can buy in. Committed liquidity raises the floor, the floor protects holders, and emission stays metered by genuine long-term commitment.

## Risks

| Risk | What it means for you |
| --- | --- |
| **Bootstrap** | Early on there is little locked LP, so the oracle is low and FIRE is very cheap until long-term commitment grows |
| **Empty treasury at the start** | The floor price begins at 0 and only rises as bonders deposit LP |
| **Lock illiquidity** | Locked LP cannot be withdrawn before expiry. Split into wLP if you need partial flexibility |
| **Block time variance** | Every duration here assumes Bitcoin's roughly 10-minute average block. Real elapsed time drifts |

## Tips

- **Match your lock to your conviction.** Longer locks earn proportionally more, but you cannot unwind early.
- **Use Split if you need the liquidity back.** Keep the FIRE yield on the NFT and trade the wLP.
- **Bonding is not staking.** Bonding gives you FIRE upfront and your LP is gone for good. Staking returns your LP plus rewards.
- **Watch the halving.** Emission halves every 105,000 blocks, so early epochs pay the most.
- **Treasury growth is floor growth.** The more LP that arrives through bonding, the stronger the redemption floor.

## Next steps

- [Pools & Liquidity](./pools-liquidity): get the DIESEL / frBTC liquidity you stake here.
- [Tokens & Economics](../start-here/key-concepts): where FIRE fits with frBTC and DIESEL.
