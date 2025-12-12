# Xion TypeScript Protobuf Examples

This directory contains examples demonstrating how to use the generated TypeScript protobuf types for **Xion blockchain messages**.

The files are working code examples you can reference when building applications that interact with Xion. They show the correct field names, types, and methods for each message.

**What they show:**

- **Construct messages** — Create transaction or query objects with the right fields
- **Encode to bytes** — Convert the message to binary format (for sending to the blockchain)
- **Decode from bytes** — Convert binary back to readable objects (for reading responses)
- **Sign-ready format** — Get `{ typeUrl, value }` needed for transaction signing
- **Amino format** — Convert to legacy JSON format (some wallets still use this)

---

## Available Example Files

| Module | File | Description |
|--------|------|-------------|
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm-v1-transaction-messages.ts` | Contract execution, instantiation, migration |
| **cosmwasm.wasm.v1** (CosmWasm) | `cosmwasm-v1-query-messages.ts` | Smart queries, contract info, state reads |
| **xion.v1** (Core) | `xion-v1-transaction-messages.ts` | MsgSend, MsgMultiSend, platform fees |
| **xion.v1** (Core) | `xion-v1-query-messages.ts` | WebAuthN verification, platform queries |
| **xion.jwk.v1** (JWK) | `jwk-v1-transaction-messages.ts` | Audience management, claims |
| **xion.jwk.v1** (JWK) | `jwk-v1-query-messages.ts` | JWT validation, audience queries |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs-v1beta1-transaction-messages.ts` | Cross-chain swaps, host zone management |
| **xion.feeabs.v1beta1** (FeeAbs) | `feeabs-v1beta1-query-messages.ts` | TWAP queries, module balances, configs |
| **xion.mint.v1** (Mint) | `mint-v1-transaction-messages.ts` | MsgUpdateParams (governance) |
| **xion.mint.v1** (Mint) | `mint-v1-query-messages.ts` | Inflation, provisions, params queries |
| **xion.globalfee.v1** (GlobalFee) | `globalfee-v1-query-messages.ts` | Minimum gas prices, bypass rules (query only) |
| **xion.indexer.authz.v1** (Authz Indexer) | `indexer-authz-v1-query-messages.ts` | Grant queries by granter/grantee (query only) |
| **xion.indexer.feegrant.v1** (Feegrant Indexer) | `indexer-feegrant-v1-query-messages.ts` | Fee allowance queries (query only) |

---

## Prerequisites

```bash
npm install @burnt-labs/xion-types
# or
pnpm add @burnt-labs/xion-types
```

---

## Running the Examples

```bash
cd examples/typescript

# Run a specific example
npx tsx cosmwasm-v1-transaction-messages.ts
npx tsx xion-v1-query-messages.ts

# Or with ts-node
npx ts-node cosmwasm-v1-transaction-messages.ts
```

---

## Quick Examples

### MsgSend (Transfer tokens)

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

### MsgExecuteContract (Call a smart contract)

```typescript
import { MsgExecuteContract } from '@burnt-labs/xion-types/types/cosmwasm/wasm/v1/tx';

// Contract message as JSON -> Uint8Array
const contractMsg = JSON.stringify({
  transfer: { recipient: 'xion1recipient...', amount: '1000000' }
});

const msg = MsgExecuteContract.fromPartial({
  sender: 'xion1sender...',
  contract: 'xion1contractaddress...',
  msg: new TextEncoder().encode(contractMsg),
  funds: [{ denom: 'uxion', amount: '1000000' }],
});

const bytes = MsgExecuteContract.encode(msg).finish();
```

### QuerySmartContractState (Query a contract)

```typescript
import { QuerySmartContractStateRequest } from '@burnt-labs/xion-types/types/cosmwasm/wasm/v1/query';

const queryMsg = JSON.stringify({ balance: { address: 'xion1holder...' } });

const request = QuerySmartContractStateRequest.fromPartial({
  address: 'xion1cw20tokencontract...',
  queryData: new TextEncoder().encode(queryMsg),
});

const requestBytes = QuerySmartContractStateRequest.encode(request).finish();
```

---

## Type Naming Convention

TypeScript types mirror the proto package structure:

| Proto Package | TypeScript Import |
|---------------|-------------------|
| `xion.v1.MsgSend` | `@burnt-labs/xion-types/types/xion/v1/tx` |
| `cosmwasm.wasm.v1.MsgExecuteContract` | `@burnt-labs/xion-types/types/cosmwasm/wasm/v1/tx` |
| `cosmos.base.v1beta1.Coin` | `@burnt-labs/xion-types/types/cosmos/base/v1beta1/coin` |

---

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

---

## Notes

### Coin Denomination

- `uxion` = micro-XION (1 XION = 1,000,000 uxion)
- Amount is always a `string` to handle large numbers

### Bytes Fields (Uint8Array)

Contract messages and WebAuthN fields use `Uint8Array`. Convert to/from:

```typescript
// String to Uint8Array
const bytes = new TextEncoder().encode(jsonString);

// Uint8Array to String
const str = new TextDecoder().decode(bytes);

// Base64 encoding
const base64 = Buffer.from(bytes).toString('base64');
const bytes = new Uint8Array(Buffer.from(base64, 'base64'));
```

### Platform Percentage

The `platformPercentage` field is multiplied by 10000:
- `500` = 5%
- `100` = 1%
- `10000` = 100%

---

## Testing Locally

```bash
cd examples/typescript

npm install
npx tsx xion-v1-transaction-messages.ts
```
