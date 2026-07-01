---
title: 交换
sidebar_label: 交换
sidebar_position: 3
description: 在 SUBFROST 上交易 Bitcoin 资产，原生结算于 Bitcoin。
---

# 交换

交换（Swapping）让你可以针对共享流动性池，在 Bitcoin 资产（BTC、frBTC 及其他 Alkanes 代币）之间进行交易，全部原生结算在 Bitcoin L1 上。如果你从 BTC 开始交换，应用会自动为你将其包装为 frBTC（参见 [Wrap & Unwrap（包装与解包）](./wrap-unwrap-frbtc)）。

## 发起一笔交换

1. **选择代币。** 选择你要「发送（You Send）」的代币，以及你想要「接收（You Receive）」的代币。
2. **输入金额。** 直接输入数值，或使用快捷按钮：25%、50%、75% 或 Max（全部余额）。
3. **核对详情。** 在确认之前，你会看到兑换汇率、交换路径、最小可接收数量、截止时间（以区块数计）、你的滑点容忍度，以及矿工费率。
4. **确认并签名。** 点击 **Swap**，然后用你已连接的钱包批准该交易。

:::tip 从小额开始
如果你刚接触这个平台，建议先进行一笔小额交换，熟悉整个流程后再操作更大的金额。
:::

## 交换路径

- **直接路径（Direct）。** 两种代币共享同一个资金池，交换只需一跳。
- **多跳路径（Multi-hop）。** 不存在直接资金池时，交换会通过一个中间代币（例如 frBTC 或 DIESEL）路由，以获得最优价格。
- **包装 / 解包（Wrap / Unwrap）。** BTC 与 frBTC 之间是 1:1 转换，而非市场交易。

## 目前可交换的资产

目前你可以在 **BTC 与 Bitcoin 原生资产**（frBTC 及其他 Alkanes 代币）之间进行交换，包括换算为美元价值。

:::info[跨链交换为规划中功能，尚未上线]
目前文档中将跨链交换到 USDT、SOL、ZEC、ETH 等资产列为已可用功能。但实际上，目前只有 Bitcoin 原生交换（包括 BTC 兑换为美元价值）已确认上线；Bitcoin 原生稳定币（frUSD）和跨链路径仍处于**规划中**。请将这些内容明确标注为「即将推出」，并对照应用核实当前已上线的资产范围。来源：`p-subfrost-app__swap.md`（Highlights）、`Updates/_index.md`（frUSD 优先级）、`Diagnostico-docs.md`（第 287 行）。
:::

## 下一步

- [Pools & Liquidity（资金池与流动性）](./pools-liquidity)：通过提供流动性赚取手续费。
- [FIRE Vault](./fire-vault)：质押并获得收益。
