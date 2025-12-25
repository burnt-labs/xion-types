# Xion Python Protobuf Examples

This directory contains examples demonstrating how to use the generated Python protobuf types for **Xion blockchain messages**.

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
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_transaction_messages.py` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm_v1_query_messages.py` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `xion_v1_transaction_messages.py` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `xion_v1_query_messages.py` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `jwk_v1_transaction_messages.py` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `jwk_v1_query_messages.py` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_transaction_messages.py` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs_v1beta1_query_messages.py` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `mint_v1_transaction_messages.py` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `mint_v1_query_messages.py` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `globalfee_v1_query_messages.py` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `indexer_authz_v1_query_messages.py` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `indexer_feegrant_v1_query_messages.py` | Fee allowance queries (query only) |

---

## Prerequisites

```bash
# Install from requirements.txt (recommended)
pip install -r requirements.txt

# Or install manually (requires protobuf 6.x for generated code)
pip install protobuf>=6.0.0
```

You also need to add the `python/types` directory to your Python path. See the examples for how this is done.

---

## Running the Examples

```bash
cd examples/python

# Run a specific example
python xion_v1_transaction_messages.py
python cosmwasm_v1_query_messages.py

# Run all examples
for f in *.py; do python "$f"; done
```

---

## Quick Examples

### MsgSend (Transfer tokens)

```python
import sys
sys.path.insert(0, '../../python/types')

from xion.v1 import tx_pb2 as xion_tx
from cosmos.base.v1beta1 import coin_pb2

# 1. Construct
msg = xion_tx.MsgSend()
msg.from_address = 'xion1sender...'
msg.to_address = 'xion1recipient...'
coin = msg.amount.add()
coin.denom = 'uxion'
coin.amount = '1000000'  # 1 XION = 1,000,000 uxion

# 2. Encode to protobuf bytes
encoded_bytes = msg.SerializeToString()

# 3. Decode from bytes
decoded = xion_tx.MsgSend()
decoded.ParseFromString(encoded_bytes)

# 4. Get typeUrl (for signing)
type_url = '/xion.v1.MsgSend'

# 5. Convert to JSON
from google.protobuf.json_format import MessageToJson, Parse
json_str = MessageToJson(msg)
```

### MsgExecuteContract (Call a smart contract)

```python
from cosmwasm.wasm.v1 import tx_pb2 as wasm_tx
import json

# Contract message as JSON -> bytes
contract_msg = json.dumps({
    'transfer': {'recipient': 'xion1recipient...', 'amount': '1000000'}
}).encode('utf-8')

msg = wasm_tx.MsgExecuteContract()
msg.sender = 'xion1sender...'
msg.contract = 'xion1contractaddress...'
msg.msg = contract_msg
fund = msg.funds.add()
fund.denom = 'uxion'
fund.amount = '1000000'

encoded_bytes = msg.SerializeToString()
```

### QuerySmartContractState (Query a contract)

```python
from cosmwasm.wasm.v1 import query_pb2 as wasm_query
import json

query_msg = json.dumps({'balance': {'address': 'xion1holder...'}}).encode('utf-8')

request = wasm_query.QuerySmartContractStateRequest()
request.address = 'xion1cw20tokencontract...'
request.query_data = query_msg

request_bytes = request.SerializeToString()
```

---

## Type Naming Convention

Python types mirror the proto package structure:

| Proto Package | Python Import |
|---------------|---------------|
| `xion.v1.MsgSend` | `from xion.v1 import tx_pb2` |
| `cosmwasm.wasm.v1.MsgExecuteContract` | `from cosmwasm.wasm.v1 import tx_pb2` |
| `cosmos.base.v1beta1.Coin` | `from cosmos.base.v1beta1 import coin_pb2` |

---

## Key Methods

Each message type provides these methods:

| Method | Description |
|--------|-------------|
| `SerializeToString()` | Encode to protobuf bytes |
| `ParseFromString(bytes)` | Decode from protobuf bytes |
| `SerializeToString()` | Same as above (returns `bytes`) |
| `ByteSize()` | Get the serialized size in bytes |
| `Clear()` | Clear all fields to defaults |
| `CopyFrom(other)` | Copy from another message |
| `MergeFrom(other)` | Merge from another message |

For JSON conversion:
```python
from google.protobuf.json_format import MessageToJson, MessageToDict, Parse

# Message to JSON string
json_str = MessageToJson(msg)

# Message to Python dict
msg_dict = MessageToDict(msg)

# JSON string to message
msg = Parse(json_str, xion_tx.MsgSend())
```

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `string` to handle large numbers

### Bytes Fields

Contract messages and WebAuthN fields use `bytes`. Convert to/from:

```python
# String to bytes
msg_bytes = json.dumps({'key': 'value'}).encode('utf-8')

# Bytes to string
msg_str = msg_bytes.decode('utf-8')

# Base64 encoding
import base64
base64_str = base64.b64encode(msg_bytes).decode('ascii')
msg_bytes = base64.b64decode(base64_str)
```

### Platform Percentage

The `platform_percentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

### Repeated Fields

To add items to repeated fields (like `amount` in MsgSend):

```python
# Method 1: Use add()
coin = msg.amount.add()
coin.denom = 'uxion'
coin.amount = '1000000'

# Method 2: Use extend() with constructed messages
coin = coin_pb2.Coin()
coin.denom = 'uxion'
coin.amount = '1000000'
msg.amount.extend([coin])
```

---

## Testing Locally

```bash
cd examples/python

# Ensure you have protobuf installed
pip install protobuf>=4.25.0

# Run an example
python xion_v1_transaction_messages.py
```
