//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Input, InputAmino, InputSDKType, Output, OutputAmino, OutputSDKType } from "../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../binary";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
export interface MsgSendProtoMsg {
  typeUrl: "/xion.v1.MsgSend";
  value: Uint8Array;
}
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSendAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSend
 */
export interface MsgSendAmino {
  from_address?: string;
  to_address?: string;
  amount: CoinAmino[];
}
export interface MsgSendAminoMsg {
  type: "xion/MsgSend";
  value: MsgSendAmino;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/xion.v1.MsgSendResponse";
  value: Uint8Array;
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSendResponse
 */
export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
  type: "/xion.v1.MsgSendResponse";
  value: MsgSendResponseAmino;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: Input[];
  outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
  typeUrl: "/xion.v1.MsgMultiSend";
  value: Uint8Array;
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSendAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgMultiSend
 */
export interface MsgMultiSendAmino {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: InputAmino[];
  outputs: OutputAmino[];
}
export interface MsgMultiSendAminoMsg {
  type: "xion/MsgMultiSend";
  value: MsgMultiSendAmino;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}
export interface MsgMultiSendResponseProtoMsg {
  typeUrl: "/xion.v1.MsgMultiSendResponse";
  value: Uint8Array;
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgMultiSendResponse
 */
export interface MsgMultiSendResponseAmino {}
export interface MsgMultiSendResponseAminoMsg {
  type: "/xion.v1.MsgMultiSendResponse";
  value: MsgMultiSendResponseAmino;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {}
export interface MsgSetPlatformPercentage {
  authority: string;
  /** platform_percentage is the platform fee percentage to multiplied by 10000 */
  platformPercentage: number;
}
export interface MsgSetPlatformPercentageProtoMsg {
  typeUrl: "/xion.v1.MsgSetPlatformPercentage";
  value: Uint8Array;
}
/**
 * @name MsgSetPlatformPercentageAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSetPlatformPercentage
 */
export interface MsgSetPlatformPercentageAmino {
  authority?: string;
  /**
   * platform_percentage is the platform fee percentage to multiplied by 10000
   */
  platform_percentage?: number;
}
export interface MsgSetPlatformPercentageAminoMsg {
  type: "xion/MsgSetPlatformPercentage";
  value: MsgSetPlatformPercentageAmino;
}
export interface MsgSetPlatformPercentageSDKType {
  authority: string;
  platform_percentage: number;
}
export interface MsgSetPlatformPercentageResponse {}
export interface MsgSetPlatformPercentageResponseProtoMsg {
  typeUrl: "/xion.v1.MsgSetPlatformPercentageResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetPlatformPercentageResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSetPlatformPercentageResponse
 */
export interface MsgSetPlatformPercentageResponseAmino {}
export interface MsgSetPlatformPercentageResponseAminoMsg {
  type: "/xion.v1.MsgSetPlatformPercentageResponse";
  value: MsgSetPlatformPercentageResponseAmino;
}
export interface MsgSetPlatformPercentageResponseSDKType {}
export interface MsgSetPlatformMinimum {
  authority: string;
  minimums: Coin[];
}
export interface MsgSetPlatformMinimumProtoMsg {
  typeUrl: "/xion.v1.MsgSetPlatformMinimum";
  value: Uint8Array;
}
/**
 * @name MsgSetPlatformMinimumAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSetPlatformMinimum
 */
export interface MsgSetPlatformMinimumAmino {
  authority?: string;
  minimums: CoinAmino[];
}
export interface MsgSetPlatformMinimumAminoMsg {
  type: "xion/MsgSetPlatformMinimum";
  value: MsgSetPlatformMinimumAmino;
}
export interface MsgSetPlatformMinimumSDKType {
  authority: string;
  minimums: CoinSDKType[];
}
export interface MsgSetPlatformMinimumResponse {}
export interface MsgSetPlatformMinimumResponseProtoMsg {
  typeUrl: "/xion.v1.MsgSetPlatformMinimumResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetPlatformMinimumResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.MsgSetPlatformMinimumResponse
 */
export interface MsgSetPlatformMinimumResponseAmino {}
export interface MsgSetPlatformMinimumResponseAminoMsg {
  type: "/xion.v1.MsgSetPlatformMinimumResponse";
  value: MsgSetPlatformMinimumResponseAmino;
}
export interface MsgSetPlatformMinimumResponseSDKType {}
function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
export const MsgSend = {
  typeUrl: "/xion.v1.MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSendAmino): MsgSend {
    const message = createBaseMsgSend();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSend): MsgSendAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
    return MsgSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSend): MsgSendAminoMsg {
    return {
      type: "xion/MsgSend",
      value: MsgSend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
    return MsgSend.decode(message.value);
  },
  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  typeUrl: "/xion.v1.MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_: MsgSendResponse): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
    return MsgSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: []
  };
}
export const MsgMultiSend = {
  typeUrl: "/xion.v1.MsgMultiSend",
  encode(message: MsgMultiSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgMultiSend>): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMultiSendAmino): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromAmino(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiSend): MsgMultiSendAmino {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map(e => e ? Input.toAmino(e) : undefined);
    } else {
      obj.inputs = message.inputs;
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? Output.toAmino(e) : undefined);
    } else {
      obj.outputs = message.outputs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiSendAminoMsg): MsgMultiSend {
    return MsgMultiSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMultiSend): MsgMultiSendAminoMsg {
    return {
      type: "xion/MsgMultiSend",
      value: MsgMultiSend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMultiSendProtoMsg): MsgMultiSend {
    return MsgMultiSend.decode(message.value);
  },
  toProto(message: MsgMultiSend): Uint8Array {
    return MsgMultiSend.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSend): MsgMultiSendProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgMultiSend",
      value: MsgMultiSend.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}
export const MsgMultiSendResponse = {
  typeUrl: "/xion.v1.MsgMultiSendResponse",
  encode(_: MsgMultiSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  fromAmino(_: MsgMultiSendResponseAmino): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  toAmino(_: MsgMultiSendResponse): MsgMultiSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiSendResponseAminoMsg): MsgMultiSendResponse {
    return MsgMultiSendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSendResponseProtoMsg): MsgMultiSendResponse {
    return MsgMultiSendResponse.decode(message.value);
  },
  toProto(message: MsgMultiSendResponse): Uint8Array {
    return MsgMultiSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgMultiSendResponse",
      value: MsgMultiSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPlatformPercentage(): MsgSetPlatformPercentage {
  return {
    authority: "",
    platformPercentage: 0
  };
}
export const MsgSetPlatformPercentage = {
  typeUrl: "/xion.v1.MsgSetPlatformPercentage",
  encode(message: MsgSetPlatformPercentage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.platformPercentage !== 0) {
      writer.uint32(16).uint32(message.platformPercentage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPlatformPercentage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPlatformPercentage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.platformPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetPlatformPercentage>): MsgSetPlatformPercentage {
    const message = createBaseMsgSetPlatformPercentage();
    message.authority = object.authority ?? "";
    message.platformPercentage = object.platformPercentage ?? 0;
    return message;
  },
  fromAmino(object: MsgSetPlatformPercentageAmino): MsgSetPlatformPercentage {
    const message = createBaseMsgSetPlatformPercentage();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.platform_percentage !== undefined && object.platform_percentage !== null) {
      message.platformPercentage = object.platform_percentage;
    }
    return message;
  },
  toAmino(message: MsgSetPlatformPercentage): MsgSetPlatformPercentageAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.platform_percentage = message.platformPercentage === 0 ? undefined : message.platformPercentage;
    return obj;
  },
  fromAminoMsg(object: MsgSetPlatformPercentageAminoMsg): MsgSetPlatformPercentage {
    return MsgSetPlatformPercentage.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPlatformPercentage): MsgSetPlatformPercentageAminoMsg {
    return {
      type: "xion/MsgSetPlatformPercentage",
      value: MsgSetPlatformPercentage.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPlatformPercentageProtoMsg): MsgSetPlatformPercentage {
    return MsgSetPlatformPercentage.decode(message.value);
  },
  toProto(message: MsgSetPlatformPercentage): Uint8Array {
    return MsgSetPlatformPercentage.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPlatformPercentage): MsgSetPlatformPercentageProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSetPlatformPercentage",
      value: MsgSetPlatformPercentage.encode(message).finish()
    };
  }
};
function createBaseMsgSetPlatformPercentageResponse(): MsgSetPlatformPercentageResponse {
  return {};
}
export const MsgSetPlatformPercentageResponse = {
  typeUrl: "/xion.v1.MsgSetPlatformPercentageResponse",
  encode(_: MsgSetPlatformPercentageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPlatformPercentageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPlatformPercentageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetPlatformPercentageResponse>): MsgSetPlatformPercentageResponse {
    const message = createBaseMsgSetPlatformPercentageResponse();
    return message;
  },
  fromAmino(_: MsgSetPlatformPercentageResponseAmino): MsgSetPlatformPercentageResponse {
    const message = createBaseMsgSetPlatformPercentageResponse();
    return message;
  },
  toAmino(_: MsgSetPlatformPercentageResponse): MsgSetPlatformPercentageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPlatformPercentageResponseAminoMsg): MsgSetPlatformPercentageResponse {
    return MsgSetPlatformPercentageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPlatformPercentageResponseProtoMsg): MsgSetPlatformPercentageResponse {
    return MsgSetPlatformPercentageResponse.decode(message.value);
  },
  toProto(message: MsgSetPlatformPercentageResponse): Uint8Array {
    return MsgSetPlatformPercentageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPlatformPercentageResponse): MsgSetPlatformPercentageResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSetPlatformPercentageResponse",
      value: MsgSetPlatformPercentageResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPlatformMinimum(): MsgSetPlatformMinimum {
  return {
    authority: "",
    minimums: []
  };
}
export const MsgSetPlatformMinimum = {
  typeUrl: "/xion.v1.MsgSetPlatformMinimum",
  encode(message: MsgSetPlatformMinimum, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.minimums) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPlatformMinimum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPlatformMinimum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.minimums.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSetPlatformMinimum>): MsgSetPlatformMinimum {
    const message = createBaseMsgSetPlatformMinimum();
    message.authority = object.authority ?? "";
    message.minimums = object.minimums?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetPlatformMinimumAmino): MsgSetPlatformMinimum {
    const message = createBaseMsgSetPlatformMinimum();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.minimums = object.minimums?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetPlatformMinimum): MsgSetPlatformMinimumAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.minimums) {
      obj.minimums = message.minimums.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.minimums = message.minimums;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetPlatformMinimumAminoMsg): MsgSetPlatformMinimum {
    return MsgSetPlatformMinimum.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetPlatformMinimum): MsgSetPlatformMinimumAminoMsg {
    return {
      type: "xion/MsgSetPlatformMinimum",
      value: MsgSetPlatformMinimum.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetPlatformMinimumProtoMsg): MsgSetPlatformMinimum {
    return MsgSetPlatformMinimum.decode(message.value);
  },
  toProto(message: MsgSetPlatformMinimum): Uint8Array {
    return MsgSetPlatformMinimum.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPlatformMinimum): MsgSetPlatformMinimumProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSetPlatformMinimum",
      value: MsgSetPlatformMinimum.encode(message).finish()
    };
  }
};
function createBaseMsgSetPlatformMinimumResponse(): MsgSetPlatformMinimumResponse {
  return {};
}
export const MsgSetPlatformMinimumResponse = {
  typeUrl: "/xion.v1.MsgSetPlatformMinimumResponse",
  encode(_: MsgSetPlatformMinimumResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetPlatformMinimumResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetPlatformMinimumResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgSetPlatformMinimumResponse>): MsgSetPlatformMinimumResponse {
    const message = createBaseMsgSetPlatformMinimumResponse();
    return message;
  },
  fromAmino(_: MsgSetPlatformMinimumResponseAmino): MsgSetPlatformMinimumResponse {
    const message = createBaseMsgSetPlatformMinimumResponse();
    return message;
  },
  toAmino(_: MsgSetPlatformMinimumResponse): MsgSetPlatformMinimumResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetPlatformMinimumResponseAminoMsg): MsgSetPlatformMinimumResponse {
    return MsgSetPlatformMinimumResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPlatformMinimumResponseProtoMsg): MsgSetPlatformMinimumResponse {
    return MsgSetPlatformMinimumResponse.decode(message.value);
  },
  toProto(message: MsgSetPlatformMinimumResponse): Uint8Array {
    return MsgSetPlatformMinimumResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPlatformMinimumResponse): MsgSetPlatformMinimumResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.MsgSetPlatformMinimumResponse",
      value: MsgSetPlatformMinimumResponse.encode(message).finish()
    };
  }
};