#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.jwk.v1 Query Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# query messages from the JWK Module (xion.jwk.v1).
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def query_audience_examples
  puts '=== QueryAudience Examples ==='
  puts
  request = Xion::Jwk::V1::QueryAudienceRequest.new(aud: 'your-app-audience-id')
  puts "1. Constructed QueryAudienceRequest: aud=#{request.aud}"
  encoded = Xion::Jwk::V1::QueryAudienceRequest.encode(request)
  puts "2. Encoded: #{encoded.length} bytes"
  [request]
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.jwk.v1 Query Messages — Protobuf Examples           ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  query_audience_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
