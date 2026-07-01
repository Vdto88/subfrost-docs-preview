---
title: Proof of Stake
sidebar_label: Proof of Stake
sidebar_position: 6
description: How the SUBFROST signer network is meant to be secured by economic stake, and what is live versus planned today.
---

# Proof of Stake

SUBFROST is moving toward a model where the network that custodies BTC is secured by **economic stake**. This page describes the idea and, honestly, where it stands. Custody today runs in an early, permissioned phase (see [frBTC Peg & Custody](./frbtc-peg-and-custody)); open, stake-based participation is planned, not yet the live scale.

## Why stake

For custody to become permissionless, anyone should be able to help hold the keys that back frBTC. Economic stake is what keeps that honest without a central gatekeeper:

- To join the signing group, a participant locks up value.
- Their weight in the group is proportional to what they have locked, so influence tracks skin in the game.
- Misbehavior can cost them that stake, which makes attacking the protocol expensive.

This aligns the people securing the peg with the long-term health of the protocol, rather than relying on a fixed, trusted set.

## What signers do

Signers are the participants who take part in threshold signing (see [Signing and Keys](./signing-and-keys)). Their job is to help authorize withdrawals: when someone burns frBTC to redeem BTC, a threshold of signers must cooperate to sign the payout. A larger, well-incentivized signer set makes that custody harder to capture.

## Rewards and penalties

The intended economics are straightforward:

- **Rewards.** Signers earn a share of the protocol's fees for participating reliably.
- **Penalties.** A signer that acts against the protocol can lose part of their stake, which deters attacks.

## Where this stands

:::info[Confirm the staking asset and mechanics before publishing]
Custody today is permissioned: a fixed signer set with a quorum, not open staking. The open, stake-weighted model on this page is planned (Phase 2) and its parameters are not settled. The older docs described staking `FUEL` plus `frBTC`, a liquid-staking receipt token, and slashing, but staking in production today is DIESEL-based. Confirm the real asset, how weight is computed, whether a liquid-staking receipt and slashing apply, and the rollout, against the contracts before publishing. Sources: `Diagnostico-docs.md` §10 C, `p-tokens__frBTC-roadmap.md`.
:::

## Where to go next

- [frBTC Peg & Custody](./frbtc-peg-and-custody): the custody model this secures.
- [Signing and Keys](./signing-and-keys): how the group actually signs.
- [Tokens & Economics](../tokens-economics/overview): the token side of the protocol.
