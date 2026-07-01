---
title: 连接钱包
sidebar_label: 连接钱包
sidebar_position: 6
description: 让 Web 应用通过注入式 provider 或远程签名向 SUBFROST 钱包请求签名。
---

# 连接钱包

Web 应用永远不会持有用户的私钥。要做任何涉及花费或转移资产的操作，它都需要请求钱包进行签名。在 SUBFROST 上，根据用户所处的环境，有两种方式可以联系到该钱包。

## 两种连接路径

- **注入式 provider（Injected provider）。** 当应用运行在已经存在钱包的环境中——浏览器扩展，或移动端钱包的应用内浏览器——钱包会向页面注入一个 provider 对象，供页面直接调用。只要可用，这是最顺畅的路径。
- **远程签名（Remote signing）。** 当用户使用没有钱包存在的桌面浏览器时，应用会通过加密中继与用户手机上的钱包配对。应用显示一个二维码，手机扫描后，此后应用就会向手机发送签名请求，手机会针对每一次请求提示用户确认。这一流程完整记录在 [WalletConnect](../api-reference/guides/walletconnect) 参考页面中。

这两条路径都暴露出同样两个关键操作：**签署 PSBT**（用于授权一笔 Bitcoin 交易）和**签署消息**（用于证明对某地址的控制权）。应用构建交易或消息，钱包批准并签名，应用负责广播。

## 注入式 provider

当钱包存在时，它会在页面上暴露一个 provider。应用检测到它后，请求用户的账户，然后再请求签名：

```javascript
// 检测注入式 provider
const subfrost = window.subfrost;
if (!subfrost) {
  // 此环境下没有钱包，回退到远程签名（二维码配对）
}

// 请求用户地址（会提示用户进行连接）
const accounts = await subfrost.getAccounts();

// 请求钱包签署一个 PSBT，用户在钱包中确认
const signedPsbtHex = await subfrost.signPsbt(unsignedPsbtHex);

// 请求钱包签署一条消息（证明对地址的控制权）
const signature = await subfrost.signMessage('Authorize this action', accounts[0]);
```

:::info[发布前请确认注入式 provider 的接口细节]
请确认注入式 provider 的确切全局名称与方法名（此处展示的 `window.subfrost` 为暂定名称）、它是否暴露网络与账户变更事件，以及它如何告知有哪些地址可用。远程签名（WalletConnect）接口已有文档记录且稳定；注入式 provider 的 API 应对照扩展程序与移动端应用内浏览器进行确认。来源：关于注入式 provider 的 vault 笔记，待确认。
:::

## 远程签名（二维码配对）

当没有注入式 provider 时，就通过中继与移动端钱包配对。应用渲染一个配对二维码，手机扫描后建立会话。请求与响应是端到端加密的，中继只转发密文，且每一次请求都在手机端得到批准。

客户端库以及完整协议（配对 URI、信封格式、安全模型）都在 [WalletConnect](../api-reference/guides/walletconnect) 页面中。

## 接下来去哪里

- [WalletConnect](../api-reference/guides/walletconnect)：远程签名协议详解。
- [包装 frBTC](./wrapping-frbtc)：一次值得签署的首笔交易。
- [安全须知](../using-subfrost/safety)：Alkanes 场景下使用全新钱包的习惯。
