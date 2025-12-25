#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.feeabs.v1beta1 Transaction Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def msg_swap_cross_chain_examples
  puts '=== MsgSwapCrossChain Examples ==='
  puts
  msg = Xion::Feeabs::V1beta1::MsgSwapCrossChain.new(
    from_address: 'xion1sender...',
    ibc_denom: 'ibc/27394FB092D2ECCD...'
  )
  puts "1. Constructed MsgSwapCrossChain: from=#{msg.from_address}"
  encoded = Xion::Feeabs::V1beta1::MsgSwapCrossChain.encode(msg)
  puts "2. Encoded: #{encoded.length} bytes"
  msg
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.feeabs.v1beta1 Transaction Messages — Protobuf     ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  msg_swap_cross_chain_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
