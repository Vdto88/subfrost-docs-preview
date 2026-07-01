---
title: What is SUBFROST
sidebar_label: What is SUBFROST
sidebar_position: 1
description: SUBFROST in plain terms. Put your Bitcoin to work in DeFi without handing it to a company and without leaving Bitcoin.
---

# What is SUBFROST

SUBFROST is a way to use your Bitcoin in decentralized finance (DeFi) without handing it to a company and without leaving the Bitcoin blockchain.

Today, if you want to trade your Bitcoin, earn yield on it, or use it the way people use money on Ethereum or Solana, you usually have to send it somewhere else. That means a centralized exchange, or a "wrapped BTC" bridge run by a single custodian on another chain. In both cases you are trusting one party not to lose your coins, freeze them, or misuse them.

SUBFROST replaces that single trusted party with a distributed one.

## The core idea

A group of independent signers collectively holds the Bitcoin that backs the system. They use a method called **threshold signing**, where the key that controls the funds is split across the whole group. No single signer ever holds the full key, so no single party can move the funds on their own. If one signer is compromised, the funds stay safe.

In one sentence: **SUBFROST is a decentralized custodian for Bitcoin.** It runs as a lightweight layer that watches the Bitcoin blockchain and coordinates a ring of signers who lock up real BTC and release it again when you ask.

## How you actually use it

When you put Bitcoin into SUBFROST, you receive **frBTC**, a token that is backed 1:1 by your BTC and settles natively on Bitcoin.

- **Wrapping** your BTC into frBTC is instant.
- **Unwrapping** frBTC back into native BTC is authorized by the distributed group of signers, not by any single person.

With frBTC in hand, you can swap into other Bitcoin assets, provide liquidity, and earn yield, all settled on Bitcoin's base layer. The project sums up its goal in four words: **Bitcoin-native yield, done right.**

## What makes it different

- **You stay on Bitcoin.** SUBFROST is not a separate blockchain or a sidechain. Everything settles on Bitcoin L1.
- **No single custodian.** The Bitcoin that backs frBTC is held by a whole set of signers together, not by one company holding your coins.
- **Keep your exposure.** The idea is simple in spirit: hold Bitcoin, but use it to earn more Bitcoin, passively.

:::info[Signer set: current status vs. the plan]
Confirm the honest live-vs-planned wording before publishing. The custody network is currently in an early, permissioned phase (a fixed group of signers, with a quorum required to authorize each unwrap). The roadmap describes expanding this to a much larger permissionless set of stakers. State clearly that the larger permissionless network is **planned**, so readers do not assume today's decentralization is already at its final scale. Source to reconcile: `p-tokens__frBTC-roadmap.md` (ALPHA vs. Phase 2).
:::

## Where to go next

- **[Why SUBFROST](./why-subfrost):** the problem it solves, and the pieces that make it work.
- **[Get Started in 5 Minutes](./get-started):** pick a wallet, add Bitcoin, make your first swap.
- **[Key Concepts](./key-concepts):** a quick glossary of frBTC, DIESEL, FIRE, and more.
