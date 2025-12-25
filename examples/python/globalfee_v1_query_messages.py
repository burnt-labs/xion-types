#!/usr/bin/env python3
"""
xion.globalfee.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the GlobalFee Module (xion.globalfee.v1).

Queries covered:
- QueryMinimumGasPrices: Get minimum gas prices
- QueryParams: Get global fee parameters

Note: GlobalFee is a query-only module for reading fee configuration.
Fee parameters are set via governance.
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.globalfee.v1 import query_pb2 as globalfee_query
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryMinimumGasPricesRequest / Response
# =============================================================================
# Get the minimum gas prices required for transactions.
# Type URL: /xion.globalfee.v1.QueryMinimumGasPricesRequest

def query_minimum_gas_prices_examples():
    print('=== QueryMinimumGasPrices Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = globalfee_query.QueryMinimumGasPricesRequest()

    print('1. Constructed QueryMinimumGasPricesRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.globalfee.v1.QueryMinimumGasPricesRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = globalfee_query.QueryMinimumGasPricesResponse()
    
    price1 = response.minimum_gas_prices.add()
    price1.denom = 'uxion'
    price1.amount = '0.001000000000000000'  # 0.001 uxion per gas unit

    price2 = response.minimum_gas_prices.add()
    price2.denom = 'ibc/27394FB092D2ECCD...'  # Alternative denom
    price2.amount = '0.002000000000000000'

    print('3. Constructed Response:')
    print(f'   minimum_gas_prices count: {len(response.minimum_gas_prices)}')
    for price in response.minimum_gas_prices:
        print(f'     - {price.amount} {price.denom[:30]}...')

    # 4. JSON format
    json_str = MessageToJson(response)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    # 5. Calculate example gas cost
    print('\n5. Example gas cost calculation:')
    gas_used = 100000
    for price in response.minimum_gas_prices:
        cost = float(price.amount) * gas_used
        print(f'   {gas_used} gas units = {cost} {price.denom[:10]}...')

    return request, response


# =============================================================================
# QueryParamsRequest / Response
# =============================================================================
# Get global fee module parameters.
# Type URL: /xion.globalfee.v1.QueryParamsRequest

def query_params_examples():
    print('\n=== QueryParams Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = globalfee_query.QueryParamsRequest()

    print('1. Constructed QueryParamsRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.globalfee.v1.QueryParamsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = globalfee_query.QueryParamsResponse()
    
    # Add minimum gas prices to params
    min_price = response.params.minimum_gas_prices.add()
    min_price.denom = 'uxion'
    min_price.amount = '0.001000000000000000'

    # Add bypass minimum fee message types
    response.params.bypass_min_fee_msg_types.append('/ibc.core.channel.v1.MsgRecvPacket')
    response.params.bypass_min_fee_msg_types.append('/ibc.core.client.v1.MsgUpdateClient')

    print('3. Constructed Response:')
    print(f'   params.minimum_gas_prices: {len(response.params.minimum_gas_prices)}')
    for price in response.params.minimum_gas_prices:
        print(f'     - {price.amount} {price.denom}')
    
    print(f'\n   params.bypass_min_fee_msg_types: {len(response.params.bypass_min_fee_msg_types)}')
    for msg_type in response.params.bypass_min_fee_msg_types:
        print(f'     - {msg_type}')

    # 4. JSON format
    json_str = MessageToJson(response)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# Understanding Global Fee Parameters
# =============================================================================

def global_fee_explanation():
    print('\n=== Understanding Global Fee Parameters ===\n')

    print('The GlobalFee module manages minimum gas prices chain-wide.\n')

    print('Key Parameters:\n')

    params = [
        ('minimum_gas_prices', 'Min price per gas unit in various denoms'),
        ('bypass_min_fee_msg_types', 'Msg types that bypass min fee (e.g., IBC)'),
        ('max_total_bypass_min_fee_msg_gas_usage', 'Max gas for bypassed msgs'),
    ]

    for param, desc in params:
        print(f'  • {param}:')
        print(f'    {desc}\n')

    print('Common Bypass Messages:\n')
    print('  • /ibc.core.channel.v1.MsgRecvPacket (IBC packet receive)')
    print('  • /ibc.core.client.v1.MsgUpdateClient (IBC client update)')
    print('  • /ibc.core.channel.v1.MsgAcknowledgement (IBC ack)\n')

    print('Note: Validators can still set higher local minimum gas prices.')
    print('GlobalFee sets the chain-wide minimum that validators must respect.')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.globalfee.v1 Query Messages — Protobuf Examples      ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_minimum_gas_prices_examples()
    query_params_examples()
    global_fee_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryMinimumGasPricesRequest: /xion.globalfee.v1.QueryMinimumGasPricesRequest')
    print('  QueryParamsRequest:           /xion.globalfee.v1.QueryParamsRequest')
    print('\nREST Endpoints:')
    print('  GET /xion/globalfee/v1/minimum_gas_prices')
    print('  GET /xion/globalfee/v1/params')
    print('\nNote: This is a query-only module. Parameters are set via governance.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
