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

## Providing liquidity

1. Open the **Pools** section and choose a pool (or create a position in one).
2. Deposit the two tokens in the pool's ratio.
3. Confirm and sign. You now hold an LP position and start earning a share of that pool's swap fees.

## The DIESEL / frBTC pool

The **DIESEL / frBTC** pool is central to the SUBFROST economy: liquidity providers in this pool are also rewarded in **[FIRE](./fire-vault)**, the protocol's rewards token. See the FIRE Vault guide for how staking and bonds build on top of this.

:::info[Confirm the swap fee and the exact LP mechanics]
Do not publish a specific pool fee until confirmed. Source notes show 0.3% as a generic example fee (`ab-tutorials-amm.md`) and about 1% per hop for multi-hop routing (`Glossario/_index.md`), but the production pool fee is not confirmed. Also confirm the exact LP deposit / withdraw flow in the app before publishing this page. The internal pool implementation name should not appear in public copy.
:::

## Next steps

- [FIRE Vault](./fire-vault): stake your LP and earn FIRE, or buy FIRE through bonds.
- [Swap](./swap): the other side of the pool.
