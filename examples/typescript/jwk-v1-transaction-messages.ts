/**
 * xion.jwk.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the JSON Web Key Module (xion.jwk.v1).
 *
 * Messages covered:
 * - MsgCreateAudience: Register a new OAuth audience (e.g., Google, Apple)
 * - MsgUpdateAudience: Update an existing audience configuration
 * - MsgDeleteAudience: Remove an audience
 * - MsgCreateAudienceClaim: Claim ownership of an audience hash
 * - MsgDeleteAudienceClaim: Remove an audience claim
 */

import {
  MsgCreateAudience,
  MsgCreateAudienceResponse,
  MsgUpdateAudience,
  MsgUpdateAudienceResponse,
  MsgDeleteAudience,
  MsgDeleteAudienceResponse,
  MsgCreateAudienceClaim,
  MsgCreateAudienceClaimResponse,
  MsgDeleteAudienceClaim,
  MsgDeleteAudienceClaimResponse,
} from '@burnt-labs/xion-types/types/xion/jwk/v1/tx';

import { Audience } from '@burnt-labs/xion-types/types/xion/jwk/v1/audience';

// =============================================================================
// MsgCreateAudience
// =============================================================================
// Register a new OAuth audience for JWT/OIDC authentication.
// Type URL: /xion.jwk.v1.MsgCreateAudience
// Signer: admin
//
// Use case: Register an OAuth provider (Google, Apple, custom) so users can
// authenticate using JWTs from that provider.

function msgCreateAudienceExamples() {
  console.log('=== MsgCreateAudience Examples ===\n');

  // 1. Construct message
  // The 'aud' field is typically the OAuth client ID
  // The 'key' field is the public key (JWKS) for verifying JWTs
  const msg = MsgCreateAudience.fromPartial({
    admin: 'xion1admin...', // Admin who controls this audience
    aud: '123456789-abc.apps.googleusercontent.com', // OAuth client ID
    key: '{"kty":"RSA","n":"...","e":"AQAB"}', // JWKS public key (JSON string)
  });

  console.log('1. Constructed MsgCreateAudience:');
  console.log('   admin:', msg.admin);
  console.log('   aud:', msg.aud);
  console.log('   key:', msg.key.substring(0, 50) + '...');
  console.log('   typeUrl:', MsgCreateAudience.typeUrl);

  // 2. Encode to protobuf bytes
  const encodedBytes = MsgCreateAudience.encode(msg).finish();
  console.log('\n2. Encoded to protobuf bytes:');
  console.log('   Length:', encodedBytes.length, 'bytes');
  console.log('   Hex:', Buffer.from(encodedBytes).toString('hex').substring(0, 60) + '...');

  // 3. Decode from protobuf bytes
  const decoded = MsgCreateAudience.decode(encodedBytes);
  console.log('\n3. Decoded from bytes:');
  console.log('   admin:', decoded.admin);
  console.log('   aud:', decoded.aud);

  // 4. Create ProtoMsg for signing
  const protoMsg = MsgCreateAudience.toProtoMsg(msg);
  console.log('\n4. ProtoMsg for signing:');
  console.log('   typeUrl:', protoMsg.typeUrl);
  console.log('   value (bytes):', protoMsg.value.length, 'bytes');

  // 5. Amino encoding (toAmino only - JWK module doesn't have toAminoMsg)
  const aminoMsg = MsgCreateAudience.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   admin:', aminoMsg.admin);
  console.log('   aud:', aminoMsg.aud);

  // === Response ===
  console.log('\n--- Response ---');

  // Response includes the created Audience
  const response = MsgCreateAudienceResponse.fromPartial({
    audience: {
      aud: msg.aud,
      key: msg.key,
      admin: msg.admin,
    },
  });

  console.log('7. Response (created audience):');
  console.log('   audience.aud:', response.audience?.aud);
  console.log('   audience.admin:', response.audience?.admin);
  console.log('   typeUrl:', MsgCreateAudienceResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgUpdateAudience
// =============================================================================
// Update an existing audience configuration.
// Type URL: /xion.jwk.v1.MsgUpdateAudience
// Signer: admin (current admin)
//
// Use case: Rotate keys, transfer admin control, or update the audience ID.

function msgUpdateAudienceExamples() {
  console.log('\n=== MsgUpdateAudience Examples ===\n');

  // 1. Construct message
  const msg = MsgUpdateAudience.fromPartial({
    admin: 'xion1currentadmin...', // Current admin (signer)
    newAdmin: 'xion1newadmin...', // New admin (can be same as current)
    aud: '123456789-abc.apps.googleusercontent.com', // Current audience ID
    key: '{"kty":"RSA","n":"...","e":"AQAB"}', // Current key
    newAud: '123456789-abc.apps.googleusercontent.com', // New audience ID (can be same)
  });

  console.log('1. Constructed MsgUpdateAudience:');
  console.log('   admin (current):', msg.admin);
  console.log('   newAdmin:', msg.newAdmin);
  console.log('   aud (current):', msg.aud);
  console.log('   newAud:', msg.newAud);
  console.log('   typeUrl:', MsgUpdateAudience.typeUrl);

  // 2. Encode
  const encodedBytes = MsgUpdateAudience.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgUpdateAudience.decode(encodedBytes);
  console.log('\n3. Decoded admin:', decoded.admin);
  console.log('   Decoded newAdmin:', decoded.newAdmin);

  // 4. ProtoMsg
  const protoMsg = MsgUpdateAudience.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino encoding
  const aminoMsg = MsgUpdateAudience.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   admin:', aminoMsg.admin);
  console.log('   new_admin:', aminoMsg.new_admin);

  // === Response ===
  console.log('\n--- Response ---');

  const response = MsgUpdateAudienceResponse.fromPartial({
    audience: {
      aud: msg.newAud,
      key: msg.key,
      admin: msg.newAdmin,
    },
  });

  console.log('6. Response (updated audience):');
  console.log('   audience.aud:', response.audience?.aud);
  console.log('   audience.admin:', response.audience?.admin);

  return msg;
}

// =============================================================================
// MsgDeleteAudience
// =============================================================================
// Remove an audience from the registry.
// Type URL: /xion.jwk.v1.MsgDeleteAudience
// Signer: admin
//
// Use case: Decommission an OAuth provider integration.

function msgDeleteAudienceExamples() {
  console.log('\n=== MsgDeleteAudience Examples ===\n');

  // 1. Construct message
  const msg = MsgDeleteAudience.fromPartial({
    admin: 'xion1admin...', // Admin (signer)
    aud: '123456789-abc.apps.googleusercontent.com', // Audience ID to delete
  });

  console.log('1. Constructed MsgDeleteAudience:');
  console.log('   admin:', msg.admin);
  console.log('   aud:', msg.aud);
  console.log('   typeUrl:', MsgDeleteAudience.typeUrl);

  // 2. Encode
  const encodedBytes = MsgDeleteAudience.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgDeleteAudience.decode(encodedBytes);
  console.log('\n3. Decoded aud:', decoded.aud);

  // 4. ProtoMsg
  const protoMsg = MsgDeleteAudience.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino encoding
  const aminoMsg = MsgDeleteAudience.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   admin:', aminoMsg.admin);
  console.log('   aud:', aminoMsg.aud);

  // === Response ===
  console.log('\n--- Response ---');

  const response = MsgDeleteAudienceResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgDeleteAudienceResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgCreateAudienceClaim
// =============================================================================
// Claim ownership of an audience hash.
// Type URL: /xion.jwk.v1.MsgCreateAudienceClaim
// Signer: admin
//
// Use case: Link an account to an audience via a hashed claim.

function msgCreateAudienceClaimExamples() {
  console.log('\n=== MsgCreateAudienceClaim Examples ===\n');

  // 1. Construct message
  // audHash is the hash of the audience claim data
  const audHash = new Uint8Array(Buffer.from('sha256-hash-of-audience-claim', 'utf-8'));

  const msg = MsgCreateAudienceClaim.fromPartial({
    admin: 'xion1admin...', // Admin (signer)
    audHash: audHash, // Hash of the audience claim
  });

  console.log('1. Constructed MsgCreateAudienceClaim:');
  console.log('   admin:', msg.admin);
  console.log('   audHash length:', msg.audHash.length, 'bytes');
  console.log('   audHash (hex):', Buffer.from(msg.audHash).toString('hex'));
  console.log('   typeUrl:', MsgCreateAudienceClaim.typeUrl);

  // 2. Encode
  const encodedBytes = MsgCreateAudienceClaim.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgCreateAudienceClaim.decode(encodedBytes);
  console.log('\n3. Decoded admin:', decoded.admin);
  console.log('   Decoded audHash length:', decoded.audHash.length, 'bytes');

  // 4. ProtoMsg
  const protoMsg = MsgCreateAudienceClaim.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino encoding
  const aminoMsg = MsgCreateAudienceClaim.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   admin:', aminoMsg.admin);
  console.log('   aud_hash (base64):', aminoMsg.aud_hash);

  // === Response ===
  console.log('\n--- Response ---');

  const response = MsgCreateAudienceClaimResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgCreateAudienceClaimResponse.typeUrl);

  return msg;
}

// =============================================================================
// MsgDeleteAudienceClaim
// =============================================================================
// Remove an audience claim.
// Type URL: /xion.jwk.v1.MsgDeleteAudienceClaim
// Signer: admin
//
// Use case: Revoke a claim linking an account to an audience.

function msgDeleteAudienceClaimExamples() {
  console.log('\n=== MsgDeleteAudienceClaim Examples ===\n');

  // 1. Construct message
  const audHash = new Uint8Array(Buffer.from('sha256-hash-of-audience-claim', 'utf-8'));

  const msg = MsgDeleteAudienceClaim.fromPartial({
    admin: 'xion1admin...',
    audHash: audHash,
  });

  console.log('1. Constructed MsgDeleteAudienceClaim:');
  console.log('   admin:', msg.admin);
  console.log('   audHash length:', msg.audHash.length, 'bytes');
  console.log('   typeUrl:', MsgDeleteAudienceClaim.typeUrl);

  // 2. Encode
  const encodedBytes = MsgDeleteAudienceClaim.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgDeleteAudienceClaim.decode(encodedBytes);
  console.log('\n3. Decoded admin:', decoded.admin);

  // 4. ProtoMsg
  const protoMsg = MsgDeleteAudienceClaim.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino encoding
  const aminoMsg = MsgDeleteAudienceClaim.toAmino(msg);
  console.log('\n5. Amino format:');
  console.log('   admin:', aminoMsg.admin);
  console.log('   aud_hash (base64):', aminoMsg.aud_hash);

  // === Response ===
  console.log('\n--- Response ---');

  const response = MsgDeleteAudienceClaimResponse.fromPartial({});
  console.log('6. Response (empty = success):');
  console.log('   typeUrl:', MsgDeleteAudienceClaimResponse.typeUrl);

  return msg;
}

// =============================================================================
// Audience Type Helper
// =============================================================================
// The Audience type represents a registered OAuth provider

function audienceExamples() {
  console.log('\n=== Audience Type Examples ===\n');

  // Construct an Audience
  const audience = Audience.fromPartial({
    aud: '123456789-abc.apps.googleusercontent.com',
    key: '{"kty":"RSA","n":"0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw","e":"AQAB"}',
    admin: 'xion1admin...',
  });

  console.log('1. Constructed Audience:');
  console.log('   aud:', audience.aud);
  console.log('   admin:', audience.admin);
  console.log('   key (truncated):', audience.key.substring(0, 50) + '...');

  // Encode/decode
  const encoded = Audience.encode(audience).finish();
  const decoded = Audience.decode(encoded);
  console.log('\n2. Encoded/Decoded:');
  console.log('   Encoded size:', encoded.length, 'bytes');
  console.log('   Decoded aud:', decoded.aud);

  // Amino
  const amino = Audience.toAmino(audience);
  console.log('\n3. Amino format:');
  console.log('   aud:', amino.aud);
  console.log('   admin:', amino.admin);

  return audience;
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.jwk.v1 Transaction Messages — Protobuf Examples      ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  msgCreateAudienceExamples();
  msgUpdateAudienceExamples();
  msgDeleteAudienceExamples();
  msgCreateAudienceClaimExamples();
  msgDeleteAudienceClaimExamples();
  audienceExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  MsgCreateAudience:      ', MsgCreateAudience.typeUrl);
  console.log('  MsgUpdateAudience:      ', MsgUpdateAudience.typeUrl);
  console.log('  MsgDeleteAudience:      ', MsgDeleteAudience.typeUrl);
  console.log('  MsgCreateAudienceClaim: ', MsgCreateAudienceClaim.typeUrl);
  console.log('  MsgDeleteAudienceClaim: ', MsgDeleteAudienceClaim.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  msgCreateAudienceExamples,
  msgUpdateAudienceExamples,
  msgDeleteAudienceExamples,
  msgCreateAudienceClaimExamples,
  msgDeleteAudienceClaimExamples,
  audienceExamples,
};

