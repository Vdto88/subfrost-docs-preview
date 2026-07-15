---
title: Wallets
sidebar_label: Wallets
sidebar_position: 1
description: Create or connect a Bitcoin wallet for SUBFROST, manage your balances and UTXOs, and send and receive BTC.
---

# Wallets

To use SUBFROST you need a Bitcoin wallet. Today the **web app** is the way in, with mobile apps and a browser extension arriving soon.

Your wallet is where you view your assets, manage UTXOs, track transactions, and send and receive BTC.

## Create a new wallet

The web app has a built-in wallet that lives in your browser, so you do not need an extension to get started.

1. Open the **Connect Wallet** menu and choose **Create New Wallet**.
2. Set a strong password (at least 8 characters). You can add a password hint if you plan to back up to Google Drive.
3. **Write down your 12-word recovery phrase** and store it somewhere safe and offline. This phrase is the only way to recover your funds if you lose access.
4. Optionally, back up to Google Drive for convenience.

This wallet is **self-custodial**: the keys live in your browser, and no one else can move your funds.

## Restore an existing wallet

Choose **Restore Wallet** from the **Connect Wallet** menu. You can restore three ways:

- Your **12-word seed phrase**.
- A **keystore file** you exported earlier.
- A **Google Drive backup**, if you made one.

You then set a new password, and your wallet comes back with all of its addresses.

## Connect a wallet you already have

SUBFROST also connects to popular Bitcoin wallets, including **Xverse, OKX, Leather, and Unisat**. Open **Connect Wallet**, pick your provider, and approve the connection in your extension. Your addresses then appear in the app header.

## Keeping your wallet secure

The browser wallet is encrypted with your password, and that password is required to unlock it each session. For backups you have three options:

- Export an **encrypted backup file**.
- **Reveal your seed phrase** (your password is required to do this).
- Back up to **Google Drive**.

:::warning[Keep your seed phrase safe]
Your 12-word seed phrase is the master key to your wallet. Anyone who gets it can take your funds. Never share it, never store it digitally, and never enter it on any website other than SUBFROST.
:::

## Your two addresses

SUBFROST gives you two address types, because different assets and different apps expect different formats.

| Address type | Format | What it is for |
|---|---|---|
| **Taproot** | `bc1p...` | Alkanes, Runes, BRC20s, Ordinals |
| **Native SegWit** | `bc1q...` | Sending and receiving BTC |

Both appear in the wallet header with copy buttons. Some exchanges and apps accept only one of the two formats, so having both means you can always receive funds.

Your wallet is organized into four tabs.

## Balances

- **Bitcoin balance.** Your total BTC, with its value in USD.
- **Spendable BTC.** The portion you can freely transact with.
- **Unspendable (with assets).** BTC sitting in coins that carry inscriptions or tokens, so it is not freely spendable.
- **Address breakdown.** How your balance splits across Native SegWit, Taproot, and pending transactions.
- **Protorune assets.** Alkanes and similar tokens (Protorunes are the Bitcoin metaprotocol standard these tokens are issued under).
- **Inscription assets.** BRC20 and other inscription-based tokens.

## UTXO management

Bitcoin does not work like a bank balance. Your funds are a set of individual coins called UTXOs (Unspent Transaction Outputs), and this tab lets you control exactly which ones you spend.

You can filter your UTXOs by address type (Native SegWit or Taproot) or by asset type (Runes, tokens, or inscriptions), and act on them:

| Action | What it does |
|---|---|
| **Freeze** | Marks a UTXO as off limits so it is never spent by accident |
| **Unfreeze** | Makes a frozen UTXO spendable again |
| **Split** | Separates an inscription from the BTC attached to it, so you can spend the BTC and keep the inscription |

:::tip[Protect your valuables]
If you are using your Taproot address for collectibles, freeze the UTXOs holding rare inscriptions so you never spend them as transaction fees. See [Safety](./safety) for the fuller picture.
:::

## Transaction history

Every transaction from your wallet, with:

- **Status.** Confirmed or pending.
- **Transaction ID.** Links out to a block explorer for the full record.
- **Date and block confirmation.**
- **Fee paid.**
- **Expandable details.** All inputs and outputs of the transaction.

## Settings

- **Network.** Choose which Bitcoin network your wallet points at (Mainnet, Signet, or Regtest).
- **HD wallet derivation.** View your active addresses and configure how they are derived.
- **Security and backup.** Export backups and manage your seed phrase.

:::info[Confirm which networks end users actually see]
The existing docs present Mainnet, Signet, and Regtest as a user-facing choice in wallet settings. Regtest is a local development network, so offering it to end users looks like a development build that leaked into public docs. Confirm whether end users really see Signet and Regtest, or whether those are staging and internal builds only. If they are staging-only, this section should document Mainnet alone.
:::

## Sending Bitcoin

To send BTC you provide:

1. **The recipient address.** All Bitcoin address formats are supported.
2. **The amount**, in BTC.
3. **The fee rate**: Slow, Medium, Fast, or Custom.

Review the details, then confirm. Your wallet signs the transaction and broadcasts it.

:::warning[Check unusually high fees]
The app warns you when your fee looks unusually high. Always double-check before confirming a large transaction.
:::

### Advanced: manual UTXO selection

By default, SUBFROST picks the UTXOs to spend from your Native SegWit address. You can turn auto-select off and choose the inputs yourself, from either your SegWit or your Taproot address. This is worth doing when you want to protect your privacy, consolidate small coins, or avoid spending a specific coin.

## Receiving Bitcoin

The receive screen gives you a **QR code** to scan with any mobile wallet, your **full address** with a copy button, and a **Bitcoin URL** that opens the payment directly in a mobile wallet.

:::warning[Before you share your address]
Send only Bitcoin to this address. Verify the address is correct before sending anything to it, and be aware that the address can be reused, so an old copy of it still works.
:::

## Mobile and browser extension (coming soon)

SUBFROST is built mobile-first, and native clients are on the way.

- **Android.** Available now through SUBFROST's own F-Droid repository. It is the most complete client today. A Google Play Store listing is coming.
- **iOS.** In review for the App Store.
- **Browser extension (Chrome and Firefox).** In active development, working toward feature parity with the mobile app.

We will publish full setup guides for each of these when they launch officially. Until then, use the web app above.

:::info[Android install details]
Confirm the exact, publishable F-Droid install link (and a QR code) before this ships, and the wording the team wants for "available now via F-Droid" vs the store launches.
:::

## Next steps

- [Wrap and Unwrap BTC](./wrap-unwrap-frbtc): turn your Bitcoin into frBTC.
- [Swap](./swap): trade Bitcoin assets.
- [Safety](./safety): keep your Ordinals safe.
