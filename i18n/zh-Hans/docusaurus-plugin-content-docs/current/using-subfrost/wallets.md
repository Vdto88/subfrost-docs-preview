---
title: 钱包
sidebar_label: 钱包
sidebar_position: 1
description: 如何为 SUBFROST 设置钱包，从今天可用的网页应用，到即将推出的移动端和浏览器扩展。
---

# 钱包

要使用 SUBFROST，你需要一个 Bitcoin 钱包。目前**网页应用（web app）**是主要入口，移动应用和浏览器扩展也即将推出。

## 使用网页应用（现已可用）

网页应用让你可以选择创建一个新的自托管钱包，或连接一个你已有的钱包。

### 创建新钱包

1. 打开 **Connect Wallet（连接钱包）** 菜单，选择 **Create New Wallet（创建新钱包）**。
2. 设置一个强密码（至少 8 个字符）。
3. **写下你的 12 词助记词**，并妥善保存在离线的地方。这个助记词是你在丢失访问权限后恢复资金的唯一方式。
4. 也可以选择备份到 Google Drive，以便更方便地找回。

这个钱包是**自托管的**：私钥保存在你的浏览器中，除你之外没有任何人能够转移你的资金。

### 连接你已有的钱包

SUBFROST 也支持连接主流 Bitcoin 钱包，包括 **Xverse、OKX、Leather 和 Unisat**。打开 **Connect Wallet**，选择你的钱包提供方，并批准连接。之后你的地址会显示在应用页头中。

### 管理你的 coin

网页应用支持 SegWit 和 Taproot 地址，并提供基础的 UTXO 管理功能。如果你持有收藏品，请先阅读 [Safety（安全须知）](./safety) 再开始操作。

## 移动端和浏览器扩展（即将推出）

SUBFROST 采用移动优先（mobile-first）的设计，原生客户端也正在开发中。

- **Android。** 现已可以通过 SUBFROST 自己的 F-Droid 仓库获取，是目前最完整的客户端。Google Play 商店上架也即将到来。
- **iOS。** 正在 App Store 审核中。
- **浏览器扩展（Chrome 和 Firefox）。** 正在积极开发中，力求实现与移动应用相同的功能。

这些客户端正式上线后，我们会为每一个发布完整的设置指南。在此之前，请使用上述网页应用。

:::info[Android 安装细节]
上线前请确认可对外发布的确切 F-Droid 安装链接（以及二维码），以及团队希望使用的措辞（区分「现已可通过 F-Droid 获取」与后续的应用商店上架）。来源：内部应用状态笔记（`Updates/_index.md`、`Ferramentas/_index.md`）。
:::

## 下一步

- [Wrap and Unwrap BTC（包装与解包 BTC）](./wrap-unwrap-frbtc)：将你的 Bitcoin 转换为 frBTC。
- [Swap（交换）](./swap)：交易 Bitcoin 资产。
- [Safety（安全须知）](./safety)：保护好你的 Ordinals。
