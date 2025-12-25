#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.indexer.feegrant.v1 Query Messages — Protobuf Examples
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

begin
  require 'xion_types'
rescue LoadError => e
  puts "⚠️  Warning: xion_types gem not found. Install it with: gem install xion_types"
  puts "   Error: #{e.message}"
  exit 1
end

def query_allowance_examples
  puts '=== QueryAllowance Examples ==='
  puts
  request = Xion::Indexer::Feegrant::V1::QueryAllowanceRequest.new(
    granter: 'xion1granter...',
    grantee: 'xion1grantee...'
  )
  puts "1. Constructed QueryAllowanceRequest: granter=#{request.granter}, grantee=#{request.grantee}"
  encoded = Xion::Indexer::Feegrant::V1::QueryAllowanceRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.indexer.feegrant.v1 Query Messages — Protobuf      ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_allowance_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
