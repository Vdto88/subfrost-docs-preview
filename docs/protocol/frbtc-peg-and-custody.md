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

Custody today is held by **nine signers**, and the network is permissioned: a quorum of that fixed group authorizes each unwrap, and the signers are not yet publicly identified.

The path from here has three steps:

1. **Identifiable signers.** The keys move as needed so that every signer is publicly identifiable.
2. **A larger set.** The signer set expands beyond today's nine.
3. **Permissionless staking.** Participation opens up, so the set stops being a fixed group.

The schemes underneath support signing groups of up to 255 participants, so the ceiling is far above the current nine. But nine is what is live. The larger permissionless network is planned, and nothing here should be read as saying it already exists.

## Where to go next

- [How SUBFROST Works](./how-subfrost-works): the big picture.
- [The Oracle](./the-oracle): how the protocol reads outside data.
