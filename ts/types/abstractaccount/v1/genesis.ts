//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the genesis state of the abstractaccount module. */
export interface GenesisState {
  params?: Params;
  nextAccountId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/abstractaccount.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the genesis state of the abstractaccount module.
 * @name GenesisStateAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.GenesisState
 */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  next_account_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/abstractaccount.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the genesis state of the abstractaccount module. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  next_account_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    nextAccountId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/abstractaccount.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextAccountId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextAccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextAccountId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextAccountId = object.nextAccountId !== undefined && object.nextAccountId !== null ? BigInt(object.nextAccountId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_account_id !== undefined && object.next_account_id !== null) {
      message.nextAccountId = BigInt(object.next_account_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_account_id = message.nextAccountId !== BigInt(0) ? message.nextAccountId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/abstractaccount.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};