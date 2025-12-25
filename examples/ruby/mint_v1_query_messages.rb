#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.mint.v1 Query Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def query_params_examples
  puts '=== QueryParams Examples ==='
  puts
  request = Xion::Mint::V1::QueryParamsRequest.new
  puts '1. Constructed QueryParamsRequest: (no parameters)'
  encoded = Xion::Mint::V1::QueryParamsRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def query_inflation_examples
  puts "\n=== QueryInflation Examples ==="
  puts
  request = Xion::Mint::V1::QueryInflationRequest.new
  puts '1. Constructed QueryInflationRequest: (no parameters)'
  encoded = Xion::Mint::V1::QueryInflationRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.mint.v1 Query Messages — Protobuf Examples           ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_params_examples
  query_inflation_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
