//@ts-nocheck
import { VKeyWithID, VKeyWithIDAmino, VKeyWithIDSDKType } from "./query";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the zk module's genesis state. */
export interface GenesisState {
  /** vkeys is the list of all verification keys with their IDs */
  vkeys: VKeyWithID[];
  /** params defines the module parameters. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xion.zk.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the zk module's genesis state.
 * @name GenesisStateAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * vkeys is the list of all verification keys with their IDs
   */
  vkeys?: VKeyWithIDAmino[];
  /**
   * params defines the module parameters.
   */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/xion.zk.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the zk module's genesis state. */
export interface GenesisStateSDKType {
  vkeys: VKeyWithIDSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    vkeys: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/xion.zk.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vkeys) {
      VKeyWithID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.vkeys.push(VKeyWithID.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.vkeys = object.vkeys?.map(e => VKeyWithID.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.vkeys = object.vkeys?.map(e => VKeyWithID.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.vkeys) {
      obj.vkeys = message.vkeys.map(e => e ? VKeyWithID.toAmino(e) : undefined);
    } else {
      obj.vkeys = message.vkeys;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/xion.zk.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};