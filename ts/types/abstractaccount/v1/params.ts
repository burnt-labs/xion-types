//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** Params defines the parameters for the abstractaccount module. */
export interface Params {
  /**
   * AllowAllCodeIDs determines whether a Wasm code ID can be used to register
   * AbstractAccounts:
   * - if set to true, any code ID can be used;
   * - if set to false, only code IDs whitelisted in the AllowedCodeIDs list can
   * be used.
   */
  allowAllCodeIds: boolean;
  /**
   * AllowedCodeIDs is the whitelist of Wasm code IDs that can be used to
   * regiseter AbstractAccounts.
   */
  allowedCodeIds: bigint[];
  /**
   * MaxGasBefore is the maximum amount of gas that can be consumed by the
   * contract call in the before_tx decorator.
   * 
   * Must be greater than zero.
   */
  maxGasBefore: bigint;
  /**
   * MaxGasAfter is the maximum amount of gas that can be consumed by the
   * contract call in the after_tx decorator.
   * 
   * Must be greater than zero.
   */
  maxGasAfter: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/abstractaccount.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the abstractaccount module.
 * @name ParamsAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.Params
 */
export interface ParamsAmino {
  /**
   * AllowAllCodeIDs determines whether a Wasm code ID can be used to register
   * AbstractAccounts:
   * - if set to true, any code ID can be used;
   * - if set to false, only code IDs whitelisted in the AllowedCodeIDs list can
   * be used.
   */
  allow_all_code_ids?: boolean;
  /**
   * AllowedCodeIDs is the whitelist of Wasm code IDs that can be used to
   * regiseter AbstractAccounts.
   */
  allowed_code_ids?: string[];
  /**
   * MaxGasBefore is the maximum amount of gas that can be consumed by the
   * contract call in the before_tx decorator.
   * 
   * Must be greater than zero.
   */
  max_gas_before?: string;
  /**
   * MaxGasAfter is the maximum amount of gas that can be consumed by the
   * contract call in the after_tx decorator.
   * 
   * Must be greater than zero.
   */
  max_gas_after?: string;
}
export interface ParamsAminoMsg {
  type: "/abstractaccount.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the abstractaccount module. */
export interface ParamsSDKType {
  allow_all_code_ids: boolean;
  allowed_code_ids: bigint[];
  max_gas_before: bigint;
  max_gas_after: bigint;
}
function createBaseParams(): Params {
  return {
    allowAllCodeIds: false,
    allowedCodeIds: [],
    maxGasBefore: BigInt(0),
    maxGasAfter: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/abstractaccount.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowAllCodeIds === true) {
      writer.uint32(8).bool(message.allowAllCodeIds);
    }
    writer.uint32(18).fork();
    for (const v of message.allowedCodeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.maxGasBefore !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxGasBefore);
    }
    if (message.maxGasAfter !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxGasAfter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowAllCodeIds = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedCodeIds.push(reader.uint64());
            }
          } else {
            message.allowedCodeIds.push(reader.uint64());
          }
          break;
        case 3:
          message.maxGasBefore = reader.uint64();
          break;
        case 4:
          message.maxGasAfter = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowAllCodeIds = object.allowAllCodeIds ?? false;
    message.allowedCodeIds = object.allowedCodeIds?.map(e => BigInt(e.toString())) || [];
    message.maxGasBefore = object.maxGasBefore !== undefined && object.maxGasBefore !== null ? BigInt(object.maxGasBefore.toString()) : BigInt(0);
    message.maxGasAfter = object.maxGasAfter !== undefined && object.maxGasAfter !== null ? BigInt(object.maxGasAfter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.allow_all_code_ids !== undefined && object.allow_all_code_ids !== null) {
      message.allowAllCodeIds = object.allow_all_code_ids;
    }
    message.allowedCodeIds = object.allowed_code_ids?.map(e => BigInt(e)) || [];
    if (object.max_gas_before !== undefined && object.max_gas_before !== null) {
      message.maxGasBefore = BigInt(object.max_gas_before);
    }
    if (object.max_gas_after !== undefined && object.max_gas_after !== null) {
      message.maxGasAfter = BigInt(object.max_gas_after);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.allow_all_code_ids = message.allowAllCodeIds === false ? undefined : message.allowAllCodeIds;
    if (message.allowedCodeIds) {
      obj.allowed_code_ids = message.allowedCodeIds.map(e => e.toString());
    } else {
      obj.allowed_code_ids = message.allowedCodeIds;
    }
    obj.max_gas_before = message.maxGasBefore !== BigInt(0) ? message.maxGasBefore?.toString() : undefined;
    obj.max_gas_after = message.maxGasAfter !== BigInt(0) ? message.maxGasAfter?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/abstractaccount.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};