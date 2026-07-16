---
title: 为什么选择 SUBFROST
sidebar_label: 为什么选择 SUBFROST
sidebar_position: 2
description: Bitcoin 本非为应用而生。SUBFROST 在不放弃托管权的前提下，为 Bitcoin 带来真正的 DeFi。
---

# 为什么选择 SUBFROST

## 问题所在

Bitcoin 是加密货币领域规模最大、也最安全的网络。但它的基础层从未被设计用来运行应用程序。原生 BTC 无法直接接入人们在 DeFi 其他领域使用的工具：用于兑换的自动做市商、借贷市场，或隐私工具。

因此，任何想要不止是持有 Bitcoin 的人，都面临两个糟糕的选择：

1. **把它发送到中心化交易所。** 现在是一家公司持有你的币。
2. **将它跨链桥接为"wrapped BTC"。** 现在是一个跨链桥运营方（通常是个小型托管方）持有真实的 Bitcoin，而你在另一条网络上持有一张欠条（IOU）。

这两种选择都意味着放弃托管权、信任别人。正如该项目所说：如果没有一个最小化信任的托管方，"Bitcoin DeFi"最终只能依赖于需要信任的跨链替代方案，而这根本算不上真正的 Bitcoin DeFi。

## SUBFROST 的方案

SUBFROST 将一切留在 Bitcoin 上，并去除了单一的受信任托管方。

不再是一家公司持有 Bitcoin，而是由一组分布式的签名者通过阈值签名共同持有（详见[什么是 SUBFROST](./what-is-subfrost)）。你的 BTC 在链上表示为 **frBTC**，按 1:1 支撑，并存在于与其他一切相同的 Bitcoin 基础层上。没有需要桥接的独立链，也没有需要信任的独立网络。

结果是：你保留了对 Bitcoin 的敞口，同时还能让它发挥作用。

## 各个组成部分

SUBFROST 围绕几种原生资产构建。这里是简要版本，完整列表见[关键概念](./key-concepts)。

- **frBTC：让你的 Bitcoin 变得可编程。** frBTC 是将 BTC 按 1:1 包装成的代币，可与链上应用交互。它是通往其他一切的入口：包装 BTC 即可获得 frBTC，随时都可以解包换回原生 BTC。它今天已经上线。

- **DIESEL：发行量与真实 Bitcoin 挂钩。** DIESEL 是协议的原生发行代币。每个 Bitcoin 区块发行的 DIESEL 数量，与该区块新发行的比特币数量相同，并与 Bitcoin 同步减半。换句话说，DIESEL 的供应量锚定于真实的 Bitcoin 出块情况，而不是随意增发的。具体数字以及谁会收到它，见 [DIESEL](../tokens-economics/diesel)。

- **FIRE：奖励与治理。** FIRE 奖励为 DIESEL/frBTC 资金池提供流动性的人，并支持质押（staking）与债券（bonds）。这是活跃参与者赚取协议份额、并随时间参与治理的方式。

关于这三种资产如何在经济上相互配合的完整图景，见[代币与经济](../tokens-economics/overview)。

## 今天已上线 vs. 规划中

诚实说明状态很重要。快速概览如下：

- **已上线：** frBTC 的包装与解包，以及 Bitcoin 资产之间的兑换（包括 BTC 兑换为美元计价的价值）。
- **规划中：** Bitcoin 原生稳定币（frUSD）、生息 Bitcoin vault 代币（dxBTC）、FUEL 治理代币、面向 ETH、SOL、ZEC 等资产的跨链兑换，以及完全无许可的签名者网络。

## 接下来去哪里

- **[5 分钟快速上手](./get-started)：** 完成你的第一笔兑换。
- **[关键概念](./key-concepts)：** 完整的术语表。
