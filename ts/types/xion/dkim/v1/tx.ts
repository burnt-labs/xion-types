//@ts-nocheck
import { DkimPubKey, DkimPubKeyAmino, DkimPubKeySDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/xion.dkim.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
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
  typeUrl: "/xion.dkim.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgUpdateParams
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
  type: "/xion.dkim.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgAddDkimPubKey is the Msg/AddDkimPubKey request type. */
export interface MsgAddDkimPubKeys {
  /** authority is the address of the governance account. */
  authority: string;
  /** dkim_pubkeys defines the DKIM public keys to add. */
  dkimPubkeys: DkimPubKey[];
}
export interface MsgAddDkimPubKeysProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys";
  value: Uint8Array;
}
/**
 * MsgAddDkimPubKey is the Msg/AddDkimPubKey request type.
 * @name MsgAddDkimPubKeysAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgAddDkimPubKeys
 */
export interface MsgAddDkimPubKeysAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * dkim_pubkeys defines the DKIM public keys to add.
   */
  dkim_pubkeys?: DkimPubKeyAmino[];
}
export interface MsgAddDkimPubKeysAminoMsg {
  type: "/xion.dkim.v1.MsgAddDkimPubKeys";
  value: MsgAddDkimPubKeysAmino;
}
/** MsgAddDkimPubKey is the Msg/AddDkimPubKey request type. */
export interface MsgAddDkimPubKeysSDKType {
  authority: string;
  dkim_pubkeys: DkimPubKeySDKType[];
}
/**
 * MsgAddDkimPubKeyResponse defines the response structure for executing a
 * MsgAddDkimPubKey message.
 */
export interface MsgAddDkimPubKeysResponse {}
export interface MsgAddDkimPubKeysResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeysResponse";
  value: Uint8Array;
}
/**
 * MsgAddDkimPubKeyResponse defines the response structure for executing a
 * MsgAddDkimPubKey message.
 * @name MsgAddDkimPubKeysResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgAddDkimPubKeysResponse
 */
export interface MsgAddDkimPubKeysResponseAmino {}
export interface MsgAddDkimPubKeysResponseAminoMsg {
  type: "/xion.dkim.v1.MsgAddDkimPubKeysResponse";
  value: MsgAddDkimPubKeysResponseAmino;
}
/**
 * MsgAddDkimPubKeyResponse defines the response structure for executing a
 * MsgAddDkimPubKey message.
 */
export interface MsgAddDkimPubKeysResponseSDKType {}
/** MsgRemoveDkimPubKey is the Msg/RemoveDkimPubKey request type. */
export interface MsgRemoveDkimPubKey {
  /** authority is the address of the governance account. */
  authority: string;
  /** selector defines the DKIM selector to remove. */
  selector: string;
  /** domain defines the domain for the DKIM key to remove. */
  domain: string;
}
export interface MsgRemoveDkimPubKeyProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey";
  value: Uint8Array;
}
/**
 * MsgRemoveDkimPubKey is the Msg/RemoveDkimPubKey request type.
 * @name MsgRemoveDkimPubKeyAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgRemoveDkimPubKey
 */
export interface MsgRemoveDkimPubKeyAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * selector defines the DKIM selector to remove.
   */
  selector?: string;
  /**
   * domain defines the domain for the DKIM key to remove.
   */
  domain?: string;
}
export interface MsgRemoveDkimPubKeyAminoMsg {
  type: "/xion.dkim.v1.MsgRemoveDkimPubKey";
  value: MsgRemoveDkimPubKeyAmino;
}
/** MsgRemoveDkimPubKey is the Msg/RemoveDkimPubKey request type. */
export interface MsgRemoveDkimPubKeySDKType {
  authority: string;
  selector: string;
  domain: string;
}
/**
 * MsgRemoveDkimPubKeyResponse defines the response structure for executing a
 * MsgRemoveDkimPubKey message.
 */
export interface MsgRemoveDkimPubKeyResponse {}
export interface MsgRemoveDkimPubKeyResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKeyResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveDkimPubKeyResponse defines the response structure for executing a
 * MsgRemoveDkimPubKey message.
 * @name MsgRemoveDkimPubKeyResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgRemoveDkimPubKeyResponse
 */
export interface MsgRemoveDkimPubKeyResponseAmino {}
export interface MsgRemoveDkimPubKeyResponseAminoMsg {
  type: "/xion.dkim.v1.MsgRemoveDkimPubKeyResponse";
  value: MsgRemoveDkimPubKeyResponseAmino;
}
/**
 * MsgRemoveDkimPubKeyResponse defines the response structure for executing a
 * MsgRemoveDkimPubKey message.
 */
export interface MsgRemoveDkimPubKeyResponseSDKType {}
/** MsgRevokeDkimPubKey is the Msg/RevokeDkimPubKey request type. */
export interface MsgRevokeDkimPubKey {
  /** signer defines the address of the signer revoking the key. */
  signer: string;
  /** domain defines the domain for the DKIM key to revoke. */
  domain: string;
  /** priv_key defines the private key used to prove ownership for revocation. */
  privKey: Uint8Array;
}
export interface MsgRevokeDkimPubKeyProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey";
  value: Uint8Array;
}
/**
 * MsgRevokeDkimPubKey is the Msg/RevokeDkimPubKey request type.
 * @name MsgRevokeDkimPubKeyAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgRevokeDkimPubKey
 */
export interface MsgRevokeDkimPubKeyAmino {
  /**
   * signer defines the address of the signer revoking the key.
   */
  signer?: string;
  /**
   * domain defines the domain for the DKIM key to revoke.
   */
  domain?: string;
  /**
   * priv_key defines the private key used to prove ownership for revocation.
   */
  priv_key?: string;
}
export interface MsgRevokeDkimPubKeyAminoMsg {
  type: "/xion.dkim.v1.MsgRevokeDkimPubKey";
  value: MsgRevokeDkimPubKeyAmino;
}
/** MsgRevokeDkimPubKey is the Msg/RevokeDkimPubKey request type. */
export interface MsgRevokeDkimPubKeySDKType {
  signer: string;
  domain: string;
  priv_key: Uint8Array;
}
/**
 * MsgRevokeDkimPubKeyResponse defines the response structure for executing a
 * MsgRevokeDkimPubKey message.
 */
export interface MsgRevokeDkimPubKeyResponse {}
export interface MsgRevokeDkimPubKeyResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKeyResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeDkimPubKeyResponse defines the response structure for executing a
 * MsgRevokeDkimPubKey message.
 * @name MsgRevokeDkimPubKeyResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.MsgRevokeDkimPubKeyResponse
 */
export interface MsgRevokeDkimPubKeyResponseAmino {}
export interface MsgRevokeDkimPubKeyResponseAminoMsg {
  type: "/xion.dkim.v1.MsgRevokeDkimPubKeyResponse";
  value: MsgRevokeDkimPubKeyResponseAmino;
}
/**
 * MsgRevokeDkimPubKeyResponse defines the response structure for executing a
 * MsgRevokeDkimPubKey message.
 */
export interface MsgRevokeDkimPubKeyResponseSDKType {}
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/xion.dkim.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/xion.dkim.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
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
  typeUrl: "/xion.dkim.v1.MsgUpdateParams",
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
      typeUrl: "/xion.dkim.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgAddDkimPubKeys(): MsgAddDkimPubKeys {
  return {
    authority: "",
    dkimPubkeys: []
  };
}
export const MsgAddDkimPubKeys = {
  typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys",
  encode(message: MsgAddDkimPubKeys, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.dkimPubkeys) {
      DkimPubKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddDkimPubKeys {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDkimPubKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.dkimPubkeys.push(DkimPubKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddDkimPubKeys>): MsgAddDkimPubKeys {
    const message = createBaseMsgAddDkimPubKeys();
    message.authority = object.authority ?? "";
    message.dkimPubkeys = object.dkimPubkeys?.map(e => DkimPubKey.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddDkimPubKeysAmino): MsgAddDkimPubKeys {
    const message = createBaseMsgAddDkimPubKeys();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.dkimPubkeys = object.dkim_pubkeys?.map(e => DkimPubKey.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgAddDkimPubKeys): MsgAddDkimPubKeysAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.dkimPubkeys) {
      obj.dkim_pubkeys = message.dkimPubkeys.map(e => e ? DkimPubKey.toAmino(e) : undefined);
    } else {
      obj.dkim_pubkeys = message.dkimPubkeys;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddDkimPubKeysAminoMsg): MsgAddDkimPubKeys {
    return MsgAddDkimPubKeys.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddDkimPubKeysProtoMsg): MsgAddDkimPubKeys {
    return MsgAddDkimPubKeys.decode(message.value);
  },
  toProto(message: MsgAddDkimPubKeys): Uint8Array {
    return MsgAddDkimPubKeys.encode(message).finish();
  },
  toProtoMsg(message: MsgAddDkimPubKeys): MsgAddDkimPubKeysProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys",
      value: MsgAddDkimPubKeys.encode(message).finish()
    };
  }
};
function createBaseMsgAddDkimPubKeysResponse(): MsgAddDkimPubKeysResponse {
  return {};
}
export const MsgAddDkimPubKeysResponse = {
  typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeysResponse",
  encode(_: MsgAddDkimPubKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddDkimPubKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDkimPubKeysResponse();
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
  fromPartial(_: Partial<MsgAddDkimPubKeysResponse>): MsgAddDkimPubKeysResponse {
    const message = createBaseMsgAddDkimPubKeysResponse();
    return message;
  },
  fromAmino(_: MsgAddDkimPubKeysResponseAmino): MsgAddDkimPubKeysResponse {
    const message = createBaseMsgAddDkimPubKeysResponse();
    return message;
  },
  toAmino(_: MsgAddDkimPubKeysResponse): MsgAddDkimPubKeysResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddDkimPubKeysResponseAminoMsg): MsgAddDkimPubKeysResponse {
    return MsgAddDkimPubKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddDkimPubKeysResponseProtoMsg): MsgAddDkimPubKeysResponse {
    return MsgAddDkimPubKeysResponse.decode(message.value);
  },
  toProto(message: MsgAddDkimPubKeysResponse): Uint8Array {
    return MsgAddDkimPubKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddDkimPubKeysResponse): MsgAddDkimPubKeysResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeysResponse",
      value: MsgAddDkimPubKeysResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveDkimPubKey(): MsgRemoveDkimPubKey {
  return {
    authority: "",
    selector: "",
    domain: ""
  };
}
export const MsgRemoveDkimPubKey = {
  typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey",
  encode(message: MsgRemoveDkimPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.selector !== "") {
      writer.uint32(18).string(message.selector);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveDkimPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveDkimPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.selector = reader.string();
          break;
        case 3:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveDkimPubKey>): MsgRemoveDkimPubKey {
    const message = createBaseMsgRemoveDkimPubKey();
    message.authority = object.authority ?? "";
    message.selector = object.selector ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveDkimPubKeyAmino): MsgRemoveDkimPubKey {
    const message = createBaseMsgRemoveDkimPubKey();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    return message;
  },
  toAmino(message: MsgRemoveDkimPubKey): MsgRemoveDkimPubKeyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.domain = message.domain === "" ? undefined : message.domain;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveDkimPubKeyAminoMsg): MsgRemoveDkimPubKey {
    return MsgRemoveDkimPubKey.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveDkimPubKeyProtoMsg): MsgRemoveDkimPubKey {
    return MsgRemoveDkimPubKey.decode(message.value);
  },
  toProto(message: MsgRemoveDkimPubKey): Uint8Array {
    return MsgRemoveDkimPubKey.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveDkimPubKey): MsgRemoveDkimPubKeyProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey",
      value: MsgRemoveDkimPubKey.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveDkimPubKeyResponse(): MsgRemoveDkimPubKeyResponse {
  return {};
}
export const MsgRemoveDkimPubKeyResponse = {
  typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKeyResponse",
  encode(_: MsgRemoveDkimPubKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveDkimPubKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveDkimPubKeyResponse();
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
  fromPartial(_: Partial<MsgRemoveDkimPubKeyResponse>): MsgRemoveDkimPubKeyResponse {
    const message = createBaseMsgRemoveDkimPubKeyResponse();
    return message;
  },
  fromAmino(_: MsgRemoveDkimPubKeyResponseAmino): MsgRemoveDkimPubKeyResponse {
    const message = createBaseMsgRemoveDkimPubKeyResponse();
    return message;
  },
  toAmino(_: MsgRemoveDkimPubKeyResponse): MsgRemoveDkimPubKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveDkimPubKeyResponseAminoMsg): MsgRemoveDkimPubKeyResponse {
    return MsgRemoveDkimPubKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveDkimPubKeyResponseProtoMsg): MsgRemoveDkimPubKeyResponse {
    return MsgRemoveDkimPubKeyResponse.decode(message.value);
  },
  toProto(message: MsgRemoveDkimPubKeyResponse): Uint8Array {
    return MsgRemoveDkimPubKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveDkimPubKeyResponse): MsgRemoveDkimPubKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKeyResponse",
      value: MsgRemoveDkimPubKeyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeDkimPubKey(): MsgRevokeDkimPubKey {
  return {
    signer: "",
    domain: "",
    privKey: new Uint8Array()
  };
}
export const MsgRevokeDkimPubKey = {
  typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey",
  encode(message: MsgRevokeDkimPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    if (message.privKey.length !== 0) {
      writer.uint32(26).bytes(message.privKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeDkimPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDkimPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        case 3:
          message.privKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokeDkimPubKey>): MsgRevokeDkimPubKey {
    const message = createBaseMsgRevokeDkimPubKey();
    message.signer = object.signer ?? "";
    message.domain = object.domain ?? "";
    message.privKey = object.privKey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRevokeDkimPubKeyAmino): MsgRevokeDkimPubKey {
    const message = createBaseMsgRevokeDkimPubKey();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.priv_key !== undefined && object.priv_key !== null) {
      message.privKey = bytesFromBase64(object.priv_key);
    }
    return message;
  },
  toAmino(message: MsgRevokeDkimPubKey): MsgRevokeDkimPubKeyAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.priv_key = message.privKey ? base64FromBytes(message.privKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeDkimPubKeyAminoMsg): MsgRevokeDkimPubKey {
    return MsgRevokeDkimPubKey.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeDkimPubKeyProtoMsg): MsgRevokeDkimPubKey {
    return MsgRevokeDkimPubKey.decode(message.value);
  },
  toProto(message: MsgRevokeDkimPubKey): Uint8Array {
    return MsgRevokeDkimPubKey.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeDkimPubKey): MsgRevokeDkimPubKeyProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey",
      value: MsgRevokeDkimPubKey.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeDkimPubKeyResponse(): MsgRevokeDkimPubKeyResponse {
  return {};
}
export const MsgRevokeDkimPubKeyResponse = {
  typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKeyResponse",
  encode(_: MsgRevokeDkimPubKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeDkimPubKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDkimPubKeyResponse();
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
  fromPartial(_: Partial<MsgRevokeDkimPubKeyResponse>): MsgRevokeDkimPubKeyResponse {
    const message = createBaseMsgRevokeDkimPubKeyResponse();
    return message;
  },
  fromAmino(_: MsgRevokeDkimPubKeyResponseAmino): MsgRevokeDkimPubKeyResponse {
    const message = createBaseMsgRevokeDkimPubKeyResponse();
    return message;
  },
  toAmino(_: MsgRevokeDkimPubKeyResponse): MsgRevokeDkimPubKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeDkimPubKeyResponseAminoMsg): MsgRevokeDkimPubKeyResponse {
    return MsgRevokeDkimPubKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeDkimPubKeyResponseProtoMsg): MsgRevokeDkimPubKeyResponse {
    return MsgRevokeDkimPubKeyResponse.decode(message.value);
  },
  toProto(message: MsgRevokeDkimPubKeyResponse): Uint8Array {
    return MsgRevokeDkimPubKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeDkimPubKeyResponse): MsgRevokeDkimPubKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKeyResponse",
      value: MsgRevokeDkimPubKeyResponse.encode(message).finish()
    };
  }
};