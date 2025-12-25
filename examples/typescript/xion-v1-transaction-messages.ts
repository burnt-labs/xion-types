/**
 * xion.v1 Transaction Messages — Protobuf Examples
 *
 * This file demonstrates how to construct, encode, and decode
 * transaction messages from the Core Xion Module (xion.v1).
 *
 * Messages covered:
 * - MsgSend: Transfer coins between addresses
 * - MsgMultiSend: Multi-input, multi-output transfers
 * - MsgSetPlatformPercentage: Set platform fee percentage (governance)
 * - MsgSetPlatformMinimum: Set minimum platform fees (governance)
 */

import {
  MsgSend,
  MsgMultiSend,
  MsgSetPlatformPercentage,
  MsgSetPlatformMinimum,
} from '@burnt-labs/xion-types/types/xion/v1/tx';

import { Coin } from '@burnt-labs/xion-types/types/cosmos/base/v1beta1/coin';
import { Input, Output } from '@burnt-labs/xion-types/types/cosmos/bank/v1beta1/bank';

// =============================================================================
// MsgSend
// =============================================================================
// Transfer coins from one address to another.
// Type URL: /xion.v1.MsgSend
// Signer: from_address

function msgSendExamples() {
  console.log('=== MsgSend Examples ===\n');

  // 1. Construct message using fromPartial
  const msgSend = MsgSend.fromPartial({
    fromAddress: 'xion1sender...',
    toAddress: 'xion1recipient...',
    amount: [
      { denom: 'uxion', amount: '1000000' }, // 1 XION = 1,000,000 uxion
    ],
  });

  console.log('1. Constructed MsgSend:');
  console.log('   fromAddress:', msgSend.fromAddress);
  console.log('   toAddress:', msgSend.toAddress);
  console.log('   amount:', msgSend.amount);
  console.log('   typeUrl:', MsgSend.typeUrl);

  // 2. Encode to protobuf bytes
  const encodedBytes = MsgSend.encode(msgSend).finish();
  console.log('\n2. Encoded to protobuf bytes:');
  console.log('   Length:', encodedBytes.length, 'bytes');
  console.log('   Hex:', Buffer.from(encodedBytes).toString('hex'));

  // 3. Alternative: toProto() does the same as encode().finish()
  const protoBytes = MsgSend.toProto(msgSend);
  console.log('\n3. Using toProto():');
  console.log('   Same result:', Buffer.from(protoBytes).equals(Buffer.from(encodedBytes)));

  // 4. Decode from protobuf bytes
  const decoded = MsgSend.decode(encodedBytes);
  console.log('\n4. Decoded from bytes:');
  console.log('   fromAddress:', decoded.fromAddress);
  console.log('   toAddress:', decoded.toAddress);

  // 5. Create ProtoMsg (typeUrl + encoded value) for signing
  const protoMsg = MsgSend.toProtoMsg(msgSend);
  console.log('\n5. ProtoMsg for signing:');
  console.log('   typeUrl:', protoMsg.typeUrl);
  console.log('   value (bytes):', protoMsg.value.length, 'bytes');

  // 6. Amino encoding (for legacy compatibility)
  const aminoMsg = MsgSend.toAmino(msgSend);
  console.log('\n6. Amino format:');
  console.log('   from_address:', aminoMsg.from_address);
  console.log('   to_address:', aminoMsg.to_address);
  console.log('   amount:', aminoMsg.amount);

  // 7. Convert back from Amino
  const fromAmino = MsgSend.fromAmino(aminoMsg);
  console.log('\n7. Converted back from Amino:');
  console.log('   fromAddress:', fromAmino.fromAddress);

  // 8. AminoMsg format (type + value)
  const aminoMsgFull = MsgSend.toAminoMsg(msgSend);
  console.log('\n8. AminoMsg:');
  console.log('   type:', aminoMsgFull.type); // "xion/MsgSend"
  console.log('   value:', aminoMsgFull.value);

  return msgSend;
}

// =============================================================================
// MsgMultiSend
// =============================================================================
// Multi-input, multi-output transfer.
// Type URL: /xion.v1.MsgMultiSend
// Signer: inputs (note: only one input is allowed despite being repeated)

function msgMultiSendExamples() {
  console.log('\n=== MsgMultiSend Examples ===\n');

  // 1. Construct inputs and outputs
  const input: Input = Input.fromPartial({
    address: 'xion1sender...',
    coins: [{ denom: 'uxion', amount: '3000000' }], // Total: 3 XION
  });

  const outputs: Output[] = [
    Output.fromPartial({
      address: 'xion1recipient1...',
      coins: [{ denom: 'uxion', amount: '1000000' }], // 1 XION
    }),
    Output.fromPartial({
      address: 'xion1recipient2...',
      coins: [{ denom: 'uxion', amount: '2000000' }], // 2 XION
    }),
  ];

  // 2. Construct MsgMultiSend
  const msgMultiSend = MsgMultiSend.fromPartial({
    inputs: [input], // Only ONE input allowed
    outputs: outputs,
  });

  console.log('1. Constructed MsgMultiSend:');
  console.log('   inputs:', msgMultiSend.inputs.length);
  console.log('   outputs:', msgMultiSend.outputs.length);
  console.log('   typeUrl:', MsgMultiSend.typeUrl);

  // 3. Encode to protobuf
  const encodedBytes = MsgMultiSend.encode(msgMultiSend).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 4. Decode
  const decoded = MsgMultiSend.decode(encodedBytes);
  console.log('\n3. Decoded outputs:');
  decoded.outputs.forEach((o, i) => {
    console.log(`   Output ${i}: ${o.address} -> ${o.coins[0]?.amount} ${o.coins[0]?.denom}`);
  });

  // 5. ProtoMsg for signing
  const protoMsg = MsgMultiSend.toProtoMsg(msgMultiSend);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 6. Amino format
  const aminoMsg = MsgMultiSend.toAminoMsg(msgMultiSend);
  console.log('\n5. AminoMsg type:', aminoMsg.type); // "xion/MsgMultiSend"

  return msgMultiSend;
}

// =============================================================================
// MsgSetPlatformPercentage
// =============================================================================
// Set the platform fee percentage (governance message).
// Type URL: /xion.v1.MsgSetPlatformPercentage
// Signer: authority (governance address)
// Note: platform_percentage is multiplied by 10000 (e.g., 500 = 5%)

function msgSetPlatformPercentageExamples() {
  console.log('\n=== MsgSetPlatformPercentage Examples ===\n');

  // 1. Construct message
  // platformPercentage is multiplied by 10000
  // Example: 500 = 5%, 100 = 1%, 10000 = 100%
  const msg = MsgSetPlatformPercentage.fromPartial({
    authority: 'xion1governance...', // Governance module address
    platformPercentage: 500, // 5% fee
  });

  console.log('1. Constructed MsgSetPlatformPercentage:');
  console.log('   authority:', msg.authority);
  console.log('   platformPercentage:', msg.platformPercentage);
  console.log('   Actual percentage:', msg.platformPercentage / 100, '%');
  console.log('   typeUrl:', MsgSetPlatformPercentage.typeUrl);

  // 2. Encode
  const encodedBytes = MsgSetPlatformPercentage.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgSetPlatformPercentage.decode(encodedBytes);
  console.log('\n3. Decoded platformPercentage:', decoded.platformPercentage);

  // 4. ProtoMsg
  const protoMsg = MsgSetPlatformPercentage.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgSetPlatformPercentage.toAminoMsg(msg);
  console.log('\n5. AminoMsg:');
  console.log('   type:', aminoMsg.type); // "xion/MsgSetPlatformPercentage"
  console.log('   platform_percentage:', aminoMsg.value.platform_percentage);

  return msg;
}

// =============================================================================
// MsgSetPlatformMinimum
// =============================================================================
// Set the minimum platform fees (governance message).
// Type URL: /xion.v1.MsgSetPlatformMinimum
// Signer: authority (governance address)

function msgSetPlatformMinimumExamples() {
  console.log('\n=== MsgSetPlatformMinimum Examples ===\n');

  // 1. Construct message with multiple minimum fee denominations
  const msg = MsgSetPlatformMinimum.fromPartial({
    authority: 'xion1governance...',
    minimums: [
      { denom: 'uxion', amount: '1000' }, // Minimum 0.001 XION
      { denom: 'uatom', amount: '500' }, // Can set for other denoms too
    ],
  });

  console.log('1. Constructed MsgSetPlatformMinimum:');
  console.log('   authority:', msg.authority);
  console.log('   minimums:');
  msg.minimums.forEach((m) => {
    console.log(`     - ${m.amount} ${m.denom}`);
  });
  console.log('   typeUrl:', MsgSetPlatformMinimum.typeUrl);

  // 2. Encode
  const encodedBytes = MsgSetPlatformMinimum.encode(msg).finish();
  console.log('\n2. Encoded:', encodedBytes.length, 'bytes');

  // 3. Decode
  const decoded = MsgSetPlatformMinimum.decode(encodedBytes);
  console.log('\n3. Decoded minimums:', decoded.minimums.length, 'entries');

  // 4. ProtoMsg
  const protoMsg = MsgSetPlatformMinimum.toProtoMsg(msg);
  console.log('\n4. ProtoMsg typeUrl:', protoMsg.typeUrl);

  // 5. Amino
  const aminoMsg = MsgSetPlatformMinimum.toAminoMsg(msg);
  console.log('\n5. AminoMsg:');
  console.log('   type:', aminoMsg.type); // "xion/MsgSetPlatformMinimum"
  console.log('   minimums:', aminoMsg.value.minimums);

  return msg;
}

// =============================================================================
// Coin Helper
// =============================================================================
// The Coin type is used by many messages

function coinExamples() {
  console.log('\n=== Coin Helper Examples ===\n');

  // Construct a Coin
  const coin = Coin.fromPartial({
    denom: 'uxion',
    amount: '1000000',
  });

  console.log('Coin:', coin.amount, coin.denom);

  // Encode/decode
  const encoded = Coin.encode(coin).finish();
  const decoded = Coin.decode(encoded);
  console.log('Decoded:', decoded.amount, decoded.denom);

  // Amino
  const amino = Coin.toAmino(coin);
  console.log('Amino:', amino);

  return coin;
}

// =============================================================================
// Run All Examples
// =============================================================================

function main() {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║  xion.v1 Transaction Messages — Protobuf Examples          ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  msgSendExamples();
  msgMultiSendExamples();
  msgSetPlatformPercentageExamples();
  msgSetPlatformMinimumExamples();
  coinExamples();

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Type URL Reference:');
  console.log('  MsgSend:                  ', MsgSend.typeUrl);
  console.log('  MsgMultiSend:             ', MsgMultiSend.typeUrl);
  console.log('  MsgSetPlatformPercentage: ', MsgSetPlatformPercentage.typeUrl);
  console.log('  MsgSetPlatformMinimum:    ', MsgSetPlatformMinimum.typeUrl);
  console.log('═══════════════════════════════════════════════════════════════');
}

// Execute if run directly
main();

export {
  msgSendExamples,
  msgMultiSendExamples,
  msgSetPlatformPercentageExamples,
  msgSetPlatformMinimumExamples,
  coinExamples,
};
