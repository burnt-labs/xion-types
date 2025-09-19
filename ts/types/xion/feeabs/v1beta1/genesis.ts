//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./epoch";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the feeabs module's genesis state. */
export interface GenesisState {
  params: Params;
  epochs: EpochInfo[];
  portId: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the feeabs module's genesis state.
 * @name GenesisStateAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  epochs?: EpochInfoAmino[];
  port_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/xion.feeabs.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the feeabs module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  epochs: EpochInfoSDKType[];
  port_id: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    epochs: [],
    portId: ""
  };
}
export const GenesisState = {
  typeUrl: "/xion.feeabs.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.portId = reader.string();
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
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    message.portId = object.portId ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.epochs = object.epochs?.map(e => EpochInfo.fromAmino(e)) || [];
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = message.epochs;
    }
    obj.port_id = message.portId === "" ? undefined : message.portId;
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
      typeUrl: "/xion.feeabs.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};