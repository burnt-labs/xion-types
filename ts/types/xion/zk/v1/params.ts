//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the zk module parameters. */
export interface Params {
  /** max_vkey_size_bytes caps the size of a verification key JSON payload. */
  maxVkeySizeBytes: bigint;
  /** upload_chunk_size defines the byte-size of each gas tier. */
  uploadChunkSize: bigint;
  /** upload_chunk_gas defines the gas cost per upload chunk. */
  uploadChunkGas: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/xion.zk.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the zk module parameters.
 * @name ParamsAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.Params
 */
export interface ParamsAmino {
  /**
   * max_vkey_size_bytes caps the size of a verification key JSON payload.
   */
  max_vkey_size_bytes?: string;
  /**
   * upload_chunk_size defines the byte-size of each gas tier.
   */
  upload_chunk_size?: string;
  /**
   * upload_chunk_gas defines the gas cost per upload chunk.
   */
  upload_chunk_gas?: string;
}
export interface ParamsAminoMsg {
  type: "zk/params";
  value: ParamsAmino;
}
/** Params defines the zk module parameters. */
export interface ParamsSDKType {
  max_vkey_size_bytes: bigint;
  upload_chunk_size: bigint;
  upload_chunk_gas: bigint;
}
function createBaseParams(): Params {
  return {
    maxVkeySizeBytes: BigInt(0),
    uploadChunkSize: BigInt(0),
    uploadChunkGas: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/xion.zk.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxVkeySizeBytes !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxVkeySizeBytes);
    }
    if (message.uploadChunkSize !== BigInt(0)) {
      writer.uint32(16).uint64(message.uploadChunkSize);
    }
    if (message.uploadChunkGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.uploadChunkGas);
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
          message.maxVkeySizeBytes = reader.uint64();
          break;
        case 2:
          message.uploadChunkSize = reader.uint64();
          break;
        case 3:
          message.uploadChunkGas = reader.uint64();
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
    message.maxVkeySizeBytes = object.maxVkeySizeBytes !== undefined && object.maxVkeySizeBytes !== null ? BigInt(object.maxVkeySizeBytes.toString()) : BigInt(0);
    message.uploadChunkSize = object.uploadChunkSize !== undefined && object.uploadChunkSize !== null ? BigInt(object.uploadChunkSize.toString()) : BigInt(0);
    message.uploadChunkGas = object.uploadChunkGas !== undefined && object.uploadChunkGas !== null ? BigInt(object.uploadChunkGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_vkey_size_bytes !== undefined && object.max_vkey_size_bytes !== null) {
      message.maxVkeySizeBytes = BigInt(object.max_vkey_size_bytes);
    }
    if (object.upload_chunk_size !== undefined && object.upload_chunk_size !== null) {
      message.uploadChunkSize = BigInt(object.upload_chunk_size);
    }
    if (object.upload_chunk_gas !== undefined && object.upload_chunk_gas !== null) {
      message.uploadChunkGas = BigInt(object.upload_chunk_gas);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_vkey_size_bytes = message.maxVkeySizeBytes !== BigInt(0) ? message.maxVkeySizeBytes?.toString() : undefined;
    obj.upload_chunk_size = message.uploadChunkSize !== BigInt(0) ? message.uploadChunkSize?.toString() : undefined;
    obj.upload_chunk_gas = message.uploadChunkGas !== BigInt(0) ? message.uploadChunkGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "zk/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};