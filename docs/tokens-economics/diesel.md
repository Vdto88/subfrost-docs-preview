---
title: DIESEL
sidebar_label: DIESEL
sidebar_position: 2
description: DIESEL is SUBFROST's native emission, issued on-chain in step with Bitcoin's own block production.
---

# DIESEL

**DIESEL** is the protocol's native token. Unlike frBTC, which is backed by locked Bitcoin, DIESEL is **emitted on-chain**: it is minted as new blocks are produced, following a schedule tied to Bitcoin itself.

## How DIESEL is issued

DIESEL is minted in **parity with Bitcoin miner fees**, capped at up to **half of the full block reward**, and it follows the **same halving schedule as new bitcoin**.

What that means in practice:

- DIESEL's supply is **anchored to real Bitcoin block production**, not printed on demand. As Bitcoin issues new coins and collects fees, DIESEL is issued alongside, within that cap.
- Because it shares Bitcoin's halving schedule, DIESEL's emission rate falls over time in step with Bitcoin's.

This ties the supply side of the SUBFROST economy directly to Bitcoin's own monetary schedule.

:::info[Confirm the exact emission numbers before publishing]
Source notes state the rule qualitatively (parity with miner fees, up to 50% of the block reward, same schedule as new sats) and mention roughly 900 DIESEL emitted over a year of runtime. There is no explicit DIESEL halving interval in blocks or years written down; it follows Bitcoin's schedule implicitly. Confirm the precise figures against the genesis contract before stating any specific number.
:::

## What DIESEL is for

- **It anchors the core AMM pool.** DIESEL pairs with frBTC in the protocol's central liquidity pool, giving SUBFROST a native unit of account. Providing liquidity to that pool is also what earns [FIRE](../using-subfrost/fire-vault).
- **It is earned by participation.** Because DIESEL is distributed as blocks are produced, participants who interact with the protocol can receive a share of the emission.
- **It is used in routing.** DIESEL is a common intermediate hop when a swap has no direct pool (see [Swap](../using-subfrost/swap)).

## Where to go next

- [Tokens & Economics](./overview): how DIESEL fits with frBTC and FIRE.
- [FIRE Vault](../using-subfrost/fire-vault): earn FIRE by providing DIESEL / frBTC liquidity.
- [Alkanes Protocol](../protocol/alkanes): DIESEL is an Alkanes token.
