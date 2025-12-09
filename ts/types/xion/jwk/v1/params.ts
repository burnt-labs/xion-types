//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
  /** Time offset in nanoseconds for JWT validation */
  timeOffset: bigint;
  /** Gas required to deploy a new project/audience */
  deploymentGas: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/xion.jwk.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package xion.jwk.v1
 * @see proto type: xion.jwk.v1.Params
 */
export interface ParamsAmino {
  /**
   * Time offset in nanoseconds for JWT validation
   */
  time_offset?: string;
  /**
   * Gas required to deploy a new project/audience
   */
  deployment_gas?: string;
}
export interface ParamsAminoMsg {
  type: "/xion.jwk.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  time_offset: bigint;
  deployment_gas: bigint;
}
function createBaseParams(): Params {
  return {
    timeOffset: BigInt(0),
    deploymentGas: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/xion.jwk.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timeOffset !== BigInt(0)) {
      writer.uint32(8).uint64(message.timeOffset);
    }
    if (message.deploymentGas !== BigInt(0)) {
      writer.uint32(16).uint64(message.deploymentGas);
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
          message.timeOffset = reader.uint64();
          break;
        case 2:
          message.deploymentGas = reader.uint64();
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
    message.timeOffset = object.timeOffset !== undefined && object.timeOffset !== null ? BigInt(object.timeOffset.toString()) : BigInt(0);
    message.deploymentGas = object.deploymentGas !== undefined && object.deploymentGas !== null ? BigInt(object.deploymentGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.time_offset !== undefined && object.time_offset !== null) {
      message.timeOffset = BigInt(object.time_offset);
    }
    if (object.deployment_gas !== undefined && object.deployment_gas !== null) {
      message.deploymentGas = BigInt(object.deployment_gas);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.time_offset = message.timeOffset !== BigInt(0) ? message.timeOffset?.toString() : undefined;
    obj.deployment_gas = message.deploymentGas !== BigInt(0) ? message.deploymentGas?.toString() : undefined;
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
      typeUrl: "/xion.jwk.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};