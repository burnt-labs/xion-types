//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType, GrantAuthorization, GrantAuthorizationAmino, GrantAuthorizationSDKType } from "../../../../cosmos/authz/v1beta1/authz";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
  /** granter is the address of the user granting an authorization */
  granter: string;
  /** grantee is the address of the user receiving an authorization */
  grantee: string;
  /**
   * Optional, msg_type_url, when set, will query only grants matching given msg
   * type.
   */
  msgTypeUrl: string;
  /** pagination defines pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGrantsRequestProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 * @name QueryGrantsRequestAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGrantsRequest
 */
export interface QueryGrantsRequestAmino {
  /**
   * granter is the address of the user granting an authorization
   */
  granter?: string;
  /**
   * grantee is the address of the user receiving an authorization
   */
  grantee?: string;
  /**
   * Optional, msg_type_url, when set, will query only grants matching given msg
   * type.
   */
  msg_type_url?: string;
  /**
   * pagination defines pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryGrantsRequestAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGrantsRequest";
  value: QueryGrantsRequestAmino;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
  granter: string;
  grantee: string;
  msg_type_url: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC
 * method.
 */
export interface QueryGrantsResponse {
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: Grant[];
  /** pagination defines pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGrantsResponseProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC
 * method.
 * @name QueryGrantsResponseAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGrantsResponse
 */
export interface QueryGrantsResponseAmino {
  /**
   * authorizations is a list of grants granted for grantee by granter.
   */
  grants?: GrantAmino[];
  /**
   * pagination defines pagination for the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryGrantsResponseAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGrantsResponse";
  value: QueryGrantsResponseAmino;
}
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC
 * method.
 */
export interface QueryGrantsResponseSDKType {
  grants: GrantSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC
 * method.
 */
export interface QueryGranterGrantsRequest {
  /** granter is the address of the user granting an authorization */
  granter: string;
  /** pagination defines pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGranterGrantsRequestProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC
 * method.
 * @name QueryGranterGrantsRequestAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGranterGrantsRequest
 */
export interface QueryGranterGrantsRequestAmino {
  /**
   * granter is the address of the user granting an authorization
   */
  granter?: string;
  /**
   * pagination defines pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryGranterGrantsRequestAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGranterGrantsRequest";
  value: QueryGranterGrantsRequestAmino;
}
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC
 * method.
 */
export interface QueryGranterGrantsRequestSDKType {
  granter: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants
 * RPC method.
 */
export interface QueryGranterGrantsResponse {
  /** grants is a list of grants granted by the granter. */
  grants: GrantAuthorization[];
  /** pagination defines pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGranterGrantsResponseProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants
 * RPC method.
 * @name QueryGranterGrantsResponseAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGranterGrantsResponse
 */
export interface QueryGranterGrantsResponseAmino {
  /**
   * grants is a list of grants granted by the granter.
   */
  grants?: GrantAuthorizationAmino[];
  /**
   * pagination defines pagination for the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryGranterGrantsResponseAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGranterGrantsResponse";
  value: QueryGranterGrantsResponseAmino;
}
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants
 * RPC method.
 */
export interface QueryGranterGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC
 * method.
 */
export interface QueryGranteeGrantsRequest {
  /** grantee is the address of the user receiving an authorization */
  grantee: string;
  /** pagination defines pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryGranteeGrantsRequestProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsRequest";
  value: Uint8Array;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC
 * method.
 * @name QueryGranteeGrantsRequestAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGranteeGrantsRequest
 */
export interface QueryGranteeGrantsRequestAmino {
  /**
   * grantee is the address of the user receiving an authorization
   */
  grantee?: string;
  /**
   * pagination defines pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryGranteeGrantsRequestAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGranteeGrantsRequest";
  value: QueryGranteeGrantsRequestAmino;
}
/**
 * QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC
 * method.
 */
export interface QueryGranteeGrantsRequestSDKType {
  grantee: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants
 * RPC method.
 */
export interface QueryGranteeGrantsResponse {
  /** grants is a list of grants granted to the grantee. */
  grants: GrantAuthorization[];
  /** pagination defines pagination for the response. */
  pagination?: PageResponse;
}
export interface QueryGranteeGrantsResponseProtoMsg {
  typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsResponse";
  value: Uint8Array;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants
 * RPC method.
 * @name QueryGranteeGrantsResponseAmino
 * @package xion.indexer.authz.v1
 * @see proto type: xion.indexer.authz.v1.QueryGranteeGrantsResponse
 */
export interface QueryGranteeGrantsResponseAmino {
  /**
   * grants is a list of grants granted to the grantee.
   */
  grants?: GrantAuthorizationAmino[];
  /**
   * pagination defines pagination for the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryGranteeGrantsResponseAminoMsg {
  type: "/xion.indexer.authz.v1.QueryGranteeGrantsResponse";
  value: QueryGranteeGrantsResponseAmino;
}
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants
 * RPC method.
 */
export interface QueryGranteeGrantsResponseSDKType {
  grants: GrantAuthorizationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: "",
    pagination: undefined
  };
}
export const QueryGrantsRequest = {
  typeUrl: "/xion.indexer.authz.v1.QueryGrantsRequest",
  encode(message: QueryGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
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
  fromPartial(object: Partial<QueryGrantsRequest>): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsRequestAminoMsg): QueryGrantsRequest {
    return QueryGrantsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest {
    return QueryGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGrantsRequest): Uint8Array {
    return QueryGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGrantsRequest",
      value: QueryGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGrantsResponse = {
  typeUrl: "/xion.indexer.authz.v1.QueryGrantsResponse",
  encode(message: QueryGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryGrantsResponse>): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGrantsResponseAminoMsg): QueryGrantsResponse {
    return QueryGrantsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse {
    return QueryGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGrantsResponse): Uint8Array {
    return QueryGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGrantsResponse",
      value: QueryGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
  return {
    granter: "",
    pagination: undefined
  };
}
export const QueryGranterGrantsRequest = {
  typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsRequest",
  encode(message: QueryGranterGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGranterGrantsRequest>): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = object.granter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranterGrantsRequestAmino): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranterGrantsRequestAminoMsg): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGranterGrantsRequestProtoMsg): QueryGranterGrantsRequest {
    return QueryGranterGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranterGrantsRequest): Uint8Array {
    return QueryGranterGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsRequest): QueryGranterGrantsRequestProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsRequest",
      value: QueryGranterGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranterGrantsResponse = {
  typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsResponse",
  encode(message: QueryGranterGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranterGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryGranterGrantsResponse>): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranterGrantsResponseAmino): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranterGrantsResponseAminoMsg): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGranterGrantsResponseProtoMsg): QueryGranterGrantsResponse {
    return QueryGranterGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranterGrantsResponse): Uint8Array {
    return QueryGranterGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranterGrantsResponse): QueryGranterGrantsResponseProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGranterGrantsResponse",
      value: QueryGranterGrantsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return {
    grantee: "",
    pagination: undefined
  };
}
export const QueryGranteeGrantsRequest = {
  typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsRequest",
  encode(message: QueryGranteeGrantsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryGranteeGrantsRequest>): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranteeGrantsRequestAmino): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranteeGrantsRequestAminoMsg): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGranteeGrantsRequestProtoMsg): QueryGranteeGrantsRequest {
    return QueryGranteeGrantsRequest.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsRequest): Uint8Array {
    return QueryGranteeGrantsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsRequest): QueryGranteeGrantsRequestProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsRequest",
      value: QueryGranteeGrantsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return {
    grants: [],
    pagination: undefined
  };
}
export const QueryGranteeGrantsResponse = {
  typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsResponse",
  encode(message: QueryGranteeGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGranteeGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(GrantAuthorization.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryGranteeGrantsResponse>): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGranteeGrantsResponseAmino): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants = object.grants?.map(e => GrantAuthorization.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGranteeGrantsResponseAminoMsg): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGranteeGrantsResponseProtoMsg): QueryGranteeGrantsResponse {
    return QueryGranteeGrantsResponse.decode(message.value);
  },
  toProto(message: QueryGranteeGrantsResponse): Uint8Array {
    return QueryGranteeGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGranteeGrantsResponse): QueryGranteeGrantsResponseProtoMsg {
    return {
      typeUrl: "/xion.indexer.authz.v1.QueryGranteeGrantsResponse",
      value: QueryGranteeGrantsResponse.encode(message).finish()
    };
  }
};