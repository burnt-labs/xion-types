//@ts-nocheck
import { HostChainFeeAbsConfig, HostChainFeeAbsConfigAmino, HostChainFeeAbsConfigSDKType } from "./proposal";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryHostChainConfigRequest */
export interface QueryHostChainConfigRequest {
  /** The IBC denomination to query configuration for */
  ibcDenom: string;
}
export interface QueryHostChainConfigRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigRequest";
  value: Uint8Array;
}
/**
 * QueryHostChainConfigRequest
 * @name QueryHostChainConfigRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryHostChainConfigRequest
 */
export interface QueryHostChainConfigRequestAmino {
  /**
   * The IBC denomination to query configuration for
   */
  ibc_denom?: string;
}
export interface QueryHostChainConfigRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryHostChainConfigRequest";
  value: QueryHostChainConfigRequestAmino;
}
/** QueryHostChainConfigRequest */
export interface QueryHostChainConfigRequestSDKType {
  ibc_denom: string;
}
/** QueryHostChainConfigResponse */
export interface QueryHostChainConfigResponse {
  /** The host chain fee abstraction configuration */
  hostChainConfig: HostChainFeeAbsConfig;
}
export interface QueryHostChainConfigResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigResponse";
  value: Uint8Array;
}
/**
 * QueryHostChainConfigResponse
 * @name QueryHostChainConfigResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryHostChainConfigResponse
 */
export interface QueryHostChainConfigResponseAmino {
  /**
   * The host chain fee abstraction configuration
   */
  host_chain_config?: HostChainFeeAbsConfigAmino;
}
export interface QueryHostChainConfigResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryHostChainConfigResponse";
  value: QueryHostChainConfigResponseAmino;
}
/** QueryHostChainConfigResponse */
export interface QueryHostChainConfigResponseSDKType {
  host_chain_config: HostChainFeeAbsConfigSDKType;
}
/**
 * QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
 * RPC method.
 */
export interface QueryOsmosisArithmeticTwapRequest {
  /** The IBC denomination to query TWAP for */
  ibcDenom: string;
}
export interface QueryOsmosisArithmeticTwapRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest";
  value: Uint8Array;
}
/**
 * QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
 * RPC method.
 * @name QueryOsmosisArithmeticTwapRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest
 */
export interface QueryOsmosisArithmeticTwapRequestAmino {
  /**
   * The IBC denomination to query TWAP for
   */
  ibc_denom?: string;
}
export interface QueryOsmosisArithmeticTwapRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest";
  value: QueryOsmosisArithmeticTwapRequestAmino;
}
/**
 * QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
 * RPC method.
 */
export interface QueryOsmosisArithmeticTwapRequestSDKType {
  ibc_denom: string;
}
/** QueryOsmosisArithmeticTwapResponse */
export interface QueryOsmosisArithmeticTwapResponse {
  /** The arithmetic time-weighted average price */
  arithmeticTwap: string;
}
export interface QueryOsmosisArithmeticTwapResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse";
  value: Uint8Array;
}
/**
 * QueryOsmosisArithmeticTwapResponse
 * @name QueryOsmosisArithmeticTwapResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse
 */
export interface QueryOsmosisArithmeticTwapResponseAmino {
  /**
   * The arithmetic time-weighted average price
   */
  arithmetic_twap?: string;
}
export interface QueryOsmosisArithmeticTwapResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse";
  value: QueryOsmosisArithmeticTwapResponseAmino;
}
/** QueryOsmosisArithmeticTwapResponse */
export interface QueryOsmosisArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
/**
 * QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
 * method.
 */
export interface QueryFeeabsModuleBalancesRequest {}
export interface QueryFeeabsModuleBalancesRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest";
  value: Uint8Array;
}
/**
 * QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
 * method.
 * @name QueryFeeabsModuleBalancesRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest
 */
export interface QueryFeeabsModuleBalancesRequestAmino {}
export interface QueryFeeabsModuleBalancesRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest";
  value: QueryFeeabsModuleBalancesRequestAmino;
}
/**
 * QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
 * method.
 */
export interface QueryFeeabsModuleBalancesRequestSDKType {}
/** QueryFeeabsModuleBalancesResponse */
export interface QueryFeeabsModuleBalancesResponse {
  /** The coin balances held by the feeabs module */
  balances: Coin[];
  /** The address of the feeabs module */
  address: string;
}
export interface QueryFeeabsModuleBalancesResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse";
  value: Uint8Array;
}
/**
 * QueryFeeabsModuleBalancesResponse
 * @name QueryFeeabsModuleBalancesResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse
 */
export interface QueryFeeabsModuleBalancesResponseAmino {
  /**
   * The coin balances held by the feeabs module
   */
  balances?: CoinAmino[];
  /**
   * The address of the feeabs module
   */
  address?: string;
}
export interface QueryFeeabsModuleBalancesResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse";
  value: QueryFeeabsModuleBalancesResponseAmino;
}
/** QueryFeeabsModuleBalancesResponse */
export interface QueryFeeabsModuleBalancesResponseSDKType {
  balances: CoinSDKType[];
  address: string;
}
/** QueryAllHostChainConfigRequest */
export interface QueryAllHostChainConfigRequest {}
export interface QueryAllHostChainConfigRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigRequest";
  value: Uint8Array;
}
/**
 * QueryAllHostChainConfigRequest
 * @name QueryAllHostChainConfigRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryAllHostChainConfigRequest
 */
export interface QueryAllHostChainConfigRequestAmino {}
export interface QueryAllHostChainConfigRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryAllHostChainConfigRequest";
  value: QueryAllHostChainConfigRequestAmino;
}
/** QueryAllHostChainConfigRequest */
export interface QueryAllHostChainConfigRequestSDKType {}
/** QueryAllHostChainConfigResponse */
export interface QueryAllHostChainConfigResponse {
  /** All host chain fee abstraction configurations */
  allHostChainConfig: HostChainFeeAbsConfig[];
}
export interface QueryAllHostChainConfigResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigResponse";
  value: Uint8Array;
}
/**
 * QueryAllHostChainConfigResponse
 * @name QueryAllHostChainConfigResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryAllHostChainConfigResponse
 */
export interface QueryAllHostChainConfigResponseAmino {
  /**
   * All host chain fee abstraction configurations
   */
  all_host_chain_config?: HostChainFeeAbsConfigAmino[];
}
export interface QueryAllHostChainConfigResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryAllHostChainConfigResponse";
  value: QueryAllHostChainConfigResponseAmino;
}
/** QueryAllHostChainConfigResponse */
export interface QueryAllHostChainConfigResponseSDKType {
  all_host_chain_config: HostChainFeeAbsConfigSDKType[];
}
function createBaseQueryHostChainConfigRequest(): QueryHostChainConfigRequest {
  return {
    ibcDenom: ""
  };
}
export const QueryHostChainConfigRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigRequest",
  encode(message: QueryHostChainConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcDenom !== "") {
      writer.uint32(10).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHostChainConfigRequest>): QueryHostChainConfigRequest {
    const message = createBaseQueryHostChainConfigRequest();
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: QueryHostChainConfigRequestAmino): QueryHostChainConfigRequest {
    const message = createBaseQueryHostChainConfigRequest();
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    return message;
  },
  toAmino(message: QueryHostChainConfigRequest): QueryHostChainConfigRequestAmino {
    const obj: any = {};
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainConfigRequestAminoMsg): QueryHostChainConfigRequest {
    return QueryHostChainConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainConfigRequestProtoMsg): QueryHostChainConfigRequest {
    return QueryHostChainConfigRequest.decode(message.value);
  },
  toProto(message: QueryHostChainConfigRequest): Uint8Array {
    return QueryHostChainConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainConfigRequest): QueryHostChainConfigRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigRequest",
      value: QueryHostChainConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHostChainConfigResponse(): QueryHostChainConfigResponse {
  return {
    hostChainConfig: HostChainFeeAbsConfig.fromPartial({})
  };
}
export const QueryHostChainConfigResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigResponse",
  encode(message: QueryHostChainConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostChainConfig !== undefined) {
      HostChainFeeAbsConfig.encode(message.hostChainConfig, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostChainConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostChainConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostChainConfig = HostChainFeeAbsConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHostChainConfigResponse>): QueryHostChainConfigResponse {
    const message = createBaseQueryHostChainConfigResponse();
    message.hostChainConfig = object.hostChainConfig !== undefined && object.hostChainConfig !== null ? HostChainFeeAbsConfig.fromPartial(object.hostChainConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryHostChainConfigResponseAmino): QueryHostChainConfigResponse {
    const message = createBaseQueryHostChainConfigResponse();
    if (object.host_chain_config !== undefined && object.host_chain_config !== null) {
      message.hostChainConfig = HostChainFeeAbsConfig.fromAmino(object.host_chain_config);
    }
    return message;
  },
  toAmino(message: QueryHostChainConfigResponse): QueryHostChainConfigResponseAmino {
    const obj: any = {};
    obj.host_chain_config = message.hostChainConfig ? HostChainFeeAbsConfig.toAmino(message.hostChainConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostChainConfigResponseAminoMsg): QueryHostChainConfigResponse {
    return QueryHostChainConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostChainConfigResponseProtoMsg): QueryHostChainConfigResponse {
    return QueryHostChainConfigResponse.decode(message.value);
  },
  toProto(message: QueryHostChainConfigResponse): Uint8Array {
    return QueryHostChainConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostChainConfigResponse): QueryHostChainConfigResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryHostChainConfigResponse",
      value: QueryHostChainConfigResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOsmosisArithmeticTwapRequest(): QueryOsmosisArithmeticTwapRequest {
  return {
    ibcDenom: ""
  };
}
export const QueryOsmosisArithmeticTwapRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest",
  encode(message: QueryOsmosisArithmeticTwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcDenom !== "") {
      writer.uint32(10).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOsmosisArithmeticTwapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOsmosisArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryOsmosisArithmeticTwapRequest>): QueryOsmosisArithmeticTwapRequest {
    const message = createBaseQueryOsmosisArithmeticTwapRequest();
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: QueryOsmosisArithmeticTwapRequestAmino): QueryOsmosisArithmeticTwapRequest {
    const message = createBaseQueryOsmosisArithmeticTwapRequest();
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    return message;
  },
  toAmino(message: QueryOsmosisArithmeticTwapRequest): QueryOsmosisArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: QueryOsmosisArithmeticTwapRequestAminoMsg): QueryOsmosisArithmeticTwapRequest {
    return QueryOsmosisArithmeticTwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOsmosisArithmeticTwapRequestProtoMsg): QueryOsmosisArithmeticTwapRequest {
    return QueryOsmosisArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: QueryOsmosisArithmeticTwapRequest): Uint8Array {
    return QueryOsmosisArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOsmosisArithmeticTwapRequest): QueryOsmosisArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapRequest",
      value: QueryOsmosisArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOsmosisArithmeticTwapResponse(): QueryOsmosisArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const QueryOsmosisArithmeticTwapResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse",
  encode(message: QueryOsmosisArithmeticTwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.arithmeticTwap, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOsmosisArithmeticTwapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOsmosisArithmeticTwapResponse();
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
  fromPartial(object: Partial<QueryOsmosisArithmeticTwapResponse>): QueryOsmosisArithmeticTwapResponse {
    const message = createBaseQueryOsmosisArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromAmino(object: QueryOsmosisArithmeticTwapResponseAmino): QueryOsmosisArithmeticTwapResponse {
    const message = createBaseQueryOsmosisArithmeticTwapResponse();
    if (object.arithmetic_twap !== undefined && object.arithmetic_twap !== null) {
      message.arithmeticTwap = object.arithmetic_twap;
    }
    return message;
  },
  toAmino(message: QueryOsmosisArithmeticTwapResponse): QueryOsmosisArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap === "" ? undefined : message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: QueryOsmosisArithmeticTwapResponseAminoMsg): QueryOsmosisArithmeticTwapResponse {
    return QueryOsmosisArithmeticTwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOsmosisArithmeticTwapResponseProtoMsg): QueryOsmosisArithmeticTwapResponse {
    return QueryOsmosisArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: QueryOsmosisArithmeticTwapResponse): Uint8Array {
    return QueryOsmosisArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOsmosisArithmeticTwapResponse): QueryOsmosisArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryOsmosisArithmeticTwapResponse",
      value: QueryOsmosisArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeeabsModuleBalancesRequest(): QueryFeeabsModuleBalancesRequest {
  return {};
}
export const QueryFeeabsModuleBalancesRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest",
  encode(_: QueryFeeabsModuleBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeabsModuleBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeabsModuleBalancesRequest();
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
  fromPartial(_: Partial<QueryFeeabsModuleBalancesRequest>): QueryFeeabsModuleBalancesRequest {
    const message = createBaseQueryFeeabsModuleBalancesRequest();
    return message;
  },
  fromAmino(_: QueryFeeabsModuleBalancesRequestAmino): QueryFeeabsModuleBalancesRequest {
    const message = createBaseQueryFeeabsModuleBalancesRequest();
    return message;
  },
  toAmino(_: QueryFeeabsModuleBalancesRequest): QueryFeeabsModuleBalancesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeabsModuleBalancesRequestAminoMsg): QueryFeeabsModuleBalancesRequest {
    return QueryFeeabsModuleBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeabsModuleBalancesRequestProtoMsg): QueryFeeabsModuleBalancesRequest {
    return QueryFeeabsModuleBalancesRequest.decode(message.value);
  },
  toProto(message: QueryFeeabsModuleBalancesRequest): Uint8Array {
    return QueryFeeabsModuleBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeabsModuleBalancesRequest): QueryFeeabsModuleBalancesRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesRequest",
      value: QueryFeeabsModuleBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeabsModuleBalancesResponse(): QueryFeeabsModuleBalancesResponse {
  return {
    balances: [],
    address: ""
  };
}
export const QueryFeeabsModuleBalancesResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse",
  encode(message: QueryFeeabsModuleBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeabsModuleBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeabsModuleBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryFeeabsModuleBalancesResponse>): QueryFeeabsModuleBalancesResponse {
    const message = createBaseQueryFeeabsModuleBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryFeeabsModuleBalancesResponseAmino): QueryFeeabsModuleBalancesResponse {
    const message = createBaseQueryFeeabsModuleBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryFeeabsModuleBalancesResponse): QueryFeeabsModuleBalancesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryFeeabsModuleBalancesResponseAminoMsg): QueryFeeabsModuleBalancesResponse {
    return QueryFeeabsModuleBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeabsModuleBalancesResponseProtoMsg): QueryFeeabsModuleBalancesResponse {
    return QueryFeeabsModuleBalancesResponse.decode(message.value);
  },
  toProto(message: QueryFeeabsModuleBalancesResponse): Uint8Array {
    return QueryFeeabsModuleBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeabsModuleBalancesResponse): QueryFeeabsModuleBalancesResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalancesResponse",
      value: QueryFeeabsModuleBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllHostChainConfigRequest(): QueryAllHostChainConfigRequest {
  return {};
}
export const QueryAllHostChainConfigRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigRequest",
  encode(_: QueryAllHostChainConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainConfigRequest();
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
  fromPartial(_: Partial<QueryAllHostChainConfigRequest>): QueryAllHostChainConfigRequest {
    const message = createBaseQueryAllHostChainConfigRequest();
    return message;
  },
  fromAmino(_: QueryAllHostChainConfigRequestAmino): QueryAllHostChainConfigRequest {
    const message = createBaseQueryAllHostChainConfigRequest();
    return message;
  },
  toAmino(_: QueryAllHostChainConfigRequest): QueryAllHostChainConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainConfigRequestAminoMsg): QueryAllHostChainConfigRequest {
    return QueryAllHostChainConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainConfigRequestProtoMsg): QueryAllHostChainConfigRequest {
    return QueryAllHostChainConfigRequest.decode(message.value);
  },
  toProto(message: QueryAllHostChainConfigRequest): Uint8Array {
    return QueryAllHostChainConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainConfigRequest): QueryAllHostChainConfigRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigRequest",
      value: QueryAllHostChainConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllHostChainConfigResponse(): QueryAllHostChainConfigResponse {
  return {
    allHostChainConfig: []
  };
}
export const QueryAllHostChainConfigResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigResponse",
  encode(message: QueryAllHostChainConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allHostChainConfig) {
      HostChainFeeAbsConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllHostChainConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllHostChainConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allHostChainConfig.push(HostChainFeeAbsConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAllHostChainConfigResponse>): QueryAllHostChainConfigResponse {
    const message = createBaseQueryAllHostChainConfigResponse();
    message.allHostChainConfig = object.allHostChainConfig?.map(e => HostChainFeeAbsConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllHostChainConfigResponseAmino): QueryAllHostChainConfigResponse {
    const message = createBaseQueryAllHostChainConfigResponse();
    message.allHostChainConfig = object.all_host_chain_config?.map(e => HostChainFeeAbsConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllHostChainConfigResponse): QueryAllHostChainConfigResponseAmino {
    const obj: any = {};
    if (message.allHostChainConfig) {
      obj.all_host_chain_config = message.allHostChainConfig.map(e => e ? HostChainFeeAbsConfig.toAmino(e) : undefined);
    } else {
      obj.all_host_chain_config = message.allHostChainConfig;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllHostChainConfigResponseAminoMsg): QueryAllHostChainConfigResponse {
    return QueryAllHostChainConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllHostChainConfigResponseProtoMsg): QueryAllHostChainConfigResponse {
    return QueryAllHostChainConfigResponse.decode(message.value);
  },
  toProto(message: QueryAllHostChainConfigResponse): Uint8Array {
    return QueryAllHostChainConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllHostChainConfigResponse): QueryAllHostChainConfigResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryAllHostChainConfigResponse",
      value: QueryAllHostChainConfigResponse.encode(message).finish()
    };
  }
};