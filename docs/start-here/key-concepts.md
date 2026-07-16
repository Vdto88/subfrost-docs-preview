---
title: Key Concepts
sidebar_label: Key Concepts
sidebar_position: 4
description: A quick glossary of SUBFROST covering frBTC, DIESEL, FIRE, FUEL, dxBTC, the AMM, and the tech underneath.
---

# Key Concepts

A short glossary to get you oriented. Each item links to a deeper page where one exists. Items marked **Planned** are not live yet.

## The assets

- **frBTC.** Your Bitcoin, made programmable. frBTC is BTC wrapped 1:1 into a token that works with on-chain apps and settles natively on Bitcoin. Wrap BTC to get it; unwrap to get native BTC back. **Live.**

- **DIESEL.** The protocol's native emission. Every Bitcoin block emits the same amount of DIESEL as it emits new bitcoin (3.125 today), halving alongside Bitcoin, so its issuance is tied to real Bitcoin block production rather than to demand. **Live.**

- **FIRE.** The rewards and governance token. FIRE rewards people who provide liquidity to the DIESEL/frBTC pool, and it powers staking and bonds. **Live** (staking and bonds are running).

- **dxBTC.** Yield-bearing Bitcoin. You stake BTC and receive dxBTC; behind the scenes your Bitcoin is put to work in yield strategies, and the yield accrues back in Bitcoin terms. **Planned.**

- **FUEL.** The governance token for the protocol's treasury and parameters (for example, wrap/unwrap fees and upgrades). **Planned** (its tokenomics are not yet public). Capitalization is what separates the two "fuels" you will meet here: **FUEL** in capitals is always this token, while lowercase **fuel** is the compute budget an Alkanes contract call is allowed to spend, the equivalent of gas elsewhere. See [Alkanes](../protocol/alkanes) for that one.

## How you move between assets

- **The AMM (automated market maker).** A swap works against a shared liquidity pool instead of matching you with another trader. You always have a counterparty, and the price adjusts with supply and demand. This is what powers swaps in the app. **Live.**

The two fees worth knowing, both current rates rather than permanent guarantees:

| Action | Fee | Where it goes |
| --- | --- | --- |
| Swapping | 1% by default | 0.8% to liquidity providers, 0.2% to the protocol |
| Wrapping or unwrapping BTC | 0.1% | the protocol |

The swap fee is set per pool and the app quotes the live rate, so 1% is the default rather than a rule. The wrap fee is an on-chain parameter the protocol can change. See [Swap](../using-subfrost/swap), [Pools & Liquidity](../using-subfrost/pools-liquidity) and [Wrap & Unwrap](../using-subfrost/wrap-unwrap-frbtc).

## What it all runs on

- **Alkanes.** The smart-contract protocol that these tokens live on. Alkanes lets developers run programmable contracts directly on Bitcoin (contracts are written in Rust and compiled to WebAssembly), inheriting Bitcoin's security instead of relying on a separate chain. frBTC, DIESEL, and FIRE are all Alkanes tokens. See the **Protocol** section for the full model.

- **The indexer.** Bitcoin blocks do not "run" contracts on their own. An indexer reads each new block, executes the contract code, and keeps the up-to-date state, which is how balances and other on-chain data are read. When you see your frBTC balance, it comes from the indexer.

:::note[One level deeper]
The Start Here glossary keeps things simple on purpose. Terms like protostone, cellpack, and the exact contract model are covered in the **Protocol** section, and the developer tooling (CLI, SDK, JSON-RPC) is in **Build on SUBFROST** and the **API & SDK Reference**.
:::

## Where to go next

- **[Get Started in 5 Minutes](./get-started):** if you have not made your first swap yet.
- **Tokens & Economics:** the full story on frBTC, DIESEL, FIRE, dxBTC, and FUEL.
- **Protocol:** how the custody, signing, and Alkanes model actually work.
