---
title: Safety
sidebar_label: Safety
sidebar_position: 6
description: Keep your Ordinals, Runes and BRC-20 assets safe when using SUBFROST.
---

# Safety

SUBFROST works with Alkanes tokens on Bitcoin. If you also hold **Ordinals, Runes or BRC-20 assets**, there is one precaution you have to take, and it is not optional.

## Move your non-Alkanes assets to a different wallet

> **Burn risk.** SUBFROST does not index `ord` at this time. You must transfer Ordinals, Runes and BRC-20 assets to a different wallet before interacting with our apps.

Here is why. On Bitcoin, these assets live on a specific coin (a UTXO). SUBFROST cannot see them, so it cannot avoid them: if one of those coins gets spent in the course of ordinary activity, **the asset on it is gone**. There is no recovery and no undo.

So keep two wallets:

- A **dedicated wallet** for SUBFROST: wrapping, swapping, staking.
- A **separate wallet** for your Ordinals, Runes and BRC-20 assets.

With them apart, nothing you do on SUBFROST can reach a coin that carries one.

## Protect your recovery phrase

Your 12-word recovery phrase is the only way to restore a self-custodial wallet. Write it down and store it offline, somewhere safe. Never share it, and never type it into any site other than the wallet's own restore screen.

## Start small

When you are new to the platform, do a small transaction first to get comfortable with the flow before moving larger amounts.

:::info[Should this page mention the in-app split prompt?]
There is a prompt in development that offers to split Ordinals off to a new wallet. It is not mentioned here, since it is not shipped. Say the word when it lands and this page will point to it.
:::

## Next steps

- [Wallets](./wallets): set up your SUBFROST wallet.
