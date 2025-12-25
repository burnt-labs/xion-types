/**
 * xion.indexer.feegrant.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages from the Feegrant Indexer Module (xion.indexer.feegrant.v1).
 *
 * Queries covered:
 * - QueryAllowance: Get fee allowance between specific granter and grantee
 * - QueryAllowances: List all allowances received by a grantee
 * - QueryAllowancesByGranter: List all allowances issued by a granter
 *
 * The Feegrant Indexer provides optimized queries for fee allowances,
 * allowing efficient lookup of who can pay fees on behalf of whom.
 *
 * Note: This is an indexer module with query-only messages.
 * To create/revoke allowances, use the standard cosmos.feegrant.v1beta1 module.
 */

import {
  QueryAllowanceRequest,
  QueryAllowanceResponse,
  QueryAllowancesRequest,
  QueryAllowancesResponse,
  QueryAllowancesByGranterRequest,
  QueryAllowancesByGranterResponse,
} from '@burnt-labs/xion-types/types/xion/indexer/feegrant/v1/query';

import { PageRequest, PageResponse } from '@burnt-labs/xion-types/types/cosmos/base/query/v1beta1/pagination';

// =============================================================================
// QueryAllowanceRequest / Response
// =============================================================================
// Get fee allowance between a specific granter and grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowanceRequest

function queryAllowanceExamples() {
  console.log('=== QueryAllowance Examples ===\n');

  // 1. Construct request
  const request = QueryAllowanceRequest.fromPartial({
    granter: 'xion1granter...', // Who is paying the fees
    grantee: 'xion1grantee...', // Who can use the allowance
  });

  console.log('1. Constructed QueryAllowanceRequest:');
  console.log('   granter:', request.granter);
  console.log('   grantee:', request.grantee);
  console.log('   typeUrl:', QueryAllowanceRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAllowanceRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode request
  const decodedRequest = QueryAllowanceRequest.decode(encodedRequest);
  console.log('\n3. Decoded granter:', decodedRequest.granter);
  console.log('   Decoded grantee:', decodedRequest.grantee);

  // 4. ProtoMsg
  const protoMsg = QueryAllowanceRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  // Note: Grant contains allowance (Any type) and expiration
  // Allowance can be BasicAllowance, PeriodicAllowance, AllowedMsgAllowance, etc.
  const response = QueryAllowanceResponse.fromPartial({
    allowance: {
      // allowance is an Any type containing the specific allowance
      // e.g., BasicAllowance, PeriodicAllowance, AllowedMsgAllowance
      allowance: {
        typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
        value: new Uint8Array([10, 20, 10, 5, 117, 120, 105, 111, 110]), // Encoded BasicAllowance
      },
      expiration: new Date(1735689600 * 1000), // Unix timestamp (Date object)
    },
  });

  console.log('5. Constructed Response:');
  console.log('   allowance.allowance.typeUrl:', response.allowance?.allowance?.typeUrl);
  console.log('   allowance.expiration:', response.allowance?.expiration?.seconds?.toString(), '(unix)');
  console.log('   typeUrl:', QueryAllowanceResponse.typeUrl);

  // 6. Encode/decode response (skipped - response contains Any types that require properly encoded values)
  // const encodedResponse = QueryAllowanceResponse.encode(response).finish();
  // const decodedResponse = QueryAllowanceResponse.decode(encodedResponse);
  console.log('\n6. Note: Response encoding/decoding skipped (Any types require properly encoded values)');

  return { request, response };
}

// =============================================================================
// QueryAllowancesRequest / Response
// =============================================================================
// List all fee allowances received by a specific grantee.
// Endpoint: GET /xion/indexer/feegrant/v1/allowances/{grantee}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesRequest

function queryAllowancesExamples() {
  console.log('\n=== QueryAllowances Examples ===\n');

  // 1. Construct request
  const request = QueryAllowancesRequest.fromPartial({
    grantee: 'xion1grantee...', // List all allowances TO this address
    pagination: {
      key: new Uint8Array(),
      offset: BigInt(0),
      limit: BigInt(20),
      countTotal: true,
    },
  });

  console.log('1. Constructed QueryAllowancesRequest:');
  console.log('   grantee:', request.grantee);
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   typeUrl:', QueryAllowancesRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAllowancesRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryAllowancesRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAllowancesResponse.fromPartial({
    allowances: [
      {
        allowance: {
          typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
          value: new Uint8Array([10, 20, 10, 5, 117, 120, 105, 111, 110]),
        },
        expiration: new Date(1735689600 * 1000),
      },
      {
        allowance: {
          typeUrl: '/cosmos.feegrant.v1beta1.PeriodicAllowance',
          value: new Uint8Array([10, 30, 18, 20]),
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
  console.log('   allowances count:', response.allowances.length);
  response.allowances.forEach((grant, i) => {
    console.log(`\n   [${i}] Grant:`);
    console.log(`       allowance.typeUrl: ${grant.allowance?.typeUrl}`);
    console.log(`       expiration: ${grant.expiration?.seconds?.toString()}`);
  });
  console.log('\n   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryAllowancesResponse.typeUrl);

  // 5. Encode/decode response (skipped - response contains Any types that require properly encoded values)
  // const encodedResponse = QueryAllowancesResponse.encode(response).finish();
  // const decodedResponse = QueryAllowancesResponse.decode(encodedResponse);
  console.log('\n5. Note: Response encoding/decoding skipped (Any types require properly encoded values)');

  return { request, response };
}

// =============================================================================
// QueryAllowancesByGranterRequest / Response
// =============================================================================
// List all fee allowances issued by a specific granter.
// Endpoint: GET /xion/indexer/feegrant/v1/issued/{granter}
// Type URL: /xion.indexer.feegrant.v1.QueryAllowancesByGranterRequest

function queryAllowancesByGranterExamples() {
  console.log('\n=== QueryAllowancesByGranter Examples ===\n');

  // 1. Construct request
  const request = QueryAllowancesByGranterRequest.fromPartial({
    granter: 'xion1granter...', // List all allowances FROM this address
    pagination: {
      key: new Uint8Array(),
      offset: BigInt(0),
      limit: BigInt(20),
      countTotal: true,
    },
  });

  console.log('1. Constructed QueryAllowancesByGranterRequest:');
  console.log('   granter:', request.granter);
  console.log('   pagination.limit:', request.pagination?.limit?.toString());
  console.log('   typeUrl:', QueryAllowancesByGranterRequest.typeUrl);

  // 2. Encode request
  const encodedRequest = QueryAllowancesByGranterRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. ProtoMsg
  const protoMsg = QueryAllowancesByGranterRequest.toProtoMsg(request);
  console.log('\n3. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // === Response ===
  console.log('\n--- Response ---');

  const response = QueryAllowancesByGranterResponse.fromPartial({
    allowances: [
      {
        allowance: {
          typeUrl: '/cosmos.feegrant.v1beta1.BasicAllowance',
          value: new Uint8Array([10, 20, 10, 5, 117, 120, 105, 111, 110]),
        },
        expiration: new Date(1735689600 * 1000),
      },
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(1),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   allowances count:', response.allowances.length);
  response.allowances.forEach((grant, i) => {
    console.log(`\n   [${i}] Grant:`);
    console.log(`       allowance.typeUrl: ${grant.allowance?.typeUrl}`);
    console.log(`       expiration: ${grant.expiration?.seconds?.toString()}`);
  });
  console.log('\n   pagination.total:', response.pagination?.total?.toString());
  console.log('   typeUrl:', QueryAllowancesByGranterResponse.typeUrl);

  // 5. Encode/decode response (skipped - response contains Any types that require properly encoded values)
  // const encodedResponse = QueryAllowancesByGranterResponse.encode(response).finish();
  // const decodedResponse = QueryAllowancesByGranterResponse.decode(encodedResponse);
  console.log('\n5. Note: Response encoding/decoding skipped (Any types require properly encoded values)');

  return { request, response };
}

// =============================================================================
// Understanding Fee Grants
// =============================================================================

function feegrantExplanation() {
  console.log('\n=== Understanding Fee Grants ===\n');

  console.log('Fee Grants allow one account to pay transaction fees on behalf of another.\n');

  console.log('Key Concepts:\n');
  console.log('  1. Granter: The account paying the fees');
  console.log('  2. Grantee: The account whose transactions get fee-paid');
  console.log('  3. Allowance: The spending limit and rules\n');

  console.log('Common Allowance Types:\n');
  const allowanceTypes = [
    { type: 'BasicAllowance', desc: 'Simple spending limit (e.g., 1000 uxion max)' },
    { type: 'PeriodicAllowance', desc: 'Recurring allowance with period and budget' },
    { type: 'AllowedMsgAllowance', desc: 'Restricts which message types can use the allowance' },
  ];

  allowanceTypes.forEach(({ type, desc }) => {
    console.log(`  • ${type}:`);
    console.log(`    ${desc}\n`);
  });

  console.log('Use Cases:\n');
  console.log('  • Gasless UX: Users can transact without holding native tokens');
  console.log('  • Sponsored transactions: Apps pay fees for users');
  console.log('  • Abstract accounts: Meta-transactions');
  console.log('  • Developer tooling: Test accounts with fee grants\n');

  console.log('Indexer vs Standard Feegrant:\n');
  console.log('  • This module provides OPTIMIZED QUERIES for allowances');
  console.log('  • To CREATE allowances, use: cosmos.feegrant.v1beta1.MsgGrantAllowance');
  console.log('  • To REVOKE allowances, use: cosmos.feegrant.v1beta1.MsgRevokeAllowance');
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.indexer.feegrant.v1 Query Messages — Examples       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  queryAllowanceExamples();
  queryAllowancesExamples();
  queryAllowancesByGranterExamples();
  feegrantExplanation();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QueryAllowanceRequest:        ', QueryAllowanceRequest.typeUrl);
  console.log('  QueryAllowancesRequest:       ', QueryAllowancesRequest.typeUrl);
  console.log('  QueryAllowancesByGranterRequest:', QueryAllowancesByGranterRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QueryAllowanceResponse:        ', QueryAllowanceResponse.typeUrl);
  console.log('  QueryAllowancesResponse:       ', QueryAllowancesResponse.typeUrl);
  console.log('  QueryAllowancesByGranterResponse:', QueryAllowancesByGranterResponse.typeUrl);
  console.log('\nREST Endpoints:');
  console.log('  GET /xion/indexer/feegrant/v1/allowance/{granter}/{grantee}');
  console.log('  GET /xion/indexer/feegrant/v1/allowances/{grantee}');
  console.log('  GET /xion/indexer/feegrant/v1/issued/{granter}');
  console.log('\nNote: This is an indexer module (query-only).');
  console.log('Use cosmos.feegrant.v1beta1 for grant/revoke transactions.');
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  queryAllowanceExamples,
  queryAllowancesExamples,
  queryAllowancesByGranterExamples,
  feegrantExplanation,
};

