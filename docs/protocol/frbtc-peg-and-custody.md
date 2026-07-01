---
title: frBTC Peg & Custody
sidebar_label: frBTC Peg & Custody
sidebar_position: 3
description: How frBTC stays backed 1:1 by real BTC, secured by threshold signing.
---

# frBTC Peg & Custody

**frBTC** is backed 1:1 by real Bitcoin. This page explains how that backing is held and how the peg stays honest without a single custodian.

## The 1:1 peg

Every frBTC in circulation corresponds to one BTC locked in custody.

- **Wrapping** locks BTC and mints an equal amount of frBTC, 1:1.
- **Unwrapping** burns frBTC and releases the underlying BTC back to the redeemer.

Because the Alkanes contract records every wrap and burn (see [Alkanes Protocol](./alkanes)), the amount of frBTC and the amount of BTC held always track each other.

## Distributed custody with FROST and ROAST

The BTC that backs frBTC is held at a single Bitcoin address, but no single party controls that address. The key is shared across a group of signers using two threshold-signature schemes:

- **FROST** (Flexible Round-Optimized Schnorr Threshold)
- **ROAST** (Robust Asynchronous Schnorr Threshold)

These let a large, dynamic set of signers collectively produce a single Schnorr signature, without any individual signer ever holding the full private key. The key is generated through a **distributed key generation (DKG)** process, so the full key is never assembled in one place, even by a colluding minority below the threshold.

To authorize an unwrap, a **threshold** of signers must cooperate. The group reads the contract state directly to see who burned frBTC and should receive BTC, then collectively signs the payout.

**No single point of failure:** because the full key never exists in one place, a single compromised signer (or a minority group) cannot move the funds. This is a meaningful improvement over traditional federated or centralized peg mechanisms.

The signers coordinate over a peer-to-peer network built on QUIC and libp2p.

## Current phase vs. the plan

:::info[Confirm the signer-set status before publishing]
Describe the honest state: the custody network today is in an early, permissioned phase (a fixed group of signers, with a quorum required to authorize each unwrap), and the roadmap expands this toward a much larger permissionless set (the schemes support signing groups of up to 255 participants). Make clear that the larger permissionless network is planned, not the current scale. Source: `p-tokens__frBTC-roadmap.md` (ALPHA vs. Phase 2), `p-key-components__frost-and-roast.md`.
:::

## Where to go next

- [How SUBFROST Works](./how-subfrost-works): the big picture.
- [The Oracle](./the-oracle): how the protocol reads outside data.
