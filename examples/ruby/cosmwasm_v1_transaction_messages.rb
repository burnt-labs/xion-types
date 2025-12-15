#!/usr/bin/env ruby
# frozen_string_literal: true

# cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# transaction messages for CosmWasm smart contracts.
#
# Messages covered:
# - MsgExecuteContract: Execute a method on a deployed contract
# - MsgInstantiateContract: Deploy a new contract instance from stored code
# - MsgMigrateContract: Upgrade a contract to new code
# - MsgUpdateAdmin: Change contract admin
# - MsgClearAdmin: Remove contract admin (makes contract immutable)

# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'
require 'json'

# =============================================================================
# MsgExecuteContract
# =============================================================================
# Execute a method on a deployed smart contract.
# Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
# Signer: sender

def msg_execute_contract_examples
  puts '=== MsgExecuteContract Examples ==='
  puts

  # Example 1: Basic contract execution (no funds attached)
  basic_execute_msg = {
    'increment' => {}
  }

  basic_msg = Cosmwasm::Wasm::V1::MsgExecuteContract.new(
    sender: 'xion1sender...',
    contract: 'xion1contractaddress...',
    msg: basic_execute_msg.to_json.encode('utf-8'),
    funds: []
  )

  puts '1. Basic MsgExecuteContract (no funds):'
  puts "   sender: #{basic_msg.sender}"
  puts "   contract: #{basic_msg.contract}"
  puts "   msg: #{JSON.parse(basic_msg.msg.force_encoding('utf-8'))}"
  puts "   funds: #{basic_msg.funds.length}"
  puts '   typeUrl: /cosmwasm.wasm.v1.MsgExecuteContract'

  # Example 2: CW20 Token Transfer
  cw20_transfer_msg = {
    'transfer' => {
      'recipient' => 'xion1recipient...',
      'amount' => '1000000'
    }
  }

  cw20_transfer = Cosmwasm::Wasm::V1::MsgExecuteContract.new(
    sender: 'xion1sender...',
    contract: 'xion1cw20tokencontract...',
    msg: cw20_transfer_msg.to_json.encode('utf-8'),
    funds: []
  )

  puts "\n2. CW20 Token Transfer:"
  puts "   contract: #{cw20_transfer.contract}"
  puts "   msg: #{JSON.parse(cw20_transfer.msg.force_encoding('utf-8'))}"

  # Example 3: Contract execution WITH attached funds
  buy_nft_msg = {
    'buy_nft' => {
      'token_id' => '42'
    }
  }

  msg_with_funds = Cosmwasm::Wasm::V1::MsgExecuteContract.new(
    sender: 'xion1buyer...',
    contract: 'xion1nftmarketplace...',
    msg: buy_nft_msg.to_json.encode('utf-8'),
    funds: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '5000000')
    ]
  )

  puts "\n3. Contract execution with funds:"
  puts "   msg: #{JSON.parse(msg_with_funds.msg.force_encoding('utf-8'))}"
  puts "   funds: #{msg_with_funds.funds[0].amount} #{msg_with_funds.funds[0].denom}"

  # Encode
  encoded_bytes = Cosmwasm::Wasm::V1::MsgExecuteContract.encode(msg_with_funds)
  puts "\n4. Encoded: #{encoded_bytes.length} bytes"

  msg_with_funds
end

# =============================================================================
# MsgInstantiateContract
# =============================================================================
# Deploy a new contract instance from stored code.
# Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
# Signer: sender

def msg_instantiate_contract_examples
  puts "\n=== MsgInstantiateContract Examples ==="
  puts

  init_msg = {
    'name' => 'My Token',
    'symbol' => 'MTK',
    'decimals' => 6,
    'initial_balances' => [
      { 'address' => 'xion1holder...', 'amount' => '1000000000' }
    ]
  }

  msg = Cosmwasm::Wasm::V1::MsgInstantiateContract.new(
    sender: 'xion1deployer...',
    admin: 'xion1admin...',
    code_id: 1,
    label: 'my-token-v1',
    msg: init_msg.to_json.encode('utf-8'),
    funds: [
      Cosmos::Base::V1beta1::Coin.new(denom: 'uxion', amount: '1000000')
    ]
  )

  puts '1. Constructed MsgInstantiateContract:'
  puts "   sender: #{msg.sender}"
  puts "   admin: #{msg.admin}"
  puts "   code_id: #{msg.code_id}"
  puts "   label: #{msg.label}"
  puts "   msg: #{JSON.parse(msg.msg.force_encoding('utf-8'))}"
  puts "   funds: #{msg.funds[0].amount} #{msg.funds[0].denom}"
  puts '   typeUrl: /cosmwasm.wasm.v1.MsgInstantiateContract'

  encoded_bytes = Cosmwasm::Wasm::V1::MsgInstantiateContract.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  msg
end

# =============================================================================
# MsgMigrateContract
# =============================================================================
# Upgrade a contract to new code.
# Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
# Signer: sender (must be admin)

def msg_migrate_contract_examples
  puts "\n=== MsgMigrateContract Examples ==="
  puts

  migrate_msg = {
    'migrate' => { 'new_field' => 'value' }
  }

  msg = Cosmwasm::Wasm::V1::MsgMigrateContract.new(
    sender: 'xion1admin...',
    contract: 'xion1contractaddress...',
    code_id: 2,
    msg: migrate_msg.to_json.encode('utf-8')
  )

  puts '1. Constructed MsgMigrateContract:'
  puts "   sender: #{msg.sender}"
  puts "   contract: #{msg.contract}"
  puts "   code_id: #{msg.code_id}"
  puts "   msg: #{JSON.parse(msg.msg.force_encoding('utf-8'))}"
  puts '   typeUrl: /cosmwasm.wasm.v1.MsgMigrateContract'

  encoded_bytes = Cosmwasm::Wasm::V1::MsgMigrateContract.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  msg
end

# =============================================================================
# MsgUpdateAdmin
# =============================================================================
# Change contract admin.
# Type URL: /cosmwasm.wasm.v1.MsgUpdateAdmin
# Signer: sender (must be current admin)

def msg_update_admin_examples
  puts "\n=== MsgUpdateAdmin Examples ==="
  puts

  msg = Cosmwasm::Wasm::V1::MsgUpdateAdmin.new(
    sender: 'xion1currentadmin...',
    new_admin: 'xion1newadmin...',
    contract: 'xion1contractaddress...'
  )

  puts '1. Constructed MsgUpdateAdmin:'
  puts "   sender: #{msg.sender}"
  puts "   new_admin: #{msg.new_admin}"
  puts "   contract: #{msg.contract}"
  puts '   typeUrl: /cosmwasm.wasm.v1.MsgUpdateAdmin'

  encoded_bytes = Cosmwasm::Wasm::V1::MsgUpdateAdmin.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  msg
end

# =============================================================================
# MsgClearAdmin
# =============================================================================
# Remove contract admin (makes contract immutable).
# Type URL: /cosmwasm.wasm.v1.MsgClearAdmin
# Signer: sender (must be current admin)

def msg_clear_admin_examples
  puts "\n=== MsgClearAdmin Examples ==="
  puts

  msg = Cosmwasm::Wasm::V1::MsgClearAdmin.new(
    sender: 'xion1admin...',
    contract: 'xion1contractaddress...'
  )

  puts '1. Constructed MsgClearAdmin:'
  puts "   sender: #{msg.sender}"
  puts "   contract: #{msg.contract}"
  puts '   typeUrl: /cosmwasm.wasm.v1.MsgClearAdmin'
  puts "\n   WARNING: This makes the contract immutable!"

  encoded_bytes = Cosmwasm::Wasm::V1::MsgClearAdmin.encode(msg)
  puts "\n2. Encoded: #{encoded_bytes.length} bytes"

  msg
end

# =============================================================================
# Run All Examples
# =============================================================================

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts

  msg_execute_contract_examples
  msg_instantiate_contract_examples
  msg_migrate_contract_examples
  msg_update_admin_examples
  msg_clear_admin_examples

  puts "\n═══════════════════════════════════════════════════════════════"
  puts 'Type URL Reference:'
  puts '  MsgExecuteContract:      /cosmwasm.wasm.v1.MsgExecuteContract'
  puts '  MsgInstantiateContract:  /cosmwasm.wasm.v1.MsgInstantiateContract'
  puts '  MsgMigrateContract:      /cosmwasm.wasm.v1.MsgMigrateContract'
  puts '  MsgUpdateAdmin:          /cosmwasm.wasm.v1.MsgUpdateAdmin'
  puts '  MsgClearAdmin:           /cosmwasm.wasm.v1.MsgClearAdmin'
  puts '═══════════════════════════════════════════════════════════════'
end

# Execute if run directly
main if __FILE__ == $PROGRAM_NAME
