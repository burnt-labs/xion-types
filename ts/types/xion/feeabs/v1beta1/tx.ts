//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostChainFeeAbsConfig, HostChainFeeAbsConfigAmino, HostChainFeeAbsConfigSDKType } from "./proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgFundFeeAbsModuleAccount */
export interface MsgFundFeeAbsModuleAccount {
  /** sender is the that actor that signed the messages */
  sender: string;
  /** The amount of coins to fund to the feeabs module account */
  amount: Coin[];
}
export interface MsgFundFeeAbsModuleAccountProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount";
  value: Uint8Array;
}
/**
 * MsgFundFeeAbsModuleAccount
 * @name MsgFundFeeAbsModuleAccountAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount
 */
export interface MsgFundFeeAbsModuleAccountAmino {
  /**
   * sender is the that actor that signed the messages
   */
  sender?: string;
  /**
   * The amount of coins to fund to the feeabs module account
   */
  amount?: CoinAmino[];
}
export interface MsgFundFeeAbsModuleAccountAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount";
  value: MsgFundFeeAbsModuleAccountAmino;
}
/** MsgFundFeeAbsModuleAccount */
export interface MsgFundFeeAbsModuleAccountSDKType {
  sender: string;
  amount: CoinSDKType[];
}
/** MsgFundFeeAbsModuleAccountResponse */
export interface MsgFundFeeAbsModuleAccountResponse {}
export interface MsgFundFeeAbsModuleAccountResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccountResponse";
  value: Uint8Array;
}
/**
 * MsgFundFeeAbsModuleAccountResponse
 * @name MsgFundFeeAbsModuleAccountResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccountResponse
 */
export interface MsgFundFeeAbsModuleAccountResponseAmino {}
export interface MsgFundFeeAbsModuleAccountResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccountResponse";
  value: MsgFundFeeAbsModuleAccountResponseAmino;
}
/** MsgFundFeeAbsModuleAccountResponse */
export interface MsgFundFeeAbsModuleAccountResponseSDKType {}
/** MsgSendQueryIbcDenomTWAP */
export interface MsgSendQueryIbcDenomTWAP {
  /** Sender is the that actor that signed the messages */
  sender: string;
}
export interface MsgSendQueryIbcDenomTWAPProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP";
  value: Uint8Array;
}
/**
 * MsgSendQueryIbcDenomTWAP
 * @name MsgSendQueryIbcDenomTWAPAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP
 */
export interface MsgSendQueryIbcDenomTWAPAmino {
  /**
   * Sender is the that actor that signed the messages
   */
  sender?: string;
}
export interface MsgSendQueryIbcDenomTWAPAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP";
  value: MsgSendQueryIbcDenomTWAPAmino;
}
/** MsgSendQueryIbcDenomTWAP */
export interface MsgSendQueryIbcDenomTWAPSDKType {
  sender: string;
}
/** MsgSendQueryIbcDenomTWAPResponse */
export interface MsgSendQueryIbcDenomTWAPResponse {}
export interface MsgSendQueryIbcDenomTWAPResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAPResponse";
  value: Uint8Array;
}
/**
 * MsgSendQueryIbcDenomTWAPResponse
 * @name MsgSendQueryIbcDenomTWAPResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAPResponse
 */
export interface MsgSendQueryIbcDenomTWAPResponseAmino {}
export interface MsgSendQueryIbcDenomTWAPResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAPResponse";
  value: MsgSendQueryIbcDenomTWAPResponseAmino;
}
/** MsgSendQueryIbcDenomTWAPResponse */
export interface MsgSendQueryIbcDenomTWAPResponseSDKType {}
/** MsgSwapCrossChain */
export interface MsgSwapCrossChain {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** The IBC denomination to swap */
  ibcDenom: string;
}
export interface MsgSwapCrossChainProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain";
  value: Uint8Array;
}
/**
 * MsgSwapCrossChain
 * @name MsgSwapCrossChainAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgSwapCrossChain
 */
export interface MsgSwapCrossChainAmino {
  /**
   * Sender is the that actor that signed the messages
   */
  sender?: string;
  /**
   * The IBC denomination to swap
   */
  ibc_denom?: string;
}
export interface MsgSwapCrossChainAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgSwapCrossChain";
  value: MsgSwapCrossChainAmino;
}
/** MsgSwapCrossChain */
export interface MsgSwapCrossChainSDKType {
  sender: string;
  ibc_denom: string;
}
/** MsgSwapCrossChainResponse */
export interface MsgSwapCrossChainResponse {}
export interface MsgSwapCrossChainResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChainResponse";
  value: Uint8Array;
}
/**
 * MsgSwapCrossChainResponse
 * @name MsgSwapCrossChainResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgSwapCrossChainResponse
 */
export interface MsgSwapCrossChainResponseAmino {}
export interface MsgSwapCrossChainResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgSwapCrossChainResponse";
  value: MsgSwapCrossChainResponseAmino;
}
/** MsgSwapCrossChainResponse */
export interface MsgSwapCrossChainResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/feeabs parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * params defines the x/feeabs parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgAddHostZone is the Msg/AddHostZone request type. */
export interface MsgAddHostZone {
  /** authority is the address of the governance account. */
  authority: string;
  /** the host chain config */
  hostChainConfig: HostChainFeeAbsConfig;
}
export interface MsgAddHostZoneProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone";
  value: Uint8Array;
}
/**
 * MsgAddHostZone is the Msg/AddHostZone request type.
 * @name MsgAddHostZoneAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgAddHostZone
 */
export interface MsgAddHostZoneAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * the host chain config
   */
  host_chain_config: HostChainFeeAbsConfigAmino;
}
export interface MsgAddHostZoneAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgAddHostZone";
  value: MsgAddHostZoneAmino;
}
/** MsgAddHostZone is the Msg/AddHostZone request type. */
export interface MsgAddHostZoneSDKType {
  authority: string;
  host_chain_config: HostChainFeeAbsConfigSDKType;
}
/** MsgAddHostZoneResponse */
export interface MsgAddHostZoneResponse {}
export interface MsgAddHostZoneResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZoneResponse";
  value: Uint8Array;
}
/**
 * MsgAddHostZoneResponse
 * @name MsgAddHostZoneResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgAddHostZoneResponse
 */
export interface MsgAddHostZoneResponseAmino {}
export interface MsgAddHostZoneResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgAddHostZoneResponse";
  value: MsgAddHostZoneResponseAmino;
}
/** MsgAddHostZoneResponse */
export interface MsgAddHostZoneResponseSDKType {}
/** MsgUpdateHostZone is the Msg/UpdateHostZone request type. */
export interface MsgUpdateHostZone {
  /** authority is the address of the governance account. */
  authority: string;
  /** the host chain config */
  hostChainConfig: HostChainFeeAbsConfig;
}
export interface MsgUpdateHostZoneProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone";
  value: Uint8Array;
}
/**
 * MsgUpdateHostZone is the Msg/UpdateHostZone request type.
 * @name MsgUpdateHostZoneAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgUpdateHostZone
 */
export interface MsgUpdateHostZoneAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * the host chain config
   */
  host_chain_config: HostChainFeeAbsConfigAmino;
}
export interface MsgUpdateHostZoneAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgUpdateHostZone";
  value: MsgUpdateHostZoneAmino;
}
/** MsgUpdateHostZone is the Msg/UpdateHostZone request type. */
export interface MsgUpdateHostZoneSDKType {
  authority: string;
  host_chain_config: HostChainFeeAbsConfigSDKType;
}
/** MsgUpdateHostZoneResponse */
export interface MsgUpdateHostZoneResponse {}
export interface MsgUpdateHostZoneResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZoneResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateHostZoneResponse
 * @name MsgUpdateHostZoneResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgUpdateHostZoneResponse
 */
export interface MsgUpdateHostZoneResponseAmino {}
export interface MsgUpdateHostZoneResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgUpdateHostZoneResponse";
  value: MsgUpdateHostZoneResponseAmino;
}
/** MsgUpdateHostZoneResponse */
export interface MsgUpdateHostZoneResponseSDKType {}
/** MsgRemoveHostZone is the Msg/RemoveHostZone request type. */
export interface MsgRemoveHostZone {
  /** authority is the address of the governance account. */
  authority: string;
  /** The IBC denomination of the host zone to remove */
  ibcDenom: string;
}
export interface MsgRemoveHostZoneProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone";
  value: Uint8Array;
}
/**
 * MsgRemoveHostZone is the Msg/RemoveHostZone request type.
 * @name MsgRemoveHostZoneAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgRemoveHostZone
 */
export interface MsgRemoveHostZoneAmino {
  /**
   * authority is the address of the governance account.
   */
  authority?: string;
  /**
   * The IBC denomination of the host zone to remove
   */
  ibc_denom?: string;
}
export interface MsgRemoveHostZoneAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgRemoveHostZone";
  value: MsgRemoveHostZoneAmino;
}
/** MsgRemoveHostZone is the Msg/RemoveHostZone request type. */
export interface MsgRemoveHostZoneSDKType {
  authority: string;
  ibc_denom: string;
}
/** MsgRemoveHostZoneResponse */
export interface MsgRemoveHostZoneResponse {}
export interface MsgRemoveHostZoneResponseProtoMsg {
  typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZoneResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveHostZoneResponse
 * @name MsgRemoveHostZoneResponseAmino
 * @package xion.feeabs.v1beta1
 * @see proto type: xion.feeabs.v1beta1.MsgRemoveHostZoneResponse
 */
export interface MsgRemoveHostZoneResponseAmino {}
export interface MsgRemoveHostZoneResponseAminoMsg {
  type: "/xion.feeabs.v1beta1.MsgRemoveHostZoneResponse";
  value: MsgRemoveHostZoneResponseAmino;
}
/** MsgRemoveHostZoneResponse */
export interface MsgRemoveHostZoneResponseSDKType {}
function createBaseMsgFundFeeAbsModuleAccount(): MsgFundFeeAbsModuleAccount {
  return {
    sender: "",
    amount: []
  };
}
export const MsgFundFeeAbsModuleAccount = {
  typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
  encode(message: MsgFundFeeAbsModuleAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFeeAbsModuleAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeeAbsModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgFundFeeAbsModuleAccount>): MsgFundFeeAbsModuleAccount {
    const message = createBaseMsgFundFeeAbsModuleAccount();
    message.sender = object.sender ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundFeeAbsModuleAccountAmino): MsgFundFeeAbsModuleAccount {
    const message = createBaseMsgFundFeeAbsModuleAccount();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundFeeAbsModuleAccount): MsgFundFeeAbsModuleAccountAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundFeeAbsModuleAccountAminoMsg): MsgFundFeeAbsModuleAccount {
    return MsgFundFeeAbsModuleAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeeAbsModuleAccountProtoMsg): MsgFundFeeAbsModuleAccount {
    return MsgFundFeeAbsModuleAccount.decode(message.value);
  },
  toProto(message: MsgFundFeeAbsModuleAccount): Uint8Array {
    return MsgFundFeeAbsModuleAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeeAbsModuleAccount): MsgFundFeeAbsModuleAccountProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
      value: MsgFundFeeAbsModuleAccount.encode(message).finish()
    };
  }
};
function createBaseMsgFundFeeAbsModuleAccountResponse(): MsgFundFeeAbsModuleAccountResponse {
  return {};
}
export const MsgFundFeeAbsModuleAccountResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccountResponse",
  encode(_: MsgFundFeeAbsModuleAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFeeAbsModuleAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFeeAbsModuleAccountResponse();
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
  fromPartial(_: Partial<MsgFundFeeAbsModuleAccountResponse>): MsgFundFeeAbsModuleAccountResponse {
    const message = createBaseMsgFundFeeAbsModuleAccountResponse();
    return message;
  },
  fromAmino(_: MsgFundFeeAbsModuleAccountResponseAmino): MsgFundFeeAbsModuleAccountResponse {
    const message = createBaseMsgFundFeeAbsModuleAccountResponse();
    return message;
  },
  toAmino(_: MsgFundFeeAbsModuleAccountResponse): MsgFundFeeAbsModuleAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFeeAbsModuleAccountResponseAminoMsg): MsgFundFeeAbsModuleAccountResponse {
    return MsgFundFeeAbsModuleAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFeeAbsModuleAccountResponseProtoMsg): MsgFundFeeAbsModuleAccountResponse {
    return MsgFundFeeAbsModuleAccountResponse.decode(message.value);
  },
  toProto(message: MsgFundFeeAbsModuleAccountResponse): Uint8Array {
    return MsgFundFeeAbsModuleAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFeeAbsModuleAccountResponse): MsgFundFeeAbsModuleAccountResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccountResponse",
      value: MsgFundFeeAbsModuleAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendQueryIbcDenomTWAP(): MsgSendQueryIbcDenomTWAP {
  return {
    sender: ""
  };
}
export const MsgSendQueryIbcDenomTWAP = {
  typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
  encode(message: MsgSendQueryIbcDenomTWAP, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendQueryIbcDenomTWAP {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendQueryIbcDenomTWAP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSendQueryIbcDenomTWAP>): MsgSendQueryIbcDenomTWAP {
    const message = createBaseMsgSendQueryIbcDenomTWAP();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSendQueryIbcDenomTWAPAmino): MsgSendQueryIbcDenomTWAP {
    const message = createBaseMsgSendQueryIbcDenomTWAP();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgSendQueryIbcDenomTWAP): MsgSendQueryIbcDenomTWAPAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSendQueryIbcDenomTWAPAminoMsg): MsgSendQueryIbcDenomTWAP {
    return MsgSendQueryIbcDenomTWAP.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendQueryIbcDenomTWAPProtoMsg): MsgSendQueryIbcDenomTWAP {
    return MsgSendQueryIbcDenomTWAP.decode(message.value);
  },
  toProto(message: MsgSendQueryIbcDenomTWAP): Uint8Array {
    return MsgSendQueryIbcDenomTWAP.encode(message).finish();
  },
  toProtoMsg(message: MsgSendQueryIbcDenomTWAP): MsgSendQueryIbcDenomTWAPProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
      value: MsgSendQueryIbcDenomTWAP.encode(message).finish()
    };
  }
};
function createBaseMsgSendQueryIbcDenomTWAPResponse(): MsgSendQueryIbcDenomTWAPResponse {
  return {};
}
export const MsgSendQueryIbcDenomTWAPResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAPResponse",
  encode(_: MsgSendQueryIbcDenomTWAPResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendQueryIbcDenomTWAPResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendQueryIbcDenomTWAPResponse();
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
  fromPartial(_: Partial<MsgSendQueryIbcDenomTWAPResponse>): MsgSendQueryIbcDenomTWAPResponse {
    const message = createBaseMsgSendQueryIbcDenomTWAPResponse();
    return message;
  },
  fromAmino(_: MsgSendQueryIbcDenomTWAPResponseAmino): MsgSendQueryIbcDenomTWAPResponse {
    const message = createBaseMsgSendQueryIbcDenomTWAPResponse();
    return message;
  },
  toAmino(_: MsgSendQueryIbcDenomTWAPResponse): MsgSendQueryIbcDenomTWAPResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendQueryIbcDenomTWAPResponseAminoMsg): MsgSendQueryIbcDenomTWAPResponse {
    return MsgSendQueryIbcDenomTWAPResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendQueryIbcDenomTWAPResponseProtoMsg): MsgSendQueryIbcDenomTWAPResponse {
    return MsgSendQueryIbcDenomTWAPResponse.decode(message.value);
  },
  toProto(message: MsgSendQueryIbcDenomTWAPResponse): Uint8Array {
    return MsgSendQueryIbcDenomTWAPResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendQueryIbcDenomTWAPResponse): MsgSendQueryIbcDenomTWAPResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAPResponse",
      value: MsgSendQueryIbcDenomTWAPResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSwapCrossChain(): MsgSwapCrossChain {
  return {
    sender: "",
    ibcDenom: ""
  };
}
export const MsgSwapCrossChain = {
  typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
  encode(message: MsgSwapCrossChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(18).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapCrossChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapCrossChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSwapCrossChain>): MsgSwapCrossChain {
    const message = createBaseMsgSwapCrossChain();
    message.sender = object.sender ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: MsgSwapCrossChainAmino): MsgSwapCrossChain {
    const message = createBaseMsgSwapCrossChain();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    return message;
  },
  toAmino(message: MsgSwapCrossChain): MsgSwapCrossChainAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: MsgSwapCrossChainAminoMsg): MsgSwapCrossChain {
    return MsgSwapCrossChain.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapCrossChainProtoMsg): MsgSwapCrossChain {
    return MsgSwapCrossChain.decode(message.value);
  },
  toProto(message: MsgSwapCrossChain): Uint8Array {
    return MsgSwapCrossChain.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapCrossChain): MsgSwapCrossChainProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
      value: MsgSwapCrossChain.encode(message).finish()
    };
  }
};
function createBaseMsgSwapCrossChainResponse(): MsgSwapCrossChainResponse {
  return {};
}
export const MsgSwapCrossChainResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChainResponse",
  encode(_: MsgSwapCrossChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapCrossChainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapCrossChainResponse();
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
  fromPartial(_: Partial<MsgSwapCrossChainResponse>): MsgSwapCrossChainResponse {
    const message = createBaseMsgSwapCrossChainResponse();
    return message;
  },
  fromAmino(_: MsgSwapCrossChainResponseAmino): MsgSwapCrossChainResponse {
    const message = createBaseMsgSwapCrossChainResponse();
    return message;
  },
  toAmino(_: MsgSwapCrossChainResponse): MsgSwapCrossChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapCrossChainResponseAminoMsg): MsgSwapCrossChainResponse {
    return MsgSwapCrossChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapCrossChainResponseProtoMsg): MsgSwapCrossChainResponse {
    return MsgSwapCrossChainResponse.decode(message.value);
  },
  toProto(message: MsgSwapCrossChainResponse): Uint8Array {
    return MsgSwapCrossChainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapCrossChainResponse): MsgSwapCrossChainResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChainResponse",
      value: MsgSwapCrossChainResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddHostZone(): MsgAddHostZone {
  return {
    authority: "",
    hostChainConfig: HostChainFeeAbsConfig.fromPartial({})
  };
}
export const MsgAddHostZone = {
  typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone",
  encode(message: MsgAddHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChainConfig !== undefined) {
      HostChainFeeAbsConfig.encode(message.hostChainConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddHostZone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChainConfig = HostChainFeeAbsConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgAddHostZone>): MsgAddHostZone {
    const message = createBaseMsgAddHostZone();
    message.authority = object.authority ?? "";
    message.hostChainConfig = object.hostChainConfig !== undefined && object.hostChainConfig !== null ? HostChainFeeAbsConfig.fromPartial(object.hostChainConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgAddHostZoneAmino): MsgAddHostZone {
    const message = createBaseMsgAddHostZone();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.host_chain_config !== undefined && object.host_chain_config !== null) {
      message.hostChainConfig = HostChainFeeAbsConfig.fromAmino(object.host_chain_config);
    }
    return message;
  },
  toAmino(message: MsgAddHostZone): MsgAddHostZoneAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.host_chain_config = message.hostChainConfig ? HostChainFeeAbsConfig.toAmino(message.hostChainConfig) : HostChainFeeAbsConfig.toAmino(HostChainFeeAbsConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgAddHostZoneAminoMsg): MsgAddHostZone {
    return MsgAddHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddHostZoneProtoMsg): MsgAddHostZone {
    return MsgAddHostZone.decode(message.value);
  },
  toProto(message: MsgAddHostZone): Uint8Array {
    return MsgAddHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgAddHostZone): MsgAddHostZoneProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone",
      value: MsgAddHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgAddHostZoneResponse(): MsgAddHostZoneResponse {
  return {};
}
export const MsgAddHostZoneResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZoneResponse",
  encode(_: MsgAddHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddHostZoneResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddHostZoneResponse();
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
  fromPartial(_: Partial<MsgAddHostZoneResponse>): MsgAddHostZoneResponse {
    const message = createBaseMsgAddHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgAddHostZoneResponseAmino): MsgAddHostZoneResponse {
    const message = createBaseMsgAddHostZoneResponse();
    return message;
  },
  toAmino(_: MsgAddHostZoneResponse): MsgAddHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddHostZoneResponseAminoMsg): MsgAddHostZoneResponse {
    return MsgAddHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddHostZoneResponseProtoMsg): MsgAddHostZoneResponse {
    return MsgAddHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgAddHostZoneResponse): Uint8Array {
    return MsgAddHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddHostZoneResponse): MsgAddHostZoneResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZoneResponse",
      value: MsgAddHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostZone(): MsgUpdateHostZone {
  return {
    authority: "",
    hostChainConfig: HostChainFeeAbsConfig.fromPartial({})
  };
}
export const MsgUpdateHostZone = {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
  encode(message: MsgUpdateHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hostChainConfig !== undefined) {
      HostChainFeeAbsConfig.encode(message.hostChainConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostZone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hostChainConfig = HostChainFeeAbsConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateHostZone>): MsgUpdateHostZone {
    const message = createBaseMsgUpdateHostZone();
    message.authority = object.authority ?? "";
    message.hostChainConfig = object.hostChainConfig !== undefined && object.hostChainConfig !== null ? HostChainFeeAbsConfig.fromPartial(object.hostChainConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateHostZoneAmino): MsgUpdateHostZone {
    const message = createBaseMsgUpdateHostZone();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.host_chain_config !== undefined && object.host_chain_config !== null) {
      message.hostChainConfig = HostChainFeeAbsConfig.fromAmino(object.host_chain_config);
    }
    return message;
  },
  toAmino(message: MsgUpdateHostZone): MsgUpdateHostZoneAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.host_chain_config = message.hostChainConfig ? HostChainFeeAbsConfig.toAmino(message.hostChainConfig) : HostChainFeeAbsConfig.toAmino(HostChainFeeAbsConfig.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostZoneAminoMsg): MsgUpdateHostZone {
    return MsgUpdateHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostZoneProtoMsg): MsgUpdateHostZone {
    return MsgUpdateHostZone.decode(message.value);
  },
  toProto(message: MsgUpdateHostZone): Uint8Array {
    return MsgUpdateHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostZone): MsgUpdateHostZoneProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
      value: MsgUpdateHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateHostZoneResponse(): MsgUpdateHostZoneResponse {
  return {};
}
export const MsgUpdateHostZoneResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZoneResponse",
  encode(_: MsgUpdateHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostZoneResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostZoneResponse();
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
  fromPartial(_: Partial<MsgUpdateHostZoneResponse>): MsgUpdateHostZoneResponse {
    const message = createBaseMsgUpdateHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgUpdateHostZoneResponseAmino): MsgUpdateHostZoneResponse {
    const message = createBaseMsgUpdateHostZoneResponse();
    return message;
  },
  toAmino(_: MsgUpdateHostZoneResponse): MsgUpdateHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostZoneResponseAminoMsg): MsgUpdateHostZoneResponse {
    return MsgUpdateHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostZoneResponseProtoMsg): MsgUpdateHostZoneResponse {
    return MsgUpdateHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgUpdateHostZoneResponse): Uint8Array {
    return MsgUpdateHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostZoneResponse): MsgUpdateHostZoneResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZoneResponse",
      value: MsgUpdateHostZoneResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveHostZone(): MsgRemoveHostZone {
  return {
    authority: "",
    ibcDenom: ""
  };
}
export const MsgRemoveHostZone = {
  typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
  encode(message: MsgRemoveHostZone, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.ibcDenom !== "") {
      writer.uint32(18).string(message.ibcDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveHostZone {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveHostZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRemoveHostZone>): MsgRemoveHostZone {
    const message = createBaseMsgRemoveHostZone();
    message.authority = object.authority ?? "";
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveHostZoneAmino): MsgRemoveHostZone {
    const message = createBaseMsgRemoveHostZone();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.ibc_denom !== undefined && object.ibc_denom !== null) {
      message.ibcDenom = object.ibc_denom;
    }
    return message;
  },
  toAmino(message: MsgRemoveHostZone): MsgRemoveHostZoneAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.ibc_denom = message.ibcDenom === "" ? undefined : message.ibcDenom;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveHostZoneAminoMsg): MsgRemoveHostZone {
    return MsgRemoveHostZone.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveHostZoneProtoMsg): MsgRemoveHostZone {
    return MsgRemoveHostZone.decode(message.value);
  },
  toProto(message: MsgRemoveHostZone): Uint8Array {
    return MsgRemoveHostZone.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveHostZone): MsgRemoveHostZoneProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
      value: MsgRemoveHostZone.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveHostZoneResponse(): MsgRemoveHostZoneResponse {
  return {};
}
export const MsgRemoveHostZoneResponse = {
  typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZoneResponse",
  encode(_: MsgRemoveHostZoneResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveHostZoneResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveHostZoneResponse();
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
  fromPartial(_: Partial<MsgRemoveHostZoneResponse>): MsgRemoveHostZoneResponse {
    const message = createBaseMsgRemoveHostZoneResponse();
    return message;
  },
  fromAmino(_: MsgRemoveHostZoneResponseAmino): MsgRemoveHostZoneResponse {
    const message = createBaseMsgRemoveHostZoneResponse();
    return message;
  },
  toAmino(_: MsgRemoveHostZoneResponse): MsgRemoveHostZoneResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveHostZoneResponseAminoMsg): MsgRemoveHostZoneResponse {
    return MsgRemoveHostZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveHostZoneResponseProtoMsg): MsgRemoveHostZoneResponse {
    return MsgRemoveHostZoneResponse.decode(message.value);
  },
  toProto(message: MsgRemoveHostZoneResponse): Uint8Array {
    return MsgRemoveHostZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveHostZoneResponse): MsgRemoveHostZoneResponseProtoMsg {
    return {
      typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZoneResponse",
      value: MsgRemoveHostZoneResponse.encode(message).finish()
    };
  }
};