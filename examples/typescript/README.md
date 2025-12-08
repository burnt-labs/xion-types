# xion.v1 TypeScript Protobuf Examples

This directory contains examples demonstrating how to use the generated TypeScript protobuf types for the Core Xion Module (`xion.v1`).

## Files

| File | Description |
|------|-------------|
| `xion-v1-transaction-messages.ts` | Transaction message construction (MsgSend, MsgMultiSend, etc.) |
| `xion-v1-query-messages.ts` | Query message construction (WebAuthN, PlatformPercentage, etc.) |

## Prerequisites

```bash
npm install @burnt-labs/xion-types
# or
pnpm add @burnt-labs/xion-types
```

## Running the Examples

```bash
npx ts-node xion-v1-transaction-messages.ts
npx ts-node xion-v1-query-messages.ts
```

## Transaction Messages (xion.v1)

| Message | Type URL | Purpose |
|---------|----------|---------|
| `MsgSend` | `/xion.v1.MsgSend` | Transfer coins between addresses |
| `MsgMultiSend` | `/xion.v1.MsgMultiSend` | Multi-input, multi-output transfer |
| `MsgSetPlatformPercentage` | `/xion.v1.MsgSetPlatformPercentage` | Set platform fee % (governance) |
| `MsgSetPlatformMinimum` | `/xion.v1.MsgSetPlatformMinimum` | Set minimum fees (governance) |

## Query Messages (xion.v1)

| Request | Response | Purpose |
|---------|----------|---------|
| `QueryWebAuthNVerifyRegisterRequest` | `QueryWebAuthNVerifyRegisterResponse` | Verify WebAuthN registration |
| `QueryWebAuthNVerifyAuthenticateRequest` | `QueryWebAuthNVerifyAuthenticateResponse` | Verify WebAuthN authentication |
| `QueryPlatformPercentageRequest` | `QueryPlatformPercentageResponse` | Get platform fee percentage |
| `QueryPlatformMinimumRequest` | `QueryPlatformMinimumResponse` | Get minimum platform fees |

## Key Methods

Each message type provides these methods:

| Method | Description |
|--------|-------------|
| `fromPartial({...})` | Construct message from partial data |
| `encode(msg).finish()` | Encode to protobuf `Uint8Array` |
| `decode(bytes)` | Decode from protobuf bytes |
| `toProto(msg)` | Shorthand for `encode(msg).finish()` |
| `toProtoMsg(msg)` | Returns `{ typeUrl, value: Uint8Array }` |
| `fromAmino(obj)` | Convert from Amino format |
| `toAmino(msg)` | Convert to Amino format |
| `fromAminoMsg(obj)` | Convert from `{ type, value }` Amino |
| `toAminoMsg(msg)` | Convert to `{ type, value }` Amino |

## Quick Example

```typescript
import { MsgSend } from '@burnt-labs/xion-types/types/xion/v1/tx';

// 1. Construct
const msg = MsgSend.fromPartial({
  fromAddress: 'xion1sender...',
  toAddress: 'xion1recipient...',
  amount: [{ denom: 'uxion', amount: '1000000' }],
});

// 2. Encode to protobuf bytes
const bytes = MsgSend.encode(msg).finish();

// 3. Decode from bytes
const decoded = MsgSend.decode(bytes);

// 4. Get typeUrl + encoded value (for signing)
const protoMsg = MsgSend.toProtoMsg(msg);
// { typeUrl: "/xion.v1.MsgSend", value: Uint8Array }

// 5. Convert to Amino (legacy format)
const amino = MsgSend.toAminoMsg(msg);
// { type: "xion/MsgSend", value: { from_address: "...", ... } }
```

## Notes

### Platform Percentage

The `platformPercentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a string to handle large numbers

### Bytes Fields (Uint8Array)

WebAuthN fields use `Uint8Array`. Convert to/from base64:

```typescript
// To base64
const base64 = Buffer.from(bytes).toString('base64');

// From base64
const bytes = new Uint8Array(Buffer.from(base64, 'base64'));
```


## Testing Locally

```bash
cd examples/typescript

npm init -y

npm install @burnt-labs/xion-types typescript ts-node @types/node

npm install @cosmjs/math @cosmjs/encoding @cosmjs/proto-signing @cosmjs/amino @cosmjs/stargate

npx tsx xion-v1-transaction-messages.ts
npx tsx xion-v1-query-messages.ts
```