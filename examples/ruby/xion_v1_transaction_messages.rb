#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.v1 Transaction Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# transaction messages from the Core Xion Module (xion.v1).
#
# Messages covered:
# - MsgSend: Transfer coins between addresses
# - MsgMultiSend: Multi-input, multi-output transfers
# - MsgSetPlatformPercentage: Set platform fee percentage (governance)
# - MsgSetPlatformMinimum: Set minimum platform fees (governance)

# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

# =============================================================================
# MsgSend
# =============================================================================
# Transfer coins from one address to another.
# Type URL: /xion.v1.MsgSend
# Signer: from_address

def msg_send_examples
  puts '=== MsgSend Examples ==='
  puts

  # 1. Construct message
  msg = Xion::V1::MsgSend.new(
    from_address: 'xion1sender...',
    to_address: 'xion1recipient...',
    amount: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000') # 1 XION = 1,000,000 uxion
    ]
  )

  puts '1. Constructed MsgSend:'
  puts "   from_address: #{msg.from_address}"
  puts "   to_address: #{msg.to_address}"
  puts "   amount: #{msg.amount[0].amount} #{msg.amount[0].denom}"
  puts '   typeUrl: /xion.v1.MsgSend'

  # 2. Encode to protobuf bytes
  encoded_bytes = Xion::V1::MsgSend.encode(msg)
  puts "\n2. Encoded to protobuf bytes:"
  puts "   Length: #{encoded_bytes.length} bytes"
  puts "   Hex: #{encoded_bytes.unpack1('H*')}"

  # 3. Decode from protobuf bytes
  decoded = Xion::V1::MsgSend.decode(encoded_bytes)
  puts "\n3. Decoded from bytes:"
  puts "   from_address: #{decoded.from_address}"
  puts "   to_address: #{decoded.to_address}"

  # 4. JSON format
  json_str = Xion::V1::MsgSend.encode_json(msg)
  puts "\n4. JSON format:"
  puts "   #{json_str}"

  msg
end

# =============================================================================
# MsgMultiSend
# =============================================================================
# Multi-input, multi-output transfer.
# Type URL: /xion.v1.MsgMultiSend
# Signer: inputs (note: only one input is allowed despite being repeated)

def msg_multi_send_examples
  puts "\n=== MsgMultiSend Examples ==="
  puts

  # 1. Construct inputs
  input = Cosmos::Bank::V1beta1::Input.new(
    address: 'xion1sender...',
    coins: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '3000000') # Total: 3 XION
    ]
  )

  # 2. Construct outputs
  outputs = [
    Cosmos::Bank::V1beta1::Output.new(
      address: 'xion1recipient1...',
      coins: [
        Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000') # 1 XION
      ]
    ),
    Cosmos::Bank::V1beta1::Output.new(
      address: 'xion1recipient2...',
      coins: [
        Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '2000000') # 2 XION
      ]
    )
  ]

  # 3. Construct MsgMultiSend
  msg = Xion::V1::MsgMultiSend.new(
    inputs: [input], # Only ONE input allowed
    outputs: outputs
  )

  puts '1. Constructed MsgMultiSend:'
  puts "   inputs: #{msg.inputs.length}"
  puts "   outputs: #{msg.outputs.length}"
  puts '   typeUrl: /xion.v1.MsgMultiSend'

  # 4. Encode to protobuf
  encoded_bytes = Xion::V1::MsgMultiSend.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  # 5. Decode
  decoded = Xion::V1::MsgMultiSend.decode(encoded_bytes)
  puts "\n3. Decoded outputs:"
  decoded.outputs.each_with_index do |o, i|
    puts "   Output #{i}: #{o.address} -> #{o.coins[0].amount} #{o.coins[0].denom}"
  end

  msg
end

# =============================================================================
# MsgSetPlatformPercentage
# =============================================================================
# Set the platform fee percentage (governance message).
# Type URL: /xion.v1.MsgSetPlatformPercentage
# Signer: authority (governance address)
# Note: platform_percentage is multiplied by 10000 (e.g., 500 = 5%)

def msg_set_platform_percentage_examples
  puts "\n=== MsgSetPlatformPercentage Examples ==="
  puts

  # 1. Construct message
  # platform_percentage is multiplied by 10000
  # Example: 500 = 5%, 100 = 1%, 10000 = 100%
  msg = Xion::V1::MsgSetPlatformPercentage.new(
    authority: 'xion1governance...', # Governance module address
    platform_percentage: 500 # 5% fee
  )

  puts '1. Constructed MsgSetPlatformPercentage:'
  puts "   authority: #{msg.authority}"
  puts "   platform_percentage: #{msg.platform_percentage}"
  puts "   Actual percentage: #{msg.platform_percentage / 100.0}%"
  puts '   typeUrl: /xion.v1.MsgSetPlatformPercentage'

  # 2. Encode
  encoded_bytes = Xion::V1::MsgSetPlatformPercentage.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  # 3. Decode
  decoded = Xion::V1::MsgSetPlatformPercentage.decode(encoded_bytes)
  puts "\n3. Decoded platform_percentage: #{decoded.platform_percentage}"

  # 4. JSON format
  json_str = Xion::V1::MsgSetPlatformPercentage.encode_json(msg)
  puts "\n4. JSON format:"
  puts "   #{json_str}"

  msg
end

# =============================================================================
# MsgSetPlatformMinimum
# =============================================================================
# Set the minimum platform fees (governance message).
# Type URL: /xion.v1.MsgSetPlatformMinimum
# Signer: authority (governance address)

def msg_set_platform_minimum_examples
  puts "\n=== MsgSetPlatformMinimum Examples ==="
  puts

  # 1. Construct message with multiple minimum fee denominations
  msg = Xion::V1::MsgSetPlatformMinimum.new(
    authority: 'xion1governance...',
    minimums: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000'), # Minimum 0.001 XION
      Cosmos::Base::V1beta1::Coin.new(denom: 'uatom', amount: '500') # Can set for other denoms too
    ]
  )

  puts '1. Constructed MsgSetPlatformMinimum:'
  puts "   authority: #{msg.authority}"
  puts '   minimums:'
  msg.minimums.each do |m|
    puts "     - #{m.amount} #{m.denom}"
  end
  puts '   typeUrl: /xion.v1.MsgSetPlatformMinimum'

  # 2. Encode
  encoded_bytes = Xion::V1::MsgSetPlatformMinimum.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  # 3. Decode
  decoded = Xion::V1::MsgSetPlatformMinimum.decode(encoded_bytes)
  puts "\n3. Decoded minimums: #{decoded.minimums.length} entries"

  # 4. JSON format
  json_str = Xion::V1::MsgSetPlatformMinimum.encode_json(msg)
  puts "\n4. JSON format:"
  puts "   #{json_str}"

  msg
end

# =============================================================================
# Coin Helper
# =============================================================================
# The Coin type is used by many messages

def coin_examples
  puts "\n=== Coin Helper Examples ==="
  puts

  # Construct a Coin
  coin = Cosmos::Base::V1beta1::Coin.new(
    denom: 'uxion',
    amount: '1000000'
  )

  puts "Coin: #{coin.amount} #{coin.denom}"

  # Encode/decode
  encoded = Cosmos::Base::V1beta1::Coin.encode(coin)
  decoded = Cosmos::Base::V1beta1::Coin.decode(encoded)
  puts "Decoded: #{decoded.amount} #{decoded.denom}"

  # JSON format
  json_str = Cosmos::Base::V1beta1::Coin.encode_json(coin)
  puts "JSON: #{json_str}"

  coin
end

# =============================================================================
# Run All Examples
# =============================================================================

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.v1 Transaction Messages — Protobuf Examples          ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts

  msg_send_examples
  msg_multi_send_examples
  msg_set_platform_percentage_examples
  msg_set_platform_minimum_examples
  coin_examples

  puts "\n═══════════════════════════════════════════════════════════════"
  puts 'Type URL Reference:'
  puts '  MsgSend:                   /xion.v1.MsgSend'
  puts '  MsgMultiSend:              /xion.v1.MsgMultiSend'
  puts '  MsgSetPlatformPercentage:  /xion.v1.MsgSetPlatformPercentage'
  puts '  MsgSetPlatformMinimum:     /xion.v1.MsgSetPlatformMinimum'
  puts '═══════════════════════════════════════════════════════════════'
end

# Execute if run directly
main if __FILE__ == $PROGRAM_NAME
