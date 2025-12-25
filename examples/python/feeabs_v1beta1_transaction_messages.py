#!/usr/bin/env python3
"""
xion.feeabs.v1beta1 Transaction Messages — Protobuf Examples

This file demonstrates how to construct, encode, and decode
transaction messages from the Fee Abstraction Module (xion.feeabs.v1beta1).

Messages covered:
- MsgSwapCrossChain: Perform cross-chain token swap
- MsgFundFeeAbsModuleAccount: Fund the fee abstraction module
- MsgSendQueryIbcDenomTWAP: Query IBC denom TWAP via IBC
- MsgSwapCrossChainResponse: Response type (for reference)

Note: This module enables paying gas fees in tokens other than the native token.
"""

import sys
import os

# Add the python types to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../../python/types'))

from xion.feeabs.v1beta1 import tx_pb2 as feeabs_tx
from google.protobuf.json_format import MessageToJson


# =============================================================================
# MsgSwapCrossChain
# =============================================================================
# Perform a cross-chain token swap for fee abstraction.
# Type URL: /xion.feeabs.v1beta1.MsgSwapCrossChain
# Signer: from_address

def msg_swap_cross_chain_examples():
    print('=== MsgSwapCrossChain Examples ===\n')

    # 1. Construct message
    msg = feeabs_tx.MsgSwapCrossChain()
    msg.from_address = 'xion1sender...'
    msg.ibc_denom = 'ibc/27394FB092D2ECCD...'  # IBC denom hash

    print('1. Constructed MsgSwapCrossChain:')
    print(f'   from_address: {msg.from_address}')
    print(f'   ibc_denom: {msg.ibc_denom}')
    print(f'   typeUrl: /xion.feeabs.v1beta1.MsgSwapCrossChain')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = feeabs_tx.MsgSwapCrossChain()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded from_address: {decoded.from_address}')
    print(f'   Decoded ibc_denom: {decoded.ibc_denom}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# MsgFundFeeAbsModuleAccount
# =============================================================================
# Fund the fee abstraction module account.
# Type URL: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
# Signer: from_address

def msg_fund_fee_abs_module_account_examples():
    print('\n=== MsgFundFeeAbsModuleAccount Examples ===\n')

    # 1. Construct message
    msg = feeabs_tx.MsgFundFeeAbsModuleAccount()
    msg.from_address = 'xion1funder...'
    coin = msg.amount.add()
    coin.denom = 'uxion'
    coin.amount = '1000000000'  # 1000 XION

    print('1. Constructed MsgFundFeeAbsModuleAccount:')
    print(f'   from_address: {msg.from_address}')
    print(f'   amount: {msg.amount[0].amount} {msg.amount[0].denom}')
    print(f'   typeUrl: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    # 3. Decode
    decoded = feeabs_tx.MsgFundFeeAbsModuleAccount()
    decoded.ParseFromString(encoded_bytes)
    print(f'\n3. Decoded from_address: {decoded.from_address}')
    print(f'   Decoded amount: {decoded.amount[0].amount} {decoded.amount[0].denom}')

    # 4. JSON format
    json_str = MessageToJson(msg)
    print(f'\n4. JSON format:')
    print(f'   {json_str}')

    return msg


# =============================================================================
# MsgSendQueryIbcDenomTWAP
# =============================================================================
# Send an IBC query for denom TWAP (Time-Weighted Average Price).
# Type URL: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
# Signer: from_address

def msg_send_query_ibc_denom_twap_examples():
    print('\n=== MsgSendQueryIbcDenomTWAP Examples ===\n')

    # 1. Construct message
    msg = feeabs_tx.MsgSendQueryIbcDenomTWAP()
    msg.from_address = 'xion1sender...'

    print('1. Constructed MsgSendQueryIbcDenomTWAP:')
    print(f'   from_address: {msg.from_address}')
    print(f'   typeUrl: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP')

    # 2. Encode
    encoded_bytes = msg.SerializeToString()
    print(f'\n2. Encoded: {len(encoded_bytes)} bytes')

    return msg


# =============================================================================
# Understanding Fee Abstraction
# =============================================================================

def fee_abstraction_explanation():
    print('\n=== Understanding Fee Abstraction ===\n')

    print('Fee Abstraction allows users to pay gas fees in tokens')
    print('other than the native chain token.\n')

    print('How it works:\n')
    print('  1. User wants to pay fees in USDC instead of XION')
    print('  2. Fee Abstraction module accepts USDC')
    print('  3. Module swaps USDC -> XION via Osmosis')
    print('  4. Native XION is used for actual gas payment\n')

    print('Key Components:\n')
    print('  • Host Zone Config: Which chains/tokens are supported')
    print('  • TWAP (Time-Weighted Average Price): Price oracle')
    print('  • Module Account: Holds funds for swaps')
    print('  • IBC Integration: Cross-chain token transfers\n')

    print('Supported Operations:\n')
    print('  • Cross-chain swaps via IBC')
    print('  • TWAP queries for price discovery')
    print('  • Module account funding')


# =============================================================================
# Run All Examples
# =============================================================================

def main():
    print('╔════════════════════════════════════════════════════════════╗')
    print('║  xion.feeabs.v1beta1 Transaction Messages — Protobuf       ║')
    print('╚════════════════════════════════════════════════════════════╝\n')

    msg_swap_cross_chain_examples()
    msg_fund_fee_abs_module_account_examples()
    msg_send_query_ibc_denom_twap_examples()
    fee_abstraction_explanation()

    print('\n═══════════════════════════════════════════════════════════════')
    print('Type URL Reference:')
    print('  MsgSwapCrossChain:            /xion.feeabs.v1beta1.MsgSwapCrossChain')
    print('  MsgFundFeeAbsModuleAccount:   /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount')
    print('  MsgSendQueryIbcDenomTWAP:     /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP')
    print('\nNote: Fee Abstraction enables gasless UX by allowing')
    print('users to pay fees in non-native tokens.')
    print('═══════════════════════════════════════════════════════════════')


if __name__ == '__main__':
    main()
