---
title: 关键概念
sidebar_label: 关键概念
sidebar_position: 4
description: SUBFROST 的速查表，涵盖 frBTC、DIESEL、FIRE、FUEL、dxBTC、AMM，以及底层技术。
---

# 关键概念

一份简短的术语表，帮你快速了解概况。每个条目都会链接到更深入的页面（如果存在的话）。标注为 **规划中** 的项目尚未上线。

## 资产

- **frBTC。** 让你的 Bitcoin 变得可编程。frBTC 是将 BTC 按 1:1 包装成的代币，可与链上应用交互，并原生结算在 Bitcoin 上。包装 BTC 即可获得它；解包即可换回原生 BTC。**已上线。**

- **DIESEL。** 协议的原生发行代币。DIESEL 的铸造与 Bitcoin 矿工费同步（最多为区块奖励的一半），并遵循与新增比特币相同的减半时间表，因此其发行量与真实的 Bitcoin 出块情况挂钩。**已上线。**

- **FIRE。** 奖励与治理代币。FIRE 奖励为 DIESEL/frBTC 资金池提供流动性的人，并支持质押（staking）与债券（bonds）。**已上线**（质押与债券功能正在运行）。

- **dxBTC。** 生息 Bitcoin。你质押 BTC 并收到 dxBTC；在后台，你的 Bitcoin 会被投入到收益策略中运作，收益以 Bitcoin 计价累积。**规划中。**

- **FUEL。** 协议国库与参数（例如包装/解包费用和升级）的治理代币。**规划中**（其代币经济学尚未公开）。

:::info["FUEL" 命名的重叠]
这个生态系统中有两个东西都叫"fuel"：**FUEL 治理代币**（规划中，如上所述）和作为 Alkanes 合约中执行 gas 概念的 **fuel**（一次合约调用被允许使用的计算预算）。请与团队确认在公开文档中应如何区分这两者，以免读者混淆。
:::

## 资产之间如何流转

- **AMM（自动做市商）。** 兑换是针对一个共享的流动性池进行的，而不是与另一个交易者撮合。你始终都有交易对手方，价格会随供需变化。这正是应用中兑换功能背后的驱动力。**已上线。**

:::info[兑换手续费数字]
在确认之前，请勿公布具体的 AMM 兑换手续费。参考的 AMM 教程（来自 alkanes.build 的 `ab-tutorials-amm.md`）展示了 0.3% 作为示例费率，但那只是一个通用教程，并未确认为 SUBFROST 正式资金池的费率。另外，frBTC 的包装/解包收取 0.1% 的费用（`p-tokens__frBTC-roadmap.md`）。内部流传的"1%（0.8% LP + 0.2% 销毁）"这个数字未在任何资料中找到依据。
:::

## 这一切运行在什么之上

- **Alkanes。** 这些代币所依托的智能合约协议。Alkanes 让开发者可以直接在 Bitcoin 上运行可编程合约（合约用 Rust 编写并编译为 WebAssembly），继承 Bitcoin 的安全性，而不必依赖另一条独立的链。frBTC、DIESEL 和 FIRE 都是 Alkanes 代币。完整模型见 **Protocol** 章节。

- **索引器（indexer）。** Bitcoin 区块本身并不会"运行"合约。索引器会读取每个新区块、执行合约代码，并维护最新状态，这正是余额及其他链上数据得以被读取的方式。当你看到自己的 frBTC 余额时，它就来自索引器。

:::note[更深一层]
"从这里开始"这份速查表刻意保持简单。protostone、cellpack 等术语，以及具体的合约模型，会在 **Protocol** 章节中介绍；开发者工具（CLI、SDK、JSON-RPC）则在 **在 SUBFROST 上构建** 和 **API 与 SDK 参考** 中介绍。
:::

## 接下来去哪里

- **[5 分钟快速上手](./get-started)：** 如果你还没完成第一笔兑换。
- **代币与经济学：** frBTC、DIESEL、FIRE、dxBTC 和 FUEL 的完整故事。
- **Protocol：** 托管、签名和 Alkanes 模型的实际运作方式。
