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
/** QueryAudienceClaimRequest is the request type for querying an audience claim */
export interface QueryAudienceClaimRequest {
  /** The hash of the audience claim to query */
  hash: Uint8Array;
}
export interface QueryAudienceClaimRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceClaimRequest";
  value: Uint8Array;
}
/**
 * QueryAudienceClaimRequest is the request type for querying an audience claim
 * @name QueryAudienceClaimRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceClaimRequest
 */
export interface QueryAudienceClaimRequestAmino {
  /**
   * The hash of the audience claim to query
   */
  hash?: string;
}
export interface QueryAudienceClaimRequestAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceClaimRequest";
  value: QueryAudienceClaimRequestAmino;
}
/** QueryAudienceClaimRequest is the request type for querying an audience claim */
export interface QueryAudienceClaimRequestSDKType {
  hash: Uint8Array;
}
/**
 * QueryAudienceClaimResponse is the response type for querying an audience
 * claim
 */
export interface QueryAudienceClaimResponse {
  /** The audience claim */
  claim?: AudienceClaim;
}
export interface QueryAudienceClaimResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceClaimResponse";
  value: Uint8Array;
}
/**
 * QueryAudienceClaimResponse is the response type for querying an audience
 * claim
 * @name QueryAudienceClaimResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceClaimResponse
 */
export interface QueryAudienceClaimResponseAmino {
  /**
   * The audience claim
   */
  claim?: AudienceClaimAmino;
}
export interface QueryAudienceClaimResponseAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceClaimResponse";
  value: QueryAudienceClaimResponseAmino;
}
/**
 * QueryAudienceClaimResponse is the response type for querying an audience
 * claim
 */
export interface QueryAudienceClaimResponseSDKType {
  claim?: AudienceClaimSDKType;
}
/**
 * QueryGetAudienceClaimRequest is the legacy request type for querying an
 * audience claim (deprecated)
 */
export interface QueryGetAudienceClaimRequest {
  /** The hash of the audience claim to query */
  hash: Uint8Array;
}
export interface QueryGetAudienceClaimRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimRequest";
  value: Uint8Array;
}
/**
 * QueryGetAudienceClaimRequest is the legacy request type for querying an
 * audience claim (deprecated)
 * @name QueryGetAudienceClaimRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceClaimRequest
 */
export interface QueryGetAudienceClaimRequestAmino {
  /**
   * The hash of the audience claim to query
   */
  hash?: string;
}
export interface QueryGetAudienceClaimRequestAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceClaimRequest";
  value: QueryGetAudienceClaimRequestAmino;
}
/**
 * QueryGetAudienceClaimRequest is the legacy request type for querying an
 * audience claim (deprecated)
 */
export interface QueryGetAudienceClaimRequestSDKType {
  hash: Uint8Array;
}
/**
 * QueryGetAudienceClaimResponse is the legacy response type for querying an
 * audience claim (deprecated)
 */
export interface QueryGetAudienceClaimResponse {
  /** The audience claim */
  claim?: AudienceClaim;
}
export interface QueryGetAudienceClaimResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceClaimResponse";
  value: Uint8Array;
}
/**
 * QueryGetAudienceClaimResponse is the legacy response type for querying an
 * audience claim (deprecated)
 * @name QueryGetAudienceClaimResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceClaimResponse
 */
export interface QueryGetAudienceClaimResponseAmino {
  /**
   * The audience claim
   */
  claim?: AudienceClaimAmino;
}
export interface QueryGetAudienceClaimResponseAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceClaimResponse";
  value: QueryGetAudienceClaimResponseAmino;
}
/**
 * QueryGetAudienceClaimResponse is the legacy response type for querying an
 * audience claim (deprecated)
 */
export interface QueryGetAudienceClaimResponseSDKType {
  claim?: AudienceClaimSDKType;
}
/** QueryAudienceRequest is the request type for querying an audience */
export interface QueryAudienceRequest {
  /** The audience identifier to query */
  aud: string;
}
export interface QueryAudienceRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceRequest";
  value: Uint8Array;
}
/**
 * QueryAudienceRequest is the request type for querying an audience
 * @name QueryAudienceRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceRequest
 */
export interface QueryAudienceRequestAmino {
  /**
   * The audience identifier to query
   */
  aud?: string;
}
export interface QueryAudienceRequestAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceRequest";
  value: QueryAudienceRequestAmino;
}
/** QueryAudienceRequest is the request type for querying an audience */
export interface QueryAudienceRequestSDKType {
  aud: string;
}
/** QueryAudienceResponse is the response type for querying an audience */
export interface QueryAudienceResponse {
  /** The audience information */
  audience: Audience;
}
export interface QueryAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceResponse";
  value: Uint8Array;
}
/**
 * QueryAudienceResponse is the response type for querying an audience
 * @name QueryAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceResponse
 */
export interface QueryAudienceResponseAmino {
  /**
   * The audience information
   */
  audience?: AudienceAmino;
}
export interface QueryAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceResponse";
  value: QueryAudienceResponseAmino;
}
/** QueryAudienceResponse is the response type for querying an audience */
export interface QueryAudienceResponseSDKType {
  audience: AudienceSDKType;
}
/**
 * QueryGetAudienceRequest is the legacy request type for querying an audience
 * (deprecated)
 */
export interface QueryGetAudienceRequest {
  /** The audience identifier to query */
  aud: string;
}
export interface QueryGetAudienceRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceRequest";
  value: Uint8Array;
}
/**
 * QueryGetAudienceRequest is the legacy request type for querying an audience
 * (deprecated)
 * @name QueryGetAudienceRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceRequest
 */
export interface QueryGetAudienceRequestAmino {
  /**
   * The audience identifier to query
   */
  aud?: string;
}
export interface QueryGetAudienceRequestAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceRequest";
  value: QueryGetAudienceRequestAmino;
}
/**
 * QueryGetAudienceRequest is the legacy request type for querying an audience
 * (deprecated)
 */
export interface QueryGetAudienceRequestSDKType {
  aud: string;
}
/**
 * QueryGetAudienceResponse is the legacy response type for querying an audience
 * (deprecated)
 */
export interface QueryGetAudienceResponse {
  /** The audience information */
  audience: Audience;
}
export interface QueryGetAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryGetAudienceResponse";
  value: Uint8Array;
}
/**
 * QueryGetAudienceResponse is the legacy response type for querying an audience
 * (deprecated)
 * @name QueryGetAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryGetAudienceResponse
 */
export interface QueryGetAudienceResponseAmino {
  /**
   * The audience information
   */
  audience?: AudienceAmino;
}
export interface QueryGetAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.QueryGetAudienceResponse";
  value: QueryGetAudienceResponseAmino;
}
/**
 * QueryGetAudienceResponse is the legacy response type for querying an audience
 * (deprecated)
 */
export interface QueryGetAudienceResponseSDKType {
  audience: AudienceSDKType;
}
/** QueryAudienceAllRequest is the request type for querying all audiences */
export interface QueryAudienceAllRequest {
  /** Pagination parameters */
  pagination?: PageRequest;
}
export interface QueryAudienceAllRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceAllRequest";
  value: Uint8Array;
}
/**
 * QueryAudienceAllRequest is the request type for querying all audiences
 * @name QueryAudienceAllRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceAllRequest
 */
export interface QueryAudienceAllRequestAmino {
  /**
   * Pagination parameters
   */
  pagination?: PageRequestAmino;
}
export interface QueryAudienceAllRequestAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceAllRequest";
  value: QueryAudienceAllRequestAmino;
}
/** QueryAudienceAllRequest is the request type for querying all audiences */
export interface QueryAudienceAllRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAudienceAllResponse is the response type for querying all audiences */
export interface QueryAudienceAllResponse {
  /** List of all audiences */
  audience: Audience[];
  /** Pagination response */
  pagination?: PageResponse;
}
export interface QueryAudienceAllResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAudienceAllResponse";
  value: Uint8Array;
}
/**
 * QueryAudienceAllResponse is the response type for querying all audiences
 * @name QueryAudienceAllResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAudienceAllResponse
 */
export interface QueryAudienceAllResponseAmino {
  /**
   * List of all audiences
   */
  audience?: AudienceAmino[];
  /**
   * Pagination response
   */
  pagination?: PageResponseAmino;
}
export interface QueryAudienceAllResponseAminoMsg {
  type: "/xion.jwk.v1.QueryAudienceAllResponse";
  value: QueryAudienceAllResponseAmino;
}
/** QueryAudienceAllResponse is the response type for querying all audiences */
export interface QueryAudienceAllResponseSDKType {
  audience: AudienceSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAllAudienceRequest is the legacy request type for querying all audiences
 * (deprecated)
 */
export interface QueryAllAudienceRequest {
  /** Pagination parameters */
  pagination?: PageRequest;
}
export interface QueryAllAudienceRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceRequest";
  value: Uint8Array;
}
/**
 * QueryAllAudienceRequest is the legacy request type for querying all audiences
 * (deprecated)
 * @name QueryAllAudienceRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAllAudienceRequest
 */
export interface QueryAllAudienceRequestAmino {
  /**
   * Pagination parameters
   */
  pagination?: PageRequestAmino;
}
export interface QueryAllAudienceRequestAminoMsg {
  type: "/xion.jwk.v1.QueryAllAudienceRequest";
  value: QueryAllAudienceRequestAmino;
}
/**
 * QueryAllAudienceRequest is the legacy request type for querying all audiences
 * (deprecated)
 */
export interface QueryAllAudienceRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAllAudienceResponse is the legacy response type for querying all
 * audiences (deprecated)
 */
export interface QueryAllAudienceResponse {
  /** List of all audiences */
  audience: Audience[];
  /** Pagination response */
  pagination?: PageResponse;
}
export interface QueryAllAudienceResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryAllAudienceResponse";
  value: Uint8Array;
}
/**
 * QueryAllAudienceResponse is the legacy response type for querying all
 * audiences (deprecated)
 * @name QueryAllAudienceResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryAllAudienceResponse
 */
export interface QueryAllAudienceResponseAmino {
  /**
   * List of all audiences
   */
  audience?: AudienceAmino[];
  /**
   * Pagination response
   */
  pagination?: PageResponseAmino;
}
export interface QueryAllAudienceResponseAminoMsg {
  type: "/xion.jwk.v1.QueryAllAudienceResponse";
  value: QueryAllAudienceResponseAmino;
}
/**
 * QueryAllAudienceResponse is the legacy response type for querying all
 * audiences (deprecated)
 */
export interface QueryAllAudienceResponseSDKType {
  audience: AudienceSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryValidateJWTRequest is the request type for validating a JWT */
export interface QueryValidateJWTRequest {
  /** The audience identifier */
  aud: string;
  /** The subject */
  sub: string;
  /** The signature bytes */
  sigBytes: string;
}
export interface QueryValidateJWTRequestProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTRequest";
  value: Uint8Array;
}
/**
 * QueryValidateJWTRequest is the request type for validating a JWT
 * @name QueryValidateJWTRequestAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryValidateJWTRequest
 */
export interface QueryValidateJWTRequestAmino {
  /**
   * The audience identifier
   */
  aud?: string;
  /**
   * The subject
   */
  sub?: string;
  /**
   * The signature bytes
   */
  sig_bytes?: string;
}
export interface QueryValidateJWTRequestAminoMsg {
  type: "/xion.jwk.v1.QueryValidateJWTRequest";
  value: QueryValidateJWTRequestAmino;
}
/** QueryValidateJWTRequest is the request type for validating a JWT */
export interface QueryValidateJWTRequestSDKType {
  aud: string;
  sub: string;
  sig_bytes: string;
}
/** PrivateClaim represents a private claim in a JWT */
export interface PrivateClaim {
  /** The claim key */
  key: string;
  /** The claim value */
  value: string;
}
export interface PrivateClaimProtoMsg {
  typeUrl: "/xion.jwk.v1.PrivateClaim";
  value: Uint8Array;
}
/**
 * PrivateClaim represents a private claim in a JWT
 * @name PrivateClaimAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.PrivateClaim
 */
export interface PrivateClaimAmino {
  /**
   * The claim key
   */
  key?: string;
  /**
   * The claim value
   */
  value?: string;
}
export interface PrivateClaimAminoMsg {
  type: "/xion.jwk.v1.PrivateClaim";
  value: PrivateClaimAmino;
}
/** PrivateClaim represents a private claim in a JWT */
export interface PrivateClaimSDKType {
  key: string;
  value: string;
}
/** QueryValidateJWTResponse is the response type for validating a JWT */
export interface QueryValidateJWTResponse {
  /** The private claims from the JWT */
  privateClaims: PrivateClaim[];
}
export interface QueryValidateJWTResponseProtoMsg {
  typeUrl: "/xion.jwk.v1.QueryValidateJWTResponse";
  value: Uint8Array;
}
/**
 * QueryValidateJWTResponse is the response type for validating a JWT
 * @name QueryValidateJWTResponseAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.QueryValidateJWTResponse
 */
export interface QueryValidateJWTResponseAmino {
  /**
   * The private claims from the JWT
   */
  private_claims?: PrivateClaimAmino[];
}
export interface QueryValidateJWTResponseAminoMsg {
  type: "/xion.jwk.v1.QueryValidateJWTResponse";
  value: QueryValidateJWTResponseAmino;
}
/** QueryValidateJWTResponse is the response type for validating a JWT */
export interface QueryValidateJWTResponseSDKType {
  private_claims: PrivateClaimSDKType[];
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
function createBaseQueryAudienceClaimRequest(): QueryAudienceClaimRequest {
  return {
    hash: new Uint8Array()
  };
}
export const QueryAudienceClaimRequest = {
  typeUrl: "/xion.jwk.v1.QueryAudienceClaimRequest",
  encode(message: QueryAudienceClaimRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceClaimRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceClaimRequest();
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
  fromPartial(object: Partial<QueryAudienceClaimRequest>): QueryAudienceClaimRequest {
    const message = createBaseQueryAudienceClaimRequest();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryAudienceClaimRequestAmino): QueryAudienceClaimRequest {
    const message = createBaseQueryAudienceClaimRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: QueryAudienceClaimRequest): QueryAudienceClaimRequestAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceClaimRequestAminoMsg): QueryAudienceClaimRequest {
    return QueryAudienceClaimRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceClaimRequestProtoMsg): QueryAudienceClaimRequest {
    return QueryAudienceClaimRequest.decode(message.value);
  },
  toProto(message: QueryAudienceClaimRequest): Uint8Array {
    return QueryAudienceClaimRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceClaimRequest): QueryAudienceClaimRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceClaimRequest",
      value: QueryAudienceClaimRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAudienceClaimResponse(): QueryAudienceClaimResponse {
  return {
    claim: undefined
  };
}
export const QueryAudienceClaimResponse = {
  typeUrl: "/xion.jwk.v1.QueryAudienceClaimResponse",
  encode(message: QueryAudienceClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claim !== undefined) {
      AudienceClaim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceClaimResponse();
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
  fromPartial(object: Partial<QueryAudienceClaimResponse>): QueryAudienceClaimResponse {
    const message = createBaseQueryAudienceClaimResponse();
    message.claim = object.claim !== undefined && object.claim !== null ? AudienceClaim.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: QueryAudienceClaimResponseAmino): QueryAudienceClaimResponse {
    const message = createBaseQueryAudienceClaimResponse();
    if (object.claim !== undefined && object.claim !== null) {
      message.claim = AudienceClaim.fromAmino(object.claim);
    }
    return message;
  },
  toAmino(message: QueryAudienceClaimResponse): QueryAudienceClaimResponseAmino {
    const obj: any = {};
    obj.claim = message.claim ? AudienceClaim.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceClaimResponseAminoMsg): QueryAudienceClaimResponse {
    return QueryAudienceClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceClaimResponseProtoMsg): QueryAudienceClaimResponse {
    return QueryAudienceClaimResponse.decode(message.value);
  },
  toProto(message: QueryAudienceClaimResponse): Uint8Array {
    return QueryAudienceClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceClaimResponse): QueryAudienceClaimResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceClaimResponse",
      value: QueryAudienceClaimResponse.encode(message).finish()
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
function createBaseQueryAudienceRequest(): QueryAudienceRequest {
  return {
    aud: ""
  };
}
export const QueryAudienceRequest = {
  typeUrl: "/xion.jwk.v1.QueryAudienceRequest",
  encode(message: QueryAudienceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aud !== "") {
      writer.uint32(10).string(message.aud);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceRequest();
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
  fromPartial(object: Partial<QueryAudienceRequest>): QueryAudienceRequest {
    const message = createBaseQueryAudienceRequest();
    message.aud = object.aud ?? "";
    return message;
  },
  fromAmino(object: QueryAudienceRequestAmino): QueryAudienceRequest {
    const message = createBaseQueryAudienceRequest();
    if (object.aud !== undefined && object.aud !== null) {
      message.aud = object.aud;
    }
    return message;
  },
  toAmino(message: QueryAudienceRequest): QueryAudienceRequestAmino {
    const obj: any = {};
    obj.aud = message.aud === "" ? undefined : message.aud;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceRequestAminoMsg): QueryAudienceRequest {
    return QueryAudienceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceRequestProtoMsg): QueryAudienceRequest {
    return QueryAudienceRequest.decode(message.value);
  },
  toProto(message: QueryAudienceRequest): Uint8Array {
    return QueryAudienceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceRequest): QueryAudienceRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceRequest",
      value: QueryAudienceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAudienceResponse(): QueryAudienceResponse {
  return {
    audience: Audience.fromPartial({})
  };
}
export const QueryAudienceResponse = {
  typeUrl: "/xion.jwk.v1.QueryAudienceResponse",
  encode(message: QueryAudienceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.audience !== undefined) {
      Audience.encode(message.audience, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceResponse();
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
  fromPartial(object: Partial<QueryAudienceResponse>): QueryAudienceResponse {
    const message = createBaseQueryAudienceResponse();
    message.audience = object.audience !== undefined && object.audience !== null ? Audience.fromPartial(object.audience) : undefined;
    return message;
  },
  fromAmino(object: QueryAudienceResponseAmino): QueryAudienceResponse {
    const message = createBaseQueryAudienceResponse();
    if (object.audience !== undefined && object.audience !== null) {
      message.audience = Audience.fromAmino(object.audience);
    }
    return message;
  },
  toAmino(message: QueryAudienceResponse): QueryAudienceResponseAmino {
    const obj: any = {};
    obj.audience = message.audience ? Audience.toAmino(message.audience) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceResponseAminoMsg): QueryAudienceResponse {
    return QueryAudienceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceResponseProtoMsg): QueryAudienceResponse {
    return QueryAudienceResponse.decode(message.value);
  },
  toProto(message: QueryAudienceResponse): Uint8Array {
    return QueryAudienceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceResponse): QueryAudienceResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceResponse",
      value: QueryAudienceResponse.encode(message).finish()
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
function createBaseQueryAudienceAllRequest(): QueryAudienceAllRequest {
  return {
    pagination: undefined
  };
}
export const QueryAudienceAllRequest = {
  typeUrl: "/xion.jwk.v1.QueryAudienceAllRequest",
  encode(message: QueryAudienceAllRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceAllRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceAllRequest();
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
  fromPartial(object: Partial<QueryAudienceAllRequest>): QueryAudienceAllRequest {
    const message = createBaseQueryAudienceAllRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAudienceAllRequestAmino): QueryAudienceAllRequest {
    const message = createBaseQueryAudienceAllRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAudienceAllRequest): QueryAudienceAllRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceAllRequestAminoMsg): QueryAudienceAllRequest {
    return QueryAudienceAllRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceAllRequestProtoMsg): QueryAudienceAllRequest {
    return QueryAudienceAllRequest.decode(message.value);
  },
  toProto(message: QueryAudienceAllRequest): Uint8Array {
    return QueryAudienceAllRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceAllRequest): QueryAudienceAllRequestProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceAllRequest",
      value: QueryAudienceAllRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAudienceAllResponse(): QueryAudienceAllResponse {
  return {
    audience: [],
    pagination: undefined
  };
}
export const QueryAudienceAllResponse = {
  typeUrl: "/xion.jwk.v1.QueryAudienceAllResponse",
  encode(message: QueryAudienceAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.audience) {
      Audience.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAudienceAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAudienceAllResponse();
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
  fromPartial(object: Partial<QueryAudienceAllResponse>): QueryAudienceAllResponse {
    const message = createBaseQueryAudienceAllResponse();
    message.audience = object.audience?.map(e => Audience.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAudienceAllResponseAmino): QueryAudienceAllResponse {
    const message = createBaseQueryAudienceAllResponse();
    message.audience = object.audience?.map(e => Audience.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAudienceAllResponse): QueryAudienceAllResponseAmino {
    const obj: any = {};
    if (message.audience) {
      obj.audience = message.audience.map(e => e ? Audience.toAmino(e) : undefined);
    } else {
      obj.audience = message.audience;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAudienceAllResponseAminoMsg): QueryAudienceAllResponse {
    return QueryAudienceAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAudienceAllResponseProtoMsg): QueryAudienceAllResponse {
    return QueryAudienceAllResponse.decode(message.value);
  },
  toProto(message: QueryAudienceAllResponse): Uint8Array {
    return QueryAudienceAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAudienceAllResponse): QueryAudienceAllResponseProtoMsg {
    return {
      typeUrl: "/xion.jwk.v1.QueryAudienceAllResponse",
      value: QueryAudienceAllResponse.encode(message).finish()
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
    if (object.sig_bytes !== undefined && object.sig_bytes !== null) {
      message.sigBytes = object.sig_bytes;
    }
    return message;
  },
  toAmino(message: QueryValidateJWTRequest): QueryValidateJWTRequestAmino {
    const obj: any = {};
    obj.aud = message.aud === "" ? undefined : message.aud;
    obj.sub = message.sub === "" ? undefined : message.sub;
    obj.sig_bytes = message.sigBytes === "" ? undefined : message.sigBytes;
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
    message.privateClaims = object.private_claims?.map(e => PrivateClaim.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValidateJWTResponse): QueryValidateJWTResponseAmino {
    const obj: any = {};
    if (message.privateClaims) {
      obj.private_claims = message.privateClaims.map(e => e ? PrivateClaim.toAmino(e) : undefined);
    } else {
      obj.private_claims = message.privateClaims;
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