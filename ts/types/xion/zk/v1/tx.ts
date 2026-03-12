//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** MsgAddVKey is the message for adding a verification key */
export interface MsgAddVKey {
  /** authority is the address that controls the module (governance) */
  authority: string;
  /** name is the unique identifier for this verification key */
  name: string;
  /** description provides context about this verification key */
  description: string;
  /** vkey_json is the JSON representation of the verification key */
  vkeyBytes: Uint8Array;
}
export interface MsgAddVKeyProtoMsg {
  typeUrl: "/xion.zk.v1.MsgAddVKey";
  value: Uint8Array;
}
/**
 * MsgAddVKey is the message for adding a verification key
 * @name MsgAddVKeyAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgAddVKey
 */
export interface MsgAddVKeyAmino {
  /**
   * authority is the address that controls the module (governance)
   */
  authority?: string;
  /**
   * name is the unique identifier for this verification key
   */
  name?: string;
  /**
   * description provides context about this verification key
   */
  description?: string;
  /**
   * vkey_json is the JSON representation of the verification key
   */
  vkey_bytes?: string;
}
export interface MsgAddVKeyAminoMsg {
  type: "zk/MsgAddVKey";
  value: MsgAddVKeyAmino;
}
/** MsgAddVKey is the message for adding a verification key */
export interface MsgAddVKeySDKType {
  authority: string;
  name: string;
  description: string;
  vkey_bytes: Uint8Array;
}
/** MsgAddVKeyResponse is the response for MsgAddVKey */
export interface MsgAddVKeyResponse {
  /** id is the unique numeric identifier assigned to the vkey */
  id: bigint;
}
export interface MsgAddVKeyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.MsgAddVKeyResponse";
  value: Uint8Array;
}
/**
 * MsgAddVKeyResponse is the response for MsgAddVKey
 * @name MsgAddVKeyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgAddVKeyResponse
 */
export interface MsgAddVKeyResponseAmino {
  /**
   * id is the unique numeric identifier assigned to the vkey
   */
  id?: string;
}
export interface MsgAddVKeyResponseAminoMsg {
  type: "/xion.zk.v1.MsgAddVKeyResponse";
  value: MsgAddVKeyResponseAmino;
}
/** MsgAddVKeyResponse is the response for MsgAddVKey */
export interface MsgAddVKeyResponseSDKType {
  id: bigint;
}
/** MsgUpdateVKey is the message for updating a verification key */
export interface MsgUpdateVKey {
  /** authority is the address that controls the module (governance) */
  authority: string;
  /** name is the identifier of the verification key to update */
  name: string;
  /** description provides updated context */
  description: string;
  /** vkey_json is the new JSON representation of the verification key */
  vkeyBytes: Uint8Array;
}
export interface MsgUpdateVKeyProtoMsg {
  typeUrl: "/xion.zk.v1.MsgUpdateVKey";
  value: Uint8Array;
}
/**
 * MsgUpdateVKey is the message for updating a verification key
 * @name MsgUpdateVKeyAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgUpdateVKey
 */
export interface MsgUpdateVKeyAmino {
  /**
   * authority is the address that controls the module (governance)
   */
  authority?: string;
  /**
   * name is the identifier of the verification key to update
   */
  name?: string;
  /**
   * description provides updated context
   */
  description?: string;
  /**
   * vkey_json is the new JSON representation of the verification key
   */
  vkey_bytes?: string;
}
export interface MsgUpdateVKeyAminoMsg {
  type: "zk/MsgUpdateVKey";
  value: MsgUpdateVKeyAmino;
}
/** MsgUpdateVKey is the message for updating a verification key */
export interface MsgUpdateVKeySDKType {
  authority: string;
  name: string;
  description: string;
  vkey_bytes: Uint8Array;
}
/** MsgUpdateVKeyResponse is the response for MsgUpdateVKey */
export interface MsgUpdateVKeyResponse {}
export interface MsgUpdateVKeyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.MsgUpdateVKeyResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateVKeyResponse is the response for MsgUpdateVKey
 * @name MsgUpdateVKeyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgUpdateVKeyResponse
 */
export interface MsgUpdateVKeyResponseAmino {}
export interface MsgUpdateVKeyResponseAminoMsg {
  type: "/xion.zk.v1.MsgUpdateVKeyResponse";
  value: MsgUpdateVKeyResponseAmino;
}
/** MsgUpdateVKeyResponse is the response for MsgUpdateVKey */
export interface MsgUpdateVKeyResponseSDKType {}
/** MsgRemoveVKey is the message for removing a verification key */
export interface MsgRemoveVKey {
  /** authority is the address that controls the module (governance) */
  authority: string;
  /** name is the identifier of the verification key to remove */
  name: string;
}
export interface MsgRemoveVKeyProtoMsg {
  typeUrl: "/xion.zk.v1.MsgRemoveVKey";
  value: Uint8Array;
}
/**
 * MsgRemoveVKey is the message for removing a verification key
 * @name MsgRemoveVKeyAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgRemoveVKey
 */
export interface MsgRemoveVKeyAmino {
  /**
   * authority is the address that controls the module (governance)
   */
  authority?: string;
  /**
   * name is the identifier of the verification key to remove
   */
  name?: string;
}
export interface MsgRemoveVKeyAminoMsg {
  type: "zk/MsgRemoveVKey";
  value: MsgRemoveVKeyAmino;
}
/** MsgRemoveVKey is the message for removing a verification key */
export interface MsgRemoveVKeySDKType {
  authority: string;
  name: string;
}
/** MsgRemoveVKeyResponse is the response for MsgRemoveVKey */
export interface MsgRemoveVKeyResponse {}
export interface MsgRemoveVKeyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.MsgRemoveVKeyResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveVKeyResponse is the response for MsgRemoveVKey
 * @name MsgRemoveVKeyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgRemoveVKeyResponse
 */
export interface MsgRemoveVKeyResponseAmino {}
export interface MsgRemoveVKeyResponseAminoMsg {
  type: "/xion.zk.v1.MsgRemoveVKeyResponse";
  value: MsgRemoveVKeyResponseAmino;
}
/** MsgRemoveVKeyResponse is the response for MsgRemoveVKey */
export interface MsgRemoveVKeyResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/xion.zk.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * params defines the parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/xion.zk.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/xion.zk.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/xion.zk.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgAddVKey(): MsgAddVKey {
  return {
    authority: "",
    name: "",
    description: "",
    vkeyBytes: new Uint8Array()
  };
}
export const MsgAddVKey = {
  typeUrl: "/xion.zk.v1.MsgAddVKey",
  encode(message: MsgAddVKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.vkeyBytes.length !== 0) {
      writer.uint32(34).bytes(message.vkeyBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddVKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.vkeyBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddVKey>): MsgAddVKey {
    const message = createBaseMsgAddVKey();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.vkeyBytes = object.vkeyBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgAddVKeyAmino): MsgAddVKey {
    const message = createBaseMsgAddVKey();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.vkey_bytes !== undefined && object.vkey_bytes !== null) {
      message.vkeyBytes = bytesFromBase64(object.vkey_bytes);
    }
    return message;
  },
  toAmino(message: MsgAddVKey): MsgAddVKeyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.vkey_bytes = message.vkeyBytes ? base64FromBytes(message.vkeyBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddVKeyAminoMsg): MsgAddVKey {
    return MsgAddVKey.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddVKey): MsgAddVKeyAminoMsg {
    return {
      type: "zk/MsgAddVKey",
      value: MsgAddVKey.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddVKeyProtoMsg): MsgAddVKey {
    return MsgAddVKey.decode(message.value);
  },
  toProto(message: MsgAddVKey): Uint8Array {
    return MsgAddVKey.encode(message).finish();
  },
  toProtoMsg(message: MsgAddVKey): MsgAddVKeyProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgAddVKey",
      value: MsgAddVKey.encode(message).finish()
    };
  }
};
function createBaseMsgAddVKeyResponse(): MsgAddVKeyResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgAddVKeyResponse = {
  typeUrl: "/xion.zk.v1.MsgAddVKeyResponse",
  encode(message: MsgAddVKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddVKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddVKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddVKeyResponse>): MsgAddVKeyResponse {
    const message = createBaseMsgAddVKeyResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddVKeyResponseAmino): MsgAddVKeyResponse {
    const message = createBaseMsgAddVKeyResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgAddVKeyResponse): MsgAddVKeyResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddVKeyResponseAminoMsg): MsgAddVKeyResponse {
    return MsgAddVKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddVKeyResponseProtoMsg): MsgAddVKeyResponse {
    return MsgAddVKeyResponse.decode(message.value);
  },
  toProto(message: MsgAddVKeyResponse): Uint8Array {
    return MsgAddVKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddVKeyResponse): MsgAddVKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgAddVKeyResponse",
      value: MsgAddVKeyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVKey(): MsgUpdateVKey {
  return {
    authority: "",
    name: "",
    description: "",
    vkeyBytes: new Uint8Array()
  };
}
export const MsgUpdateVKey = {
  typeUrl: "/xion.zk.v1.MsgUpdateVKey",
  encode(message: MsgUpdateVKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.vkeyBytes.length !== 0) {
      writer.uint32(34).bytes(message.vkeyBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.vkeyBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateVKey>): MsgUpdateVKey {
    const message = createBaseMsgUpdateVKey();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.vkeyBytes = object.vkeyBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgUpdateVKeyAmino): MsgUpdateVKey {
    const message = createBaseMsgUpdateVKey();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.vkey_bytes !== undefined && object.vkey_bytes !== null) {
      message.vkeyBytes = bytesFromBase64(object.vkey_bytes);
    }
    return message;
  },
  toAmino(message: MsgUpdateVKey): MsgUpdateVKeyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.vkey_bytes = message.vkeyBytes ? base64FromBytes(message.vkeyBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVKeyAminoMsg): MsgUpdateVKey {
    return MsgUpdateVKey.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateVKey): MsgUpdateVKeyAminoMsg {
    return {
      type: "zk/MsgUpdateVKey",
      value: MsgUpdateVKey.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateVKeyProtoMsg): MsgUpdateVKey {
    return MsgUpdateVKey.decode(message.value);
  },
  toProto(message: MsgUpdateVKey): Uint8Array {
    return MsgUpdateVKey.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVKey): MsgUpdateVKeyProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgUpdateVKey",
      value: MsgUpdateVKey.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateVKeyResponse(): MsgUpdateVKeyResponse {
  return {};
}
export const MsgUpdateVKeyResponse = {
  typeUrl: "/xion.zk.v1.MsgUpdateVKeyResponse",
  encode(_: MsgUpdateVKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVKeyResponse();
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
  fromPartial(_: Partial<MsgUpdateVKeyResponse>): MsgUpdateVKeyResponse {
    const message = createBaseMsgUpdateVKeyResponse();
    return message;
  },
  fromAmino(_: MsgUpdateVKeyResponseAmino): MsgUpdateVKeyResponse {
    const message = createBaseMsgUpdateVKeyResponse();
    return message;
  },
  toAmino(_: MsgUpdateVKeyResponse): MsgUpdateVKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVKeyResponseAminoMsg): MsgUpdateVKeyResponse {
    return MsgUpdateVKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVKeyResponseProtoMsg): MsgUpdateVKeyResponse {
    return MsgUpdateVKeyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVKeyResponse): Uint8Array {
    return MsgUpdateVKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVKeyResponse): MsgUpdateVKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgUpdateVKeyResponse",
      value: MsgUpdateVKeyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveVKey(): MsgRemoveVKey {
  return {
    authority: "",
    name: ""
  };
}
export const MsgRemoveVKey = {
  typeUrl: "/xion.zk.v1.MsgRemoveVKey",
  encode(message: MsgRemoveVKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveVKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveVKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveVKey>): MsgRemoveVKey {
    const message = createBaseMsgRemoveVKey();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveVKeyAmino): MsgRemoveVKey {
    const message = createBaseMsgRemoveVKey();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgRemoveVKey): MsgRemoveVKeyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveVKeyAminoMsg): MsgRemoveVKey {
    return MsgRemoveVKey.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveVKey): MsgRemoveVKeyAminoMsg {
    return {
      type: "zk/MsgRemoveVKey",
      value: MsgRemoveVKey.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveVKeyProtoMsg): MsgRemoveVKey {
    return MsgRemoveVKey.decode(message.value);
  },
  toProto(message: MsgRemoveVKey): Uint8Array {
    return MsgRemoveVKey.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveVKey): MsgRemoveVKeyProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgRemoveVKey",
      value: MsgRemoveVKey.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveVKeyResponse(): MsgRemoveVKeyResponse {
  return {};
}
export const MsgRemoveVKeyResponse = {
  typeUrl: "/xion.zk.v1.MsgRemoveVKeyResponse",
  encode(_: MsgRemoveVKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveVKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveVKeyResponse();
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
  fromPartial(_: Partial<MsgRemoveVKeyResponse>): MsgRemoveVKeyResponse {
    const message = createBaseMsgRemoveVKeyResponse();
    return message;
  },
  fromAmino(_: MsgRemoveVKeyResponseAmino): MsgRemoveVKeyResponse {
    const message = createBaseMsgRemoveVKeyResponse();
    return message;
  },
  toAmino(_: MsgRemoveVKeyResponse): MsgRemoveVKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveVKeyResponseAminoMsg): MsgRemoveVKeyResponse {
    return MsgRemoveVKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveVKeyResponseProtoMsg): MsgRemoveVKeyResponse {
    return MsgRemoveVKeyResponse.decode(message.value);
  },
  toProto(message: MsgRemoveVKeyResponse): Uint8Array {
    return MsgRemoveVKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveVKeyResponse): MsgRemoveVKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgRemoveVKeyResponse",
      value: MsgRemoveVKeyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/xion.zk.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/xion.zk.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};