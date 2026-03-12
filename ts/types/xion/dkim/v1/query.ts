//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DkimPubKey, DkimPubKeyAmino, DkimPubKeySDKType } from "./state";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryDkimPubKeyRequest is the request type for the Query/DkimPubKey RPC
 * method.
 */
export interface QueryDkimPubKeyRequest {
  /** selector defines the DKIM selector to query. */
  selector: string;
  /** domain defines the domain to query. */
  domain: string;
}
export interface QueryDkimPubKeyRequestProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeyRequest";
  value: Uint8Array;
}
/**
 * QueryDkimPubKeyRequest is the request type for the Query/DkimPubKey RPC
 * method.
 * @name QueryDkimPubKeyRequestAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryDkimPubKeyRequest
 */
export interface QueryDkimPubKeyRequestAmino {
  /**
   * selector defines the DKIM selector to query.
   */
  selector?: string;
  /**
   * domain defines the domain to query.
   */
  domain?: string;
}
export interface QueryDkimPubKeyRequestAminoMsg {
  type: "/xion.dkim.v1.QueryDkimPubKeyRequest";
  value: QueryDkimPubKeyRequestAmino;
}
/**
 * QueryDkimPubKeyRequest is the request type for the Query/DkimPubKey RPC
 * method.
 */
export interface QueryDkimPubKeyRequestSDKType {
  selector: string;
  domain: string;
}
/**
 * QueryDkimPubKeyResponse is the response type for the Query/DkimPubKey RPC
 * method.
 */
export interface QueryDkimPubKeyResponse {
  /** dkim_pub_key defines the DKIM public key. */
  dkimPubKey?: DkimPubKey;
}
export interface QueryDkimPubKeyResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeyResponse";
  value: Uint8Array;
}
/**
 * QueryDkimPubKeyResponse is the response type for the Query/DkimPubKey RPC
 * method.
 * @name QueryDkimPubKeyResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryDkimPubKeyResponse
 */
export interface QueryDkimPubKeyResponseAmino {
  /**
   * dkim_pub_key defines the DKIM public key.
   */
  dkim_pub_key?: DkimPubKeyAmino;
}
export interface QueryDkimPubKeyResponseAminoMsg {
  type: "/xion.dkim.v1.QueryDkimPubKeyResponse";
  value: QueryDkimPubKeyResponseAmino;
}
/**
 * QueryDkimPubKeyResponse is the response type for the Query/DkimPubKey RPC
 * method.
 */
export interface QueryDkimPubKeyResponseSDKType {
  dkim_pub_key?: DkimPubKeySDKType;
}
/**
 * QueryDkimPubKeysRequest is the request type for the Query/DkimPubKeys RPC
 * method. All fields are optional, and will filter down results.
 */
export interface QueryDkimPubKeysRequest {
  /** selector defines the DKIM selector to filter by. */
  selector: string;
  /** domain defines the domain to filter by. */
  domain: string;
  /** poseidon_hash defines the Poseidon hash to filter by. */
  poseidonHash: Uint8Array;
  /** pagination defines the pagination parameters. */
  pagination?: PageRequest;
}
export interface QueryDkimPubKeysRequestProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeysRequest";
  value: Uint8Array;
}
/**
 * QueryDkimPubKeysRequest is the request type for the Query/DkimPubKeys RPC
 * method. All fields are optional, and will filter down results.
 * @name QueryDkimPubKeysRequestAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryDkimPubKeysRequest
 */
export interface QueryDkimPubKeysRequestAmino {
  /**
   * selector defines the DKIM selector to filter by.
   */
  selector?: string;
  /**
   * domain defines the domain to filter by.
   */
  domain?: string;
  /**
   * poseidon_hash defines the Poseidon hash to filter by.
   */
  poseidon_hash?: string;
  /**
   * pagination defines the pagination parameters.
   */
  pagination?: PageRequestAmino;
}
export interface QueryDkimPubKeysRequestAminoMsg {
  type: "/xion.dkim.v1.QueryDkimPubKeysRequest";
  value: QueryDkimPubKeysRequestAmino;
}
/**
 * QueryDkimPubKeysRequest is the request type for the Query/DkimPubKeys RPC
 * method. All fields are optional, and will filter down results.
 */
export interface QueryDkimPubKeysRequestSDKType {
  selector: string;
  domain: string;
  poseidon_hash: Uint8Array;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDkimPubKeysResponse is the response type for the Query/DkimPubKeys RPC
 * method.
 */
export interface QueryDkimPubKeysResponse {
  /** dkim_pub_keys defines the list of DKIM public keys. */
  dkimPubKeys: DkimPubKey[];
  /** pagination defines the pagination response. */
  pagination?: PageResponse;
}
export interface QueryDkimPubKeysResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeysResponse";
  value: Uint8Array;
}
/**
 * QueryDkimPubKeysResponse is the response type for the Query/DkimPubKeys RPC
 * method.
 * @name QueryDkimPubKeysResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryDkimPubKeysResponse
 */
export interface QueryDkimPubKeysResponseAmino {
  /**
   * dkim_pub_keys defines the list of DKIM public keys.
   */
  dkim_pub_keys?: DkimPubKeyAmino[];
  /**
   * pagination defines the pagination response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryDkimPubKeysResponseAminoMsg {
  type: "/xion.dkim.v1.QueryDkimPubKeysResponse";
  value: QueryDkimPubKeysResponseAmino;
}
/**
 * QueryDkimPubKeysResponse is the response type for the Query/DkimPubKeys RPC
 * method.
 */
export interface QueryDkimPubKeysResponseSDKType {
  dkim_pub_keys: DkimPubKeySDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAuthenticateRequest defines the request structure for proof
 * verification.
 */
export interface QueryAuthenticateRequest {
  /** tx_bytes defines the serialized transaction bytes. */
  txBytes: Uint8Array;
  /** email_hash defines the hash of the email being authenticated. */
  emailHash: string;
  /** proof defines the zk proof bytes. */
  proof: Uint8Array;
  /** public_inputs defines the public inputs for the zk proof. */
  publicInputs: string[];
  /** allowed_email_hosts defines the list of allowed email hosts. */
  allowedEmailHosts: string[];
}
export interface QueryAuthenticateRequestProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryAuthenticateRequest";
  value: Uint8Array;
}
/**
 * QueryAuthenticateRequest defines the request structure for proof
 * verification.
 * @name QueryAuthenticateRequestAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryAuthenticateRequest
 */
export interface QueryAuthenticateRequestAmino {
  /**
   * tx_bytes defines the serialized transaction bytes.
   */
  tx_bytes?: string;
  /**
   * email_hash defines the hash of the email being authenticated.
   */
  email_hash?: string;
  /**
   * proof defines the zk proof bytes.
   */
  proof?: string;
  /**
   * public_inputs defines the public inputs for the zk proof.
   */
  public_inputs?: string[];
  /**
   * allowed_email_hosts defines the list of allowed email hosts.
   */
  allowed_email_hosts?: string[];
}
export interface QueryAuthenticateRequestAminoMsg {
  type: "/xion.dkim.v1.QueryAuthenticateRequest";
  value: QueryAuthenticateRequestAmino;
}
/**
 * QueryAuthenticateRequest defines the request structure for proof
 * verification.
 */
export interface QueryAuthenticateRequestSDKType {
  tx_bytes: Uint8Array;
  email_hash: string;
  proof: Uint8Array;
  public_inputs: string[];
  allowed_email_hosts: string[];
}
/** AuthenticateResponse defines the response structure for proof verification. */
export interface AuthenticateResponse {
  /** verified indicates whether the proof verification was successful. */
  verified: boolean;
}
export interface AuthenticateResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.AuthenticateResponse";
  value: Uint8Array;
}
/**
 * AuthenticateResponse defines the response structure for proof verification.
 * @name AuthenticateResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.AuthenticateResponse
 */
export interface AuthenticateResponseAmino {
  /**
   * verified indicates whether the proof verification was successful.
   */
  verified?: boolean;
}
export interface AuthenticateResponseAminoMsg {
  type: "/xion.dkim.v1.AuthenticateResponse";
  value: AuthenticateResponseAmino;
}
/** AuthenticateResponse defines the response structure for proof verification. */
export interface AuthenticateResponseSDKType {
  verified: boolean;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/xion.dkim.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/xion.dkim.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/xion.dkim.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryDkimPubKeyRequest(): QueryDkimPubKeyRequest {
  return {
    selector: "",
    domain: ""
  };
}
export const QueryDkimPubKeyRequest = {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeyRequest",
  encode(message: QueryDkimPubKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDkimPubKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDkimPubKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDkimPubKeyRequest>): QueryDkimPubKeyRequest {
    const message = createBaseQueryDkimPubKeyRequest();
    message.selector = object.selector ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
  fromAmino(object: QueryDkimPubKeyRequestAmino): QueryDkimPubKeyRequest {
    const message = createBaseQueryDkimPubKeyRequest();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    return message;
  },
  toAmino(message: QueryDkimPubKeyRequest): QueryDkimPubKeyRequestAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.domain = message.domain === "" ? undefined : message.domain;
    return obj;
  },
  fromAminoMsg(object: QueryDkimPubKeyRequestAminoMsg): QueryDkimPubKeyRequest {
    return QueryDkimPubKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDkimPubKeyRequestProtoMsg): QueryDkimPubKeyRequest {
    return QueryDkimPubKeyRequest.decode(message.value);
  },
  toProto(message: QueryDkimPubKeyRequest): Uint8Array {
    return QueryDkimPubKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDkimPubKeyRequest): QueryDkimPubKeyRequestProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.QueryDkimPubKeyRequest",
      value: QueryDkimPubKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDkimPubKeyResponse(): QueryDkimPubKeyResponse {
  return {
    dkimPubKey: undefined
  };
}
export const QueryDkimPubKeyResponse = {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeyResponse",
  encode(message: QueryDkimPubKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dkimPubKey !== undefined) {
      DkimPubKey.encode(message.dkimPubKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDkimPubKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDkimPubKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dkimPubKey = DkimPubKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDkimPubKeyResponse>): QueryDkimPubKeyResponse {
    const message = createBaseQueryDkimPubKeyResponse();
    message.dkimPubKey = object.dkimPubKey !== undefined && object.dkimPubKey !== null ? DkimPubKey.fromPartial(object.dkimPubKey) : undefined;
    return message;
  },
  fromAmino(object: QueryDkimPubKeyResponseAmino): QueryDkimPubKeyResponse {
    const message = createBaseQueryDkimPubKeyResponse();
    if (object.dkim_pub_key !== undefined && object.dkim_pub_key !== null) {
      message.dkimPubKey = DkimPubKey.fromAmino(object.dkim_pub_key);
    }
    return message;
  },
  toAmino(message: QueryDkimPubKeyResponse): QueryDkimPubKeyResponseAmino {
    const obj: any = {};
    obj.dkim_pub_key = message.dkimPubKey ? DkimPubKey.toAmino(message.dkimPubKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDkimPubKeyResponseAminoMsg): QueryDkimPubKeyResponse {
    return QueryDkimPubKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDkimPubKeyResponseProtoMsg): QueryDkimPubKeyResponse {
    return QueryDkimPubKeyResponse.decode(message.value);
  },
  toProto(message: QueryDkimPubKeyResponse): Uint8Array {
    return QueryDkimPubKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDkimPubKeyResponse): QueryDkimPubKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.QueryDkimPubKeyResponse",
      value: QueryDkimPubKeyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDkimPubKeysRequest(): QueryDkimPubKeysRequest {
  return {
    selector: "",
    domain: "",
    poseidonHash: new Uint8Array(),
    pagination: undefined
  };
}
export const QueryDkimPubKeysRequest = {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeysRequest",
  encode(message: QueryDkimPubKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    if (message.poseidonHash.length !== 0) {
      writer.uint32(26).bytes(message.poseidonHash);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDkimPubKeysRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDkimPubKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        case 3:
          message.poseidonHash = reader.bytes();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDkimPubKeysRequest>): QueryDkimPubKeysRequest {
    const message = createBaseQueryDkimPubKeysRequest();
    message.selector = object.selector ?? "";
    message.domain = object.domain ?? "";
    message.poseidonHash = object.poseidonHash ?? new Uint8Array();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDkimPubKeysRequestAmino): QueryDkimPubKeysRequest {
    const message = createBaseQueryDkimPubKeysRequest();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.poseidon_hash !== undefined && object.poseidon_hash !== null) {
      message.poseidonHash = bytesFromBase64(object.poseidon_hash);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDkimPubKeysRequest): QueryDkimPubKeysRequestAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.poseidon_hash = message.poseidonHash ? base64FromBytes(message.poseidonHash) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDkimPubKeysRequestAminoMsg): QueryDkimPubKeysRequest {
    return QueryDkimPubKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDkimPubKeysRequestProtoMsg): QueryDkimPubKeysRequest {
    return QueryDkimPubKeysRequest.decode(message.value);
  },
  toProto(message: QueryDkimPubKeysRequest): Uint8Array {
    return QueryDkimPubKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDkimPubKeysRequest): QueryDkimPubKeysRequestProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.QueryDkimPubKeysRequest",
      value: QueryDkimPubKeysRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDkimPubKeysResponse(): QueryDkimPubKeysResponse {
  return {
    dkimPubKeys: [],
    pagination: undefined
  };
}
export const QueryDkimPubKeysResponse = {
  typeUrl: "/xion.dkim.v1.QueryDkimPubKeysResponse",
  encode(message: QueryDkimPubKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.dkimPubKeys) {
      DkimPubKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDkimPubKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDkimPubKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dkimPubKeys.push(DkimPubKey.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryDkimPubKeysResponse>): QueryDkimPubKeysResponse {
    const message = createBaseQueryDkimPubKeysResponse();
    message.dkimPubKeys = object.dkimPubKeys?.map(e => DkimPubKey.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDkimPubKeysResponseAmino): QueryDkimPubKeysResponse {
    const message = createBaseQueryDkimPubKeysResponse();
    message.dkimPubKeys = object.dkim_pub_keys?.map(e => DkimPubKey.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDkimPubKeysResponse): QueryDkimPubKeysResponseAmino {
    const obj: any = {};
    if (message.dkimPubKeys) {
      obj.dkim_pub_keys = message.dkimPubKeys.map(e => e ? DkimPubKey.toAmino(e) : undefined);
    } else {
      obj.dkim_pub_keys = message.dkimPubKeys;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDkimPubKeysResponseAminoMsg): QueryDkimPubKeysResponse {
    return QueryDkimPubKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDkimPubKeysResponseProtoMsg): QueryDkimPubKeysResponse {
    return QueryDkimPubKeysResponse.decode(message.value);
  },
  toProto(message: QueryDkimPubKeysResponse): Uint8Array {
    return QueryDkimPubKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDkimPubKeysResponse): QueryDkimPubKeysResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.QueryDkimPubKeysResponse",
      value: QueryDkimPubKeysResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAuthenticateRequest(): QueryAuthenticateRequest {
  return {
    txBytes: new Uint8Array(),
    emailHash: "",
    proof: new Uint8Array(),
    publicInputs: [],
    allowedEmailHosts: []
  };
}
export const QueryAuthenticateRequest = {
  typeUrl: "/xion.dkim.v1.QueryAuthenticateRequest",
  encode(message: QueryAuthenticateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.emailHash !== "") {
      writer.uint32(18).string(message.emailHash);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    for (const v of message.publicInputs) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedEmailHosts) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthenticateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.emailHash = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.publicInputs.push(reader.string());
          break;
        case 5:
          message.allowedEmailHosts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAuthenticateRequest>): QueryAuthenticateRequest {
    const message = createBaseQueryAuthenticateRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.emailHash = object.emailHash ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.publicInputs = object.publicInputs?.map(e => e) || [];
    message.allowedEmailHosts = object.allowedEmailHosts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAuthenticateRequestAmino): QueryAuthenticateRequest {
    const message = createBaseQueryAuthenticateRequest();
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    if (object.email_hash !== undefined && object.email_hash !== null) {
      message.emailHash = object.email_hash;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    message.publicInputs = object.public_inputs?.map(e => e) || [];
    message.allowedEmailHosts = object.allowed_email_hosts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAuthenticateRequest): QueryAuthenticateRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    obj.email_hash = message.emailHash === "" ? undefined : message.emailHash;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    if (message.publicInputs) {
      obj.public_inputs = message.publicInputs.map(e => e);
    } else {
      obj.public_inputs = message.publicInputs;
    }
    if (message.allowedEmailHosts) {
      obj.allowed_email_hosts = message.allowedEmailHosts.map(e => e);
    } else {
      obj.allowed_email_hosts = message.allowedEmailHosts;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAuthenticateRequestAminoMsg): QueryAuthenticateRequest {
    return QueryAuthenticateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuthenticateRequestProtoMsg): QueryAuthenticateRequest {
    return QueryAuthenticateRequest.decode(message.value);
  },
  toProto(message: QueryAuthenticateRequest): Uint8Array {
    return QueryAuthenticateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuthenticateRequest): QueryAuthenticateRequestProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.QueryAuthenticateRequest",
      value: QueryAuthenticateRequest.encode(message).finish()
    };
  }
};
function createBaseAuthenticateResponse(): AuthenticateResponse {
  return {
    verified: false
  };
}
export const AuthenticateResponse = {
  typeUrl: "/xion.dkim.v1.AuthenticateResponse",
  encode(message: AuthenticateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.verified === true) {
      writer.uint32(8).bool(message.verified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AuthenticateResponse>): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    message.verified = object.verified ?? false;
    return message;
  },
  fromAmino(object: AuthenticateResponseAmino): AuthenticateResponse {
    const message = createBaseAuthenticateResponse();
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    return message;
  },
  toAmino(message: AuthenticateResponse): AuthenticateResponseAmino {
    const obj: any = {};
    obj.verified = message.verified === false ? undefined : message.verified;
    return obj;
  },
  fromAminoMsg(object: AuthenticateResponseAminoMsg): AuthenticateResponse {
    return AuthenticateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthenticateResponseProtoMsg): AuthenticateResponse {
    return AuthenticateResponse.decode(message.value);
  },
  toProto(message: AuthenticateResponse): Uint8Array {
    return AuthenticateResponse.encode(message).finish();
  },
  toProtoMsg(message: AuthenticateResponse): AuthenticateResponseProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.AuthenticateResponse",
      value: AuthenticateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/xion.dkim.v1.QueryParamsRequest",
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
      typeUrl: "/xion.dkim.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/xion.dkim.v1.QueryParamsResponse",
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
      typeUrl: "/xion.dkim.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};