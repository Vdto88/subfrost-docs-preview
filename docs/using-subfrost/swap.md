---
title: Swap
sidebar_label: Swap
sidebar_position: 3
description: Trade Bitcoin assets on SUBFROST, settled natively on Bitcoin.
---

# Swap

Swapping lets you trade between Bitcoin assets (BTC, frBTC, and other Alkanes tokens) against a shared liquidity pool, all settled on Bitcoin L1. If you start from BTC, the app wraps it to frBTC for you automatically (see [Wrap & Unwrap](./wrap-unwrap-frbtc)).

## Make a swap

1. **Select your tokens.** Choose what you are swapping **from** (You Send) and what you want to receive (You Receive).
2. **Enter an amount.** Type it in, or use the quick buttons: 25%, 50%, 75%, or Max of your balance.
3. **Review the details.** Before confirming you will see the exchange rate, the swap route, the minimum you will receive, the deadline (in blocks), your slippage tolerance, and the miner fee rate.
4. **Confirm and sign.** Tap **Swap**, then approve the transaction with your connected wallet.

:::tip Start small
If you are new to the platform, do a small swap first to get comfortable with the flow before moving larger amounts.
:::

## Swap routes

- **Direct.** Both tokens share a pool, so the swap is a single hop.
- **Multi-hop.** No direct pool exists, so the swap routes through an intermediate token (for example through frBTC or DIESEL) for the best price.
- **Wrap / Unwrap.** BTC to frBTC and back is a 1:1 conversion, not a market trade.

## What you can swap

Today you can swap **between BTC and Bitcoin-native assets** (frBTC and other Alkanes tokens), including converting to a US-dollar value.

:::info[Cross-chain swaps are planned, not live]
The current docs list cross-chain swaps to assets like USDT, SOL, ZEC, and ETH as if available. In reality only Bitcoin-native swaps (including BTC to a US-dollar value) are confirmed live; the Bitcoin-native stablecoin (frUSD) and cross-chain routes are **planned**. Mark these clearly as coming soon, and confirm the current live set against the app. Sources: `p-subfrost-app__swap.md` (Highlights), `Updates/_index.md` (frUSD priority), `Diagnostico-docs.md` (l287).
:::

## Next steps

- [Pools & Liquidity](./pools-liquidity): earn fees by providing liquidity.
- [FIRE Vault](./fire-vault): stake and earn.
