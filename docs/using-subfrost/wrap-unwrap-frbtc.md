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

:::info[How many confirmations does an unwrap wait for?]
The app itself gives two different answers. Some screens say the BTC arrives after **3 to 7 block confirmations**, and others say **3 block confirmations**. Nothing in the protocol fixes this number: the wait is how long the signer group takes to release the BTC, which is an operational matter rather than a contract rule. Settle on one number, correct whichever app strings are wrong, and this page will state it.
:::

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
