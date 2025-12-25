#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.globalfee.v1 Query Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def query_minimum_gas_prices_examples
  puts '=== QueryMinimumGasPrices Examples ==='
  puts
  request = Xion::Globalfee::V1::QueryMinimumGasPricesRequest.new
  puts '1. Constructed QueryMinimumGasPricesRequest: (no parameters)'
  encoded = Xion::Globalfee::V1::QueryMinimumGasPricesRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.globalfee.v1 Query Messages — Protobuf Examples     ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_minimum_gas_prices_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
