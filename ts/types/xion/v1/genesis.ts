//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface GenesisState {
  platformPercentage: number;
  platformMinimums: Coin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xion.v1.GenesisState";
  value: Uint8Array;
}
/**
 * @name GenesisStateAmino
 * @package xion.v1
 * @see proto type: xion.v1.GenesisState
 */
export interface GenesisStateAmino {
  platform_percentage?: number;
  platform_minimums?: CoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/xion.v1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  platform_percentage: number;
  platform_minimums: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    platformPercentage: 0,
    platformMinimums: []
  };
}
export const GenesisState = {
  typeUrl: "/xion.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.platformPercentage !== 0) {
      writer.uint32(8).uint32(message.platformPercentage);
    }
    for (const v of message.platformMinimums) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.platformPercentage = reader.uint32();
          break;
        case 2:
          message.platformMinimums.push(Coin.decode(reader, reader.uint32()));
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
    message.platformPercentage = object.platformPercentage ?? 0;
    message.platformMinimums = object.platformMinimums?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.platform_percentage !== undefined && object.platform_percentage !== null) {
      message.platformPercentage = object.platform_percentage;
    }
    message.platformMinimums = object.platform_minimums?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.platform_percentage = message.platformPercentage === 0 ? undefined : message.platformPercentage;
    if (message.platformMinimums) {
      obj.platform_minimums = message.platformMinimums.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.platform_minimums = message.platformMinimums;
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
      typeUrl: "/xion.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};