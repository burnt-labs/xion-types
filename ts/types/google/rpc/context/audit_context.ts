//@ts-nocheck
import { Struct, StructAmino, StructSDKType } from "../../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** `AuditContext` provides information that is needed for audit logging. */
export interface AuditContext {
  /** Serialized audit log. */
  auditLog: Uint8Array;
  /**
   * An API request message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbedRequest?: Struct;
  /**
   * An API response message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbedResponse?: Struct;
  /** Number of scrubbed response items. */
  scrubbedResponseItemCount: number;
  /** Audit resource name which is scrubbed. */
  targetResource: string;
}
export interface AuditContextProtoMsg {
  typeUrl: "/google.rpc.context.AuditContext";
  value: Uint8Array;
}
/**
 * `AuditContext` provides information that is needed for audit logging.
 * @name AuditContextAmino
 * @package google.rpc.context
 * @see proto type: google.rpc.context.AuditContext
 */
export interface AuditContextAmino {
  /**
   * Serialized audit log.
   */
  audit_log?: string;
  /**
   * An API request message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbed_request?: StructAmino;
  /**
   * An API response message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbed_response?: StructAmino;
  /**
   * Number of scrubbed response items.
   */
  scrubbed_response_item_count?: number;
  /**
   * Audit resource name which is scrubbed.
   */
  target_resource?: string;
}
export interface AuditContextAminoMsg {
  type: "/google.rpc.context.AuditContext";
  value: AuditContextAmino;
}
/** `AuditContext` provides information that is needed for audit logging. */
export interface AuditContextSDKType {
  audit_log: Uint8Array;
  scrubbed_request?: StructSDKType;
  scrubbed_response?: StructSDKType;
  scrubbed_response_item_count: number;
  target_resource: string;
}
function createBaseAuditContext(): AuditContext {
  return {
    auditLog: new Uint8Array(),
    scrubbedRequest: undefined,
    scrubbedResponse: undefined,
    scrubbedResponseItemCount: 0,
    targetResource: ""
  };
}
export const AuditContext = {
  typeUrl: "/google.rpc.context.AuditContext",
  encode(message: AuditContext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditLog.length !== 0) {
      writer.uint32(10).bytes(message.auditLog);
    }
    if (message.scrubbedRequest !== undefined) {
      Struct.encode(message.scrubbedRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.scrubbedResponse !== undefined) {
      Struct.encode(message.scrubbedResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.scrubbedResponseItemCount !== 0) {
      writer.uint32(32).int32(message.scrubbedResponseItemCount);
    }
    if (message.targetResource !== "") {
      writer.uint32(42).string(message.targetResource);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuditContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditLog = reader.bytes();
          break;
        case 2:
          message.scrubbedRequest = Struct.decode(reader, reader.uint32());
          break;
        case 3:
          message.scrubbedResponse = Struct.decode(reader, reader.uint32());
          break;
        case 4:
          message.scrubbedResponseItemCount = reader.int32();
          break;
        case 5:
          message.targetResource = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AuditContext>): AuditContext {
    const message = createBaseAuditContext();
    message.auditLog = object.auditLog ?? new Uint8Array();
    message.scrubbedRequest = object.scrubbedRequest !== undefined && object.scrubbedRequest !== null ? Struct.fromPartial(object.scrubbedRequest) : undefined;
    message.scrubbedResponse = object.scrubbedResponse !== undefined && object.scrubbedResponse !== null ? Struct.fromPartial(object.scrubbedResponse) : undefined;
    message.scrubbedResponseItemCount = object.scrubbedResponseItemCount ?? 0;
    message.targetResource = object.targetResource ?? "";
    return message;
  },
  fromAmino(object: AuditContextAmino): AuditContext {
    const message = createBaseAuditContext();
    if (object.audit_log !== undefined && object.audit_log !== null) {
      message.auditLog = bytesFromBase64(object.audit_log);
    }
    if (object.scrubbed_request !== undefined && object.scrubbed_request !== null) {
      message.scrubbedRequest = Struct.fromAmino(object.scrubbed_request);
    }
    if (object.scrubbed_response !== undefined && object.scrubbed_response !== null) {
      message.scrubbedResponse = Struct.fromAmino(object.scrubbed_response);
    }
    if (object.scrubbed_response_item_count !== undefined && object.scrubbed_response_item_count !== null) {
      message.scrubbedResponseItemCount = object.scrubbed_response_item_count;
    }
    if (object.target_resource !== undefined && object.target_resource !== null) {
      message.targetResource = object.target_resource;
    }
    return message;
  },
  toAmino(message: AuditContext): AuditContextAmino {
    const obj: any = {};
    obj.audit_log = message.auditLog ? base64FromBytes(message.auditLog) : undefined;
    obj.scrubbed_request = message.scrubbedRequest ? Struct.toAmino(message.scrubbedRequest) : undefined;
    obj.scrubbed_response = message.scrubbedResponse ? Struct.toAmino(message.scrubbedResponse) : undefined;
    obj.scrubbed_response_item_count = message.scrubbedResponseItemCount === 0 ? undefined : message.scrubbedResponseItemCount;
    obj.target_resource = message.targetResource === "" ? undefined : message.targetResource;
    return obj;
  },
  fromAminoMsg(object: AuditContextAminoMsg): AuditContext {
    return AuditContext.fromAmino(object.value);
  },
  fromProtoMsg(message: AuditContextProtoMsg): AuditContext {
    return AuditContext.decode(message.value);
  },
  toProto(message: AuditContext): Uint8Array {
    return AuditContext.encode(message).finish();
  },
  toProtoMsg(message: AuditContext): AuditContextProtoMsg {
    return {
      typeUrl: "/google.rpc.context.AuditContext",
      value: AuditContext.encode(message).finish()
    };
  }
};