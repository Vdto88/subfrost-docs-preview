---
title: Wallets
sidebar_label: Wallets
sidebar_position: 1
description: How to set up a wallet for SUBFROST: the web app today, with mobile and browser extension on the way.
---

# Wallets

To use SUBFROST you need a Bitcoin wallet. Today the **web app** is the way in, with mobile apps and a browser extension arriving soon.

## Using the web app (available now)

The web app lets you either create a new self-custodial wallet or connect one you already have.

### Create a new wallet

1. Open the **Connect Wallet** menu and choose **Create New Wallet**.
2. Set a strong password (at least 8 characters).
3. **Write down your 12-word recovery phrase** and store it somewhere safe and offline. This phrase is the only way to recover your funds if you lose access.
4. Optionally, back up to Google Drive for convenience.

This wallet is **self-custodial**: the keys live in your browser, and no one else can move your funds.

### Connect a wallet you already have

SUBFROST also connects to popular Bitcoin wallets, including **Xverse, OKX, Leather, and Unisat**. Open **Connect Wallet**, pick your provider, and approve the connection. Your addresses then appear in the app header.

### Managing your coins

The web app supports SegWit and Taproot addresses and gives you basic UTXO management. If you hold collectibles, see [Safety](./safety) before you start.

## Mobile and browser extension (coming soon)

SUBFROST is built mobile-first, and native clients are on the way.

- **Android.** Available now through SUBFROST's own F-Droid repository. It is the most complete client today. A Google Play Store listing is coming.
- **iOS.** In review for the App Store.
- **Browser extension (Chrome and Firefox).** In active development, working toward feature parity with the mobile app.

We will publish full setup guides for each of these when they launch officially. Until then, use the web app above.

:::info[Android install details]
Confirm the exact, publishable F-Droid install link (and a QR code) before this ships, and the wording the team wants for "available now via F-Droid" vs the store launches. Source: internal app-status notes (`Updates/_index.md`, `Ferramentas/_index.md`).
:::

## Next steps

- [Wrap and Unwrap BTC](./wrap-unwrap-frbtc): turn your Bitcoin into frBTC.
- [Swap](./swap): trade Bitcoin assets.
- [Safety](./safety): keep your Ordinals safe.
