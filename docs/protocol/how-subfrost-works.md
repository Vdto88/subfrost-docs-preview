---
title: How SUBFROST Works
sidebar_label: How SUBFROST Works
sidebar_position: 1
description: The mechanism behind SUBFROST, distributed custody of Bitcoin coordinated through an Alkanes indexer.
---

# How SUBFROST Works

SUBFROST is a **decentralized custodian for Bitcoin**. It lets you move BTC into a programmable, on-chain form and back again, without trusting a single company to hold your coins, and without leaving Bitcoin.

It works by combining two things that already run on Bitcoin:

1. **An Alkanes metaprotocol contract** that does the accounting, tracking who holds the synthetic asset (frBTC) and who has burned it to redeem native BTC.
2. **A distributed group of signers** that custodies the real BTC and collectively authorizes withdrawals, using threshold signing.

## The two halves

**The metaprotocol handles the bookkeeping.** frBTC is an Alkanes token (see [Alkanes Protocol](./alkanes)). Because the metaprotocol already tracks balances and transfers on Bitcoin, SUBFROST does not need a separate blockchain or a heavy external consensus engine to know who owns what. The contract itself records every wrap and every burn.

**The signer group handles custody.** The BTC that backs frBTC is held at a single Bitcoin address whose key is split across the whole signer set using the FROST and ROAST threshold-signature schemes. No individual signer ever holds the full key. To authorize a withdrawal, a threshold of signers must cooperate. This is covered in [frBTC Peg & Custody](./frbtc-peg-and-custody).

## Wrapping and unwrapping

- **Wrapping (BTC to frBTC) is instant.** When you lock BTC, the metaprotocol mints an equal amount of frBTC to you, 1:1.
- **Unwrapping (frBTC to BTC) goes through the signer group.** When you burn frBTC to redeem, the signers read the contract state directly to see who burned synthetics and should receive Bitcoin, then collectively sign the payout. No single party can move the funds alone.

## Why it stays on Bitcoin

Signers simply run the Alkanes indexer and the SUBFROST software. There is no separate chain to bridge to and no external validator set to trust: the coordination model exists as an extension of the Bitcoin protocol itself. Everything, the synthetic assets and the custody, settles on Bitcoin L1.

This is what makes it different from the usual "wrapped BTC" approach, where a single custodian or a small federation holds the real coins on another chain. Here, custody is distributed across the signer set, and the accounting lives on Bitcoin.

## What SUBFROST is not

- It is **not a separate blockchain** or a sidechain. There is no SUBFROST chain; state settles on Bitcoin.
- It is **not a custodial bridge** with one company holding your coins.

## Where to go next

- [Alkanes Protocol](./alkanes): the smart-contract layer SUBFROST is built on.
- [frBTC Peg & Custody](./frbtc-peg-and-custody): how threshold signing secures the BTC.
- [The Oracle](./the-oracle): how the protocol reads outside prices when it needs them.
