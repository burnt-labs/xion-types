/**
 * cosmwasm.wasm.v1 Query Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * query messages for CosmWasm smart contracts.
 *
 * Queries covered:
 * - QuerySmartContractState: Execute a read-only query on a contract
 * - QueryContractInfo: Get contract metadata (code ID, admin, label)
 * - QueryContractsByCode: List all contracts using a specific code ID
 * - QueryRawContractState: Read raw storage by key
 * - QueryContractHistory: Get contract's code migration history
 *
 * Common use cases:
 * - Querying CW20 token balances
 * - Getting NFT metadata and ownership
 * - Reading contract configuration
 */

import {
  QuerySmartContractStateRequest,
  QuerySmartContractStateResponse,
  QueryContractInfoRequest,
  QueryContractInfoResponse,
  QueryContractsByCodeRequest,
  QueryContractsByCodeResponse,
  QueryRawContractStateRequest,
  QueryRawContractStateResponse,
  QueryContractHistoryRequest,
  QueryContractHistoryResponse,
} from '@burnt-labs/xion-types/types/cosmwasm/wasm/v1/query';

import { PageRequest } from '@burnt-labs/xion-types/types/cosmos/base/query/v1beta1/pagination';

// =============================================================================
// QuerySmartContractState
// =============================================================================
// Execute a read-only query on a smart contract.
// This is the most common way to read contract state.
// Type URL: /cosmwasm.wasm.v1.QuerySmartContractStateRequest

function querySmartContractStateExamples() {
  console.log('=== QuerySmartContractState Examples ===\n');

  // ---------------------------------------------------------------------------
  // Example 1: CW20 Balance Query
  // ---------------------------------------------------------------------------
  const balanceQuery = {
    balance: {
      address: 'xion1holder...',
    },
  };

  const balanceRequest = QuerySmartContractStateRequest.fromPartial({
    address: 'xion1cw20tokencontract...', // Contract address
    queryData: new TextEncoder().encode(JSON.stringify(balanceQuery)),
  });

  console.log('1. CW20 Balance Query:');
  console.log('   contract:', balanceRequest.address);
  console.log('   query:', JSON.parse(new TextDecoder().decode(balanceRequest.queryData)));
  console.log('   typeUrl:', QuerySmartContractStateRequest.typeUrl);

  // ---------------------------------------------------------------------------
  // Example 2: CW20 Token Info Query
  // ---------------------------------------------------------------------------
  const tokenInfoQuery = {
    token_info: {},
  };

  const tokenInfoRequest = QuerySmartContractStateRequest.fromPartial({
    address: 'xion1cw20tokencontract...',
    queryData: new TextEncoder().encode(JSON.stringify(tokenInfoQuery)),
  });

  console.log('\n2. CW20 Token Info Query:');
  console.log('   query:', JSON.parse(new TextDecoder().decode(tokenInfoRequest.queryData)));

  // ---------------------------------------------------------------------------
  // Example 3: CW721 NFT Owner Query
  // ---------------------------------------------------------------------------
  const ownerOfQuery = {
    owner_of: {
      token_id: '123',
      include_expired: false,
    },
  };

  const ownerRequest = QuerySmartContractStateRequest.fromPartial({
    address: 'xion1nftcontract...',
    queryData: new TextEncoder().encode(JSON.stringify(ownerOfQuery)),
  });

  console.log('\n3. CW721 Owner Of Query:');
  console.log('   query:', JSON.parse(new TextDecoder().decode(ownerRequest.queryData)));

  // ---------------------------------------------------------------------------
  // Example 4: CW721 NFT Info Query
  // ---------------------------------------------------------------------------
  const nftInfoQuery = {
    nft_info: {
      token_id: '123',
    },
  };

  const nftInfoRequest = QuerySmartContractStateRequest.fromPartial({
    address: 'xion1nftcontract...',
    queryData: new TextEncoder().encode(JSON.stringify(nftInfoQuery)),
  });

  console.log('\n4. CW721 NFT Info Query:');
  console.log('   query:', JSON.parse(new TextDecoder().decode(nftInfoRequest.queryData)));

  // ---------------------------------------------------------------------------
  // Encoding and Decoding
  // ---------------------------------------------------------------------------

  console.log('\n--- Encoding/Decoding ---');

  // 5. Encode request
  const encodedRequest = QuerySmartContractStateRequest.encode(balanceRequest).finish();
  console.log('\n5. Encoded request:', encodedRequest.length, 'bytes');

  // 6. Decode request
  const decodedRequest = QuerySmartContractStateRequest.decode(encodedRequest);
  console.log('\n6. Decoded:');
  console.log('   address:', decodedRequest.address);
  console.log('   query:', JSON.parse(new TextDecoder().decode(decodedRequest.queryData)));

  // 7. ProtoMsg
  const protoMsg = QuerySmartContractStateRequest.toProtoMsg(balanceRequest);
  console.log('\n7. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 8. Amino format
  const amino = QuerySmartContractStateRequest.toAmino(balanceRequest);
  console.log('\n8. Amino format:');
  console.log('   address:', amino.address);
  console.log('   query_data:', amino.query_data); // Already JSON in Amino

  // ---------------------------------------------------------------------------
  // Response Handling
  // ---------------------------------------------------------------------------

  console.log('\n--- Response ---');

  // Simulated response (balance query returns { "balance": "1000000" })
  const balanceResponseData = { balance: '1000000' };
  const response = QuerySmartContractStateResponse.fromPartial({
    data: new TextEncoder().encode(JSON.stringify(balanceResponseData)),
  });

  console.log('\n9. Constructed Response:');
  console.log('   data:', JSON.parse(new TextDecoder().decode(response.data)));
  console.log('   typeUrl:', QuerySmartContractStateResponse.typeUrl);

  // Encode/decode response
  const encodedResponse = QuerySmartContractStateResponse.encode(response).finish();
  const decodedResponse = QuerySmartContractStateResponse.decode(encodedResponse);
  console.log('\n10. Decoded response:', JSON.parse(new TextDecoder().decode(decodedResponse.data)));

  return { request: balanceRequest, response };
}

// =============================================================================
// QueryContractInfo
// =============================================================================
// Get metadata about a deployed contract.
// Type URL: /cosmwasm.wasm.v1.QueryContractInfoRequest

function queryContractInfoExamples() {
  console.log('\n=== QueryContractInfo Examples ===\n');

  // 1. Construct request
  const request = QueryContractInfoRequest.fromPartial({
    address: 'xion1contractaddress...',
  });

  console.log('1. Constructed QueryContractInfoRequest:');
  console.log('   address:', request.address);
  console.log('   typeUrl:', QueryContractInfoRequest.typeUrl);

  // 2. Encode
  const encodedRequest = QueryContractInfoRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Decode
  const decodedRequest = QueryContractInfoRequest.decode(encodedRequest);
  console.log('\n3. Decoded address:', decodedRequest.address);

  // 4. ProtoMsg
  const protoMsg = QueryContractInfoRequest.toProtoMsg(request);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // --- Response ---
  console.log('\n--- Response ---');

  // The response contains ContractInfo with:
  // - codeId: The code ID this contract was instantiated from
  // - creator: Address that instantiated the contract
  // - admin: Address that can migrate the contract (empty = immutable)
  // - label: Human-readable label
  // - created: Block height when created
  // - ibcPortId: IBC port if contract supports IBC

  const response = QueryContractInfoResponse.fromPartial({
    address: 'xion1contractaddress...',
    contractInfo: {
      codeId: BigInt(123),
      creator: 'xion1creator...',
      admin: 'xion1admin...',
      label: 'My Token Contract',
      created: undefined, // AbsoluteTxPosition
      ibcPortId: '',
      extension: undefined,
    },
  });

  console.log('5. Constructed Response:');
  console.log('   address:', response.address);
  console.log('   codeId:', response.contractInfo?.codeId.toString());
  console.log('   creator:', response.contractInfo?.creator);
  console.log('   admin:', response.contractInfo?.admin || '(none - immutable)');
  console.log('   label:', response.contractInfo?.label);
  console.log('   typeUrl:', QueryContractInfoResponse.typeUrl);

  return { request, response };
}

// =============================================================================
// QueryContractsByCode
// =============================================================================
// List all contract instances created from a specific code ID.
// Type URL: /cosmwasm.wasm.v1.QueryContractsByCodeRequest

function queryContractsByCodeExamples() {
  console.log('\n=== QueryContractsByCode Examples ===\n');

  // 1. Construct request (with pagination)
  const request = QueryContractsByCodeRequest.fromPartial({
    codeId: BigInt(123),
    pagination: PageRequest.fromPartial({
      limit: BigInt(10),
      offset: BigInt(0),
      countTotal: true,
    }),
  });

  console.log('1. Constructed QueryContractsByCodeRequest:');
  console.log('   codeId:', request.codeId.toString());
  console.log('   pagination limit:', request.pagination?.limit.toString());
  console.log('   typeUrl:', QueryContractsByCodeRequest.typeUrl);

  // 2. Encode
  const encodedRequest = QueryContractsByCodeRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Request without pagination
  const simpleRequest = QueryContractsByCodeRequest.fromPartial({
    codeId: BigInt(123),
  });
  console.log('\n3. Simple request (no pagination):');
  console.log('   codeId:', simpleRequest.codeId.toString());

  // --- Response ---
  console.log('\n--- Response ---');

  const response = QueryContractsByCodeResponse.fromPartial({
    contracts: [
      'xion1contract1...',
      'xion1contract2...',
      'xion1contract3...',
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(3),
    },
  });

  console.log('4. Constructed Response:');
  console.log('   contracts:', response.contracts);
  console.log('   total:', response.pagination?.total.toString());
  console.log('   typeUrl:', QueryContractsByCodeResponse.typeUrl);

  return { request, response };
}

// =============================================================================
// QueryRawContractState
// =============================================================================
// Read raw contract storage by key.
// Useful for advanced use cases or debugging.
// Type URL: /cosmwasm.wasm.v1.QueryRawContractStateRequest

function queryRawContractStateExamples() {
  console.log('\n=== QueryRawContractState Examples ===\n');

  // Storage keys are typically namespaced. Common patterns:
  // - Single items: "config" or namespace + "config"
  // - Maps: namespace + key bytes

  // 1. Query raw storage by key
  const request = QueryRawContractStateRequest.fromPartial({
    address: 'xion1contractaddress...',
    queryData: new TextEncoder().encode('config'), // Storage key
  });

  console.log('1. Constructed QueryRawContractStateRequest:');
  console.log('   address:', request.address);
  console.log('   key:', new TextDecoder().decode(request.queryData));
  console.log('   typeUrl:', QueryRawContractStateRequest.typeUrl);

  // 2. Encode
  const encodedRequest = QueryRawContractStateRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // 3. Query with hex key (for map lookups)
  // CosmWasm uses length-prefixed keys for maps
  const hexKey = Buffer.from('0005746f6b656e', 'hex'); // Length-prefixed "token"
  const mapRequest = QueryRawContractStateRequest.fromPartial({
    address: 'xion1contractaddress...',
    queryData: new Uint8Array(hexKey),
  });
  console.log('\n3. Map query with hex key:', Buffer.from(mapRequest.queryData).toString('hex'));

  // --- Response ---
  console.log('\n--- Response ---');

  // Raw response is the stored bytes (usually JSON)
  const configData = { owner: 'xion1owner...', paused: false };
  const response = QueryRawContractStateResponse.fromPartial({
    data: new TextEncoder().encode(JSON.stringify(configData)),
  });

  console.log('4. Constructed Response:');
  console.log('   data:', JSON.parse(new TextDecoder().decode(response.data)));
  console.log('   typeUrl:', QueryRawContractStateResponse.typeUrl);

  return { request, response };
}

// =============================================================================
// QueryContractHistory
// =============================================================================
// Get the code migration history of a contract.
// Type URL: /cosmwasm.wasm.v1.QueryContractHistoryRequest

function queryContractHistoryExamples() {
  console.log('\n=== QueryContractHistory Examples ===\n');

  // 1. Construct request
  const request = QueryContractHistoryRequest.fromPartial({
    address: 'xion1contractaddress...',
    pagination: PageRequest.fromPartial({
      limit: BigInt(10),
    }),
  });

  console.log('1. Constructed QueryContractHistoryRequest:');
  console.log('   address:', request.address);
  console.log('   typeUrl:', QueryContractHistoryRequest.typeUrl);

  // 2. Encode
  const encodedRequest = QueryContractHistoryRequest.encode(request).finish();
  console.log('\n2. Encoded request:', encodedRequest.length, 'bytes');

  // --- Response ---
  console.log('\n--- Response ---');

  // History entries show each code change (instantiate, migrate)
  // ContractCodeHistoryOperationType: INIT = 1, MIGRATE = 2, GENESIS = 3
  const response = QueryContractHistoryResponse.fromPartial({
    entries: [
      {
        operation: 1, // CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT
        codeId: BigInt(100),
        updated: undefined,
        msg: new TextEncoder().encode(JSON.stringify({ name: 'Token v1' })),
      },
      {
        operation: 2, // CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE
        codeId: BigInt(123),
        updated: undefined,
        msg: new TextEncoder().encode(JSON.stringify({ migrate_version: '2.0' })),
      },
    ],
    pagination: {
      nextKey: new Uint8Array(),
      total: BigInt(2),
    },
  });

  console.log('3. Constructed Response:');
  console.log('   entries:', response.entries.length);
  response.entries.forEach((entry, i) => {
    const opName = entry.operation === 1 ? 'INIT' : entry.operation === 2 ? 'MIGRATE' : 'GENESIS';
    console.log(`   Entry ${i}: ${opName} -> codeId ${entry.codeId}`);
  });
  console.log('   typeUrl:', QueryContractHistoryResponse.typeUrl);

  return { request, response };
}

// =============================================================================
// Common Contract Query Patterns
// =============================================================================

function commonQueryPatterns() {
  console.log('\n=== Common Contract Query Patterns ===\n');

  // CW20 queries
  const cw20Queries = {
    balance: { balance: { address: 'xion1...' } },
    token_info: { token_info: {} },
    minter: { minter: {} },
    allowance: { allowance: { owner: 'xion1...', spender: 'xion1...' } },
    all_allowances: { all_allowances: { owner: 'xion1...' } },
    all_accounts: { all_accounts: {} },
  };
  console.log('1. CW20 query types:', Object.keys(cw20Queries));

  // CW721 queries
  const cw721Queries = {
    owner_of: { owner_of: { token_id: '1' } },
    nft_info: { nft_info: { token_id: '1' } },
    all_nft_info: { all_nft_info: { token_id: '1' } },
    tokens: { tokens: { owner: 'xion1...' } },
    all_tokens: { all_tokens: {} },
    contract_info: { contract_info: {} },
    num_tokens: { num_tokens: {} },
  };
  console.log('2. CW721 query types:', Object.keys(cw721Queries));

  // Generic patterns
  console.log('\n3. Generic patterns:');
  console.log('   - { config: {} } - Get contract configuration');
  console.log('   - { state: {} } - Get contract state');
  console.log('   - { info: {} } - Get contract info');
  console.log('   - { get_xxx: { key: value } } - Get specific item');
  console.log('   - { list_xxx: { start_after: "...", limit: 10 } } - Paginated list');

  return { cw20Queries, cw721Queries };
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  cosmwasm.wasm.v1 Query Messages — Protobuf Examples       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  querySmartContractStateExamples();
  queryContractInfoExamples();
  queryContractsByCodeExamples();
  queryRawContractStateExamples();
  queryContractHistoryExamples();
  commonQueryPatterns();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference (Requests):');
  console.log('  QuerySmartContractStateRequest: ', QuerySmartContractStateRequest.typeUrl);
  console.log('  QueryContractInfoRequest:       ', QueryContractInfoRequest.typeUrl);
  console.log('  QueryContractsByCodeRequest:    ', QueryContractsByCodeRequest.typeUrl);
  console.log('  QueryRawContractStateRequest:   ', QueryRawContractStateRequest.typeUrl);
  console.log('  QueryContractHistoryRequest:    ', QueryContractHistoryRequest.typeUrl);
  console.log('\nType URL Reference (Responses):');
  console.log('  QuerySmartContractStateResponse:', QuerySmartContractStateResponse.typeUrl);
  console.log('  QueryContractInfoResponse:      ', QueryContractInfoResponse.typeUrl);
  console.log('  QueryContractsByCodeResponse:   ', QueryContractsByCodeResponse.typeUrl);
  console.log('  QueryRawContractStateResponse:  ', QueryRawContractStateResponse.typeUrl);
  console.log('  QueryContractHistoryResponse:   ', QueryContractHistoryResponse.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  querySmartContractStateExamples,
  queryContractInfoExamples,
  queryContractsByCodeExamples,
  queryRawContractStateExamples,
  queryContractHistoryExamples,
  commonQueryPatterns,
};
