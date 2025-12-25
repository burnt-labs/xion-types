/**
 * xion.mint.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Minting Module (xion.mint.v1).
 *
 * Queries covered:
 * - QueryParams: Get minting parameters (denom, inflation bounds, blocks/year)
 * - QueryInflation: Get current inflation rate
 * - QueryAnnualProvisions: Get current annual token provisions
 */

import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryInflationRequest,
  QueryInflationResponse,
  QueryAnnualProvisionsRequest,
  QueryAnnualProvisionsResponse,
} from '@burnt-labs/xion-types/types/xion/mint/v1/query';

import { Params, Minter } from '@burnt-labs/xion-types/types/xion/mint/v1/mint';

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the minting module parameters.
// Endpoint: GET /xion/mint/v1/params
// Type URL: /xion.mint.v1.QueryParamsRequest

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
      mintDenom: 'uxion',
      inflationRateChange: '0.13', // 13% max annual change
      inflationMax: '0.20', // 20% max
      inflationMin: '0.07', // 7% min
      goalBonded: '0.67', // 67% target
      blocksPerYear: BigInt(6311520),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   params.mintDenom:', response.params.mintDenom);
  console.log('   params.inflationRateChange:', response.params.inflationRateChange, `(${parseFloat(response.params.inflationRateChange) * 100}%)`);
  console.log('   params.inflationMax:', response.params.inflationMax, `(${parseFloat(response.params.inflationMax) * 100}%)`);
  console.log('   params.inflationMin:', response.params.inflationMin, `(${parseFloat(response.params.inflationMin) * 100}%)`);
  console.log('   params.goalBonded:', response.params.goalBonded, `(${parseFloat(response.params.goalBonded) * 100}%)`);
  console.log('   params.blocksPerYear:', response.params.blocksPerYear.toString());
  console.log('   typeUrl:', QueryParamsResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryParamsResponse.encode(response).finish();
  const decodedResponse = QueryParamsResponse.decode(encodedResponse);
  console.log('\n5. Decoded params.mintDenom:', decodedResponse.params.mintDenom);

  // 6. Amino format
  const amino = QueryParamsResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   params.mint_denom:', amino.params.mint_denom);
  console.log('   params.inflation_max:', amino.params.inflation_max);

  return { request, response };
}

// =============================================================================
// QueryInflationRequest / Response
// =============================================================================
// Get the current minting inflation rate.
// Endpoint: GET /xion/mint/v1/inflation
// Type URL: /xion.mint.v1.QueryInflationRequest

function queryInflationExamples() {
  console.log('\n=== QueryInflation Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryInflationRequest.fromPartial({});

  console.log('1. Constructed QueryInflationRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryInflationRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryInflationRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryInflationRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Note: The inflation field is bytes in proto (LegacyDec custom type)
  // In TypeScript, this may be represented as Uint8Array or string depending on generation
  // Typically the value represents a decimal string like "0.130000000000000000"
  const response = QueryInflationResponse.fromPartial({
    inflation: new Uint8Array(Buffer.from('0.130000000000000000', 'utf-8')),
  });

  console.log('4. Constructed Response:');
  console.log('   inflation (raw bytes):', response.inflation.length, 'bytes');

  // Convert bytes to string to interpret the decimal value
  const inflationStr = Buffer.from(response.inflation).toString('utf-8');
  console.log('   inflation (as string):', inflationStr);
  console.log('   inflation (percentage):', parseFloat(inflationStr) * 100, '%');
  console.log('   typeUrl:', QueryInflationResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryInflationResponse.encode(response).finish();
  const decodedResponse = QueryInflationResponse.decode(encodedResponse);
  console.log('\n5. Decoded inflation bytes length:', decodedResponse.inflation.length);

  return { request, response };
}

// =============================================================================
// QueryAnnualProvisionsRequest / Response
// =============================================================================
// Get the current annual provisions (tokens to be minted this year).
// Endpoint: GET /xion/mint/v1/annual_provisions
// Type URL: /xion.mint.v1.QueryAnnualProvisionsRequest

function queryAnnualProvisionsExamples() {
  console.log('\n=== QueryAnnualProvisions Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryAnnualProvisionsRequest.fromPartial({});

  console.log('1. Constructed QueryAnnualProvisionsRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryAnnualProvisionsRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAnnualProvisionsRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryAnnualProvisionsRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Note: annual_provisions is bytes (LegacyDec custom type)
  // Represents the total tokens to be minted this year in base denomination
  const annualProvisions = '1000000000000.000000000000000000'; // 1 trillion uxion
  const response = QueryAnnualProvisionsResponse.fromPartial({
    annualProvisions: new Uint8Array(Buffer.from(annualProvisions, 'utf-8')),
  });

  console.log('4. Constructed Response:');
  console.log('   annualProvisions (raw bytes):', response.annualProvisions.length, 'bytes');

  // Convert bytes to string to interpret the value
  const provisionsStr = Buffer.from(response.annualProvisions).toString('utf-8');
  console.log('   annualProvisions (as string):', provisionsStr);

  // Parse and display in more readable formats
  const provisions = parseFloat(provisionsStr);
  console.log('   annualProvisions (uxion):', provisions.toLocaleString());
  console.log('   annualProvisions (XION):', (provisions / 1_000_000).toLocaleString());
  console.log('   typeUrl:', QueryAnnualProvisionsResponse.typeUrl);

  // Calculate derived values
  const dailyProvisions = provisions / 365;
  const hourlyProvisions = dailyProvisions / 24;
  const perBlockProvisions = provisions / 6311520; // Using default blocks/year

  console.log('\n   Derived values (at current rate):');
  console.log('     Daily provisions:', Math.round(dailyProvisions).toLocaleString(), 'uxion');
  console.log('     Hourly provisions:', Math.round(hourlyProvisions).toLocaleString(), 'uxion');
  console.log('     Per-block provisions:', perBlockProvisions.toFixed(2), 'uxion');

  // 5. Encode/decode response
  const encodedResponse = QueryAnnualProvisionsResponse.encode(response).finish();
  const decodedResponse = QueryAnnualProvisionsResponse.decode(encodedResponse);
  console.log('\n5. Decoded annualProvisions bytes length:', decodedResponse.annualProvisions.length);

  return { request, response };
}

// =============================================================================
// Understanding Mint Economics
// =============================================================================
// Helper to understand how minting economics work

function mintEconomicsExamples() {
  console.log('\n=== Understanding Mint Economics ===\n');

  // Example chain state
  const totalSupply = 1_000_000_000_000_000; // 1 billion XION in uxion
  const bondedRatio = 0.45; // 45% of tokens staked
  const goalBonded = 0.67; // 67% target
  const inflationMin = 0.07; // 7%
  const inflationMax = 0.20; // 20%
  const inflationRateChange = 0.13; // 13% per year

  console.log('Example Chain State:');
  console.log('   Total Supply:', (totalSupply / 1_000_000).toLocaleString(), 'XION');
  console.log('   Bonded Ratio:', bondedRatio * 100, '%');
  console.log('   Goal Bonded:', goalBonded * 100, '%');
  console.log('   Inflation Range:', inflationMin * 100, '% -', inflationMax * 100, '%');

  // Inflation adjusts based on bonded ratio vs goal
  // If bonded < goal: inflation increases (incentivize staking)
  // If bonded > goal: inflation decreases (reduce dilution)
  const bondedDiff = goalBonded - bondedRatio;

  console.log('\n   Analysis:');
  if (bondedDiff > 0) {
    console.log(`   ⬆️  Bonded ratio (${bondedRatio * 100}%) below goal (${goalBonded * 100}%)`);
    console.log('   → Inflation will INCREASE to incentivize staking');
  } else if (bondedDiff < 0) {
    console.log(`   ⬇️  Bonded ratio (${bondedRatio * 100}%) above goal (${goalBonded * 100}%)`);
    console.log('   → Inflation will DECREASE to reduce dilution');
  } else {
    console.log('   ✓ Bonded ratio at goal - inflation stable');
  }

  // Calculate approximate annual provisions at different inflation rates
  console.log('\n   Annual Provisions at Different Inflation Rates:');
  [0.07, 0.10, 0.13, 0.20].forEach(rate => {
    const provisions = totalSupply * rate;
    console.log(`     ${rate * 100}%: ${(provisions / 1_000_000).toLocaleString()} XION/year`);
  });
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.mint.v1 Query Messages — Protobuf Examples           ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryParamsExamples();
  queryInflationExamples();
  queryAnnualProvisionsExamples();
  mintEconomicsExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryParamsRequest:           ', QueryParamsRequest.typeUrl);
  console.log('  QueryInflationRequest:        ', QueryInflationRequest.typeUrl);
  console.log('  QueryAnnualProvisionsRequest: ', QueryAnnualProvisionsRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryParamsResponse:           ', QueryParamsResponse.typeUrl);
  console.log('  QueryInflationResponse:        ', QueryInflationResponse.typeUrl);
  console.log('  QueryAnnualProvisionsResponse: ', QueryAnnualProvisionsResponse.typeUrl);
  console.log('\nREST Endpoints:');
  console.log('  GET /xion/mint/v1/params');
  console.log('  GET /xion/mint/v1/inflation');
  console.log('  GET /xion/mint/v1/annual_provisions');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryParamsExamples,
  queryInflationExamples,
  queryAnnualProvisionsExamples,
  mintEconomicsExamples,
};

