#!/usr/bin/env python3
"""
xion.jwk.v1 Transaction Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
transaction messages from the JWK Module (xion.jwk.v1).

Messages covered:
- MsgCreateAudience: Create a new JWT audience
- MsgCreateAudienceClaim: Create an audience claim
- MsgDeleteAudienceClaim: Delete an audience claim
- MsgUpdateAudience: Update audience configuration
- MsgDeleteAudience: Delete an audience
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.jwk.v1 import tx_pb2 as jwk_tx
from google.protobuf.json_format import MessageToJson


# =============================================================================
# MsgCreateAudience
# =============================================================================
# Create a new JWT audience for token validation.
# Type URL: /xion.jwk.v1.MsgCreateAudience
# Signer: admin

def msg_create_audience_examples():
    print('=== MsgCreateAudience Examples ===\n')

    # 1. Construct message
    msg = jwk_tx.MsgCreateAudience()
    msg.admin = 'xion1admin...'
    msg.aud = 'your-app-audience-id'  # The "aud" claim expected in JWTs
    msg.key = 'https://your-issuer.com/.well-known/jwks.json'  # JWKS URL

    print('1. Constructed MsgCreateAudience:')
    print(f'   admin: {msg.admin}')
    print(f'   aud: {msg.aud}')
    print(f'   key: {msg.key}')
    print(f'   typeUrl: /xion.jwk.v1.MsgCreateAudience')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = jwk_tx.MsgCreateAudience()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded aud: {decoded.aud}')
    print(f'   Decoded key: {decoded.key}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# MsgCreateAudienceClaim
# =============================================================================
# Create a claim for an audience (maps JWT claim to account).
# Type URL: /xion.jwk.v1.MsgCreateAudienceClaim
# Signer: admin

def msg_create_audience_claim_examples():
    print('\n=== MsgCreateAudienceClaim Examples ===\n')

    msg = jwk_tx.MsgCreateAudienceClaim()
    msg.admin = 'xion1admin...'
    msg.aud_hash = b'audience-hash-bytes'  # Hash of the audience
    msg.claim_hash = b'claim-hash-bytes'  # Hash of the claim

    print('1. Constructed MsgCreateAudienceClaim:')
    print(f'   admin: {msg.admin}')
    print(f'   aud_hash: {msg.aud_hash.hex()}')
    print(f'   claim_hash: {msg.claim_hash.hex()}')
    print(f'   typeUrl: /xion.jwk.v1.MsgCreateAudienceClaim')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgDeleteAudienceClaim
# =============================================================================
# Delete a claim from an audience.
# Type URL: /xion.jwk.v1.MsgDeleteAudienceClaim
# Signer: admin

def msg_delete_audience_claim_examples():
    print('\n=== MsgDeleteAudienceClaim Examples ===\n')

    msg = jwk_tx.MsgDeleteAudienceClaim()
    msg.admin = 'xion1admin...'
    msg.aud_hash = b'audience-hash-bytes'
    msg.claim_hash = b'claim-hash-bytes'

    print('1. Constructed MsgDeleteAudienceClaim:')
    print(f'   admin: {msg.admin}')
    print(f'   aud_hash: {msg.aud_hash.hex()}')
    print(f'   claim_hash: {msg.claim_hash.hex()}')
    print(f'   typeUrl: /xion.jwk.v1.MsgDeleteAudienceClaim')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgUpdateAudience
# =============================================================================
# Update an existing audience configuration.
# Type URL: /xion.jwk.v1.MsgUpdateAudience
# Signer: admin

def msg_update_audience_examples():
    print('\n=== MsgUpdateAudience Examples ===\n')

    msg = jwk_tx.MsgUpdateAudience()
    msg.admin = 'xion1admin...'
    msg.aud = 'your-app-audience-id'
    msg.key = 'https://new-issuer.com/.well-known/jwks.json'  # Updated JWKS URL

    print('1. Constructed MsgUpdateAudience:')
    print(f'   admin: {msg.admin}')
    print(f'   aud: {msg.aud}')
    print(f'   key (new): {msg.key}')
    print(f'   typeUrl: /xion.jwk.v1.MsgUpdateAudience')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# MsgDeleteAudience
# =============================================================================
# Delete an audience entirely.
# Type URL: /xion.jwk.v1.MsgDeleteAudience
# Signer: admin

def msg_delete_audience_examples():
    print('\n=== MsgDeleteAudience Examples ===\n')

    msg = jwk_tx.MsgDeleteAudience()
    msg.admin = 'xion1admin...'
    msg.aud = 'your-app-audience-id'

    print('1. Constructed MsgDeleteAudience:')
    print(f'   admin: {msg.admin}')
    print(f'   aud: {msg.aud}')
    print(f'   typeUrl: /xion.jwk.v1.MsgDeleteAudience')
    print('\n   WARNING: This removes the audience entirely!')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.jwk.v1 Transaction Messages — Protobuf Examples      ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    msg_create_audience_examples()
    msg_create_audience_claim_examples()
    msg_delete_audience_claim_examples()
    msg_update_audience_examples()
    msg_delete_audience_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference:')
    print('  MsgCreateAudience:      /xion.jwk.v1.MsgCreateAudience')
    print('  MsgCreateAudienceClaim: /xion.jwk.v1.MsgCreateAudienceClaim')
    print('  MsgDeleteAudienceClaim: /xion.jwk.v1.MsgDeleteAudienceClaim')
    print('  MsgUpdateAudience:      /xion.jwk.v1.MsgUpdateAudience')
    print('  MsgDeleteAudience:      /xion.jwk.v1.MsgDeleteAudience')
    print('\nNote: JWK module is used for JWT-based authentication')
    print('in abstract accounts (meta-transactions, social login).')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
