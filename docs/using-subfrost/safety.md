---
title: Safety
sidebar_label: Safety
sidebar_position: 6
description: Keep your Ordinals and inscriptions safe when using SUBFROST.
---

# Safety

SUBFROST works with Alkanes tokens on Bitcoin. If you also own **Ordinals or inscriptions**, there is one important precaution to take.

## Use a separate wallet for your collectibles

**Do not use the same wallet for SUBFROST activity and for valuable Ordinals or inscriptions.**

On Bitcoin, an inscription lives on a specific coin (a UTXO). If that coin is spent in an ordinary transaction, the inscription can be lost. SUBFROST does not track Ordinals, so it cannot see them and cannot automatically protect them for you.

The safest approach is simple:

- Keep a **dedicated wallet** for SUBFROST (wrapping, swapping, staking).
- Keep your **Ordinals and collectibles in a different wallet**, separate from your SUBFROST activity.

That way, nothing you do on SUBFROST can ever touch a coin that carries an inscription.

## Protect your recovery phrase

Your 12-word recovery phrase is the only way to restore a self-custodial wallet. Write it down and store it offline, somewhere safe. Never share it, and never type it into any site other than the wallet's own restore screen.

## Start small

When you are new to the platform, do a small transaction first to get comfortable with the flow before moving larger amounts.

:::info[Confirm the safety wording and the in-app prompt]
This page is new copy, not a quote from the existing docs. It is based on the internal product rationale: risk of burning an inscription that shares a UTXO with Alkanes, and the fact that SUBFROST does not run an Ordinals indexer. Confirm the exact wording the team wants, and whether to reference the in-app prompt (in development) that offers to split Ordinals off to a new wallet.
:::

## Next steps

- [Wallets](./wallets): set up your SUBFROST wallet.
