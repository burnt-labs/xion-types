//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * MintIncentiveTokens defines an event emitted on each block from the mint
 * module EndBlocker
 */
export interface MintIncentiveTokens {
  /** The ratio of bonded tokens to total supply */
  bondedRatio: string;
  /** The current inflation rate */
  inflation: string;
  /** The total annual provisions for minting */
  annualProvisions: string;
  /** The amount of tokens needed for incentives */
  neededAmount: bigint;
  /** The amount of tokens collected for incentives */
  collectedAmount: bigint;
  /** The amount of tokens minted */
  mintedAmount: bigint;
  /** The amount of tokens burned */
  burnedAmount: bigint;
}
export interface MintIncentiveTokensProtoMsg {
  typeUrl: "/xion.mint.v1.MintIncentiveTokens";
  value: Uint8Array;
}
/**
 * MintIncentiveTokens defines an event emitted on each block from the mint
 * module EndBlocker
 * @name MintIncentiveTokensAmino
 * @package xion.mint.v1
 * @see proto type: xion.mint.v1.MintIncentiveTokens
 */
export interface MintIncentiveTokensAmino {
  /**
   * The ratio of bonded tokens to total supply
   */
  bonded_ratio?: string;
  /**
   * The current inflation rate
   */
  inflation?: string;
  /**
   * The total annual provisions for minting
   */
  annual_provisions?: string;
  /**
   * The amount of tokens needed for incentives
   */
  needed_amount?: string;
  /**
   * The amount of tokens collected for incentives
   */
  collected_amount?: string;
  /**
   * The amount of tokens minted
   */
  minted_amount?: string;
  /**
   * The amount of tokens burned
   */
  burned_amount?: string;
}
export interface MintIncentiveTokensAminoMsg {
  type: "/xion.mint.v1.MintIncentiveTokens";
  value: MintIncentiveTokensAmino;
}
/**
 * MintIncentiveTokens defines an event emitted on each block from the mint
 * module EndBlocker
 */
export interface MintIncentiveTokensSDKType {
  bonded_ratio: string;
  inflation: string;
  annual_provisions: string;
  needed_amount: bigint;
  collected_amount: bigint;
  minted_amount: bigint;
  burned_amount: bigint;
}
function createBaseMintIncentiveTokens(): MintIncentiveTokens {
  return {
    bondedRatio: "",
    inflation: "",
    annualProvisions: "",
    neededAmount: BigInt(0),
    collectedAmount: BigInt(0),
    mintedAmount: BigInt(0),
    burnedAmount: BigInt(0)
  };
}
export const MintIncentiveTokens = {
  typeUrl: "/xion.mint.v1.MintIncentiveTokens",
  encode(message: MintIncentiveTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondedRatio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.bondedRatio, 18).atomics);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    if (message.neededAmount !== BigInt(0)) {
      writer.uint32(32).uint64(message.neededAmount);
    }
    if (message.collectedAmount !== BigInt(0)) {
      writer.uint32(40).uint64(message.collectedAmount);
    }
    if (message.mintedAmount !== BigInt(0)) {
      writer.uint32(48).uint64(message.mintedAmount);
    }
    if (message.burnedAmount !== BigInt(0)) {
      writer.uint32(56).uint64(message.burnedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MintIncentiveTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintIncentiveTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondedRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.neededAmount = reader.uint64();
          break;
        case 5:
          message.collectedAmount = reader.uint64();
          break;
        case 6:
          message.mintedAmount = reader.uint64();
          break;
        case 7:
          message.burnedAmount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MintIncentiveTokens>): MintIncentiveTokens {
    const message = createBaseMintIncentiveTokens();
    message.bondedRatio = object.bondedRatio ?? "";
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    message.neededAmount = object.neededAmount !== undefined && object.neededAmount !== null ? BigInt(object.neededAmount.toString()) : BigInt(0);
    message.collectedAmount = object.collectedAmount !== undefined && object.collectedAmount !== null ? BigInt(object.collectedAmount.toString()) : BigInt(0);
    message.mintedAmount = object.mintedAmount !== undefined && object.mintedAmount !== null ? BigInt(object.mintedAmount.toString()) : BigInt(0);
    message.burnedAmount = object.burnedAmount !== undefined && object.burnedAmount !== null ? BigInt(object.burnedAmount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MintIncentiveTokensAmino): MintIncentiveTokens {
    const message = createBaseMintIncentiveTokens();
    if (object.bonded_ratio !== undefined && object.bonded_ratio !== null) {
      message.bondedRatio = object.bonded_ratio;
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    }
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    if (object.needed_amount !== undefined && object.needed_amount !== null) {
      message.neededAmount = BigInt(object.needed_amount);
    }
    if (object.collected_amount !== undefined && object.collected_amount !== null) {
      message.collectedAmount = BigInt(object.collected_amount);
    }
    if (object.minted_amount !== undefined && object.minted_amount !== null) {
      message.mintedAmount = BigInt(object.minted_amount);
    }
    if (object.burned_amount !== undefined && object.burned_amount !== null) {
      message.burnedAmount = BigInt(object.burned_amount);
    }
    return message;
  },
  toAmino(message: MintIncentiveTokens): MintIncentiveTokensAmino {
    const obj: any = {};
    obj.bonded_ratio = message.bondedRatio === "" ? undefined : message.bondedRatio;
    obj.inflation = message.inflation === "" ? undefined : message.inflation;
    obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions;
    obj.needed_amount = message.neededAmount !== BigInt(0) ? message.neededAmount?.toString() : undefined;
    obj.collected_amount = message.collectedAmount !== BigInt(0) ? message.collectedAmount?.toString() : undefined;
    obj.minted_amount = message.mintedAmount !== BigInt(0) ? message.mintedAmount?.toString() : undefined;
    obj.burned_amount = message.burnedAmount !== BigInt(0) ? message.burnedAmount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MintIncentiveTokensAminoMsg): MintIncentiveTokens {
    return MintIncentiveTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: MintIncentiveTokensProtoMsg): MintIncentiveTokens {
    return MintIncentiveTokens.decode(message.value);
  },
  toProto(message: MintIncentiveTokens): Uint8Array {
    return MintIncentiveTokens.encode(message).finish();
  },
  toProtoMsg(message: MintIncentiveTokens): MintIncentiveTokensProtoMsg {
    return {
      typeUrl: "/xion.mint.v1.MintIncentiveTokens",
      value: MintIncentiveTokens.encode(message).finish()
    };
  }
};