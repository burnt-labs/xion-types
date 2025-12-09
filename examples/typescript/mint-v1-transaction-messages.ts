/**
 * xion.mint.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Minting Module (xion.mint.v1).
 *
 * Messages covered:
 * - MsgUpdateParams: Update minting parameters (governance)
 *
 * Note: This module only has one transaction message, used for
 * governance proposals to update minting parameters.
 */

import {
  MsgUpdateParams,
  MsgUpdateParamsResponse,
} from '@burnt-labs/xion-types/types/xion/mint/v1/tx';

import { Params, Minter } from '@burnt-labs/xion-types/types/xion/mint/v1/mint';

// =============================================================================
// MsgUpdateParams
// =============================================================================
// Update the minting module parameters via governance.
// Type URL: /xion.mint.v1.MsgUpdateParams
// Signer: authority (governance module address)
//
// Use case: Governance proposals to adjust inflation rates, blocks per year,
// or the mint denomination.

function msgUpdateParamsExamples() {
  console.log('=== MsgUpdateParams Examples ===\n');

  // 1. Construct message with all required params
  // Note: All decimal values (inflation, etc.) are strings representing decimals
  // e.g., "0.13" = 13%, "0.20" = 20%
  const msg = MsgUpdateParams.fromPartial({
    authority: 'xion10d07y265gmmuvt4z0w9aw880jnsr700jctf8qe', // Governance module address
    params: {
      mintDenom: 'uxion', // Token to mint
      inflationRateChange: '0.13', // Max annual change: 13%
      inflationMax: '0.20', // Max inflation: 20%
      inflationMin: '0.07', // Min inflation: 7%
      goalBonded: '0.67', // Target bonded ratio: 67%
      blocksPerYear: BigInt(6311520), // ~5 second blocks
    },
  });

  console.log('1. Constructed MsgUpdateParams:');
  console.log('   authority:', msg.authority);
  console.log('   params.mintDenom:', msg.params?.mintDenom);
  console.log('   params.inflationRateChange:', msg.params?.inflationRateChange);
  console.log('   params.inflationMax:', msg.params?.inflationMax);
  console.log('   params.inflationMin:', msg.params?.inflationMin);
  console.log('   params.goalBonded:', msg.params?.goalBonded);
  console.log('   params.blocksPerYear:', msg.params?.blocksPerYear?.toString());
  console.log('   typeUrl:', MsgUpdateParams.typeUrl);

  // 2. Encode to protobuf bytes
  const encodedBytes = MsgUpdateParams.encode(msg).finish();
  console.log('\n2. Encoded to protobuf bytes:');
  console.log('   Length:', encodedBytes.length, 'bytes');
  console.log('   Hex:', Buffer.from(encodedBytes).toString('hex').substring(0, 60) + '...');

  // 3. Decode from protobuf bytes
  const decoded = MsgUpdateParams.decode(encodedBytes);
  console.log('\n3. Decoded from bytes:');
  console.log('   authority:', decoded.authority);
  console.log('   params.mintDenom:', decoded.params?.mintDenom);
  console.log('   params.blocksPerYear:', decoded.params?.blocksPerYear?.toString());

  // 4. Create ProtoMsg for signing
  const protoMsg = MsgUpdateParams.toProtoMsg(msg);
  console.log('\n4. ProtoMsg for signing:');
  console.log('   typeUrl:', protoMsg.typeUrl);
  console.log('   value (bytes):', protoMsg.value.length, 'bytes');

  // 5. Amino encoding (this module has amino.name defined)
  const aminoMsg = MsgUpdateParams.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   authority:', aminoMsg.authority);
  console.log('   params.mint_denom:', aminoMsg.params.mint_denom);
  console.log('   params.inflation_max:', aminoMsg.params.inflation_max);

  // 6. AminoMsg format (type + value)
  const aminoMsgFull = MsgUpdateParams.toAminoMsg(msg);
  console.log('\n6. AminoMsg:');
  console.log('   type:', aminoMsgFull.type); // "xion/x/mint/MsgUpdateParams"
  console.log('   value.authority:', aminoMsgFull.value.authority);

  // === Response ===
  console.log('\n--- Response ---');

  const response = MsgUpdateParamsResponse.fromPartial({});
  console.log('7. Response (empty = success):');
  console.log('   typeUrl:', MsgUpdateParamsResponse.typeUrl);

  return msg;
}

// =============================================================================
// Params Type Helper
// =============================================================================
// The Params type defines all minting configuration

function paramsExamples() {
  console.log('\n=== Params Type Examples ===\n');

  // Construct Params
  const params = Params.fromPartial({
    mintDenom: 'uxion',
    inflationRateChange: '0.13', // 13% max annual change
    inflationMax: '0.20', // 20% max
    inflationMin: '0.07', // 7% min
    goalBonded: '0.67', // 67% target bonded
    blocksPerYear: BigInt(6311520), // ~5 second blocks
  });

  console.log('1. Constructed Params:');
  console.log('   mintDenom:', params.mintDenom);
  console.log('   inflationRateChange:', params.inflationRateChange, '(', parseFloat(params.inflationRateChange) * 100, '%)');
  console.log('   inflationMax:', params.inflationMax, '(', parseFloat(params.inflationMax) * 100, '%)');
  console.log('   inflationMin:', params.inflationMin, '(', parseFloat(params.inflationMin) * 100, '%)');
  console.log('   goalBonded:', params.goalBonded, '(', parseFloat(params.goalBonded) * 100, '%)');
  console.log('   blocksPerYear:', params.blocksPerYear.toString());

  // Calculate blocks per day/hour for reference
  const blocksPerDay = Number(params.blocksPerYear) / 365;
  const blocksPerHour = blocksPerDay / 24;
  const secondsPerBlock = (365 * 24 * 3600) / Number(params.blocksPerYear);
  console.log('\n   Calculated:');
  console.log('     Blocks per day:', Math.round(blocksPerDay));
  console.log('     Blocks per hour:', Math.round(blocksPerHour));
  console.log('     Seconds per block:', secondsPerBlock.toFixed(2));

  // Encode/decode
  const encoded = Params.encode(params).finish();
  const decoded = Params.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded mintDenom:', decoded.mintDenom);

  // Amino
  const amino = Params.toAmino(params);
  console.log('\n3. Amino format:');
  console.log('   mint_denom:', amino.mint_denom);
  console.log('   inflation_rate_change:', amino.inflation_rate_change);
  console.log('   blocks_per_year:', amino.blocks_per_year);

  return params;
}

// =============================================================================
// Minter Type Helper
// =============================================================================
// The Minter type represents current minting state

function minterExamples() {
  console.log('\n=== Minter Type Examples ===\n');

  // Construct Minter (current minting state)
  const minter = Minter.fromPartial({
    inflation: '0.13', // Current 13% inflation
    annualProvisions: '1000000000000', // Annual provisions in base denom
  });

  console.log('1. Constructed Minter:');
  console.log('   inflation:', minter.inflation, '(', parseFloat(minter.inflation) * 100, '% annual)');
  console.log('   annualProvisions:', minter.annualProvisions);

  // Calculate provisions info
  const annualProvisions = parseFloat(minter.annualProvisions);
  const dailyProvisions = annualProvisions / 365;
  console.log('\n   Calculated:');
  console.log('     Daily provisions:', Math.round(dailyProvisions).toLocaleString(), 'uxion');
  console.log('     Hourly provisions:', Math.round(dailyProvisions / 24).toLocaleString(), 'uxion');

  // Encode/decode
  const encoded = Minter.encode(minter).finish();
  const decoded = Minter.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded inflation:', decoded.inflation);

  // Amino
  const amino = Minter.toAmino(minter);
  console.log('\n3. Amino format:');
  console.log('   inflation:', amino.inflation);
  console.log('   annual_provisions:', amino.annual_provisions);

  return minter;
}

// =============================================================================
// Inflation Rate Examples
// =============================================================================
// Common inflation rate configurations

function inflationExamples() {
  console.log('\n=== Inflation Rate Examples ===\n');

  // Different inflation configurations
  const configs = [
    { name: 'Cosmos Hub Default', inflationMax: '0.20', inflationMin: '0.07', rateChange: '0.13', goalBonded: '0.67' },
    { name: 'Low Inflation', inflationMax: '0.10', inflationMin: '0.02', rateChange: '0.05', goalBonded: '0.50' },
    { name: 'High Inflation', inflationMax: '0.50', inflationMin: '0.10', rateChange: '0.20', goalBonded: '0.67' },
    { name: 'Fixed Rate (no change)', inflationMax: '0.10', inflationMin: '0.10', rateChange: '0.00', goalBonded: '0.67' },
  ];

  configs.forEach((config, i) => {
    console.log(`${i + 1}. ${config.name}:`);
    console.log(`   Inflation range: ${parseFloat(config.inflationMin) * 100}% - ${parseFloat(config.inflationMax) * 100}%`);
    console.log(`   Rate change: ±${parseFloat(config.rateChange) * 100}% per year`);
    console.log(`   Goal bonded: ${parseFloat(config.goalBonded) * 100}%`);
    console.log('');
  });
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.mint.v1 Transaction Messages — Protobuf Examples     ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  msgUpdateParamsExamples();
  paramsExamples();
  minterExamples();
  inflationExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  MsgUpdateParams:         ', MsgUpdateParams.typeUrl);
  console.log('  MsgUpdateParamsResponse: ', MsgUpdateParamsResponse.typeUrl);
  console.log('\nAmino Type:');
  console.log('  MsgUpdateParams: "xion/x/mint/MsgUpdateParams"');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  msgUpdateParamsExamples,
  paramsExamples,
  minterExamples,
  inflationExamples,
};

