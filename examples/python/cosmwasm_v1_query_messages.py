#!/usr/bin/env python3
"""
cosmwasm.wasm.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the CosmWasm Module (cosmwasm.wasm.v1).

Queries covered:
- QuerySmartContractState: Execute a read-only query on a contract
- QueryRawContractState: Get raw key-value state from a contract
- QueryContractInfo: Get contract metadata
- QueryContractHistory: Get contract migration history
- QueryContractsByCode: List all contracts for a code ID
- QueryCode: Get code metadata
- QueryCodes: List all uploaded codes
"""

import sys
import os
import json
import base64

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from cosmwasm.wasm.v1 import query_pb2 as wasm_query
from google.protobuf.json_format import MessageToJson, MessageToDict


# =============================================================================
# QuerySmartContractStateRequest / Response
# =============================================================================
# Execute a read-only query on a smart contract.
# Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest

def query_smart_contract_state_examples():
    print('=== QuerySmartContractState Examples ===\n')

    # 1. Construct query message (contract-specific JSON)
    query_msg = json.dumps({
        'balance': {'address': 'xion1holder...'}
    }).encode('utf-8')

    # 2. Construct request
    request = wasm_query.QuerySmartContractStateRequest()
    request.address = 'xion1cw20tokencontract...'
    request.query_data = query_msg

    print('1. Constructed QuerySmartContractStateRequest:')
    print(f'   address: {request.address}')
    print(f'   query_data: {request.query_data.decode("utf-8")}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateRequest')

    # 3. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 4. Decode request
    decoded_request = wasm_query.QuerySmartContractStateRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded address: {decoded_request.address}')
    print(f'   Decoded query_data: {decoded_request.query_data.decode("utf-8")}')

    # === Response ===
    print('\n--- Response ---')

    # Response contains JSON data as bytes
    response = wasm_query.QuerySmartContractStateResponse()
    response.data = json.dumps({'balance': '1000000'}).encode('utf-8')

    print('4. Constructed Response:')
    print(f'   data: {response.data.decode("utf-8")}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateResponse')

    # Parse the JSON response
    balance_data = json.loads(response.data.decode('utf-8'))
    print(f'\n5. Parsed balance: {balance_data["balance"]}')

    return request, response


# =============================================================================
# QueryRawContractStateRequest / Response
# =============================================================================
# Get raw key-value state from a contract.
# Type URL: /cosmwasm.wasm.v1.QueryRawContractStateRequest

def query_raw_contract_state_examples():
    print('\n=== QueryRawContractState Examples ===\n')

    # 1. Construct request
    # Key is contract-specific (often prefixed with storage namespace)
    storage_key = b'config'

    request = wasm_query.QueryRawContractStateRequest()
    request.address = 'xion1contractaddress...'
    request.query_data = storage_key

    print('1. Constructed QueryRawContractStateRequest:')
    print(f'   address: {request.address}')
    print(f'   query_data: {request.query_data}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryRawContractStateRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = wasm_query.QueryRawContractStateResponse()
    response.data = json.dumps({'admin': 'xion1admin...'}).encode('utf-8')

    print('3. Constructed Response:')
    print(f'   data: {response.data}')

    return request, response


# =============================================================================
# QueryContractInfoRequest / Response
# =============================================================================
# Get contract metadata.
# Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest

def query_contract_info_examples():
    print('\n=== QueryContractInfo Examples ===\n')

    # 1. Construct request
    request = wasm_query.QueryContractInfoRequest()
    request.address = 'xion1contractaddress...'

    print('1. Constructed QueryContractInfoRequest:')
    print(f'   address: {request.address}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryContractInfoRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    # Response includes contract metadata
    response = wasm_query.QueryContractInfoResponse()
    response.address = 'xion1contractaddress...'
    response.contract_info.code_id = 1
    response.contract_info.creator = 'xion1deployer...'
    response.contract_info.admin = 'xion1admin...'
    response.contract_info.label = 'my-contract-v1'

    print('3. Constructed Response:')
    print(f'   address: {response.address}')
    print(f'   code_id: {response.contract_info.code_id}')
    print(f'   creator: {response.contract_info.creator}')
    print(f'   admin: {response.contract_info.admin}')
    print(f'   label: {response.contract_info.label}')

    # 4. JSON format
    json_str = MessageToJson(response)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryContractHistoryRequest / Response
# =============================================================================
# Get contract migration history.
# Type URL: /cosmwasm.wasm.v1.QueryContractHistoryRequest

def query_contract_history_examples():
    print('\n=== QueryContractHistory Examples ===\n')

    # 1. Construct request with pagination
    request = wasm_query.QueryContractHistoryRequest()
    request.address = 'xion1contractaddress...'
    request.pagination.limit = 10
    request.pagination.offset = 0

    print('1. Constructed QueryContractHistoryRequest:')
    print(f'   address: {request.address}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryContractHistoryRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = wasm_query.QueryContractHistoryResponse()
    # Add history entries
    entry1 = response.entries.add()
    entry1.operation = 1  # CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT
    entry1.code_id = 1
    entry1.msg = json.dumps({'init': 'msg'}).encode('utf-8')

    entry2 = response.entries.add()
    entry2.operation = 2  # CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE
    entry2.code_id = 2
    entry2.msg = json.dumps({'migrate': 'msg'}).encode('utf-8')

    print('3. Constructed Response:')
    print(f'   entries count: {len(response.entries)}')
    for i, entry in enumerate(response.entries):
        op_names = {1: 'INIT', 2: 'MIGRATE', 3: 'GENESIS'}
        print(f'   [{i}] operation: {op_names.get(entry.operation, entry.operation)}, code_id: {entry.code_id}')

    return request, response


# =============================================================================
# QueryContractsByCodeRequest / Response
# =============================================================================
# List all contracts instantiated from a specific code ID.
# Type URL: /cosmwasm.wasm.v1.QueryContractsByCodeRequest

def query_contracts_by_code_examples():
    print('\n=== QueryContractsByCode Examples ===\n')

    # 1. Construct request
    request = wasm_query.QueryContractsByCodeRequest()
    request.code_id = 1
    request.pagination.limit = 20

    print('1. Constructed QueryContractsByCodeRequest:')
    print(f'   code_id: {request.code_id}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryContractsByCodeRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = wasm_query.QueryContractsByCodeResponse()
    response.contracts.append('xion1contract1...')
    response.contracts.append('xion1contract2...')
    response.contracts.append('xion1contract3...')

    print('3. Constructed Response:')
    print(f'   contracts count: {len(response.contracts)}')
    for contract in response.contracts:
        print(f'     - {contract}')

    return request, response


# =============================================================================
# QueryCodeRequest / Response
# =============================================================================
# Get code metadata and the WASM bytecode.
# Type URL: /cosmwasm.wasm.v1.QueryCodeRequest

def query_code_examples():
    print('\n=== QueryCode Examples ===\n')

    # 1. Construct request
    request = wasm_query.QueryCodeRequest()
    request.code_id = 1

    print('1. Constructed QueryCodeRequest:')
    print(f'   code_id: {request.code_id}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryCodeRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = wasm_query.QueryCodeResponse()
    response.code_info.code_id = 1
    response.code_info.creator = 'xion1deployer...'
    response.data = b'\x00\x61\x73\x6d\x01\x00\x00\x00'  # Minimal WASM header

    print('3. Constructed Response:')
    print(f'   code_id: {response.code_info.code_id}')
    print(f'   creator: {response.code_info.creator}')
    print(f'   data length: {len(response.data)} bytes')

    return request, response


# =============================================================================
# QueryCodesRequest / Response
# =============================================================================
# List all uploaded codes.
# Type URL: /cosmwasm.wasm.v1.QueryCodesRequest

def query_codes_examples():
    print('\n=== QueryCodes Examples ===\n')

    # 1. Construct request
    request = wasm_query.QueryCodesRequest()
    request.pagination.limit = 10

    print('1. Constructed QueryCodesRequest:')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /cosmwasm.wasm.v1.QueryCodesRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = wasm_query.QueryCodesResponse()
    code1 = response.code_infos.add()
    code1.code_id = 1
    code1.creator = 'xion1deployer1...'

    code2 = response.code_infos.add()
    code2.code_id = 2
    code2.creator = 'xion1deployer2...'

    print('3. Constructed Response:')
    print(f'   code_infos count: {len(response.code_infos)}')
    for info in response.code_infos:
        print(f'     - code_id: {info.code_id}, creator: {info.creator}')

    return request, response


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  cosmwasm.wasm.v1 Query Messages — Protobuf Examples       ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_smart_contract_state_examples()
    query_raw_contract_state_examples()
    query_contract_info_examples()
    query_contract_history_examples()
    query_contracts_by_code_examples()
    query_code_examples()
    query_codes_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QuerySmartContractStateRequest:  /cosmwasm.wasm.v1.QuerySmartContractStateRequest')
    print('  QueryRawContractStateRequest:    /cosmwasm.wasm.v1.QueryRawContractStateRequest')
    print('  QueryContractInfoRequest:        /cosmwasm.wasm.v1.QueryContractInfoRequest')
    print('  QueryContractHistoryRequest:     /cosmwasm.wasm.v1.QueryContractHistoryRequest')
    print('  QueryContractsByCodeRequest:     /cosmwasm.wasm.v1.QueryContractsByCodeRequest')
    print('  QueryCodeRequest:                /cosmwasm.wasm.v1.QueryCodeRequest')
    print('  QueryCodesRequest:               /cosmwasm.wasm.v1.QueryCodesRequest')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
