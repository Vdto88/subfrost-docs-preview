---
title: Why SUBFROST
sidebar_label: Why SUBFROST
sidebar_position: 2
description: Bitcoin was not built for apps. SUBFROST brings real DeFi to Bitcoin without giving up custody.
---

# Why SUBFROST

## The problem

Bitcoin is the largest and most secure network in crypto. But its base layer was never designed to run applications. Native BTC does not plug directly into the tools people use elsewhere in DeFi: automated market makers (for swapping), lending markets, or privacy tools.

So anyone who wants to do more than hold Bitcoin has faced two bad options:

1. **Send it to a centralized exchange.** Now a company holds your coins.
2. **Bridge it to another chain as "wrapped BTC".** Now a bridge operator, often a small custodian, holds the real Bitcoin while you hold an IOU on a different network.

Both options mean giving up custody and trusting someone else. As the project puts it: without a trust-minimized custodian, "Bitcoin DeFi" ends up relying on trust-dependent cross-chain alternatives, which is not really Bitcoin DeFi at all.

## The SUBFROST approach

SUBFROST keeps everything on Bitcoin and removes the single trusted custodian.

Instead of one company holding the Bitcoin, a distributed group of signers holds it together through threshold signing (explained in [What is SUBFROST](./what-is-subfrost)). Your BTC is represented on-chain as **frBTC**, backed 1:1, and it lives on the same Bitcoin base layer as everything else. There is no separate chain to bridge to and no separate network to trust.

The result: you keep your exposure to Bitcoin, and you can put it to work.

## The pieces

SUBFROST is built around a few native assets. Here is the short version. The full list is in [Key Concepts](./key-concepts).

- **frBTC: your Bitcoin, made programmable.** frBTC is BTC wrapped 1:1 into a token that works with on-chain apps. It is the entry point to everything else: you wrap BTC to get frBTC, and you can unwrap back to native BTC at any time. It is live today.

- **DIESEL: issuance tied to real Bitcoin.** DIESEL is the protocol's native emission. Every Bitcoin block emits the same amount of DIESEL as it emits new bitcoin, and it halves alongside Bitcoin. In other words, DIESEL's supply is anchored to real Bitcoin block production rather than being printed on a whim. See [DIESEL](../tokens-economics/diesel) for the numbers and for who receives it.

- **FIRE: rewards and governance.** FIRE rewards the people who provide liquidity to the DIESEL/frBTC pool, and it powers staking and bonds. It is how active participants earn a share of the protocol and, over time, help govern it.

For the full picture of how these three assets fit together economically, see [Tokens & Economics](../tokens-economics/overview).

## What is live today vs. planned

Being honest about status matters. A quick snapshot:

- **Live:** wrapping and unwrapping frBTC, and swapping between Bitcoin assets (including BTC to a US-dollar value).
- **Planned:** a Bitcoin-native stablecoin (frUSD), a yield-bearing Bitcoin vault token (dxBTC), the FUEL governance token, cross-chain swaps to assets like ETH, SOL, and ZEC, and the fully permissionless signer network.

## Where to go next

- **[Get Started in 5 Minutes](./get-started):** make your first swap.
- **[Key Concepts](./key-concepts):** the full glossary.
