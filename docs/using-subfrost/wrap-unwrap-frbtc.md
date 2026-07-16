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

### Why there is a wait

Your BTC arrives after **3 to 7 block confirmations**. The exact number moves with fee-rate volatility, so treat it as a range rather than a fixed number.

The wait exists to protect the reserve from a **Bitcoin reorg**, and the reason is worth understanding, because it is the kind of thing that sounds like caution and is actually arithmetic:

Suppose there were no wait, and your frBTC became BTC the instant you unwrapped. Now Bitcoin reorgs away the last block. The signers already agreed to the unwrap and paid out, but the burn of your frBTC was undone by the reorg. You would end up holding **both** the frBTC and the BTC, and the reserve would be short.

Waiting a few blocks closes that window. A reorg deep enough to reach past 3 to 7 blocks is prohibitively expensive to pull off, so that depth is enough.

## Fees

Wrapping and unwrapping each charge **0.1%**, and the rate is the same in both directions. Wrap 1 BTC and you receive 0.9990 frBTC; unwrap 1 frBTC and you receive 0.9990 BTC.

The fee is not fixed in the contract's code. It is an on-chain parameter that the protocol can change, so treat 0.1% as the rate in force today rather than a permanent guarantee. The app always quotes you the exact amount you will receive before you confirm.

:::info[Confirm 0.1% is still the live rate]
0.1% is what the app applies on mainnet, and the wallet code recorded it as the mainnet value in May 2026. Because it is a governable parameter rather than a constant, confirm it has not moved since, and tell us if you would rather this page describe the mechanism without naming a rate that can change.
:::

## Next steps

- [Swap](./swap): trade frBTC for other Bitcoin assets.
- [Pools & Liquidity](./pools-liquidity): put your frBTC to work.
- [Tokens & Economics](../start-here/key-concepts): learn how frBTC, DIESEL, and FIRE fit together.
