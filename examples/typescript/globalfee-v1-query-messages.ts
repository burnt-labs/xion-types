/**
 * xion.globalfee.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Global Fee Module (xion.globalfee.v1).
 *
 * Queries covered:
 * - QueryParams: Get global fee parameters (minimum gas prices, bypass rules)
 *
 * The Global Fee module sets chain-wide minimum gas prices and defines
 * which message types can bypass fee requirements.
 *
 * Note: This module has no transaction messages. Parameters are updated
 * via governance proposals using the standard cosmos-sdk gov module.
 */

import {
  QueryParamsRequest,
  QueryParamsResponse,
} from '@burnt-labs/xion-types/types/xion/globalfee/v1/query';

import { Params, GenesisState } from '@burnt-labs/xion-types/types/xion/globalfee/v1/genesis';

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the global fee module parameters.
// Endpoint: GET /xion/globalfee/v1/params
// Type URL: /xion.globalfee.v1.QueryParamsRequest

function queryParamsExamples() {
  console.log('=== QueryParams Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryParamsRequest.fromPartial({});

  console.log('1. Constructed QueryParamsRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryParamsRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryParamsRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryParamsRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Construct response (typically received from chain)
  const response = QueryParamsResponse.fromPartial({
    params: {
      // Minimum gas prices - users must pay at least this much per gas unit
      // Multiple denoms = user can pay in ANY of these (not all)
      minimumGasPrices: [
        { denom: 'uxion', amount: '0.001' }, // 0.001 uxion per gas
      ],
      // Message types that can bypass minimum fee (still need some fee, but can be zero)
      bypassMinFeeMsgTypes: [
        '/ibc.core.client.v1.MsgUpdateClient',
        '/ibc.core.channel.v1.MsgRecvPacket',
        '/ibc.core.channel.v1.MsgAcknowledgement',
        '/ibc.core.channel.v1.MsgTimeout',
        '/ibc.core.channel.v1.MsgTimeoutOnClose',
      ],
      // Max gas for transactions containing only bypass messages
      maxTotalBypassMinFeeMsgGasUsage: BigInt(1000000), // 1M gas
    },
  });

  console.log('4. Constructed Response:');
  console.log('   params.minimumGasPrices:');
  response.params.minimumGasPrices.forEach((coin) => {
    console.log(`     - ${coin.amount} ${coin.denom} per gas`);
  });
  console.log('\n   params.bypassMinFeeMsgTypes:');
  response.params.bypassMinFeeMsgTypes.forEach((msgType) => {
    console.log(`     - ${msgType}`);
  });
  console.log('\n   params.maxTotalBypassMinFeeMsgGasUsage:', response.params.maxTotalBypassMinFeeMsgGasUsage.toString());
  console.log('   typeUrl:', QueryParamsResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryParamsResponse.encode(response).finish();
  const decodedResponse = QueryParamsResponse.decode(encodedResponse);
  console.log('\n5. Decoded minimumGasPrices count:', decodedResponse.params.minimumGasPrices.length);
  console.log('   Decoded bypassMinFeeMsgTypes count:', decodedResponse.params.bypassMinFeeMsgTypes.length);

  // 6. Amino format
  const amino = QueryParamsResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   params.minimum_gas_prices:', amino.params.minimum_gas_prices);
  console.log('   params.bypass_min_fee_msg_types count:', amino.params.bypass_min_fee_msg_types.length);

  return { request, response };
}

// =============================================================================
// Params Type Helper
// =============================================================================
// The Params type defines global fee configuration

function paramsExamples() {
  console.log('\n=== Params Type Examples ===\n');

  // Construct Params
  const params = Params.fromPartial({
    minimumGasPrices: [
      { denom: 'uxion', amount: '0.001' },
      { denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2', amount: '0.0001' }, // ATOM
    ],
    bypassMinFeeMsgTypes: [
      '/ibc.core.client.v1.MsgUpdateClient',
      '/ibc.core.channel.v1.MsgRecvPacket',
    ],
    maxTotalBypassMinFeeMsgGasUsage: BigInt(1000000),
  });

  console.log('1. Constructed Params:');
  console.log('   minimumGasPrices:');
  params.minimumGasPrices.forEach((coin) => {
    console.log(`     - ${coin.amount} ${coin.denom.substring(0, 30)}${coin.denom.length > 30 ? '...' : ''}`);
  });
  console.log('\n   bypassMinFeeMsgTypes:', params.bypassMinFeeMsgTypes.length, 'types');
  console.log('   maxTotalBypassMinFeeMsgGasUsage:', params.maxTotalBypassMinFeeMsgGasUsage.toString());

  // Encode/decode
  const encoded = Params.encode(params).finish();
  const decoded = Params.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded minimumGasPrices count:', decoded.minimumGasPrices.length);

  // Amino
  const amino = Params.toAmino(params);
  console.log('\n3. Amino format:');
  console.log('   minimum_gas_prices:', amino.minimum_gas_prices);

  return params;
}

// =============================================================================
// GenesisState Type Helper
// =============================================================================

function genesisStateExamples() {
  console.log('\n=== GenesisState Type Examples ===\n');

  // Construct GenesisState
  const genesis = GenesisState.fromPartial({
    params: {
      minimumGasPrices: [
        { denom: 'uxion', amount: '0.001' },
      ],
      bypassMinFeeMsgTypes: [
        '/ibc.core.client.v1.MsgUpdateClient',
      ],
      maxTotalBypassMinFeeMsgGasUsage: BigInt(1000000),
    },
  });

  console.log('1. Constructed GenesisState:');
  console.log('   params.minimumGasPrices:', genesis.params.minimumGasPrices.length, 'entries');
  console.log('   params.bypassMinFeeMsgTypes:', genesis.params.bypassMinFeeMsgTypes.length, 'types');

  // Encode/decode
  const encoded = GenesisState.encode(genesis).finish();
  const decoded = GenesisState.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded successfully:', !!decoded.params);

  return genesis;
}

// =============================================================================
// Understanding Global Fees
// =============================================================================

function globalFeeExplanation() {
  console.log('\n=== Understanding Global Fees ===\n');

  console.log('The Global Fee module enforces chain-wide minimum gas prices.\n');

  console.log('Key Concepts:\n');

  console.log('1. minimum_gas_prices:');
  console.log('   - Sets minimum price per unit of gas');
  console.log('   - Multiple denoms = user can pay in ANY of them');
  console.log('   - Example: 0.001 uxion means 1M gas costs at least 1000 uxion\n');

  console.log('2. bypass_min_fee_msg_types:');
  console.log('   - Messages that can skip minimum fee requirement');
  console.log('   - Typically IBC relay messages (to not block relayers)');
  console.log('   - TX must ONLY contain bypass messages to qualify\n');

  console.log('3. max_total_bypass_min_fee_msg_gas_usage:');
  console.log('   - Maximum gas for a "bypass" transaction');
  console.log('   - Prevents abuse of fee bypass\n');

  console.log('Fee Calculation Example:');
  console.log('  Gas limit: 200,000');
  console.log('  Min gas price: 0.001 uxion');
  console.log('  Minimum fee: 200,000 × 0.001 = 200 uxion\n');

  console.log('Common Bypass Message Types:');
  const bypassTypes = [
    '/ibc.core.client.v1.MsgUpdateClient',
    '/ibc.core.channel.v1.MsgRecvPacket',
    '/ibc.core.channel.v1.MsgAcknowledgement',
    '/ibc.core.channel.v1.MsgTimeout',
    '/ibc.core.channel.v1.MsgTimeoutOnClose',
  ];
  bypassTypes.forEach((t) => console.log(`  - ${t}`));
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.globalfee.v1 Query Messages — Protobuf Examples      ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryParamsExamples();
  paramsExamples();
  genesisStateExamples();
  globalFeeExplanation();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  QueryParamsRequest:  ', QueryParamsRequest.typeUrl);
  console.log('  QueryParamsResponse: ', QueryParamsResponse.typeUrl);
  console.log('\nREST Endpoint:');
  console.log('  GET /xion/globalfee/v1/params');
  console.log('\nNote: This module has no transaction messages.');
  console.log('Parameters are updated via governance proposals.');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryParamsExamples,
  paramsExamples,
  genesisStateExamples,
  globalFeeExplanation,
};

