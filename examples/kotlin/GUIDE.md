# Xion Kotlin Protobuf Examples

This directory contains examples demonstrating how to use the generated Kotlin protobuf types for **Xion blockchain messages**.

The files are working code examples you can reference when building applications that interact with Xion. They show the correct field names, types, and methods for each message.

**What they show:**

- **Construct messages** — Create transaction or query objects with the right fields
- **Encode to bytes** — Convert the message to binary format (for sending to the blockchain)
- **Decode from bytes** — Convert binary back to readable objects (for reading responses)
- **Type URLs** — Get the type URL needed for transaction signing

---

## Available Example Files

| Module | File | Description |
|--------|------|-------------|
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm-v1-transaction-messages.kt` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm-v1-query-messages.kt` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `xion-v1-transaction-messages.kt` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `xion-v1-query-messages.kt` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `jwk-v1-transaction-messages.kt` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `jwk-v1-query-messages.kt` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs-v1beta1-transaction-messages.kt` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs-v1beta1-query-messages.kt` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `mint-v1-transaction-messages.kt` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `mint-v1-query-messages.kt` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `globalfee-v1-query-messages.kt` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `indexer-authz-v1-query-messages.kt` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `indexer-feegrant-v1-query-messages.kt` | Fee allowance queries (query only) |

---

## Prerequisites

Add the Kotlin protobuf types to your project. The generated types are in `kotlin/types/` directory.

For Gradle projects, add to your `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.protobuf:protobuf-java:4.29.4")
    implementation("com.google.protobuf:protobuf-kotlin:4.29.4")
    // Add the generated types from kotlin/types directory
}
```

---

## Running the Examples

```bash
cd examples/kotlin

# Compile and run with Kotlin compiler
kotlinc *.kt -cp "path/to/protobuf-java.jar:path/to/kotlin/types" -include-runtime -d examples.jar
kotlin -cp "examples.jar:path/to/protobuf-java.jar" XionV1TransactionMessagesKt

# Or use Gradle/Maven to build and run
```

---

## Quick Examples

### MsgSend (Transfer tokens)

```kotlin
import xion.v1.Tx
import xion.v1.msgSend
import cosmos.base.v1beta1.CoinOuterClass

// 1. Construct using Kotlin DSL
val msg = msgSend {
    fromAddress = "xion1sender..."
    toAddress = "xion1recipient..."
    amount += CoinOuterClass.Coin.newBuilder()
        .setDenom("uxion")
        .setAmount("1000000")
        .build()
}

// 2. Encode to protobuf bytes
val bytes = msg.toByteArray()

// 3. Decode from bytes
val decoded = Tx.MsgSend.parseFrom(bytes)

// 4. Get type URL (for signing)
val typeUrl = "/xion.v1.MsgSend"
```

### MsgExecuteContract (Call a smart contract)

```kotlin
import cosmwasm.wasm.v1.Tx as CosmWasmTx
import cosmwasm.wasm.v1.msgExecuteContract

// Contract message as JSON -> ByteArray
val contractMsg = """
    {
        "transfer": {
            "recipient": "xion1recipient...",
            "amount": "1000000"
        }
    }
""".trimIndent()

val msg = msgExecuteContract {
    sender = "xion1sender..."
    contract = "xion1contractaddress..."
    msg = contractMsg.toByteArray(Charsets.UTF_8)
    funds += CoinOuterClass.Coin.newBuilder()
        .setDenom("uxion")
        .setAmount("1000000")
        .build()
}

val bytes = msg.toByteArray()
```

### QuerySmartContractState (Query a contract)

```kotlin
import cosmwasm.wasm.v1.QueryOuterClass

val queryMsg = """
    {
        "balance": {
            "address": "xion1holder..."
        }
    }
""".trimIndent()

val request = QueryOuterClass.QuerySmartContractStateRequest.newBuilder()
    .setAddress("xion1cw20tokencontract...")
    .setQueryData(queryMsg.toByteArray(Charsets.UTF_8))
    .build()

val requestBytes = request.toByteArray()
```

---

## Type Naming Convention

Kotlin types mirror the proto package structure:

| Proto Package | Kotlin Import |
|---------------|--------------|
| `xion.v1.MsgSend` | `xion.v1.Tx.MsgSend` or use DSL `xion.v1.msgSend` |
| `cosmwasm.wasm.v1.MsgExecuteContract` | `cosmwasm.wasm.v1.Tx.MsgExecuteContract` or DSL `cosmwasm.wasm.v1.msgExecuteContract` |
| `cosmos.base.v1beta1.Coin` | `cosmos.base.v1beta1.CoinOuterClass.Coin` |

---

## Key Methods

Each message type provides these methods:

| Method | Description |
|--------|-------------|
| `newBuilder()` | Create a builder for constructing messages |
| Kotlin DSL `msgType { }` | Use Kotlin DSL for easier construction |
| `toByteArray()` | Encode to protobuf `ByteArray` |
| `parseFrom(bytes)` | Decode from protobuf bytes |
| `getDescriptor()` | Get protobuf descriptor |

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `String` to handle large numbers

### Bytes Fields (ByteArray)

Contract messages and WebAuthN fields use `ByteArray`. Convert to/from:

```kotlin
// String to ByteArray
val bytes = jsonString.toByteArray(Charsets.UTF_8)

// ByteArray to String
val str = String(bytes, Charsets.UTF_8)

// Base64 encoding
import java.util.Base64
val base64 = Base64.getEncoder().encodeToString(bytes)
val bytes = Base64.getDecoder().decode(base64)

// Hex encoding
val hex = bytes.joinToString("") { "%02x".format(it) }
```

### Platform Percentage

The `platformPercentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

---

## Testing Locally

```bash
cd examples/kotlin

# Ensure protobuf types are generated
cd ../..
make proto-gen-kotlin

# Compile and run examples
kotlinc examples/kotlin/*.kt -cp "kotlin/types:path/to/protobuf-java.jar" -include-runtime -d examples.jar
kotlin -cp "examples.jar:path/to/protobuf-java.jar" XionV1TransactionMessagesKt
```
