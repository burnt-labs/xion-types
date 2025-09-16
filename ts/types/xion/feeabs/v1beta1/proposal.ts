//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
/** HostChainFeeAbsStatus */
export enum HostChainFeeAbsStatus {
  UPDATED = 0,
  OUTDATED = 1,
  FROZEN = 2,
  UNRECOGNIZED = -1,
}
export const HostChainFeeAbsStatusSDKType = HostChainFeeAbsStatus;
export const HostChainFeeAbsStatusAmino = HostChainFeeAbsStatus;
export function hostChainFeeAbsStatusFromJSON(object: any): HostChainFeeAbsStatus {
  switch (object) {
    case 0:
    case "UPDATED":
      return HostChainFeeAbsStatus.UPDATED;
    case 1:
    case "OUTDATED":
      return HostChainFeeAbsStatus.OUTDATED;
    case 2:
    case "FROZEN":
      return HostChainFeeAbsStatus.FROZEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HostChainFeeAbsStatus.UNRECOGNIZED;
  }
}
export function hostChainFeeAbsStatusToJSON(object: HostChainFeeAbsStatus): string {
  switch (object) {
    case HostChainFeeAbsStatus.UPDATED:
      return "UPDATED";
    case HostChainFeeAbsStatus.OUTDATED:
      return "OUTDATED";
    case HostChainFeeAbsStatus.FROZEN:
      return "FROZEN";
    case HostChainFeeAbsStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** HostChainFeeAbsConfig */
export interface HostChainFeeAbsConfig {
  /** ibc token is allowed to be used as fee token */
  ibcDenom: string;
  /** token_in in cross_chain swap contract. */
  osmosisPoolTokenDenomIn: string;
  /** pool id */
  poolId: bigint;
  /** Host chain fee abstraction connection status */
  status: HostChainFeeAbsStatus;
}
export interface HostChainFeeAbsConfigProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.HostChainFeeAbsConfig";
  value: Uint8Array;
}
/**
 * HostChainFeeAbsConfig
 * @name HostChainFeeAbsConfigAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.HostChainFeeAbsConfig
 */
export interface HostChainFeeAbsConfigAmino {
  /**
   * ibc token is allowed to be used as fee token
   */
  ibc_denom?: string;
  /**
   * token_in in cross_chain swap contract.
   */
  osmosis_pool_token_denom_in?: string;
  /**
   * pool id
   */
  pool_id?: string;
  /**
   * Host chain fee abstraction connection status
   */
  status?: HostChainFeeAbsStatus;
}
export interface HostChainFeeAbsConfigAminoMsg {
  type: "/xion.feeabs.v1beta1.HostChainFeeAbsConfig";
  value: HostChainFeeAbsConfigAmino;
}
/** HostChainFeeAbsConfig */
export interface HostChainFeeAbsConfigSDKType {
  ibc_denom: string;
  osmosis_pool_token_denom_in: string;
  pool_id: bigint;
  status: HostChainFeeAbsStatus;
}
/** AddHostZoneProposal */
export interface AddHostZoneProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the host chain config */
  hostChainConfig?: HostChainFeeAbsConfig;
}
export interface AddHostZoneProposalProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.AddHostZoneProposal";
  value: Uint8Array;
}
/**
 * AddHostZoneProposal
 * @name AddHostZoneProposalAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.AddHostZoneProposal
 */
export interface AddHostZoneProposalAmino {
  /**
   * the title of the proposal
   */
  title?: string;
  /**
   * the description of the proposal
   */
  description?: string;
  /**
   * the host chain config
   */
  host_chain_config?: HostChainFeeAbsConfigAmino;
}
export interface AddHostZoneProposalAminoMsg {
  type: "/xion.feeabs.v1beta1.AddHostZoneProposal";
  value: AddHostZoneProposalAmino;
}
/** AddHostZoneProposal */
export interface AddHostZoneProposalSDKType {
  title: string;
  description: string;
  host_chain_config?: HostChainFeeAbsConfigSDKType;
}
/** DeleteHostZoneProposal */
export interface DeleteHostZoneProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the  ibc denom of this token */
  ibcDenom: string;
}
export interface DeleteHostZoneProposalProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.DeleteHostZoneProposal";
  value: Uint8Array;
}
/**
 * DeleteHostZoneProposal
 * @name DeleteHostZoneProposalAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.DeleteHostZoneProposal
 */
export interface DeleteHostZoneProposalAmino {
  /**
   * the title of the proposal
   */
  title?: string;
  /**
   * the description of the proposal
   */
  description?: string;
  /**
   * the  ibc denom of this token
   */
  ibc_denom?: string;
}
export interface DeleteHostZoneProposalAminoMsg {
  type: "/xion.feeabs.v1beta1.DeleteHostZoneProposal";
  value: DeleteHostZoneProposalAmino;
}
/** DeleteHostZoneProposal */
export interface DeleteHostZoneProposalSDKType {
  title: string;
  description: string;
  ibc_denom: string;
}
/** SetHostZoneProposal */
export interface SetHostZoneProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the host chain config */
  hostChainConfig?: HostChainFeeAbsConfig;
}
export interface SetHostZoneProposalProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.SetHostZoneProposal";
  value: Uint8Array;
}
/**
 * SetHostZoneProposal
 * @name SetHostZoneProposalAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.SetHostZoneProposal
 */
export interface SetHostZoneProposalAmino {
  /**
   * the title of the proposal
   */
  title?: string;
  /**
   * the description of the proposal
   */
  description?: string;
  /**
   * the host chain config
   */
  host_chain_config?: HostChainFeeAbsConfigAmino;
}
export interface SetHostZoneProposalAminoMsg {
  type: "/xion.feeabs.v1beta1.SetHostZoneProposal";
  value: SetHostZoneProposalAmino;
}
/** SetHostZoneProposal */
export interface SetHostZoneProposalSDKType {
  title: string;
  description: string;
  host_chain_config?: HostChainFeeAbsConfigSDKType;
}
function createBaseHostChainFeeAbsConfig(): HostChainFeeAbsConfig {
  return {
    ibcDenom: "",
    osmosisPoolTokenDenomIn: "",
    poolId: BigInt(0),
    status: 0
  };
}
export const HostChainFeeAbsConfig = {
  typeUrl: "/xion.feeabs.v1beta1.HostChainFeeAbsConfig",
  encode(message: HostChainFeeAbsConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcDenom !== "") {
      writer.uint32(10).string(message.ibcDenom);
    }
    if (message.osmosisPoolTokenDenomIn !== "") {
      writer.uint32(18).string(message.osmosisPoolTokenDenomIn);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostChainFeeAbsConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostChainFeeAbsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcDenom = reader.string();
          break;
        case 2:
          message.osmosisPoolTokenDenomIn = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HostChainFeeAbsConfig>): HostChainFeeAbsConfig {
    const message = createBaseHostChainFeeAbsConfig();
    message.ibcDenom = object.ibcDenom ?? "";
    message.osmosisPoolTokenDenomIn = object.osmosisPoolTokenDenomIn ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: HostChainFeeAbsConfigAmino): HostChainFeeAbsConfig {
    const message = createBaseHostChainFeeAbsConfig();
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    if (object.osmosis_pool_token_denom_in !== undefined && object.osmosis_pool_token_denom_in !== null) {
      message.osmosisPoolTokenDenomIn = object.osmosis_pool_token_denom_in;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: HostChainFeeAbsConfig): HostChainFeeAbsConfigAmino {
    const obj: any = {};
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    obj.osmosis_pool_token_denom_in = message.osmosisPoolTokenDenomIn === "" ? undefined : message.osmosisPoolTokenDenomIn;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: HostChainFeeAbsConfigAminoMsg): HostChainFeeAbsConfig {
    return HostChainFeeAbsConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: HostChainFeeAbsConfigProtoMsg): HostChainFeeAbsConfig {
    return HostChainFeeAbsConfig.decode(message.value);
  },
  toProto(message: HostChainFeeAbsConfig): Uint8Array {
    return HostChainFeeAbsConfig.encode(message).finish();
  },
  toProtoMsg(message: HostChainFeeAbsConfig): HostChainFeeAbsConfigProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.HostChainFeeAbsConfig",
      value: HostChainFeeAbsConfig.encode(message).finish()
    };
  }
};
function createBaseAddHostZoneProposal(): AddHostZoneProposal {
  return {
    title: "",
    description: "",
    hostChainConfig: undefined
  };
}
export const AddHostZoneProposal = {
  typeUrl: "/xion.feeabs.v1beta1.AddHostZoneProposal",
  encode(message: AddHostZoneProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hostChainConfig !== undefined) {
      HostChainFeeAbsConfig.encode(message.hostChainConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddHostZoneProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddHostZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.hostChainConfig = HostChainFeeAbsConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AddHostZoneProposal>): AddHostZoneProposal {
    const message = createBaseAddHostZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostChainConfig = object.hostChainConfig !== undefined && object.hostChainConfig !== null ? HostChainFeeAbsConfig.fromPartial(object.hostChainConfig) : undefined;
    return message;
  },
  fromAmino(object: AddHostZoneProposalAmino): AddHostZoneProposal {
    const message = createBaseAddHostZoneProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.host_chain_config !== undefined && object.host_chain_config !== null) {
      message.hostChainConfig = HostChainFeeAbsConfig.fromAmino(object.host_chain_config);
    }
    return message;
  },
  toAmino(message: AddHostZoneProposal): AddHostZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.host_chain_config = message.hostChainConfig ? HostChainFeeAbsConfig.toAmino(message.hostChainConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddHostZoneProposalAminoMsg): AddHostZoneProposal {
    return AddHostZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddHostZoneProposalProtoMsg): AddHostZoneProposal {
    return AddHostZoneProposal.decode(message.value);
  },
  toProto(message: AddHostZoneProposal): Uint8Array {
    return AddHostZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: AddHostZoneProposal): AddHostZoneProposalProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.AddHostZoneProposal",
      value: AddHostZoneProposal.encode(message).finish()
    };
  }
};
function createBaseDeleteHostZoneProposal(): DeleteHostZoneProposal {
  return {
    title: "",
    description: "",
    ibcDenom: ""
  };
}
export const DeleteHostZoneProposal = {
  typeUrl: "/xion.feeabs.v1beta1.DeleteHostZoneProposal",
  encode(message: DeleteHostZoneProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(26).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteHostZoneProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteHostZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DeleteHostZoneProposal>): DeleteHostZoneProposal {
    const message = createBaseDeleteHostZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: DeleteHostZoneProposalAmino): DeleteHostZoneProposal {
    const message = createBaseDeleteHostZoneProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    return message;
  },
  toAmino(message: DeleteHostZoneProposal): DeleteHostZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: DeleteHostZoneProposalAminoMsg): DeleteHostZoneProposal {
    return DeleteHostZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteHostZoneProposalProtoMsg): DeleteHostZoneProposal {
    return DeleteHostZoneProposal.decode(message.value);
  },
  toProto(message: DeleteHostZoneProposal): Uint8Array {
    return DeleteHostZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: DeleteHostZoneProposal): DeleteHostZoneProposalProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.DeleteHostZoneProposal",
      value: DeleteHostZoneProposal.encode(message).finish()
    };
  }
};
function createBaseSetHostZoneProposal(): SetHostZoneProposal {
  return {
    title: "",
    description: "",
    hostChainConfig: undefined
  };
}
export const SetHostZoneProposal = {
  typeUrl: "/xion.feeabs.v1beta1.SetHostZoneProposal",
  encode(message: SetHostZoneProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hostChainConfig !== undefined) {
      HostChainFeeAbsConfig.encode(message.hostChainConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetHostZoneProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetHostZoneProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.hostChainConfig = HostChainFeeAbsConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SetHostZoneProposal>): SetHostZoneProposal {
    const message = createBaseSetHostZoneProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostChainConfig = object.hostChainConfig !== undefined && object.hostChainConfig !== null ? HostChainFeeAbsConfig.fromPartial(object.hostChainConfig) : undefined;
    return message;
  },
  fromAmino(object: SetHostZoneProposalAmino): SetHostZoneProposal {
    const message = createBaseSetHostZoneProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.host_chain_config !== undefined && object.host_chain_config !== null) {
      message.hostChainConfig = HostChainFeeAbsConfig.fromAmino(object.host_chain_config);
    }
    return message;
  },
  toAmino(message: SetHostZoneProposal): SetHostZoneProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.host_chain_config = message.hostChainConfig ? HostChainFeeAbsConfig.toAmino(message.hostChainConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: SetHostZoneProposalAminoMsg): SetHostZoneProposal {
    return SetHostZoneProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: SetHostZoneProposalProtoMsg): SetHostZoneProposal {
    return SetHostZoneProposal.decode(message.value);
  },
  toProto(message: SetHostZoneProposal): Uint8Array {
    return SetHostZoneProposal.encode(message).finish();
  },
  toProtoMsg(message: SetHostZoneProposal): SetHostZoneProposalProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.SetHostZoneProposal",
      value: SetHostZoneProposal.encode(message).finish()
    };
  }
};