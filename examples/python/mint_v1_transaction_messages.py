#!/usr/bin/env python3
"""
xion.mint.v1 Transaction Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
transaction messages from the Mint Module (xion.mint.v1).

Messages covered:
- MsgUpdateParams: Update mint module parameters (governance)

Note: This is primarily a governance module. The mint module handles
token inflation/minting according to parameters set by governance.
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.mint.v1 import tx_pb2 as mint_tx
from google.protobuf.json_format import MessageToJson


# =============================================================================
# MsgUpdateParams
# =============================================================================
# Update mint module parameters via governance.
# Type URL: /xion.mint.v1.MsgUpdateParams
# Signer: authority (governance module address)

def msg_update_params_examples():
    print('=== MsgUpdateParams Examples ===\n')

    # 1. Construct message
    msg = mint_tx.MsgUpdateParams()
    msg.authority = 'xion1governance...'  # Must be the governance module address

    # Set mint parameters
    msg.params.mint_denom = 'uxion'
    msg.params.inflation_rate_change = '0.130000000000000000'  # 13% max change per year
    msg.params.inflation_max = '0.200000000000000000'  # 20% max inflation
    msg.params.inflation_min = '0.070000000000000000'  # 7% min inflation
    msg.params.goal_bonded = '0.670000000000000000'  # 67% target bonding ratio
    msg.params.blocks_per_year = 6311520  # Approximate blocks per year

    print('1. Constructed MsgUpdateParams:')
    print(f'   authority: {msg.authority}')
    print(f'   params.mint_denom: {msg.params.mint_denom}')
    print(f'   params.inflation_rate_change: {msg.params.inflation_rate_change}')
    print(f'   params.inflation_max: {msg.params.inflation_max}')
    print(f'   params.inflation_min: {msg.params.inflation_min}')
    print(f'   params.goal_bonded: {msg.params.goal_bonded}')
    print(f'   params.blocks_per_year: {msg.params.blocks_per_year}')
    print(f'   typeUrl: /xion.mint.v1.MsgUpdateParams')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = mint_tx.MsgUpdateParams()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded params.mint_denom: {decoded.params.mint_denom}')
    print(f'   Decoded params.blocks_per_year: {decoded.params.blocks_per_year}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# Understanding Mint Parameters
# =============================================================================

def mint_params_explanation():
    print('\n=== Understanding Mint Parameters ===\n')

    print('The Mint module controls token inflation on Xion.\n')

    print('Key Parameters:\n')

    params = [
        ('mint_denom', 'Token denomination to mint (e.g., uxion)'),
        ('inflation_rate_change', 'Max annual % change in inflation rate'),
        ('inflation_max', 'Maximum possible inflation rate'),
        ('inflation_min', 'Minimum possible inflation rate'),
        ('goal_bonded', 'Target staking ratio (affects inflation adjustment)'),
        ('blocks_per_year', 'Expected blocks per year (for rate calculation)'),
    ]

    for param, desc in params:
        print(f'  • {param}:')
        print(f'    {desc}\n')

    print('How Inflation Works:\n')
    print('  1. If bonded ratio < goal_bonded: inflation increases')
    print('  2. If bonded ratio > goal_bonded: inflation decreases')
    print('  3. Inflation rate bounded by inflation_min and inflation_max')
    print('  4. Rate changes limited by inflation_rate_change per year')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.mint.v1 Transaction Messages — Protobuf Examples     ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    msg_update_params_examples()
    mint_params_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference:')
    print('  MsgUpdateParams: /xion.mint.v1.MsgUpdateParams')
    print('\nNote: This message requires governance authority.')
    print('Regular users cannot update mint parameters directly.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
