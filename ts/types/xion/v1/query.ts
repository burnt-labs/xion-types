//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/**
 * QueryWebAuthNVerifyRegisterRequest is the request type for WebAuthN
 * registration verification
 */
export interface QueryWebAuthNVerifyRegisterRequest {
  /** The account address */
  addr: string;
  /** The challenge string for registration */
  challenge: string;
  /** The relying party identifier */
  rp: string;
  /** The registration data */
  data: Uint8Array;
}
export interface QueryWebAuthNVerifyRegisterRequestProtoMsg {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterRequest";
  value: Uint8Array;
}
/**
 * QueryWebAuthNVerifyRegisterRequest is the request type for WebAuthN
 * registration verification
 * @name QueryWebAuthNVerifyRegisterRequestAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryWebAuthNVerifyRegisterRequest
 */
export interface QueryWebAuthNVerifyRegisterRequestAmino {
  /**
   * The account address
   */
  addr?: string;
  /**
   * The challenge string for registration
   */
  challenge?: string;
  /**
   * The relying party identifier
   */
  rp?: string;
  /**
   * The registration data
   */
  data?: string;
}
export interface QueryWebAuthNVerifyRegisterRequestAminoMsg {
  type: "/xion.v1.QueryWebAuthNVerifyRegisterRequest";
  value: QueryWebAuthNVerifyRegisterRequestAmino;
}
/**
 * QueryWebAuthNVerifyRegisterRequest is the request type for WebAuthN
 * registration verification
 */
export interface QueryWebAuthNVerifyRegisterRequestSDKType {
  addr: string;
  challenge: string;
  rp: string;
  data: Uint8Array;
}
/**
 * QueryWebAuthNVerifyRegisterResponse is the response type for WebAuthN
 * registration verification
 */
export interface QueryWebAuthNVerifyRegisterResponse {
  /** The generated credential */
  credential: Uint8Array;
}
export interface QueryWebAuthNVerifyRegisterResponseProtoMsg {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterResponse";
  value: Uint8Array;
}
/**
 * QueryWebAuthNVerifyRegisterResponse is the response type for WebAuthN
 * registration verification
 * @name QueryWebAuthNVerifyRegisterResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryWebAuthNVerifyRegisterResponse
 */
export interface QueryWebAuthNVerifyRegisterResponseAmino {
  /**
   * The generated credential
   */
  credential?: string;
}
export interface QueryWebAuthNVerifyRegisterResponseAminoMsg {
  type: "/xion.v1.QueryWebAuthNVerifyRegisterResponse";
  value: QueryWebAuthNVerifyRegisterResponseAmino;
}
/**
 * QueryWebAuthNVerifyRegisterResponse is the response type for WebAuthN
 * registration verification
 */
export interface QueryWebAuthNVerifyRegisterResponseSDKType {
  credential: Uint8Array;
}
/**
 * QueryWebAuthNVerifyAuthenticateRequest is the request type for WebAuthN
 * authentication verification
 */
export interface QueryWebAuthNVerifyAuthenticateRequest {
  /** The account address */
  addr: string;
  /** The challenge string for authentication */
  challenge: string;
  /** The relying party identifier */
  rp: string;
  /** The credential to verify */
  credential: Uint8Array;
  /** The authentication data */
  data: Uint8Array;
}
export interface QueryWebAuthNVerifyAuthenticateRequestProtoMsg {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateRequest";
  value: Uint8Array;
}
/**
 * QueryWebAuthNVerifyAuthenticateRequest is the request type for WebAuthN
 * authentication verification
 * @name QueryWebAuthNVerifyAuthenticateRequestAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryWebAuthNVerifyAuthenticateRequest
 */
export interface QueryWebAuthNVerifyAuthenticateRequestAmino {
  /**
   * The account address
   */
  addr?: string;
  /**
   * The challenge string for authentication
   */
  challenge?: string;
  /**
   * The relying party identifier
   */
  rp?: string;
  /**
   * The credential to verify
   */
  credential?: string;
  /**
   * The authentication data
   */
  data?: string;
}
export interface QueryWebAuthNVerifyAuthenticateRequestAminoMsg {
  type: "/xion.v1.QueryWebAuthNVerifyAuthenticateRequest";
  value: QueryWebAuthNVerifyAuthenticateRequestAmino;
}
/**
 * QueryWebAuthNVerifyAuthenticateRequest is the request type for WebAuthN
 * authentication verification
 */
export interface QueryWebAuthNVerifyAuthenticateRequestSDKType {
  addr: string;
  challenge: string;
  rp: string;
  credential: Uint8Array;
  data: Uint8Array;
}
/**
 * QueryWebAuthNVerifyAuthenticateResponse is the response type for WebAuthN
 * authentication verification
 */
export interface QueryWebAuthNVerifyAuthenticateResponse {}
export interface QueryWebAuthNVerifyAuthenticateResponseProtoMsg {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateResponse";
  value: Uint8Array;
}
/**
 * QueryWebAuthNVerifyAuthenticateResponse is the response type for WebAuthN
 * authentication verification
 * @name QueryWebAuthNVerifyAuthenticateResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryWebAuthNVerifyAuthenticateResponse
 */
export interface QueryWebAuthNVerifyAuthenticateResponseAmino {}
export interface QueryWebAuthNVerifyAuthenticateResponseAminoMsg {
  type: "/xion.v1.QueryWebAuthNVerifyAuthenticateResponse";
  value: QueryWebAuthNVerifyAuthenticateResponseAmino;
}
/**
 * QueryWebAuthNVerifyAuthenticateResponse is the response type for WebAuthN
 * authentication verification
 */
export interface QueryWebAuthNVerifyAuthenticateResponseSDKType {}
/**
 * QueryPlatformPercentageRequest is the request type for querying platform
 * percentage
 */
export interface QueryPlatformPercentageRequest {}
export interface QueryPlatformPercentageRequestProtoMsg {
  typeUrl: "/xion.v1.QueryPlatformPercentageRequest";
  value: Uint8Array;
}
/**
 * QueryPlatformPercentageRequest is the request type for querying platform
 * percentage
 * @name QueryPlatformPercentageRequestAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryPlatformPercentageRequest
 */
export interface QueryPlatformPercentageRequestAmino {}
export interface QueryPlatformPercentageRequestAminoMsg {
  type: "/xion.v1.QueryPlatformPercentageRequest";
  value: QueryPlatformPercentageRequestAmino;
}
/**
 * QueryPlatformPercentageRequest is the request type for querying platform
 * percentage
 */
export interface QueryPlatformPercentageRequestSDKType {}
/**
 * QueryPlatformPercentageResponse is the response type for querying platform
 * percentage
 */
export interface QueryPlatformPercentageResponse {
  /** The platform percentage fee */
  platformPercentage: bigint;
}
export interface QueryPlatformPercentageResponseProtoMsg {
  typeUrl: "/xion.v1.QueryPlatformPercentageResponse";
  value: Uint8Array;
}
/**
 * QueryPlatformPercentageResponse is the response type for querying platform
 * percentage
 * @name QueryPlatformPercentageResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryPlatformPercentageResponse
 */
export interface QueryPlatformPercentageResponseAmino {
  /**
   * The platform percentage fee
   */
  platform_percentage?: string;
}
export interface QueryPlatformPercentageResponseAminoMsg {
  type: "/xion.v1.QueryPlatformPercentageResponse";
  value: QueryPlatformPercentageResponseAmino;
}
/**
 * QueryPlatformPercentageResponse is the response type for querying platform
 * percentage
 */
export interface QueryPlatformPercentageResponseSDKType {
  platform_percentage: bigint;
}
/**
 * QueryPlatformMinimumRequest is the request type for querying platform minimum
 * fees
 */
export interface QueryPlatformMinimumRequest {}
export interface QueryPlatformMinimumRequestProtoMsg {
  typeUrl: "/xion.v1.QueryPlatformMinimumRequest";
  value: Uint8Array;
}
/**
 * QueryPlatformMinimumRequest is the request type for querying platform minimum
 * fees
 * @name QueryPlatformMinimumRequestAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryPlatformMinimumRequest
 */
export interface QueryPlatformMinimumRequestAmino {}
export interface QueryPlatformMinimumRequestAminoMsg {
  type: "/xion.v1.QueryPlatformMinimumRequest";
  value: QueryPlatformMinimumRequestAmino;
}
/**
 * QueryPlatformMinimumRequest is the request type for querying platform minimum
 * fees
 */
export interface QueryPlatformMinimumRequestSDKType {}
/**
 * QueryPlatformMinimumResponse is the response type for querying platform
 * minimum fees
 */
export interface QueryPlatformMinimumResponse {
  /** The minimum fees required by the platform */
  minimums: Coin[];
}
export interface QueryPlatformMinimumResponseProtoMsg {
  typeUrl: "/xion.v1.QueryPlatformMinimumResponse";
  value: Uint8Array;
}
/**
 * QueryPlatformMinimumResponse is the response type for querying platform
 * minimum fees
 * @name QueryPlatformMinimumResponseAmino
 * @package xion.v1
 * @see proto type: xion.v1.QueryPlatformMinimumResponse
 */
export interface QueryPlatformMinimumResponseAmino {
  /**
   * The minimum fees required by the platform
   */
  minimums?: CoinAmino[];
}
export interface QueryPlatformMinimumResponseAminoMsg {
  type: "/xion.v1.QueryPlatformMinimumResponse";
  value: QueryPlatformMinimumResponseAmino;
}
/**
 * QueryPlatformMinimumResponse is the response type for querying platform
 * minimum fees
 */
export interface QueryPlatformMinimumResponseSDKType {
  minimums: CoinSDKType[];
}
function createBaseQueryWebAuthNVerifyRegisterRequest(): QueryWebAuthNVerifyRegisterRequest {
  return {
    addr: "",
    challenge: "",
    rp: "",
    data: new Uint8Array()
  };
}
export const QueryWebAuthNVerifyRegisterRequest = {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterRequest",
  encode(message: QueryWebAuthNVerifyRegisterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.challenge !== "") {
      writer.uint32(18).string(message.challenge);
    }
    if (message.rp !== "") {
      writer.uint32(26).string(message.rp);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebAuthNVerifyRegisterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebAuthNVerifyRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.challenge = reader.string();
          break;
        case 3:
          message.rp = reader.string();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWebAuthNVerifyRegisterRequest>): QueryWebAuthNVerifyRegisterRequest {
    const message = createBaseQueryWebAuthNVerifyRegisterRequest();
    message.addr = object.addr ?? "";
    message.challenge = object.challenge ?? "";
    message.rp = object.rp ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryWebAuthNVerifyRegisterRequestAmino): QueryWebAuthNVerifyRegisterRequest {
    const message = createBaseQueryWebAuthNVerifyRegisterRequest();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = object.challenge;
    }
    if (object.rp !== undefined && object.rp !== null) {
      message.rp = object.rp;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryWebAuthNVerifyRegisterRequest): QueryWebAuthNVerifyRegisterRequestAmino {
    const obj: any = {};
    obj.addr = message.addr === "" ? undefined : message.addr;
    obj.challenge = message.challenge === "" ? undefined : message.challenge;
    obj.rp = message.rp === "" ? undefined : message.rp;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWebAuthNVerifyRegisterRequestAminoMsg): QueryWebAuthNVerifyRegisterRequest {
    return QueryWebAuthNVerifyRegisterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebAuthNVerifyRegisterRequestProtoMsg): QueryWebAuthNVerifyRegisterRequest {
    return QueryWebAuthNVerifyRegisterRequest.decode(message.value);
  },
  toProto(message: QueryWebAuthNVerifyRegisterRequest): Uint8Array {
    return QueryWebAuthNVerifyRegisterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWebAuthNVerifyRegisterRequest): QueryWebAuthNVerifyRegisterRequestProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterRequest",
      value: QueryWebAuthNVerifyRegisterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWebAuthNVerifyRegisterResponse(): QueryWebAuthNVerifyRegisterResponse {
  return {
    credential: new Uint8Array()
  };
}
export const QueryWebAuthNVerifyRegisterResponse = {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterResponse",
  encode(message: QueryWebAuthNVerifyRegisterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.credential.length !== 0) {
      writer.uint32(10).bytes(message.credential);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebAuthNVerifyRegisterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebAuthNVerifyRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credential = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWebAuthNVerifyRegisterResponse>): QueryWebAuthNVerifyRegisterResponse {
    const message = createBaseQueryWebAuthNVerifyRegisterResponse();
    message.credential = object.credential ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryWebAuthNVerifyRegisterResponseAmino): QueryWebAuthNVerifyRegisterResponse {
    const message = createBaseQueryWebAuthNVerifyRegisterResponse();
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = bytesFromBase64(object.credential);
    }
    return message;
  },
  toAmino(message: QueryWebAuthNVerifyRegisterResponse): QueryWebAuthNVerifyRegisterResponseAmino {
    const obj: any = {};
    obj.credential = message.credential ? base64FromBytes(message.credential) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWebAuthNVerifyRegisterResponseAminoMsg): QueryWebAuthNVerifyRegisterResponse {
    return QueryWebAuthNVerifyRegisterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebAuthNVerifyRegisterResponseProtoMsg): QueryWebAuthNVerifyRegisterResponse {
    return QueryWebAuthNVerifyRegisterResponse.decode(message.value);
  },
  toProto(message: QueryWebAuthNVerifyRegisterResponse): Uint8Array {
    return QueryWebAuthNVerifyRegisterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWebAuthNVerifyRegisterResponse): QueryWebAuthNVerifyRegisterResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryWebAuthNVerifyRegisterResponse",
      value: QueryWebAuthNVerifyRegisterResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWebAuthNVerifyAuthenticateRequest(): QueryWebAuthNVerifyAuthenticateRequest {
  return {
    addr: "",
    challenge: "",
    rp: "",
    credential: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const QueryWebAuthNVerifyAuthenticateRequest = {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateRequest",
  encode(message: QueryWebAuthNVerifyAuthenticateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.challenge !== "") {
      writer.uint32(18).string(message.challenge);
    }
    if (message.rp !== "") {
      writer.uint32(26).string(message.rp);
    }
    if (message.credential.length !== 0) {
      writer.uint32(34).bytes(message.credential);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebAuthNVerifyAuthenticateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebAuthNVerifyAuthenticateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.challenge = reader.string();
          break;
        case 3:
          message.rp = reader.string();
          break;
        case 4:
          message.credential = reader.bytes();
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryWebAuthNVerifyAuthenticateRequest>): QueryWebAuthNVerifyAuthenticateRequest {
    const message = createBaseQueryWebAuthNVerifyAuthenticateRequest();
    message.addr = object.addr ?? "";
    message.challenge = object.challenge ?? "";
    message.rp = object.rp ?? "";
    message.credential = object.credential ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryWebAuthNVerifyAuthenticateRequestAmino): QueryWebAuthNVerifyAuthenticateRequest {
    const message = createBaseQueryWebAuthNVerifyAuthenticateRequest();
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    }
    if (object.challenge !== undefined && object.challenge !== null) {
      message.challenge = object.challenge;
    }
    if (object.rp !== undefined && object.rp !== null) {
      message.rp = object.rp;
    }
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = bytesFromBase64(object.credential);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: QueryWebAuthNVerifyAuthenticateRequest): QueryWebAuthNVerifyAuthenticateRequestAmino {
    const obj: any = {};
    obj.addr = message.addr === "" ? undefined : message.addr;
    obj.challenge = message.challenge === "" ? undefined : message.challenge;
    obj.rp = message.rp === "" ? undefined : message.rp;
    obj.credential = message.credential ? base64FromBytes(message.credential) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWebAuthNVerifyAuthenticateRequestAminoMsg): QueryWebAuthNVerifyAuthenticateRequest {
    return QueryWebAuthNVerifyAuthenticateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebAuthNVerifyAuthenticateRequestProtoMsg): QueryWebAuthNVerifyAuthenticateRequest {
    return QueryWebAuthNVerifyAuthenticateRequest.decode(message.value);
  },
  toProto(message: QueryWebAuthNVerifyAuthenticateRequest): Uint8Array {
    return QueryWebAuthNVerifyAuthenticateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWebAuthNVerifyAuthenticateRequest): QueryWebAuthNVerifyAuthenticateRequestProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateRequest",
      value: QueryWebAuthNVerifyAuthenticateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWebAuthNVerifyAuthenticateResponse(): QueryWebAuthNVerifyAuthenticateResponse {
  return {};
}
export const QueryWebAuthNVerifyAuthenticateResponse = {
  typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateResponse",
  encode(_: QueryWebAuthNVerifyAuthenticateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWebAuthNVerifyAuthenticateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWebAuthNVerifyAuthenticateResponse();
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
  fromPartial(_: Partial<QueryWebAuthNVerifyAuthenticateResponse>): QueryWebAuthNVerifyAuthenticateResponse {
    const message = createBaseQueryWebAuthNVerifyAuthenticateResponse();
    return message;
  },
  fromAmino(_: QueryWebAuthNVerifyAuthenticateResponseAmino): QueryWebAuthNVerifyAuthenticateResponse {
    const message = createBaseQueryWebAuthNVerifyAuthenticateResponse();
    return message;
  },
  toAmino(_: QueryWebAuthNVerifyAuthenticateResponse): QueryWebAuthNVerifyAuthenticateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWebAuthNVerifyAuthenticateResponseAminoMsg): QueryWebAuthNVerifyAuthenticateResponse {
    return QueryWebAuthNVerifyAuthenticateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWebAuthNVerifyAuthenticateResponseProtoMsg): QueryWebAuthNVerifyAuthenticateResponse {
    return QueryWebAuthNVerifyAuthenticateResponse.decode(message.value);
  },
  toProto(message: QueryWebAuthNVerifyAuthenticateResponse): Uint8Array {
    return QueryWebAuthNVerifyAuthenticateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWebAuthNVerifyAuthenticateResponse): QueryWebAuthNVerifyAuthenticateResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryWebAuthNVerifyAuthenticateResponse",
      value: QueryWebAuthNVerifyAuthenticateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformPercentageRequest(): QueryPlatformPercentageRequest {
  return {};
}
export const QueryPlatformPercentageRequest = {
  typeUrl: "/xion.v1.QueryPlatformPercentageRequest",
  encode(_: QueryPlatformPercentageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlatformPercentageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlatformPercentageRequest();
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
  fromPartial(_: Partial<QueryPlatformPercentageRequest>): QueryPlatformPercentageRequest {
    const message = createBaseQueryPlatformPercentageRequest();
    return message;
  },
  fromAmino(_: QueryPlatformPercentageRequestAmino): QueryPlatformPercentageRequest {
    const message = createBaseQueryPlatformPercentageRequest();
    return message;
  },
  toAmino(_: QueryPlatformPercentageRequest): QueryPlatformPercentageRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPlatformPercentageRequestAminoMsg): QueryPlatformPercentageRequest {
    return QueryPlatformPercentageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformPercentageRequestProtoMsg): QueryPlatformPercentageRequest {
    return QueryPlatformPercentageRequest.decode(message.value);
  },
  toProto(message: QueryPlatformPercentageRequest): Uint8Array {
    return QueryPlatformPercentageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformPercentageRequest): QueryPlatformPercentageRequestProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryPlatformPercentageRequest",
      value: QueryPlatformPercentageRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformPercentageResponse(): QueryPlatformPercentageResponse {
  return {
    platformPercentage: BigInt(0)
  };
}
export const QueryPlatformPercentageResponse = {
  typeUrl: "/xion.v1.QueryPlatformPercentageResponse",
  encode(message: QueryPlatformPercentageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.platformPercentage !== BigInt(0)) {
      writer.uint32(8).uint64(message.platformPercentage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlatformPercentageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlatformPercentageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platformPercentage = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryPlatformPercentageResponse>): QueryPlatformPercentageResponse {
    const message = createBaseQueryPlatformPercentageResponse();
    message.platformPercentage = object.platformPercentage !== undefined && object.platformPercentage !== null ? BigInt(object.platformPercentage.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPlatformPercentageResponseAmino): QueryPlatformPercentageResponse {
    const message = createBaseQueryPlatformPercentageResponse();
    if (object.platform_percentage !== undefined && object.platform_percentage !== null) {
      message.platformPercentage = BigInt(object.platform_percentage);
    }
    return message;
  },
  toAmino(message: QueryPlatformPercentageResponse): QueryPlatformPercentageResponseAmino {
    const obj: any = {};
    obj.platform_percentage = message.platformPercentage !== BigInt(0) ? message.platformPercentage?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPlatformPercentageResponseAminoMsg): QueryPlatformPercentageResponse {
    return QueryPlatformPercentageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformPercentageResponseProtoMsg): QueryPlatformPercentageResponse {
    return QueryPlatformPercentageResponse.decode(message.value);
  },
  toProto(message: QueryPlatformPercentageResponse): Uint8Array {
    return QueryPlatformPercentageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformPercentageResponse): QueryPlatformPercentageResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryPlatformPercentageResponse",
      value: QueryPlatformPercentageResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformMinimumRequest(): QueryPlatformMinimumRequest {
  return {};
}
export const QueryPlatformMinimumRequest = {
  typeUrl: "/xion.v1.QueryPlatformMinimumRequest",
  encode(_: QueryPlatformMinimumRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlatformMinimumRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlatformMinimumRequest();
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
  fromPartial(_: Partial<QueryPlatformMinimumRequest>): QueryPlatformMinimumRequest {
    const message = createBaseQueryPlatformMinimumRequest();
    return message;
  },
  fromAmino(_: QueryPlatformMinimumRequestAmino): QueryPlatformMinimumRequest {
    const message = createBaseQueryPlatformMinimumRequest();
    return message;
  },
  toAmino(_: QueryPlatformMinimumRequest): QueryPlatformMinimumRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPlatformMinimumRequestAminoMsg): QueryPlatformMinimumRequest {
    return QueryPlatformMinimumRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformMinimumRequestProtoMsg): QueryPlatformMinimumRequest {
    return QueryPlatformMinimumRequest.decode(message.value);
  },
  toProto(message: QueryPlatformMinimumRequest): Uint8Array {
    return QueryPlatformMinimumRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformMinimumRequest): QueryPlatformMinimumRequestProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryPlatformMinimumRequest",
      value: QueryPlatformMinimumRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPlatformMinimumResponse(): QueryPlatformMinimumResponse {
  return {
    minimums: []
  };
}
export const QueryPlatformMinimumResponse = {
  typeUrl: "/xion.v1.QueryPlatformMinimumResponse",
  encode(message: QueryPlatformMinimumResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minimums) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPlatformMinimumResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPlatformMinimumResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromPartial(object: Partial<QueryPlatformMinimumResponse>): QueryPlatformMinimumResponse {
    const message = createBaseQueryPlatformMinimumResponse();
    message.minimums = object.minimums?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPlatformMinimumResponseAmino): QueryPlatformMinimumResponse {
    const message = createBaseQueryPlatformMinimumResponse();
    message.minimums = object.minimums?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPlatformMinimumResponse): QueryPlatformMinimumResponseAmino {
    const obj: any = {};
    if (message.minimums) {
      obj.minimums = message.minimums.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.minimums = message.minimums;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPlatformMinimumResponseAminoMsg): QueryPlatformMinimumResponse {
    return QueryPlatformMinimumResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPlatformMinimumResponseProtoMsg): QueryPlatformMinimumResponse {
    return QueryPlatformMinimumResponse.decode(message.value);
  },
  toProto(message: QueryPlatformMinimumResponse): Uint8Array {
    return QueryPlatformMinimumResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPlatformMinimumResponse): QueryPlatformMinimumResponseProtoMsg {
    return {
      typeUrl: "/xion.v1.QueryPlatformMinimumResponse",
      value: QueryPlatformMinimumResponse.encode(message).finish()
    };
  }
};