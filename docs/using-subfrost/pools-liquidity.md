---
title: Pools & Liquidity
sidebar_label: Pools & Liquidity
sidebar_position: 4
description: Provide liquidity to SUBFROST pools and earn a share of swap fees.
---

# Pools & Liquidity

Every swap on SUBFROST trades against a **liquidity pool**: a shared reserve of two tokens that anyone can contribute to. When you provide liquidity, you deposit a pair of tokens into a pool and earn a share of the fees that swaps through that pool generate.

## How it works

- A pool holds two assets (for example DIESEL and frBTC). The price adjusts automatically as people trade, so you always have a counterparty.
- When you add liquidity, you receive an **LP position** representing your share of the pool.
- As swaps happen, they pay a fee that accrues to the pool, so your position grows over time.
- You can withdraw your liquidity (plus accrued fees) at any time by redeeming your LP position.

## The swap fee, and what you earn

A swap pays **1% by default**, split two ways:

| Share | Rate | Goes to |
| --- | --- | --- |
| Liquidity providers | 0.8% | the pool, so it accrues to your position |
| Protocol | 0.2% | the protocol |

So **as a liquidity provider you earn 0.8% of the volume that trades through your pool**, in proportion to your share of it.

The 1% is a default rather than a law: the fee is set per pool, and the app reads the live rate from the pool itself when it quotes you. A given pool can be configured differently, so the rate you see quoted is the one that applies.

:::info[Confirm 1% (0.8% LP / 0.2% protocol) is the intended public rate]
These are the defaults in the pool contract, and the app mirrors them exactly. Two things to confirm: that this is the rate you want documented, and whether any production pool is configured away from the 1% default. Note the older docs attached "1%, 0.8%, 0.2%" to wrap and unwrap instead, which is wrong: wrap and unwrap charge 0.1%. The figure was right, the product was not.
:::

## Providing liquidity

1. Open the **Pools** section and choose a pool (or create a position in one).
2. Deposit the two tokens in the pool's ratio.
3. Confirm and sign. You now hold an LP position and start earning a share of that pool's swap fees.

## The DIESEL / frBTC pool

The **DIESEL / frBTC** pool is central to the SUBFROST economy: liquidity providers in this pool are also rewarded in **[FIRE](./fire-vault)**, the protocol's rewards token. See the FIRE Vault guide for how staking and bonds build on top of this.

:::info[Confirm the add and withdraw flow against the app]
The swap fee is now documented above. What is still generic here is the step-by-step: confirm the exact deposit and withdraw flow in the app, and whether an LP position is represented in a way the user needs to know about.
:::

## Next steps

- [FIRE Vault](./fire-vault): stake your LP and earn FIRE, or buy FIRE through bonds.
- [Swap](./swap): the other side of the pool.
