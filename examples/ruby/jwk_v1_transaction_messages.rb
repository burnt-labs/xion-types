#!/usr/bin/env ruby
# frozen_string_literal: true

# xion.jwk.v1 Transaction Messages — Protobuf Examples
#
# This file demonstrates how to construct, encode, and decode
# transaction messages from the JWK Module (xion.jwk.v1).
#
# This example uses the xion_types gem. Install it with:
#   gem install xion_types
# Or add it to your Gemfile:
#   gem 'xion_types'

require 'xion_types'

def msg_create_audience_examples
  puts '=== MsgCreateAudience Examples ==='
  puts
  msg = Xion::Jwk::V1::MsgCreateAudience.new(
    admin: 'xion1admin...',
    aud: 'your-app-audience-id',
    key: 'https://your-issuer.com/.well-known/jwks.json'
  )
  puts "1. Constructed MsgCreateAudience: admin=#{msg.admin}, aud=#{msg.aud}"
  encoded = Xion::Jwk::V1::MsgCreateAudience.encode(msg)
  puts "2. Encoded: #{encoded.length} bytes"
  msg
end

def main
  puts '╔════════════════════════════════════════════════════════════╗'
  puts '║  xion.jwk.v1 Transaction Messages — Protobuf Examples      ║'
  puts '╚════════════════════════════════════════════════════════════╝'
  puts
  msg_create_audience_examples
  puts "\n═══════════════════════════════════════════════════════════════"
end

main if __FILE__ == $PROGRAM_NAME
