---
title: FIRE Vault
sidebar_label: FIRE Vault
sidebar_position: 5
description: Stake to earn FIRE, or buy FIRE at a discount through bonds.
---

# FIRE Vault

**FIRE** is the SUBFROST rewards token. It rewards the people who provide liquidity to the [DIESEL / frBTC pool](./pools-liquidity), and it is earned two ways: by **staking** your liquidity, or by **bonding**.

## FIRE at a glance

- **Maximum supply:** 2,100,000 FIRE
- **Premine:** 0% (no pre-allocation)
- **Emission split:** 85% to staking, 15% to bonding
- **Decimals:** 8

FIRE emission halves over time, on a schedule aligned with Bitcoin's halvings.

:::info[Confirm the FIRE halving interval]
The current docs state a halving interval of **105,000 blocks (about 2 years)**, "synchronized with Bitcoin halvings," so that every second FIRE halving lands on a Bitcoin halving. Internal notes elsewhere describe FIRE as halving "in sync with Bitcoin" (210,000 blocks). These are reconcilable (105k is twice as fast, so every other FIRE halving coincides with Bitcoin's), but the real deployed value has not been verified against the contract. Confirm `HALVING_INTERVAL` in the FIRE contract before publishing either number. Sources: `sf-subfrost-app-fire-vault.md`, `Diagnostico-docs.md` (l308).
:::

## Staking

Stake your DIESEL / frBTC liquidity to earn a continuous stream of FIRE. You can lock your stake for longer to earn more: a longer lock applies a higher reward multiplier.

| Lock period | Reward multiplier |
| --- | --- |
| No lock | 1.0x |
| 1 week | 1.25x |
| 1 month | 1.5x |
| 3 months | 2.0x |
| 6 months | 2.5x |
| 1 year | 3.0x |

The longer you commit, the larger your share of the staking emissions.

## Bonding

Bonding lets you **buy FIRE at a discount** in exchange for depositing value into the protocol treasury. When you bond, you receive FIRE at a **10% discount** to its staking-based price, vested over about **7 days**.

The bond price is anchored to a floor tied to the treasury's holdings, so it cannot be driven below the value backing it.

## Next steps

- [Pools & Liquidity](./pools-liquidity): get the DIESEL / frBTC liquidity you stake here.
- [Tokens & Economics](../start-here/key-concepts): where FIRE fits with frBTC and DIESEL.
