//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/** EventAccountRegistered is emitted when an AbstractAccount is registered. */
export interface EventAccountRegistered {
  creator: string;
  codeId: bigint;
  contractAddr: string;
  accountNumber: bigint;
}
export interface EventAccountRegisteredProtoMsg {
  typeUrl: "/abstractaccount.v1.EventAccountRegistered";
  value: Uint8Array;
}
/**
 * EventAccountRegistered is emitted when an AbstractAccount is registered.
 * @name EventAccountRegisteredAmino
 * @package abstractaccount.v1
 * @see proto type: abstractaccount.v1.EventAccountRegistered
 */
export interface EventAccountRegisteredAmino {
  creator?: string;
  code_id?: string;
  contract_addr?: string;
  account_number?: string;
}
export interface EventAccountRegisteredAminoMsg {
  type: "/abstractaccount.v1.EventAccountRegistered";
  value: EventAccountRegisteredAmino;
}
/** EventAccountRegistered is emitted when an AbstractAccount is registered. */
export interface EventAccountRegisteredSDKType {
  creator: string;
  code_id: bigint;
  contract_addr: string;
  account_number: bigint;
}
function createBaseEventAccountRegistered(): EventAccountRegistered {
  return {
    creator: "",
    codeId: BigInt(0),
    contractAddr: "",
    accountNumber: BigInt(0)
  };
}
export const EventAccountRegistered = {
  typeUrl: "/abstractaccount.v1.EventAccountRegistered",
  encode(message: EventAccountRegistered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.accountNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAccountRegistered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAccountRegistered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.contractAddr = reader.string();
          break;
        case 4:
          message.accountNumber = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventAccountRegistered>): EventAccountRegistered {
    const message = createBaseEventAccountRegistered();
    message.creator = object.creator ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.contractAddr = object.contractAddr ?? "";
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAccountRegisteredAmino): EventAccountRegistered {
    const message = createBaseEventAccountRegistered();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.contract_addr !== undefined && object.contract_addr !== null) {
      message.contractAddr = object.contract_addr;
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    return message;
  },
  toAmino(message: EventAccountRegistered): EventAccountRegisteredAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.contract_addr = message.contractAddr === "" ? undefined : message.contractAddr;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAccountRegisteredAminoMsg): EventAccountRegistered {
    return EventAccountRegistered.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAccountRegisteredProtoMsg): EventAccountRegistered {
    return EventAccountRegistered.decode(message.value);
  },
  toProto(message: EventAccountRegistered): Uint8Array {
    return EventAccountRegistered.encode(message).finish();
  },
  toProtoMsg(message: EventAccountRegistered): EventAccountRegisteredProtoMsg {
    return {
      typeUrl: "/abstractaccount.v1.EventAccountRegistered",
      value: EventAccountRegistered.encode(message).finish()
    };
  }
};