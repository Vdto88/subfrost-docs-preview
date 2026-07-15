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

FIRE emission halves over time, on a schedule aligned with Bitcoin's halvings.

:::info[Confirm the FIRE halving interval]
The current docs state a halving interval of **105,000 blocks (about 2 years)**, "synchronized with Bitcoin halvings," so that every second FIRE halving lands on a Bitcoin halving. Internal notes elsewhere describe FIRE as halving "in sync with Bitcoin" (210,000 blocks). These are reconcilable (105k is twice as fast, so every other FIRE halving coincides with Bitcoin's), but the real deployed value has not been verified against the contract. Confirm `HALVING_INTERVAL` in the FIRE contract before publishing either number.
:::

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

Each epoch emits exactly half of the one before it, so the total emission is an infinite geometric series. It converges on the supply cap:

```
total = epoch_0_emission x sum(1/2^i) for i = 0..infinity
      = epoch_0_emission x 2
      = 1,050,000 x 2
      = 2,100,000 FIRE = maximum supply
```

The schedule itself guarantees the cap. Nothing needs to be held back at genesis to make the numbers work, which is why the premine is 0%.

:::info[Confirm the activation block and the first halving against the deployed contract]
The activation block (950,420) and the first halving (block 1,050,000) come from an older draft with no cited source. They are consistent with a global grid: 1,050,000 is 105,000 x 10, and it is also Bitcoin halving #5 (210,000 x 5), so the grid explanation holds and 950,420 + 105,000 = 1,055,420 is simply the wrong way to compute the boundary. But that makes the first live epoch **99,580 blocks long, not 105,000**, so the very first epoch is truncated and emits about 995,800 FIRE instead of 1,050,000. If that is real, total emission converges near 2,045,800 FIRE rather than exactly 2,100,000, and the cap is never quite reached. Confirm against the deployed contract: (a) the activation block, (b) whether epoch 0 is truncated by activation or the schedule starts a fresh 105,000-block epoch at activation, and (c) whether the geometric-convergence claim should be stated as an exact identity or as an upper bound.
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
The bond price oracle counts **only LP staked with a lock of 6 months or longer**. Short-term stakers still earn FIRE, but they do not move the oracle. What bonders pay is set by the people who committed for the long term.
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

Bonding is for people who want FIRE **now** instead of earning it over time. You hand the protocol LP tokens permanently, and you get FIRE at a **10% discount** to the staking oracle price, vested over about **7 days** (1,050 blocks).

The pricing is fully transparent:

```
oracle_price    = LP_locked_6mo_or_more x 10^8 / annual_FIRE_emission

effective_price = oracle_price x (10000 - discount_bps) / 10000

bond_price      = max(effective_price, floor_price)

FIRE_out        = LP_in x 10^8 / bond_price
```

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

## Redemption and the price floor

Any FIRE holder can burn FIRE for a proportional share of the treasury's LP backing:

```
floor_price = total_treasury_LP / total_FIRE_supply
```

This is a hard floor, and it scales with the treasury. Every bond deposits LP that never leaves, so the floor only moves in one direction over time as bonding activity grows.

### Where the market price sits

Any off-platform price (an AMM swap, an OTC trade) is bounded on both sides by protocol activity:

| If the market price is | Then | So the price |
| --- | --- | --- |
| Below the year-equivalent staking yield | Buying is cheaper than earning, so staking slows and dilution drops | Rises |
| Above the year-equivalent staking yield | Staking LP and selling FIRE is profitable, so emission gets absorbed | Falls toward equilibrium |
| Below the floor | Buy FIRE, redeem for treasury LP at the floor, take the difference | Rises to at least the floor |

The floor is a hard lower bound. The staking yield is a soft upper bound.

## The two reference prices

Outside of market quotes, FIRE has two distinct "prices," and they answer different questions.

| Price | Formula | What it means |
| --- | --- | --- |
| **Oracle** | `locked_LP / annual_emission` | What a 6-month staker earns in a year |
| **Floor** | `treasury_LP / total_supply` | What a redeemer gets for burning FIRE |

:::info[A UI that shows a "discount" must say which reference price it is discounting from]
Oracle and floor are not interchangeable, and a discount against one is not a discount against the other. Label it. We also advise against using the AMM market price as the reference.
:::

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
