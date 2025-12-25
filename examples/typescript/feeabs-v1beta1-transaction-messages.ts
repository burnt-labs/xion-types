/**
 * xion.feeabs.v1beta1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Fee Abstraction Module (xion.feeabs.v1beta1).
 *
 * Messages covered:
 * - MsgFundFeeAbsModuleAccount: Fund the fee abstraction module
 * - MsgSendQueryIbcDenomTWAP: Query TWAP price from Osmosis
 * - MsgSwapCrossChain: Execute cross-chain swap for fee payment
 * - MsgUpdateParams: Update module parameters (governance)
 * - MsgAddHostZone: Add new host chain configuration (governance)
 * - MsgUpdateHostZone: Update host chain configuration (governance)
 * - MsgRemoveHostZone: Remove host chain configuration (governance)
 *
 * Fee Abstraction allows users to pay transaction fees in non-native tokens
 * by swapping them to native tokens via Osmosis cross-chain swaps.
 */

import {
  MsgFundFeeAbsModuleAccount,
  MsgFundFeeAbsModuleAccountResponse,
  MsgSendQueryIbcDenomTWAP,
  MsgSendQueryIbcDenomTWAPResponse,
  MsgSwapCrossChain,
  MsgSwapCrossChainResponse,
  MsgUpdateParams,
  MsgUpdateParamsResponse,
  MsgAddHostZone,
  MsgAddHostZoneResponse,
  MsgUpdateHostZone,
  MsgUpdateHostZoneResponse,
  MsgRemoveHostZone,
  MsgRemoveHostZoneResponse,
} from '@burnt-labs/xion-types/types/xion/feeabs/v1beta1/tx';

import {
  HostChainFeeAbsConfig,
  HostChainFeeAbsStatus,
} from '@burnt-labs/xion-types/types/xion/feeabs/v1beta1/proposal';

import { Params } from '@burnt-labs/xion-types/types/xion/feeabs/v1beta1/params';

// =============================================================================
// MsgFundFeeAbsModuleAccount
// =============================================================================
// Fund the fee abstraction module account with tokens.
// Type URL: /xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
// Signer: sender
//
// Use case: Add liquidity to the feeabs module so it can perform swaps.

function msgFundFeeAbsModuleAccountExamples() {
  console.log('=== MsgFundFeeAbsModuleAccount Examples ===\n');

  // 1. Construct message
  const msg = MsgFundFeeAbsModuleAccount.fromPartial({
    sender: 'xion1sender...',
    amount: [
      { denom: 'uxion', amount: '1000000000' }, // 1000 XION
    ],
  });

  console.log('1. Constructed MsgFundFeeAbsModuleAccount:');
  console.log('   sender:', msg.sender);
  console.log('   amount:');
  msg.amount.forEach((coin) => {
    console.log(`     - ${coin.amount} ${coin.denom}`);
  });
  console.log('   typeUrl:', MsgFundFeeAbsModuleAccount.typeUrl);

  // 2. Encode to protobuf bytes
  const encodedBytes = MsgFundFeeAbsModuleAccount.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode from protobuf bytes
  const decoded = MsgFundFeeAbsModuleAccount.decode(encodedBytes);
  console.log('\n3. Decoded sender:', decoded.sender);
  console.log('   Decoded amount:', decoded.amount[0]?.amount, decoded.amount[0]?.denom);

  // 4. ProtoMsg for signing
  const protoMsg = MsgFundFeeAbsModuleAccount.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino encoding
  const aminoMsg = MsgFundFeeAbsModuleAccount.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   sender:', aminoMsg.sender);
  console.log('   amount:', aminoMsg.amount);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgFundFeeAbsModuleAccountResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgFundFeeAbsModuleAccountResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgSendQueryIbcDenomTWAP
// =============================================================================
// Send a TWAP (Time-Weighted Average Price) query to Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
// Signer: sender
//
// Use case: Query the current exchange rate for an IBC token on Osmosis.

function msgSendQueryIbcDenomTWAPExamples() {
  console.log('\n=== MsgSendQueryIbcDenomTWAP Examples ===\n');

  // 1. Construct message
  const msg = MsgSendQueryIbcDenomTWAP.fromPartial({
    sender: 'xion1sender...',
  });

  console.log('1. Constructed MsgSendQueryIbcDenomTWAP:');
  console.log('   sender:', msg.sender);
  console.log('   typeUrl:', MsgSendQueryIbcDenomTWAP.typeUrl);

  // 2. Encode
  const encodedBytes = MsgSendQueryIbcDenomTWAP.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgSendQueryIbcDenomTWAP.decode(encodedBytes);
  console.log('\n3. Decoded sender:', decoded.sender);

  // 4. ProtoMsg
  const protoMsg = MsgSendQueryIbcDenomTWAP.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgSendQueryIbcDenomTWAP.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   sender:', aminoMsg.sender);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgSendQueryIbcDenomTWAPResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgSendQueryIbcDenomTWAPResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgSwapCrossChain
// =============================================================================
// Execute a cross-chain swap via Osmosis.
// Type URL: /xion.feeabs.v1beta1.MsgSwapCrossChain
// Signer: sender
//
// Use case: Swap IBC tokens to native tokens for fee payment.

function msgSwapCrossChainExamples() {
  console.log('\n=== MsgSwapCrossChain Examples ===\n');

  // 1. Construct message
  // ibc_denom is the IBC denomination of the token to swap
  // Format: ibc/HASH where HASH is derived from the channel path
  const msg = MsgSwapCrossChain.fromPartial({
    sender: 'xion1sender...',
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2', // ATOM on Xion
  });

  console.log('1. Constructed MsgSwapCrossChain:');
  console.log('   sender:', msg.sender);
  console.log('   ibcDenom:', msg.ibcDenom);
  console.log('   typeUrl:', MsgSwapCrossChain.typeUrl);

  // 2. Encode
  const encodedBytes = MsgSwapCrossChain.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgSwapCrossChain.decode(encodedBytes);
  console.log('\n3. Decoded sender:', decoded.sender);
  console.log('   Decoded ibcDenom:', decoded.ibcDenom);

  // 4. ProtoMsg
  const protoMsg = MsgSwapCrossChain.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgSwapCrossChain.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   sender:', aminoMsg.sender);
  console.log('   ibc_denom:', aminoMsg.ibc_denom);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgSwapCrossChainResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgSwapCrossChainResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the fee abstraction module parameters (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateParams
// Signer: authority (governance)
//
// Use case: Change Osmosis connection settings, channels, swap contract.

function msgUpdateParamsExamples() {
  console.log('\n=== MsgUpdateParams Examples ===\n');

  // 1. Construct message with all params
  const msg = MsgUpdateParams.fromPartial({
    authority: 'xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe', // Governance address
    params: {
      nativeIbcedInOsmosis: 'ibc/XION_ON_OSMOSIS_HASH', // XION as IBC token on Osmosis
      osmosisQueryTwapPath: '/osmosis.twap.v1beta1.Query/ArithmeticTwap',
      chainName: 'xion',
      ibcTransferChannel: 'channel-0', // Transfer channel to Osmosis
      ibcQueryIcqChannel: 'channel-1', // ICQ channel to Osmosis
      osmosisCrosschainSwapAddress: 'osmo1crosschainswap...', // Swap contract on Osmosis
    },
  });

  console.log('1. Constructed MsgUpdateParams:');
  console.log('   authority:', msg.authority);
  console.log('   params.nativeIbcedInOsmosis:', msg.params?.nativeIbcedInOsmosis);
  console.log('   params.chainName:', msg.params?.chainName);
  console.log('   params.ibcTransferChannel:', msg.params?.ibcTransferChannel);
  console.log('   params.ibcQueryIcqChannel:', msg.params?.ibcQueryIcqChannel);
  console.log('   typeUrl:', MsgUpdateParams.typeUrl);

  // 2. Encode
  const encodedBytes = MsgUpdateParams.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgUpdateParams.decode(encodedBytes);
  console.log('\n3. Decoded authority:', decoded.authority);
  console.log('   Decoded params.chainName:', decoded.params?.chainName);

  // 4. ProtoMsg
  const protoMsg = MsgUpdateParams.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgUpdateParams.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   authority:', aminoMsg.authority);
  console.log('   params.chain_name:', aminoMsg.params.chain_name);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgUpdateParamsResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgUpdateParamsResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgAddHostZone
// =============================================================================
// Add a new host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgAddHostZone
// Signer: authority (governance)
//
// Use case: Enable a new IBC token to be used for fee payment.

function msgAddHostZoneExamples() {
  console.log('\n=== MsgAddHostZone Examples ===\n');

  // 1. Construct message
  const msg = MsgAddHostZone.fromPartial({
    authority: 'xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe',
    hostChainConfig: {
      ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2', // ATOM
      osmosisPoolTokenDenomIn: 'uatom', // Token denom on Osmosis side
      poolId: BigInt(1), // Osmosis pool ID for ATOM/OSMO
      status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED,
    },
  });

  console.log('1. Constructed MsgAddHostZone:');
  console.log('   authority:', msg.authority);
  console.log('   hostChainConfig.ibcDenom:', msg.hostChainConfig?.ibcDenom?.substring(0, 40) + '...');
  console.log('   hostChainConfig.osmosisPoolTokenDenomIn:', msg.hostChainConfig?.osmosisPoolTokenDenomIn);
  console.log('   hostChainConfig.poolId:', msg.hostChainConfig?.poolId?.toString());
  console.log('   hostChainConfig.status:', msg.hostChainConfig?.status, '(UPDATED)');
  console.log('   typeUrl:', MsgAddHostZone.typeUrl);

  // 2. Encode
  const encodedBytes = MsgAddHostZone.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgAddHostZone.decode(encodedBytes);
  console.log('\n3. Decoded poolId:', decoded.hostChainConfig?.poolId?.toString());

  // 4. ProtoMsg
  const protoMsg = MsgAddHostZone.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgAddHostZone.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   authority:', aminoMsg.authority);
  console.log('   host_chain_config.pool_id:', aminoMsg.host_chain_config.pool_id);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgAddHostZoneResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgAddHostZoneResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgUpdateHostZone
// =============================================================================
// Update an existing host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgUpdateHostZone
// Signer: authority (governance)

function msgUpdateHostZoneExamples() {
  console.log('\n=== MsgUpdateHostZone Examples ===\n');

  // 1. Construct message
  const msg = MsgUpdateHostZone.fromPartial({
    authority: 'xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe',
    hostChainConfig: {
      ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      osmosisPoolTokenDenomIn: 'uatom',
      poolId: BigInt(1135), // Updated pool ID
      status: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED,
    },
  });

  console.log('1. Constructed MsgUpdateHostZone:');
  console.log('   authority:', msg.authority);
  console.log('   hostChainConfig.poolId:', msg.hostChainConfig?.poolId?.toString());
  console.log('   hostChainConfig.status:', msg.hostChainConfig?.status);
  console.log('   typeUrl:', MsgUpdateHostZone.typeUrl);

  // 2. Encode
  const encodedBytes = MsgUpdateHostZone.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = MsgUpdateHostZone.toProtoMsg(msg);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 4. Amino
  const aminoMsg = MsgUpdateHostZone.toAmino(msg);
  console.log('\n4. Amino format:');
  console.log('   host_chain_config.pool_id:', aminoMsg.host_chain_config.pool_id);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgUpdateHostZoneResponse.fromPartial({});
  console.log('5. Response (empty = success)');

  return msg;
}

// =============================================================================
// MsgRemoveHostZone
// =============================================================================
// Remove a host chain configuration (governance).
// Type URL: /xion.feeabs.v1beta1.MsgRemoveHostZone
// Signer: authority (governance)
//
// Use case: Disable an IBC token from being used for fee payment.

function msgRemoveHostZoneExamples() {
  console.log('\n=== MsgRemoveHostZone Examples ===\n');

  // 1. Construct message
  const msg = MsgRemoveHostZone.fromPartial({
    authority: 'xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe',
    ibcDenom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
  });

  console.log('1. Constructed MsgRemoveHostZone:');
  console.log('   authority:', msg.authority);
  console.log('   ibcDenom:', msg.ibcDenom);
  console.log('   typeUrl:', MsgRemoveHostZone.typeUrl);

  // 2. Encode
  const encodedBytes = MsgRemoveHostZone.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgRemoveHostZone.decode(encodedBytes);
  console.log('\n3. Decoded ibcDenom:', decoded.ibcDenom);

  // 4. ProtoMsg
  const protoMsg = MsgRemoveHostZone.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgRemoveHostZone.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   ibc_denom:', aminoMsg.ibc_denom);

  // === Response ===
  console.log('\n--- Response ---');
  const response = MsgRemoveHostZoneResponse.fromPartial({});
  console.log('6. Response (empty = success)');

  return msg;
}

// =============================================================================
// HostChainFeeAbsStatus Enum Helper
// =============================================================================

function hostChainStatusExamples() {
  console.log('\n=== HostChainFeeAbsStatus Enum ===\n');

  const statuses = [
    { value: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED, name: 'UNSPECIFIED', desc: 'Default/unknown' },
    { value: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_UPDATED, name: 'UPDATED', desc: 'Configuration is current' },
    { value: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_OUTDATED, name: 'OUTDATED', desc: 'Needs TWAP update' },
    { value: HostChainFeeAbsStatus.HOST_CHAIN_FEE_ABS_STATUS_FROZEN, name: 'FROZEN', desc: 'Temporarily disabled' },
  ];

  console.log('Available status values:');
  statuses.forEach(({ value, name, desc }) => {
    console.log(`   ${value}: ${name} - ${desc}`);
  });
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.feeabs.v1beta1 Transaction Messages — Examples       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  msgFundFeeAbsModuleAccountExamples();
  msgSendQueryIbcDenomTWAPExamples();
  msgSwapCrossChainExamples();
  msgUpdateParamsExamples();
  msgAddHostZoneExamples();
  msgUpdateHostZoneExamples();
  msgRemoveHostZoneExamples();
  hostChainStatusExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  MsgFundFeeAbsModuleAccount: ', MsgFundFeeAbsModuleAccount.typeUrl);
  console.log('  MsgSendQueryIbcDenomTWAP:   ', MsgSendQueryIbcDenomTWAP.typeUrl);
  console.log('  MsgSwapCrossChain:          ', MsgSwapCrossChain.typeUrl);
  console.log('  MsgUpdateParams:            ', MsgUpdateParams.typeUrl);
  console.log('  MsgAddHostZone:             ', MsgAddHostZone.typeUrl);
  console.log('  MsgUpdateHostZone:          ', MsgUpdateHostZone.typeUrl);
  console.log('  MsgRemoveHostZone:          ', MsgRemoveHostZone.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  msgFundFeeAbsModuleAccountExamples,
  msgSendQueryIbcDenomTWAPExamples,
  msgSwapCrossChainExamples,
  msgUpdateParamsExamples,
  msgAddHostZoneExamples,
  msgUpdateHostZoneExamples,
  msgRemoveHostZoneExamples,
  hostChainStatusExamples,
};

