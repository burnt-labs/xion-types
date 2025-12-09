//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Audience, AudienceAmino, AudienceSDKType } from "./audience";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the jwk module's genesis state. */
export interface GenesisState {
  /** The module parameters */
  params: Params;
  /** List of all audiences */
  audienceList: Audience[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xion.jwk.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the jwk module's genesis state.
 * @name GenesisStateAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * The module parameters
   */
  params?: ParamsAmino;
  /**
   * List of all audiences
   */
  audience_list?: AudienceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/xion.jwk.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the jwk module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  audience_list: AudienceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    audienceList: []
  };
}
export const GenesisState = {
  typeUrl: "/xion.jwk.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.audienceList) {
      Audience.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.audienceList.push(Audience.decode(reader, reader.uint32()));
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
    message.audienceList = object.audienceList?.map(e => Audience.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.audienceList = object.audience_list?.map(e => Audience.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.audienceList) {
      obj.audience_list = message.audienceList.map(e => e ? Audience.toAmino(e) : undefined);
    } else {
      obj.audience_list = message.audienceList;
    }
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
      typeUrl: "/xion.jwk.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};