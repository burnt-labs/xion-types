//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Google API Policy Annotation
 * 
 * This message defines a simple API policy annotation that can be used to
 * annotate API request and response message fields with applicable policies.
 * One field may have multiple applicable policies that must all be satisfied
 * before a request can be processed. This policy annotation is used to
 * generate the overall policy that will be used for automatic runtime
 * policy enforcement and documentation generation.
 */
export interface FieldPolicy {
  /**
   * Selects one or more request or response message fields to apply this
   * `FieldPolicy`.
   * 
   * When a `FieldPolicy` is used in proto annotation, the selector must
   * be left as empty. The service config generator will automatically fill
   * the correct value.
   * 
   * When a `FieldPolicy` is used in service config, the selector must be a
   * comma-separated string with valid request or response field paths,
   * such as "foo.bar" or "foo.bar,foo.baz".
   */
  selector: string;
  /**
   * Specifies the required permission(s) for the resource referred to by the
   * field. It requires the field contains a valid resource reference, and
   * the request must pass the permission checks to proceed. For example,
   * "resourcemanager.projects.get".
   */
  resourcePermission: string;
  /** Specifies the resource type for the resource referred to by the field. */
  resourceType: string;
}
export interface FieldPolicyProtoMsg {
  typeUrl: "/google.api.FieldPolicy";
  value: Uint8Array;
}
/**
 * Google API Policy Annotation
 * 
 * This message defines a simple API policy annotation that can be used to
 * annotate API request and response message fields with applicable policies.
 * One field may have multiple applicable policies that must all be satisfied
 * before a request can be processed. This policy annotation is used to
 * generate the overall policy that will be used for automatic runtime
 * policy enforcement and documentation generation.
 * @name FieldPolicyAmino
 * @package google.api
 * @see proto type: google.api.FieldPolicy
 */
export interface FieldPolicyAmino {
  /**
   * Selects one or more request or response message fields to apply this
   * `FieldPolicy`.
   * 
   * When a `FieldPolicy` is used in proto annotation, the selector must
   * be left as empty. The service config generator will automatically fill
   * the correct value.
   * 
   * When a `FieldPolicy` is used in service config, the selector must be a
   * comma-separated string with valid request or response field paths,
   * such as "foo.bar" or "foo.bar,foo.baz".
   */
  selector?: string;
  /**
   * Specifies the required permission(s) for the resource referred to by the
   * field. It requires the field contains a valid resource reference, and
   * the request must pass the permission checks to proceed. For example,
   * "resourcemanager.projects.get".
   */
  resource_permission?: string;
  /**
   * Specifies the resource type for the resource referred to by the field.
   */
  resource_type?: string;
}
export interface FieldPolicyAminoMsg {
  type: "/google.api.FieldPolicy";
  value: FieldPolicyAmino;
}
/**
 * Google API Policy Annotation
 * 
 * This message defines a simple API policy annotation that can be used to
 * annotate API request and response message fields with applicable policies.
 * One field may have multiple applicable policies that must all be satisfied
 * before a request can be processed. This policy annotation is used to
 * generate the overall policy that will be used for automatic runtime
 * policy enforcement and documentation generation.
 */
export interface FieldPolicySDKType {
  selector: string;
  resource_permission: string;
  resource_type: string;
}
/** Defines policies applying to an RPC method. */
export interface MethodPolicy {
  /**
   * Selects a method to which these policies should be enforced, for example,
   * "google.pubsub.v1.Subscriber.CreateSubscription".
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   * 
   * NOTE: This field must not be set in the proto annotation. It will be
   * automatically filled by the service config compiler .
   */
  selector: string;
  /** Policies that are applicable to the request message. */
  requestPolicies: FieldPolicy[];
}
export interface MethodPolicyProtoMsg {
  typeUrl: "/google.api.MethodPolicy";
  value: Uint8Array;
}
/**
 * Defines policies applying to an RPC method.
 * @name MethodPolicyAmino
 * @package google.api
 * @see proto type: google.api.MethodPolicy
 */
export interface MethodPolicyAmino {
  /**
   * Selects a method to which these policies should be enforced, for example,
   * "google.pubsub.v1.Subscriber.CreateSubscription".
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   * 
   * NOTE: This field must not be set in the proto annotation. It will be
   * automatically filled by the service config compiler .
   */
  selector?: string;
  /**
   * Policies that are applicable to the request message.
   */
  request_policies?: FieldPolicyAmino[];
}
export interface MethodPolicyAminoMsg {
  type: "/google.api.MethodPolicy";
  value: MethodPolicyAmino;
}
/** Defines policies applying to an RPC method. */
export interface MethodPolicySDKType {
  selector: string;
  request_policies: FieldPolicySDKType[];
}
function createBaseFieldPolicy(): FieldPolicy {
  return {
    selector: "",
    resourcePermission: "",
    resourceType: ""
  };
}
export const FieldPolicy = {
  typeUrl: "/google.api.FieldPolicy",
  encode(message: FieldPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.resourcePermission !== "") {
      writer.uint32(18).string(message.resourcePermission);
    }
    if (message.resourceType !== "") {
      writer.uint32(26).string(message.resourceType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FieldPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.resourcePermission = reader.string();
          break;
        case 3:
          message.resourceType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<FieldPolicy>): FieldPolicy {
    const message = createBaseFieldPolicy();
    message.selector = object.selector ?? "";
    message.resourcePermission = object.resourcePermission ?? "";
    message.resourceType = object.resourceType ?? "";
    return message;
  },
  fromAmino(object: FieldPolicyAmino): FieldPolicy {
    const message = createBaseFieldPolicy();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.resource_permission !== undefined && object.resource_permission !== null) {
      message.resourcePermission = object.resource_permission;
    }
    if (object.resource_type !== undefined && object.resource_type !== null) {
      message.resourceType = object.resource_type;
    }
    return message;
  },
  toAmino(message: FieldPolicy): FieldPolicyAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.resource_permission = message.resourcePermission === "" ? undefined : message.resourcePermission;
    obj.resource_type = message.resourceType === "" ? undefined : message.resourceType;
    return obj;
  },
  fromAminoMsg(object: FieldPolicyAminoMsg): FieldPolicy {
    return FieldPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldPolicyProtoMsg): FieldPolicy {
    return FieldPolicy.decode(message.value);
  },
  toProto(message: FieldPolicy): Uint8Array {
    return FieldPolicy.encode(message).finish();
  },
  toProtoMsg(message: FieldPolicy): FieldPolicyProtoMsg {
    return {
      typeUrl: "/google.api.FieldPolicy",
      value: FieldPolicy.encode(message).finish()
    };
  }
};
function createBaseMethodPolicy(): MethodPolicy {
  return {
    selector: "",
    requestPolicies: []
  };
}
export const MethodPolicy = {
  typeUrl: "/google.api.MethodPolicy",
  encode(message: MethodPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(74).string(message.selector);
    }
    for (const v of message.requestPolicies) {
      FieldPolicy.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MethodPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.selector = reader.string();
          break;
        case 2:
          message.requestPolicies.push(FieldPolicy.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MethodPolicy>): MethodPolicy {
    const message = createBaseMethodPolicy();
    message.selector = object.selector ?? "";
    message.requestPolicies = object.requestPolicies?.map(e => FieldPolicy.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MethodPolicyAmino): MethodPolicy {
    const message = createBaseMethodPolicy();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    message.requestPolicies = object.request_policies?.map(e => FieldPolicy.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MethodPolicy): MethodPolicyAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    if (message.requestPolicies) {
      obj.request_policies = message.requestPolicies.map(e => e ? FieldPolicy.toAmino(e) : undefined);
    } else {
      obj.request_policies = message.requestPolicies;
    }
    return obj;
  },
  fromAminoMsg(object: MethodPolicyAminoMsg): MethodPolicy {
    return MethodPolicy.fromAmino(object.value);
  },
  fromProtoMsg(message: MethodPolicyProtoMsg): MethodPolicy {
    return MethodPolicy.decode(message.value);
  },
  toProto(message: MethodPolicy): Uint8Array {
    return MethodPolicy.encode(message).finish();
  },
  toProtoMsg(message: MethodPolicy): MethodPolicyProtoMsg {
    return {
      typeUrl: "/google.api.MethodPolicy",
      value: MethodPolicy.encode(message).finish()
    };
  }
};