//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceProtoMsg, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceProtoMsg, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceProtoMsg, AllowedMsgAllowanceSDKType } from "../../cosmos/feegrant/v1beta1/feegrant";
import { BinaryReader, BinaryWriter } from "../../binary";
/** AuthzAllowance creates allowance only authz message for a specific grantee */
export interface AuthzAllowance {
  $typeUrl?: "/xion.v1.AuthzAllowance";
  /** allowance can be any of basic and periodic fee allowance. */
  allowance?: AuthzAllowance | ContractsAllowance | MultiAnyAllowance | BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
  /** The address that can use this authorization-based allowance */
  authzGrantee: string;
}
export interface AuthzAllowanceProtoMsg {
  typeUrl: "/xion.v1.AuthzAllowance";
  value: Uint8Array;
}
export type AuthzAllowanceEncoded = Omit<AuthzAllowance, "allowance"> & {
  /** allowance can be any of basic and periodic fee allowance. */allowance?: AuthzAllowanceProtoMsg | ContractsAllowanceProtoMsg | MultiAnyAllowanceProtoMsg | BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * AuthzAllowance creates allowance only authz message for a specific grantee
 * @name AuthzAllowanceAmino
 * @package xion.v1
 * @see proto type: xion.v1.AuthzAllowance
 */
export interface AuthzAllowanceAmino {
  /**
   * allowance can be any of basic and periodic fee allowance.
   */
  allowance?: AnyAmino;
  /**
   * The address that can use this authorization-based allowance
   */
  authz_grantee?: string;
}
export interface AuthzAllowanceAminoMsg {
  type: "xion/AuthzAllowance";
  value: AuthzAllowanceAmino;
}
/** AuthzAllowance creates allowance only authz message for a specific grantee */
export interface AuthzAllowanceSDKType {
  $typeUrl?: "/xion.v1.AuthzAllowance";
  allowance?: AuthzAllowanceSDKType | ContractsAllowanceSDKType | MultiAnyAllowanceSDKType | BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
  authz_grantee: string;
}
/** ContractsAllowance creates allowance only for specific contracts */
export interface ContractsAllowance {
  $typeUrl?: "/xion.v1.ContractsAllowance";
  /** allowance can be any allowance interface type. */
  allowance?: AuthzAllowance | ContractsAllowance | MultiAnyAllowance | BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
  /** List of contract addresses that this allowance applies to */
  contractAddresses: string[];
}
export interface ContractsAllowanceProtoMsg {
  typeUrl: "/xion.v1.ContractsAllowance";
  value: Uint8Array;
}
export type ContractsAllowanceEncoded = Omit<ContractsAllowance, "allowance"> & {
  /** allowance can be any allowance interface type. */allowance?: AuthzAllowanceProtoMsg | ContractsAllowanceProtoMsg | MultiAnyAllowanceProtoMsg | BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * ContractsAllowance creates allowance only for specific contracts
 * @name ContractsAllowanceAmino
 * @package xion.v1
 * @see proto type: xion.v1.ContractsAllowance
 */
export interface ContractsAllowanceAmino {
  /**
   * allowance can be any allowance interface type.
   */
  allowance?: AnyAmino;
  /**
   * List of contract addresses that this allowance applies to
   */
  contract_addresses?: string[];
}
export interface ContractsAllowanceAminoMsg {
  type: "xion/ContractsAllowance";
  value: ContractsAllowanceAmino;
}
/** ContractsAllowance creates allowance only for specific contracts */
export interface ContractsAllowanceSDKType {
  $typeUrl?: "/xion.v1.ContractsAllowance";
  allowance?: AuthzAllowanceSDKType | ContractsAllowanceSDKType | MultiAnyAllowanceSDKType | BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
  contract_addresses: string[];
}
/**
 * MultiAnyAllowance creates an allowance that pays if any of the internal
 * allowances are met
 */
export interface MultiAnyAllowance {
  $typeUrl?: "/xion.v1.MultiAnyAllowance";
  /** allowance can be any allowance interface type. */
  allowances: (AuthzAllowance | ContractsAllowance | MultiAnyAllowance | BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any)[] | Any[];
}
export interface MultiAnyAllowanceProtoMsg {
  typeUrl: "/xion.v1.MultiAnyAllowance";
  value: Uint8Array;
}
export type MultiAnyAllowanceEncoded = Omit<MultiAnyAllowance, "allowances"> & {
  /** allowance can be any allowance interface type. */allowances: (AuthzAllowanceProtoMsg | ContractsAllowanceProtoMsg | MultiAnyAllowanceProtoMsg | BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg)[];
};
/**
 * MultiAnyAllowance creates an allowance that pays if any of the internal
 * allowances are met
 * @name MultiAnyAllowanceAmino
 * @package xion.v1
 * @see proto type: xion.v1.MultiAnyAllowance
 */
export interface MultiAnyAllowanceAmino {
  /**
   * allowance can be any allowance interface type.
   */
  allowances?: AnyAmino[];
}
export interface MultiAnyAllowanceAminoMsg {
  type: "xion/MultiAnyAllowance";
  value: MultiAnyAllowanceAmino;
}
/**
 * MultiAnyAllowance creates an allowance that pays if any of the internal
 * allowances are met
 */
export interface MultiAnyAllowanceSDKType {
  $typeUrl?: "/xion.v1.MultiAnyAllowance";
  allowances: (AuthzAllowanceSDKType | ContractsAllowanceSDKType | MultiAnyAllowanceSDKType | BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType)[];
}
function createBaseAuthzAllowance(): AuthzAllowance {
  return {
    $typeUrl: "/xion.v1.AuthzAllowance",
    allowance: undefined,
    authzGrantee: ""
  };
}
export const AuthzAllowance = {
  typeUrl: "/xion.v1.AuthzAllowance",
  encode(message: AuthzAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance as Any, writer.uint32(10).fork()).ldelim();
    }
    if (message.authzGrantee !== "") {
      writer.uint32(18).string(message.authzGrantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthzAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthzAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader) as Any;
          break;
        case 2:
          message.authzGrantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AuthzAllowance>): AuthzAllowance {
    const message = createBaseAuthzAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.authzGrantee = object.authzGrantee ?? "";
    return message;
  },
  fromAmino(object: AuthzAllowanceAmino): AuthzAllowance {
    const message = createBaseAuthzAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    if (object.authz_grantee !== undefined && object.authz_grantee !== null) {
      message.authzGrantee = object.authz_grantee;
    }
    return message;
  },
  toAmino(message: AuthzAllowance): AuthzAllowanceAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance as Any) : undefined;
    obj.authz_grantee = message.authzGrantee === "" ? undefined : message.authzGrantee;
    return obj;
  },
  fromAminoMsg(object: AuthzAllowanceAminoMsg): AuthzAllowance {
    return AuthzAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: AuthzAllowance): AuthzAllowanceAminoMsg {
    return {
      type: "xion/AuthzAllowance",
      value: AuthzAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: AuthzAllowanceProtoMsg): AuthzAllowance {
    return AuthzAllowance.decode(message.value);
  },
  toProto(message: AuthzAllowance): Uint8Array {
    return AuthzAllowance.encode(message).finish();
  },
  toProtoMsg(message: AuthzAllowance): AuthzAllowanceProtoMsg {
    return {
      typeUrl: "/xion.v1.AuthzAllowance",
      value: AuthzAllowance.encode(message).finish()
    };
  }
};
function createBaseContractsAllowance(): ContractsAllowance {
  return {
    $typeUrl: "/xion.v1.ContractsAllowance",
    allowance: undefined,
    contractAddresses: []
  };
}
export const ContractsAllowance = {
  typeUrl: "/xion.v1.ContractsAllowance",
  encode(message: ContractsAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance as Any, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractsAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractsAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder(reader) as Any;
          break;
        case 2:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ContractsAllowance>): ContractsAllowance {
    const message = createBaseContractsAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.contractAddresses = object.contractAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ContractsAllowanceAmino): ContractsAllowance {
    const message = createBaseContractsAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(object.allowance);
    }
    message.contractAddresses = object.contract_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ContractsAllowance): ContractsAllowanceAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(message.allowance as Any) : undefined;
    if (message.contractAddresses) {
      obj.contract_addresses = message.contractAddresses.map(e => e);
    } else {
      obj.contract_addresses = message.contractAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ContractsAllowanceAminoMsg): ContractsAllowance {
    return ContractsAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: ContractsAllowance): ContractsAllowanceAminoMsg {
    return {
      type: "xion/ContractsAllowance",
      value: ContractsAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractsAllowanceProtoMsg): ContractsAllowance {
    return ContractsAllowance.decode(message.value);
  },
  toProto(message: ContractsAllowance): Uint8Array {
    return ContractsAllowance.encode(message).finish();
  },
  toProtoMsg(message: ContractsAllowance): ContractsAllowanceProtoMsg {
    return {
      typeUrl: "/xion.v1.ContractsAllowance",
      value: ContractsAllowance.encode(message).finish()
    };
  }
};
function createBaseMultiAnyAllowance(): MultiAnyAllowance {
  return {
    $typeUrl: "/xion.v1.MultiAnyAllowance",
    allowances: []
  };
}
export const MultiAnyAllowance = {
  typeUrl: "/xion.v1.MultiAnyAllowance",
  encode(message: MultiAnyAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowances) {
      Any.encode(v! as Any, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultiAnyAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiAnyAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Any.decode(reader, reader.uint32()) as Any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MultiAnyAllowance>): MultiAnyAllowance {
    const message = createBaseMultiAnyAllowance();
    message.allowances = object.allowances?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MultiAnyAllowanceAmino): MultiAnyAllowance {
    const message = createBaseMultiAnyAllowance();
    message.allowances = object.allowances?.map(e => Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino(e)) || [];
    return message;
  },
  toAmino(message: MultiAnyAllowance): MultiAnyAllowanceAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino(e as Any) : undefined);
    } else {
      obj.allowances = message.allowances;
    }
    return obj;
  },
  fromAminoMsg(object: MultiAnyAllowanceAminoMsg): MultiAnyAllowance {
    return MultiAnyAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MultiAnyAllowance): MultiAnyAllowanceAminoMsg {
    return {
      type: "xion/MultiAnyAllowance",
      value: MultiAnyAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: MultiAnyAllowanceProtoMsg): MultiAnyAllowance {
    return MultiAnyAllowance.decode(message.value);
  },
  toProto(message: MultiAnyAllowance): Uint8Array {
    return MultiAnyAllowance.encode(message).finish();
  },
  toProtoMsg(message: MultiAnyAllowance): MultiAnyAllowanceProtoMsg {
    return {
      typeUrl: "/xion.v1.MultiAnyAllowance",
      value: MultiAnyAllowance.encode(message).finish()
    };
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder = (input: BinaryReader | Uint8Array): BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | AuthzAllowance | ContractsAllowance | MultiAnyAllowance | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return BasicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return PeriodicAllowance.decode(data.value);
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return AllowedMsgAllowance.decode(data.value);
    case "/xion.v1.AuthzAllowance":
      return AuthzAllowance.decode(data.value);
    case "/xion.v1.ContractsAllowance":
      return ContractsAllowance.decode(data.value);
    case "/xion.v1.MultiAnyAllowance":
      return MultiAnyAllowance.decode(data.value);
    default:
      return data;
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino = (content: AnyAmino): Any => {
  switch (content.type) {
    case "cosmos-sdk/BasicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        value: BasicAllowance.encode(BasicAllowance.fromPartial(BasicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/PeriodicAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        value: PeriodicAllowance.encode(PeriodicAllowance.fromPartial(PeriodicAllowance.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/AllowedMsgAllowance":
      return Any.fromPartial({
        typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial(AllowedMsgAllowance.fromAmino(content.value))).finish()
      });
    case "xion/AuthzAllowance":
      return Any.fromPartial({
        typeUrl: "/xion.v1.AuthzAllowance",
        value: AuthzAllowance.encode(AuthzAllowance.fromPartial(AuthzAllowance.fromAmino(content.value))).finish()
      });
    case "xion/ContractsAllowance":
      return Any.fromPartial({
        typeUrl: "/xion.v1.ContractsAllowance",
        value: ContractsAllowance.encode(ContractsAllowance.fromPartial(ContractsAllowance.fromAmino(content.value))).finish()
      });
    case "xion/MultiAnyAllowance":
      return Any.fromPartial({
        typeUrl: "/xion.v1.MultiAnyAllowance",
        value: MultiAnyAllowance.encode(MultiAnyAllowance.fromPartial(MultiAnyAllowance.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return {
        type: "cosmos-sdk/BasicAllowance",
        value: BasicAllowance.toAmino(BasicAllowance.decode(content.value, undefined))
      };
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return {
        type: "cosmos-sdk/PeriodicAllowance",
        value: PeriodicAllowance.toAmino(PeriodicAllowance.decode(content.value, undefined))
      };
    case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
      return {
        type: "cosmos-sdk/AllowedMsgAllowance",
        value: AllowedMsgAllowance.toAmino(AllowedMsgAllowance.decode(content.value, undefined))
      };
    case "/xion.v1.AuthzAllowance":
      return {
        type: "xion/AuthzAllowance",
        value: AuthzAllowance.toAmino(AuthzAllowance.decode(content.value, undefined))
      };
    case "/xion.v1.ContractsAllowance":
      return {
        type: "xion/ContractsAllowance",
        value: ContractsAllowance.toAmino(ContractsAllowance.decode(content.value, undefined))
      };
    case "/xion.v1.MultiAnyAllowance":
      return {
        type: "xion/MultiAnyAllowance",
        value: MultiAnyAllowance.toAmino(MultiAnyAllowance.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};