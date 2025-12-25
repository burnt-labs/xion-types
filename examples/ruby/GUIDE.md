# Xion Ruby Protobuf Examples

This directory contains examples demonstrating how to use the generated Ruby protobuf types for **Xion blockchain messages**.

The files are working code examples you can reference when building applications that interact with Xion. They show the correct field names, types, and methods for each message.

**What they show:**

- **Construct messages** — Create transaction or query objects with the right fields
- **Encode to bytes** — Convert the message to binary format (for sending to the blockchain)
- **Decode from bytes** — Convert binary back to readable objects (for reading responses)
- **JSON serialization** — Convert messages to/from JSON format

---

## Available Example Files

| Module | File | Description |
|--------|------|-------------|
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_transaction_messages.rb` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_query_messages.rb` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `xion_v1_transaction_messages.rb` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `xion_v1_query_messages.rb` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `jwk_v1_transaction_messages.rb` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `jwk_v1_query_messages.rb` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_transaction_messages.rb` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_query_messages.rb` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `mint_v1_transaction_messages.rb` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `mint_v1_query_messages.rb` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `globalfee_v1_query_messages.rb` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `indexer_authz_v1_query_messages.rb` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `indexer_feegrant_v1_query_messages.rb` | Fee allowance queries (query only) |

---

## Prerequisites

```bash
# Install google-protobuf gem
gem install google-protobuf

# Or add to your Gemfile
gem 'google-protobuf', '~> 3.25'
```

You also need to add the `ruby/types` directory to your Ruby load path. See the examples for how this is done.

---

## Running the Examples

```bash
cd examples/ruby

# Run a specific example
ruby xion_v1_transaction_messages.rb
ruby cosmwasm_v1_query_messages.rb

# Run all examples
for f in *.rb; do ruby "$f"; done
```

---

## Quick Examples

### MsgSend (Transfer tokens)

```ruby
require_relative '../../ruby/types/xion/v1/tx_pb'
require_relative '../../ruby/types/cosmos/base/v1beta1/coin_pb'

# 1. Construct
msg = Xion::V1::MsgSend.new(
  from_address: 'xion1sender...',
  to_address: 'xion1recipient...',
  amount: [
    Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000')
  ]
)

# 2. Encode to protobuf bytes
encoded_bytes = Xion::V1::MsgSend.encode(msg)

# 3. Decode from bytes
decoded = Xion::V1::MsgSend.decode(encoded_bytes)

# 4. Get typeUrl (for signing)
type_url = '/xion.v1.MsgSend'

# 5. Convert to JSON
require 'json'
json_str = Xion::V1::MsgSend.encode_json(msg)
```

### MsgExecuteContract (Call a smart contract)

```ruby
require_relative '../../ruby/types/cosmwasm/wasm/v1/tx_pb'
require 'json'

# Contract message as JSON -> bytes
contract_msg = {
  'transfer' => {
    'recipient' => 'xion1recipient...',
    'amount' => '1000000'
  }
}.to_json

msg = Cosmwasm::Wasm::V1::MsgExecuteContract.new(
  sender: 'xion1sender...',
  contract: 'xion1contractaddress...',
  msg: contract_msg.encode('utf-8'),
  funds: [
    Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000')
  ]
)

encoded_bytes = Cosmwasm::Wasm::V1::MsgExecuteContract.encode(msg)
```

### QuerySmartContractState (Query a contract)

```ruby
require_relative '../../ruby/types/cosmwasm/wasm/v1/query_pb'
require 'json'

query_msg = {
  'balance' => { 'address' => 'xion1holder...' }
}.to_json

request = Cosmwasm::Wasm::V1::QuerySmartContractStateRequest.new(
  address: 'xion1cw20tokencontract...',
  query_data: query_msg.encode('utf-8')
)

request_bytes = Cosmwasm::Wasm::V1::QuerySmartContractStateRequest.encode(request)
```

---

## Type Naming Convention

Ruby types mirror the proto package structure:

| Proto Package | Ruby Require |
|---------------|--------------|
| `xion.v1.MsgSend` | `require_relative '../../ruby/types/xion/v1/tx_pb'` |
| `cosmwasm.wasm.v1.MsgExecuteContract` | `require_relative '../../ruby/types/cosmwasm/wasm/v1/tx_pb'` |
| `cosmos.base.v1beta1.Coin` | `require_relative '../../ruby/types/cosmos/base/v1beta1/coin_pb'` |

---

## Key Methods

Each message type provides these methods:

| Method | Description |
|--------|-------------|
| `encode(msg)` | Encode to protobuf bytes |
| `decode(bytes)` | Decode from protobuf bytes |
| `encode_json(msg)` | Encode to JSON string |
| `decode_json(json_str)` | Decode from JSON string |

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `string` to handle large numbers

### Bytes Fields

Contract messages and WebAuthN fields use `String` (bytes). Convert to/from:

```ruby
# String to bytes
msg_bytes = json_string.encode('utf-8')

# Bytes to string
msg_str = msg_bytes.force_encoding('utf-8')

# Base64 encoding
require 'base64'
base64_str = Base64.encode64(msg_bytes)
msg_bytes = Base64.decode64(base64_str)
```

### Platform Percentage

The `platform_percentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

### Repeated Fields

To add items to repeated fields (like `amount` in MsgSend):

```ruby
# Method 1: Pass as array in constructor
msg = Xion::V1::MsgSend.new(
  amount: [
    Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000')
  ]
)

# Method 2: Use << operator
msg.amount << Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000')
```

---

## Testing Locally

```bash
cd examples/ruby

# Ensure you have google-protobuf installed
gem install google-protobuf

# Run an example
ruby xion_v1_transaction_messages.rb
```
