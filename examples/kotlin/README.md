# Kotlin Examples Testing

## Test Results

✅ **All examples validated successfully!**

### Validation Summary

- **13 example files** checked
- **All DSL functions** verified to exist
- **All files** have `main()` functions
- **No syntax errors** detected
- **All imports** reference valid types

### Verified DSL Functions

- ✅ `msgSend` (xion.v1)
- ✅ `msgExecuteContract` (cosmwasm.wasm.v1)
- ✅ `queryParamsRequest` (multiple modules)
- ✅ `queryGrantsRequest` (xion.indexer.authz.v1)

## Running Tests

### Basic Validation

```bash
cd examples/kotlin
./test-compile.sh
```

This script checks:
- Package declarations
- Main functions
- Import statements
- Basic syntax
- Encoding/decoding patterns

### Full Compilation (Requires Kotlin)

To fully compile and run the examples, you need:

1. **Kotlin Compiler**
   ```bash
   # Install via Homebrew (macOS)
   brew install kotlin
   
   # Or download from https://kotlinlang.org/docs/getting-started.html
   ```

2. **Protobuf Java Library**
   ```bash
   # Add to your build.gradle.kts or download JAR
   implementation("com.google.protobuf:protobuf-java:4.29.4")
   implementation("com.google.protobuf:protobuf-kotlin:4.29.4")
   ```

3. **Compile and Run**
   ```bash
   # Compile with classpath including generated types
   kotlinc -cp "../../kotlin/types:path/to/protobuf-java.jar" \
     xion-v1-transaction-messages.kt \
     -include-runtime -d examples.jar
   
   # Run
   kotlin -cp "examples.jar:path/to/protobuf-java.jar" \
     XionV1TransactionMessagesKt
   ```

## Example Files

All 13 example files follow the same structure:

1. **Package declaration**: `package examples.kotlin`
2. **Imports**: Generated protobuf types
3. **Example functions**: Demonstrate message construction
4. **Main function**: Runs all examples

### File List

- `xion-v1-transaction-messages.kt` - Core transaction messages
- `xion-v1-query-messages.kt` - Core query messages
- `jwk-v1-transaction-messages.kt` - JWK transaction messages
- `jwk-v1-query-messages.kt` - JWK query messages
- `mint-v1-transaction-messages.kt` - Mint transaction messages
- `mint-v1-query-messages.kt` - Mint query messages
- `cosmwasm-v1-transaction-messages.kt` - CosmWasm transaction messages
- `cosmwasm-v1-query-messages.kt` - CosmWasm query messages
- `feeabs-v1beta1-transaction-messages.kt` - FeeAbs transaction messages
- `feeabs-v1beta1-query-messages.kt` - FeeAbs query messages
- `globalfee-v1-query-messages.kt` - GlobalFee query messages
- `indexer-authz-v1-query-messages.kt` - Authz Indexer query messages
- `indexer-feegrant-v1-query-messages.kt` - Feegrant Indexer query messages

## Notes

- Examples use Kotlin DSL functions (`msgSend { }`, `queryParamsRequest { }`)
- All examples demonstrate encoding (`toByteArray()`) and decoding (`parseFrom()`)
- Type URLs are included for transaction signing