---
title: 5 分钟快速上手
sidebar_label: 5 分钟快速上手
sidebar_position: 3
description: 选择一个钱包，存入 Bitcoin，在 SUBFROST 上完成你的第一笔兑换。
---

# 5 分钟快速上手

本指南将带你从零开始完成第一笔兑换。你会选择接入 SUBFROST 的方式、设置钱包，并兑换一些 Bitcoin。

## 第 1 步：打开 SUBFROST

今天最简单的开始方式是使用 **网页应用**。原生客户端也即将推出：

- **网页应用。** 现已可用，是目前推荐的入门方式。
- **Android。** 已通过 SUBFROST 自己的 F-Droid 仓库提供，是功能最完整的客户端。Google Play 商店上架即将推出。
- **iOS。** 即将推出（App Store 审核中）。
- **浏览器扩展（Chrome 和 Firefox）。** 即将推出。

本指南将使用网页应用。各选项的详细说明见 [钱包](../using-subfrost/wallets)。

## 第 2 步：设置钱包

有两条路径可选，任选其一即可。

### 创建一个新的 SUBFROST 钱包（推荐新手使用）

1. 打开 Connect Wallet 菜单，选择 **Create New Wallet**。
2. 设置一个强密码（至少 8 个字符）。
3. **写下你的 12 个助记词恢复短语**，并妥善保存在离线的安全位置。这个短语是恢复你资金的唯一方式。
4. 也可以选择备份到 Google Drive，以方便使用。

### 或连接你已有的钱包

SUBFROST 可连接主流的 Bitcoin 钱包，包括 **Xverse、OKX、Leather 和 Unisat**。打开 **Connect Wallet**，选择你的提供商，并批准连接。

:::warning[请为 SUBFROST 使用一个与你的 Ordinals 分开的全新钱包]
如果你持有 Ordinals 或铭文（inscriptions），请不要在这里使用同一个钱包。在 Bitcoin 上，一枚铭文存在于特定的一枚币（UTXO）上，如果这枚币在普通交易中被花费，铭文就可能丢失。SUBFROST 不会追踪 Ordinals，因此无法自动保护它们。最稳妥的做法是为 SUBFROST 活动单独保留一个钱包，把你的收藏品放在别处。

> [!question] 这条安全提示是新撰写的文案，并非引用自现有文档。它基于 `Ferramentas/_index.md` 中的内部产品说明（UTXO 销毁风险；SUBFROST 不索引 `ord`）。请确认团队希望使用的确切措辞，以及是否要引用正在开发中的应用内"将 ordinals 拆分到新钱包"提示。
:::

## 第 3 步：存入 Bitcoin

你不需要手动包装（wrap）你的 BTC。当你从 BTC 开始兑换时，应用会在一个原子步骤中将你的 Bitcoin 包装为 frBTC 并完成兑换。包装过程在后台完成。

如果你只是想直接获得 frBTC，包装是 1:1 转换：存入 1 个 BTC，得到 1 个 frBTC。

## 第 4 步：完成你的第一笔兑换

1. **选择代币。** 选择你要**发送**的代币（You Send）和想要**接收**的代币（You Receive）。
2. **输入数量。** 直接输入，或使用快捷按钮：你余额的 25%、50%、75% 或 Max。
3. **查看详情。** 确认前你会看到汇率、兑换路径、你将收到的最低数量、截止时间（以区块数计）、你的滑点容差，以及矿工费率。
4. **确认并签名。** 点击 Swap，然后用你连接的钱包批准交易。

:::tip[从小额开始]
如果你刚接触本平台，建议先做一笔小额兑换，熟悉整个流程后再操作更大金额。
:::

:::info[解包确认延迟（"3 个区块"）]
当兑换回原生 BTC 时，现有文档中提到有一个安全确认期（"在 SUBFROST 协议发送解包后的 BTC 之前，有一个 3 个区块的确认期"，出自 `p-subfrost-app__swap.md`）。这个数字没有得到任何内部资料的印证。在正式引用之前，请先确认真实数值。
:::

## 接下来去哪里

- **[关键概念](./key-concepts)：** 了解 frBTC、DIESEL、FIRE 及其他内容。
- 在 **使用 SUBFROST** 指南中探索资金池、FIRE vault 及更多内容。
