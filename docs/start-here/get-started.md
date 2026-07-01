---
title: Get Started in 5 Minutes
sidebar_label: Get Started in 5 Minutes
sidebar_position: 3
description: Pick a wallet, add Bitcoin, and make your first swap on SUBFROST.
---

# Get Started in 5 Minutes

This guide takes you from zero to your first swap. You will pick how to access SUBFROST, set up a wallet, and swap some Bitcoin.

## Step 1: Open SUBFROST

The easiest way to start today is the **web app**. Native clients are on the way:

- **Web app.** Available now, and the recommended way to get started right now.
- **Android.** Available now through SUBFROST's own F-Droid repository, and it is the most complete client. A Google Play Store listing is coming.
- **iOS.** Coming soon (in App Store review).
- **Browser extension (Chrome and Firefox).** Coming soon.

For this guide we will use the web app. See [Wallets](../using-subfrost/wallets) for details on each option.

## Step 2: Set up a wallet

You have two paths. Either works.

### Create a new SUBFROST wallet (recommended for newcomers)

1. Open the Connect Wallet menu and choose **Create New Wallet**.
2. Set a strong password (at least 8 characters).
3. **Write down your 12-word recovery phrase** and store it somewhere safe and offline. This phrase is the only way to recover your funds.
4. Optionally, back up to Google Drive for convenience.

### Or connect a wallet you already have

SUBFROST connects to popular Bitcoin wallets, including **Xverse, OKX, Leather, and Unisat**. Open **Connect Wallet**, pick your provider, and approve the connection.

:::warning[Use a fresh wallet for SUBFROST, separate from your Ordinals]
If you own Ordinals or inscriptions, do not use that same wallet here. On Bitcoin, an inscription lives on a specific coin (UTXO), and if that coin is spent in an ordinary transaction it can be lost. SUBFROST does not track Ordinals, so it cannot automatically protect them. The safest approach is to keep a separate wallet for SUBFROST activity and keep your collectibles somewhere else.

> [!question] This safety guidance is new copy, not a quote from the existing docs. It is based on the internal product rationale (UTXO burn risk; SUBFROST does not index `ord`) in `Ferramentas/_index.md`. Confirm the exact wording the team wants, and whether to reference the in-app "split ordinals to a new wallet" prompt that is in development.
:::

## Step 3: Add Bitcoin

You do not have to wrap your BTC by hand. When you swap starting from BTC, the app wraps your Bitcoin into frBTC and performs the swap in a single, atomic step. The wrapping happens behind the scenes.

If you just want frBTC directly, wrapping is a 1:1 conversion: 1 BTC in gives you 1 frBTC.

## Step 4: Make your first swap

1. **Select your tokens.** Choose what you are swapping **from** (You Send) and what you want to receive (You Receive).
2. **Enter an amount.** Type it in, or use the quick buttons: 25%, 50%, 75%, or Max of your balance.
3. **Review the details.** Before confirming you will see the exchange rate, the swap route, the minimum you will receive, the deadline (in blocks), your slippage tolerance, and the miner fee rate.
4. **Confirm and sign.** Tap Swap, then approve the transaction with your connected wallet.

:::tip[Start small]
If you are new to the platform, do a small swap first to get comfortable with the flow before moving larger amounts.
:::

:::info[Unwrap confirmation delay ("3 blocks")]
When swapping back to native BTC, the current docs state there is a safety confirmation period ("There is a 3-block confirmation period... before the SUBFROST protocol sends the unwrapped BTC", `p-subfrost-app__swap.md`). This number is not corroborated by any internal note. Confirm the real value before repeating it.
:::

## Where to go next

- **[Key Concepts](./key-concepts):** understand frBTC, DIESEL, FIRE, and the rest.
- Explore pools, the FIRE vault, and more in the **Using SUBFROST** guides.
