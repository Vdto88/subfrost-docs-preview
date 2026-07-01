---
title: 包装与解包 BTC
sidebar_label: 包装与解包 BTC
sidebar_position: 2
description: 将你的 Bitcoin 转换为 frBTC 并按 1:1 换回，全程无需离开 Bitcoin。
---

# 包装与解包 BTC

**frBTC** 是可编程化的 Bitcoin：一种由真实 BTC 按 1:1 支撑、可与链上应用交互并原生结算于 Bitcoin 的代币。包装（Wrapping）是获得 frBTC 的方式；解包（Unwrapping）则会将其转换回原生 BTC。

## 包装（BTC 转 frBTC）

包装会锁定你的 BTC，并在同一步骤中铸造等量的 frBTC。这是一个 **1:1 转换**：1 个 BTC 兑换 1 个 frBTC。包装是即时完成的。

在实际使用中，你很少需要手动包装。当你从 BTC 开始进行[交换](./swap)时，应用会在一笔原子交易中完成包装为 frBTC 并执行交换的全部过程。包装过程在幕后自动完成。

## 解包（frBTC 转 BTC）

解包会销毁你的 frBTC，并将对应的原生 BTC 释放归还给你。与包装不同，解包需要经过托管该 Bitcoin 的分布式签名者群体授权（没有任何单一方能够单独控制）。这种托管方式的具体原理，参见 [What is SUBFROST（什么是 SUBFROST）](../start-here/what-is-subfrost)。

在协议发送你解包后的 BTC 之前，会有一段简短的安全确认期。

:::info[确认解包确认延迟时间]
目前文档中写的是协议发送解包后 BTC 之前有「3 个区块的确认期」。这个数值没有得到内部笔记的佐证。发布前请确认真实数值。来源：`p-subfrost-app__swap.md`。
:::

## 手续费

包装和解包操作会收取少量手续费。

:::info[确认包装/解包手续费]
来源笔记中显示包装和解包统一为 **0.1%**（`p-tokens__frBTC-roadmap.md`、`p-tokens__FUEL-token.md`）。发布前请确认这一数值是否仍然准确。
:::

## 下一步

- [Swap（交换）](./swap)：将 frBTC 交换为其他 Bitcoin 资产。
- [Pools & Liquidity（资金池与流动性）](./pools-liquidity)：让你的 frBTC 发挥作用。
- [Tokens & Economics（代币与经济模型）](../start-here/key-concepts)：了解 frBTC、DIESEL 和 FIRE 是如何协同运作的。
