//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** MsgUpdateParams is the message for updating the module parameters. */
export interface MsgUpdateParams {
  sender: string;
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/abstractaccount.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the message for updating the module parameters.
 * @name MsgUpdateParamsAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  sender?: string;
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/abstractaccount.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the message for updating the module parameters. */
export interface MsgUpdateParamsSDKType {
  sender: string;
  params?: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response message for MsgUpdateParams. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/abstractaccount.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse is the response message for MsgUpdateParams.
 * @name MsgUpdateParamsResponseAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/abstractaccount.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response message for MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
/** MsgRegisterAccount is the message for registering a new AbstractAccount. */
export interface MsgRegisterAccount {
  /** Sender is the actor who signs the message */
  sender: string;
  /** CodeID indicates which wasm binary code is to be used for this contract */
  codeId: bigint;
  /** Msg is the JSON-encoded instantiate message for the contract */
  msg: Uint8Array;
  /** Funds are coins to be deposited to the contract on instantiattion */
  funds: Coin[];
  /**
   * Salt is an arbinary value to be used in deriving the account address.
   * Max 64 bytes.
   */
  salt: Uint8Array;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/abstractaccount.v1.MsgRegisterAccount";
  value: Uint8Array;
}
/**
 * MsgRegisterAccount is the message for registering a new AbstractAccount.
 * @name MsgRegisterAccountAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.MsgRegisterAccount
 */
export interface MsgRegisterAccountAmino {
  /**
   * Sender is the actor who signs the message
   */
  sender?: string;
  /**
   * CodeID indicates which wasm binary code is to be used for this contract
   */
  code_id?: string;
  /**
   * Msg is the JSON-encoded instantiate message for the contract
   */
  msg?: string;
  /**
   * Funds are coins to be deposited to the contract on instantiattion
   */
  funds?: CoinAmino[];
  /**
   * Salt is an arbinary value to be used in deriving the account address.
   * Max 64 bytes.
   */
  salt?: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "/abstractaccount.v1.MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount is the message for registering a new AbstractAccount. */
export interface MsgRegisterAccountSDKType {
  sender: string;
  code_id: bigint;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
}
/** MsgRegisterAccountResponse is the response message for MsgRegisterAccount. */
export interface MsgRegisterAccountResponse {
  address: string;
  data: Uint8Array;
}
export interface MsgRegisterAccountResponseProtoMsg {
  typeUrl: "/abstractaccount.v1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterAccountResponse is the response message for MsgRegisterAccount.
 * @name MsgRegisterAccountResponseAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.MsgRegisterAccountResponse
 */
export interface MsgRegisterAccountResponseAmino {
  address?: string;
  data?: string;
}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/abstractaccount.v1.MsgRegisterAccountResponse";
  value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse is the response message for MsgRegisterAccount. */
export interface MsgRegisterAccountResponseSDKType {
  address: string;
  data: Uint8Array;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    sender: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/abstractaccount.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
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
          message.sender = reader.string();
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
    message.sender = object.sender ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/abstractaccount.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/abstractaccount.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/abstractaccount.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    sender: "",
    codeId: BigInt(0),
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array()
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/abstractaccount.v1.MsgRegisterAccount",
  encode(message: MsgRegisterAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(26).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(42).bytes(message.salt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.msg = reader.bytes();
          break;
        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.salt = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.sender = object.sender ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    message.funds = object.funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    return message;
  },
  toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.msg = message.msg ? base64FromBytes(message.msg) : undefined;
    if (message.funds) {
      obj.funds = message.funds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.funds = message.funds;
    }
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.decode(message.value);
  },
  toProto(message: MsgRegisterAccount): Uint8Array {
    return MsgRegisterAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg {
    return {
      typeUrl: "/abstractaccount.v1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {
    address: "",
    data: new Uint8Array()
  };
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/abstractaccount.v1.MsgRegisterAccountResponse",
  encode(message: MsgRegisterAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    message.address = object.address ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountResponse): Uint8Array {
    return MsgRegisterAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg {
    return {
      typeUrl: "/abstractaccount.v1.MsgRegisterAccountResponse",
      value: MsgRegisterAccountResponse.encode(message).finish()
    };
  }
};