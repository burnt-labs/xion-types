//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { RequestQuery, RequestQueryAmino, RequestQuerySDKType, ResponseQuery, ResponseQueryAmino, ResponseQuerySDKType } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryArithmeticTwapToNowRequest */
export interface QueryArithmeticTwapToNowRequest {
  /** pool_id defines the pool identifier */
  poolId: bigint;
  /** base_asset defines the base asset for the TWAP calculation */
  baseAsset: string;
  /** quote_asset defines the quote asset for the TWAP calculation */
  quoteAsset: string;
  /** start_time defines the start time for the TWAP calculation */
  startTime: Date;
}
export interface QueryArithmeticTwapToNowRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowRequest";
  value: Uint8Array;
}
/**
 * QueryArithmeticTwapToNowRequest
 * @name QueryArithmeticTwapToNowRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryArithmeticTwapToNowRequest
 */
export interface QueryArithmeticTwapToNowRequestAmino {
  /**
   * pool_id defines the pool identifier
   */
  pool_id?: string;
  /**
   * base_asset defines the base asset for the TWAP calculation
   */
  base_asset?: string;
  /**
   * quote_asset defines the quote asset for the TWAP calculation
   */
  quote_asset?: string;
  /**
   * start_time defines the start time for the TWAP calculation
   */
  start_time?: string;
}
export interface QueryArithmeticTwapToNowRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowRequest";
  value: QueryArithmeticTwapToNowRequestAmino;
}
/** QueryArithmeticTwapToNowRequest */
export interface QueryArithmeticTwapToNowRequestSDKType {
  pool_id: bigint;
  base_asset: string;
  quote_asset: string;
  start_time: Date;
}
/** QueryArithmeticTwapToNowResponse */
export interface QueryArithmeticTwapToNowResponse {
  /**
   * arithmetic_twap defines the calculated arithmetic time-weighted average
   * price
   */
  arithmeticTwap: string;
}
export interface QueryArithmeticTwapToNowResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowResponse";
  value: Uint8Array;
}
/**
 * QueryArithmeticTwapToNowResponse
 * @name QueryArithmeticTwapToNowResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryArithmeticTwapToNowResponse
 */
export interface QueryArithmeticTwapToNowResponseAmino {
  /**
   * arithmetic_twap defines the calculated arithmetic time-weighted average
   * price
   */
  arithmetic_twap?: string;
}
export interface QueryArithmeticTwapToNowResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowResponse";
  value: QueryArithmeticTwapToNowResponseAmino;
}
/** QueryArithmeticTwapToNowResponse */
export interface QueryArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
/** InterchainQueryRequest */
export interface InterchainQueryRequest {
  /** data defines the raw query data */
  data: Uint8Array;
  /** path defines the query path */
  path: string;
}
export interface InterchainQueryRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequest";
  value: Uint8Array;
}
/**
 * InterchainQueryRequest
 * @name InterchainQueryRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.InterchainQueryRequest
 */
export interface InterchainQueryRequestAmino {
  /**
   * data defines the raw query data
   */
  data?: string;
  /**
   * path defines the query path
   */
  path?: string;
}
export interface InterchainQueryRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.InterchainQueryRequest";
  value: InterchainQueryRequestAmino;
}
/** InterchainQueryRequest */
export interface InterchainQueryRequestSDKType {
  data: Uint8Array;
  path: string;
}
/** InterchainQueryPacketData is comprised of raw query. */
export interface InterchainQueryPacketData {
  /** data defines the raw query data */
  data: Uint8Array;
  /** optional memo */
  memo: string;
}
export interface InterchainQueryPacketDataProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketData";
  value: Uint8Array;
}
/**
 * InterchainQueryPacketData is comprised of raw query.
 * @name InterchainQueryPacketDataAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.InterchainQueryPacketData
 */
export interface InterchainQueryPacketDataAmino {
  /**
   * data defines the raw query data
   */
  data?: string;
  /**
   * optional memo
   */
  memo?: string;
}
export interface InterchainQueryPacketDataAminoMsg {
  type: "/xion.feeabs.v1beta1.InterchainQueryPacketData";
  value: InterchainQueryPacketDataAmino;
}
/** InterchainQueryPacketData is comprised of raw query. */
export interface InterchainQueryPacketDataSDKType {
  data: Uint8Array;
  memo: string;
}
/**
 * InterchainQueryPacketAck is comprised of an ABCI query response with
 * non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).
 */
export interface InterchainQueryPacketAck {
  /** data defines the query response data */
  data: Uint8Array;
}
export interface InterchainQueryPacketAckProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketAck";
  value: Uint8Array;
}
/**
 * InterchainQueryPacketAck is comprised of an ABCI query response with
 * non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).
 * @name InterchainQueryPacketAckAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.InterchainQueryPacketAck
 */
export interface InterchainQueryPacketAckAmino {
  /**
   * data defines the query response data
   */
  data?: string;
}
export interface InterchainQueryPacketAckAminoMsg {
  type: "/xion.feeabs.v1beta1.InterchainQueryPacketAck";
  value: InterchainQueryPacketAckAmino;
}
/**
 * InterchainQueryPacketAck is comprised of an ABCI query response with
 * non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).
 */
export interface InterchainQueryPacketAckSDKType {
  data: Uint8Array;
}
/** InterchainQueryRequestPacket */
export interface InterchainQueryRequestPacket {
  /** requests defines the list of interchain query requests */
  requests: InterchainQueryRequest[];
}
export interface InterchainQueryRequestPacketProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequestPacket";
  value: Uint8Array;
}
/**
 * InterchainQueryRequestPacket
 * @name InterchainQueryRequestPacketAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.InterchainQueryRequestPacket
 */
export interface InterchainQueryRequestPacketAmino {
  /**
   * requests defines the list of interchain query requests
   */
  requests?: InterchainQueryRequestAmino[];
}
export interface InterchainQueryRequestPacketAminoMsg {
  type: "/xion.feeabs.v1beta1.InterchainQueryRequestPacket";
  value: InterchainQueryRequestPacketAmino;
}
/** InterchainQueryRequestPacket */
export interface InterchainQueryRequestPacketSDKType {
  requests: InterchainQueryRequestSDKType[];
}
/**
 * CosmosQuery contains a list of tendermint ABCI query requests. It should be
 * used when sending queries to an SDK host chain.
 */
export interface CosmosQuery {
  /** requests defines the list of ABCI query requests */
  requests: RequestQuery[];
}
export interface CosmosQueryProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.CosmosQuery";
  value: Uint8Array;
}
/**
 * CosmosQuery contains a list of tendermint ABCI query requests. It should be
 * used when sending queries to an SDK host chain.
 * @name CosmosQueryAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.CosmosQuery
 */
export interface CosmosQueryAmino {
  /**
   * requests defines the list of ABCI query requests
   */
  requests?: RequestQueryAmino[];
}
export interface CosmosQueryAminoMsg {
  type: "/xion.feeabs.v1beta1.CosmosQuery";
  value: CosmosQueryAmino;
}
/**
 * CosmosQuery contains a list of tendermint ABCI query requests. It should be
 * used when sending queries to an SDK host chain.
 */
export interface CosmosQuerySDKType {
  requests: RequestQuerySDKType[];
}
/**
 * CosmosResponse contains a list of tendermint ABCI query responses. It should
 * be used when receiving responses from an SDK host chain.
 */
export interface CosmosResponse {
  /** responses defines the list of ABCI query responses */
  responses: ResponseQuery[];
}
export interface CosmosResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.CosmosResponse";
  value: Uint8Array;
}
/**
 * CosmosResponse contains a list of tendermint ABCI query responses. It should
 * be used when receiving responses from an SDK host chain.
 * @name CosmosResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.CosmosResponse
 */
export interface CosmosResponseAmino {
  /**
   * responses defines the list of ABCI query responses
   */
  responses?: ResponseQueryAmino[];
}
export interface CosmosResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.CosmosResponse";
  value: CosmosResponseAmino;
}
/**
 * CosmosResponse contains a list of tendermint ABCI query responses. It should
 * be used when receiving responses from an SDK host chain.
 */
export interface CosmosResponseSDKType {
  responses: ResponseQuerySDKType[];
}
function createBaseQueryArithmeticTwapToNowRequest(): QueryArithmeticTwapToNowRequest {
  return {
    poolId: BigInt(0),
    baseAsset: "",
    quoteAsset: "",
    startTime: new Date()
  };
}
export const QueryArithmeticTwapToNowRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowRequest",
  encode(message: QueryArithmeticTwapToNowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapToNowRequest>): QueryArithmeticTwapToNowRequest {
    const message = createBaseQueryArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromAmino(object: QueryArithmeticTwapToNowRequestAmino): QueryArithmeticTwapToNowRequest {
    const message = createBaseQueryArithmeticTwapToNowRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.base_asset !== undefined && object.base_asset !== null) {
      message.baseAsset = object.base_asset;
    }
    if (object.quote_asset !== undefined && object.quote_asset !== null) {
      message.quoteAsset = object.quote_asset;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapToNowRequest): QueryArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.base_asset = message.baseAsset === "" ? undefined : message.baseAsset;
    obj.quote_asset = message.quoteAsset === "" ? undefined : message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapToNowRequestAminoMsg): QueryArithmeticTwapToNowRequest {
    return QueryArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapToNowRequestProtoMsg): QueryArithmeticTwapToNowRequest {
    return QueryArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapToNowRequest): Uint8Array {
    return QueryArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapToNowRequest): QueryArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowRequest",
      value: QueryArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseQueryArithmeticTwapToNowResponse(): QueryArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const QueryArithmeticTwapToNowResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowResponse",
  encode(message: QueryArithmeticTwapToNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryArithmeticTwapToNowResponse>): QueryArithmeticTwapToNowResponse {
    const message = createBaseQueryArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: QueryArithmeticTwapToNowResponseAmino): QueryArithmeticTwapToNowResponse {
    const message = createBaseQueryArithmeticTwapToNowResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: QueryArithmeticTwapToNowResponse): QueryArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: QueryArithmeticTwapToNowResponseAminoMsg): QueryArithmeticTwapToNowResponse {
    return QueryArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryArithmeticTwapToNowResponseProtoMsg): QueryArithmeticTwapToNowResponse {
    return QueryArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: QueryArithmeticTwapToNowResponse): Uint8Array {
    return QueryArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryArithmeticTwapToNowResponse): QueryArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryArithmeticTwapToNowResponse",
      value: QueryArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseInterchainQueryRequest(): InterchainQueryRequest {
  return {
    data: new Uint8Array(),
    path: ""
  };
}
export const InterchainQueryRequest = {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequest",
  encode(message: InterchainQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterchainQueryRequest>): InterchainQueryRequest {
    const message = createBaseInterchainQueryRequest();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    return message;
  },
  fromAmino(object: InterchainQueryRequestAmino): InterchainQueryRequest {
    const message = createBaseInterchainQueryRequest();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    return message;
  },
  toAmino(message: InterchainQueryRequest): InterchainQueryRequestAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    return obj;
  },
  fromAminoMsg(object: InterchainQueryRequestAminoMsg): InterchainQueryRequest {
    return InterchainQueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: InterchainQueryRequestProtoMsg): InterchainQueryRequest {
    return InterchainQueryRequest.decode(message.value);
  },
  toProto(message: InterchainQueryRequest): Uint8Array {
    return InterchainQueryRequest.encode(message).finish();
  },
  toProtoMsg(message: InterchainQueryRequest): InterchainQueryRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequest",
      value: InterchainQueryRequest.encode(message).finish()
    };
  }
};
function createBaseInterchainQueryPacketData(): InterchainQueryPacketData {
  return {
    data: new Uint8Array(),
    memo: ""
  };
}
export const InterchainQueryPacketData = {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketData",
  encode(message: InterchainQueryPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterchainQueryPacketData>): InterchainQueryPacketData {
    const message = createBaseInterchainQueryPacketData();
    message.data = object.data ?? new Uint8Array();
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object: InterchainQueryPacketDataAmino): InterchainQueryPacketData {
    const message = createBaseInterchainQueryPacketData();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message: InterchainQueryPacketData): InterchainQueryPacketDataAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    return obj;
  },
  fromAminoMsg(object: InterchainQueryPacketDataAminoMsg): InterchainQueryPacketData {
    return InterchainQueryPacketData.fromAmino(object.value);
  },
  fromProtoMsg(message: InterchainQueryPacketDataProtoMsg): InterchainQueryPacketData {
    return InterchainQueryPacketData.decode(message.value);
  },
  toProto(message: InterchainQueryPacketData): Uint8Array {
    return InterchainQueryPacketData.encode(message).finish();
  },
  toProtoMsg(message: InterchainQueryPacketData): InterchainQueryPacketDataProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketData",
      value: InterchainQueryPacketData.encode(message).finish()
    };
  }
};
function createBaseInterchainQueryPacketAck(): InterchainQueryPacketAck {
  return {
    data: new Uint8Array()
  };
}
export const InterchainQueryPacketAck = {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketAck",
  encode(message: InterchainQueryPacketAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryPacketAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterchainQueryPacketAck>): InterchainQueryPacketAck {
    const message = createBaseInterchainQueryPacketAck();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: InterchainQueryPacketAckAmino): InterchainQueryPacketAck {
    const message = createBaseInterchainQueryPacketAck();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: InterchainQueryPacketAck): InterchainQueryPacketAckAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: InterchainQueryPacketAckAminoMsg): InterchainQueryPacketAck {
    return InterchainQueryPacketAck.fromAmino(object.value);
  },
  fromProtoMsg(message: InterchainQueryPacketAckProtoMsg): InterchainQueryPacketAck {
    return InterchainQueryPacketAck.decode(message.value);
  },
  toProto(message: InterchainQueryPacketAck): Uint8Array {
    return InterchainQueryPacketAck.encode(message).finish();
  },
  toProtoMsg(message: InterchainQueryPacketAck): InterchainQueryPacketAckProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.InterchainQueryPacketAck",
      value: InterchainQueryPacketAck.encode(message).finish()
    };
  }
};
function createBaseInterchainQueryRequestPacket(): InterchainQueryRequestPacket {
  return {
    requests: []
  };
}
export const InterchainQueryRequestPacket = {
  typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequestPacket",
  encode(message: InterchainQueryRequestPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requests) {
      InterchainQueryRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryRequestPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryRequestPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(InterchainQueryRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterchainQueryRequestPacket>): InterchainQueryRequestPacket {
    const message = createBaseInterchainQueryRequestPacket();
    message.requests = object.requests?.map(e => InterchainQueryRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InterchainQueryRequestPacketAmino): InterchainQueryRequestPacket {
    const message = createBaseInterchainQueryRequestPacket();
    message.requests = object.requests?.map(e => InterchainQueryRequest.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InterchainQueryRequestPacket): InterchainQueryRequestPacketAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? InterchainQueryRequest.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object: InterchainQueryRequestPacketAminoMsg): InterchainQueryRequestPacket {
    return InterchainQueryRequestPacket.fromAmino(object.value);
  },
  fromProtoMsg(message: InterchainQueryRequestPacketProtoMsg): InterchainQueryRequestPacket {
    return InterchainQueryRequestPacket.decode(message.value);
  },
  toProto(message: InterchainQueryRequestPacket): Uint8Array {
    return InterchainQueryRequestPacket.encode(message).finish();
  },
  toProtoMsg(message: InterchainQueryRequestPacket): InterchainQueryRequestPacketProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.InterchainQueryRequestPacket",
      value: InterchainQueryRequestPacket.encode(message).finish()
    };
  }
};
function createBaseCosmosQuery(): CosmosQuery {
  return {
    requests: []
  };
}
export const CosmosQuery = {
  typeUrl: "/xion.feeabs.v1beta1.CosmosQuery",
  encode(message: CosmosQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.requests) {
      RequestQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmosQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(RequestQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CosmosQuery>): CosmosQuery {
    const message = createBaseCosmosQuery();
    message.requests = object.requests?.map(e => RequestQuery.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CosmosQueryAmino): CosmosQuery {
    const message = createBaseCosmosQuery();
    message.requests = object.requests?.map(e => RequestQuery.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CosmosQuery): CosmosQueryAmino {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map(e => e ? RequestQuery.toAmino(e) : undefined);
    } else {
      obj.requests = message.requests;
    }
    return obj;
  },
  fromAminoMsg(object: CosmosQueryAminoMsg): CosmosQuery {
    return CosmosQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: CosmosQueryProtoMsg): CosmosQuery {
    return CosmosQuery.decode(message.value);
  },
  toProto(message: CosmosQuery): Uint8Array {
    return CosmosQuery.encode(message).finish();
  },
  toProtoMsg(message: CosmosQuery): CosmosQueryProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.CosmosQuery",
      value: CosmosQuery.encode(message).finish()
    };
  }
};
function createBaseCosmosResponse(): CosmosResponse {
  return {
    responses: []
  };
}
export const CosmosResponse = {
  typeUrl: "/xion.feeabs.v1beta1.CosmosResponse",
  encode(message: CosmosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.responses) {
      ResponseQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CosmosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responses.push(ResponseQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CosmosResponse>): CosmosResponse {
    const message = createBaseCosmosResponse();
    message.responses = object.responses?.map(e => ResponseQuery.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CosmosResponseAmino): CosmosResponse {
    const message = createBaseCosmosResponse();
    message.responses = object.responses?.map(e => ResponseQuery.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CosmosResponse): CosmosResponseAmino {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map(e => e ? ResponseQuery.toAmino(e) : undefined);
    } else {
      obj.responses = message.responses;
    }
    return obj;
  },
  fromAminoMsg(object: CosmosResponseAminoMsg): CosmosResponse {
    return CosmosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CosmosResponseProtoMsg): CosmosResponse {
    return CosmosResponse.decode(message.value);
  },
  toProto(message: CosmosResponse): Uint8Array {
    return CosmosResponse.encode(message).finish();
  },
  toProtoMsg(message: CosmosResponse): CosmosResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.CosmosResponse",
      value: CosmosResponse.encode(message).finish()
    };
  }
};