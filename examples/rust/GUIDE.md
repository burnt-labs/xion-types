# Xion Rust Protobuf Examples

This directory contains examples demonstrating how to use the `xion-types` crate for **Xion blockchain messages**.

The files are working code examples you can reference when building Rust applications that interact with Xion. They show the correct field names, types, and methods for each message.

**What they show:**

- **Construct messages** — Create transaction or query objects with the right fields
- **Encode to bytes** — Convert the message to binary format (for sending to the blockchain)
- **Decode from bytes** — Convert binary back to readable objects (for reading responses)
- **JSON encoding** — Convert contract messages to/from JSON

---

## Available Example Files

| Module | File | Description |
|--------|------|-------------|
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_transaction_messages.rs` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_query_messages.rs` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `xion_v1_transaction_messages.rs` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `xion_v1_query_messages.rs` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `jwk_v1_transaction_messages.rs` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `jwk_v1_query_messages.rs` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_transaction_messages.rs` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_query_messages.rs` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `mint_v1_transaction_messages.rs` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `mint_v1_query_messages.rs` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `globalfee_v1_query_messages.rs` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `indexer_authz_v1_query_messages.rs` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `indexer_feegrant_v1_query_messages.rs` | Fee allowance queries (query only) |

---

## Prerequisites

- Rust 1.70+
- Cargo

---

## Running the Examples

```bash
cd examples/rust

# Run a specific example
cargo run --example cosmwasm_v1_transaction_messages
cargo run --example xion_v1_query_messages

# List all examples
cargo run --example
```

---

## Quick Examples

### MsgSend (Transfer tokens)

```rust
use prost::Message;
use xion_types::types::xion_v1::MsgSend;
use xion_types::types::cosmos_base_v1beta1::Coin;

// 1. Construct
let msg = MsgSend {
    from_address: "xion1sender...".to_string(),
    to_address: "xion1recipient...".to_string(),
    amount: vec![Coin {
        denom: "uxion".to_string(),
        amount: "1000000".to_string(), // 1 XION = 1,000,000 uxion
    }],
};

// 2. Encode to protobuf bytes
let bytes = msg.encode_to_vec();

// 3. Decode from bytes
let decoded = MsgSend::decode(bytes.as_slice()).unwrap();
```

### MsgExecuteContract (Call a smart contract)

```rust
use prost::Message;
use xion_types::types::cosmwasm_wasm_v1::MsgExecuteContract;
use xion_types::types::cosmos_base_v1beta1::Coin;

// Contract message as JSON -> Vec<u8>
let contract_msg = r#"{"transfer":{"recipient":"xion1recipient...","amount":"1000000"}}"#;

let msg = MsgExecuteContract {
    sender: "xion1sender...".to_string(),
    contract: "xion1contractaddress...".to_string(),
    msg: contract_msg.as_bytes().to_vec(),
    funds: vec![Coin {
        denom: "uxion".to_string(),
        amount: "1000000".to_string(),
    }],
};

let bytes = msg.encode_to_vec();
```

### QuerySmartContractState (Query a contract)

```rust
use prost::Message;
use xion_types::types::cosmwasm_wasm_v1::QuerySmartContractStateRequest;

let query_msg = r#"{"balance":{"address":"xion1holder..."}}"#;

let request = QuerySmartContractStateRequest {
    address: "xion1cw20tokencontract...".to_string(),
    query_data: query_msg.as_bytes().to_vec(),
};

let request_bytes = request.encode_to_vec();
```

---

## Type Naming Convention

Rust types follow a flattened naming convention with underscores:

| Proto Package | Rust Module |
|---------------|-------------|
| `xion.v1` | `xion_types::types::xion_v1` |
| `cosmwasm.wasm.v1` | `xion_types::types::cosmwasm_wasm_v1` |
| `cosmos.base.v1beta1` | `xion_types::types::cosmos_base_v1beta1` |
| `xion.indexer.authz.v1` | `xion_types::types::xion_indexer_authz_v1` |

---

## Key Methods

Each message type provides these methods (from `prost::Message`):

| Method | Description |
|--------|-------------|
| `encode_to_vec()` | Encode to `Vec<u8>` |
| `encode(&mut buf)` | Encode to existing buffer |
| `decode(bytes)` | Decode from bytes slice |
| `decode_length_delimited(bytes)` | Decode with length prefix |
| `encoded_len()` | Get encoded length |

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `String` to handle large numbers

### Bytes Fields (Vec<u8>)

Contract messages use `Vec<u8>`. Convert JSON to/from bytes:

```rust
use serde_json::json;

// JSON to Vec<u8>
let contract_msg = json!({"transfer": {"recipient": "xion1...", "amount": "1000"}});
let bytes = serde_json::to_vec(&contract_msg).unwrap();

// Or from string
let bytes = r#"{"transfer":{"recipient":"xion1..."}}"#.as_bytes().to_vec();

// Vec<u8> to String
let json_str = String::from_utf8(bytes).unwrap();
```

### Platform Percentage

The `platform_percentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

---

## Add Dependency

```toml
[dependencies]
xion-types = "0.0.0-dev.3da662ac"  # Check for latest version
prost = "0.12"
serde_json = "1.0"  # For JSON contract messages
```

---

## Testing Locally

```bash
cd examples/rust

# Run all examples
cargo run --example cosmwasm_v1_transaction_messages
cargo run --example cosmwasm_v1_query_messages
cargo run --example xion_v1_transaction_messages
cargo run --example xion_v1_query_messages

# Or run with release optimizations
cargo run --release --example cosmwasm_v1_transaction_messages
```
