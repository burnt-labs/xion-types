#!/usr/bin/env python3
"""
xion.feeabs.v1beta1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the Fee Abstraction Module (xion.feeabs.v1beta1).

Queries covered:
- QueryHostChainConfig: Get configuration for a specific host chain
- QueryAllHostChainConfig: List all host chain configurations
- QueryOsmosisArithmeticTwap: Get TWAP from Osmosis
- QueryFeeabsModuleBalances: Get module account balances
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.feeabs.v1beta1 import query_pb2 as feeabs_query
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryHostChainConfigRequest / Response
# =============================================================================
# Get configuration for a specific host chain.
# Type URL: /xion.feeabs.v1beta1.QueryHostChainConfigRequest

def query_host_chain_config_examples():
    print('=== QueryHostChainConfig Examples ===\n')

    # 1. Construct request
    request = feeabs_query.QueryHostChainConfigRequest()
    request.ibc_denom = 'ibc/27394FB092D2ECCD...'  # IBC denom hash

    print('1. Constructed QueryHostChainConfigRequest:')
    print(f'   ibc_denom: {request.ibc_denom}')
    print(f'   typeUrl: /xion.feeabs.v1beta1.QueryHostChainConfigRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 3. Decode request
    decoded_request = feeabs_query.QueryHostChainConfigRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded ibc_denom: {decoded_request.ibc_denom}')

    # === Response ===
    print('\n--- Response ---')

    response = feeabs_query.QueryHostChainConfigResponse()
    response.host_chain_config.ibc_denom = 'ibc/27394FB092D2ECCD...'
    response.host_chain_config.osmosis_pool_token_denom_in = 'uatom'
    response.host_chain_config.pool_id = 1
    response.host_chain_config.status = 1  # HostChainFeeAbsStatus

    print('4. Constructed Response:')
    print(f'   host_chain_config.ibc_denom: {response.host_chain_config.ibc_denom}')
    print(f'   host_chain_config.osmosis_pool_token_denom_in: {response.host_chain_config.osmosis_pool_token_denom_in}')
    print(f'   host_chain_config.pool_id: {response.host_chain_config.pool_id}')
    print(f'   host_chain_config.status: {response.host_chain_config.status}')

    # 5. JSON format
    json_str = MessageToJson(response)
    print(f'\n5. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryAllHostChainConfigRequest / Response
# =============================================================================
# List all host chain configurations.
# Type URL: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest

def query_all_host_chain_config_examples():
    print('\n=== QueryAllHostChainConfig Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = feeabs_query.AllQueryHostChainConfigRequest()

    print('1. Constructed AllQueryHostChainConfigRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.feeabs.v1beta1.AllQueryHostChainConfigRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = feeabs_query.AllQueryHostChainConfigResponse()
    
    config1 = response.all_host_chain_config.add()
    config1.ibc_denom = 'ibc/27394FB092D2ECCD...'
    config1.osmosis_pool_token_denom_in = 'uatom'
    config1.pool_id = 1

    config2 = response.all_host_chain_config.add()
    config2.ibc_denom = 'ibc/ABC123DEF456...'
    config2.osmosis_pool_token_denom_in = 'uusdc'
    config2.pool_id = 2

    print('3. Constructed Response:')
    print(f'   all_host_chain_config count: {len(response.all_host_chain_config)}')
    for i, config in enumerate(response.all_host_chain_config):
        print(f'   [{i}] ibc_denom: {config.ibc_denom[:30]}...')
        print(f'       pool_id: {config.pool_id}')

    return request, response


# =============================================================================
# QueryOsmosisArithmeticTwapRequest / Response
# =============================================================================
# Get TWAP (Time-Weighted Average Price) from Osmosis.
# Type URL: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest

def query_osmosis_arithmetic_twap_examples():
    print('\n=== QueryOsmosisArithmeticTwap Examples ===\n')

    # 1. Construct request
    request = feeabs_query.QueryOsmosisArithmeticTwapRequest()
    request.ibc_denom = 'ibc/27394FB092D2ECCD...'

    print('1. Constructed QueryOsmosisArithmeticTwapRequest:')
    print(f'   ibc_denom: {request.ibc_denom}')
    print(f'   typeUrl: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = feeabs_query.QueryOsmosisArithmeticTwapResponse()
    response.arithmetic_twap = '1.234567890000000000'  # Price as decimal string

    print('3. Constructed Response:')
    print(f'   arithmetic_twap: {response.arithmetic_twap}')
    print(f'   (This is the time-weighted average price)')

    return request, response


# =============================================================================
# QueryFeeabsModuleBalancesRequest / Response
# =============================================================================
# Get the fee abstraction module account balances.
# Type URL: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest

def query_feeabs_module_balances_examples():
    print('\n=== QueryFeeabsModuleBalances Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = feeabs_query.QueryFeeabsModuleBalacesRequest()

    print('1. Constructed QueryFeeabsModuleBalacesRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = feeabs_query.QueryFeeabsModuleBalacesResponse()
    
    bal1 = response.balances.add()
    bal1.denom = 'uxion'
    bal1.amount = '1000000000'

    bal2 = response.balances.add()
    bal2.denom = 'ibc/27394FB092D2ECCD...'
    bal2.amount = '500000000'

    response.address = 'xion1feeabsmoduleaddress...'

    print('3. Constructed Response:')
    print(f'   address: {response.address}')
    print(f'   balances count: {len(response.balances)}')
    for bal in response.balances:
        print(f'     - {bal.amount} {bal.denom[:30]}...')

    return request, response


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.feeabs.v1beta1 Query Messages — Protobuf Examples    ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_host_chain_config_examples()
    query_all_host_chain_config_examples()
    query_osmosis_arithmetic_twap_examples()
    query_feeabs_module_balances_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryHostChainConfigRequest:        /xion.feeabs.v1beta1.QueryHostChainConfigRequest')
    print('  AllQueryHostChainConfigRequest:     /xion.feeabs.v1beta1.AllQueryHostChainConfigRequest')
    print('  QueryOsmosisArithmeticTwapRequest:  /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest')
    print('  QueryFeeabsModuleBalacesRequest:    /xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest')
    print('\nREST Endpoints:')
    print('  GET /xion/feeabs/v1beta1/host_chain_config/{ibc_denom}')
    print('  GET /xion/feeabs/v1beta1/all_host_chain_config')
    print('  GET /xion/feeabs/v1beta1/osmosis_arithmetic_twap/{ibc_denom}')
    print('  GET /xion/feeabs/v1beta1/feeabs_module_balances')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
