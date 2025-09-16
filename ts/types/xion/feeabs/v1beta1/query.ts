//@ts-nocheck
import { HostChainFeeAbsConfig, HostChainFeeAbsConfigAmino, HostChainFeeAbsConfigSDKType } from "./proposal";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** QueryHostChainConfigRequest */
export interface QueryHostChainConfigRequest {
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
 * QueryFeeabsModuleBalacesRequest is the request type for the Query/Feeabs RPC
 * method.
 */
export interface QueryFeeabsModuleBalacesRequest {}
export interface QueryFeeabsModuleBalacesRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest";
  value: Uint8Array;
}
/**
 * QueryFeeabsModuleBalacesRequest is the request type for the Query/Feeabs RPC
 * method.
 * @name QueryFeeabsModuleBalacesRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest
 */
export interface QueryFeeabsModuleBalacesRequestAmino {}
export interface QueryFeeabsModuleBalacesRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest";
  value: QueryFeeabsModuleBalacesRequestAmino;
}
/**
 * QueryFeeabsModuleBalacesRequest is the request type for the Query/Feeabs RPC
 * method.
 */
export interface QueryFeeabsModuleBalacesRequestSDKType {}
/** QueryFeeabsModuleBalacesResponse */
export interface QueryFeeabsModuleBalacesResponse {
  balances: Coin[];
  address: string;
}
export interface QueryFeeabsModuleBalacesResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesResponse";
  value: Uint8Array;
}
/**
 * QueryFeeabsModuleBalacesResponse
 * @name QueryFeeabsModuleBalacesResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.QueryFeeabsModuleBalacesResponse
 */
export interface QueryFeeabsModuleBalacesResponseAmino {
  balances?: CoinAmino[];
  address?: string;
}
export interface QueryFeeabsModuleBalacesResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesResponse";
  value: QueryFeeabsModuleBalacesResponseAmino;
}
/** QueryFeeabsModuleBalacesResponse */
export interface QueryFeeabsModuleBalacesResponseSDKType {
  balances: CoinSDKType[];
  address: string;
}
/** AllQueryHostChainConfigRequest */
export interface AllQueryHostChainConfigRequest {}
export interface AllQueryHostChainConfigRequestProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigRequest";
  value: Uint8Array;
}
/**
 * AllQueryHostChainConfigRequest
 * @name AllQueryHostChainConfigRequestAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.AllQueryHostChainConfigRequest
 */
export interface AllQueryHostChainConfigRequestAmino {}
export interface AllQueryHostChainConfigRequestAminoMsg {
  type: "/xion.feeabs.v1beta1.AllQueryHostChainConfigRequest";
  value: AllQueryHostChainConfigRequestAmino;
}
/** AllQueryHostChainConfigRequest */
export interface AllQueryHostChainConfigRequestSDKType {}
/** AllQueryHostChainConfigResponse */
export interface AllQueryHostChainConfigResponse {
  allHostChainConfig: HostChainFeeAbsConfig[];
}
export interface AllQueryHostChainConfigResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigResponse";
  value: Uint8Array;
}
/**
 * AllQueryHostChainConfigResponse
 * @name AllQueryHostChainConfigResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.AllQueryHostChainConfigResponse
 */
export interface AllQueryHostChainConfigResponseAmino {
  all_host_chain_config?: HostChainFeeAbsConfigAmino[];
}
export interface AllQueryHostChainConfigResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.AllQueryHostChainConfigResponse";
  value: AllQueryHostChainConfigResponseAmino;
}
/** AllQueryHostChainConfigResponse */
export interface AllQueryHostChainConfigResponseSDKType {
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
function createBaseQueryFeeabsModuleBalacesRequest(): QueryFeeabsModuleBalacesRequest {
  return {};
}
export const QueryFeeabsModuleBalacesRequest = {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest",
  encode(_: QueryFeeabsModuleBalacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeabsModuleBalacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeabsModuleBalacesRequest();
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
  fromPartial(_: Partial<QueryFeeabsModuleBalacesRequest>): QueryFeeabsModuleBalacesRequest {
    const message = createBaseQueryFeeabsModuleBalacesRequest();
    return message;
  },
  fromAmino(_: QueryFeeabsModuleBalacesRequestAmino): QueryFeeabsModuleBalacesRequest {
    const message = createBaseQueryFeeabsModuleBalacesRequest();
    return message;
  },
  toAmino(_: QueryFeeabsModuleBalacesRequest): QueryFeeabsModuleBalacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryFeeabsModuleBalacesRequestAminoMsg): QueryFeeabsModuleBalacesRequest {
    return QueryFeeabsModuleBalacesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeabsModuleBalacesRequestProtoMsg): QueryFeeabsModuleBalacesRequest {
    return QueryFeeabsModuleBalacesRequest.decode(message.value);
  },
  toProto(message: QueryFeeabsModuleBalacesRequest): Uint8Array {
    return QueryFeeabsModuleBalacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeabsModuleBalacesRequest): QueryFeeabsModuleBalacesRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesRequest",
      value: QueryFeeabsModuleBalacesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeeabsModuleBalacesResponse(): QueryFeeabsModuleBalacesResponse {
  return {
    balances: [],
    address: ""
  };
}
export const QueryFeeabsModuleBalacesResponse = {
  typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesResponse",
  encode(message: QueryFeeabsModuleBalacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeabsModuleBalacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeabsModuleBalacesResponse();
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
  fromPartial(object: Partial<QueryFeeabsModuleBalacesResponse>): QueryFeeabsModuleBalacesResponse {
    const message = createBaseQueryFeeabsModuleBalacesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryFeeabsModuleBalacesResponseAmino): QueryFeeabsModuleBalacesResponse {
    const message = createBaseQueryFeeabsModuleBalacesResponse();
    message.balances = object.balances?.map(e => Coin.fromAmino(e)) || [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryFeeabsModuleBalacesResponse): QueryFeeabsModuleBalacesResponseAmino {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryFeeabsModuleBalacesResponseAminoMsg): QueryFeeabsModuleBalacesResponse {
    return QueryFeeabsModuleBalacesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeeabsModuleBalacesResponseProtoMsg): QueryFeeabsModuleBalacesResponse {
    return QueryFeeabsModuleBalacesResponse.decode(message.value);
  },
  toProto(message: QueryFeeabsModuleBalacesResponse): Uint8Array {
    return QueryFeeabsModuleBalacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeeabsModuleBalacesResponse): QueryFeeabsModuleBalacesResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.QueryFeeabsModuleBalacesResponse",
      value: QueryFeeabsModuleBalacesResponse.encode(message).finish()
    };
  }
};
function createBaseAllQueryHostChainConfigRequest(): AllQueryHostChainConfigRequest {
  return {};
}
export const AllQueryHostChainConfigRequest = {
  typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigRequest",
  encode(_: AllQueryHostChainConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllQueryHostChainConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllQueryHostChainConfigRequest();
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
  fromPartial(_: Partial<AllQueryHostChainConfigRequest>): AllQueryHostChainConfigRequest {
    const message = createBaseAllQueryHostChainConfigRequest();
    return message;
  },
  fromAmino(_: AllQueryHostChainConfigRequestAmino): AllQueryHostChainConfigRequest {
    const message = createBaseAllQueryHostChainConfigRequest();
    return message;
  },
  toAmino(_: AllQueryHostChainConfigRequest): AllQueryHostChainConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AllQueryHostChainConfigRequestAminoMsg): AllQueryHostChainConfigRequest {
    return AllQueryHostChainConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AllQueryHostChainConfigRequestProtoMsg): AllQueryHostChainConfigRequest {
    return AllQueryHostChainConfigRequest.decode(message.value);
  },
  toProto(message: AllQueryHostChainConfigRequest): Uint8Array {
    return AllQueryHostChainConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: AllQueryHostChainConfigRequest): AllQueryHostChainConfigRequestProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigRequest",
      value: AllQueryHostChainConfigRequest.encode(message).finish()
    };
  }
};
function createBaseAllQueryHostChainConfigResponse(): AllQueryHostChainConfigResponse {
  return {
    allHostChainConfig: []
  };
}
export const AllQueryHostChainConfigResponse = {
  typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigResponse",
  encode(message: AllQueryHostChainConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allHostChainConfig) {
      HostChainFeeAbsConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllQueryHostChainConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllQueryHostChainConfigResponse();
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
  fromPartial(object: Partial<AllQueryHostChainConfigResponse>): AllQueryHostChainConfigResponse {
    const message = createBaseAllQueryHostChainConfigResponse();
    message.allHostChainConfig = object.allHostChainConfig?.map(e => HostChainFeeAbsConfig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllQueryHostChainConfigResponseAmino): AllQueryHostChainConfigResponse {
    const message = createBaseAllQueryHostChainConfigResponse();
    message.allHostChainConfig = object.all_host_chain_config?.map(e => HostChainFeeAbsConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllQueryHostChainConfigResponse): AllQueryHostChainConfigResponseAmino {
    const obj: any = {};
    if (message.allHostChainConfig) {
      obj.all_host_chain_config = message.allHostChainConfig.map(e => e ? HostChainFeeAbsConfig.toAmino(e) : undefined);
    } else {
      obj.all_host_chain_config = message.allHostChainConfig;
    }
    return obj;
  },
  fromAminoMsg(object: AllQueryHostChainConfigResponseAminoMsg): AllQueryHostChainConfigResponse {
    return AllQueryHostChainConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AllQueryHostChainConfigResponseProtoMsg): AllQueryHostChainConfigResponse {
    return AllQueryHostChainConfigResponse.decode(message.value);
  },
  toProto(message: AllQueryHostChainConfigResponse): Uint8Array {
    return AllQueryHostChainConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: AllQueryHostChainConfigResponse): AllQueryHostChainConfigResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.AllQueryHostChainConfigResponse",
      value: AllQueryHostChainConfigResponse.encode(message).finish()
    };
  }
};