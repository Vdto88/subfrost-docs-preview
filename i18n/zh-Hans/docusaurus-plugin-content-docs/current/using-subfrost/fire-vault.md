---
title: FIRE Vault
sidebar_label: FIRE Vault
sidebar_position: 5
description: 质押以赚取 FIRE，或通过债券以折扣价购买 FIRE。
---

# FIRE Vault

**FIRE** 是 SUBFROST 的奖励代币。它奖励为 [DIESEL / frBTC 资金池](./pools-liquidity)提供流动性的用户，获取方式有两种：**质押**你的流动性，或**债券认购（bonding）**。

## FIRE 概览

- **最大供应量：** 2,100,000 FIRE
- **预挖：** 0%（无预分配）
- **发行分配：** 85% 用于质押，15% 用于债券
- **小数位数：** 8

FIRE 的发行量会随时间减半，其时间表与 Bitcoin 的减半保持一致。

:::info[确认 FIRE 减半间隔]
目前文档中写的减半间隔为 **105,000 个区块（约 2 年）**，「与 Bitcoin 减半同步」，因此每两次 FIRE 减半中就有一次恰好与 Bitcoin 减半重合。其他内部笔记则将 FIRE 描述为「与 Bitcoin 同步」减半（210,000 个区块）。这两种说法是可以调和的（105k 是 Bitcoin 减半速度的两倍，因此每隔一次 FIRE 减半就会与 Bitcoin 减半重合），但实际部署的数值尚未与合约核实。发布前请确认 FIRE 合约中的 `HALVING_INTERVAL`。来源：`sf-subfrost-app-fire-vault.md`、`Diagnostico-docs.md`（第 308 行）。
:::

## 质押

质押你的 DIESEL / frBTC 流动性，即可持续获得 FIRE 收益流。锁仓时间越长，收益越高：更长的锁仓期会带来更高的奖励倍数。

| 锁仓期 | 奖励倍数 |
| --- | --- |
| 不锁仓 | 1.0x |
| 1 周 | 1.25x |
| 1 个月 | 1.5x |
| 3 个月 | 2.0x |
| 6 个月 | 2.5x |
| 1 年 | 3.0x |

承诺锁仓的时间越长，你在质押发行中获得的份额就越大。

## 债券认购（Bonding）

债券认购让你能够通过向协议国库存入资产，**以折扣价购买 FIRE**。认购债券时，你会以相对于质押定价 **10% 的折扣**获得 FIRE，并在约 **7 天**内线性归属（vested）。

债券价格锚定于与国库持有资产挂钩的地板价，因此不会被压低到低于其背后支撑价值的水平。

## 下一步

- [Pools & Liquidity（资金池与流动性）](./pools-liquidity)：获取你在此质押所需的 DIESEL / frBTC 流动性。
- [Tokens & Economics（代币与经济模型）](../start-here/key-concepts)：了解 FIRE 与 frBTC、DIESEL 之间的关系。
