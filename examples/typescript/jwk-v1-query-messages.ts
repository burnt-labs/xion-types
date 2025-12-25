/**
 * xion.jwk.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the JSON Web Key Module (xion.jwk.v1).
 *
 * Queries covered:
 * - QueryParams: Get module parameters (time_offset, deployment_gas)
 * - QueryAudience: Get a single audience by ID
 * - QueryAudienceAll: List all registered audiences (paginated)
 * - QueryAudienceClaim: Get an audience claim by hash
 * - QueryValidateJWT: Validate a JWT signature
 */

import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryAudienceRequest,
  QueryAudienceResponse,
  QueryAudienceAllRequest,
  QueryAudienceAllResponse,
  QueryAudienceClaimRequest,
  QueryAudienceClaimResponse,
  QueryValidateJWTRequest,
  QueryValidateJWTResponse,
  PrivateClaim,
} from '@burnt-labs/xion-types/types/xion/jwk/v1/query';

import { Audience, AudienceClaim } from '@burnt-labs/xion-types/types/xion/jwk/v1/audience';
import { Params } from '@burnt-labs/xion-types/types/xion/jwk/v1/params';
import { PageRequest, PageResponse } from '@burnt-labs/xion-types/types/cosmos/base/query/v1beta1/pagination';

// =============================================================================
// QueryParamsRequest / Response
// =============================================================================
// Get the JWK module parameters.
// Endpoint: GET /xion/jwk/params
// Type URL: /xion.jwk.v1.QueryParamsRequest

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
      timeOffset: BigInt(300000000000), // 5 minutes in nanoseconds
      deploymentGas: BigInt(100000), // Gas required to deploy audience
    },
  });

  console.log('4. Constructed Response:');
  console.log('   params.timeOffset:', response.params.timeOffset.toString(), 'ns');
  console.log('   params.timeOffset (minutes):', Number(response.params.timeOffset) / 60_000_000_000);
  console.log('   params.deploymentGas:', response.params.deploymentGas.toString());
  console.log('   typeUrl:', QueryParamsResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryParamsResponse.encode(response).finish();
  const decodedResponse = QueryParamsResponse.decode(encodedResponse);
  console.log('\n5. Decoded params.timeOffset:', decodedResponse.params.timeOffset.toString());

  // 6. Amino format
  const amino = QueryParamsResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   time_offset:', amino.params.time_offset);
  console.log('   deployment_gas:', amino.params.deployment_gas);

  return { request, response };
}

// =============================================================================
// QueryAudienceRequest / Response
// =============================================================================
// Get a single audience by its identifier.
// Endpoint: GET /xion/jwk/audience/{aud}
// Type URL: /xion.jwk.v1.QueryAudienceRequest

function queryAudienceExamples() {
  console.log('\n=== QueryAudience Examples ===\n');

  // 1. Construct request
  const request = QueryAudienceRequest.fromPartial({
    aud: '123456789-abc.apps.googleusercontent.com', // OAuth client ID
  });

  console.log('1. Constructed QueryAudienceRequest:');
  console.log('   aud:', request.aud);
  console.log('   typeUrl:', QueryAudienceRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAudienceRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryAudienceRequest.decode(encodedRequest);
  console.log('\n3. Decoded aud:', decodedRequest.aud);

  // 4. ProtoMsg
  const protoMsg = QueryAudienceRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino format
  const amino = QueryAudienceRequest.toAmino(request);
  console.log('\n5. Amino format:');
  console.log('   aud:', amino.aud);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAudienceResponse.fromPartial({
    audience: {
      aud: '123456789-abc.apps.googleusercontent.com',
      key: '{"kty":"RSA","n":"...","e":"AQAB"}',
      admin: 'xion1admin...',
    },
  });

  console.log('6. Constructed Response:');
  console.log('   audience.aud:', response.audience.aud);
  console.log('   audience.admin:', response.audience.admin);
  console.log('   audience.key (truncated):', response.audience.key.substring(0, 30) + '...');
  console.log('   typeUrl:', QueryAudienceResponse.typeUrl);

  // 7. Encode/decode response
  const encodedResponse = QueryAudienceResponse.encode(response).finish();
  const decodedResponse = QueryAudienceResponse.decode(encodedResponse);
  console.log('\n7. Decoded audience.aud:', decodedResponse.audience.aud);

  return { request, response };
}

// =============================================================================
// QueryAudienceAllRequest / Response
// =============================================================================
// List all registered audiences with pagination.
// Endpoint: GET /xion/jwk/audience
// Type URL: /xion.jwk.v1.QueryAudienceAllRequest

function queryAudienceAllExamples() {
  console.log('\n=== QueryAudienceAll Examples ===\n');

  // 1. Construct request with pagination
  const request = QueryAudienceAllRequest.fromPartial({
    pagination: {
      key: new Uint8Array(), // Empty for first page
      offset: BigInt(0),
      limit: BigInt(10), // Get 10 results
      countTotal: true,
      reverse: false,
    },
  });

  console.log('1. Constructed QueryAudienceAllRequest:');
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   pagination.countTotal:', request.pagination?.countTotal);
  console.log('   typeUrl:', QueryAudienceAllRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAudienceAllRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryAudienceAllRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAudienceAllResponse.fromPartial({
    audience: [
      {
        aud: 'google-client-id.apps.googleusercontent.com',
        key: '{"kty":"RSA","n":"..."}',
        admin: 'xion1admin1...',
      },
      {
        aud: 'apple-client-id',
        key: '{"kty":"EC","crv":"P-256",...}',
        admin: 'xion1admin2...',
      },
    ],
    pagination: {
      nextKey: new Uint8Array(), // Empty = no more pages
      total: BigInt(2),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   audience count:', response.audience.length);
  response.audience.forEach((aud, i) => {
    console.log(`   [${i}] aud: ${aud.aud.substring(0, 30)}...`);
    console.log(`       admin: ${aud.admin}`);
  });
  console.log('   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryAudienceAllResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryAudienceAllResponse.encode(response).finish();
  const decodedResponse = QueryAudienceAllResponse.decode(encodedResponse);
  console.log('\n5. Decoded audience count:', decodedResponse.audience.length);

  // 6. Amino format
  const amino = QueryAudienceAllResponse.toAmino(response);
  console.log('\n6. Amino format:');
  console.log('   audience count:', amino.audience.length);

  return { request, response };
}

// =============================================================================
// QueryAudienceClaimRequest / Response
// =============================================================================
// Get an audience claim by its hash.
// Endpoint: GET /xion/jwk/audience_claim/{hash}
// Type URL: /xion.jwk.v1.QueryAudienceClaimRequest

function queryAudienceClaimExamples() {
  console.log('\n=== QueryAudienceClaim Examples ===\n');

  // 1. Construct request
  const claimHash = new Uint8Array(Buffer.from('sha256-hash-of-claim', 'utf-8'));

  const request = QueryAudienceClaimRequest.fromPartial({
    hash: claimHash,
  });

  console.log('1. Constructed QueryAudienceClaimRequest:');
  console.log('   hash length:', request.hash.length, 'bytes');
  console.log('   hash (hex):', Buffer.from(request.hash).toString('hex'));
  console.log('   typeUrl:', QueryAudienceClaimRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAudienceClaimRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryAudienceClaimRequest.decode(encodedRequest);
  console.log('\n3. Decoded hash length:', decodedRequest.hash.length, 'bytes');

  // 4. ProtoMsg
  const protoMsg = QueryAudienceClaimRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino format
  const amino = QueryAudienceClaimRequest.toAmino(request);
  console.log('\n5. Amino format:');
  console.log('   hash (base64):', amino.hash);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAudienceClaimResponse.fromPartial({
    claim: {
      signer: 'xion1claimant...',
    },
  });

  console.log('6. Constructed Response:');
  console.log('   claim.signer:', response.claim?.signer);
  console.log('   typeUrl:', QueryAudienceClaimResponse.typeUrl);

  // 7. Encode/decode response
  const encodedResponse = QueryAudienceClaimResponse.encode(response).finish();
  const decodedResponse = QueryAudienceClaimResponse.decode(encodedResponse);
  console.log('\n7. Decoded claim.signer:', decodedResponse.claim?.signer);

  return { request, response };
}

// =============================================================================
// QueryValidateJWTRequest / Response
// =============================================================================
// Validate a JWT signature against a registered audience.
// Endpoint: GET /xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}
// Type URL: /xion.jwk.v1.QueryValidateJWTRequest

function queryValidateJWTExamples() {
  console.log('\n=== QueryValidateJWT Examples ===\n');

  // 1. Construct request
  const request = QueryValidateJWTRequest.fromPartial({
    aud: '123456789-abc.apps.googleusercontent.com', // Audience (OAuth client ID)
    sub: 'user-unique-id-from-jwt', // Subject from JWT
    sigBytes: 'base64-encoded-jwt-signature', // JWT signature
  });

  console.log('1. Constructed QueryValidateJWTRequest:');
  console.log('   aud:', request.aud);
  console.log('   sub:', request.sub);
  console.log('   sigBytes:', request.sigBytes);
  console.log('   typeUrl:', QueryValidateJWTRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryValidateJWTRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryValidateJWTRequest.decode(encodedRequest);
  console.log('\n3. Decoded:');
  console.log('   aud:', decodedRequest.aud);
  console.log('   sub:', decodedRequest.sub);

  // 4. ProtoMsg
  const protoMsg = QueryValidateJWTRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino format
  const amino = QueryValidateJWTRequest.toAmino(request);
  console.log('\n5. Amino format:');
  console.log('   aud:', amino.aud);
  console.log('   sub:', amino.sub);
  console.log('   sig_bytes:', amino.sig_bytes);

  // === Response ===
  console.log('\n--- Response ---');

  // Response contains private claims from the validated JWT
  const response = QueryValidateJWTResponse.fromPartial({
    privateClaims: [
      { key: 'email', value: 'user@example.com' },
      { key: 'email_verified', value: 'true' },
      { key: 'name', value: 'John Doe' },
      { key: 'picture', value: 'https://example.com/photo.jpg' },
    ],
  });

  console.log('6. Constructed Response:');
  console.log('   privateClaims count:', response.privateClaims.length);
  response.privateClaims.forEach((claim) => {
    console.log(`     ${claim.key}: ${claim.value}`);
  });
  console.log('   typeUrl:', QueryValidateJWTResponse.typeUrl);

  // 7. Encode/decode response
  const encodedResponse = QueryValidateJWTResponse.encode(response).finish();
  const decodedResponse = QueryValidateJWTResponse.decode(encodedResponse);
  console.log('\n7. Decoded privateClaims count:', decodedResponse.privateClaims.length);

  // 8. Amino format
  const aminoResponse = QueryValidateJWTResponse.toAmino(response);
  console.log('\n8. Amino format:');
  console.log('   private_claims:', aminoResponse.private_claims);

  return { request, response };
}

// =============================================================================
// PrivateClaim Helper
// =============================================================================
// PrivateClaim represents a key-value pair from a JWT

function privateClaimExamples() {
  console.log('\n=== PrivateClaim Helper Examples ===\n');

  // Construct PrivateClaims
  const claims: PrivateClaim[] = [
    PrivateClaim.fromPartial({ key: 'email', value: 'user@example.com' }),
    PrivateClaim.fromPartial({ key: 'email_verified', value: 'true' }),
    PrivateClaim.fromPartial({ key: 'iat', value: '1699900000' }), // Issued at
    PrivateClaim.fromPartial({ key: 'exp', value: '1699903600' }), // Expiration
  ];

  console.log('1. Constructed PrivateClaims:');
  claims.forEach((claim) => {
    console.log(`   ${claim.key}: ${claim.value}`);
  });

  // Encode/decode a single claim
  const encoded = PrivateClaim.encode(claims[0]).finish();
  const decoded = PrivateClaim.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded:', decoded.key, '=', decoded.value);

  // Amino
  const amino = PrivateClaim.toAmino(claims[0]);
  console.log('\n3. Amino format:');
  console.log('   key:', amino.key);
  console.log('   value:', amino.value);

  return claims;
}

// =============================================================================
// Pagination Helper
// =============================================================================
// Working with paginated queries

function paginationExamples() {
  console.log('\n=== Pagination Helper Examples ===\n');

  // First page request
  const firstPage = PageRequest.fromPartial({
    key: new Uint8Array(), // Empty for first page
    offset: BigInt(0),
    limit: BigInt(10),
    countTotal: true,
    reverse: false,
  });

  console.log('1. First page request:');
  console.log('   key: (empty)');
  console.log('   limit:', firstPage.limit.toString());
  console.log('   countTotal:', firstPage.countTotal);

  // Simulate response pagination
  const pageResponse = PageResponse.fromPartial({
    nextKey: new Uint8Array([0x01, 0x02, 0x03]), // Key for next page
    total: BigInt(25),
  });

  console.log('\n2. Page response:');
  console.log('   nextKey:', Buffer.from(pageResponse.nextKey).toString('hex'));
  console.log('   total:', pageResponse.total.toString());

  // Next page request using nextKey
  const nextPage = PageRequest.fromPartial({
    key: pageResponse.nextKey, // Use nextKey from previous response
    limit: BigInt(10),
    countTotal: false, // Don't need to count again
  });

  console.log('\n3. Next page request:');
  console.log('   key:', Buffer.from(nextPage.key).toString('hex'));
  console.log('   limit:', nextPage.limit.toString());

  return { firstPage, pageResponse, nextPage };
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.jwk.v1 Query Messages — Protobuf Examples            ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryParamsExamples();
  queryAudienceExamples();
  queryAudienceAllExamples();
  queryAudienceClaimExamples();
  queryValidateJWTExamples();
  privateClaimExamples();
  paginationExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryParamsRequest:        ', QueryParamsRequest.typeUrl);
  console.log('  QueryAudienceRequest:      ', QueryAudienceRequest.typeUrl);
  console.log('  QueryAudienceAllRequest:   ', QueryAudienceAllRequest.typeUrl);
  console.log('  QueryAudienceClaimRequest: ', QueryAudienceClaimRequest.typeUrl);
  console.log('  QueryValidateJWTRequest:   ', QueryValidateJWTRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryParamsResponse:        ', QueryParamsResponse.typeUrl);
  console.log('  QueryAudienceResponse:      ', QueryAudienceResponse.typeUrl);
  console.log('  QueryAudienceAllResponse:   ', QueryAudienceAllResponse.typeUrl);
  console.log('  QueryAudienceClaimResponse: ', QueryAudienceClaimResponse.typeUrl);
  console.log('  QueryValidateJWTResponse:   ', QueryValidateJWTResponse.typeUrl);
  console.log('\nREST Endpoints:');
  console.log('  GET /xion/jwk/params');
  console.log('  GET /xion/jwk/audience/{aud}');
  console.log('  GET /xion/jwk/audience');
  console.log('  GET /xion/jwk/audience_claim/{hash}');
  console.log('  GET /xion/jwk/validate_jwt/{aud}/{sub}/{sig_bytes}');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryParamsExamples,
  queryAudienceExamples,
  queryAudienceAllExamples,
  queryAudienceClaimExamples,
  queryValidateJWTExamples,
  privateClaimExamples,
  paginationExamples,
};

