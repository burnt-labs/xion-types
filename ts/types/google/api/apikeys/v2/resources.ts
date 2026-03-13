//@ts-nocheck
import { Timestamp } from "../../../protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
export interface Key_AnnotationsEntry {
  key: string;
  value: string;
}
export interface Key_AnnotationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name Key_AnnotationsEntryAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.Key_AnnotationsEntry
 */
export interface Key_AnnotationsEntryAmino {
  key?: string;
  value?: string;
}
export interface Key_AnnotationsEntryAminoMsg {
  type: string;
  value: Key_AnnotationsEntryAmino;
}
export interface Key_AnnotationsEntrySDKType {
  key: string;
  value: string;
}
/** The representation of a key managed by the API Keys API. */
export interface Key {
  /**
   * Output only. The resource name of the key.
   * The `name` has the form:
   * `projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID>`.
   * For example:
   * `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2`
   * 
   * NOTE: Key is a global resource; hence the only supported value for
   * location is `global`.
   */
  name: string;
  /** Output only. Unique id in UUID4 format. */
  uid: string;
  /**
   * Human-readable display name of this key that you can modify.
   * The maximum length is 63 characters.
   */
  displayName: string;
  /**
   * Output only. An encrypted and signed value held by this key.
   * This field can be accessed only through the `GetKeyString` method.
   */
  keyString: string;
  /**
   * Output only. A timestamp identifying the time this key was originally
   * created.
   */
  createTime?: Date;
  /**
   * Output only. A timestamp identifying the time this key was last
   * updated.
   */
  updateTime?: Date;
  /**
   * Output only. A timestamp when this key was deleted. If the resource is not
   * deleted, this must be empty.
   */
  deleteTime?: Date;
  /**
   * Annotations is an unstructured key-value map stored with a policy that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   */
  annotations: {
    [key: string]: string;
  };
  /** Key restrictions. */
  restrictions?: Restrictions;
  /**
   * Output only. A checksum computed by the server based on the current value
   * of the Key resource. This may be sent on update and delete requests to
   * ensure the client has an up-to-date value before proceeding. See
   * https://google.aip.dev/154.
   */
  etag: string;
}
export interface KeyProtoMsg {
  typeUrl: "/google.api.apikeys.v2.Key";
  value: Uint8Array;
}
/**
 * The representation of a key managed by the API Keys API.
 * @name KeyAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.Key
 */
export interface KeyAmino {
  /**
   * Output only. The resource name of the key.
   * The `name` has the form:
   * `projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID>`.
   * For example:
   * `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2`
   * 
   * NOTE: Key is a global resource; hence the only supported value for
   * location is `global`.
   */
  name?: string;
  /**
   * Output only. Unique id in UUID4 format.
   */
  uid?: string;
  /**
   * Human-readable display name of this key that you can modify.
   * The maximum length is 63 characters.
   */
  display_name?: string;
  /**
   * Output only. An encrypted and signed value held by this key.
   * This field can be accessed only through the `GetKeyString` method.
   */
  key_string?: string;
  /**
   * Output only. A timestamp identifying the time this key was originally
   * created.
   */
  create_time?: string;
  /**
   * Output only. A timestamp identifying the time this key was last
   * updated.
   */
  update_time?: string;
  /**
   * Output only. A timestamp when this key was deleted. If the resource is not
   * deleted, this must be empty.
   */
  delete_time?: string;
  /**
   * Annotations is an unstructured key-value map stored with a policy that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   */
  annotations?: {
    [key: string]: string;
  };
  /**
   * Key restrictions.
   */
  restrictions?: RestrictionsAmino;
  /**
   * Output only. A checksum computed by the server based on the current value
   * of the Key resource. This may be sent on update and delete requests to
   * ensure the client has an up-to-date value before proceeding. See
   * https://google.aip.dev/154.
   */
  etag?: string;
}
export interface KeyAminoMsg {
  type: "/google.api.apikeys.v2.Key";
  value: KeyAmino;
}
/** The representation of a key managed by the API Keys API. */
export interface KeySDKType {
  name: string;
  uid: string;
  display_name: string;
  key_string: string;
  create_time?: Date;
  update_time?: Date;
  delete_time?: Date;
  annotations: {
    [key: string]: string;
  };
  restrictions?: RestrictionsSDKType;
  etag: string;
}
/** Describes the restrictions on the key. */
export interface Restrictions {
  /** The HTTP referrers (websites) that are allowed to use the key. */
  browserKeyRestrictions?: BrowserKeyRestrictions;
  /** The IP addresses of callers that are allowed to use the key. */
  serverKeyRestrictions?: ServerKeyRestrictions;
  /** The Android apps that are allowed to use the key. */
  androidKeyRestrictions?: AndroidKeyRestrictions;
  /** The iOS apps that are allowed to use the key. */
  iosKeyRestrictions?: IosKeyRestrictions;
  /**
   * A restriction for a specific service and optionally one or
   * more specific methods. Requests are allowed if they
   * match any of these restrictions. If no restrictions are
   * specified, all targets are allowed.
   */
  apiTargets: ApiTarget[];
}
export interface RestrictionsProtoMsg {
  typeUrl: "/google.api.apikeys.v2.Restrictions";
  value: Uint8Array;
}
/**
 * Describes the restrictions on the key.
 * @name RestrictionsAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.Restrictions
 */
export interface RestrictionsAmino {
  /**
   * The HTTP referrers (websites) that are allowed to use the key.
   */
  browser_key_restrictions?: BrowserKeyRestrictionsAmino;
  /**
   * The IP addresses of callers that are allowed to use the key.
   */
  server_key_restrictions?: ServerKeyRestrictionsAmino;
  /**
   * The Android apps that are allowed to use the key.
   */
  android_key_restrictions?: AndroidKeyRestrictionsAmino;
  /**
   * The iOS apps that are allowed to use the key.
   */
  ios_key_restrictions?: IosKeyRestrictionsAmino;
  /**
   * A restriction for a specific service and optionally one or
   * more specific methods. Requests are allowed if they
   * match any of these restrictions. If no restrictions are
   * specified, all targets are allowed.
   */
  api_targets?: ApiTargetAmino[];
}
export interface RestrictionsAminoMsg {
  type: "/google.api.apikeys.v2.Restrictions";
  value: RestrictionsAmino;
}
/** Describes the restrictions on the key. */
export interface RestrictionsSDKType {
  browser_key_restrictions?: BrowserKeyRestrictionsSDKType;
  server_key_restrictions?: ServerKeyRestrictionsSDKType;
  android_key_restrictions?: AndroidKeyRestrictionsSDKType;
  ios_key_restrictions?: IosKeyRestrictionsSDKType;
  api_targets: ApiTargetSDKType[];
}
/** The HTTP referrers (websites) that are allowed to use the key. */
export interface BrowserKeyRestrictions {
  /**
   * A list of regular expressions for the referrer URLs that are allowed
   * to make API calls with this key.
   */
  allowedReferrers: string[];
}
export interface BrowserKeyRestrictionsProtoMsg {
  typeUrl: "/google.api.apikeys.v2.BrowserKeyRestrictions";
  value: Uint8Array;
}
/**
 * The HTTP referrers (websites) that are allowed to use the key.
 * @name BrowserKeyRestrictionsAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.BrowserKeyRestrictions
 */
export interface BrowserKeyRestrictionsAmino {
  /**
   * A list of regular expressions for the referrer URLs that are allowed
   * to make API calls with this key.
   */
  allowed_referrers?: string[];
}
export interface BrowserKeyRestrictionsAminoMsg {
  type: "/google.api.apikeys.v2.BrowserKeyRestrictions";
  value: BrowserKeyRestrictionsAmino;
}
/** The HTTP referrers (websites) that are allowed to use the key. */
export interface BrowserKeyRestrictionsSDKType {
  allowed_referrers: string[];
}
/** The IP addresses of callers that are allowed to use the key. */
export interface ServerKeyRestrictions {
  /**
   * A list of the caller IP addresses that are allowed to make API calls
   * with this key.
   */
  allowedIps: string[];
}
export interface ServerKeyRestrictionsProtoMsg {
  typeUrl: "/google.api.apikeys.v2.ServerKeyRestrictions";
  value: Uint8Array;
}
/**
 * The IP addresses of callers that are allowed to use the key.
 * @name ServerKeyRestrictionsAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.ServerKeyRestrictions
 */
export interface ServerKeyRestrictionsAmino {
  /**
   * A list of the caller IP addresses that are allowed to make API calls
   * with this key.
   */
  allowed_ips?: string[];
}
export interface ServerKeyRestrictionsAminoMsg {
  type: "/google.api.apikeys.v2.ServerKeyRestrictions";
  value: ServerKeyRestrictionsAmino;
}
/** The IP addresses of callers that are allowed to use the key. */
export interface ServerKeyRestrictionsSDKType {
  allowed_ips: string[];
}
/** The Android apps that are allowed to use the key. */
export interface AndroidKeyRestrictions {
  /**
   * A list of Android applications that are allowed to make API calls with
   * this key.
   */
  allowedApplications: AndroidApplication[];
}
export interface AndroidKeyRestrictionsProtoMsg {
  typeUrl: "/google.api.apikeys.v2.AndroidKeyRestrictions";
  value: Uint8Array;
}
/**
 * The Android apps that are allowed to use the key.
 * @name AndroidKeyRestrictionsAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.AndroidKeyRestrictions
 */
export interface AndroidKeyRestrictionsAmino {
  /**
   * A list of Android applications that are allowed to make API calls with
   * this key.
   */
  allowed_applications?: AndroidApplicationAmino[];
}
export interface AndroidKeyRestrictionsAminoMsg {
  type: "/google.api.apikeys.v2.AndroidKeyRestrictions";
  value: AndroidKeyRestrictionsAmino;
}
/** The Android apps that are allowed to use the key. */
export interface AndroidKeyRestrictionsSDKType {
  allowed_applications: AndroidApplicationSDKType[];
}
/** Identifier of an Android application for key use. */
export interface AndroidApplication {
  /**
   * The SHA1 fingerprint of the application. For example, both sha1 formats are
   * acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or
   * DA39A3EE5E6B4B0D3255BFEF95601890AFD80709.
   * Output format is the latter.
   */
  sha1Fingerprint: string;
  /** The package name of the application. */
  packageName: string;
}
export interface AndroidApplicationProtoMsg {
  typeUrl: "/google.api.apikeys.v2.AndroidApplication";
  value: Uint8Array;
}
/**
 * Identifier of an Android application for key use.
 * @name AndroidApplicationAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.AndroidApplication
 */
export interface AndroidApplicationAmino {
  /**
   * The SHA1 fingerprint of the application. For example, both sha1 formats are
   * acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or
   * DA39A3EE5E6B4B0D3255BFEF95601890AFD80709.
   * Output format is the latter.
   */
  sha1_fingerprint?: string;
  /**
   * The package name of the application.
   */
  package_name?: string;
}
export interface AndroidApplicationAminoMsg {
  type: "/google.api.apikeys.v2.AndroidApplication";
  value: AndroidApplicationAmino;
}
/** Identifier of an Android application for key use. */
export interface AndroidApplicationSDKType {
  sha1_fingerprint: string;
  package_name: string;
}
/** The iOS apps that are allowed to use the key. */
export interface IosKeyRestrictions {
  /** A list of bundle IDs that are allowed when making API calls with this key. */
  allowedBundleIds: string[];
}
export interface IosKeyRestrictionsProtoMsg {
  typeUrl: "/google.api.apikeys.v2.IosKeyRestrictions";
  value: Uint8Array;
}
/**
 * The iOS apps that are allowed to use the key.
 * @name IosKeyRestrictionsAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.IosKeyRestrictions
 */
export interface IosKeyRestrictionsAmino {
  /**
   * A list of bundle IDs that are allowed when making API calls with this key.
   */
  allowed_bundle_ids?: string[];
}
export interface IosKeyRestrictionsAminoMsg {
  type: "/google.api.apikeys.v2.IosKeyRestrictions";
  value: IosKeyRestrictionsAmino;
}
/** The iOS apps that are allowed to use the key. */
export interface IosKeyRestrictionsSDKType {
  allowed_bundle_ids: string[];
}
/**
 * A restriction for a specific service and optionally one or multiple
 * specific methods. Both fields are case insensitive.
 */
export interface ApiTarget {
  /**
   * The service for this restriction. It should be the canonical
   * service name, for example: `translate.googleapis.com`.
   * You can use [`gcloud services list`](/sdk/gcloud/reference/services/list)
   * to get a list of services that are enabled in the project.
   */
  service: string;
  /**
   * Optional. List of one or more methods that can be called.
   * If empty, all methods for the service are allowed. A wildcard
   * (*) can be used as the last symbol.
   * Valid examples:
   *   `google.cloud.translate.v2.TranslateService.GetSupportedLanguage`
   *   `TranslateText`
   *   `Get*`
   *   `translate.googleapis.com.Get*`
   */
  methods: string[];
}
export interface ApiTargetProtoMsg {
  typeUrl: "/google.api.apikeys.v2.ApiTarget";
  value: Uint8Array;
}
/**
 * A restriction for a specific service and optionally one or multiple
 * specific methods. Both fields are case insensitive.
 * @name ApiTargetAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.ApiTarget
 */
export interface ApiTargetAmino {
  /**
   * The service for this restriction. It should be the canonical
   * service name, for example: `translate.googleapis.com`.
   * You can use [`gcloud services list`](/sdk/gcloud/reference/services/list)
   * to get a list of services that are enabled in the project.
   */
  service?: string;
  /**
   * Optional. List of one or more methods that can be called.
   * If empty, all methods for the service are allowed. A wildcard
   * (*) can be used as the last symbol.
   * Valid examples:
   *   `google.cloud.translate.v2.TranslateService.GetSupportedLanguage`
   *   `TranslateText`
   *   `Get*`
   *   `translate.googleapis.com.Get*`
   */
  methods?: string[];
}
export interface ApiTargetAminoMsg {
  type: "/google.api.apikeys.v2.ApiTarget";
  value: ApiTargetAmino;
}
/**
 * A restriction for a specific service and optionally one or multiple
 * specific methods. Both fields are case insensitive.
 */
export interface ApiTargetSDKType {
  service: string;
  methods: string[];
}
function createBaseKey_AnnotationsEntry(): Key_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const Key_AnnotationsEntry = {
  encode(message: Key_AnnotationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Key_AnnotationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey_AnnotationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Key_AnnotationsEntry>): Key_AnnotationsEntry {
    const message = createBaseKey_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: Key_AnnotationsEntryAmino): Key_AnnotationsEntry {
    const message = createBaseKey_AnnotationsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Key_AnnotationsEntry): Key_AnnotationsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: Key_AnnotationsEntryAminoMsg): Key_AnnotationsEntry {
    return Key_AnnotationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Key_AnnotationsEntryProtoMsg): Key_AnnotationsEntry {
    return Key_AnnotationsEntry.decode(message.value);
  },
  toProto(message: Key_AnnotationsEntry): Uint8Array {
    return Key_AnnotationsEntry.encode(message).finish();
  }
};
function createBaseKey(): Key {
  return {
    name: "",
    uid: "",
    displayName: "",
    keyString: "",
    createTime: undefined,
    updateTime: undefined,
    deleteTime: undefined,
    annotations: {},
    restrictions: undefined,
    etag: ""
  };
}
export const Key = {
  typeUrl: "/google.api.apikeys.v2.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(42).string(message.uid);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.keyString !== "") {
      writer.uint32(26).string(message.keyString);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.deleteTime !== undefined) {
      Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      Key_AnnotationsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(66).fork()).ldelim();
    });
    if (message.restrictions !== undefined) {
      Restrictions.encode(message.restrictions, writer.uint32(74).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(90).string(message.etag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Key {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 5:
          message.uid = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.keyString = reader.string();
          break;
        case 4:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          const entry8 = Key_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.annotations[entry8.key] = entry8.value;
          }
          break;
        case 9:
          message.restrictions = Restrictions.decode(reader, reader.uint32());
          break;
        case 11:
          message.etag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.displayName = object.displayName ?? "";
    message.keyString = object.keyString ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.restrictions = object.restrictions !== undefined && object.restrictions !== null ? Restrictions.fromPartial(object.restrictions) : undefined;
    message.etag = object.etag ?? "";
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    }
    if (object.display_name !== undefined && object.display_name !== null) {
      message.displayName = object.display_name;
    }
    if (object.key_string !== undefined && object.key_string !== null) {
      message.keyString = object.key_string;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.delete_time !== undefined && object.delete_time !== null) {
      message.deleteTime = fromTimestamp(Timestamp.fromAmino(object.delete_time));
    }
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.restrictions !== undefined && object.restrictions !== null) {
      message.restrictions = Restrictions.fromAmino(object.restrictions);
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.uid = message.uid === "" ? undefined : message.uid;
    obj.display_name = message.displayName === "" ? undefined : message.displayName;
    obj.key_string = message.keyString === "" ? undefined : message.keyString;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.delete_time = message.deleteTime ? Timestamp.toAmino(toTimestamp(message.deleteTime)) : undefined;
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    obj.restrictions = message.restrictions ? Restrictions.toAmino(message.restrictions) : undefined;
    obj.etag = message.etag === "" ? undefined : message.etag;
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.Key",
      value: Key.encode(message).finish()
    };
  }
};
function createBaseRestrictions(): Restrictions {
  return {
    browserKeyRestrictions: undefined,
    serverKeyRestrictions: undefined,
    androidKeyRestrictions: undefined,
    iosKeyRestrictions: undefined,
    apiTargets: []
  };
}
export const Restrictions = {
  typeUrl: "/google.api.apikeys.v2.Restrictions",
  encode(message: Restrictions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.browserKeyRestrictions !== undefined) {
      BrowserKeyRestrictions.encode(message.browserKeyRestrictions, writer.uint32(10).fork()).ldelim();
    }
    if (message.serverKeyRestrictions !== undefined) {
      ServerKeyRestrictions.encode(message.serverKeyRestrictions, writer.uint32(18).fork()).ldelim();
    }
    if (message.androidKeyRestrictions !== undefined) {
      AndroidKeyRestrictions.encode(message.androidKeyRestrictions, writer.uint32(26).fork()).ldelim();
    }
    if (message.iosKeyRestrictions !== undefined) {
      IosKeyRestrictions.encode(message.iosKeyRestrictions, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.apiTargets) {
      ApiTarget.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Restrictions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestrictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.browserKeyRestrictions = BrowserKeyRestrictions.decode(reader, reader.uint32());
          break;
        case 2:
          message.serverKeyRestrictions = ServerKeyRestrictions.decode(reader, reader.uint32());
          break;
        case 3:
          message.androidKeyRestrictions = AndroidKeyRestrictions.decode(reader, reader.uint32());
          break;
        case 4:
          message.iosKeyRestrictions = IosKeyRestrictions.decode(reader, reader.uint32());
          break;
        case 5:
          message.apiTargets.push(ApiTarget.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Restrictions>): Restrictions {
    const message = createBaseRestrictions();
    message.browserKeyRestrictions = object.browserKeyRestrictions !== undefined && object.browserKeyRestrictions !== null ? BrowserKeyRestrictions.fromPartial(object.browserKeyRestrictions) : undefined;
    message.serverKeyRestrictions = object.serverKeyRestrictions !== undefined && object.serverKeyRestrictions !== null ? ServerKeyRestrictions.fromPartial(object.serverKeyRestrictions) : undefined;
    message.androidKeyRestrictions = object.androidKeyRestrictions !== undefined && object.androidKeyRestrictions !== null ? AndroidKeyRestrictions.fromPartial(object.androidKeyRestrictions) : undefined;
    message.iosKeyRestrictions = object.iosKeyRestrictions !== undefined && object.iosKeyRestrictions !== null ? IosKeyRestrictions.fromPartial(object.iosKeyRestrictions) : undefined;
    message.apiTargets = object.apiTargets?.map(e => ApiTarget.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RestrictionsAmino): Restrictions {
    const message = createBaseRestrictions();
    if (object.browser_key_restrictions !== undefined && object.browser_key_restrictions !== null) {
      message.browserKeyRestrictions = BrowserKeyRestrictions.fromAmino(object.browser_key_restrictions);
    }
    if (object.server_key_restrictions !== undefined && object.server_key_restrictions !== null) {
      message.serverKeyRestrictions = ServerKeyRestrictions.fromAmino(object.server_key_restrictions);
    }
    if (object.android_key_restrictions !== undefined && object.android_key_restrictions !== null) {
      message.androidKeyRestrictions = AndroidKeyRestrictions.fromAmino(object.android_key_restrictions);
    }
    if (object.ios_key_restrictions !== undefined && object.ios_key_restrictions !== null) {
      message.iosKeyRestrictions = IosKeyRestrictions.fromAmino(object.ios_key_restrictions);
    }
    message.apiTargets = object.api_targets?.map(e => ApiTarget.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Restrictions): RestrictionsAmino {
    const obj: any = {};
    obj.browser_key_restrictions = message.browserKeyRestrictions ? BrowserKeyRestrictions.toAmino(message.browserKeyRestrictions) : undefined;
    obj.server_key_restrictions = message.serverKeyRestrictions ? ServerKeyRestrictions.toAmino(message.serverKeyRestrictions) : undefined;
    obj.android_key_restrictions = message.androidKeyRestrictions ? AndroidKeyRestrictions.toAmino(message.androidKeyRestrictions) : undefined;
    obj.ios_key_restrictions = message.iosKeyRestrictions ? IosKeyRestrictions.toAmino(message.iosKeyRestrictions) : undefined;
    if (message.apiTargets) {
      obj.api_targets = message.apiTargets.map(e => e ? ApiTarget.toAmino(e) : undefined);
    } else {
      obj.api_targets = message.apiTargets;
    }
    return obj;
  },
  fromAminoMsg(object: RestrictionsAminoMsg): Restrictions {
    return Restrictions.fromAmino(object.value);
  },
  fromProtoMsg(message: RestrictionsProtoMsg): Restrictions {
    return Restrictions.decode(message.value);
  },
  toProto(message: Restrictions): Uint8Array {
    return Restrictions.encode(message).finish();
  },
  toProtoMsg(message: Restrictions): RestrictionsProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.Restrictions",
      value: Restrictions.encode(message).finish()
    };
  }
};
function createBaseBrowserKeyRestrictions(): BrowserKeyRestrictions {
  return {
    allowedReferrers: []
  };
}
export const BrowserKeyRestrictions = {
  typeUrl: "/google.api.apikeys.v2.BrowserKeyRestrictions",
  encode(message: BrowserKeyRestrictions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedReferrers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BrowserKeyRestrictions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrowserKeyRestrictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedReferrers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BrowserKeyRestrictions>): BrowserKeyRestrictions {
    const message = createBaseBrowserKeyRestrictions();
    message.allowedReferrers = object.allowedReferrers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BrowserKeyRestrictionsAmino): BrowserKeyRestrictions {
    const message = createBaseBrowserKeyRestrictions();
    message.allowedReferrers = object.allowed_referrers?.map(e => e) || [];
    return message;
  },
  toAmino(message: BrowserKeyRestrictions): BrowserKeyRestrictionsAmino {
    const obj: any = {};
    if (message.allowedReferrers) {
      obj.allowed_referrers = message.allowedReferrers.map(e => e);
    } else {
      obj.allowed_referrers = message.allowedReferrers;
    }
    return obj;
  },
  fromAminoMsg(object: BrowserKeyRestrictionsAminoMsg): BrowserKeyRestrictions {
    return BrowserKeyRestrictions.fromAmino(object.value);
  },
  fromProtoMsg(message: BrowserKeyRestrictionsProtoMsg): BrowserKeyRestrictions {
    return BrowserKeyRestrictions.decode(message.value);
  },
  toProto(message: BrowserKeyRestrictions): Uint8Array {
    return BrowserKeyRestrictions.encode(message).finish();
  },
  toProtoMsg(message: BrowserKeyRestrictions): BrowserKeyRestrictionsProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.BrowserKeyRestrictions",
      value: BrowserKeyRestrictions.encode(message).finish()
    };
  }
};
function createBaseServerKeyRestrictions(): ServerKeyRestrictions {
  return {
    allowedIps: []
  };
}
export const ServerKeyRestrictions = {
  typeUrl: "/google.api.apikeys.v2.ServerKeyRestrictions",
  encode(message: ServerKeyRestrictions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedIps) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServerKeyRestrictions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerKeyRestrictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedIps.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServerKeyRestrictions>): ServerKeyRestrictions {
    const message = createBaseServerKeyRestrictions();
    message.allowedIps = object.allowedIps?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServerKeyRestrictionsAmino): ServerKeyRestrictions {
    const message = createBaseServerKeyRestrictions();
    message.allowedIps = object.allowed_ips?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServerKeyRestrictions): ServerKeyRestrictionsAmino {
    const obj: any = {};
    if (message.allowedIps) {
      obj.allowed_ips = message.allowedIps.map(e => e);
    } else {
      obj.allowed_ips = message.allowedIps;
    }
    return obj;
  },
  fromAminoMsg(object: ServerKeyRestrictionsAminoMsg): ServerKeyRestrictions {
    return ServerKeyRestrictions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServerKeyRestrictionsProtoMsg): ServerKeyRestrictions {
    return ServerKeyRestrictions.decode(message.value);
  },
  toProto(message: ServerKeyRestrictions): Uint8Array {
    return ServerKeyRestrictions.encode(message).finish();
  },
  toProtoMsg(message: ServerKeyRestrictions): ServerKeyRestrictionsProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.ServerKeyRestrictions",
      value: ServerKeyRestrictions.encode(message).finish()
    };
  }
};
function createBaseAndroidKeyRestrictions(): AndroidKeyRestrictions {
  return {
    allowedApplications: []
  };
}
export const AndroidKeyRestrictions = {
  typeUrl: "/google.api.apikeys.v2.AndroidKeyRestrictions",
  encode(message: AndroidKeyRestrictions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedApplications) {
      AndroidApplication.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AndroidKeyRestrictions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidKeyRestrictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedApplications.push(AndroidApplication.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AndroidKeyRestrictions>): AndroidKeyRestrictions {
    const message = createBaseAndroidKeyRestrictions();
    message.allowedApplications = object.allowedApplications?.map(e => AndroidApplication.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AndroidKeyRestrictionsAmino): AndroidKeyRestrictions {
    const message = createBaseAndroidKeyRestrictions();
    message.allowedApplications = object.allowed_applications?.map(e => AndroidApplication.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AndroidKeyRestrictions): AndroidKeyRestrictionsAmino {
    const obj: any = {};
    if (message.allowedApplications) {
      obj.allowed_applications = message.allowedApplications.map(e => e ? AndroidApplication.toAmino(e) : undefined);
    } else {
      obj.allowed_applications = message.allowedApplications;
    }
    return obj;
  },
  fromAminoMsg(object: AndroidKeyRestrictionsAminoMsg): AndroidKeyRestrictions {
    return AndroidKeyRestrictions.fromAmino(object.value);
  },
  fromProtoMsg(message: AndroidKeyRestrictionsProtoMsg): AndroidKeyRestrictions {
    return AndroidKeyRestrictions.decode(message.value);
  },
  toProto(message: AndroidKeyRestrictions): Uint8Array {
    return AndroidKeyRestrictions.encode(message).finish();
  },
  toProtoMsg(message: AndroidKeyRestrictions): AndroidKeyRestrictionsProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.AndroidKeyRestrictions",
      value: AndroidKeyRestrictions.encode(message).finish()
    };
  }
};
function createBaseAndroidApplication(): AndroidApplication {
  return {
    sha1Fingerprint: "",
    packageName: ""
  };
}
export const AndroidApplication = {
  typeUrl: "/google.api.apikeys.v2.AndroidApplication",
  encode(message: AndroidApplication, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sha1Fingerprint !== "") {
      writer.uint32(10).string(message.sha1Fingerprint);
    }
    if (message.packageName !== "") {
      writer.uint32(18).string(message.packageName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AndroidApplication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAndroidApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sha1Fingerprint = reader.string();
          break;
        case 2:
          message.packageName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AndroidApplication>): AndroidApplication {
    const message = createBaseAndroidApplication();
    message.sha1Fingerprint = object.sha1Fingerprint ?? "";
    message.packageName = object.packageName ?? "";
    return message;
  },
  fromAmino(object: AndroidApplicationAmino): AndroidApplication {
    const message = createBaseAndroidApplication();
    if (object.sha1_fingerprint !== undefined && object.sha1_fingerprint !== null) {
      message.sha1Fingerprint = object.sha1_fingerprint;
    }
    if (object.package_name !== undefined && object.package_name !== null) {
      message.packageName = object.package_name;
    }
    return message;
  },
  toAmino(message: AndroidApplication): AndroidApplicationAmino {
    const obj: any = {};
    obj.sha1_fingerprint = message.sha1Fingerprint === "" ? undefined : message.sha1Fingerprint;
    obj.package_name = message.packageName === "" ? undefined : message.packageName;
    return obj;
  },
  fromAminoMsg(object: AndroidApplicationAminoMsg): AndroidApplication {
    return AndroidApplication.fromAmino(object.value);
  },
  fromProtoMsg(message: AndroidApplicationProtoMsg): AndroidApplication {
    return AndroidApplication.decode(message.value);
  },
  toProto(message: AndroidApplication): Uint8Array {
    return AndroidApplication.encode(message).finish();
  },
  toProtoMsg(message: AndroidApplication): AndroidApplicationProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.AndroidApplication",
      value: AndroidApplication.encode(message).finish()
    };
  }
};
function createBaseIosKeyRestrictions(): IosKeyRestrictions {
  return {
    allowedBundleIds: []
  };
}
export const IosKeyRestrictions = {
  typeUrl: "/google.api.apikeys.v2.IosKeyRestrictions",
  encode(message: IosKeyRestrictions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedBundleIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IosKeyRestrictions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIosKeyRestrictions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedBundleIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IosKeyRestrictions>): IosKeyRestrictions {
    const message = createBaseIosKeyRestrictions();
    message.allowedBundleIds = object.allowedBundleIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: IosKeyRestrictionsAmino): IosKeyRestrictions {
    const message = createBaseIosKeyRestrictions();
    message.allowedBundleIds = object.allowed_bundle_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: IosKeyRestrictions): IosKeyRestrictionsAmino {
    const obj: any = {};
    if (message.allowedBundleIds) {
      obj.allowed_bundle_ids = message.allowedBundleIds.map(e => e);
    } else {
      obj.allowed_bundle_ids = message.allowedBundleIds;
    }
    return obj;
  },
  fromAminoMsg(object: IosKeyRestrictionsAminoMsg): IosKeyRestrictions {
    return IosKeyRestrictions.fromAmino(object.value);
  },
  fromProtoMsg(message: IosKeyRestrictionsProtoMsg): IosKeyRestrictions {
    return IosKeyRestrictions.decode(message.value);
  },
  toProto(message: IosKeyRestrictions): Uint8Array {
    return IosKeyRestrictions.encode(message).finish();
  },
  toProtoMsg(message: IosKeyRestrictions): IosKeyRestrictionsProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.IosKeyRestrictions",
      value: IosKeyRestrictions.encode(message).finish()
    };
  }
};
function createBaseApiTarget(): ApiTarget {
  return {
    service: "",
    methods: []
  };
}
export const ApiTarget = {
  typeUrl: "/google.api.apikeys.v2.ApiTarget",
  encode(message: ApiTarget, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ApiTarget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ApiTarget>): ApiTarget {
    const message = createBaseApiTarget();
    message.service = object.service ?? "";
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ApiTargetAmino): ApiTarget {
    const message = createBaseApiTarget();
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    }
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: ApiTarget): ApiTargetAmino {
    const obj: any = {};
    obj.service = message.service === "" ? undefined : message.service;
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: ApiTargetAminoMsg): ApiTarget {
    return ApiTarget.fromAmino(object.value);
  },
  fromProtoMsg(message: ApiTargetProtoMsg): ApiTarget {
    return ApiTarget.decode(message.value);
  },
  toProto(message: ApiTarget): Uint8Array {
    return ApiTarget.encode(message).finish();
  },
  toProtoMsg(message: ApiTarget): ApiTargetProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.ApiTarget",
      value: ApiTarget.encode(message).finish()
    };
  }
};