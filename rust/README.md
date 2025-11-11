# xion-types

Generated Rust types for the Xion blockchain protocol buffers.

## Overview

`xion-types` provides type-safe Rust bindings for all protocol buffer definitions used in the Xion blockchain. These types are automatically generated from the Protobuf definitions, ensuring they stay in sync with the blockchain's protocol.

## Features

- **Type-safe**: All types are generated from Protobuf definitions, ensuring correctness
- **Comprehensive**: Includes types for Cosmos SDK, Tendermint, IBC, and Xion-specific modules
- **Well-documented**: Generated types include documentation from the original Protobuf files
- **Prost-based**: Uses [`prost`](https://github.com/tokio-rs/prost) for efficient serialization/deserialization

## Installation

Add this to your `Cargo.toml`:

```toml
[dependencies]
xion-types = "0.1.0"
```

## Usage

Import the types you need:

```rust
use xion_types::types::cosmos::base::v1beta1::Coin;
use xion_types::types::cosmos::tx::v1beta1::Tx;

// Use the types in your code
let coin = Coin {
    denom: "uxion".to_string(),
    amount: "1000000".to_string(),
};
```

## Module Structure

Types are organized under the `types` module, following the Protobuf package structure:

- `cosmos::*` - Cosmos SDK types (bank, staking, gov, etc.)
- `tendermint::*` - Tendermint consensus types
- `ibc::*` - Inter-Blockchain Communication (IBC) types
- `xion::*` - Xion-specific types

## Examples

### Working with Cosmos SDK Types

```rust
use xion_types::types::cosmos::bank::v1beta1::MsgSend;
use xion_types::types::cosmos::base::v1beta1::Coin;

let msg = MsgSend {
    from_address: "xion1...".to_string(),
    to_address: "xion1...".to_string(),
    amount: vec![Coin {
        denom: "uxion".to_string(),
        amount: "1000000".to_string(),
    }],
};
```

### Serialization/Deserialization

```rust
use prost::Message;
use xion_types::types::cosmos::base::v1beta1::Coin;

let coin = Coin {
    denom: "uxion".to_string(),
    amount: "1000000".to_string(),
};

// Encode to bytes
let mut buf = Vec::new();
coin.encode(&mut buf).unwrap();

// Decode from bytes
let decoded = Coin::decode(&buf[..]).unwrap();
```

## Dependencies

- `prost = "0.12"` - Protocol buffer implementation
- `prost-types = "0.12"` - Well-known types (Timestamp, Duration, etc.)

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](https://github.com/burnt-labs/xion-types/blob/main/LICENSE) for details.

## Repository

- **GitHub**: https://github.com/burnt-labs/xion-types
- **Crates.io**: https://crates.io/crates/xion-types

## Related Projects

- [Xion Blockchain](https://github.com/burnt-labs/xion) - The Xion blockchain implementation
- [Xion Documentation](https://github.com/burnt-labs/docs) - Xion blockchain documentation

