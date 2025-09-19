//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { AudienceClaim, AudienceClaimAmino, AudienceClaimSDKType, Audience, AudienceAmino, AudienceSDKType } from "./audience";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/xion.jwk.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/xion.jwk.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetAudienceClaimRequest {
  hash: Uint8Array;
}
export interface QueryGetAudienceClaimRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetAudienceClaimRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceClaimRequest
 */
export interface QueryGetAudienceClaimRequestAmino {
  hash?: string;
}
export interface QueryGetAudienceClaimRequestAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceClaimRequest";
  value: QueryGetAudienceClaimRequestAmino;
}
export interface QueryGetAudienceClaimRequestSDKType {
  hash: Uint8Array;
}
export interface QueryGetAudienceClaimResponse {
  claim?: AudienceClaim;
}
export interface QueryGetAudienceClaimResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetAudienceClaimResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceClaimResponse
 */
export interface QueryGetAudienceClaimResponseAmino {
  claim?: AudienceClaimAmino;
}
export interface QueryGetAudienceClaimResponseAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceClaimResponse";
  value: QueryGetAudienceClaimResponseAmino;
}
export interface QueryGetAudienceClaimResponseSDKType {
  claim?: AudienceClaimSDKType;
}
export interface QueryGetAudienceRequest {
  aud: string;
}
export interface QueryGetAudienceRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceRequest";
  value: Uint8Array;
}
/**
 * @name QueryGetAudienceRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceRequest
 */
export interface QueryGetAudienceRequestAmino {
  aud?: string;
}
export interface QueryGetAudienceRequestAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceRequest";
  value: QueryGetAudienceRequestAmino;
}
export interface QueryGetAudienceRequestSDKType {
  aud: string;
}
export interface QueryGetAudienceResponse {
  audience: Audience;
}
export interface QueryGetAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceResponse";
  value: Uint8Array;
}
/**
 * @name QueryGetAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceResponse
 */
export interface QueryGetAudienceResponseAmino {
  audience?: AudienceAmino;
}
export interface QueryGetAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceResponse";
  value: QueryGetAudienceResponseAmino;
}
export interface QueryGetAudienceResponseSDKType {
  audience: AudienceSDKType;
}
export interface QueryAllAudienceRequest {
  pagination?: PageRequest;
}
export interface QueryAllAudienceRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceRequest";
  value: Uint8Array;
}
/**
 * @name QueryAllAudienceRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAllAudienceRequest
 */
export interface QueryAllAudienceRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllAudienceRequestAminoMsg {
  type: "/xion.jwk.v1.QueryAllAudienceRequest";
  value: QueryAllAudienceRequestAmino;
}
export interface QueryAllAudienceRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllAudienceResponse {
  audience: Audience[];
  pagination?: PageResponse;
}
export interface QueryAllAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceResponse";
  value: Uint8Array;
}
/**
 * @name QueryAllAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAllAudienceResponse
 */
export interface QueryAllAudienceResponseAmino {
  audience?: AudienceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.QueryAllAudienceResponse";
  value: QueryAllAudienceResponseAmino;
}
export interface QueryAllAudienceResponseSDKType {
  audience: AudienceSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryValidateJWTRequest {
  aud: string;
  sub: string;
  sigBytes: string;
}
export interface QueryValidateJWTRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTRequest";
  value: Uint8Array;
}
/**
 * @name QueryValidateJWTRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryValidateJWTRequest
 */
export interface QueryValidateJWTRequestAmino {
  aud?: string;
  sub?: string;
  sigBytes?: string;
}
export interface QueryValidateJWTRequestAminoMsg {
  type: "/xion.jwk.v1.QueryValidateJWTRequest";
  value: QueryValidateJWTRequestAmino;
}
export interface QueryValidateJWTRequestSDKType {
  aud: string;
  sub: string;
  sigBytes: string;
}
export interface PrivateClaim {
  key: string;
  value: string;
}
export interface PrivateClaimProtoMsg {
  typeUrl: "/xion.jwk.v1.PrivateClaim";
  value: Uint8Array;
}
/**
 * @name PrivateClaimAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.PrivateClaim
 */
export interface PrivateClaimAmino {
  key?: string;
  value?: string;
}
export interface PrivateClaimAminoMsg {
  type: "/xion.jwk.v1.PrivateClaim";
  value: PrivateClaimAmino;
}
export interface PrivateClaimSDKType {
  key: string;
  value: string;
}
export interface QueryValidateJWTResponse {
  privateClaims: PrivateClaim[];
}
export interface QueryValidateJWTResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTResponse";
  value: Uint8Array;
}
/**
 * @name QueryValidateJWTResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryValidateJWTResponse
 */
export interface QueryValidateJWTResponseAmino {
  privateClaims?: PrivateClaimAmino[];
}
export interface QueryValidateJWTResponseAminoMsg {
  type: "/xion.jwk.v1.QueryValidateJWTResponse";
  value: QueryValidateJWTResponseAmino;
}
export interface QueryValidateJWTResponseSDKType {
  privateClaims: PrivateClaimSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/xion.jwk.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/xion.jwk.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAudienceClaimRequest(): QueryGetAudienceClaimRequest {
  return {
    hash: new Uint8Array()
  };
}
export const QueryGetAudienceClaimRequest = {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimRequest",
  encode(message: QueryGetAudienceClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAudienceClaimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAudienceClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAudienceClaimRequest>): QueryGetAudienceClaimRequest {
    const message = createBaseQueryGetAudienceClaimRequest();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryGetAudienceClaimRequestAmino): QueryGetAudienceClaimRequest {
    const message = createBaseQueryGetAudienceClaimRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: QueryGetAudienceClaimRequest): QueryGetAudienceClaimRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAudienceClaimRequestAminoMsg): QueryGetAudienceClaimRequest {
    return QueryGetAudienceClaimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAudienceClaimRequestProtoMsg): QueryGetAudienceClaimRequest {
    return QueryGetAudienceClaimRequest.decode(message.value);
  },
  toProto(message: QueryGetAudienceClaimRequest): Uint8Array {
    return QueryGetAudienceClaimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAudienceClaimRequest): QueryGetAudienceClaimRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimRequest",
      value: QueryGetAudienceClaimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAudienceClaimResponse(): QueryGetAudienceClaimResponse {
  return {
    claim: undefined
  };
}
export const QueryGetAudienceClaimResponse = {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimResponse",
  encode(message: QueryGetAudienceClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      AudienceClaim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAudienceClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAudienceClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = AudienceClaim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAudienceClaimResponse>): QueryGetAudienceClaimResponse {
    const message = createBaseQueryGetAudienceClaimResponse();
    message.claim = object.claim !== undefined && object.claim !== null ? AudienceClaim.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAudienceClaimResponseAmino): QueryGetAudienceClaimResponse {
    const message = createBaseQueryGetAudienceClaimResponse();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = AudienceClaim.fromAmino(object.claim);
    }
    return message;
  },
  toAmino(message: QueryGetAudienceClaimResponse): QueryGetAudienceClaimResponseAmino {
    const obj: any = {};
    obj.claim = message.claim ? AudienceClaim.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAudienceClaimResponseAminoMsg): QueryGetAudienceClaimResponse {
    return QueryGetAudienceClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAudienceClaimResponseProtoMsg): QueryGetAudienceClaimResponse {
    return QueryGetAudienceClaimResponse.decode(message.value);
  },
  toProto(message: QueryGetAudienceClaimResponse): Uint8Array {
    return QueryGetAudienceClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAudienceClaimResponse): QueryGetAudienceClaimResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimResponse",
      value: QueryGetAudienceClaimResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAudienceRequest(): QueryGetAudienceRequest {
  return {
    aud: ""
  };
}
export const QueryGetAudienceRequest = {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceRequest",
  encode(message: QueryGetAudienceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aud !== "") {
      writer.uint32(10).string(message.aud);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAudienceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAudienceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aud = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGetAudienceRequest>): QueryGetAudienceRequest {
    const message = createBaseQueryGetAudienceRequest();
    message.aud = object.aud ?? "";
    return message;
  },
  fromAmino(object: QueryGetAudienceRequestAmino): QueryGetAudienceRequest {
    const message = createBaseQueryGetAudienceRequest();
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    return message;
  },
  toAmino(message: QueryGetAudienceRequest): QueryGetAudienceRequestAmino {
    const obj: any = {};
    obj.aud = message.aud === "" ? undefined : message.aud;
    return obj;
  },
  fromAminoMsg(object: QueryGetAudienceRequestAminoMsg): QueryGetAudienceRequest {
    return QueryGetAudienceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAudienceRequestProtoMsg): QueryGetAudienceRequest {
    return QueryGetAudienceRequest.decode(message.value);
  },
  toProto(message: QueryGetAudienceRequest): Uint8Array {
    return QueryGetAudienceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAudienceRequest): QueryGetAudienceRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryGetAudienceRequest",
      value: QueryGetAudienceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAudienceResponse(): QueryGetAudienceResponse {
  return {
    audience: Audience.fromPartial({})
  };
}
export const QueryGetAudienceResponse = {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceResponse",
  encode(message: QueryGetAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.audience !== undefined) {
      Audience.encode(message.audience, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAudienceResponse();
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
  fromPartial(object: Partial<QueryGetAudienceResponse>): QueryGetAudienceResponse {
    const message = createBaseQueryGetAudienceResponse();
    message.audience = object.audience !== undefined && object.audience !== null ? Audience.fromPartial(object.audience) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAudienceResponseAmino): QueryGetAudienceResponse {
    const message = createBaseQueryGetAudienceResponse();
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = Audience.fromAmino(object.audience);
    }
    return message;
  },
  toAmino(message: QueryGetAudienceResponse): QueryGetAudienceResponseAmino {
    const obj: any = {};
    obj.audience = message.audience ? Audience.toAmino(message.audience) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAudienceResponseAminoMsg): QueryGetAudienceResponse {
    return QueryGetAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAudienceResponseProtoMsg): QueryGetAudienceResponse {
    return QueryGetAudienceResponse.decode(message.value);
  },
  toProto(message: QueryGetAudienceResponse): Uint8Array {
    return QueryGetAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAudienceResponse): QueryGetAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryGetAudienceResponse",
      value: QueryGetAudienceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAudienceRequest(): QueryAllAudienceRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllAudienceRequest = {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceRequest",
  encode(message: QueryAllAudienceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAudienceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAudienceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAudienceRequest>): QueryAllAudienceRequest {
    const message = createBaseQueryAllAudienceRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAudienceRequestAmino): QueryAllAudienceRequest {
    const message = createBaseQueryAllAudienceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAudienceRequest): QueryAllAudienceRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAudienceRequestAminoMsg): QueryAllAudienceRequest {
    return QueryAllAudienceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAudienceRequestProtoMsg): QueryAllAudienceRequest {
    return QueryAllAudienceRequest.decode(message.value);
  },
  toProto(message: QueryAllAudienceRequest): Uint8Array {
    return QueryAllAudienceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAudienceRequest): QueryAllAudienceRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAllAudienceRequest",
      value: QueryAllAudienceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAudienceResponse(): QueryAllAudienceResponse {
  return {
    audience: [],
    pagination: undefined
  };
}
export const QueryAllAudienceResponse = {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceResponse",
  encode(message: QueryAllAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.audience) {
      Audience.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAudienceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.audience.push(Audience.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllAudienceResponse>): QueryAllAudienceResponse {
    const message = createBaseQueryAllAudienceResponse();
    message.audience = object.audience?.map(e => Audience.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAudienceResponseAmino): QueryAllAudienceResponse {
    const message = createBaseQueryAllAudienceResponse();
    message.audience = object.audience?.map(e => Audience.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAudienceResponse): QueryAllAudienceResponseAmino {
    const obj: any = {};
    if (message.audience) {
      obj.audience = message.audience.map(e => e ? Audience.toAmino(e) : undefined);
    } else {
      obj.audience = message.audience;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAudienceResponseAminoMsg): QueryAllAudienceResponse {
    return QueryAllAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAudienceResponseProtoMsg): QueryAllAudienceResponse {
    return QueryAllAudienceResponse.decode(message.value);
  },
  toProto(message: QueryAllAudienceResponse): Uint8Array {
    return QueryAllAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAudienceResponse): QueryAllAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAllAudienceResponse",
      value: QueryAllAudienceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidateJWTRequest(): QueryValidateJWTRequest {
  return {
    aud: "",
    sub: "",
    sigBytes: ""
  };
}
export const QueryValidateJWTRequest = {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTRequest",
  encode(message: QueryValidateJWTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aud !== "") {
      writer.uint32(10).string(message.aud);
    }
    if (message.sub !== "") {
      writer.uint32(18).string(message.sub);
    }
    if (message.sigBytes !== "") {
      writer.uint32(26).string(message.sigBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidateJWTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidateJWTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aud = reader.string();
          break;
        case 2:
          message.sub = reader.string();
          break;
        case 3:
          message.sigBytes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidateJWTRequest>): QueryValidateJWTRequest {
    const message = createBaseQueryValidateJWTRequest();
    message.aud = object.aud ?? "";
    message.sub = object.sub ?? "";
    message.sigBytes = object.sigBytes ?? "";
    return message;
  },
  fromAmino(object: QueryValidateJWTRequestAmino): QueryValidateJWTRequest {
    const message = createBaseQueryValidateJWTRequest();
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    if (object.sub !== undefined && object.sub !== null) {
      message.sub = object.sub;
    }
    if (object.sigBytes !== undefined && object.sigBytes !== null) {
      message.sigBytes = object.sigBytes;
    }
    return message;
  },
  toAmino(message: QueryValidateJWTRequest): QueryValidateJWTRequestAmino {
    const obj: any = {};
    obj.aud = message.aud === "" ? undefined : message.aud;
    obj.sub = message.sub === "" ? undefined : message.sub;
    obj.sigBytes = message.sigBytes === "" ? undefined : message.sigBytes;
    return obj;
  },
  fromAminoMsg(object: QueryValidateJWTRequestAminoMsg): QueryValidateJWTRequest {
    return QueryValidateJWTRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidateJWTRequestProtoMsg): QueryValidateJWTRequest {
    return QueryValidateJWTRequest.decode(message.value);
  },
  toProto(message: QueryValidateJWTRequest): Uint8Array {
    return QueryValidateJWTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidateJWTRequest): QueryValidateJWTRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryValidateJWTRequest",
      value: QueryValidateJWTRequest.encode(message).finish()
    };
  }
};
function createBasePrivateClaim(): PrivateClaim {
  return {
    key: "",
    value: ""
  };
}
export const PrivateClaim = {
  typeUrl: "/xion.jwk.v1.PrivateClaim",
  encode(message: PrivateClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PrivateClaim>): PrivateClaim {
    const message = createBasePrivateClaim();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: PrivateClaimAmino): PrivateClaim {
    const message = createBasePrivateClaim();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: PrivateClaim): PrivateClaimAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: PrivateClaimAminoMsg): PrivateClaim {
    return PrivateClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: PrivateClaimProtoMsg): PrivateClaim {
    return PrivateClaim.decode(message.value);
  },
  toProto(message: PrivateClaim): Uint8Array {
    return PrivateClaim.encode(message).finish();
  },
  toProtoMsg(message: PrivateClaim): PrivateClaimProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.PrivateClaim",
      value: PrivateClaim.encode(message).finish()
    };
  }
};
function createBaseQueryValidateJWTResponse(): QueryValidateJWTResponse {
  return {
    privateClaims: []
  };
}
export const QueryValidateJWTResponse = {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTResponse",
  encode(message: QueryValidateJWTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privateClaims) {
      PrivateClaim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidateJWTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidateJWTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privateClaims.push(PrivateClaim.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryValidateJWTResponse>): QueryValidateJWTResponse {
    const message = createBaseQueryValidateJWTResponse();
    message.privateClaims = object.privateClaims?.map(e => PrivateClaim.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValidateJWTResponseAmino): QueryValidateJWTResponse {
    const message = createBaseQueryValidateJWTResponse();
    message.privateClaims = object.privateClaims?.map(e => PrivateClaim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValidateJWTResponse): QueryValidateJWTResponseAmino {
    const obj: any = {};
    if (message.privateClaims) {
      obj.privateClaims = message.privateClaims.map(e => e ? PrivateClaim.toAmino(e) : undefined);
    } else {
      obj.privateClaims = message.privateClaims;
    }
    return obj;
  },
  fromAminoMsg(object: QueryValidateJWTResponseAminoMsg): QueryValidateJWTResponse {
    return QueryValidateJWTResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidateJWTResponseProtoMsg): QueryValidateJWTResponse {
    return QueryValidateJWTResponse.decode(message.value);
  },
  toProto(message: QueryValidateJWTResponse): Uint8Array {
    return QueryValidateJWTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidateJWTResponse): QueryValidateJWTResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryValidateJWTResponse",
      value: QueryValidateJWTResponse.encode(message).finish()
    };
  }
};