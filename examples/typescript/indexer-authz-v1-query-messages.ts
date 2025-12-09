/**
 * xion.indexer.authz.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Authz Indexer Module (xion.indexer.authz.v1).
 *
 * Queries covered:
 * - QueryGrants: Get grants between specific granter and grantee
 * - QueryGranterGrants: List all grants issued by a granter
 * - QueryGranteeGrants: List all grants received by a grantee
 *
 * The Authz Indexer provides optimized queries for authorization grants,
 * allowing efficient lookup of who can act on behalf of whom.
 *
 * Note: This is an indexer module with query-only messages.
 * To create/revoke grants, use the standard cosmos.authz.v1beta1 module.
 *
 * ⚠️  If you get import errors, run: make proto-gen-ts (in xion-types repo)
 */

import {
  QueryGrantsRequest,
  QueryGrantsResponse,
  QueryGranterGrantsRequest,
  QueryGranterGrantsResponse,
  QueryGranteeGrantsRequest,
  QueryGranteeGrantsResponse,
} from '@burnt-labs/xion-types/types/xion/indexer/authz/v1/query';

import { PageRequest, PageResponse } from '@burnt-labs/xion-types/types/cosmos/base/query/v1beta1/pagination';

// =============================================================================
// QueryGrantsRequest / Response
// =============================================================================
// Get grants between a specific granter and grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants
// Type URL: /xion.indexer.authz.v1.QueryGrantsRequest

function queryGrantsExamples() {
  console.log('=== QueryGrants Examples ===\n');

  // 1. Construct request
  const request = QueryGrantsRequest.fromPartial({
    granter: 'xion1granter...', // Who gave the authorization
    grantee: 'xion1grantee...', // Who received the authorization
    msgTypeUrl: '/cosmos.bank.v1beta1.MsgSend', // Optional: filter by message type
    pagination: {
      key: new Uint8Array(),
      offset: BigInt(0),
      limit: BigInt(10),
      countTotal: true,
      reverse: false,
    },
  });

  console.log('1. Constructed QueryGrantsRequest:');
  console.log('   granter:', request.granter);
  console.log('   grantee:', request.grantee);
  console.log('   msgTypeUrl:', request.msgTypeUrl || '(all types)');
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   typeUrl:', QueryGrantsRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryGrantsRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryGrantsRequest.decode(encodedRequest);
  console.log('\n3. Decoded granter:', decodedRequest.granter);
  console.log('   Decoded grantee:', decodedRequest.grantee);

  // 4. ProtoMsg
  const protoMsg = QueryGrantsRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Note: Grant contains authorization (Any type) and expiration
  const response = QueryGrantsResponse.fromPartial({
    grants: [
      {
        // authorization is an Any type containing the specific authorization
        // e.g., GenericAuthorization, SendAuthorization, StakeAuthorization
        authorization: {
          typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
          value: new Uint8Array([10, 30, 47, 99, 111, 115, 109, 111, 115]), // Encoded GenericAuthorization
        },
        expiration: {
          seconds: BigInt(1735689600), // Unix timestamp
          nanos: 0,
        },
      },
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(1),
    },
  });

  console.log('5. Constructed Response:');
  console.log('   grants count:', response.grants.length);
  response.grants.forEach((grant, i) => {
    console.log(`\n   [${i}] Grant:`);
    console.log(`       authorization.typeUrl: ${grant.authorization?.typeUrl}`);
    console.log(`       expiration: ${grant.expiration?.seconds?.toString()} (unix)`);
  });
  console.log('\n   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryGrantsResponse.typeUrl);

  // 6. Encode/decode response
  const encodedResponse = QueryGrantsResponse.encode(response).finish();
  const decodedResponse = QueryGrantsResponse.decode(encodedResponse);
  console.log('\n6. Decoded grants count:', decodedResponse.grants.length);

  return { request, response };
}

// =============================================================================
// QueryGranterGrantsRequest / Response
// =============================================================================
// List all grants issued by a specific granter.
// Endpoint: GET /xion/indexer/authz/v1/grants/granter/{granter}
// Type URL: /xion.indexer.authz.v1.QueryGranterGrantsRequest

function queryGranterGrantsExamples() {
  console.log('\n=== QueryGranterGrants Examples ===\n');

  // 1. Construct request
  const request = QueryGranterGrantsRequest.fromPartial({
    granter: 'xion1granter...', // List all grants FROM this address
    pagination: {
      key: new Uint8Array(),
      offset: BigInt(0),
      limit: BigInt(20),
      countTotal: true,
    },
  });

  console.log('1. Constructed QueryGranterGrantsRequest:');
  console.log('   granter:', request.granter);
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   typeUrl:', QueryGranterGrantsRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryGranterGrantsRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryGranterGrantsRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // GrantAuthorization includes granter, grantee, authorization, and expiration
  const response = QueryGranterGrantsResponse.fromPartial({
    grants: [
      {
        granter: 'xion1granter...',
        grantee: 'xion1grantee1...',
        authorization: {
          typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
          value: new Uint8Array([10, 30, 47, 99, 111, 115, 109, 111, 115]),
        },
        expiration: {
          seconds: BigInt(1735689600),
          nanos: 0,
        },
      },
      {
        granter: 'xion1granter...',
        grantee: 'xion1grantee2...',
        authorization: {
          typeUrl: '/cosmos.bank.v1beta1.SendAuthorization',
          value: new Uint8Array([10, 20, 10, 5, 117, 120, 105, 111, 110]),
        },
        expiration: {
          seconds: BigInt(1767225600),
          nanos: 0,
        },
      },
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(2),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   grants count:', response.grants.length);
  response.grants.forEach((grant, i) => {
    console.log(`\n   [${i}] GrantAuthorization:`);
    console.log(`       granter: ${grant.granter}`);
    console.log(`       grantee: ${grant.grantee}`);
    console.log(`       authorization.typeUrl: ${grant.authorization?.typeUrl}`);
  });
  console.log('\n   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryGranterGrantsResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryGranterGrantsResponse.encode(response).finish();
  const decodedResponse = QueryGranterGrantsResponse.decode(encodedResponse);
  console.log('\n5. Decoded grants count:', decodedResponse.grants.length);

  return { request, response };
}

// =============================================================================
// QueryGranteeGrantsRequest / Response
// =============================================================================
// List all grants received by a specific grantee.
// Endpoint: GET /xion/indexer/authz/v1/grants/grantee/{grantee}
// Type URL: /xion.indexer.authz.v1.QueryGranteeGrantsRequest

function queryGranteeGrantsExamples() {
  console.log('\n=== QueryGranteeGrants Examples ===\n');

  // 1. Construct request
  const request = QueryGranteeGrantsRequest.fromPartial({
    grantee: 'xion1grantee...', // List all grants TO this address
    pagination: {
      key: new Uint8Array(),
      offset: BigInt(0),
      limit: BigInt(20),
      countTotal: true,
    },
  });

  console.log('1. Constructed QueryGranteeGrantsRequest:');
  console.log('   grantee:', request.grantee);
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   typeUrl:', QueryGranteeGrantsRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryGranteeGrantsRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryGranteeGrantsRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryGranteeGrantsResponse.fromPartial({
    grants: [
      {
        granter: 'xion1granter1...',
        grantee: 'xion1grantee...',
        authorization: {
          typeUrl: '/cosmos.authz.v1beta1.GenericAuthorization',
          value: new Uint8Array([10, 30, 47, 99, 111, 115, 109, 111, 115]),
        },
        expiration: {
          seconds: BigInt(1735689600),
          nanos: 0,
        },
      },
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(1),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   grants count:', response.grants.length);
  response.grants.forEach((grant, i) => {
    console.log(`\n   [${i}] GrantAuthorization:`);
    console.log(`       granter: ${grant.granter}`);
    console.log(`       grantee: ${grant.grantee}`);
    console.log(`       authorization.typeUrl: ${grant.authorization?.typeUrl}`);
  });
  console.log('\n   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryGranteeGrantsResponse.typeUrl);

  // 5. Encode/decode response
  const encodedResponse = QueryGranteeGrantsResponse.encode(response).finish();
  const decodedResponse = QueryGranteeGrantsResponse.decode(encodedResponse);
  console.log('\n5. Decoded grants count:', decodedResponse.grants.length);

  return { request, response };
}

// =============================================================================
// Understanding Authz Grants
// =============================================================================

function authzExplanation() {
  console.log('\n=== Understanding Authz Grants ===\n');

  console.log('Authz (Authorization) allows one account to act on behalf of another.\n');

  console.log('Key Concepts:\n');
  console.log('  1. Granter: The account giving permission');
  console.log('  2. Grantee: The account receiving permission');
  console.log('  3. Authorization: What actions are permitted\n');

  console.log('Common Authorization Types:\n');
  const authTypes = [
    { type: 'GenericAuthorization', desc: 'Allows any message of a specific type' },
    { type: 'SendAuthorization', desc: 'Allows sending up to a spend limit' },
    { type: 'StakeAuthorization', desc: 'Allows staking operations (delegate, undelegate, redelegate)' },
  ];

  authTypes.forEach(({ type, desc }) => {
    console.log(`  • ${type}:`);
    console.log(`    ${desc}\n`);
  });

  console.log('Use Cases:\n');
  console.log('  • Fee grants: Let another account pay your fees');
  console.log('  • Automated staking: Let a bot manage your delegations');
  console.log('  • Multi-sig alternatives: Grant specific permissions to team members');
  console.log('  • Abstract accounts: Meta-transactions and gasless UX\n');

  console.log('Indexer vs Standard Authz:\n');
  console.log('  • This module provides OPTIMIZED QUERIES for grants');
  console.log('  • To CREATE grants, use: cosmos.authz.v1beta1.MsgGrant');
  console.log('  • To REVOKE grants, use: cosmos.authz.v1beta1.MsgRevoke');
  console.log('  • To EXECUTE with grant, use: cosmos.authz.v1beta1.MsgExec');
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.indexer.authz.v1 Query Messages — Protobuf Examples ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryGrantsExamples();
  queryGranterGrantsExamples();
  queryGranteeGrantsExamples();
  authzExplanation();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryGrantsRequest:        ', QueryGrantsRequest.typeUrl);
  console.log('  QueryGranterGrantsRequest: ', QueryGranterGrantsRequest.typeUrl);
  console.log('  QueryGranteeGrantsRequest: ', QueryGranteeGrantsRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryGrantsResponse:        ', QueryGrantsResponse.typeUrl);
  console.log('  QueryGranterGrantsResponse: ', QueryGranterGrantsResponse.typeUrl);
  console.log('  QueryGranteeGrantsResponse: ', QueryGranteeGrantsResponse.typeUrl);
  console.log('\nREST Endpoints:');
  console.log('  GET /xion/indexer/authz/v1/grants');
  console.log('  GET /xion/indexer/authz/v1/grants/granter/{granter}');
  console.log('  GET /xion/indexer/authz/v1/grants/grantee/{grantee}');
  console.log('\nNote: This is an indexer module (query-only).');
  console.log('Use cosmos.authz.v1beta1 for grant/revoke transactions.');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryGrantsExamples,
  queryGranterGrantsExamples,
  queryGranteeGrantsExamples,
  authzExplanation,
};
