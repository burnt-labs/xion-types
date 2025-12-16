//@ts-nocheck
import { Audience, AudienceAmino, AudienceSDKType } from "./audience";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface MsgCreateAudienceClaim {
  admin: string;
  audHash: Uint8Array;
}
export interface MsgCreateAudienceClaimProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim";
  value: Uint8Array;
}
/**
 * @name MsgCreateAudienceClaimAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgCreateAudienceClaim
 */
export interface MsgCreateAudienceClaimAmino {
  admin?: string;
  aud_hash?: string;
}
export interface MsgCreateAudienceClaimAminoMsg {
  type: "/xion.jwk.v1.MsgCreateAudienceClaim";
  value: MsgCreateAudienceClaimAmino;
}
export interface MsgCreateAudienceClaimSDKType {
  admin: string;
  aud_hash: Uint8Array;
}
export interface MsgCreateAudienceClaimResponse {}
export interface MsgCreateAudienceClaimResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaimResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateAudienceClaimResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgCreateAudienceClaimResponse
 */
export interface MsgCreateAudienceClaimResponseAmino {}
export interface MsgCreateAudienceClaimResponseAminoMsg {
  type: "/xion.jwk.v1.MsgCreateAudienceClaimResponse";
  value: MsgCreateAudienceClaimResponseAmino;
}
export interface MsgCreateAudienceClaimResponseSDKType {}
export interface MsgDeleteAudienceClaim {
  admin: string;
  audHash: Uint8Array;
}
export interface MsgDeleteAudienceClaimProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAudienceClaimAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgDeleteAudienceClaim
 */
export interface MsgDeleteAudienceClaimAmino {
  admin?: string;
  aud_hash?: string;
}
export interface MsgDeleteAudienceClaimAminoMsg {
  type: "/xion.jwk.v1.MsgDeleteAudienceClaim";
  value: MsgDeleteAudienceClaimAmino;
}
export interface MsgDeleteAudienceClaimSDKType {
  admin: string;
  aud_hash: Uint8Array;
}
export interface MsgDeleteAudienceClaimResponse {}
export interface MsgDeleteAudienceClaimResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaimResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAudienceClaimResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgDeleteAudienceClaimResponse
 */
export interface MsgDeleteAudienceClaimResponseAmino {}
export interface MsgDeleteAudienceClaimResponseAminoMsg {
  type: "/xion.jwk.v1.MsgDeleteAudienceClaimResponse";
  value: MsgDeleteAudienceClaimResponseAmino;
}
export interface MsgDeleteAudienceClaimResponseSDKType {}
export interface MsgCreateAudience {
  admin: string;
  aud: string;
  key: string;
}
export interface MsgCreateAudienceProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgCreateAudience";
  value: Uint8Array;
}
/**
 * @name MsgCreateAudienceAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgCreateAudience
 */
export interface MsgCreateAudienceAmino {
  admin?: string;
  aud?: string;
  key?: string;
}
export interface MsgCreateAudienceAminoMsg {
  type: "/xion.jwk.v1.MsgCreateAudience";
  value: MsgCreateAudienceAmino;
}
export interface MsgCreateAudienceSDKType {
  admin: string;
  aud: string;
  key: string;
}
export interface MsgCreateAudienceResponse {
  audience?: Audience;
}
export interface MsgCreateAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgCreateAudienceResponse
 */
export interface MsgCreateAudienceResponseAmino {
  audience?: AudienceAmino;
}
export interface MsgCreateAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.MsgCreateAudienceResponse";
  value: MsgCreateAudienceResponseAmino;
}
export interface MsgCreateAudienceResponseSDKType {
  audience?: AudienceSDKType;
}
export interface MsgUpdateAudience {
  admin: string;
  newAdmin: string;
  aud: string;
  key: string;
  newAud: string;
}
export interface MsgUpdateAudienceProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgUpdateAudience";
  value: Uint8Array;
}
/**
 * @name MsgUpdateAudienceAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgUpdateAudience
 */
export interface MsgUpdateAudienceAmino {
  admin?: string;
  new_admin?: string;
  aud?: string;
  key?: string;
  new_aud?: string;
}
export interface MsgUpdateAudienceAminoMsg {
  type: "/xion.jwk.v1.MsgUpdateAudience";
  value: MsgUpdateAudienceAmino;
}
export interface MsgUpdateAudienceSDKType {
  admin: string;
  new_admin: string;
  aud: string;
  key: string;
  new_aud: string;
}
export interface MsgUpdateAudienceResponse {
  audience?: Audience;
}
export interface MsgUpdateAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgUpdateAudienceResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgUpdateAudienceResponse
 */
export interface MsgUpdateAudienceResponseAmino {
  audience?: AudienceAmino;
}
export interface MsgUpdateAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.MsgUpdateAudienceResponse";
  value: MsgUpdateAudienceResponseAmino;
}
export interface MsgUpdateAudienceResponseSDKType {
  audience?: AudienceSDKType;
}
export interface MsgDeleteAudience {
  admin: string;
  aud: string;
}
export interface MsgDeleteAudienceProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudience";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAudienceAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgDeleteAudience
 */
export interface MsgDeleteAudienceAmino {
  admin?: string;
  aud?: string;
}
export interface MsgDeleteAudienceAminoMsg {
  type: "/xion.jwk.v1.MsgDeleteAudience";
  value: MsgDeleteAudienceAmino;
}
export interface MsgDeleteAudienceSDKType {
  admin: string;
  aud: string;
}
export interface MsgDeleteAudienceResponse {}
export interface MsgDeleteAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeleteAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.MsgDeleteAudienceResponse
 */
export interface MsgDeleteAudienceResponseAmino {}
export interface MsgDeleteAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.MsgDeleteAudienceResponse";
  value: MsgDeleteAudienceResponseAmino;
}
export interface MsgDeleteAudienceResponseSDKType {}
function createBaseMsgCreateAudienceClaim(): MsgCreateAudienceClaim {
  return {
    admin: "",
    audHash: new Uint8Array()
  };
}
export const MsgCreateAudienceClaim = {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim",
  encode(message: MsgCreateAudienceClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.audHash.length !== 0) {
      writer.uint32(18).bytes(message.audHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAudienceClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAudienceClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.audHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAudienceClaim>): MsgCreateAudienceClaim {
    const message = createBaseMsgCreateAudienceClaim();
    message.admin = object.admin ?? "";
    message.audHash = object.audHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateAudienceClaimAmino): MsgCreateAudienceClaim {
    const message = createBaseMsgCreateAudienceClaim();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.aud_hash !== undefined && object.aud_hash !== null) {
      message.audHash = bytesFromBase64(object.aud_hash);
    }
    return message;
  },
  toAmino(message: MsgCreateAudienceClaim): MsgCreateAudienceClaimAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.aud_hash = message.audHash ? base64FromBytes(message.audHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAudienceClaimAminoMsg): MsgCreateAudienceClaim {
    return MsgCreateAudienceClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAudienceClaimProtoMsg): MsgCreateAudienceClaim {
    return MsgCreateAudienceClaim.decode(message.value);
  },
  toProto(message: MsgCreateAudienceClaim): Uint8Array {
    return MsgCreateAudienceClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAudienceClaim): MsgCreateAudienceClaimProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim",
      value: MsgCreateAudienceClaim.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAudienceClaimResponse(): MsgCreateAudienceClaimResponse {
  return {};
}
export const MsgCreateAudienceClaimResponse = {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaimResponse",
  encode(_: MsgCreateAudienceClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAudienceClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAudienceClaimResponse();
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
  fromPartial(_: Partial<MsgCreateAudienceClaimResponse>): MsgCreateAudienceClaimResponse {
    const message = createBaseMsgCreateAudienceClaimResponse();
    return message;
  },
  fromAmino(_: MsgCreateAudienceClaimResponseAmino): MsgCreateAudienceClaimResponse {
    const message = createBaseMsgCreateAudienceClaimResponse();
    return message;
  },
  toAmino(_: MsgCreateAudienceClaimResponse): MsgCreateAudienceClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateAudienceClaimResponseAminoMsg): MsgCreateAudienceClaimResponse {
    return MsgCreateAudienceClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAudienceClaimResponseProtoMsg): MsgCreateAudienceClaimResponse {
    return MsgCreateAudienceClaimResponse.decode(message.value);
  },
  toProto(message: MsgCreateAudienceClaimResponse): Uint8Array {
    return MsgCreateAudienceClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAudienceClaimResponse): MsgCreateAudienceClaimResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaimResponse",
      value: MsgCreateAudienceClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAudienceClaim(): MsgDeleteAudienceClaim {
  return {
    admin: "",
    audHash: new Uint8Array()
  };
}
export const MsgDeleteAudienceClaim = {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim",
  encode(message: MsgDeleteAudienceClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.audHash.length !== 0) {
      writer.uint32(18).bytes(message.audHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAudienceClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAudienceClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.audHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteAudienceClaim>): MsgDeleteAudienceClaim {
    const message = createBaseMsgDeleteAudienceClaim();
    message.admin = object.admin ?? "";
    message.audHash = object.audHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgDeleteAudienceClaimAmino): MsgDeleteAudienceClaim {
    const message = createBaseMsgDeleteAudienceClaim();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.aud_hash !== undefined && object.aud_hash !== null) {
      message.audHash = bytesFromBase64(object.aud_hash);
    }
    return message;
  },
  toAmino(message: MsgDeleteAudienceClaim): MsgDeleteAudienceClaimAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.aud_hash = message.audHash ? base64FromBytes(message.audHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAudienceClaimAminoMsg): MsgDeleteAudienceClaim {
    return MsgDeleteAudienceClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAudienceClaimProtoMsg): MsgDeleteAudienceClaim {
    return MsgDeleteAudienceClaim.decode(message.value);
  },
  toProto(message: MsgDeleteAudienceClaim): Uint8Array {
    return MsgDeleteAudienceClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAudienceClaim): MsgDeleteAudienceClaimProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim",
      value: MsgDeleteAudienceClaim.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAudienceClaimResponse(): MsgDeleteAudienceClaimResponse {
  return {};
}
export const MsgDeleteAudienceClaimResponse = {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaimResponse",
  encode(_: MsgDeleteAudienceClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAudienceClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAudienceClaimResponse();
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
  fromPartial(_: Partial<MsgDeleteAudienceClaimResponse>): MsgDeleteAudienceClaimResponse {
    const message = createBaseMsgDeleteAudienceClaimResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAudienceClaimResponseAmino): MsgDeleteAudienceClaimResponse {
    const message = createBaseMsgDeleteAudienceClaimResponse();
    return message;
  },
  toAmino(_: MsgDeleteAudienceClaimResponse): MsgDeleteAudienceClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAudienceClaimResponseAminoMsg): MsgDeleteAudienceClaimResponse {
    return MsgDeleteAudienceClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAudienceClaimResponseProtoMsg): MsgDeleteAudienceClaimResponse {
    return MsgDeleteAudienceClaimResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAudienceClaimResponse): Uint8Array {
    return MsgDeleteAudienceClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAudienceClaimResponse): MsgDeleteAudienceClaimResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaimResponse",
      value: MsgDeleteAudienceClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAudience(): MsgCreateAudience {
  return {
    admin: "",
    aud: "",
    key: ""
  };
}
export const MsgCreateAudience = {
  typeUrl: "/xion.jwk.v1.MsgCreateAudience",
  encode(message: MsgCreateAudience, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.aud !== "") {
      writer.uint32(18).string(message.aud);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAudience {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAudience();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.aud = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAudience>): MsgCreateAudience {
    const message = createBaseMsgCreateAudience();
    message.admin = object.admin ?? "";
    message.aud = object.aud ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: MsgCreateAudienceAmino): MsgCreateAudience {
    const message = createBaseMsgCreateAudience();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: MsgCreateAudience): MsgCreateAudienceAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.aud = message.aud === "" ? undefined : message.aud;
    obj.key = message.key === "" ? undefined : message.key;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAudienceAminoMsg): MsgCreateAudience {
    return MsgCreateAudience.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAudienceProtoMsg): MsgCreateAudience {
    return MsgCreateAudience.decode(message.value);
  },
  toProto(message: MsgCreateAudience): Uint8Array {
    return MsgCreateAudience.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAudience): MsgCreateAudienceProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgCreateAudience",
      value: MsgCreateAudience.encode(message).finish()
    };
  }
};
function createBaseMsgCreateAudienceResponse(): MsgCreateAudienceResponse {
  return {
    audience: undefined
  };
}
export const MsgCreateAudienceResponse = {
  typeUrl: "/xion.jwk.v1.MsgCreateAudienceResponse",
  encode(message: MsgCreateAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.audience !== undefined) {
      Audience.encode(message.audience, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAudienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audience = Audience.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateAudienceResponse>): MsgCreateAudienceResponse {
    const message = createBaseMsgCreateAudienceResponse();
    message.audience = object.audience !== undefined && object.audience !== null ? Audience.fromPartial(object.audience) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateAudienceResponseAmino): MsgCreateAudienceResponse {
    const message = createBaseMsgCreateAudienceResponse();
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = Audience.fromAmino(object.audience);
    }
    return message;
  },
  toAmino(message: MsgCreateAudienceResponse): MsgCreateAudienceResponseAmino {
    const obj: any = {};
    obj.audience = message.audience ? Audience.toAmino(message.audience) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateAudienceResponseAminoMsg): MsgCreateAudienceResponse {
    return MsgCreateAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateAudienceResponseProtoMsg): MsgCreateAudienceResponse {
    return MsgCreateAudienceResponse.decode(message.value);
  },
  toProto(message: MsgCreateAudienceResponse): Uint8Array {
    return MsgCreateAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateAudienceResponse): MsgCreateAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgCreateAudienceResponse",
      value: MsgCreateAudienceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAudience(): MsgUpdateAudience {
  return {
    admin: "",
    newAdmin: "",
    aud: "",
    key: "",
    newAud: ""
  };
}
export const MsgUpdateAudience = {
  typeUrl: "/xion.jwk.v1.MsgUpdateAudience",
  encode(message: MsgUpdateAudience, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.aud !== "") {
      writer.uint32(26).string(message.aud);
    }
    if (message.key !== "") {
      writer.uint32(34).string(message.key);
    }
    if (message.newAud !== "") {
      writer.uint32(42).string(message.newAud);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAudience {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAudience();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.newAdmin = reader.string();
          break;
        case 3:
          message.aud = reader.string();
          break;
        case 4:
          message.key = reader.string();
          break;
        case 5:
          message.newAud = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAudience>): MsgUpdateAudience {
    const message = createBaseMsgUpdateAudience();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.aud = object.aud ?? "";
    message.key = object.key ?? "";
    message.newAud = object.newAud ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateAudienceAmino): MsgUpdateAudience {
    const message = createBaseMsgUpdateAudience();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.new_aud !== undefined && object.new_aud !== null) {
      message.newAud = object.new_aud;
    }
    return message;
  },
  toAmino(message: MsgUpdateAudience): MsgUpdateAudienceAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    obj.aud = message.aud === "" ? undefined : message.aud;
    obj.key = message.key === "" ? undefined : message.key;
    obj.new_aud = message.newAud === "" ? undefined : message.newAud;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAudienceAminoMsg): MsgUpdateAudience {
    return MsgUpdateAudience.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAudienceProtoMsg): MsgUpdateAudience {
    return MsgUpdateAudience.decode(message.value);
  },
  toProto(message: MsgUpdateAudience): Uint8Array {
    return MsgUpdateAudience.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAudience): MsgUpdateAudienceProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgUpdateAudience",
      value: MsgUpdateAudience.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateAudienceResponse(): MsgUpdateAudienceResponse {
  return {
    audience: undefined
  };
}
export const MsgUpdateAudienceResponse = {
  typeUrl: "/xion.jwk.v1.MsgUpdateAudienceResponse",
  encode(message: MsgUpdateAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.audience !== undefined) {
      Audience.encode(message.audience, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAudienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audience = Audience.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAudienceResponse>): MsgUpdateAudienceResponse {
    const message = createBaseMsgUpdateAudienceResponse();
    message.audience = object.audience !== undefined && object.audience !== null ? Audience.fromPartial(object.audience) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAudienceResponseAmino): MsgUpdateAudienceResponse {
    const message = createBaseMsgUpdateAudienceResponse();
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = Audience.fromAmino(object.audience);
    }
    return message;
  },
  toAmino(message: MsgUpdateAudienceResponse): MsgUpdateAudienceResponseAmino {
    const obj: any = {};
    obj.audience = message.audience ? Audience.toAmino(message.audience) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAudienceResponseAminoMsg): MsgUpdateAudienceResponse {
    return MsgUpdateAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAudienceResponseProtoMsg): MsgUpdateAudienceResponse {
    return MsgUpdateAudienceResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAudienceResponse): Uint8Array {
    return MsgUpdateAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAudienceResponse): MsgUpdateAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgUpdateAudienceResponse",
      value: MsgUpdateAudienceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAudience(): MsgDeleteAudience {
  return {
    admin: "",
    aud: ""
  };
}
export const MsgDeleteAudience = {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudience",
  encode(message: MsgDeleteAudience, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.aud !== "") {
      writer.uint32(18).string(message.aud);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAudience {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAudience();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.aud = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteAudience>): MsgDeleteAudience {
    const message = createBaseMsgDeleteAudience();
    message.admin = object.admin ?? "";
    message.aud = object.aud ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteAudienceAmino): MsgDeleteAudience {
    const message = createBaseMsgDeleteAudience();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    return message;
  },
  toAmino(message: MsgDeleteAudience): MsgDeleteAudienceAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.aud = message.aud === "" ? undefined : message.aud;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAudienceAminoMsg): MsgDeleteAudience {
    return MsgDeleteAudience.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAudienceProtoMsg): MsgDeleteAudience {
    return MsgDeleteAudience.decode(message.value);
  },
  toProto(message: MsgDeleteAudience): Uint8Array {
    return MsgDeleteAudience.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAudience): MsgDeleteAudienceProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgDeleteAudience",
      value: MsgDeleteAudience.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteAudienceResponse(): MsgDeleteAudienceResponse {
  return {};
}
export const MsgDeleteAudienceResponse = {
  typeUrl: "/xion.jwk.v1.MsgDeleteAudienceResponse",
  encode(_: MsgDeleteAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAudienceResponse();
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
  fromPartial(_: Partial<MsgDeleteAudienceResponse>): MsgDeleteAudienceResponse {
    const message = createBaseMsgDeleteAudienceResponse();
    return message;
  },
  fromAmino(_: MsgDeleteAudienceResponseAmino): MsgDeleteAudienceResponse {
    const message = createBaseMsgDeleteAudienceResponse();
    return message;
  },
  toAmino(_: MsgDeleteAudienceResponse): MsgDeleteAudienceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteAudienceResponseAminoMsg): MsgDeleteAudienceResponse {
    return MsgDeleteAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteAudienceResponseProtoMsg): MsgDeleteAudienceResponse {
    return MsgDeleteAudienceResponse.decode(message.value);
  },
  toProto(message: MsgDeleteAudienceResponse): Uint8Array {
    return MsgDeleteAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteAudienceResponse): MsgDeleteAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.MsgDeleteAudienceResponse",
      value: MsgDeleteAudienceResponse.encode(message).finish()
    };
  }
};