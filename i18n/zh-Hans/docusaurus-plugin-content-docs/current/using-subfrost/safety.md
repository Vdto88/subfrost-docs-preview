---
title: 安全须知
sidebar_label: 安全须知
sidebar_position: 6
description: 使用 SUBFROST 时，保护好你的 Ordinals 和铭文（inscriptions）。
---

# 安全须知

SUBFROST 处理的是 Bitcoin 上的 Alkanes 代币。如果你同时持有 **Ordinals 或铭文（inscriptions）**，有一个重要的注意事项。

## 为你的收藏品使用单独的钱包

**不要将同一个钱包同时用于 SUBFROST 操作和存放有价值的 Ordinals 或铭文。**

在 Bitcoin 上，一枚铭文依附于一个特定的 coin（即一个 UTXO）之上。如果这个 coin 在普通交易中被花费，铭文就可能丢失。SUBFROST 不会追踪 Ordinals，因此它无法看到这些铭文，也无法自动为你保护它们。

最安全的做法很简单：

- 为 SUBFROST 操作（包装、交换、质押）保留一个**专用钱包**。
- 将你的 **Ordinals 和收藏品保存在另一个钱包**中，与你的 SUBFROST 操作分开。

这样一来，你在 SUBFROST 上进行的任何操作都不会触及承载铭文的 coin。

## 保护好你的助记词

你的 12 词助记词是恢复自托管钱包的唯一方式。请将它写下来，妥善保存在离线的地方。切勿与任何人分享，也不要在钱包自身的恢复页面以外的任何网站上输入它。

## 从小额开始

如果你刚接触这个平台，建议先进行一笔小额交易，熟悉整个流程后再操作更大的金额。

:::info[确认安全须知的措辞以及应用内提示]
本页面是全新撰写的内容，并非现有文档的引用。它基于内部产品的设计考量：与 Alkanes 共享同一 UTXO 的铭文有被销毁的风险，且 SUBFROST 并未运行 Ordinals 索引器。请确认团队希望使用的确切措辞，以及是否要提及正在开发中的应用内提示（该提示会建议将 Ordinals 拆分到新钱包）。来源：`Ferramentas/_index.md`（"Ordinals na mesma wallet que alkanes"）。
:::

## 下一步

- [Wallets（钱包）](./wallets)：设置你的 SUBFROST 钱包。
