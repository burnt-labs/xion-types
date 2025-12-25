#!/usr/bin/env python3
"""
xion.indexer.authz.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the Authz Indexer Module (xion.indexer.authz.v1).

Queries covered:
- QueryGrants: Get grants between specific granter and grantee
- QueryGranterGrants: List all grants issued by a granter
- QueryGranteeGrants: List all grants received by a grantee

The Authz Indexer provides optimized queries for authorization grants,
allowing efficient lookup of who can act on behalf of whom.

Note: This is an indexer module with query-only messages.
To create/revoke grants, use the standard cosmos.authz.v1beta1 module.
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.indexer.authz.v1 import query_pb2 as authz_query
from cosmos.base.query.v1beta1 import pagination_pb2
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryGrantsRequest / Response
# =============================================================================
# Get grants between a specific granter and grantee.
# Endpoint: GET /xion/indexer/authz/v1/grants
# Type URL: /xion.indexer.authz.v1.QueryGrantsRequest

def query_grants_examples():
    print('=== QueryGrants Examples ===\n')

    # 1. Construct request
    request = authz_query.QueryGrantsRequest()
    request.granter = 'xion1granter...'  # Who gave the authorization
    request.grantee = 'xion1grantee...'  # Who received the authorization
    request.msg_type_url = '/cosmos.bank.v1beta1.MsgSend'  # Optional: filter by message type
    request.pagination.limit = 10
    request.pagination.offset = 0
    request.pagination.count_total = True

    print('1. Constructed QueryGrantsRequest:')
    print(f'   granter: {request.granter}')
    print(f'   grantee: {request.grantee}')
    print(f'   msg_type_url: {request.msg_type_url or "(all types)"}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGrantsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 3. Decode request
    decoded_request = authz_query.QueryGrantsRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded granter: {decoded_request.granter}')
    print(f'   Decoded grantee: {decoded_request.grantee}')

    # === Response ===
    print('\n--- Response ---')

    # Note: Response contains Grant objects from cosmos.authz.v1beta1
    response = authz_query.QueryGrantsResponse()
    # Grants would be populated by the chain
    # response.grants contains cosmos.authz.v1beta1.Grant objects

    print('4. Response structure:')
    print('   grants: [cosmos.authz.v1beta1.Grant]')
    print('   pagination: PageResponse')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGrantsResponse')

    # 4. JSON format
    json_str = MessageToJson(request)
    print(f'\n5. Request JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryGranterGrantsRequest / Response
# =============================================================================
# List all grants issued by a specific granter.
# Endpoint: GET /xion/indexer/authz/v1/grants/granter/{granter}
# Type URL: /xion.indexer.authz.v1.QueryGranterGrantsRequest

def query_granter_grants_examples():
    print('\n=== QueryGranterGrants Examples ===\n')

    # 1. Construct request
    request = authz_query.QueryGranterGrantsRequest()
    request.granter = 'xion1granter...'  # List all grants FROM this address
    request.pagination.limit = 20
    request.pagination.count_total = True

    print('1. Constructed QueryGranterGrantsRequest:')
    print(f'   granter: {request.granter}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGranterGrantsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    # Note: Response contains GrantAuthorization objects
    response = authz_query.QueryGranterGrantsResponse()
    # response.grants contains cosmos.authz.v1beta1.GrantAuthorization objects

    print('3. Response structure:')
    print('   grants: [cosmos.authz.v1beta1.GrantAuthorization]')
    print('     - granter: string')
    print('     - grantee: string')
    print('     - authorization: Any (GenericAuth, SendAuth, etc.)')
    print('     - expiration: Timestamp')
    print('   pagination: PageResponse')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGranterGrantsResponse')

    return request, response


# =============================================================================
# QueryGranteeGrantsRequest / Response
# =============================================================================
# List all grants received by a specific grantee.
# Endpoint: GET /xion/indexer/authz/v1/grants/grantee/{grantee}
# Type URL: /xion.indexer.authz.v1.QueryGranteeGrantsRequest

def query_grantee_grants_examples():
    print('\n=== QueryGranteeGrants Examples ===\n')

    # 1. Construct request
    request = authz_query.QueryGranteeGrantsRequest()
    request.grantee = 'xion1grantee...'  # List all grants TO this address
    request.pagination.limit = 20
    request.pagination.count_total = True

    print('1. Constructed QueryGranteeGrantsRequest:')
    print(f'   grantee: {request.grantee}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGranteeGrantsRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = authz_query.QueryGranteeGrantsResponse()

    print('3. Response structure:')
    print('   grants: [cosmos.authz.v1beta1.GrantAuthorization]')
    print('   pagination: PageResponse')
    print(f'   typeUrl: /xion.indexer.authz.v1.QueryGranteeGrantsResponse')

    return request, response


# =============================================================================
# Understanding Authz Grants
# =============================================================================

def authz_explanation():
    print('\n=== Understanding Authz Grants ===\n')

    print('Authz (Authorization) allows one account to act on behalf of another.\n')

    print('Key Concepts:\n')
    print('  1. Granter: The account giving permission')
    print('  2. Grantee: The account receiving permission')
    print('  3. Authorization: What actions are permitted\n')

    print('Common Authorization Types:\n')
    auth_types = [
        ('GenericAuthorization', 'Allows any message of a specific type'),
        ('SendAuthorization', 'Allows sending up to a spend limit'),
        ('StakeAuthorization', 'Allows staking operations (delegate, undelegate, redelegate)'),
    ]

    for auth_type, desc in auth_types:
        print(f'  • {auth_type}:')
        print(f'    {desc}\n')

    print('Use Cases:\n')
    print('  • Fee grants: Let another account pay your fees')
    print('  • Automated staking: Let a bot manage your delegations')
    print('  • Multi-sig alternatives: Grant specific permissions to team members')
    print('  • Abstract accounts: Meta-transactions and gasless UX\n')

    print('Indexer vs Standard Authz:\n')
    print('  • This module provides OPTIMIZED QUERIES for grants')
    print('  • To CREATE grants, use: cosmos.authz.v1beta1.MsgGrant')
    print('  • To REVOKE grants, use: cosmos.authz.v1beta1.MsgRevoke')
    print('  • To EXECUTE with grant, use: cosmos.authz.v1beta1.MsgExec')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.indexer.authz.v1 Query Messages — Protobuf Examples  ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_grants_examples()
    query_granter_grants_examples()
    query_grantee_grants_examples()
    authz_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryGrantsRequest:         /xion.indexer.authz.v1.QueryGrantsRequest')
    print('  QueryGranterGrantsRequest:  /xion.indexer.authz.v1.QueryGranterGrantsRequest')
    print('  QueryGranteeGrantsRequest:  /xion.indexer.authz.v1.QueryGranteeGrantsRequest')
    print('\nType URL Reference (Responses):')
    print('  QueryGrantsResponse:         /xion.indexer.authz.v1.QueryGrantsResponse')
    print('  QueryGranterGrantsResponse:  /xion.indexer.authz.v1.QueryGranterGrantsResponse')
    print('  QueryGranteeGrantsResponse:  /xion.indexer.authz.v1.QueryGranteeGrantsResponse')
    print('\nREST Endpoints:')
    print('  GET /xion/indexer/authz/v1/grants')
    print('  GET /xion/indexer/authz/v1/grants/granter/{granter}')
    print('  GET /xion/indexer/authz/v1/grants/grantee/{grantee}')
    print('\nNote: This is an indexer module (query-only).')
    print('Use cosmos.authz.v1beta1 for grant/revoke transactions.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
