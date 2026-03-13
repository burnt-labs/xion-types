//@ts-nocheck
import { FieldMask, FieldMaskAmino, FieldMaskSDKType } from "../../../protobuf/field_mask";
import { Timestamp } from "../../../protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** The enablement status of the quota adjuster. */
export enum QuotaAdjusterSettings_Enablement {
  /** ENABLEMENT_UNSPECIFIED - The quota adjuster is in an unknown state. */
  ENABLEMENT_UNSPECIFIED = 0,
  /** ENABLED - The quota adjuster is enabled. */
  ENABLED = 2,
  /** DISABLED - The quota adjuster is disabled. */
  DISABLED = 3,
  UNRECOGNIZED = -1,
}
export const QuotaAdjusterSettings_EnablementSDKType = QuotaAdjusterSettings_Enablement;
export const QuotaAdjusterSettings_EnablementAmino = QuotaAdjusterSettings_Enablement;
export function quotaAdjusterSettings_EnablementFromJSON(object: any): QuotaAdjusterSettings_Enablement {
  switch (object) {
    case 0:
    case "ENABLEMENT_UNSPECIFIED":
      return QuotaAdjusterSettings_Enablement.ENABLEMENT_UNSPECIFIED;
    case 2:
    case "ENABLED":
      return QuotaAdjusterSettings_Enablement.ENABLED;
    case 3:
    case "DISABLED":
      return QuotaAdjusterSettings_Enablement.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaAdjusterSettings_Enablement.UNRECOGNIZED;
  }
}
export function quotaAdjusterSettings_EnablementToJSON(object: QuotaAdjusterSettings_Enablement): string {
  switch (object) {
    case QuotaAdjusterSettings_Enablement.ENABLEMENT_UNSPECIFIED:
      return "ENABLEMENT_UNSPECIFIED";
    case QuotaAdjusterSettings_Enablement.ENABLED:
      return "ENABLED";
    case QuotaAdjusterSettings_Enablement.DISABLED:
      return "DISABLED";
    case QuotaAdjusterSettings_Enablement.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request for getting QuotaAdjusterSettings */
export interface GetQuotaAdjusterSettingsRequest {
  /**
   * Required. Name of the `quotaAdjusterSettings` configuration. Only a single
   * setting per project is supported.
   */
  name: string;
}
export interface GetQuotaAdjusterSettingsRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest";
  value: Uint8Array;
}
/**
 * Request for getting QuotaAdjusterSettings
 * @name GetQuotaAdjusterSettingsRequestAmino
 * @package google.api.cloudquotas.v1beta
 * @see proto type: google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest
 */
export interface GetQuotaAdjusterSettingsRequestAmino {
  /**
   * Required. Name of the `quotaAdjusterSettings` configuration. Only a single
   * setting per project is supported.
   */
  name?: string;
}
export interface GetQuotaAdjusterSettingsRequestAminoMsg {
  type: "/google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest";
  value: GetQuotaAdjusterSettingsRequestAmino;
}
/** Request for getting QuotaAdjusterSettings */
export interface GetQuotaAdjusterSettingsRequestSDKType {
  name: string;
}
/** Request for updating QuotaAdjusterSettings */
export interface UpdateQuotaAdjusterSettingsRequest {
  /** Required. The QuotaAdjusterSettings to update. */
  quotaAdjusterSettings?: QuotaAdjusterSettings;
  /** Optional. The list of fields to update. */
  updateMask?: FieldMask;
  /**
   * Optional. If set to true, checks the syntax of the request but doesn't
   * update the quota adjuster settings value. Note that although a request can
   * be valid, that doesn't guarantee that the request will be fulfilled.
   */
  validateOnly: boolean;
}
export interface UpdateQuotaAdjusterSettingsRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest";
  value: Uint8Array;
}
/**
 * Request for updating QuotaAdjusterSettings
 * @name UpdateQuotaAdjusterSettingsRequestAmino
 * @package google.api.cloudquotas.v1beta
 * @see proto type: google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest
 */
export interface UpdateQuotaAdjusterSettingsRequestAmino {
  /**
   * Required. The QuotaAdjusterSettings to update.
   */
  quota_adjuster_settings?: QuotaAdjusterSettingsAmino;
  /**
   * Optional. The list of fields to update.
   */
  update_mask?: FieldMaskAmino;
  /**
   * Optional. If set to true, checks the syntax of the request but doesn't
   * update the quota adjuster settings value. Note that although a request can
   * be valid, that doesn't guarantee that the request will be fulfilled.
   */
  validate_only?: boolean;
}
export interface UpdateQuotaAdjusterSettingsRequestAminoMsg {
  type: "/google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest";
  value: UpdateQuotaAdjusterSettingsRequestAmino;
}
/** Request for updating QuotaAdjusterSettings */
export interface UpdateQuotaAdjusterSettingsRequestSDKType {
  quota_adjuster_settings?: QuotaAdjusterSettingsSDKType;
  update_mask?: FieldMaskSDKType;
  validate_only: boolean;
}
/**
 * The QuotaAdjusterSettings resource defines the settings for the Quota
 * Adjuster.
 */
export interface QuotaAdjusterSettings {
  /**
   * Identifier. Name of the config would be of the format:
   *   projects/PROJECT_NUMBER/locations/global/quotaAdjusterSettings
   *   folders/FOLDER_NUMBER/locations/global/quotaAdjusterSettings
   *   organizations/ORGANIZATION_NUMBER/locations/global/quotaAdjusterSettings
   */
  name: string;
  /** Optional. The configured value of the enablement at the given resource. */
  enablement: QuotaAdjusterSettings_Enablement;
  /**
   * Output only. The timestamp when the QuotaAdjusterSettings resource was last
   * updated.
   */
  updateTime?: Date;
  /**
   * Optional. The current ETag of the QuotaAdjusterSettings. If an ETag is
   * provided on update and does not match the current server's ETag in the
   * QuotaAdjusterSettings, the request is blocked and returns an ABORTED error.
   * See https://google.aip.dev/134#etags for more details on ETags.
   */
  etag: string;
  /**
   * Optional. Indicates whether the setting is inherited or explicitly
   * specified.
   */
  inherited: boolean;
  /**
   * Output only. The resource container from which the setting is inherited.
   * This refers to the  nearest ancestor with enablement set (either ENABLED or
   * DISABLED). The value can be an organizations/{organization_id},
   * folders/{folder_id}, or can be 'default' if no ancestor exists with
   * enablement set. The value will be empty when enablement is directly set on
   * this container.
   */
  inheritedFrom: string;
}
export interface QuotaAdjusterSettingsProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1beta.QuotaAdjusterSettings";
  value: Uint8Array;
}
/**
 * The QuotaAdjusterSettings resource defines the settings for the Quota
 * Adjuster.
 * @name QuotaAdjusterSettingsAmino
 * @package google.api.cloudquotas.v1beta
 * @see proto type: google.api.cloudquotas.v1beta.QuotaAdjusterSettings
 */
export interface QuotaAdjusterSettingsAmino {
  /**
   * Identifier. Name of the config would be of the format:
   *   projects/PROJECT_NUMBER/locations/global/quotaAdjusterSettings
   *   folders/FOLDER_NUMBER/locations/global/quotaAdjusterSettings
   *   organizations/ORGANIZATION_NUMBER/locations/global/quotaAdjusterSettings
   */
  name?: string;
  /**
   * Optional. The configured value of the enablement at the given resource.
   */
  enablement?: QuotaAdjusterSettings_Enablement;
  /**
   * Output only. The timestamp when the QuotaAdjusterSettings resource was last
   * updated.
   */
  update_time?: string;
  /**
   * Optional. The current ETag of the QuotaAdjusterSettings. If an ETag is
   * provided on update and does not match the current server's ETag in the
   * QuotaAdjusterSettings, the request is blocked and returns an ABORTED error.
   * See https://google.aip.dev/134#etags for more details on ETags.
   */
  etag?: string;
  /**
   * Optional. Indicates whether the setting is inherited or explicitly
   * specified.
   */
  inherited?: boolean;
  /**
   * Output only. The resource container from which the setting is inherited.
   * This refers to the  nearest ancestor with enablement set (either ENABLED or
   * DISABLED). The value can be an organizations/{organization_id},
   * folders/{folder_id}, or can be 'default' if no ancestor exists with
   * enablement set. The value will be empty when enablement is directly set on
   * this container.
   */
  inherited_from?: string;
}
export interface QuotaAdjusterSettingsAminoMsg {
  type: "/google.api.cloudquotas.v1beta.QuotaAdjusterSettings";
  value: QuotaAdjusterSettingsAmino;
}
/**
 * The QuotaAdjusterSettings resource defines the settings for the Quota
 * Adjuster.
 */
export interface QuotaAdjusterSettingsSDKType {
  name: string;
  enablement: QuotaAdjusterSettings_Enablement;
  update_time?: Date;
  etag: string;
  inherited: boolean;
  inherited_from: string;
}
function createBaseGetQuotaAdjusterSettingsRequest(): GetQuotaAdjusterSettingsRequest {
  return {
    name: ""
  };
}
export const GetQuotaAdjusterSettingsRequest = {
  typeUrl: "/google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest",
  encode(message: GetQuotaAdjusterSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetQuotaAdjusterSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuotaAdjusterSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetQuotaAdjusterSettingsRequest>): GetQuotaAdjusterSettingsRequest {
    const message = createBaseGetQuotaAdjusterSettingsRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: GetQuotaAdjusterSettingsRequestAmino): GetQuotaAdjusterSettingsRequest {
    const message = createBaseGetQuotaAdjusterSettingsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetQuotaAdjusterSettingsRequest): GetQuotaAdjusterSettingsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetQuotaAdjusterSettingsRequestAminoMsg): GetQuotaAdjusterSettingsRequest {
    return GetQuotaAdjusterSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetQuotaAdjusterSettingsRequestProtoMsg): GetQuotaAdjusterSettingsRequest {
    return GetQuotaAdjusterSettingsRequest.decode(message.value);
  },
  toProto(message: GetQuotaAdjusterSettingsRequest): Uint8Array {
    return GetQuotaAdjusterSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetQuotaAdjusterSettingsRequest): GetQuotaAdjusterSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1beta.GetQuotaAdjusterSettingsRequest",
      value: GetQuotaAdjusterSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateQuotaAdjusterSettingsRequest(): UpdateQuotaAdjusterSettingsRequest {
  return {
    quotaAdjusterSettings: undefined,
    updateMask: undefined,
    validateOnly: false
  };
}
export const UpdateQuotaAdjusterSettingsRequest = {
  typeUrl: "/google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest",
  encode(message: UpdateQuotaAdjusterSettingsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quotaAdjusterSettings !== undefined) {
      QuotaAdjusterSettings.encode(message.quotaAdjusterSettings, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    if (message.validateOnly === true) {
      writer.uint32(24).bool(message.validateOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateQuotaAdjusterSettingsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuotaAdjusterSettingsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotaAdjusterSettings = QuotaAdjusterSettings.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 3:
          message.validateOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateQuotaAdjusterSettingsRequest>): UpdateQuotaAdjusterSettingsRequest {
    const message = createBaseUpdateQuotaAdjusterSettingsRequest();
    message.quotaAdjusterSettings = object.quotaAdjusterSettings !== undefined && object.quotaAdjusterSettings !== null ? QuotaAdjusterSettings.fromPartial(object.quotaAdjusterSettings) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    message.validateOnly = object.validateOnly ?? false;
    return message;
  },
  fromAmino(object: UpdateQuotaAdjusterSettingsRequestAmino): UpdateQuotaAdjusterSettingsRequest {
    const message = createBaseUpdateQuotaAdjusterSettingsRequest();
    if (object.quota_adjuster_settings !== undefined && object.quota_adjuster_settings !== null) {
      message.quotaAdjusterSettings = QuotaAdjusterSettings.fromAmino(object.quota_adjuster_settings);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    if (object.validate_only !== undefined && object.validate_only !== null) {
      message.validateOnly = object.validate_only;
    }
    return message;
  },
  toAmino(message: UpdateQuotaAdjusterSettingsRequest): UpdateQuotaAdjusterSettingsRequestAmino {
    const obj: any = {};
    obj.quota_adjuster_settings = message.quotaAdjusterSettings ? QuotaAdjusterSettings.toAmino(message.quotaAdjusterSettings) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    obj.validate_only = message.validateOnly === false ? undefined : message.validateOnly;
    return obj;
  },
  fromAminoMsg(object: UpdateQuotaAdjusterSettingsRequestAminoMsg): UpdateQuotaAdjusterSettingsRequest {
    return UpdateQuotaAdjusterSettingsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateQuotaAdjusterSettingsRequestProtoMsg): UpdateQuotaAdjusterSettingsRequest {
    return UpdateQuotaAdjusterSettingsRequest.decode(message.value);
  },
  toProto(message: UpdateQuotaAdjusterSettingsRequest): Uint8Array {
    return UpdateQuotaAdjusterSettingsRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateQuotaAdjusterSettingsRequest): UpdateQuotaAdjusterSettingsRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1beta.UpdateQuotaAdjusterSettingsRequest",
      value: UpdateQuotaAdjusterSettingsRequest.encode(message).finish()
    };
  }
};
function createBaseQuotaAdjusterSettings(): QuotaAdjusterSettings {
  return {
    name: "",
    enablement: 0,
    updateTime: undefined,
    etag: "",
    inherited: false,
    inheritedFrom: ""
  };
}
export const QuotaAdjusterSettings = {
  typeUrl: "/google.api.cloudquotas.v1beta.QuotaAdjusterSettings",
  encode(message: QuotaAdjusterSettings, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.enablement !== 0) {
      writer.uint32(16).int32(message.enablement);
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(50).string(message.etag);
    }
    if (message.inherited === true) {
      writer.uint32(56).bool(message.inherited);
    }
    if (message.inheritedFrom !== "") {
      writer.uint32(66).string(message.inheritedFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaAdjusterSettings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaAdjusterSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.enablement = reader.int32() as any;
          break;
        case 5:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.etag = reader.string();
          break;
        case 7:
          message.inherited = reader.bool();
          break;
        case 8:
          message.inheritedFrom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaAdjusterSettings>): QuotaAdjusterSettings {
    const message = createBaseQuotaAdjusterSettings();
    message.name = object.name ?? "";
    message.enablement = object.enablement ?? 0;
    message.updateTime = object.updateTime ?? undefined;
    message.etag = object.etag ?? "";
    message.inherited = object.inherited ?? false;
    message.inheritedFrom = object.inheritedFrom ?? "";
    return message;
  },
  fromAmino(object: QuotaAdjusterSettingsAmino): QuotaAdjusterSettings {
    const message = createBaseQuotaAdjusterSettings();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.enablement !== undefined && object.enablement !== null) {
      message.enablement = object.enablement;
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    }
    if (object.inherited !== undefined && object.inherited !== null) {
      message.inherited = object.inherited;
    }
    if (object.inherited_from !== undefined && object.inherited_from !== null) {
      message.inheritedFrom = object.inherited_from;
    }
    return message;
  },
  toAmino(message: QuotaAdjusterSettings): QuotaAdjusterSettingsAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.enablement = message.enablement === 0 ? undefined : message.enablement;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.etag = message.etag === "" ? undefined : message.etag;
    obj.inherited = message.inherited === false ? undefined : message.inherited;
    obj.inherited_from = message.inheritedFrom === "" ? undefined : message.inheritedFrom;
    return obj;
  },
  fromAminoMsg(object: QuotaAdjusterSettingsAminoMsg): QuotaAdjusterSettings {
    return QuotaAdjusterSettings.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaAdjusterSettingsProtoMsg): QuotaAdjusterSettings {
    return QuotaAdjusterSettings.decode(message.value);
  },
  toProto(message: QuotaAdjusterSettings): Uint8Array {
    return QuotaAdjusterSettings.encode(message).finish();
  },
  toProtoMsg(message: QuotaAdjusterSettings): QuotaAdjusterSettingsProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1beta.QuotaAdjusterSettings",
      value: QuotaAdjusterSettings.encode(message).finish()
    };
  }
};