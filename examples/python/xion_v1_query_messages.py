#!/usr/bin/env python3
"""
xion.v1 Query Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
query messages from the Core Xion Module (xion.v1).

Queries covered:
- QueryWebAuthNVerifyRegister: Verify WebAuthN registration
- QueryWebAuthNVerifyAuthenticate: Verify WebAuthN authentication
- QueryPlatformPercentage: Get current platform fee percentage
- QueryPlatformMinimum: Get current minimum platform fees
"""

import sys
import os
import base64

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.v1 import query_pb2 as xion_query
from google.protobuf.json_format import MessageToJson, MessageToDict


# =============================================================================
# QueryWebAuthNVerifyRegisterRequest / Response
# =============================================================================
# Verify a WebAuthN registration credential.
# Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest

def query_webauthn_verify_register_examples():
    print('=== QueryWebAuthNVerifyRegister Examples ===\n')

    # 1. Construct request
    request = xion_query.QueryWebAuthNVerifyRegisterRequest()
    request.addr = 'xion1user...'
    request.challenge = 'random-challenge-string-from-server'
    request.rp = 'your-app.example.com'  # Relying Party ID
    request.data = bytes([0x01, 0x02, 0x03, 0x04])  # WebAuthN attestation data

    print('1. Constructed QueryWebAuthNVerifyRegisterRequest:')
    print(f'   addr: {request.addr}')
    print(f'   challenge: {request.challenge}')
    print(f'   rp: {request.rp}')
    print(f'   data length: {len(request.data)} bytes')
    print(f'   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 3. Decode request
    decoded_request = xion_query.QueryWebAuthNVerifyRegisterRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded addr: {decoded_request.addr}')
    print(f'   Decoded challenge: {decoded_request.challenge}')

    # 4. JSON format
    json_str = MessageToJson(request)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    # === Response ===
    print('\n--- Response ---')

    # Construct response (typically received from chain)
    response = xion_query.QueryWebAuthNVerifyRegisterResponse()
    response.credential = bytes([0xAA, 0xBB, 0xCC, 0xDD])  # WebAuthN credential

    print('5. Constructed Response:')
    print(f'   credential length: {len(response.credential)} bytes')
    print(f'   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterResponse')

    # Encode/decode response
    encoded_response = response.SerializeToString()
    decoded_response = xion_query.QueryWebAuthNVerifyRegisterResponse()
    decoded_response.ParseFromString(encoded_response)
    print(f'\n6. Decoded credential length: {len(decoded_response.credential)} bytes')

    return request, response


# =============================================================================
# QueryWebAuthNVerifyAuthenticateRequest / Response
# =============================================================================
# Verify a WebAuthN authentication assertion.
# Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest

def query_webauthn_verify_authenticate_examples():
    print('\n=== QueryWebAuthNVerifyAuthenticate Examples ===\n')

    # 1. Construct request
    request = xion_query.QueryWebAuthNVerifyAuthenticateRequest()
    request.addr = 'xion1user...'
    request.challenge = 'random-challenge-string'
    request.rp = 'your-app.example.com'
    request.credential = bytes([0xAA, 0xBB, 0xCC, 0xDD])  # Stored credential
    request.data = bytes([0x01, 0x02, 0x03, 0x04])  # Authenticator assertion data

    print('1. Constructed QueryWebAuthNVerifyAuthenticateRequest:')
    print(f'   addr: {request.addr}')
    print(f'   challenge: {request.challenge}')
    print(f'   rp: {request.rp}')
    print(f'   credential length: {len(request.credential)} bytes')
    print(f'   data length: {len(request.data)} bytes')
    print(f'   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest')

    # 2. Encode
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # 3. Decode
    decoded_request = xion_query.QueryWebAuthNVerifyAuthenticateRequest()
    decoded_request.ParseFromString(encoded_request)
    print(f'\n3. Decoded addr: {decoded_request.addr}')

    # 4. JSON format
    json_str = MessageToJson(request)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    # === Response ===
    print('\n--- Response ---')

    # Response is empty (success = no error thrown)
    response = xion_query.QueryWebAuthNVerifyAuthenticateResponse()

    print('5. Constructed Response (empty = success):')
    print(f'   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse')

    encoded_response = response.SerializeToString()
    print(f'   Encoded length: {len(encoded_response)} bytes')

    return request, response


# =============================================================================
# QueryPlatformPercentageRequest / Response
# =============================================================================
# Get the current platform fee percentage.
# Type URL: /xion.v1.QueryPlatformPercentageRequest

def query_platform_percentage_examples():
    print('\n=== QueryPlatformPercentage Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = xion_query.QueryPlatformPercentageRequest()

    print('1. Constructed QueryPlatformPercentageRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.v1.QueryPlatformPercentageRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    # Construct response (typically received from chain)
    # platform_percentage is stored as uint64, multiplied by 10000
    response = xion_query.QueryPlatformPercentageResponse()
    response.platform_percentage = 500  # 5% = 500/10000

    print('3. Constructed Response:')
    print(f'   platform_percentage (raw): {response.platform_percentage}')
    print(f'   platform_percentage (%): {response.platform_percentage / 100}%')
    print(f'   typeUrl: /xion.v1.QueryPlatformPercentageResponse')

    # 4. Encode/decode response
    encoded_response = response.SerializeToString()
    decoded_response = xion_query.QueryPlatformPercentageResponse()
    decoded_response.ParseFromString(encoded_response)
    print(f'\n4. Decoded platform_percentage: {decoded_response.platform_percentage}')

    # 5. JSON format
    json_str = MessageToJson(response)
    print(f'\n5. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# QueryPlatformMinimumRequest / Response
# =============================================================================
# Get the current minimum platform fees.
# Type URL: /xion.v1.QueryPlatformMinimumRequest

def query_platform_minimum_examples():
    print('\n=== QueryPlatformMinimum Examples ===\n')

    # 1. Construct request (no parameters needed)
    request = xion_query.QueryPlatformMinimumRequest()

    print('1. Constructed QueryPlatformMinimumRequest:')
    print('   (no parameters)')
    print(f'   typeUrl: /xion.v1.QueryPlatformMinimumRequest')

    # 2. Encode request
    encoded_request = request.SerializeToString()
    print(f'\n2. Encoded request: {len(encoded_request)} bytes')

    # === Response ===
    print('\n--- Response ---')

    # Construct response with minimum fees
    response = xion_query.QueryPlatformMinimumResponse()
    min1 = response.minimums.add()
    min1.denom = 'uxion'
    min1.amount = '1000'

    min2 = response.minimums.add()
    min2.denom = 'uatom'
    min2.amount = '500'

    print('3. Constructed Response:')
    print(f'   minimums:')
    for m in response.minimums:
        print(f'     - {m.amount} {m.denom}')
    print(f'   typeUrl: /xion.v1.QueryPlatformMinimumResponse')

    # 4. Encode/decode response
    encoded_response = response.SerializeToString()
    decoded_response = xion_query.QueryPlatformMinimumResponse()
    decoded_response.ParseFromString(encoded_response)
    print(f'\n4. Decoded minimums count: {len(decoded_response.minimums)}')

    # 5. JSON format
    json_str = MessageToJson(response)
    print(f'\n5. JSON format:')
    print(f'   {json_str}')

    return request, response


# =============================================================================
# Working with bytes
# =============================================================================
# Many WebAuthN fields use bytes. Here's how to work with them.

def bytes_examples():
    print('\n=== Working with Bytes ===\n')

    # 1. Create from list of numbers
    bytes1 = bytes([0x01, 0x02, 0x03, 0x04])
    print(f'1. From list: {bytes1}')

    # 2. Create from string
    bytes2 = 'hello'.encode('utf-8')
    print(f'2. From string: {bytes2}')

    # 3. Create from base64
    base64_str = 'AQIDBA=='  # [1, 2, 3, 4]
    bytes3 = base64.b64decode(base64_str)
    print(f'3. From base64: {bytes3}')

    # 4. Convert to base64
    to_base64 = base64.b64encode(bytes1).decode('ascii')
    print(f'4. To base64: {to_base64}')

    # 5. Convert to hex
    to_hex = bytes1.hex()
    print(f'5. To hex: {to_hex}')

    # 6. Create from hex
    bytes4 = bytes.fromhex('01020304')
    print(f'6. From hex: {bytes4}')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.v1 Query Messages — Protobuf Examples                ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    query_webauthn_verify_register_examples()
    query_webauthn_verify_authenticate_examples()
    query_platform_percentage_examples()
    query_platform_minimum_examples()
    bytes_examples()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference (Requests):')
    print('  QueryWebAuthNVerifyRegisterRequest:     /xion.v1.QueryWebAuthNVerifyRegisterRequest')
    print('  QueryWebAuthNVerifyAuthenticateRequest: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest')
    print('  QueryPlatformPercentageRequest:         /xion.v1.QueryPlatformPercentageRequest')
    print('  QueryPlatformMinimumRequest:            /xion.v1.QueryPlatformMinimumRequest')
    print('\nType URL Reference (Responses):')
    print('  QueryWebAuthNVerifyRegisterResponse:     /xion.v1.QueryWebAuthNVerifyRegisterResponse')
    print('  QueryWebAuthNVerifyAuthenticateResponse: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse')
    print('  QueryPlatformPercentageResponse:         /xion.v1.QueryPlatformPercentageResponse')
    print('  QueryPlatformMinimumResponse:            /xion.v1.QueryPlatformMinimumResponse')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
