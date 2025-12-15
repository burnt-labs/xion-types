#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.mint.v1 Transaction Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def msg_update_params_examples
  puts '=== MsgUpdateParams Examples ==='
  puts
  params = Xion::Mint::V1::Params.new(
    mint_denom: 'uxion',
    inflation_rate_change: '0.130000000000000000',
    inflation_max: '0.200000000000000000',
    inflation_min: '0.070000000000000000',
    goal_bonded: '0.670000000000000000',
    blocks_per_year: 6_311_520
  )
  msg = Xion::Mint::V1::MsgUpdateParams.new(
    authority: 'xion1governance...',
    params: params
  )
  puts "1. Constructed MsgUpdateParams: authority=#{msg.authority}"
  encoded = Xion::Mint::V1::MsgUpdateParams.encode(msg)
  puts "2. Encoded: #{encoded.length} bytes"
  msg
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.mint.v1 Transaction Messages — Protobuf Examples     ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  msg_update_params_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
