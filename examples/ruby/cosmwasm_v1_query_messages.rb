#!/usr/bin/env ruby
# frozen_string_literal: true

# cosmwasm.wasm.v1 Query Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# query messages for CosmWasm smart contracts.
#
# Queries covered:
# - QuerySmartContractState: Execute a read-only query on a contract
# - QueryContractInfo: Get contract metadata
# - QueryContractsByCode: List all contracts using a specific code ID

# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'
require 'json'

# =============================================================================
# QuerySmartContractStateRequest / Response
# =============================================================================
# Execute a read-only query on a smart contract.
# Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest

def query_smart_contract_state_examples
  puts '=== QuerySmartContractState Examples ==='
  puts

  # 1. Construct query message (contract-specific JSON)
  query_msg = {
    'balance' => { 'address' => 'xion1holder...' }
  }

  # 2. Construct request
  request = Cosmwasm::Wasm::V1::QuerySmartContractStateRequest.new(
    address: 'xion1cw20tokencontract...',
    query_data: query_msg.to_json.encode('utf-8')
  )

  puts '1. Constructed QuerySmartContractStateRequest:'
  puts "   address: #{request.address}"
  puts "   query_data: #{JSON.parse(request.query_data.force_encoding('utf-8'))}"
  puts '   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateRequest'

  # 3. Encode request
  encoded_request = Cosmwasm::Wasm::V1::QuerySmartContractStateRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  # 4. Decode request
  decoded_request = Cosmwasm::Wasm::V1::QuerySmartContractStateRequest.decode(encoded_request)
  puts "\n3. Decoded address: #{decoded_request.address}"

  # === Response ===
  puts "\n--- Response ---"

  # Response contains JSON data as bytes
  response = Cosmwasm::Wasm::V1::QuerySmartContractStateResponse.new(
    data: { 'balance' => '1000000' }.to_json.encode('utf-8')
  )

  puts '4. Constructed Response:'
  puts "   data: #{JSON.parse(response.data.force_encoding('utf-8'))}"
  puts '   typeUrl: /cosmwasm.wasm.v1.QuerySmartContractStateResponse'

  [request, response]
end

# =============================================================================
# QueryContractInfoRequest / Response
# =============================================================================
# Get contract metadata.
# Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest

def query_contract_info_examples
  puts "\n=== QueryContractInfo Examples ==="
  puts

  # 1. Construct request
  request = Cosmwasm::Wasm::V1::QueryContractInfoRequest.new(
    address: 'xion1contractaddress...'
  )

  puts '1. Constructed QueryContractInfoRequest:'
  puts "   address: #{request.address}"
  puts '   typeUrl: /cosmwasm.wasm.v1.QueryContractInfoRequest'

  # 2. Encode
  encoded_request = Cosmwasm::Wasm::V1::QueryContractInfoRequest.encode(request)
  puts "\n2. Encoded request: #{encoded_request.length} bytes"

  [request]
end

# =============================================================================
# Run All Examples
# =============================================================================

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  cosmwasm.wasm.v1 Query Messages — Protobuf Examples       ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts

  query_smart_contract_state_examples
  query_contract_info_examples

  puts "\n═══════════════════════════════════════════════════════════════"
  puts 'Type URL Reference:'
  puts '  QuerySmartContractStateRequest: /cosmwasm.wasm.v1.QuerySmartContractStateRequest'
  puts '  QueryContractInfoRequest:      /cosmwasm.wasm.v1.QueryContractInfoRequest'
  puts '═══════════════════════════════════════════════════════════════'
end

# Execute if run directly
main if __FILE__ == $PROGRAM_NAME
