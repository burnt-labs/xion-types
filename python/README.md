# Xion Types - Python

Generated Python types for Xion blockchain protocol buffers.

## Installation

```bash
pip install xion-types
```

## Usage

```python
from types.cosmos.bank.v1beta1 import tx_pb2
from types.cosmos.base.v1beta1 import coin_pb2

# Create a bank send message
msg = tx_pb2.MsgSend()
msg.from_address = "xion1..."
msg.to_address = "xion1..."

# Add coins
coin = coin_pb2.Coin()
coin.denom = "uxion"
coin.amount = "1000000"
msg.amount.append(coin)

# Serialize
data = msg.SerializeToString()
```

## Available Modules

- `types.cosmos.*` - Cosmos SDK types
- `types.abstractaccount.*` - Abstract Account module types
- `types.xion.*` - Xion-specific types
- `types.cosmwasm.*` - CosmWasm types

## Requirements

- Python >= 3.8
- protobuf >= 5.29.4

## License

Apache-2.0

