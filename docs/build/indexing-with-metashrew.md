---
title: Indexing with metashrew
sidebar_label: Indexing with metashrew
sidebar_position: 7
description: How Alkanes state is indexed, how view functions work, and how to run the indexer yourself.
---

# Indexing with metashrew

Alkanes does not have its own chain. Its state is **derived from Bitcoin** by an indexer called **metashrew**, which runs a WebAssembly program (the Alkanes indexer, `alkanes.wasm`) against block data and answers queries about the result. Understanding this layer matters whenever you read on-chain state, and it is required if you want to run your own infrastructure.

Most developers never run an indexer: they use the [hosted JSON-RPC endpoint](../api-reference/json-rpc/overview). This page is for when you want to know how it works, or run it yourself.

## What metashrew does

metashrew is a general indexer that executes WASM against the Bitcoin blockchain. The Alkanes protocol ships as one such WASM program. Because the same program that indexes the chain is also the one that answers reads, the reads are a faithful projection of consensus state, not a separate database that could drift.

Two ideas do most of the work:

- **View functions.** A read is a **view function** invoked through `metashrew_view`: you name the view (`simulate`, `trace`, `meta`, and so on), pass its input, and pick a block tag. This is how you query balances, simulate a call, get an execution trace, or read a contract's ABI. The full catalog is on the [`metashrew_*` reference](../api-reference/json-rpc/metashrew).
- **Cost.** `simulate` is the heaviest call because it loads and runs the WASM. Reading a raw storage slot with `getstorageat` is much cheaper: it just fetches the value at a path without a full evaluation. Reach for the cheapest call that answers your question.

## The v10 architecture

The current indexer runtime (v10) is built to scale horizontally by decoupling three layers, each of which scales on its own:

- **State (TiKV).** State lives in TiKV, a distributed key-value store queried over the network, instead of a local database bundled into every instance. Many instances share one backend, and the runtime can batch-fetch many keys in a single round trip.
- **Indexer (subshrew).** The indexing process runs on its own, decoupled from the state layer. The same runtime also runs as a single binary under **rockshrew-mono**.
- **View / RPC layer.** The process that runs view functions is separate and scales to many replicas, each loading the WASM and evaluating it against the shared state.

The practical takeaway: read throughput can scale without copying the whole state onto every machine.

## Running an indexer

You have two shapes to choose from:

- **`rockshrew-mono`**, a single binary that bundles the runtime with a local database. This is the simplest way to run one node.
- **`subshrew`**, the v10 indexer against TiKV, when you want the decoupled, horizontally scalable setup.

Syncing from genesis takes on the order of days. To skip that, bootstrap from a **published snapshot** and let the node catch up to the tip from there, which takes hours rather than days.

:::info[Confirm the run commands and snapshot location before publishing]
Provide the exact invocation for `rockshrew-mono` and `subshrew` (flags for the Bitcoin RPC source, the data or TiKV endpoint, and the WASM path) and the public snapshot URL. These come from the node binaries and the flex, and were not fully captured in the sources. If a `subfrost-node` is the packaged way to run a signer or full node, include its `--help` here too. Sources: vault notes on metashrew v10 (subshrew/TiKV/rockshrew-mono, snapshots), pending flex.
:::

## Building your own indexer WASM

metashrew runs any WASM program that implements its host interface, so you can write custom indexing logic, not just run the Alkanes program. A program processes each block and writes key-value state through the runtime, and exposes view functions for reads. In v10 the runtime is async, times out long-running requests, and can add new host functions without breaking the interface.

One caveat comes with the v10 parallelization: execution can be sharded, so the old "same WASM, same index" guarantee no longer holds automatically. If you write an indexer that relies on ordering, write it with **serializable semantics** so the result does not depend on execution order.

## When to use metashrew vs a data indexer

metashrew is the source of truth, but it is not built for bulk history or dashboards. A secondary data indexer covers that ground: trade history, per-pair statistics, holder lists, and similar aggregates that the base indexer does not compute.

The rule of thumb:

- Data that becomes input to a **user-signed action** should come from metashrew view functions (the verifiable path).
- Data that only **renders a screen** (history, charts, leaderboards) is a better fit for a secondary data indexer.

## Where to go next

- [`metashrew_*` reference](../api-reference/json-rpc/metashrew): every view method and its inputs.
- [`alkanes_*` reference](../api-reference/json-rpc/alkanes): the simulate and trace views in detail.
- [Interacting via the CLI](./interacting-via-cli): query state without running a node.
