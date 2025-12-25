#!/usr/bin/env python3
"""
xion.v1 Transaction Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
transaction messages from the Core Xion Module (xion.v1).

Messages covered:
- MsgSend: Transfer coins between addresses
- MsgMultiSend: Multi-input, multi-output transfers
- MsgSetPlatformPercentage: Set platform fee percentage (governance)
- MsgSetPlatformMinimum: Set minimum platform fees (governance)
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.v1 import tx_pb2 as xion_tx
from cosmos.base.v1beta1 import coin_pb2
from cosmos.bank.v1beta1 import bank_pb2
from google.protobuf.json_format import MessageToJson, MessageToDict


# =============================================================================
# MsgSend
# =============================================================================
# Transfer coins from one address to another.
# Type URL: /xion.v1.MsgSend
# Signer: from_address

def msg_send_examples():
    print('=== MsgSend Examples ===\n')

    # 1. Construct message
    msg = xion_tx.MsgSend()
    msg.from_address = 'xion1sender...'
    msg.to_address = 'xion1recipient...'
    coin = msg.amount.add()
    coin.denom = 'uxion'
    coin.amount = '1000000'  # 1 XION = 1,000,000 uxion

    print('1. Constructed MsgSend:')
    print(f'   from_address: {msg.from_address}')
    print(f'   to_address: {msg.to_address}')
    print(f'   amount: {msg.amount[0].amount} {msg.amount[0].denom}')
    print(f'   typeUrl: /xion.v1.MsgSend')

    # 2. Encode to protobuf bytes
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded to protobuf bytes:')
    print(f'   Length: {len(encoded_bytes)} bytes')
    print(f'   Hex: {encoded_bytes.hex()}')

    # 3. Decode from protobuf bytes
    decoded = xion_tx.MsgSend()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded from bytes:')
    print(f'   from_address: {decoded.from_address}')
    print(f'   to_address: {decoded.to_address}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    # 5. Dict format
    msg_dict = MessageToDict(msg)
    print(f'\n5. Dict format:')
    print(f'   {msg_dict}')

    return msg


# =============================================================================
# MsgMultiSend
# =============================================================================
# Multi-input, multi-output transfer.
# Type URL: /xion.v1.MsgMultiSend
# Signer: inputs (note: only one input is allowed despite being repeated)

def msg_multi_send_examples():
    print('\n=== MsgMultiSend Examples ===\n')

    # 1. Construct inputs
    input_msg = bank_pb2.Input()
    input_msg.address = 'xion1sender...'
    coin = input_msg.coins.add()
    coin.denom = 'uxion'
    coin.amount = '3000000'  # Total: 3 XION

    # 2. Construct outputs
    output1 = bank_pb2.Output()
    output1.address = 'xion1recipient1...'
    coin1 = output1.coins.add()
    coin1.denom = 'uxion'
    coin1.amount = '1000000'  # 1 XION

    output2 = bank_pb2.Output()
    output2.address = 'xion1recipient2...'
    coin2 = output2.coins.add()
    coin2.denom = 'uxion'
    coin2.amount = '2000000'  # 2 XION

    # 3. Construct MsgMultiSend
    msg = xion_tx.MsgMultiSend()
    msg.inputs.append(input_msg)  # Only ONE input allowed
    msg.outputs.append(output1)
    msg.outputs.append(output2)

    print('1. Constructed MsgMultiSend:')
    print(f'   inputs: {len(msg.inputs)}')
    print(f'   outputs: {len(msg.outputs)}')
    print(f'   typeUrl: /xion.v1.MsgMultiSend')

    # 4. Encode to protobuf
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 5. Decode
    decoded = xion_tx.MsgMultiSend()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded outputs:')
    for i, o in enumerate(decoded.outputs):
        print(f'   Output {i}: {o.address} -> {o.coins[0].amount} {o.coins[0].denom}')

    return msg


# =============================================================================
# MsgSetPlatformPercentage
# =============================================================================
# Set the platform fee percentage (governance message).
# Type URL: /xion.v1.MsgSetPlatformPercentage
# Signer: authority (governance address)
# Note: platform_percentage is multiplied by 10000 (e.g., 500 = 5%)

def msg_set_platform_percentage_examples():
    print('\n=== MsgSetPlatformPercentage Examples ===\n')

    # 1. Construct message
    # platform_percentage is multiplied by 10000
    # Example: 500 = 5%, 100 = 1%, 10000 = 100%
    msg = xion_tx.MsgSetPlatformPercentage()
    msg.authority = 'xion1governance...'  # Governance module address
    msg.platform_percentage = 500  # 5% fee

    print('1. Constructed MsgSetPlatformPercentage:')
    print(f'   authority: {msg.authority}')
    print(f'   platform_percentage: {msg.platform_percentage}')
    print(f'   Actual percentage: {msg.platform_percentage / 100}%')
    print(f'   typeUrl: /xion.v1.MsgSetPlatformPercentage')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = xion_tx.MsgSetPlatformPercentage()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded platform_percentage: {decoded.platform_percentage}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# MsgSetPlatformMinimum
# =============================================================================
# Set the minimum platform fees (governance message).
# Type URL: /xion.v1.MsgSetPlatformMinimum
# Signer: authority (governance address)

def msg_set_platform_minimum_examples():
    print('\n=== MsgSetPlatformMinimum Examples ===\n')

    # 1. Construct message with multiple minimum fee denominations
    msg = xion_tx.MsgSetPlatformMinimum()
    msg.authority = 'xion1governance...'

    min1 = msg.minimums.add()
    min1.denom = 'uxion'
    min1.amount = '1000'  # Minimum 0.001 XION

    min2 = msg.minimums.add()
    min2.denom = 'uatom'
    min2.amount = '500'  # Can set for other denoms too

    print('1. Constructed MsgSetPlatformMinimum:')
    print(f'   authority: {msg.authority}')
    print(f'   minimums:')
    for m in msg.minimums:
        print(f'     - {m.amount} {m.denom}')
    print(f'   typeUrl: /xion.v1.MsgSetPlatformMinimum')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = xion_tx.MsgSetPlatformMinimum()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded minimums: {len(decoded.minimums)} entries')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# Coin Helper
# =============================================================================
# The Coin type is used by many messages

def coin_examples():
    print('\n=== Coin Helper Examples ===\n')

    # Construct a Coin
    coin = coin_pb2.Coin()
    coin.denom = 'uxion'
    coin.amount = '1000000'

    print(f'Coin: {coin.amount} {coin.denom}')

    # Encode/decode
    encoded = coin.SerializeToString()
    decoded = coin_pb2.Coin()
    decoded.ParseFromString(encoded)
    print(f'Decoded: {decoded.amount} {decoded.denom}')

    # JSON format
    json_str = MessageToJson(coin)
    print(f'JSON: {json_str}')

    return coin


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.v1 Transaction Messages — Protobuf Examples          ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    msg_send_examples()
    msg_multi_send_examples()
    msg_set_platform_percentage_examples()
    msg_set_platform_minimum_examples()
    coin_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference:')
    print('  MsgSend:                   /xion.v1.MsgSend')
    print('  MsgMultiSend:              /xion.v1.MsgMultiSend')
    print('  MsgSetPlatformPercentage:  /xion.v1.MsgSetPlatformPercentage')
    print('  MsgSetPlatformMinimum:     /xion.v1.MsgSetPlatformMinimum')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
