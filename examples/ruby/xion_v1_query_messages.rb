#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.v1 Query Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# query messages from the Core Xion Module (xion.v1).
#
# Queries covered:
# - QueryWebAuthNVerifyRegister: Verify WebAuthN registration
# - QueryWebAuthNVerifyAuthenticate: Verify WebAuthN authentication
# - QueryPlatformPercentage: Get current platform fee percentage
# - QueryPlatformMinimum: Get current minimum platform fees

# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'
require 'base64'

# =============================================================================
# QueryWebAuthNVerifyRegisterRequest / Response
# =============================================================================
# Verify a WebAuthN registration credential.
# Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest

def query_webauthn_verify_register_examples
  puts '=== QueryWebAuthNVerifyRegister Examples ==='
  puts

  # 1. Construct request
  request = Xion::V1::QueryWebAuthNVerifyRegisterRequest.new(
    addr: 'xion1user...',
    challenge: 'random-challenge-string-from-server',
    rp: 'your-app.example.com', # Relying Party ID
    data: [0x01, 0x02, 0x03, 0x04].pack('C*') # WebAuthN attestation data
  )

  puts '1. Constructed QueryWebAuthNVerifyRegisterRequest:'
  puts "   addr: #{request.addr}"
  puts "   challenge: #{request.challenge}"
  puts "   rp: #{request.rp}"
  puts "   data length: #{request.data.length} bytes"
  puts '   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterRequest'

  # 2. Encode request
  encoded_request = Xion::V1::QueryWebAuthNVerifyRegisterRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  # 3. Decode request
  decoded_request = Xion::V1::QueryWebAuthNVerifyRegisterRequest.decode(encoded_request)
  puts "\n3. Decoded addr: #{decoded_request.addr}"
  puts "   Decoded challenge: #{decoded_request.challenge}"

  # 4. JSON format
  json_str = Xion::V1::QueryWebAuthNVerifyRegisterRequest.encode_json(request)
  puts "\n4. JSON format:"
  puts "   #{json_str}"

  # === Response ===
  puts "\n--- Response ---"

  # Construct response (typically received from chain)
  response = Xion::V1::QueryWebAuthNVerifyRegisterResponse.new(
    credential: [0xAA, 0xBB, 0xCC, 0xDD].pack('C*') # WebAuthN credential
  )

  puts '5. Constructed Response:'
  puts "   credential length: #{response.credential.length} bytes"
  puts '   typeUrl: /xion.v1.QueryWebAuthNVerifyRegisterResponse'

  # Encode/decode response
  encoded_response = Xion::V1::QueryWebAuthNVerifyRegisterResponse.encode(response)
  decoded_response = Xion::V1::QueryWebAuthNVerifyRegisterResponse.decode(encoded_response)
  puts "\n6. Decoded credential length: #{decoded_response.credential.length} bytes"

  [request, response]
end

# =============================================================================
# QueryWebAuthNVerifyAuthenticateRequest / Response
# =============================================================================
# Verify a WebAuthN authentication assertion.
# Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest

def query_webauthn_verify_authenticate_examples
  puts "\n=== QueryWebAuthNVerifyAuthenticate Examples ==="
  puts

  # 1. Construct request
  request = Xion::V1::QueryWebAuthNVerifyAuthenticateRequest.new(
    addr: 'xion1user...',
    challenge: 'random-challenge-string',
    rp: 'your-app.example.com',
    credential: [0xAA, 0xBB, 0xCC, 0xDD].pack('C*'), # Stored credential
    data: [0x01, 0x02, 0x03, 0x04].pack('C*') # Authenticator assertion data
  )

  puts '1. Constructed QueryWebAuthNVerifyAuthenticateRequest:'
  puts "   addr: #{request.addr}"
  puts "   challenge: #{request.challenge}"
  puts "   rp: #{request.rp}"
  puts "   credential length: #{request.credential.length} bytes"
  puts "   data length: #{request.data.length} bytes"
  puts '   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest'

  # 2. Encode
  encoded_request = Xion::V1::QueryWebAuthNVerifyAuthenticateRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  # 3. Decode
  decoded_request = Xion::V1::QueryWebAuthNVerifyAuthenticateRequest.decode(encoded_request)
  puts "\n3. Decoded addr: #{decoded_request.addr}"

  # 4. JSON format
  json_str = Xion::V1::QueryWebAuthNVerifyAuthenticateRequest.encode_json(request)
  puts "\n4. JSON format:"
  puts "   #{json_str}"

  # === Response ===
  puts "\n--- Response ---"

  # Response is empty (success = no error thrown)
  response = Xion::V1::QueryWebAuthNVerifyAuthenticateResponse.new

  puts '5. Constructed Response (empty = success):'
  puts '   typeUrl: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse'

  encoded_response = Xion::V1::QueryWebAuthNVerifyAuthenticateResponse.encode(response)
  puts "   Encoded length: #{encoded_response.length} bytes"

  [request, response]
end

# =============================================================================
# QueryPlatformPercentageRequest / Response
# =============================================================================
# Get the current platform fee percentage.
# Type URL: /xion.v1.QueryPlatformPercentageRequest

def query_platform_percentage_examples
  puts "\n=== QueryPlatformPercentage Examples ==="
  puts

  # 1. Construct request (no parameters needed)
  request = Xion::V1::QueryPlatformPercentageRequest.new

  puts '1. Constructed QueryPlatformPercentageRequest:'
  puts '   (no parameters)'
  puts '   typeUrl: /xion.v1.QueryPlatformPercentageRequest'

  # 2. Encode request
  encoded_request = Xion::V1::QueryPlatformPercentageRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  # === Response ===
  puts "\n--- Response ---"

  # Construct response (typically received from chain)
  # platform_percentage is stored as uint64, multiplied by 10000
  response = Xion::V1::QueryPlatformPercentageResponse.new(
    platform_percentage: 500 # 5% = 500/10000
  )

  puts '3. Constructed Response:'
  puts "   platform_percentage (raw): #{response.platform_percentage}"
  puts "   platform_percentage (%): #{response.platform_percentage / 100.0}%"
  puts '   typeUrl: /xion.v1.QueryPlatformPercentageResponse'

  # 4. Encode/decode response
  encoded_response = Xion::V1::QueryPlatformPercentageResponse.encode(response)
  decoded_response = Xion::V1::QueryPlatformPercentageResponse.decode(encoded_response)
  puts "\n4. Decoded platform_percentage: #{decoded_response.platform_percentage}"

  # 5. JSON format
  json_str = Xion::V1::QueryPlatformPercentageResponse.encode_json(response)
  puts "\n5. JSON format:"
  puts "   #{json_str}"

  [request, response]
end

# =============================================================================
# QueryPlatformMinimumRequest / Response
# =============================================================================
# Get the current minimum platform fees.
# Type URL: /xion.v1.QueryPlatformMinimumRequest

def query_platform_minimum_examples
  puts "\n=== QueryPlatformMinimum Examples ==="
  puts

  # 1. Construct request (no parameters needed)
  request = Xion::V1::QueryPlatformMinimumRequest.new

  puts '1. Constructed QueryPlatformMinimumRequest:'
  puts '   (no parameters)'
  puts '   typeUrl: /xion.v1.QueryPlatformMinimumRequest'

  # 2. Encode request
  encoded_request = Xion::V1::QueryPlatformMinimumRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  # === Response ===
  puts "\n--- Response ---"

  # Construct response with minimum fees
  response = Xion::V1::QueryPlatformMinimumResponse.new(
    minimums: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000'),
      Cosmos::Base::V1beta1::Coin.new(denom: 'uatom', amount: '500')
    ]
  )

  puts '3. Constructed Response:'
  puts '   minimums:'
  response.minimums.each do |m|
    puts "     - #{m.amount} #{m.denom}"
  end
  puts '   typeUrl: /xion.v1.QueryPlatformMinimumResponse'

  # 4. Encode/decode response
  encoded_response = Xion::V1::QueryPlatformMinimumResponse.encode(response)
  decoded_response = Xion::V1::QueryPlatformMinimumResponse.decode(encoded_response)
  puts "\n4. Decoded minimums count: #{decoded_response.minimums.length}"

  # 5. JSON format
  json_str = Xion::V1::QueryPlatformMinimumResponse.encode_json(response)
  puts "\n5. JSON format:"
  puts "   #{json_str}"

  [request, response]
end

# =============================================================================
# Working with Bytes
# =============================================================================
# Many WebAuthN fields use bytes. Here's how to work with them.

def bytes_examples
  puts "\n=== Working with Bytes ==="
  puts

  # 1. Create from array of numbers
  bytes1 = [0x01, 0x02, 0x03, 0x04].pack('C*')
  puts "1. From array: #{bytes1.unpack1('H*')}"

  # 2. Create from string
  bytes2 = 'hello'.encode('utf-8')
  puts "2. From string: #{bytes2.unpack1('H*')}"

  # 3. Create from base64
  base64 = 'AQIDBA==' # [1, 2, 3, 4]
  bytes3 = Base64.decode64(base64)
  puts "3. From base64: #{bytes3.unpack1('H*')}"

  # 4. Convert to base64
  to_base64 = Base64.encode64(bytes1).strip
  puts "4. To base64: #{to_base64}"

  # 5. Convert to hex
  to_hex = bytes1.unpack1('H*')
  puts "5. To hex: #{to_hex}"

  # 6. Create from hex
  bytes4 = ['01020304'].pack('H*')
  puts "6. From hex: #{bytes4.unpack1('H*')}"
end

# =============================================================================
# Run All Examples
# =============================================================================

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.v1 Query Messages — Protobuf Examples                ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts

  query_webauthn_verify_register_examples
  query_webauthn_verify_authenticate_examples
  query_platform_percentage_examples
  query_platform_minimum_examples
  bytes_examples

  puts "\n═══════════════════════════════════════════════════════════════"
  puts 'Type URL Reference (Requests):'
  puts '  QueryWebAuthNVerifyRegisterRequest:    /xion.v1.QueryWebAuthNVerifyRegisterRequest'
  puts '  QueryWebAuthNVerifyAuthenticateRequest: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest'
  puts '  QueryPlatformPercentageRequest:        /xion.v1.QueryPlatformPercentageRequest'
  puts '  QueryPlatformMinimumRequest:           /xion.v1.QueryPlatformMinimumRequest'
  puts "\nType URL Reference (Responses):"
  puts '  QueryWebAuthNVerifyRegisterResponse:    /xion.v1.QueryWebAuthNVerifyRegisterResponse'
  puts '  QueryWebAuthNVerifyAuthenticateResponse: /xion.v1.QueryWebAuthNVerifyAuthenticateResponse'
  puts '  QueryPlatformPercentageResponse:        /xion.v1.QueryPlatformPercentageResponse'
  puts '  QueryPlatformMinimumResponse:           /xion.v1.QueryPlatformMinimumResponse'
  puts '═══════════════════════════════════════════════════════════════'
end

# Execute if run directly
main if __FILE__ == $PROGRAM_NAME
