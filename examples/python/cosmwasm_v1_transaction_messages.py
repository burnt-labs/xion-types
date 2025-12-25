#!/usr/bin/env python3
"""
cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
transaction messages from the CosmWasm Module (cosmwasm.wasm.v1).

Messages covered:
- MsgStoreCode: Upload a WASM contract
- MsgInstantiateContract: Create a new contract instance
- MsgInstantiateContract2: Create a contract with predictable address
- MsgExecuteContract: Execute a contract function
- MsgMigrateContract: Migrate a contract to new code
- MsgUpdateAdmin: Update contract admin
- MsgClearAdmin: Remove contract admin
"""

import sys
import os
import json

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from cosmwasm.wasm.v1 import tx_pb2 as wasm_tx
from google.protobuf.json_format import MessageToJson, MessageToDict


# =============================================================================
# MsgStoreCode
# =============================================================================
# Upload a new WASM contract to the blockchain.
# Type URL: /cosmwasm.wasm.v1.MsgStoreCode
# Signer: sender

def msg_store_code_examples():
    print('=== MsgStoreCode Examples ===\n')

    # 1. Construct message
    msg = wasm_tx.MsgStoreCode()
    msg.sender = 'xion1deployer...'
    # In practice, wasm_byte_code would be the actual compiled contract bytes
    msg.wasm_byte_code = b'\x00\x61\x73\x6d\x01\x00\x00\x00'  # Minimal WASM header
    # Optional: Restrict who can instantiate this code
    # msg.instantiate_permission.permission = 1  # AccessTypeOnlyAddress
    # msg.instantiate_permission.address = 'xion1allowed...'

    print('1. Constructed MsgStoreCode:')
    print(f'   sender: {msg.sender}')
    print(f'   wasm_byte_code length: {len(msg.wasm_byte_code)} bytes')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgStoreCode')

    # 2. Encode to protobuf bytes
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = wasm_tx.MsgStoreCode()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded sender: {decoded.sender}')
    print(f'   Decoded wasm_byte_code length: {len(decoded.wasm_byte_code)} bytes')

    return msg


# =============================================================================
# MsgInstantiateContract
# =============================================================================
# Create a new instance of an uploaded contract.
# Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
# Signer: sender

def msg_instantiate_contract_examples():
    print('\n=== MsgInstantiateContract Examples ===\n')

    # 1. Construct instantiate message
    init_msg = json.dumps({
        'name': 'My Token',
        'symbol': 'MTK',
        'decimals': 6,
        'initial_balances': [
            {'address': 'xion1holder...', 'amount': '1000000000'}
        ]
    }).encode('utf-8')

    # 2. Construct MsgInstantiateContract
    msg = wasm_tx.MsgInstantiateContract()
    msg.sender = 'xion1deployer...'
    msg.admin = 'xion1admin...'  # Optional admin for migrations
    msg.code_id = 1  # Code ID from MsgStoreCode
    msg.label = 'my-token-v1'
    msg.msg = init_msg
    # Optional: Send funds to contract on instantiation
    fund = msg.funds.add()
    fund.denom = 'uxion'
    fund.amount = '1000000'

    print('1. Constructed MsgInstantiateContract:')
    print(f'   sender: {msg.sender}')
    print(f'   admin: {msg.admin}')
    print(f'   code_id: {msg.code_id}')
    print(f'   label: {msg.label}')
    print(f'   msg: {msg.msg.decode("utf-8")}')
    print(f'   funds: {msg.funds[0].amount} {msg.funds[0].denom}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgInstantiateContract')

    # 3. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 4. Decode
    decoded = wasm_tx.MsgInstantiateContract()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded label: {decoded.label}')
    print(f'   Decoded code_id: {decoded.code_id}')

    return msg


# =============================================================================
# MsgInstantiateContract2
# =============================================================================
# Create a contract with a predictable address (using salt).
# Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract2
# Signer: sender

def msg_instantiate_contract2_examples():
    print('\n=== MsgInstantiateContract2 Examples ===\n')

    init_msg = json.dumps({'count': 0}).encode('utf-8')

    msg = wasm_tx.MsgInstantiateContract2()
    msg.sender = 'xion1deployer...'
    msg.admin = 'xion1admin...'
    msg.code_id = 1
    msg.label = 'counter-v1'
    msg.msg = init_msg
    msg.salt = b'unique-salt-12345'  # Makes address deterministic
    msg.fix_msg = False  # Whether to include msg in address derivation

    print('1. Constructed MsgInstantiateContract2:')
    print(f'   sender: {msg.sender}')
    print(f'   code_id: {msg.code_id}')
    print(f'   label: {msg.label}')
    print(f'   salt: {msg.salt}')
    print(f'   fix_msg: {msg.fix_msg}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgInstantiateContract2')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgExecuteContract
# =============================================================================
# Execute a function on an existing contract.
# Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
# Signer: sender

def msg_execute_contract_examples():
    print('\n=== MsgExecuteContract Examples ===\n')

    # 1. Construct execute message (contract-specific JSON)
    execute_msg = json.dumps({
        'transfer': {
            'recipient': 'xion1recipient...',
            'amount': '1000000'
        }
    }).encode('utf-8')

    # 2. Construct MsgExecuteContract
    msg = wasm_tx.MsgExecuteContract()
    msg.sender = 'xion1sender...'
    msg.contract = 'xion1contractaddress...'
    msg.msg = execute_msg
    # Optional: Send funds with execution
    fund = msg.funds.add()
    fund.denom = 'uxion'
    fund.amount = '500000'

    print('1. Constructed MsgExecuteContract:')
    print(f'   sender: {msg.sender}')
    print(f'   contract: {msg.contract}')
    print(f'   msg: {msg.msg.decode("utf-8")}')
    print(f'   funds: {msg.funds[0].amount} {msg.funds[0].denom}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgExecuteContract')

    # 3. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')
    print(f'   Hex: {encoded_bytes.hex()[:80]}...')

    # 4. Decode
    decoded = wasm_tx.MsgExecuteContract()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded contract: {decoded.contract}')
    print(f'   Decoded msg: {decoded.msg.decode("utf-8")}')

    # 5. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format (truncated):')
    print(f'   {json_str[:200]}...')

    return msg


# =============================================================================
# MsgMigrateContract
# =============================================================================
# Migrate a contract to a new code version.
# Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
# Signer: sender (must be admin)

def msg_migrate_contract_examples():
    print('\n=== MsgMigrateContract Examples ===\n')

    # Migrate message (contract-specific)
    migrate_msg = json.dumps({
        'migrate': {'new_field': 'value'}
    }).encode('utf-8')

    msg = wasm_tx.MsgMigrateContract()
    msg.sender = 'xion1admin...'  # Must be contract admin
    msg.contract = 'xion1contractaddress...'
    msg.code_id = 2  # New code ID
    msg.msg = migrate_msg

    print('1. Constructed MsgMigrateContract:')
    print(f'   sender: {msg.sender}')
    print(f'   contract: {msg.contract}')
    print(f'   code_id: {msg.code_id}')
    print(f'   msg: {msg.msg.decode("utf-8")}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgMigrateContract')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgUpdateAdmin
# =============================================================================
# Update the admin of a contract.
# Type URL: /cosmwasm.wasm.v1.MsgUpdateAdmin
# Signer: sender (must be current admin)

def msg_update_admin_examples():
    print('\n=== MsgUpdateAdmin Examples ===\n')

    msg = wasm_tx.MsgUpdateAdmin()
    msg.sender = 'xion1currentadmin...'  # Current admin
    msg.new_admin = 'xion1newadmin...'
    msg.contract = 'xion1contractaddress...'

    print('1. Constructed MsgUpdateAdmin:')
    print(f'   sender: {msg.sender}')
    print(f'   new_admin: {msg.new_admin}')
    print(f'   contract: {msg.contract}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgUpdateAdmin')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgClearAdmin
# =============================================================================
# Remove the admin from a contract (makes it immutable).
# Type URL: /cosmwasm.wasm.v1.MsgClearAdmin
# Signer: sender (must be current admin)

def msg_clear_admin_examples():
    print('\n=== MsgClearAdmin Examples ===\n')

    msg = wasm_tx.MsgClearAdmin()
    msg.sender = 'xion1admin...'  # Current admin
    msg.contract = 'xion1contractaddress...'

    print('1. Constructed MsgClearAdmin:')
    print(f'   sender: {msg.sender}')
    print(f'   contract: {msg.contract}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.MsgClearAdmin')
    print('\n   WARNING: This makes the contract immutable!')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    msg_store_code_examples()
    msg_instantiate_contract_examples()
    msg_instantiate_contract2_examples()
    msg_execute_contract_examples()
    msg_migrate_contract_examples()
    msg_update_admin_examples()
    msg_clear_admin_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference:')
    print('  MsgStoreCode:            /cosmwasm.wasm.v1.MsgStoreCode')
    print('  MsgInstantiateContract:  /cosmwasm.wasm.v1.MsgInstantiateContract')
    print('  MsgInstantiateContract2: /cosmwasm.wasm.v1.MsgInstantiateContract2')
    print('  MsgExecuteContract:      /cosmwasm.wasm.v1.MsgExecuteContract')
    print('  MsgMigrateContract:      /cosmwasm.wasm.v1.MsgMigrateContract')
    print('  MsgUpdateAdmin:          /cosmwasm.wasm.v1.MsgUpdateAdmin')
    print('  MsgClearAdmin:           /cosmwasm.wasm.v1.MsgClearAdmin')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
