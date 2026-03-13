//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
/**
 * Path Translation specifies how to combine the backend address with the
 * request path in order to produce the appropriate forwarding URL for the
 * request.
 * 
 * Path Translation is applicable only to HTTP-based backends. Backends which
 * do not accept requests over HTTP/HTTPS should leave `path_translation`
 * unspecified.
 */
export enum BackendRule_PathTranslation {
  PATH_TRANSLATION_UNSPECIFIED = 0,
  /**
   * CONSTANT_ADDRESS - Use the backend address as-is, with no modification to the path. If the
   * URL pattern contains variables, the variable names and values will be
   * appended to the query string. If a query string parameter and a URL
   * pattern variable have the same name, this may result in duplicate keys in
   * the query string.
   * 
   * # Examples
   * 
   * Given the following operation config:
   * 
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.cloudfunctions.net/getUser
   * 
   * Requests to the following request paths will call the backend at the
   * translated path:
   * 
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
   * 
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe
   */
  CONSTANT_ADDRESS = 1,
  /**
   * APPEND_PATH_TO_ADDRESS - The request path will be appended to the backend address.
   * 
   * # Examples
   * 
   * Given the following operation config:
   * 
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.appspot.com
   * 
   * Requests to the following request paths will call the backend at the
   * translated path:
   * 
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe
   * 
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST
   */
  APPEND_PATH_TO_ADDRESS = 2,
  UNRECOGNIZED = -1,
}
export const BackendRule_PathTranslationSDKType = BackendRule_PathTranslation;
export const BackendRule_PathTranslationAmino = BackendRule_PathTranslation;
export function backendRule_PathTranslationFromJSON(object: any): BackendRule_PathTranslation {
  switch (object) {
    case 0:
    case "PATH_TRANSLATION_UNSPECIFIED":
      return BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED;
    case 1:
    case "CONSTANT_ADDRESS":
      return BackendRule_PathTranslation.CONSTANT_ADDRESS;
    case 2:
    case "APPEND_PATH_TO_ADDRESS":
      return BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackendRule_PathTranslation.UNRECOGNIZED;
  }
}
export function backendRule_PathTranslationToJSON(object: BackendRule_PathTranslation): string {
  switch (object) {
    case BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED:
      return "PATH_TRANSLATION_UNSPECIFIED";
    case BackendRule_PathTranslation.CONSTANT_ADDRESS:
      return "CONSTANT_ADDRESS";
    case BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS:
      return "APPEND_PATH_TO_ADDRESS";
    case BackendRule_PathTranslation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** `Backend` defines the backend configuration for a service. */
export interface Backend {
  /**
   * A list of API backend rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: BackendRule[];
}
export interface BackendProtoMsg {
  typeUrl: "/google.api.Backend";
  value: Uint8Array;
}
/**
 * `Backend` defines the backend configuration for a service.
 * @name BackendAmino
 * @package google.api
 * @see proto type: google.api.Backend
 */
export interface BackendAmino {
  /**
   * A list of API backend rules that apply to individual API methods.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: BackendRuleAmino[];
}
export interface BackendAminoMsg {
  type: "/google.api.Backend";
  value: BackendAmino;
}
/** `Backend` defines the backend configuration for a service. */
export interface BackendSDKType {
  rules: BackendRuleSDKType[];
}
export interface BackendRule_OverridesByRequestProtocolEntry {
  key: string;
  value?: BackendRule;
}
export interface BackendRule_OverridesByRequestProtocolEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name BackendRule_OverridesByRequestProtocolEntryAmino
 * @package google.api
 * @see proto type: google.api.BackendRule_OverridesByRequestProtocolEntry
 */
export interface BackendRule_OverridesByRequestProtocolEntryAmino {
  key?: string;
  value?: BackendRuleAmino;
}
export interface BackendRule_OverridesByRequestProtocolEntryAminoMsg {
  type: string;
  value: BackendRule_OverridesByRequestProtocolEntryAmino;
}
export interface BackendRule_OverridesByRequestProtocolEntrySDKType {
  key: string;
  value?: BackendRuleSDKType;
}
/** A backend rule provides configuration for an individual API element. */
export interface BackendRule {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector: string;
  /**
   * The address of the API backend.
   * 
   * The scheme is used to determine the backend protocol and security.
   * The following schemes are accepted:
   * 
   *    SCHEME        PROTOCOL    SECURITY
   *    http://       HTTP        None
   *    https://      HTTP        TLS
   *    grpc://       gRPC        None
   *    grpcs://      gRPC        TLS
   * 
   * It is recommended to explicitly include a scheme. Leaving out the scheme
   * may cause constrasting behaviors across platforms.
   * 
   * If the port is unspecified, the default is:
   * - 80 for schemes without TLS
   * - 443 for schemes with TLS
   * 
   * For HTTP backends, use [protocol][google.api.BackendRule.protocol]
   * to specify the protocol version.
   */
  address: string;
  /**
   * The number of seconds to wait for a response from a request. The default
   * varies based on the request protocol and deployment environment.
   */
  deadline: number;
  /** Deprecated, do not use. */
  /** @deprecated */
  minDeadline: number;
  /**
   * The number of seconds to wait for the completion of a long running
   * operation. The default is no deadline.
   */
  operationDeadline: number;
  pathTranslation: BackendRule_PathTranslation;
  /**
   * The JWT audience is used when generating a JWT ID token for the backend.
   * This ID token will be added in the HTTP "authorization" header, and sent
   * to the backend.
   */
  jwtAudience?: string;
  /**
   * When disable_auth is true, a JWT ID token won't be generated and the
   * original "Authorization" HTTP header will be preserved. If the header is
   * used to carry the original token and is expected by the backend, this
   * field must be set to true to preserve the header.
   */
  disableAuth?: boolean;
  /**
   * The protocol used for sending a request to the backend.
   * The supported values are "http/1.1" and "h2".
   * 
   * The default value is inferred from the scheme in the
   * [address][google.api.BackendRule.address] field:
   * 
   *    SCHEME        PROTOCOL
   *    http://       http/1.1
   *    https://      http/1.1
   *    grpc://       h2
   *    grpcs://      h2
   * 
   * For secure HTTP backends (https://) that support HTTP/2, set this field
   * to "h2" for improved performance.
   * 
   * Configuring this field to non-default values is only supported for secure
   * HTTP backends. This field will be ignored for all other backends.
   * 
   * See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for more details on the supported values.
   */
  protocol: string;
  /** The map between request protocol and the backend address. */
  overridesByRequestProtocol: {
    [key: string]: BackendRule;
  };
}
export interface BackendRuleProtoMsg {
  typeUrl: "/google.api.BackendRule";
  value: Uint8Array;
}
/**
 * A backend rule provides configuration for an individual API element.
 * @name BackendRuleAmino
 * @package google.api
 * @see proto type: google.api.BackendRule
 */
export interface BackendRuleAmino {
  /**
   * Selects the methods to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector?: string;
  /**
   * The address of the API backend.
   * 
   * The scheme is used to determine the backend protocol and security.
   * The following schemes are accepted:
   * 
   *    SCHEME        PROTOCOL    SECURITY
   *    http://       HTTP        None
   *    https://      HTTP        TLS
   *    grpc://       gRPC        None
   *    grpcs://      gRPC        TLS
   * 
   * It is recommended to explicitly include a scheme. Leaving out the scheme
   * may cause constrasting behaviors across platforms.
   * 
   * If the port is unspecified, the default is:
   * - 80 for schemes without TLS
   * - 443 for schemes with TLS
   * 
   * For HTTP backends, use [protocol][google.api.BackendRule.protocol]
   * to specify the protocol version.
   */
  address?: string;
  /**
   * The number of seconds to wait for a response from a request. The default
   * varies based on the request protocol and deployment environment.
   */
  deadline?: number;
  /**
   * Deprecated, do not use.
   * @deprecated
   */
  min_deadline?: number;
  /**
   * The number of seconds to wait for the completion of a long running
   * operation. The default is no deadline.
   */
  operation_deadline?: number;
  path_translation?: BackendRule_PathTranslation;
  /**
   * The JWT audience is used when generating a JWT ID token for the backend.
   * This ID token will be added in the HTTP "authorization" header, and sent
   * to the backend.
   */
  jwt_audience?: string;
  /**
   * When disable_auth is true, a JWT ID token won't be generated and the
   * original "Authorization" HTTP header will be preserved. If the header is
   * used to carry the original token and is expected by the backend, this
   * field must be set to true to preserve the header.
   */
  disable_auth?: boolean;
  /**
   * The protocol used for sending a request to the backend.
   * The supported values are "http/1.1" and "h2".
   * 
   * The default value is inferred from the scheme in the
   * [address][google.api.BackendRule.address] field:
   * 
   *    SCHEME        PROTOCOL
   *    http://       http/1.1
   *    https://      http/1.1
   *    grpc://       h2
   *    grpcs://      h2
   * 
   * For secure HTTP backends (https://) that support HTTP/2, set this field
   * to "h2" for improved performance.
   * 
   * Configuring this field to non-default values is only supported for secure
   * HTTP backends. This field will be ignored for all other backends.
   * 
   * See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for more details on the supported values.
   */
  protocol?: string;
  /**
   * The map between request protocol and the backend address.
   */
  overrides_by_request_protocol?: {
    [key: string]: BackendRuleAmino;
  };
}
export interface BackendRuleAminoMsg {
  type: "/google.api.BackendRule";
  value: BackendRuleAmino;
}
/** A backend rule provides configuration for an individual API element. */
export interface BackendRuleSDKType {
  selector: string;
  address: string;
  deadline: number;
  /** @deprecated */
  min_deadline: number;
  operation_deadline: number;
  path_translation: BackendRule_PathTranslation;
  jwt_audience?: string;
  disable_auth?: boolean;
  protocol: string;
  overrides_by_request_protocol: {
    [key: string]: BackendRuleSDKType;
  };
}
function createBaseBackend(): Backend {
  return {
    rules: []
  };
}
export const Backend = {
  typeUrl: "/google.api.Backend",
  encode(message: Backend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      BackendRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Backend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(BackendRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Backend>): Backend {
    const message = createBaseBackend();
    message.rules = object.rules?.map(e => BackendRule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BackendAmino): Backend {
    const message = createBaseBackend();
    message.rules = object.rules?.map(e => BackendRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Backend): BackendAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? BackendRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromAminoMsg(object: BackendAminoMsg): Backend {
    return Backend.fromAmino(object.value);
  },
  fromProtoMsg(message: BackendProtoMsg): Backend {
    return Backend.decode(message.value);
  },
  toProto(message: Backend): Uint8Array {
    return Backend.encode(message).finish();
  },
  toProtoMsg(message: Backend): BackendProtoMsg {
    return {
      typeUrl: "/google.api.Backend",
      value: Backend.encode(message).finish()
    };
  }
};
function createBaseBackendRule_OverridesByRequestProtocolEntry(): BackendRule_OverridesByRequestProtocolEntry {
  return {
    key: "",
    value: undefined
  };
}
export const BackendRule_OverridesByRequestProtocolEntry = {
  encode(message: BackendRule_OverridesByRequestProtocolEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      BackendRule.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BackendRule_OverridesByRequestProtocolEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendRule_OverridesByRequestProtocolEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = BackendRule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BackendRule_OverridesByRequestProtocolEntry>): BackendRule_OverridesByRequestProtocolEntry {
    const message = createBaseBackendRule_OverridesByRequestProtocolEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? BackendRule.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: BackendRule_OverridesByRequestProtocolEntryAmino): BackendRule_OverridesByRequestProtocolEntry {
    const message = createBaseBackendRule_OverridesByRequestProtocolEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BackendRule.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: BackendRule_OverridesByRequestProtocolEntry): BackendRule_OverridesByRequestProtocolEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? BackendRule.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: BackendRule_OverridesByRequestProtocolEntryAminoMsg): BackendRule_OverridesByRequestProtocolEntry {
    return BackendRule_OverridesByRequestProtocolEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BackendRule_OverridesByRequestProtocolEntryProtoMsg): BackendRule_OverridesByRequestProtocolEntry {
    return BackendRule_OverridesByRequestProtocolEntry.decode(message.value);
  },
  toProto(message: BackendRule_OverridesByRequestProtocolEntry): Uint8Array {
    return BackendRule_OverridesByRequestProtocolEntry.encode(message).finish();
  }
};
function createBaseBackendRule(): BackendRule {
  return {
    selector: "",
    address: "",
    deadline: 0,
    minDeadline: 0,
    operationDeadline: 0,
    pathTranslation: 0,
    jwtAudience: undefined,
    disableAuth: undefined,
    protocol: "",
    overridesByRequestProtocol: {}
  };
}
export const BackendRule = {
  typeUrl: "/google.api.BackendRule",
  encode(message: BackendRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.deadline !== 0) {
      writer.uint32(25).double(message.deadline);
    }
    if (message.minDeadline !== 0) {
      writer.uint32(33).double(message.minDeadline);
    }
    if (message.operationDeadline !== 0) {
      writer.uint32(41).double(message.operationDeadline);
    }
    if (message.pathTranslation !== 0) {
      writer.uint32(48).int32(message.pathTranslation);
    }
    if (message.jwtAudience !== undefined) {
      writer.uint32(58).string(message.jwtAudience);
    }
    if (message.disableAuth !== undefined) {
      writer.uint32(64).bool(message.disableAuth);
    }
    if (message.protocol !== "") {
      writer.uint32(74).string(message.protocol);
    }
    Object.entries(message.overridesByRequestProtocol).forEach(([key, value]) => {
      BackendRule_OverridesByRequestProtocolEntry.encode({
        key: key as any,
        value
      }, writer.uint32(82).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BackendRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBackendRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.deadline = reader.double();
          break;
        case 4:
          message.minDeadline = reader.double();
          break;
        case 5:
          message.operationDeadline = reader.double();
          break;
        case 6:
          message.pathTranslation = reader.int32() as any;
          break;
        case 7:
          message.jwtAudience = reader.string();
          break;
        case 8:
          message.disableAuth = reader.bool();
          break;
        case 9:
          message.protocol = reader.string();
          break;
        case 10:
          const entry10 = BackendRule_OverridesByRequestProtocolEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            message.overridesByRequestProtocol[entry10.key] = entry10.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BackendRule>): BackendRule {
    const message = createBaseBackendRule();
    message.selector = object.selector ?? "";
    message.address = object.address ?? "";
    message.deadline = object.deadline ?? 0;
    message.minDeadline = object.minDeadline ?? 0;
    message.operationDeadline = object.operationDeadline ?? 0;
    message.pathTranslation = object.pathTranslation ?? 0;
    message.jwtAudience = object.jwtAudience ?? undefined;
    message.disableAuth = object.disableAuth ?? undefined;
    message.protocol = object.protocol ?? "";
    message.overridesByRequestProtocol = Object.entries(object.overridesByRequestProtocol ?? {}).reduce<{
      [key: string]: BackendRule;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BackendRule.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: BackendRuleAmino): BackendRule {
    const message = createBaseBackendRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    }
    if (object.min_deadline !== undefined && object.min_deadline !== null) {
      message.minDeadline = object.min_deadline;
    }
    if (object.operation_deadline !== undefined && object.operation_deadline !== null) {
      message.operationDeadline = object.operation_deadline;
    }
    if (object.path_translation !== undefined && object.path_translation !== null) {
      message.pathTranslation = object.path_translation;
    }
    if (object.jwt_audience !== undefined && object.jwt_audience !== null) {
      message.jwtAudience = object.jwt_audience;
    }
    if (object.disable_auth !== undefined && object.disable_auth !== null) {
      message.disableAuth = object.disable_auth;
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    }
    message.overridesByRequestProtocol = Object.entries(object.overrides_by_request_protocol ?? {}).reduce<{
      [key: string]: BackendRule;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BackendRule.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: BackendRule): BackendRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.address = message.address === "" ? undefined : message.address;
    obj.deadline = message.deadline === 0 ? undefined : message.deadline;
    obj.min_deadline = message.minDeadline === 0 ? undefined : message.minDeadline;
    obj.operation_deadline = message.operationDeadline === 0 ? undefined : message.operationDeadline;
    obj.path_translation = message.pathTranslation === 0 ? undefined : message.pathTranslation;
    obj.jwt_audience = message.jwtAudience === null ? undefined : message.jwtAudience;
    obj.disable_auth = message.disableAuth === null ? undefined : message.disableAuth;
    obj.protocol = message.protocol === "" ? undefined : message.protocol;
    obj.overrides_by_request_protocol = {};
    if (message.overridesByRequestProtocol) {
      Object.entries(message.overridesByRequestProtocol).forEach(([k, v]) => {
        obj.overrides_by_request_protocol[k] = BackendRule.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: BackendRuleAminoMsg): BackendRule {
    return BackendRule.fromAmino(object.value);
  },
  fromProtoMsg(message: BackendRuleProtoMsg): BackendRule {
    return BackendRule.decode(message.value);
  },
  toProto(message: BackendRule): Uint8Array {
    return BackendRule.encode(message).finish();
  },
  toProtoMsg(message: BackendRule): BackendRuleProtoMsg {
    return {
      typeUrl: "/google.api.BackendRule",
      value: BackendRule.encode(message).finish()
    };
  }
};