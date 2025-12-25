/**
 * xion.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Core Xion Module (xion.v1).
 *
 * Queries covered:
 * - QueryWebAuthNVerifyRegister: Verify WebAuthN registration
 * - QueryWebAuthNVerifyAuthenticate: Verify WebAuthN authentication
 * - QueryPlatformPercentage: Get current platform fee percentage
 * - QueryPlatformMinimum: Get current minimum platform fees
 */

import {
  QueryWebAuthNVerifyRegisterRequest,
  QueryWebAuthNVerifyRegisterResponse,
  QueryWebAuthNVerifyAuthenticateRequest,
  QueryWebAuthNVerifyAuthenticateResponse,
  QueryPlatformPercentageRequest,
  QueryPlatformPercentageResponse,
  QueryPlatformMinimumRequest,
  QueryPlatformMinimumResponse,
} from '@burnt-labs/xion-types/types/xion/v1/query';

import { Coin } from '@burnt-labs/xion-types/types/cosmos/base/v1beta1/coin';

// =============================================================================
// QueryWebAuthNVerifyRegisterRequest / Response
// =============================================================================
// Verify a WebAuthN registration credential.
// Type URL: /xion.v1.QueryWebAuthNVerifyRegisterRequest

function queryWebAuthNVerifyRegisterExamples() {
  console.log('=== QueryWebAuthNVerifyRegister Examples ===\n');

  // 1. Construct request
  const request = QueryWebAuthNVerifyRegisterRequest.fromPartial({
    addr: 'xion1user...',
    challenge: 'random-challenge-string-from-server',
    rp: 'your-app.example.com', // Relying Party ID
    data: new Uint8Array([0x01, 0x02, 0x03, 0x04]), // WebAuthN attestation data
  });

  console.log('1. Constructed QueryWebAuthNVerifyRegisterRequest:');
  console.log('   addr:', request.addr);
  console.log('   challenge:', request.challenge);
  console.log('   rp:', request.rp);
  console.log('   data length:', request.data.length, 'bytes');
  console.log('   typeUrl:', QueryWebAuthNVerifyRegisterRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryWebAuthNVerifyRegisterRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryWebAuthNVerifyRegisterRequest.decode(encodedRequest);
  console.log('\n3. Decoded addr:', decodedRequest.addr);
  console.log('   Decoded challenge:', decodedRequest.challenge);

  // 4. ProtoMsg format
  const protoMsg = QueryWebAuthNVerifyRegisterRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino format
  const amino = QueryWebAuthNVerifyRegisterRequest.toAmino(request);
  console.log('\n5. Amino format:');
  console.log('   addr:', amino.addr);
  console.log('   challenge:', amino.challenge);
  console.log('   rp:', amino.rp);
  console.log('   data (base64):', amino.data); // Uint8Array -> base64 in Amino

  // === Response ===
  console.log('\n--- Response ---');

  // Construct response (typically received from chain)
  const response = QueryWebAuthNVerifyRegisterResponse.fromPartial({
    credential: new Uint8Array([0xAA, 0xBB, 0xCC, 0xDD]), // WebAuthN credential
  });

  console.log('6. Constructed Response:');
  console.log('   credential length:', response.credential.length, 'bytes');
  console.log('   typeUrl:', QueryWebAuthNVerifyRegisterResponse.typeUrl);

  // Encode/decode response
  const encodedResponse = QueryWebAuthNVerifyRegisterResponse.encode(response).finish();
  const decodedResponse = QueryWebAuthNVerifyRegisterResponse.decode(encodedResponse);
  console.log('\n7. Decoded credential length:', decodedResponse.credential.length, 'bytes');

  return { request, response };
}

// =============================================================================
// QueryWebAuthNVerifyAuthenticateRequest / Response
// =============================================================================
// Verify a WebAuthN authentication assertion.
// Type URL: /xion.v1.QueryWebAuthNVerifyAuthenticateRequest

function queryWebAuthNVerifyAuthenticateExamples() {
  console.log('\n=== QueryWebAuthNVerifyAuthenticate Examples ===\n');

  // 1. Construct request
  const request = QueryWebAuthNVerifyAuthenticateRequest.fromPartial({
    addr: 'xion1user...',
    challenge: 'random-challenge-string',
    rp: 'your-app.example.com',
    credential: new Uint8Array([0xAA, 0xBB, 0xCC, 0xDD]), // Stored credential
    data: new Uint8Array([0x01, 0x02, 0x03, 0x04]), // Authenticator assertion data
  });

  console.log('1. Constructed QueryWebAuthNVerifyAuthenticateRequest:');
  console.log('   addr:', request.addr);
  console.log('   challenge:', request.challenge);
  console.log('   rp:', request.rp);
  console.log('   credential length:', request.credential.length, 'bytes');
  console.log('   data length:', request.data.length, 'bytes');
  console.log('   typeUrl:', QueryWebAuthNVerifyAuthenticateRequest.typeUrl);

  // 2. Encode
  const encodedRequest = QueryWebAuthNVerifyAuthenticateRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode
  const decodedRequest = QueryWebAuthNVerifyAuthenticateRequest.decode(encodedRequest);
  console.log('\n3. Decoded addr:', decodedRequest.addr);

  // 4. ProtoMsg
  const protoMsg = QueryWebAuthNVerifyAuthenticateRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const amino = QueryWebAuthNVerifyAuthenticateRequest.toAmino(request);
  console.log('\n5. Amino format:');
  console.log('   addr:', amino.addr);
  console.log('   credential (base64):', amino.credential);
  console.log('   data (base64):', amino.data);

  // === Response ===
  console.log('\n--- Response ---');

  // Response is empty (success = no error thrown)
  const response = QueryWebAuthNVerifyAuthenticateResponse.fromPartial({});

  console.log('6. Constructed Response (empty = success):');
  console.log('   typeUrl:', QueryWebAuthNVerifyAuthenticateResponse.typeUrl);

  const encodedResponse = QueryWebAuthNVerifyAuthenticateResponse.encode(response).finish();
  console.log('   Encoded length:', encodedResponse.length, 'bytes');

  return { request, response };
}

// =============================================================================
// QueryPlatformPercentageRequest / Response
// =============================================================================
// Get the current platform fee percentage.
// Type URL: /xion.v1.QueryPlatformPercentageRequest

function queryPlatformPercentageExamples() {
  console.log('\n=== QueryPlatformPercentage Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryPlatformPercentageRequest.fromPartial({});

  console.log('1. Constructed QueryPlatformPercentageRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryPlatformPercentageRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryPlatformPercentageRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryPlatformPercentageRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Construct response (typically received from chain)
  // platformPercentage is stored as bigint, multiplied by 10000
  const response = QueryPlatformPercentageResponse.fromPartial({
    platformPercentage: BigInt(500), // 5% = 500/10000
  });

  console.log('4. Constructed Response:');
  console.log('   platformPercentage (raw):', response.platformPercentage.toString());
  console.log('   platformPercentage (%):', Number(response.platformPercentage) / 100, '%');
  console.log('   typeUrl:', QueryPlatformPercentageResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryPlatformPercentageResponse.encode(response).finish();
  const decodedResponse = QueryPlatformPercentageResponse.decode(encodedResponse);
  console.log('\n5. Decoded platformPercentage:', decodedResponse.platformPercentage.toString());

  // 6. Amino format
  const amino = QueryPlatformPercentageResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   platform_percentage:', amino.platform_percentage); // string in Amino

  return { request, response };
}

// =============================================================================
// QueryPlatformMinimumRequest / Response
// =============================================================================
// Get the current minimum platform fees.
// Type URL: /xion.v1.QueryPlatformMinimumRequest

function queryPlatformMinimumExamples() {
  console.log('\n=== QueryPlatformMinimum Examples ===\n');

  // 1. Construct request (no parameters needed)
  const request = QueryPlatformMinimumRequest.fromPartial({});

  console.log('1. Constructed QueryPlatformMinimumRequest:');
  console.log('   (no parameters)');
  console.log('   typeUrl:', QueryPlatformMinimumRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryPlatformMinimumRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryPlatformMinimumRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Construct response with minimum fees
  const response = QueryPlatformMinimumResponse.fromPartial({
    minimums: [
      { denom: 'uxion', amount: '1000' },
      { denom: 'uatom', amount: '500' },
    ],
  });

  console.log('4. Constructed Response:');
  console.log('   minimums:');
  response.minimums.forEach((m) => {
    console.log(`     - ${m.amount} ${m.denom}`);
  });
  console.log('   typeUrl:', QueryPlatformMinimumResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryPlatformMinimumResponse.encode(response).finish();
  const decodedResponse = QueryPlatformMinimumResponse.decode(encodedResponse);
  console.log('\n5. Decoded minimums count:', decodedResponse.minimums.length);

  // 6. Amino format
  const amino = QueryPlatformMinimumResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   minimums:', amino.minimums);

  return { request, response };
}

// =============================================================================
// Working with Uint8Array (bytes)
// =============================================================================
// Many WebAuthN fields use bytes (Uint8Array). Here's how to work with them.

function bytesExamples() {
  console.log('\n=== Working with Bytes (Uint8Array) ===\n');

  // 1. Create from array of numbers
  const bytes1 = new Uint8Array([0x01, 0x02, 0x03, 0x04]);
  console.log('1. From array:', bytes1);

  // 2. Create from Buffer (Node.js)
  const bytes2 = new Uint8Array(Buffer.from('hello', 'utf-8'));
  console.log('2. From Buffer:', bytes2);

  // 3. Create from base64
  const base64 = 'AQIDBA=='; // [1, 2, 3, 4]
  const bytes3 = new Uint8Array(Buffer.from(base64, 'base64'));
  console.log('3. From base64:', bytes3);

  // 4. Convert to base64 (for Amino)
  const toBase64 = Buffer.from(bytes1).toString('base64');
  console.log('4. To base64:', toBase64);

  // 5. Convert to hex
  const toHex = Buffer.from(bytes1).toString('hex');
  console.log('5. To hex:', toHex);

  // 6. Create from hex
  const bytes4 = new Uint8Array(Buffer.from('01020304', 'hex'));
  console.log('6. From hex:', bytes4);
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.v1 Query Messages — Protobuf Examples                ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryWebAuthNVerifyRegisterExamples();
  queryWebAuthNVerifyAuthenticateExamples();
  queryPlatformPercentageExamples();
  queryPlatformMinimumExamples();
  bytesExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryWebAuthNVerifyRegisterRequest:    ', QueryWebAuthNVerifyRegisterRequest.typeUrl);
  console.log('  QueryWebAuthNVerifyAuthenticateRequest:', QueryWebAuthNVerifyAuthenticateRequest.typeUrl);
  console.log('  QueryPlatformPercentageRequest:        ', QueryPlatformPercentageRequest.typeUrl);
  console.log('  QueryPlatformMinimumRequest:           ', QueryPlatformMinimumRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryWebAuthNVerifyRegisterResponse:    ', QueryWebAuthNVerifyRegisterResponse.typeUrl);
  console.log('  QueryWebAuthNVerifyAuthenticateResponse:', QueryWebAuthNVerifyAuthenticateResponse.typeUrl);
  console.log('  QueryPlatformPercentageResponse:        ', QueryPlatformPercentageResponse.typeUrl);
  console.log('  QueryPlatformMinimumResponse:           ', QueryPlatformMinimumResponse.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryWebAuthNVerifyRegisterExamples,
  queryWebAuthNVerifyAuthenticateExamples,
  queryPlatformPercentageExamples,
  queryPlatformMinimumExamples,
  bytesExamples,
};
