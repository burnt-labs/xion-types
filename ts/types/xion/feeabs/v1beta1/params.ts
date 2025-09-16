//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the feeabs module. */
export interface Params {
  /** native ibced in osmosis */
  nativeIbcedInOsmosis: string;
  /** osmosis query TWAP path */
  osmosisQueryTwapPath: string;
  /** chain name for ibc path unwinding */
  chainName: string;
  /** transfer channel for cross chain swap with osmosis */
  ibcTransferChannel: string;
  /** query twap price icq channel with osmosis */
  ibcQueryIcqChannel: string;
  /** osmosis crosschain swap contract address */
  osmosisCrosschainSwapAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the feeabs module.
 * @name ParamsAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * native ibced in osmosis
   */
  native_ibced_in_osmosis?: string;
  /**
   * osmosis query TWAP path
   */
  osmosis_query_twap_path?: string;
  /**
   * chain name for ibc path unwinding
   */
  chain_name?: string;
  /**
   * transfer channel for cross chain swap with osmosis
   */
  ibc_transfer_channel?: string;
  /**
   * query twap price icq channel with osmosis
   */
  ibc_query_icq_channel?: string;
  /**
   * osmosis crosschain swap contract address
   */
  osmosis_crosschain_swap_address?: string;
}
export interface ParamsAminoMsg {
  type: "/xion.feeabs.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the feeabs module. */
export interface ParamsSDKType {
  native_ibced_in_osmosis: string;
  osmosis_query_twap_path: string;
  chain_name: string;
  ibc_transfer_channel: string;
  ibc_query_icq_channel: string;
  osmosis_crosschain_swap_address: string;
}
function createBaseParams(): Params {
  return {
    nativeIbcedInOsmosis: "",
    osmosisQueryTwapPath: "",
    chainName: "",
    ibcTransferChannel: "",
    ibcQueryIcqChannel: "",
    osmosisCrosschainSwapAddress: ""
  };
}
export const Params = {
  typeUrl: "/xion.feeabs.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nativeIbcedInOsmosis !== "") {
      writer.uint32(10).string(message.nativeIbcedInOsmosis);
    }
    if (message.osmosisQueryTwapPath !== "") {
      writer.uint32(18).string(message.osmosisQueryTwapPath);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    if (message.ibcTransferChannel !== "") {
      writer.uint32(34).string(message.ibcTransferChannel);
    }
    if (message.ibcQueryIcqChannel !== "") {
      writer.uint32(42).string(message.ibcQueryIcqChannel);
    }
    if (message.osmosisCrosschainSwapAddress !== "") {
      writer.uint32(50).string(message.osmosisCrosschainSwapAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nativeIbcedInOsmosis = reader.string();
          break;
        case 2:
          message.osmosisQueryTwapPath = reader.string();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        case 4:
          message.ibcTransferChannel = reader.string();
          break;
        case 5:
          message.ibcQueryIcqChannel = reader.string();
          break;
        case 6:
          message.osmosisCrosschainSwapAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.nativeIbcedInOsmosis = object.nativeIbcedInOsmosis ?? "";
    message.osmosisQueryTwapPath = object.osmosisQueryTwapPath ?? "";
    message.chainName = object.chainName ?? "";
    message.ibcTransferChannel = object.ibcTransferChannel ?? "";
    message.ibcQueryIcqChannel = object.ibcQueryIcqChannel ?? "";
    message.osmosisCrosschainSwapAddress = object.osmosisCrosschainSwapAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.native_ibced_in_osmosis !== undefined && object.native_ibced_in_osmosis !== null) {
      message.nativeIbcedInOsmosis = object.native_ibced_in_osmosis;
    }
    if (object.osmosis_query_twap_path !== undefined && object.osmosis_query_twap_path !== null) {
      message.osmosisQueryTwapPath = object.osmosis_query_twap_path;
    }
    if (object.chain_name !== undefined && object.chain_name !== null) {
      message.chainName = object.chain_name;
    }
    if (object.ibc_transfer_channel !== undefined && object.ibc_transfer_channel !== null) {
      message.ibcTransferChannel = object.ibc_transfer_channel;
    }
    if (object.ibc_query_icq_channel !== undefined && object.ibc_query_icq_channel !== null) {
      message.ibcQueryIcqChannel = object.ibc_query_icq_channel;
    }
    if (object.osmosis_crosschain_swap_address !== undefined && object.osmosis_crosschain_swap_address !== null) {
      message.osmosisCrosschainSwapAddress = object.osmosis_crosschain_swap_address;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.native_ibced_in_osmosis = message.nativeIbcedInOsmosis === "" ? undefined : message.nativeIbcedInOsmosis;
    obj.osmosis_query_twap_path = message.osmosisQueryTwapPath === "" ? undefined : message.osmosisQueryTwapPath;
    obj.chain_name = message.chainName === "" ? undefined : message.chainName;
    obj.ibc_transfer_channel = message.ibcTransferChannel === "" ? undefined : message.ibcTransferChannel;
    obj.ibc_query_icq_channel = message.ibcQueryIcqChannel === "" ? undefined : message.ibcQueryIcqChannel;
    obj.osmosis_crosschain_swap_address = message.osmosisCrosschainSwapAddress === "" ? undefined : message.osmosisCrosschainSwapAddress;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};