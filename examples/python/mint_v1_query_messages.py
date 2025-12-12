#!/usr/bin/env python3
"""
xion.mint.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the Mint Module (xion.mint.v1).

Queries covered:
- QueryParams: Get current mint parameters
- QueryInflation: Get current inflation rate
- QueryAnnualProvisions: Get current annual token provisions
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.mint.v1 import query_pb2 as mint_query
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryParamsRequest / Response
# =============================================================================
# Get current mint module parameters.
# Type URL: /xion.mint.v1.QueryParamsRequest

def query_params_examples():
    print('=== QueryParams Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = mint_query.QueryParamsRequest()

    print('1. Constructed QueryParamsRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.mint.v1.QueryParamsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = mint_query.QueryParamsResponse()
    response.params.mint_denom = 'uxion'
    response.params.inflation_rate_change = '0.130000000000000000'
    response.params.inflation_max = '0.200000000000000000'
    response.params.inflation_min = '0.070000000000000000'
    response.params.goal_bonded = '0.670000000000000000'
    response.params.blocks_per_year = 6311520

    print('3. Constructed Response:')
    print(f'   params.mint_denom: {response.params.mint_denom}')
    print(f'   params.inflation_rate_change: {response.params.inflation_rate_change}')
    print(f'   params.inflation_max: {response.params.inflation_max}')
    print(f'   params.inflation_min: {response.params.inflation_min}')
    print(f'   params.goal_bonded: {response.params.goal_bonded}')
    print(f'   params.blocks_per_year: {response.params.blocks_per_year}')
    print(f'   typeUrl: /xion.mint.v1.QueryParamsResponse')

    # 4. JSON format
    json_str = MessageToJson(response)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryInflationRequest / Response
# =============================================================================
# Get the current inflation rate.
# Type URL: /xion.mint.v1.QueryInflationRequest

def query_inflation_examples():
    print('\n=== QueryInflation Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = mint_query.QueryInflationRequest()

    print('1. Constructed QueryInflationRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.mint.v1.QueryInflationRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = mint_query.QueryInflationResponse()
    # Inflation is stored as bytes (decimal string representation)
    response.inflation = b'0.100000000000000000'  # 10% inflation

    print('3. Constructed Response:')
    print(f'   inflation (raw bytes): {response.inflation}')
    print(f'   inflation (decoded): {response.inflation.decode("utf-8")}')
    inflation_percent = float(response.inflation.decode('utf-8')) * 100
    print(f'   inflation (%): {inflation_percent}%')
    print(f'   typeUrl: /xion.mint.v1.QueryInflationResponse')

    return request, response


# =============================================================================
# QueryAnnualProvisionsRequest / Response
# =============================================================================
# Get the current annual token provisions (tokens minted per year).
# Type URL: /xion.mint.v1.QueryAnnualProvisionsRequest

def query_annual_provisions_examples():
    print('\n=== QueryAnnualProvisions Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = mint_query.QueryAnnualProvisionsRequest()

    print('1. Constructed QueryAnnualProvisionsRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.mint.v1.QueryAnnualProvisionsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = mint_query.QueryAnnualProvisionsResponse()
    # Annual provisions is stored as bytes (decimal string representation)
    # Example: 1 billion tokens per year
    response.annual_provisions = b'1000000000000000.000000000000000000'

    print('3. Constructed Response:')
    print(f'   annual_provisions (raw): {response.annual_provisions}')
    provisions_str = response.annual_provisions.decode('utf-8')
    print(f'   annual_provisions (decoded): {provisions_str}')
    # Parse as float and show in human-readable format
    provisions = float(provisions_str)
    print(f'   annual_provisions (XION): {provisions / 1_000_000:,.2f} XION per year')
    print(f'   typeUrl: /xion.mint.v1.QueryAnnualProvisionsResponse')

    return request, response


# =============================================================================
# Understanding Inflation Data
# =============================================================================

def inflation_explanation():
    print('\n=== Understanding Inflation Data ===\n')

    print('The Mint module queries return important economics data:\n')

    print('1. Inflation Rate:')
    print('   - Current annual inflation as a decimal (e.g., 0.10 = 10%)')
    print('   - Adjusts based on bonding ratio vs goal_bonded')
    print('   - Bounded by inflation_min and inflation_max\n')

    print('2. Annual Provisions:')
    print('   - Total tokens to be minted this year')
    print('   - Calculated as: total_supply * inflation_rate')
    print('   - Distributed per block to validators/delegators\n')

    print('3. Params:')
    print('   - Configuration controlling inflation behavior')
    print('   - Can only be changed via governance proposal\n')

    print('Example calculation:')
    print('  If total supply = 100M XION and inflation = 10%')
    print('  Annual provisions = 100M * 0.10 = 10M XION/year')
    print('  Per block = 10M / blocks_per_year ≈ 1.58 XION/block')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.mint.v1 Query Messages — Protobuf Examples           ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_params_examples()
    query_inflation_examples()
    query_annual_provisions_examples()
    inflation_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryParamsRequest:           /xion.mint.v1.QueryParamsRequest')
    print('  QueryInflationRequest:        /xion.mint.v1.QueryInflationRequest')
    print('  QueryAnnualProvisionsRequest: /xion.mint.v1.QueryAnnualProvisionsRequest')
    print('\nREST Endpoints:')
    print('  GET /xion/mint/v1/params')
    print('  GET /xion/mint/v1/inflation')
    print('  GET /xion/mint/v1/annual_provisions')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
