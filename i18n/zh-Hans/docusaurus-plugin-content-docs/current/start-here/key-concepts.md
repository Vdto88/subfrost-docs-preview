---
title: 关键概念
sidebar_label: 关键概念
sidebar_position: 3
description: SUBFROST 的速查表，涵盖 frBTC、DIESEL、FIRE、FUEL、dxBTC、AMM，以及底层技术。
---

# 关键概念

一份简短的术语表，帮你快速了解概况。每个条目都会链接到更深入的页面（如果存在的话）。这些资产分为今天**已上线**和**规划中**两组。

## 资产

### 已上线

- **frBTC。** 让你的 Bitcoin 变得可编程。frBTC 是将 BTC 按 1:1 包装成的代币，可与链上应用交互，并原生结算在 Bitcoin 上。它是通向其他一切的入口：包装 BTC 即可获得它，随时解包即可换回原生 BTC。

- **DIESEL。** 协议的原生发行代币。每个 Bitcoin 区块发行的 DIESEL 数量，与该区块新发行的比特币数量相同（今天是 3.125），并与 Bitcoin 同步减半，因此其发行量锚定于真实的 Bitcoin 出块情况，而不是需求。具体数字与领取对象见 [DIESEL](../tokens-economics/diesel)。

- **FIRE。** 奖励与治理代币。FIRE 奖励为 DIESEL/frBTC 资金池提供流动性的人，并支持质押（staking）与债券（bonds）。这是活跃参与者获得协议份额、并随时间推移参与治理的方式。质押与债券功能今天已经在运行。

### 规划中

- **frUSD。** 一种 Bitcoin 原生稳定币：一个稳定的美元价值，像这里的其他一切一样结算在 Bitcoin 上。

- **dxBTC。** 生息 Bitcoin。你质押 BTC 并收到 dxBTC；在后台，你的 Bitcoin 会被投入到收益策略中运作，收益以 Bitcoin 计价累积。

- **FUEL。** 协议国库与参数（例如包装/解包费用和升级）的治理代币。其代币经济学尚未公开。大小写区分了你会在这里遇到的两个"fuel"：大写的 **FUEL** 始终指这个代币，而小写的 **fuel** 指一次 Alkanes 合约调用被允许消耗的计算预算，相当于其他链上的 gas。后者详见 [Alkanes](../protocol/alkanes)。

## 资产之间如何流转

- **AMM（自动做市商）。** 兑换是针对一个共享的流动性池进行的，而不是与另一个交易者撮合。你始终都有交易对手方，价格会随供需变化。这正是应用中兑换功能背后的驱动力。**已上线。**

以下两项手续费值得了解，两者都是当前费率，而非永久保证：

| 操作 | 手续费 | 去向 |
| --- | --- | --- |
| 交换 | 默认 1% | 0.8% 给流动性提供者，0.2% 给协议 |
| 包装或解包 BTC | 0.1% | 归协议所有 |

交换手续费按资金池单独设置，应用会报出实时费率，因此 1% 是默认值而非硬性规则。包装手续费是协议可以更改的链上参数。参见 [Swap（交换）](../using-subfrost/swap)、[Pools & Liquidity（资金池与流动性）](../using-subfrost/pools-liquidity) 和 [Wrap & Unwrap（包装与解包）](../using-subfrost/wrap-unwrap-frbtc)。

## 这一切运行在什么之上

- **Alkanes。** 这些代币所依托的智能合约协议。Alkanes 让开发者可以直接在 Bitcoin 上运行可编程合约（合约用 Rust 编写并编译为 WebAssembly），继承 Bitcoin 的安全性，而不必依赖另一条独立的链。frBTC、DIESEL 和 FIRE 都是 Alkanes 代币。完整模型见 **Protocol** 章节。

- **索引器（indexer）。** Bitcoin 区块本身并不会"运行"合约。索引器会读取每个新区块、执行合约代码，并维护最新状态，这正是余额及其他链上数据得以被读取的方式。当你看到自己的 frBTC 余额时，它就来自索引器。

:::note[更深一层]
"从这里开始"这份速查表刻意保持简单。protostone、cellpack 等术语，以及具体的合约模型，会在 **Protocol** 章节中介绍；开发者工具（CLI、SDK、JSON-RPC）则在 **在 SUBFROST 上构建** 和 **API 与 SDK 参考** 中介绍。
:::

## 今天已经上线的内容

诚实面对现状很重要。快速一览：

- **已上线：** frBTC 的包装与解包，以及 Bitcoin 资产之间的兑换（包括 BTC 兑换为美元价值）。
- **规划中：** Bitcoin 原生稳定币（frUSD）、生息 Bitcoin 金库代币（dxBTC）、FUEL 治理代币、与 ETH、SOL、ZEC 等资产的跨链兑换，以及完全无许可的签名者网络。

## 接下来去哪里

- **[5 分钟快速上手](./get-started)：** 如果你还没完成第一笔兑换。
- **代币与经济学：** frBTC、DIESEL、FIRE、dxBTC 和 FUEL 的完整故事。
- **Protocol：** 托管、签名和 Alkanes 模型的实际运作方式。
