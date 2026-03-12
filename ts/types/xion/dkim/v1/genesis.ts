//@ts-nocheck
import { DkimPubKey, DkimPubKeyAmino, DkimPubKeySDKType } from "./state";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the module genesis state */
export interface GenesisState {
  /** Params defines all the parameters of the module. */
  params: Params;
  /** dkim_pubkeys stores the list of active DKIM public keys. */
  dkimPubkeys: DkimPubKey[];
  /** revoked_pubkeys stores the list of revoked DKIM public keys. */
  revokedPubkeys: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xion.dkim.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the module genesis state
 * @name GenesisStateAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Params defines all the parameters of the module.
   */
  params?: ParamsAmino;
  /**
   * dkim_pubkeys stores the list of active DKIM public keys.
   */
  dkim_pubkeys?: DkimPubKeyAmino[];
  /**
   * revoked_pubkeys stores the list of revoked DKIM public keys.
   */
  revoked_pubkeys?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/xion.dkim.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  dkim_pubkeys: DkimPubKeySDKType[];
  revoked_pubkeys: string[];
}
/** IndexRange defines a range of indices [start, end) in the public inputs array. */
export interface IndexRange {
  start: bigint;
  end: bigint;
}
export interface IndexRangeProtoMsg {
  typeUrl: "/xion.dkim.v1.IndexRange";
  value: Uint8Array;
}
/**
 * IndexRange defines a range of indices [start, end) in the public inputs array.
 * @name IndexRangeAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.IndexRange
 */
export interface IndexRangeAmino {
  start?: string;
  end?: string;
}
export interface IndexRangeAminoMsg {
  type: "/xion.dkim.v1.IndexRange";
  value: IndexRangeAmino;
}
/** IndexRange defines a range of indices [start, end) in the public inputs array. */
export interface IndexRangeSDKType {
  start: bigint;
  end: bigint;
}
/** PublicInputIndices defines the indices for extracting data from public inputs. */
export interface PublicInputIndices {
  minLength: bigint;
  emailHashIndex: bigint;
  dkimDomainRange: IndexRange;
  dkimHashIndex: bigint;
  txBytesRange: IndexRange;
  emailHostRange: IndexRange;
  emailSubjectRange: IndexRange;
}
export interface PublicInputIndicesProtoMsg {
  typeUrl: "/xion.dkim.v1.PublicInputIndices";
  value: Uint8Array;
}
/**
 * PublicInputIndices defines the indices for extracting data from public inputs.
 * @name PublicInputIndicesAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.PublicInputIndices
 */
export interface PublicInputIndicesAmino {
  min_length?: string;
  email_hash_index?: string;
  dkim_domain_range?: IndexRangeAmino;
  dkim_hash_index?: string;
  tx_bytes_range?: IndexRangeAmino;
  email_host_range?: IndexRangeAmino;
  email_subject_range?: IndexRangeAmino;
}
export interface PublicInputIndicesAminoMsg {
  type: "/xion.dkim.v1.PublicInputIndices";
  value: PublicInputIndicesAmino;
}
/** PublicInputIndices defines the indices for extracting data from public inputs. */
export interface PublicInputIndicesSDKType {
  min_length: bigint;
  email_hash_index: bigint;
  dkim_domain_range: IndexRangeSDKType;
  dkim_hash_index: bigint;
  tx_bytes_range: IndexRangeSDKType;
  email_host_range: IndexRangeSDKType;
  email_subject_range: IndexRangeSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
  /** vkey defines the verification key used by the module. */
  vkeyIdentifier: bigint;
  /**
   * max_pubkey_size_bytes caps the allowed DKIM public key size (base64
   * decoded).
   */
  maxPubkeySizeBytes: bigint;
  /** public_input_indices defines the indices for extracting data from public inputs. */
  publicInputIndices: PublicInputIndices;
}
export interface ParamsProtoMsg {
  typeUrl: "/xion.dkim.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of module parameters.
 * @name ParamsAmino
 * @package xion.dkim.v1
 * @see proto type: xion.dkim.v1.Params
 */
export interface ParamsAmino {
  /**
   * vkey defines the verification key used by the module.
   */
  vkey_identifier?: string;
  /**
   * max_pubkey_size_bytes caps the allowed DKIM public key size (base64
   * decoded).
   */
  max_pubkey_size_bytes?: string;
  /**
   * public_input_indices defines the indices for extracting data from public inputs.
   */
  public_input_indices?: PublicInputIndicesAmino;
}
export interface ParamsAminoMsg {
  type: "dkim/params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  vkey_identifier: bigint;
  max_pubkey_size_bytes: bigint;
  public_input_indices: PublicInputIndicesSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    dkimPubkeys: [],
    revokedPubkeys: []
  };
}
export const GenesisState = {
  typeUrl: "/xion.dkim.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dkimPubkeys) {
      DkimPubKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.revokedPubkeys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.dkimPubkeys.push(DkimPubKey.decode(reader, reader.uint32()));
          break;
        case 3:
          message.revokedPubkeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.dkimPubkeys = object.dkimPubkeys?.map(e => DkimPubKey.fromPartial(e)) || [];
    message.revokedPubkeys = object.revokedPubkeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.dkimPubkeys = object.dkim_pubkeys?.map(e => DkimPubKey.fromAmino(e)) || [];
    message.revokedPubkeys = object.revoked_pubkeys?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.dkimPubkeys) {
      obj.dkim_pubkeys = message.dkimPubkeys.map(e => e ? DkimPubKey.toAmino(e) : undefined);
    } else {
      obj.dkim_pubkeys = message.dkimPubkeys;
    }
    if (message.revokedPubkeys) {
      obj.revoked_pubkeys = message.revokedPubkeys.map(e => e);
    } else {
      obj.revoked_pubkeys = message.revokedPubkeys;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseIndexRange(): IndexRange {
  return {
    start: BigInt(0),
    end: BigInt(0)
  };
}
export const IndexRange = {
  typeUrl: "/xion.dkim.v1.IndexRange",
  encode(message: IndexRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== BigInt(0)) {
      writer.uint32(8).uint64(message.start);
    }
    if (message.end !== BigInt(0)) {
      writer.uint32(16).uint64(message.end);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IndexRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = reader.uint64();
          break;
        case 2:
          message.end = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IndexRange>): IndexRange {
    const message = createBaseIndexRange();
    message.start = object.start !== undefined && object.start !== null ? BigInt(object.start.toString()) : BigInt(0);
    message.end = object.end !== undefined && object.end !== null ? BigInt(object.end.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IndexRangeAmino): IndexRange {
    const message = createBaseIndexRange();
    if (object.start !== undefined && object.start !== null) {
      message.start = BigInt(object.start);
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = BigInt(object.end);
    }
    return message;
  },
  toAmino(message: IndexRange): IndexRangeAmino {
    const obj: any = {};
    obj.start = message.start !== BigInt(0) ? message.start?.toString() : undefined;
    obj.end = message.end !== BigInt(0) ? message.end?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IndexRangeAminoMsg): IndexRange {
    return IndexRange.fromAmino(object.value);
  },
  fromProtoMsg(message: IndexRangeProtoMsg): IndexRange {
    return IndexRange.decode(message.value);
  },
  toProto(message: IndexRange): Uint8Array {
    return IndexRange.encode(message).finish();
  },
  toProtoMsg(message: IndexRange): IndexRangeProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.IndexRange",
      value: IndexRange.encode(message).finish()
    };
  }
};
function createBasePublicInputIndices(): PublicInputIndices {
  return {
    minLength: BigInt(0),
    emailHashIndex: BigInt(0),
    dkimDomainRange: IndexRange.fromPartial({}),
    dkimHashIndex: BigInt(0),
    txBytesRange: IndexRange.fromPartial({}),
    emailHostRange: IndexRange.fromPartial({}),
    emailSubjectRange: IndexRange.fromPartial({})
  };
}
export const PublicInputIndices = {
  typeUrl: "/xion.dkim.v1.PublicInputIndices",
  encode(message: PublicInputIndices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minLength !== BigInt(0)) {
      writer.uint32(8).uint64(message.minLength);
    }
    if (message.emailHashIndex !== BigInt(0)) {
      writer.uint32(16).uint64(message.emailHashIndex);
    }
    if (message.dkimDomainRange !== undefined) {
      IndexRange.encode(message.dkimDomainRange, writer.uint32(26).fork()).ldelim();
    }
    if (message.dkimHashIndex !== BigInt(0)) {
      writer.uint32(32).uint64(message.dkimHashIndex);
    }
    if (message.txBytesRange !== undefined) {
      IndexRange.encode(message.txBytesRange, writer.uint32(42).fork()).ldelim();
    }
    if (message.emailHostRange !== undefined) {
      IndexRange.encode(message.emailHostRange, writer.uint32(50).fork()).ldelim();
    }
    if (message.emailSubjectRange !== undefined) {
      IndexRange.encode(message.emailSubjectRange, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublicInputIndices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicInputIndices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLength = reader.uint64();
          break;
        case 2:
          message.emailHashIndex = reader.uint64();
          break;
        case 3:
          message.dkimDomainRange = IndexRange.decode(reader, reader.uint32());
          break;
        case 4:
          message.dkimHashIndex = reader.uint64();
          break;
        case 5:
          message.txBytesRange = IndexRange.decode(reader, reader.uint32());
          break;
        case 6:
          message.emailHostRange = IndexRange.decode(reader, reader.uint32());
          break;
        case 7:
          message.emailSubjectRange = IndexRange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PublicInputIndices>): PublicInputIndices {
    const message = createBasePublicInputIndices();
    message.minLength = object.minLength !== undefined && object.minLength !== null ? BigInt(object.minLength.toString()) : BigInt(0);
    message.emailHashIndex = object.emailHashIndex !== undefined && object.emailHashIndex !== null ? BigInt(object.emailHashIndex.toString()) : BigInt(0);
    message.dkimDomainRange = object.dkimDomainRange !== undefined && object.dkimDomainRange !== null ? IndexRange.fromPartial(object.dkimDomainRange) : undefined;
    message.dkimHashIndex = object.dkimHashIndex !== undefined && object.dkimHashIndex !== null ? BigInt(object.dkimHashIndex.toString()) : BigInt(0);
    message.txBytesRange = object.txBytesRange !== undefined && object.txBytesRange !== null ? IndexRange.fromPartial(object.txBytesRange) : undefined;
    message.emailHostRange = object.emailHostRange !== undefined && object.emailHostRange !== null ? IndexRange.fromPartial(object.emailHostRange) : undefined;
    message.emailSubjectRange = object.emailSubjectRange !== undefined && object.emailSubjectRange !== null ? IndexRange.fromPartial(object.emailSubjectRange) : undefined;
    return message;
  },
  fromAmino(object: PublicInputIndicesAmino): PublicInputIndices {
    const message = createBasePublicInputIndices();
    if (object.min_length !== undefined && object.min_length !== null) {
      message.minLength = BigInt(object.min_length);
    }
    if (object.email_hash_index !== undefined && object.email_hash_index !== null) {
      message.emailHashIndex = BigInt(object.email_hash_index);
    }
    if (object.dkim_domain_range !== undefined && object.dkim_domain_range !== null) {
      message.dkimDomainRange = IndexRange.fromAmino(object.dkim_domain_range);
    }
    if (object.dkim_hash_index !== undefined && object.dkim_hash_index !== null) {
      message.dkimHashIndex = BigInt(object.dkim_hash_index);
    }
    if (object.tx_bytes_range !== undefined && object.tx_bytes_range !== null) {
      message.txBytesRange = IndexRange.fromAmino(object.tx_bytes_range);
    }
    if (object.email_host_range !== undefined && object.email_host_range !== null) {
      message.emailHostRange = IndexRange.fromAmino(object.email_host_range);
    }
    if (object.email_subject_range !== undefined && object.email_subject_range !== null) {
      message.emailSubjectRange = IndexRange.fromAmino(object.email_subject_range);
    }
    return message;
  },
  toAmino(message: PublicInputIndices): PublicInputIndicesAmino {
    const obj: any = {};
    obj.min_length = message.minLength !== BigInt(0) ? message.minLength?.toString() : undefined;
    obj.email_hash_index = message.emailHashIndex !== BigInt(0) ? message.emailHashIndex?.toString() : undefined;
    obj.dkim_domain_range = message.dkimDomainRange ? IndexRange.toAmino(message.dkimDomainRange) : undefined;
    obj.dkim_hash_index = message.dkimHashIndex !== BigInt(0) ? message.dkimHashIndex?.toString() : undefined;
    obj.tx_bytes_range = message.txBytesRange ? IndexRange.toAmino(message.txBytesRange) : undefined;
    obj.email_host_range = message.emailHostRange ? IndexRange.toAmino(message.emailHostRange) : undefined;
    obj.email_subject_range = message.emailSubjectRange ? IndexRange.toAmino(message.emailSubjectRange) : undefined;
    return obj;
  },
  fromAminoMsg(object: PublicInputIndicesAminoMsg): PublicInputIndices {
    return PublicInputIndices.fromAmino(object.value);
  },
  fromProtoMsg(message: PublicInputIndicesProtoMsg): PublicInputIndices {
    return PublicInputIndices.decode(message.value);
  },
  toProto(message: PublicInputIndices): Uint8Array {
    return PublicInputIndices.encode(message).finish();
  },
  toProtoMsg(message: PublicInputIndices): PublicInputIndicesProtoMsg {
    return {
      typeUrl: "/xion.dkim.v1.PublicInputIndices",
      value: PublicInputIndices.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    vkeyIdentifier: BigInt(0),
    maxPubkeySizeBytes: BigInt(0),
    publicInputIndices: PublicInputIndices.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/xion.dkim.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vkeyIdentifier !== BigInt(0)) {
      writer.uint32(8).uint64(message.vkeyIdentifier);
    }
    if (message.maxPubkeySizeBytes !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxPubkeySizeBytes);
    }
    if (message.publicInputIndices !== undefined) {
      PublicInputIndices.encode(message.publicInputIndices, writer.uint32(26).fork()).ldelim();
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
          message.vkeyIdentifier = reader.uint64();
          break;
        case 2:
          message.maxPubkeySizeBytes = reader.uint64();
          break;
        case 3:
          message.publicInputIndices = PublicInputIndices.decode(reader, reader.uint32());
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
    message.vkeyIdentifier = object.vkeyIdentifier !== undefined && object.vkeyIdentifier !== null ? BigInt(object.vkeyIdentifier.toString()) : BigInt(0);
    message.maxPubkeySizeBytes = object.maxPubkeySizeBytes !== undefined && object.maxPubkeySizeBytes !== null ? BigInt(object.maxPubkeySizeBytes.toString()) : BigInt(0);
    message.publicInputIndices = object.publicInputIndices !== undefined && object.publicInputIndices !== null ? PublicInputIndices.fromPartial(object.publicInputIndices) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.vkey_identifier !== undefined && object.vkey_identifier !== null) {
      message.vkeyIdentifier = BigInt(object.vkey_identifier);
    }
    if (object.max_pubkey_size_bytes !== undefined && object.max_pubkey_size_bytes !== null) {
      message.maxPubkeySizeBytes = BigInt(object.max_pubkey_size_bytes);
    }
    if (object.public_input_indices !== undefined && object.public_input_indices !== null) {
      message.publicInputIndices = PublicInputIndices.fromAmino(object.public_input_indices);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.vkey_identifier = message.vkeyIdentifier !== BigInt(0) ? message.vkeyIdentifier?.toString() : undefined;
    obj.max_pubkey_size_bytes = message.maxPubkeySizeBytes !== BigInt(0) ? message.maxPubkeySizeBytes?.toString() : undefined;
    obj.public_input_indices = message.publicInputIndices ? PublicInputIndices.toAmino(message.publicInputIndices) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "dkim/params",
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
      typeUrl: "/xion.dkim.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};