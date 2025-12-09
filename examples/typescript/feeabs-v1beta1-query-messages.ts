/**
 * xion.feeabs.v1beta1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Queries covered:
 * - QueryOsmosisArithmeticTwap: Get TWAP price for an IBC token
 * - QueryFeeabsModuleBalances: Get module account balances
 * - QueryHostChainConfig: Get configuration for a specific IBC token
 * - QueryAllHostChainConfig: List all host chain configurations
 *
 * Fee Abstraction allows users to pay transaction fees in non-native tokens
 * by swapping them to native tokens via Osmosis cross-chain swaps.
 */

import {
  QueryOsmosisArithmeticTwapRequest,
  QueryOsmosisArithmeticTwapResponse,
  QueryFeeabsModuleBalancesRequest,
  QueryFeeabsModuleBalancesResponse,
  QueryHostChainConfigRequest,
  QueryHostChainConfigResponse,
  QueryAllHostChainConfigRequest,
  QueryAllHostChainConfigResponse,
} from '@burnt-labs/xion-types/types/xion/feeabs/v1beta1/query';

import {
  HostChainFeeAbsConfig,
  HostChainFeeAbsStatus,
} from '@burnt-labs/xion-types/types/xion/feeabs/v1beta1/proposal';

// =============================================================================
// QueryOsmosisArithmeticTwapRequest / Response
// =============================================================================
// Get the Time-Weighted Average Price (TWAP) for an IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest

function queryOsmosisArithmeticTwapExamples() {
  console.log('=== QueryOsmosisArithmeticTwap Examples ===\n');

  // 1. Construct request
  const request = QueryOsmosisArithmeticTwapRequest.fromPartial({
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2', // ATOM
  });

  console.log('1. Constructed QueryOsmosisArithmeticTwapRequest:');
  console.log('   ibcDenom:', request.ibcDenom);
  console.log('   typeUrl:', QueryOsmosisArithmeticTwapRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryOsmosisArithmeticTwapRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryOsmosisArithmeticTwapRequest.decode(encodedRequest);
  console.log('\n3. Decoded ibcDenom:', decodedRequest.ibcDenom);

  // 4. ProtoMsg
  const protoMsg = QueryOsmosisArithmeticTwapRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // TWAP is returned as a decimal string (LegacyDec)
  // Example: "8.500000000000000000" means 1 ATOM = 8.5 XION
  const response = QueryOsmosisArithmeticTwapResponse.fromPartial({
    arithmeticTwap: '8.500000000000000000',
  });

  console.log('5. Constructed Response:');
  console.log('   arithmeticTwap:', response.arithmeticTwap);
  console.log('   Interpretation: 1 IBC token = ', parseFloat(response.arithmeticTwap), 'native tokens');
  console.log('   typeUrl:', QueryOsmosisArithmeticTwapResponse.typeUrl);

  // 6. Encode/decode response
  const encodedResponse = QueryOsmosisArithmeticTwapResponse.encode(response).finish();
  const decodedResponse = QueryOsmosisArithmeticTwapResponse.decode(encodedResponse);
  console.log('\n6. Decoded arithmeticTwap:', decodedResponse.arithmeticTwap);

  return { request, response };
}

// =============================================================================
// QueryFeeabsModuleBalancesRequest / Response
// =============================================================================
// Get the balances held by the fee abstraction module account.
// Endpoint: GET /fee-abstraction/feeabs/v1/module-balances
// Type URL: /xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest

function queryFeeabsModuleBalancesExamples() {
  console.log('\n=== QueryFeeabsModuleBalances Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryFeeabsModuleBalancesRequest.fromPartial({});

  console.log('1. Constructed QueryFeeabsModuleBalancesRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryFeeabsModuleBalancesRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryFeeabsModuleBalancesRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryFeeabsModuleBalancesRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryFeeabsModuleBalancesResponse.fromPartial({
    balances: [
      { denom: 'uxion', amount: '1000000000000' }, // 1M XION
      { denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2', amount: '50000000' }, // 50 ATOM
    ],
    address: 'xion1feeabsmoduleaddress...',
  });

  console.log('4. Constructed Response:');
  console.log('   address:', response.address);
  console.log('   balances:');
  response.balances.forEach((coin) => {
    const displayAmount = coin.denom === 'uxion' 
      ? `${(parseInt(coin.amount) / 1_000_000).toLocaleString()} XION`
      : `${coin.amount} ${coin.denom.substring(0, 20)}...`;
    console.log(`     - ${displayAmount}`);
  });
  console.log('   typeUrl:', QueryFeeabsModuleBalancesResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryFeeabsModuleBalancesResponse.encode(response).finish();
  const decodedResponse = QueryFeeabsModuleBalancesResponse.decode(encodedResponse);
  console.log('\n5. Decoded balances count:', decodedResponse.balances.length);
  console.log('   Decoded address:', decodedResponse.address);

  return { request, response };
}

// =============================================================================
// QueryHostChainConfigRequest / Response
// =============================================================================
// Get the configuration for a specific IBC token.
// Endpoint: GET /fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}
// Type URL: /xion.feeabs.v1beta1.QueryHostChainConfigRequest

function queryHostChainConfigExamples() {
  console.log('\n=== QueryHostChainConfig Examples ===\n');

  // 1. Construct request
  const request = QueryHostChainConfigRequest.fromPartial({
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
  });

  console.log('1. Constructed QueryHostChainConfigRequest:');
  console.log('   ibcDenom:', request.ibcDenom);
  console.log('   typeUrl:', QueryHostChainConfigRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryHostChainConfigRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryHostChainConfigRequest.decode(encodedRequest);
  console.log('\n3. Decoded ibcDenom:', decodedRequest.ibcDenom);

  // 4. ProtoMsg
  const protoMsg = QueryHostChainConfigRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryHostChainConfigResponse.fromPartial({
    hostChainConfig: {
      ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      osmosisPoolTokenDenomIn: 'uatom',
      poolId: BigInt(1),
      status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED,
    },
  });

  console.log('5. Constructed Response:');
  console.log('   hostChainConfig.ibcDenom:', response.hostChainConfig.ibcDenom.substring(0, 40) + '...');
  console.log('   hostChainConfig.osmosisPoolTokenDenomIn:', response.hostChainConfig.osmosisPoolTokenDenomIn);
  console.log('   hostChainConfig.poolId:', response.hostChainConfig.poolId.toString());
  console.log('   hostChainConfig.status:', response.hostChainConfig.status, '(UPDATED)');
  console.log('   typeUrl:', QueryHostChainConfigResponse.typeUrl);

  // 6. Encode/decode response
  const encodedResponse = QueryHostChainConfigResponse.encode(response).finish();
  const decodedResponse = QueryHostChainConfigResponse.decode(encodedResponse);
  console.log('\n6. Decoded poolId:', decodedResponse.hostChainConfig.poolId.toString());

  return { request, response };
}

// =============================================================================
// QueryAllHostChainConfigRequest / Response
// =============================================================================
// Get all host chain configurations.
// Endpoint: GET /fee-abstraction/feeabs/v1/all-host-chain-config
// Type URL: /xion.feeabs.v1beta1.QueryAllHostChainConfigRequest

function queryAllHostChainConfigExamples() {
  console.log('\n=== QueryAllHostChainConfig Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryAllHostChainConfigRequest.fromPartial({});

  console.log('1. Constructed QueryAllHostChainConfigRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryAllHostChainConfigRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAllHostChainConfigRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryAllHostChainConfigRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAllHostChainConfigResponse.fromPartial({
    allHostChainConfig: [
      {
        ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        osmosisPoolTokenDenomIn: 'uatom',
        poolId: BigInt(1),
        status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED,
      },
      {
        ibcDenom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
        osmosisPoolTokenDenomIn: 'uusdc',
        poolId: BigInt(678),
        status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED,
      },
      {
        ibcDenom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
        osmosisPoolTokenDenomIn: 'uosmo',
        poolId: BigInt(1),
        status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_OUTDATED,
      },
    ],
  });

  console.log('4. Constructed Response:');
  console.log('   allHostChainConfig count:', response.allHostChainConfig.length);
  response.allHostChainConfig.forEach((config, i) => {
    const statusName = getStatusName(config.status);
    console.log(`\n   [${i}] ${config.osmosisPoolTokenDenomIn}:`);
    console.log(`       ibcDenom: ${config.ibcDenom.substring(0, 30)}...`);
    console.log(`       poolId: ${config.poolId.toString()}`);
    console.log(`       status: ${statusName}`);
  });
  console.log('\n   typeUrl:', QueryAllHostChainConfigResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryAllHostChainConfigResponse.encode(response).finish();
  const decodedResponse = QueryAllHostChainConfigResponse.decode(encodedResponse);
  console.log('\n5. Decoded config count:', decodedResponse.allHostChainConfig.length);

  return { request, response };
}

// =============================================================================
// Helper: Get status name
// =============================================================================

function getStatusName(status: HostChainFeeAbsStatus): string {
  switch (status) {
    case HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED:
      return 'UNSPECIFIED';
    case HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED:
      return 'UPDATED ✓';
    case HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_OUTDATED:
      return 'OUTDATED ⚠️';
    case HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_FROZEN:
      return 'FROZEN ❄️';
    default:
      return 'UNKNOWN';
  }
}

// =============================================================================
// Understanding Fee Abstraction Flow
// =============================================================================

function feeAbstractionFlowExamples() {
  console.log('\n=== Understanding Fee Abstraction Flow ===\n');

  console.log('Fee Abstraction allows users to pay fees in non-native tokens.\n');

  console.log('Flow:');
  console.log('  1. User wants to pay fees in ATOM (IBC token)');
  console.log('  2. Query TWAP to get current ATOM/XION price');
  console.log('  3. FeeAbs module swaps ATOM → XION via Osmosis');
  console.log('  4. Swapped XION is used to pay the actual fee\n');

  console.log('Requirements:');
  console.log('  • Host chain config must exist for the IBC token');
  console.log('  • Config status must be UPDATED (TWAP is current)');
  console.log('  • FeeAbs module must have sufficient balance');
  console.log('  • Osmosis pool must have liquidity\n');

  console.log('IBC Denom Format:');
  console.log('  ibc/HASH');
  console.log('  where HASH = SHA256(path/channel-id/denom)\n');

  console.log('Common IBC Tokens:');
  console.log('  • ATOM: ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2');
  console.log('  • USDC: ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858');
  console.log('  • OSMO: ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4');
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.feeabs.v1beta1 Query Messages — Protobuf Examples    ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryOsmosisArithmeticTwapExamples();
  queryFeeabsModuleBalancesExamples();
  queryHostChainConfigExamples();
  queryAllHostChainConfigExamples();
  feeAbstractionFlowExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryOsmosisArithmeticTwapRequest: ', QueryOsmosisArithmeticTwapRequest.typeUrl);
  console.log('  QueryFeeabsModuleBalancesRequest:  ', QueryFeeabsModuleBalancesRequest.typeUrl);
  console.log('  QueryHostChainConfigRequest:       ', QueryHostChainConfigRequest.typeUrl);
  console.log('  QueryAllHostChainConfigRequest:    ', QueryAllHostChainConfigRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryOsmosisArithmeticTwapResponse:', QueryOsmosisArithmeticTwapResponse.typeUrl);
  console.log('  QueryFeeabsModuleBalancesResponse: ', QueryFeeabsModuleBalancesResponse.typeUrl);
  console.log('  QueryHostChainConfigResponse:      ', QueryHostChainConfigResponse.typeUrl);
  console.log('  QueryAllHostChainConfigResponse:   ', QueryAllHostChainConfigResponse.typeUrl);
  console.log('\nREST Endpoints:');
  console.log('  GET /fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/{ibc_denom}');
  console.log('  GET /fee-abstraction/feeabs/v1/module-balances');
  console.log('  GET /fee-abstraction/feeabs/v1/host-chain-config/{ibc_denom}');
  console.log('  GET /fee-abstraction/feeabs/v1/all-host-chain-config');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryOsmosisArithmeticTwapExamples,
  queryFeeabsModuleBalancesExamples,
  queryHostChainConfigExamples,
  queryAllHostChainConfigExamples,
  feeAbstractionFlowExamples,
  getStatusName,
};

