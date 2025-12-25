#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.feeabs.v1beta1 Query Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def query_host_chain_config_examples
  puts '=== QueryHostChainConfig Examples ==='
  puts
  request = Xion::Feeabs::V1beta1::QueryHostChainConfigRequest.new(
    ibc_denom: 'ibc/27394FB092D2ECCD...'
  )
  puts "1. Constructed QueryHostChainConfigRequest: ibc_denom=#{request.ibc_denom}"
  encoded = Xion::Feeabs::V1beta1::QueryHostChainConfigRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.feeabs.v1beta1 Query Messages — Protobuf Examples   ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_host_chain_config_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
