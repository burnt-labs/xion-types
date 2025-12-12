# Xion Swift Protobuf Examples

This directory contains examples demonstrating how to use the generated SwiftProtobuf types for **Xion blockchain messages**.

The files are working code examples you can reference when building iOS/macOS applications that interact with Xion. They show the correct field names, types, and methods for each message.

**What they show:**

- **Construct messages** — Create transaction or query objects with the right fields
- **Encode to bytes** — Convert the message to binary format (for sending to the blockchain)
- **Decode from bytes** — Convert binary back to readable objects (for reading responses)
- **JSON encoding** — Convert to/from JSON format

---

## Available Example Files

| Module | File | Description |
|--------|------|-------------|
| **cosmwasm.wasm.v1** (CosmWasm) | `CosmWasmTransactionExamples.swift` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `CosmWasmQueryExamples.swift` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `XionV1TransactionExamples.swift` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `XionV1QueryExamples.swift` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `JwkV1TransactionExamples.swift` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `JwkV1QueryExamples.swift` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `FeeabsV1beta1TransactionExamples.swift` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `FeeabsV1beta1QueryExamples.swift` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `MintV1TransactionExamples.swift` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `MintV1QueryExamples.swift` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `GlobalfeeV1QueryExamples.swift` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `IndexerAuthzV1QueryExamples.swift` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `IndexerFeegrantV1QueryExamples.swift` | Fee allowance queries (query only) |

---

## Prerequisites

- Swift 5.9+
- Xcode 15+ (for iOS/macOS development)

---

## Running the Examples

```bash
cd examples/swift

# Build and run
swift run XionTypesExamples
```

---

## Quick Examples

### MsgSend (Transfer tokens)

```swift
import SwiftProtobuf

// 1. Construct
var msg = Xion_V1_MsgSend()
msg.fromAddress = "xion1sender..."
msg.toAddress = "xion1recipient..."

var coin = Cosmos_Base_V1beta1_Coin()
coin.denom = "uxion"
coin.amount = "1000000" // 1 XION = 1,000,000 uxion
msg.amount = [coin]

// 2. Encode to protobuf bytes
let bytes = try msg.serializedData()

// 3. Decode from bytes
let decoded = try Xion_V1_MsgSend(serializedData: bytes)

// 4. JSON encoding
let jsonData = try msg.jsonUTF8Data()
let jsonString = String(data: jsonData, encoding: .utf8)
```

### MsgExecuteContract (Call a smart contract)

```swift
import SwiftProtobuf
import Foundation

// 1. Construct
var msg = Cosmwasm_Wasm_V1_MsgExecuteContract()
msg.sender = "xion1sender..."
msg.contract = "xion1contractaddress..."

// Contract message as JSON -> Data
let contractMsg: [String: Any] = [
    "transfer": [
        "recipient": "xion1recipient...",
        "amount": "1000000"
    ]
]
msg.msg = try! JSONSerialization.data(withJSONObject: contractMsg)

// Optional: attach funds
var coin = Cosmos_Base_V1beta1_Coin()
coin.denom = "uxion"
coin.amount = "1000000"
msg.funds = [coin]

// 2. Encode to protobuf bytes
let bytes = try msg.serializedData()
```

### QuerySmartContractState (Query a contract)

```swift
import SwiftProtobuf
import Foundation

// 1. Construct query request
var request = Cosmwasm_Wasm_V1_QuerySmartContractStateRequest()
request.address = "xion1cw20tokencontract..."

// Query message as JSON -> Data
let queryMsg: [String: Any] = [
    "balance": ["address": "xion1holder..."]
]
request.queryData = try! JSONSerialization.data(withJSONObject: queryMsg)

// 2. Encode request
let requestBytes = try request.serializedData()

// 3. Parse response (after receiving from chain)
let response = try Cosmwasm_Wasm_V1_QuerySmartContractStateResponse(serializedData: responseBytes)
let resultJson = try JSONSerialization.jsonObject(with: response.data)
```

---

## Type Naming Convention

SwiftProtobuf generates types with underscores separating the package path:

| Proto Package | Swift Type |
|---------------|------------|
| `xion.v1.MsgSend` | `Xion_V1_MsgSend` |
| `cosmwasm.wasm.v1.MsgExecuteContract` | `Cosmwasm_Wasm_V1_MsgExecuteContract` |
| `cosmos.base.v1beta1.Coin` | `Cosmos_Base_V1beta1_Coin` |
| `xion.indexer.authz.v1.QueryGrantsRequest` | `Xion_Indexer_Authz_V1_QueryGrantsRequest` |

---

## Key Methods

Each message type provides these methods:

| Method | Description |
|--------|-------------|
| `init()` | Create empty message |
| `serializedData()` | Encode to protobuf `Data` |
| `init(serializedData:)` | Decode from protobuf bytes |
| `jsonUTF8Data()` | Encode to JSON `Data` |
| `init(jsonUTF8Data:)` | Decode from JSON |
| `protoMessageName` | Get the proto message name (static) |

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `String` to handle large numbers

### Data Fields (bytes)

Contract messages use `Data` type. Convert JSON to/from Data:

```swift
// JSON dict to Data
let dict: [String: Any] = ["transfer": ["recipient": "xion1...", "amount": "1000"]]
let data = try JSONSerialization.data(withJSONObject: dict)

// Data to JSON dict
let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
```

### Platform Percentage

The `platformPercentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

---

## Using in Your Project

### Option 1: Add as a local package dependency

```swift
// Package.swift
dependencies: [
    .package(path: "/path/to/xion-types/swift/types"),
    .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.25.0"),
]
```

### Option 2: Copy the types

Copy the files from `swift/types/` into your project's source directory.

---

## Testing Locally

```bash
cd examples/swift

# Build and run all examples
swift run XionTypesExamples

# Or build only (without running)
swift build

# Clean build artifacts
swift package clean
```
