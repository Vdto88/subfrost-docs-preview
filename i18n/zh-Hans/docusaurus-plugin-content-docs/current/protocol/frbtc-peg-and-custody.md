---
title: frBTC 锚定与托管
sidebar_label: frBTC 锚定与托管
sidebar_position: 3
description: frBTC 如何在门限签名的保护下始终保持 1:1 的真实 BTC 背书。
---

# frBTC 锚定与托管

**frBTC** 由真实比特币按 1:1 背书。本页解释这份背书是如何被持有的，以及锚定关系如何在没有单一托管方的情况下保持诚实。

## 1:1 锚定

流通中的每一枚 frBTC，都对应着一枚被托管锁定的 BTC。

- **包装（Wrapping）** 会锁定 BTC，并按 1:1 铸造出等量的 frBTC。
- **解包（Unwrapping）** 会销毁 frBTC，并把对应的 BTC 释放回赎回者手中。

由于 Alkanes 合约会记录每一次包装和销毁（参见 [Alkanes 协议](./alkanes)），frBTC 的数量与所持有的 BTC 数量始终保持一致。

## 使用 FROST 和 ROAST 的分布式托管

支撑 frBTC 的 BTC 被存放在单一的比特币地址上，但没有任何一方单独控制这个地址。它的密钥通过两种门限签名方案被分散到一组签名者手中：

- **FROST**（Flexible Round-Optimized Schnorr Threshold，灵活轮次优化 Schnorr 门限方案）
- **ROAST**（Robust Asynchronous Schnorr Threshold，稳健异步 Schnorr 门限方案）

这两种方案让一个庞大且动态变化的签名者集合能够共同生成一个单一的 Schnorr 签名，而任何一个签名者都不会单独掌握完整的私钥。密钥是通过**分布式密钥生成（DKG）**过程生成的，因此完整的密钥永远不会在任何地方被拼凑出来，即便是低于门限的合谋少数人也做不到。

要授权一次解包，必须有**达到门限数量**的签名者共同协作。该签名者群体直接读取合约状态，以确定谁销毁了 frBTC、应当收到 BTC，然后共同为这笔付款签名。

**没有单点故障：** 由于完整的密钥从未在任何地方存在过，单个被攻陷的签名者（或低于门限的一小撮人）无法转移资金。相比传统的联盟制或中心化锚定机制，这是一项实质性的改进。

签名者之间通过基于 QUIC 和 libp2p 构建的点对点网络进行协调。

## 当前阶段与规划

:::info[发布前确认签名者集合的现状]
请如实描述现状：如今的托管网络处于早期的许可制阶段（固定的签名者群体，每次解包都需要达到法定人数才能授权），路线图计划将其扩展为一个规模大得多的无许可集合（这些方案支持最多 255 个参与者的签名群体）。要说清楚，规模更大的无许可网络是规划中的目标，而非当前的实际规模。来源：`p-tokens__frBTC-roadmap.md`（ALPHA 阶段 vs. Phase 2）、`p-key-components__frost-and-roast.md`。
:::

## 接下来看什么

- [SUBFROST 如何运作](./how-subfrost-works)：全局概览。
- [预言机](./the-oracle)：协议如何读取外部数据。
