#!/usr/bin/env python3
"""
xion.jwk.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the JWK Module (xion.jwk.v1).

Queries covered:
- QueryAudience: Get audience by ID
- QueryAudienceClaim: Get specific audience claim
- QueryAudienceClaims: List all claims for an audience
- QueryAudiences: List all registered audiences
- QueryParams: Get module parameters
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.jwk.v1 import query_pb2 as jwk_query
from google.protobuf.json_format import MessageToJson


# =============================================================================
# QueryAudienceRequest / Response
# =============================================================================
# Get information about a specific audience.
# Type URL: /xion.jwk.v1.QueryAudienceRequest

def query_audience_examples():
    print('=== QueryAudience Examples ===\n')

    # 1. Construct request
    request = jwk_query.QueryAudienceRequest()
    request.aud = 'your-app-audience-id'

    print('1. Constructed QueryAudienceRequest:')
    print(f'   aud: {request.aud}')
    print(f'   typeUrl: /xion.jwk.v1.QueryAudienceRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = jwk_query.QueryAudienceResponse()
    response.audience.aud = 'your-app-audience-id'
    response.audience.key = 'https://your-issuer.com/.well-known/jwks.json'
    response.audience.admin = 'xion1admin...'

    print('3. Constructed Response:')
    print(f'   audience.aud: {response.audience.aud}')
    print(f'   audience.key: {response.audience.key}')
    print(f'   audience.admin: {response.audience.admin}')
    print(f'   typeUrl: /xion.jwk.v1.QueryAudienceResponse')

    # 4. JSON format
    json_str = MessageToJson(response)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryAudienceClaimRequest / Response
# =============================================================================
# Get a specific claim for an audience.
# Type URL: /xion.jwk.v1.QueryAudienceClaimRequest

def query_audience_claim_examples():
    print('\n=== QueryAudienceClaim Examples ===\n')

    # 1. Construct request
    request = jwk_query.QueryAudienceClaimRequest()
    request.aud_hash = b'audience-hash-bytes'
    request.claim_hash = b'claim-hash-bytes'

    print('1. Constructed QueryAudienceClaimRequest:')
    print(f'   aud_hash: {request.aud_hash.hex()}')
    print(f'   claim_hash: {request.claim_hash.hex()}')
    print(f'   typeUrl: /xion.jwk.v1.QueryAudienceClaimRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = jwk_query.QueryAudienceClaimResponse()
    response.claim.aud_hash = b'audience-hash-bytes'
    response.claim.claim_hash = b'claim-hash-bytes'

    print('3. Constructed Response:')
    print(f'   claim.aud_hash: {response.claim.aud_hash.hex()}')
    print(f'   claim.claim_hash: {response.claim.claim_hash.hex()}')

    return request, response


# =============================================================================
# QueryAudienceClaimsRequest / Response
# =============================================================================
# List all claims for a specific audience.
# Type URL: /xion.jwk.v1.QueryAudienceClaimsRequest

def query_audience_claims_examples():
    print('\n=== QueryAudienceClaims Examples ===\n')

    # 1. Construct request with pagination
    request = jwk_query.QueryAudienceClaimsRequest()
    request.aud_hash = b'audience-hash-bytes'
    request.pagination.limit = 10
    request.pagination.offset = 0

    print('1. Constructed QueryAudienceClaimsRequest:')
    print(f'   aud_hash: {request.aud_hash.hex()}')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.jwk.v1.QueryAudienceClaimsRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = jwk_query.QueryAudienceClaimsResponse()
    claim1 = response.claims.add()
    claim1.aud_hash = b'audience-hash-bytes'
    claim1.claim_hash = b'claim-hash-1'

    claim2 = response.claims.add()
    claim2.aud_hash = b'audience-hash-bytes'
    claim2.claim_hash = b'claim-hash-2'

    print('3. Constructed Response:')
    print(f'   claims count: {len(response.claims)}')
    for i, claim in enumerate(response.claims):
        print(f'   [{i}] claim_hash: {claim.claim_hash.hex()}')

    return request, response


# =============================================================================
# QueryAudiencesRequest / Response
# =============================================================================
# List all registered audiences.
# Type URL: /xion.jwk.v1.QueryAudiencesRequest

def query_audiences_examples():
    print('\n=== QueryAudiences Examples ===\n')

    # 1. Construct request with pagination
    request = jwk_query.QueryAudiencesRequest()
    request.pagination.limit = 10

    print('1. Constructed QueryAudiencesRequest:')
    print(f'   pagination.limit: {request.pagination.limit}')
    print(f'   typeUrl: /xion.jwk.v1.QueryAudiencesRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = jwk_query.QueryAudiencesResponse()

    aud1 = response.audiences.add()
    aud1.aud = 'app-audience-1'
    aud1.key = 'https://issuer1.com/.well-known/jwks.json'
    aud1.admin = 'xion1admin1...'

    aud2 = response.audiences.add()
    aud2.aud = 'app-audience-2'
    aud2.key = 'https://issuer2.com/.well-known/jwks.json'
    aud2.admin = 'xion1admin2...'

    print('3. Constructed Response:')
    print(f'   audiences count: {len(response.audiences)}')
    for aud in response.audiences:
        print(f'     - aud: {aud.aud}')
        print(f'       admin: {aud.admin}')

    return request, response


# =============================================================================
# QueryParamsRequest / Response
# =============================================================================
# Get JWK module parameters.
# Type URL: /xion.jwk.v1.QueryParamsRequest

def query_params_examples():
    print('\n=== QueryParams Examples ===\n')

    # 1. Construct request (no parameters)
    request = jwk_query.QueryParamsRequest()

    print('1. Constructed QueryParamsRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.jwk.v1.QueryParamsRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    response = jwk_query.QueryParamsResponse()
    # params would contain module configuration
    # response.params.some_param = value

    print('3. Constructed Response:')
    print('   (params would contain module configuration)')
    print(f'   typeUrl: /xion.jwk.v1.QueryParamsResponse')

    return request, response


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.jwk.v1 Query Messages — Protobuf Examples            ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_audience_examples()
    query_audience_claim_examples()
    query_audience_claims_examples()
    query_audiences_examples()
    query_params_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryAudienceRequest:       /xion.jwk.v1.QueryAudienceRequest')
    print('  QueryAudienceClaimRequest:  /xion.jwk.v1.QueryAudienceClaimRequest')
    print('  QueryAudienceClaimsRequest: /xion.jwk.v1.QueryAudienceClaimsRequest')
    print('  QueryAudiencesRequest:      /xion.jwk.v1.QueryAudiencesRequest')
    print('  QueryParamsRequest:         /xion.jwk.v1.QueryParamsRequest')
    print('\nNote: JWK module manages JWT audiences for social login')
    print('and meta-transaction authentication in abstract accounts.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
