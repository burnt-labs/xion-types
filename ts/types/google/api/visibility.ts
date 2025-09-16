//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 * 
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 * 
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
  /**
   * A list of visibility rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: VisibilityRule[];
}
export interface VisibilityProtoMsg {
  typeUrl: "/google.api.Visibility";
  value: Uint8Array;
}
/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 * 
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 * 
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 * @name VisibilityAmino
 * @package google.api
 * @see proto type: google.api.Visibility
 */
export interface VisibilityAmino {
  /**
   * A list of visibility rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: VisibilityRuleAmino[];
}
export interface VisibilityAminoMsg {
  type: "/google.api.Visibility";
  value: VisibilityAmino;
}
/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 * 
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 * 
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface VisibilitySDKType {
  rules: VisibilityRuleSDKType[];
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   * 
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   * 
   * Example:
   * 
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   * 
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction: string;
}
export interface VisibilityRuleProtoMsg {
  typeUrl: "/google.api.VisibilityRule";
  value: Uint8Array;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 * @name VisibilityRuleAmino
 * @package google.api
 * @see proto type: google.api.VisibilityRule
 */
export interface VisibilityRuleAmino {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector?: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   * 
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   * 
   * Example:
   * 
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   * 
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction?: string;
}
export interface VisibilityRuleAminoMsg {
  type: "/google.api.VisibilityRule";
  value: VisibilityRuleAmino;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRuleSDKType {
  selector: string;
  restriction: string;
}
function createBaseVisibility(): Visibility {
  return {
    rules: []
  };
}
export const Visibility = {
  typeUrl: "/google.api.Visibility",
  encode(message: Visibility, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      VisibilityRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Visibility {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(VisibilityRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Visibility>): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VisibilityAmino): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Visibility): VisibilityAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromAminoMsg(object: VisibilityAminoMsg): Visibility {
    return Visibility.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityProtoMsg): Visibility {
    return Visibility.decode(message.value);
  },
  toProto(message: Visibility): Uint8Array {
    return Visibility.encode(message).finish();
  },
  toProtoMsg(message: Visibility): VisibilityProtoMsg {
    return {
      typeUrl: "/google.api.Visibility",
      value: Visibility.encode(message).finish()
    };
  }
};
function createBaseVisibilityRule(): VisibilityRule {
  return {
    selector: "",
    restriction: ""
  };
}
export const VisibilityRule = {
  typeUrl: "/google.api.VisibilityRule",
  encode(message: VisibilityRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.restriction !== "") {
      writer.uint32(18).string(message.restriction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VisibilityRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibilityRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.restriction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VisibilityRule>): VisibilityRule {
    const message = createBaseVisibilityRule();
    message.selector = object.selector ?? "";
    message.restriction = object.restriction ?? "";
    return message;
  },
  fromAmino(object: VisibilityRuleAmino): VisibilityRule {
    const message = createBaseVisibilityRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.restriction !== undefined && object.restriction !== null) {
      message.restriction = object.restriction;
    }
    return message;
  },
  toAmino(message: VisibilityRule): VisibilityRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.restriction = message.restriction === "" ? undefined : message.restriction;
    return obj;
  },
  fromAminoMsg(object: VisibilityRuleAminoMsg): VisibilityRule {
    return VisibilityRule.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityRuleProtoMsg): VisibilityRule {
    return VisibilityRule.decode(message.value);
  },
  toProto(message: VisibilityRule): Uint8Array {
    return VisibilityRule.encode(message).finish();
  },
  toProtoMsg(message: VisibilityRule): VisibilityRuleProtoMsg {
    return {
      typeUrl: "/google.api.VisibilityRule",
      value: VisibilityRule.encode(message).finish()
    };
  }
};