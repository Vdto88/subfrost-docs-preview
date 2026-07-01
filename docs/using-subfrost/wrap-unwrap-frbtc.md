---
title: Wrap & Unwrap BTC
sidebar_label: Wrap & Unwrap BTC
sidebar_position: 2
description: Turn your Bitcoin into frBTC and back, 1:1, without leaving Bitcoin.
---

# Wrap & Unwrap BTC

**frBTC** is your Bitcoin made programmable: a token backed 1:1 by real BTC that works with on-chain apps and settles natively on Bitcoin. Wrapping is how you get frBTC; unwrapping turns it back into native BTC.

## Wrapping (BTC to frBTC)

Wrapping locks your BTC and mints an equal amount of frBTC in the same step. It is a **1:1 conversion**: 1 BTC in gives you 1 frBTC. Wrapping is instant.

In practice you rarely wrap by hand. When you [swap](./swap) starting from BTC, the app wraps to frBTC and performs the swap in a single, atomic transaction. The wrapping happens behind the scenes.

## Unwrapping (frBTC to BTC)

Unwrapping burns your frBTC and releases the underlying native BTC back to you. Unlike wrapping, unwrapping is authorized by the distributed group of signers that custodies the Bitcoin (no single party controls it). See [What is SUBFROST](../start-here/what-is-subfrost) for how that custody works.

There is a short safety confirmation period before the protocol sends your unwrapped BTC.

:::info[Confirm the unwrap confirmation delay]
The current docs state a "3-block confirmation period" before the protocol sends the unwrapped BTC. This number is not corroborated by internal notes. Confirm the real value before publishing. Source: `p-subfrost-app__swap.md`.
:::

## Fees

A small fee is charged on wrap and unwrap operations.

:::info[Confirm the wrap/unwrap fee]
Source notes list **0.1%** across wrap and unwrap (`p-tokens__frBTC-roadmap.md`, `p-tokens__FUEL-token.md`). Confirm this is still current before publishing.
:::

## Next steps

- [Swap](./swap): trade frBTC for other Bitcoin assets.
- [Pools & Liquidity](./pools-liquidity): put your frBTC to work.
- [Tokens & Economics](../start-here/key-concepts): learn how frBTC, DIESEL, and FIRE fit together.
