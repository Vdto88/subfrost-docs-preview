---
title: Connecting a wallet
sidebar_label: Connecting a wallet
sidebar_position: 6
description: Let a web app request signatures from a SUBFROST wallet, through the injected provider or remote signing.
---

# Connecting a wallet

A web app never holds the user's keys. To do anything that costs money or moves assets, it asks a wallet to sign. On SUBFROST there are two ways to reach that wallet, depending on where the user is.

## Two connection paths

- **Injected provider.** When the app runs somewhere a wallet is already present, a browser extension, or the in-app browser of the mobile wallet, the wallet injects a provider object the page can call directly. This is the smoothest path when it is available.
- **Remote signing.** When the user is on a desktop browser with no wallet present, the app pairs with the wallet on the user's phone over an encrypted relay. The app shows a QR code, the phone scans it, and from then on the app sends sign requests to the phone, which prompts the user for each one. This is documented in full on the [WalletConnect](../api-reference/guides/walletconnect) reference page.

Both paths expose the same two operations that matter: **sign a PSBT** (to authorize a Bitcoin transaction) and **sign a message** (to prove control of an address). The app builds the transaction or message, the wallet approves and signs, the app broadcasts.

## The injected provider

When a wallet is present, it exposes a provider on the page. The app detects it, asks for the user's accounts, and then requests signatures:

```javascript
// Detect the injected provider
const subfrost = window.subfrost;
if (!subfrost) {
  // No wallet in this context, fall back to remote signing (QR pairing)
}

// Request the user's addresses (prompts the user to connect)
const accounts = await subfrost.getAccounts();

// Ask the wallet to sign a PSBT, the user approves in the wallet
const signedPsbtHex = await subfrost.signPsbt(unsignedPsbtHex);

// Ask the wallet to sign a message (proof of address control)
const signature = await subfrost.signMessage('Authorize this action', accounts[0]);
```

:::info[Injected provider surface is being finalized]
This page shows the conceptual shape of the injected provider. The exact global name and method set will be documented once the team confirms what is public. Until then, treat the `window.subfrost` example here as illustrative, and rely on the remote-signing (WalletConnect) surface, which is documented and stable, for a firm integration target.
:::

## Remote signing (QR pairing)

When there is no injected provider, pair with the mobile wallet over the relay. The app renders a pairing QR, the phone scans it, and a session is established. Requests and responses are end-to-end encrypted; the relay only forwards ciphertext, and every request is approved on the phone.

The client library and the full protocol (pairing URI, envelope format, security model) are on the [WalletConnect](../api-reference/guides/walletconnect) page.

## Where to go next

- [WalletConnect](../api-reference/guides/walletconnect): the remote-signing protocol in detail.
- [Wrapping frBTC](./wrapping-frbtc): a first transaction to sign.
- [Safety](../using-subfrost/safety): the fresh-wallet habit for Alkanes.
