#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.indexer.authz.v1 Query Messages — Protobuf Examples
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

def query_grants_examples
  puts '=== QueryGrants Examples ==='
  puts
  request = Xion::Indexer::Authz::V1::QueryGrantsRequest.new(
    granter: 'xion1granter...',
    grantee: 'xion1grantee...',
    msg_type_url: '/cosmos.bank.v1beta1.MsgSend'
  )
  puts "1. Constructed QueryGrantsRequest: granter=#{request.granter}, grantee=#{request.grantee}"
  encoded = Xion::Indexer::Authz::V1::QueryGrantsRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.indexer.authz.v1 Query Messages — Protobuf Examples ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_grants_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
