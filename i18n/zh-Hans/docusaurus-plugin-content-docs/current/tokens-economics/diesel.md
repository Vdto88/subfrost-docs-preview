---
title: DIESEL
sidebar_label: DIESEL
sidebar_position: 2
description: DIESEL 是 SUBFROST 的原生发行代币，随 Bitcoin 自身的出块节奏在链上发行。
---

# DIESEL

**DIESEL** 是该协议的原生代币。与由锁定的 Bitcoin 提供支撑的 frBTC 不同，DIESEL 是**在链上发行（emitted）**的：它随着新区块的产生而铸造，发行节奏与 Bitcoin 本身挂钩。

## DIESEL 是如何发行的

DIESEL 的铸造与 **Bitcoin 矿工手续费（miner fees）保持等量**，上限为**完整区块奖励（block reward）的一半**，并且遵循**与新比特币相同的减半（halving）计划**。

这在实践中意味着：

- DIESEL 的供应量**锚定于真实的 Bitcoin 出块过程**，而不是按需印发。随着 Bitcoin 发行新币并收取手续费，DIESEL 会在这一上限内同步发行。
- 由于共享 Bitcoin 的减半计划，DIESEL 的发行速率会随时间推移，与 Bitcoin 同步下降。

这使 SUBFROST 经济体系的供给端，直接与 Bitcoin 自身的货币发行节奏绑定在一起。

:::info[发布前请确认精确的发行数字]
来源资料对该规则仅作了定性描述（与矿工手续费等量、最高为区块奖励的 50%、与新聪的发行计划相同），并提到大约一年运行时间里发行了约 900 枚 DIESEL。目前没有明确写明的、以区块数或年数计的 DIESEL 减半周期；它隐含地遵循 Bitcoin 的计划。在给出任何具体数字之前，请对照创世合约（genesis contract）确认精确数据。来源：`Protocolo/_index.md`（DIESEL 的发行）、`Updates/_index.md`。
:::

## DIESEL 的用途

- **它是核心 AMM 资金池的锚点。** DIESEL 与 frBTC 在协议的核心流动性池中配对，为 SUBFROST 提供了一个原生的计价单位。为该资金池提供流动性同时也是赚取 [FIRE](../using-subfrost/fire-vault) 的方式。
- **它通过参与来获得。** 由于 DIESEL 是随着区块产生而分发的，与协议交互的参与者可以获得一部分发行份额。
- **它被用于路由（routing）。** 当一笔兑换没有直接对应的资金池时，DIESEL 通常作为中间跳转（intermediate hop）（参见 [Swap](../using-subfrost/swap)）。

## 接下来可以看看

- [代币与经济](./overview)：DIESEL 如何与 frBTC 和 FIRE 相互配合。
- [FIRE Vault](../using-subfrost/fire-vault)：通过提供 DIESEL / frBTC 流动性赚取 FIRE。
- [Alkanes 协议](../protocol/alkanes)：DIESEL 是一种 Alkanes 代币。
