---
title: The Oracle
sidebar_label: The Oracle
sidebar_position: 4
description: How SUBFROST brings outside data on-chain in a decentralized way.
---

# The Oracle

Some parts of the protocol need information that does not live on Bitcoin, most importantly **prices**. For example, FIRE bond pricing needs a reference price to work. SUBFROST provides this through a decentralized **oracle**.

## How it works

Rather than trusting a single server to report a value, the oracle runs as a small **distributed group**. Each participant independently reads the relevant external source and the current chain state, and the group must reach agreement before a value is committed on-chain. A single participant cannot dictate the result on its own.

Because the value is agreed by a threshold of the group and posted on-chain, contracts that depend on it (such as the [FIRE](../using-subfrost/fire-vault) bond mechanism) can read a price that is resistant to any one party manipulating it.

## Where it is used

- **FIRE bonds.** The bond price is anchored to an oracle-reported reference, with a floor tied to the protocol treasury, so bonds cannot be sold below the value backing them.

:::info[Confirm the oracle detail level for public docs]
This page is intentionally generic. Confirm how much of the oracle's mechanism to describe publicly (the agreement threshold, the exact signals it reads, how often it posts). Keep internal component and contract names out of the public copy. Sources: `Projetos/Lending/Oracle.md`, `Protocolo/FIRE-bonds-e-governanca.md`.
:::

## Where to go next

- [FIRE Vault](../using-subfrost/fire-vault): where the oracle price is used.
- [How SUBFROST Works](./how-subfrost-works): the big picture.
