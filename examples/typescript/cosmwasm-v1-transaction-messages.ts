/**
 * cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages for CosmWasm smart contracts.
 *
 * Messages covered:
 * - MsgExecuteContract: Execute a method on a deployed contract
 * - MsgInstantiateContract: Deploy a new contract instance from stored code
 * - MsgMigrateContract: Upgrade a contract to new code
 * - MsgUpdateAdmin: Change contract admin
 * - MsgClearAdmin: Remove contract admin (makes contract immutable)
 *
 * Common use cases:
 * - Executing CW20 token transfers
 * - Interacting with NFT contracts (CW721)
 * - Calling custom contract methods
 */

import {
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgUpdateAdmin,
  MsgClearAdmin,
} from '@burnt-labs/xion-types/types/cosmwasm/wasm/v1/tx';

import { Coin } from '@burnt-labs/xion-types/types/cosmos/base/v1beta1/coin';

// =============================================================================
// MsgExecuteContract
// =============================================================================
// Execute a method on a deployed smart contract.
// Type URL: /cosmwasm.wasm.v1.MsgExecuteContract
// Signer: sender

function msgExecuteContractExamples() {
  console.log('=== MsgExecuteContract Examples ===\n');

  // ---------------------------------------------------------------------------
  // Example 1: Basic contract execution (no funds attached)
  // ---------------------------------------------------------------------------
  // This is the most common pattern for calling contract methods

  const basicExecuteMsg = {
    increment: {}, // Contract method with no args
  };

  const basicMsg = MsgExecuteContract.fromPartial({
    sender: 'xion1sender...',
    contract: 'xion1contractaddress...',
    msg: new TextEncoder().encode(JSON.stringify(basicExecuteMsg)),
    funds: [],
  });

  console.log('1. Basic MsgExecuteContract (no funds):');
  console.log('   sender:', basicMsg.sender);
  console.log('   contract:', basicMsg.contract);
  console.log('   msg:', JSON.parse(new TextDecoder().decode(basicMsg.msg)));
  console.log('   funds:', basicMsg.funds);
  console.log('   typeUrl:', MsgExecuteContract.typeUrl);

  // ---------------------------------------------------------------------------
  // Example 2: CW20 Token Transfer
  // ---------------------------------------------------------------------------
  // Transfer CW20 tokens to another address

  const cw20TransferMsg = {
    transfer: {
      recipient: 'xion1recipient...',
      amount: '1000000', // Amount in token's smallest unit
    },
  };

  const cw20Transfer = MsgExecuteContract.fromPartial({
    sender: 'xion1sender...',
    contract: 'xion1cw20tokencontract...', // CW20 token contract address
    msg: new TextEncoder().encode(JSON.stringify(cw20TransferMsg)),
    funds: [], // CW20 transfers don't attach native funds
  });

  console.log('\n2. CW20 Token Transfer:');
  console.log('   contract:', cw20Transfer.contract);
  console.log('   msg:', JSON.parse(new TextDecoder().decode(cw20Transfer.msg)));

  // ---------------------------------------------------------------------------
  // Example 3: Contract execution WITH attached funds
  // ---------------------------------------------------------------------------
  // Some contracts require native tokens to be sent with the message

  const buyNftMsg = {
    buy_nft: {
      token_id: '42',
    },
  };

  const msgWithFunds = MsgExecuteContract.fromPartial({
    sender: 'xion1buyer...',
    contract: 'xion1nftmarketplace...',
    msg: new TextEncoder().encode(JSON.stringify(buyNftMsg)),
    funds: [
      { denom: 'uxion', amount: '5000000' }, // 5 XION
    ],
  });

  console.log('\n3. Contract execution with funds:');
  console.log('   msg:', JSON.parse(new TextDecoder().decode(msgWithFunds.msg)));
  console.log('   funds:', msgWithFunds.funds);

  // ---------------------------------------------------------------------------
  // Example 4: CW721 NFT Transfer
  // ---------------------------------------------------------------------------

  const nftTransferMsg = {
    transfer_nft: {
      recipient: 'xion1recipient...',
      token_id: '123',
    },
  };

  const nftTransfer = MsgExecuteContract.fromPartial({
    sender: 'xion1owner...',
    contract: 'xion1nftcontract...',
    msg: new TextEncoder().encode(JSON.stringify(nftTransferMsg)),
    funds: [],
  });

  console.log('\n4. CW721 NFT Transfer:');
  console.log('   msg:', JSON.parse(new TextDecoder().decode(nftTransfer.msg)));

  // ---------------------------------------------------------------------------
  // Encoding and Decoding
  // ---------------------------------------------------------------------------

  console.log('\n--- Encoding/Decoding ---');

  // 5. Encode to protobuf bytes
  const encodedBytes = MsgExecuteContract.encode(basicMsg).finish();
  console.log('\n5. Encoded to protobuf bytes:');
  console.log('   Length:', encodedBytes.length, 'bytes');

  // 6. Decode from protobuf bytes
  const decoded = MsgExecuteContract.decode(encodedBytes);
  console.log('\n6. Decoded from bytes:');
  console.log('   sender:', decoded.sender);
  console.log('   contract:', decoded.contract);
  console.log('   msg:', JSON.parse(new TextDecoder().decode(decoded.msg)));

  // 7. Create ProtoMsg (typeUrl + encoded value) for signing
  const protoMsg = MsgExecuteContract.toProtoMsg(basicMsg);
  console.log('\n7. ProtoMsg for signing:');
  console.log('   typeUrl:', protoMsg.typeUrl);
  console.log('   value (bytes):', protoMsg.value.length, 'bytes');

  // 8. Amino encoding (for legacy wallet compatibility)
  const aminoMsg = MsgExecuteContract.toAmino(basicMsg);
  console.log('\n8. Amino format:');
  console.log('   sender:', aminoMsg.sender);
  console.log('   contract:', aminoMsg.contract);
  console.log('   msg:', aminoMsg.msg); // Already parsed JSON in Amino

  // 9. AminoMsg format
  const aminoMsgFull = MsgExecuteContract.toAminoMsg(basicMsg);
  console.log('\n9. AminoMsg:');
  console.log('   type:', aminoMsgFull.type); // "wasm/MsgExecuteContract"

  return basicMsg;
}

// =============================================================================
// MsgInstantiateContract
// =============================================================================
// Create a new contract instance from stored WASM code.
// Type URL: /cosmwasm.wasm.v1.MsgInstantiateContract
// Signer: sender

function msgInstantiateContractExamples() {
  console.log('\n=== MsgInstantiateContract Examples ===\n');

  // Instantiate message for a CW20 token
  const cw20InstantiateMsg = {
    name: 'My Token',
    symbol: 'MTK',
    decimals: 6,
    initial_balances: [
      {
        address: 'xion1creator...',
        amount: '1000000000000', // 1 million tokens
      },
    ],
    mint: {
      minter: 'xion1creator...',
    },
  };

  const msg = MsgInstantiateContract.fromPartial({
    sender: 'xion1creator...',
    admin: 'xion1admin...', // Optional: address that can migrate contract
    codeId: BigInt(123), // Code ID from MsgStoreCode
    label: 'My CW20 Token', // Human-readable label
    msg: new TextEncoder().encode(JSON.stringify(cw20InstantiateMsg)),
    funds: [], // Initial funds to send to contract
  });

  console.log('1. Constructed MsgInstantiateContract:');
  console.log('   sender:', msg.sender);
  console.log('   admin:', msg.admin);
  console.log('   codeId:', msg.codeId.toString());
  console.log('   label:', msg.label);
  console.log('   msg:', JSON.parse(new TextDecoder().decode(msg.msg)));
  console.log('   typeUrl:', MsgInstantiateContract.typeUrl);

  // 2. Encode
  const encodedBytes = MsgInstantiateContract.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgInstantiateContract.decode(encodedBytes);
  console.log('\n3. Decoded:');
  console.log('   codeId:', decoded.codeId.toString());
  console.log('   label:', decoded.label);

  // 4. ProtoMsg
  const protoMsg = MsgInstantiateContract.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgInstantiateContract.toAminoMsg(msg);
  console.log('\n5. AminoMsg type:', aminoMsg.type); // "wasm/MsgInstantiateContract"

  // ---------------------------------------------------------------------------
  // Example: Instantiate with initial funds
  // ---------------------------------------------------------------------------
  // Some contracts require initial funds (e.g., liquidity pools)

  const poolInstantiateMsg = {
    token_a: 'xion1tokena...',
    token_b: 'xion1tokenb...',
  };

  const msgWithFunds = MsgInstantiateContract.fromPartial({
    sender: 'xion1creator...',
    admin: '', // Empty string = no admin (immutable)
    codeId: BigInt(456),
    label: 'Liquidity Pool',
    msg: new TextEncoder().encode(JSON.stringify(poolInstantiateMsg)),
    funds: [
      { denom: 'uxion', amount: '10000000' }, // 10 XION initial liquidity
    ],
  });

  console.log('\n6. Instantiate with funds:');
  console.log('   admin:', msgWithFunds.admin || '(none - immutable)');
  console.log('   funds:', msgWithFunds.funds);

  return msg;
}

// =============================================================================
// MsgMigrateContract
// =============================================================================
// Upgrade a contract to new code (requires admin permission).
// Type URL: /cosmwasm.wasm.v1.MsgMigrateContract
// Signer: sender (must be contract admin)

function msgMigrateContractExamples() {
  console.log('\n=== MsgMigrateContract Examples ===\n');

  // Migration message (contract-specific)
  const migrateMsg = {
    new_feature_enabled: true,
    migration_version: '2.0.0',
  };

  const msg = MsgMigrateContract.fromPartial({
    sender: 'xion1admin...', // Must be the contract's admin
    contract: 'xion1contractaddress...',
    codeId: BigInt(789), // New code ID to migrate to
    msg: new TextEncoder().encode(JSON.stringify(migrateMsg)),
  });

  console.log('1. Constructed MsgMigrateContract:');
  console.log('   sender:', msg.sender);
  console.log('   contract:', msg.contract);
  console.log('   codeId:', msg.codeId.toString());
  console.log('   msg:', JSON.parse(new TextDecoder().decode(msg.msg)));
  console.log('   typeUrl:', MsgMigrateContract.typeUrl);

  // 2. Encode
  const encodedBytes = MsgMigrateContract.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgMigrateContract.decode(encodedBytes);
  console.log('\n3. Decoded codeId:', decoded.codeId.toString());

  // 4. ProtoMsg
  const protoMsg = MsgMigrateContract.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgMigrateContract.toAminoMsg(msg);
  console.log('\n5. AminoMsg type:', aminoMsg.type); // "wasm/MsgMigrateContract"

  return msg;
}

// =============================================================================
// MsgUpdateAdmin / MsgClearAdmin
// =============================================================================
// Change or remove the contract admin.
// Type URL: /cosmwasm.wasm.v1.MsgUpdateAdmin
// Type URL: /cosmwasm.wasm.v1.MsgClearAdmin
// Signer: sender (must be current admin)

function msgAdminExamples() {
  console.log('\n=== MsgUpdateAdmin / MsgClearAdmin Examples ===\n');

  // --- MsgUpdateAdmin ---
  const updateAdminMsg = MsgUpdateAdmin.fromPartial({
    sender: 'xion1currentadmin...',
    newAdmin: 'xion1newadmin...',
    contract: 'xion1contractaddress...',
  });

  console.log('1. MsgUpdateAdmin:');
  console.log('   sender:', updateAdminMsg.sender);
  console.log('   newAdmin:', updateAdminMsg.newAdmin);
  console.log('   contract:', updateAdminMsg.contract);
  console.log('   typeUrl:', MsgUpdateAdmin.typeUrl);

  const encodedUpdate = MsgUpdateAdmin.encode(updateAdminMsg).finish();
  console.log('\n2. Encoded:', encodedUpdate.length, 'bytes');

  // --- MsgClearAdmin ---
  // WARNING: This makes the contract immutable - no more migrations possible
  const clearAdminMsg = MsgClearAdmin.fromPartial({
    sender: 'xion1currentadmin...',
    contract: 'xion1contractaddress...',
  });

  console.log('\n3. MsgClearAdmin (WARNING: makes contract immutable):');
  console.log('   sender:', clearAdminMsg.sender);
  console.log('   contract:', clearAdminMsg.contract);
  console.log('   typeUrl:', MsgClearAdmin.typeUrl);

  const encodedClear = MsgClearAdmin.encode(clearAdminMsg).finish();
  console.log('\n4. Encoded:', encodedClear.length, 'bytes');

  return { updateAdminMsg, clearAdminMsg };
}

// =============================================================================
// Helper: Constructing Contract Messages
// =============================================================================
// Tips for working with contract messages

function contractMsgHelpers() {
  console.log('\n=== Contract Message Helpers ===\n');

  // The `msg` field is always a JSON object encoded as Uint8Array
  // Here are common patterns:

  // 1. Encode JSON to Uint8Array
  const jsonMsg = { transfer: { recipient: 'xion1...', amount: '1000' } };
  const encoded = new TextEncoder().encode(JSON.stringify(jsonMsg));
  console.log('1. JSON to Uint8Array:', encoded.length, 'bytes');

  // 2. Decode Uint8Array back to JSON
  const decoded = JSON.parse(new TextDecoder().decode(encoded));
  console.log('2. Uint8Array to JSON:', decoded);

  // 3. Using Buffer (Node.js)
  const fromBuffer = Buffer.from(JSON.stringify(jsonMsg), 'utf-8');
  const asUint8Array = new Uint8Array(fromBuffer);
  console.log('3. Via Buffer:', asUint8Array.length, 'bytes');

  // 4. Common CW20 messages
  const cw20Messages = {
    transfer: { recipient: 'xion1...', amount: '1000' },
    send: { contract: 'xion1...', amount: '1000', msg: 'base64encodedmsg' },
    increase_allowance: { spender: 'xion1...', amount: '1000' },
    decrease_allowance: { spender: 'xion1...', amount: '1000' },
    transfer_from: { owner: 'xion1...', recipient: 'xion1...', amount: '1000' },
    burn: { amount: '1000' },
    mint: { recipient: 'xion1...', amount: '1000' }, // If minter
  };
  console.log('\n4. Common CW20 message types:', Object.keys(cw20Messages));

  // 5. Common CW721 messages
  const cw721Messages = {
    transfer_nft: { recipient: 'xion1...', token_id: '1' },
    send_nft: { contract: 'xion1...', token_id: '1', msg: 'base64encodedmsg' },
    approve: { spender: 'xion1...', token_id: '1' },
    revoke: { spender: 'xion1...', token_id: '1' },
    approve_all: { operator: 'xion1...' },
    revoke_all: { operator: 'xion1...' },
    mint: { token_id: '1', owner: 'xion1...', token_uri: 'ipfs://...' },
    burn: { token_id: '1' },
  };
  console.log('5. Common CW721 message types:', Object.keys(cw721Messages));

  return { encoded, decoded };
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  cosmwasm.wasm.v1 Transaction Messages — Protobuf Examples ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  msgExecuteContractExamples();
  msgInstantiateContractExamples();
  msgMigrateContractExamples();
  msgAdminExamples();
  contractMsgHelpers();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  MsgExecuteContract:     ', MsgExecuteContract.typeUrl);
  console.log('  MsgInstantiateContract: ', MsgInstantiateContract.typeUrl);
  console.log('  MsgMigrateContract:     ', MsgMigrateContract.typeUrl);
  console.log('  MsgUpdateAdmin:         ', MsgUpdateAdmin.typeUrl);
  console.log('  MsgClearAdmin:          ', MsgClearAdmin.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  msgExecuteContractExamples,
  msgInstantiateContractExamples,
  msgMigrateContractExamples,
  msgAdminExamples,
  contractMsgHelpers,
};
