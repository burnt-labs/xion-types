//@ts-nocheck
import { MethodPolicy, MethodPolicyAmino, MethodPolicySDKType } from "./policy";
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Selects and configures the service controller used by the service.
 * 
 * Example:
 * 
 *     control:
 *       environment: servicecontrol.googleapis.com
 */
export interface Control {
  /**
   * The service controller environment to use. If empty, no control plane
   * feature (like quota and billing) will be enabled. The recommended value for
   * most services is servicecontrol.googleapis.com
   */
  environment: string;
  /** Defines policies applying to the API methods of the service. */
  methodPolicies: MethodPolicy[];
}
export interface ControlProtoMsg {
  typeUrl: "/google.api.Control";
  value: Uint8Array;
}
/**
 * Selects and configures the service controller used by the service.
 * 
 * Example:
 * 
 *     control:
 *       environment: servicecontrol.googleapis.com
 * @name ControlAmino
 * @package google.api
 * @see proto type: google.api.Control
 */
export interface ControlAmino {
  /**
   * The service controller environment to use. If empty, no control plane
   * feature (like quota and billing) will be enabled. The recommended value for
   * most services is servicecontrol.googleapis.com
   */
  environment?: string;
  /**
   * Defines policies applying to the API methods of the service.
   */
  method_policies?: MethodPolicyAmino[];
}
export interface ControlAminoMsg {
  type: "/google.api.Control";
  value: ControlAmino;
}
/**
 * Selects and configures the service controller used by the service.
 * 
 * Example:
 * 
 *     control:
 *       environment: servicecontrol.googleapis.com
 */
export interface ControlSDKType {
  environment: string;
  method_policies: MethodPolicySDKType[];
}
function createBaseControl(): Control {
  return {
    environment: "",
    methodPolicies: []
  };
}
export const Control = {
  typeUrl: "/google.api.Control",
  encode(message: Control, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }
    for (const v of message.methodPolicies) {
      MethodPolicy.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Control {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environment = reader.string();
          break;
        case 4:
          message.methodPolicies.push(MethodPolicy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Control>): Control {
    const message = createBaseControl();
    message.environment = object.environment ?? "";
    message.methodPolicies = object.methodPolicies?.map(e => MethodPolicy.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ControlAmino): Control {
    const message = createBaseControl();
    if (object.environment !== undefined && object.environment !== null) {
      message.environment = object.environment;
    }
    message.methodPolicies = object.method_policies?.map(e => MethodPolicy.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Control): ControlAmino {
    const obj: any = {};
    obj.environment = message.environment === "" ? undefined : message.environment;
    if (message.methodPolicies) {
      obj.method_policies = message.methodPolicies.map(e => e ? MethodPolicy.toAmino(e) : undefined);
    } else {
      obj.method_policies = message.methodPolicies;
    }
    return obj;
  },
  fromAminoMsg(object: ControlAminoMsg): Control {
    return Control.fromAmino(object.value);
  },
  fromProtoMsg(message: ControlProtoMsg): Control {
    return Control.decode(message.value);
  },
  toProto(message: Control): Uint8Array {
    return Control.encode(message).finish();
  },
  toProtoMsg(message: Control): ControlProtoMsg {
    return {
      typeUrl: "/google.api.Control",
      value: Control.encode(message).finish()
    };
  }
};