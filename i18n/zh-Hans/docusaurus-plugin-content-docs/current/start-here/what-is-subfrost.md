---
title: 什么是 SUBFROST
sidebar_label: 什么是 SUBFROST
sidebar_position: 1
description: 用最直白的话讲清楚 SUBFROST。让你的 Bitcoin 参与 DeFi，无需交给某家公司，也无需离开 Bitcoin。
---

# 什么是 SUBFROST

SUBFROST 是一种使用你的 Bitcoin 参与去中心化金融（DeFi）的方式，既不需要把它交给某家公司，也不需要离开 Bitcoin 区块链。

如今，如果你想交易你的 Bitcoin、赚取收益，或者像人们在 Ethereum 或 Solana 上使用资金那样使用它，通常都得把它发送到别处。这意味着要么送去中心化交易所，要么通过由单一托管方运营的"wrapped BTC"跨链桥送到另一条链上。这两种情况下，你都在信任某一方不会丢失、冻结或滥用你的币。

SUBFROST 用一个分布式的信任方，取代了这个单一的受信任方。

## 核心理念

一组独立的签名者共同持有支撑该系统的 Bitcoin。他们使用一种叫做**阈值签名（threshold signing）**的方法，控制资金的密钥被拆分到整个群体中。没有任何单一签名者持有完整密钥，因此没有任何单一方可以独自转移资金。即便某个签名者被攻破，资金依然安全。

用一句话概括：**SUBFROST 是 Bitcoin 的去中心化托管方。** 它作为一个轻量层运行，监视 Bitcoin 区块链，并协调一圈签名者，由他们锁定真实的 BTC，并在你需要时将其释放。

## 你该如何实际使用它

当你将 Bitcoin 存入 SUBFROST 时，你会收到 **frBTC**，一种由你的 BTC 按 1:1 支撑、并原生结算在 Bitcoin 上的代币。

- 将你的 BTC **包装（Wrapping）**为 frBTC 是即时完成的。
- 将 frBTC **解包（Unwrapping）**回原生 BTC，需要由分布式的签名者群体授权，而非任何单一个人。

有了 frBTC 在手，你就可以兑换成其他 Bitcoin 资产、提供流动性并赚取收益，一切都结算在 Bitcoin 的基础层上。该项目用四个词概括了它的目标：**Bitcoin 原生收益，做得对。**

## 它有何不同

- **你留在 Bitcoin 上。** SUBFROST 不是一条独立的区块链，也不是侧链。一切都结算在 Bitcoin L1 上。
- **没有单一托管方。** 支撑 frBTC 的 Bitcoin 由一整组签名者共同持有，而不是由某一家公司持有你的币。
- **保留你的敞口。** 理念很简单：持有 Bitcoin，同时用它被动地赚取更多 Bitcoin。

:::info[签名者集合：当前状态与规划]
在发布前请确认关于现状与规划的诚实表述。目前托管网络处于早期的许可制阶段（固定的签名者群体，每次解包需要达到法定人数授权）。路线图描述了将其扩展为规模大得多的无许可质押者网络。请明确说明这个更大的无许可网络仍属于**规划中**，以免读者误以为今天的去中心化程度已是最终规模。需核对的来源：`p-tokens__frBTC-roadmap.md`（ALPHA 阶段 vs. 第二阶段）。
:::

## 接下来去哪里

- **[为什么选择 SUBFROST](./why-subfrost)：** 它解决的问题，以及让它得以运作的各个部分。
- **[5 分钟快速上手](./get-started)：** 选择一个钱包，存入 Bitcoin，完成你的第一笔兑换。
- **[关键概念](./key-concepts)：** frBTC、DIESEL、FIRE 等的速查表。
