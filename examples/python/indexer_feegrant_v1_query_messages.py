#!/usr/bin/env python3
"""
xion.indexer.feegrant.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the Feegrant Indexer Module (xion.indexer.feegrant.v1).

Queries covered:
- QueryAllowance: Get a specific fee allowance
- QueryAllowances: List all allowances for a grantee
- QueryAllowancesByGranter: List all allowances issued by a granter

The Feegrant Indexer provides optimized queries for fee allowances,
enabling efficient lookup of who pays fees for whom.

Note: This is an indexer module with query-only messages.
To create/revoke fee grants, use the standard cosmos.feegrant.v1beta1 module.
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.indexer.feegrant.v1 import query_pb2 as feegrant_query
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryAllowanceRequest / Response
# =============================================================================
# Get a specific fee allowance granted from granter to grantee.
# Endpoint: GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}
# Type URL: /xion.indexer.feegrant.v1.QueryAllowanceRequest

def query_allowance_examples():
    print('=== QueryAllowance Examples ===\n')

    # 1. Construct request
    request = feegrant_query.QueryAllowanceRequest()
    request.granter = 'xion1granter...'  # Who is paying fees
    request.grantee = 'xion1grantee...'  # Who benefits from fee payment

    print('1. Constructed QueryAllowanceRequest:')
    print(f'   granter: {request.granter}')
    print(f'   grantee: {request.grantee}')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowanceRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 3. Decode request
    decoded_request = feegrant_query.QueryAllowanceRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded granter: {decoded_request.granter}')
    print(f'   Decoded grantee: {decoded_request.grantee}')

    # === Response ===
    print('\n--- Response ---')

    # Note: Response contains cosmos.feegrant.v1beta1.Grant
    response = feegrant_query.QueryAllowanceResponse()
    # response.allowance contains:
    #   - granter: string
    #   - grantee: string
    #   - allowance: Any (BasicAllowance, PeriodicAllowance, AllowedMsgAllowance)

    print('4. Response structure:')
    print('   allowance: cosmos.feegrant.v1beta1.Grant')
    print('     - granter: string')
    print('     - grantee: string')
    print('     - allowance: Any (BasicAllowance, PeriodicAllowance, etc.)')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowanceResponse')

    # 4. JSON format
    json_str = MessageToJson(request)
    print(f'\n5. Request JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryAllowancesRequest / Response
# =============================================================================
# List all fee allowances for a specific grantee (who can have fees paid for them).
# Endpoint: GET /xion/indexer/feegrant/v1/allowances/{grantee}
# Type URL: /xion.indexer.feegrant.v1.QueryAllowancesRequest

def query_allowances_examples():
    print('\n=== QueryAllowances Examples ===\n')

    # 1. Construct request
    request = feegrant_query.QueryAllowancesRequest()
    request.grantee = 'xion1grantee...'  # List all grants TO this address
    request.pagination.limit = 20
    request.pagination.count_total = True

    print('1. Constructed QueryAllowancesRequest:')
    print(f'   grantee: {request.grantee}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = feegrant_query.QueryAllowancesResponse()

    print('3. Response structure:')
    print('   allowances: [cosmos.feegrant.v1beta1.Grant]')
    print('   pagination: PageResponse')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesResponse')

    return request, response


# =============================================================================
# QueryAllowancesByGranterRequest / Response
# =============================================================================
# List all fee allowances issued by a specific granter (who pays fees for others).
# Endpoint: GET /xion/indexer/feegrant/v1/issued/{granter}
# Type URL: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest

def query_allowances_by_granter_examples():
    print('\n=== QueryAllowancesByGranter Examples ===\n')

    # 1. Construct request
    request = feegrant_query.QueryAllowancesByGranterRequest()
    request.granter = 'xion1granter...'  # List all grants FROM this address
    request.pagination.limit = 20
    request.pagination.count_total = True

    print('1. Constructed QueryAllowancesByGranterRequest:')
    print(f'   granter: {request.granter}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = feegrant_query.QueryAllowancesByGranterResponse()

    print('3. Response structure:')
    print('   allowances: [cosmos.feegrant.v1beta1.Grant]')
    print('   pagination: PageResponse')
    print(f'   typeUrl: /xion.indexer.feegrant.v1.QueryAllowancesByGranterResponse')

    return request, response


# =============================================================================
# Understanding Fee Grants
# =============================================================================

def feegrant_explanation():
    print('\n=== Understanding Fee Grants ===\n')

    print('Feegrant allows one account to pay transaction fees for another.\n')

    print('Key Concepts:\n')
    print('  1. Granter: The account paying fees')
    print('  2. Grantee: The account benefiting (their txs are fee-free)')
    print('  3. Allowance: Rules for fee payment (limits, expiry, etc.)\n')

    print('Allowance Types:\n')
    allowance_types = [
        ('BasicAllowance', 'Simple spend limit with optional expiration'),
        ('PeriodicAllowance', 'Allowance that resets periodically'),
        ('AllowedMsgAllowance', 'Wraps another allowance, restricts msg types'),
    ]

    for allowance_type, desc in allowance_types:
        print(f'  • {allowance_type}:')
        print(f'    {desc}\n')

    print('Use Cases:\n')
    print('  • Onboarding: Pay fees for new users (gasless first tx)')
    print('  • dApps: Pay user fees for better UX')
    print('  • Abstract accounts: Enable meta-transactions')
    print('  • DAOs: Treasury pays member transaction fees\n')

    print('Indexer vs Standard Feegrant:\n')
    print('  • This module provides OPTIMIZED QUERIES for allowances')
    print('  • To CREATE grants, use: cosmos.feegrant.v1beta1.MsgGrantAllowance')
    print('  • To REVOKE grants, use: cosmos.feegrant.v1beta1.MsgRevokeAllowance')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════════╗')
    print('║  xion.indexer.feegrant.v1 Query Messages — Protobuf Examples   ║')
    print('╚════════════════════════════════════════════════════════════════╝\n')

    query_allowance_examples()
    query_allowances_examples()
    query_allowances_by_granter_examples()
    feegrant_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryAllowanceRequest:          /xion.indexer.feegrant.v1.QueryAllowanceRequest')
    print('  QueryAllowancesRequest:         /xion.indexer.feegrant.v1.QueryAllowancesRequest')
    print('  QueryAllowancesByGranterRequest:/xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest')
    print('\nType URL Reference (Responses):')
    print('  QueryAllowanceResponse:          /xion.indexer.feegrant.v1.QueryAllowanceResponse')
    print('  QueryAllowancesResponse:         /xion.indexer.feegrant.v1.QueryAllowancesResponse')
    print('  QueryAllowancesByGranterResponse:/xion.indexer.feegrant.v1.QueryAllowancesByGranterResponse')
    print('\nREST Endpoints:')
    print('  GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}')
    print('  GET /xion/indexer/feegrant/v1/allowances/{grantee}')
    print('  GET /xion/indexer/feegrant/v1/issued/{granter}')
    print('\nNote: This is an indexer module (query-only).')
    print('Use cosmos.feegrant.v1beta1 for grant/revoke transactions.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
