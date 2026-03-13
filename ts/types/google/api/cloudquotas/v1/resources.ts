//@ts-nocheck
import { Timestamp } from "../../../protobuf/timestamp";
import { Int64Value, Int64ValueAmino, Int64ValueSDKType } from "../../../protobuf/wrappers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp } from "../../../../helpers";
/** Enumerations of quota safety checks. */
export enum QuotaSafetyCheck {
  /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
  QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
  /**
   * QUOTA_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
   * limit to be lower than the consumer's quota usage.
   */
  QUOTA_DECREASE_BELOW_USAGE = 1,
  /**
   * QUOTA_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
   * limit to decrease by more than 10 percent.
   */
  QUOTA_DECREASE_PERCENTAGE_TOO_HIGH = 2,
  UNRECOGNIZED = -1,
}
export const QuotaSafetyCheckSDKType = QuotaSafetyCheck;
export const QuotaSafetyCheckAmino = QuotaSafetyCheck;
export function quotaSafetyCheckFromJSON(object: any): QuotaSafetyCheck {
  switch (object) {
    case 0:
    case "QUOTA_SAFETY_CHECK_UNSPECIFIED":
      return QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED;
    case 1:
    case "QUOTA_DECREASE_BELOW_USAGE":
      return QuotaSafetyCheck.QUOTA_DECREASE_BELOW_USAGE;
    case 2:
    case "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH":
      return QuotaSafetyCheck.QUOTA_DECREASE_PERCENTAGE_TOO_HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaSafetyCheck.UNRECOGNIZED;
  }
}
export function quotaSafetyCheckToJSON(object: QuotaSafetyCheck): string {
  switch (object) {
    case QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED:
      return "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    case QuotaSafetyCheck.QUOTA_DECREASE_BELOW_USAGE:
      return "QUOTA_DECREASE_BELOW_USAGE";
    case QuotaSafetyCheck.QUOTA_DECREASE_PERCENTAGE_TOO_HIGH:
      return "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH";
    case QuotaSafetyCheck.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The enumeration of the types of a cloud resource container. */
export enum QuotaInfo_ContainerType {
  /** CONTAINER_TYPE_UNSPECIFIED - Unspecified container type. */
  CONTAINER_TYPE_UNSPECIFIED = 0,
  /** PROJECT - consumer project */
  PROJECT = 1,
  /** FOLDER - folder */
  FOLDER = 2,
  /** ORGANIZATION - organization */
  ORGANIZATION = 3,
  UNRECOGNIZED = -1,
}
export const QuotaInfo_ContainerTypeSDKType = QuotaInfo_ContainerType;
export const QuotaInfo_ContainerTypeAmino = QuotaInfo_ContainerType;
export function quotaInfo_ContainerTypeFromJSON(object: any): QuotaInfo_ContainerType {
  switch (object) {
    case 0:
    case "CONTAINER_TYPE_UNSPECIFIED":
      return QuotaInfo_ContainerType.CONTAINER_TYPE_UNSPECIFIED;
    case 1:
    case "PROJECT":
      return QuotaInfo_ContainerType.PROJECT;
    case 2:
    case "FOLDER":
      return QuotaInfo_ContainerType.FOLDER;
    case 3:
    case "ORGANIZATION":
      return QuotaInfo_ContainerType.ORGANIZATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaInfo_ContainerType.UNRECOGNIZED;
  }
}
export function quotaInfo_ContainerTypeToJSON(object: QuotaInfo_ContainerType): string {
  switch (object) {
    case QuotaInfo_ContainerType.CONTAINER_TYPE_UNSPECIFIED:
      return "CONTAINER_TYPE_UNSPECIFIED";
    case QuotaInfo_ContainerType.PROJECT:
      return "PROJECT";
    case QuotaInfo_ContainerType.FOLDER:
      return "FOLDER";
    case QuotaInfo_ContainerType.ORGANIZATION:
      return "ORGANIZATION";
    case QuotaInfo_ContainerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * The enumeration of reasons when it is ineligible to request increase
 * adjustment.
 */
export enum QuotaIncreaseEligibility_IneligibilityReason {
  /** INELIGIBILITY_REASON_UNSPECIFIED - Default value when is_eligible is true. */
  INELIGIBILITY_REASON_UNSPECIFIED = 0,
  /** NO_VALID_BILLING_ACCOUNT - The container is not linked with a valid billing account. */
  NO_VALID_BILLING_ACCOUNT = 1,
  /** NOT_SUPPORTED - Quota increase is not supported for the quota. */
  NOT_SUPPORTED = 3,
  /** NOT_ENOUGH_USAGE_HISTORY - There is not enough usage history to determine the eligibility. */
  NOT_ENOUGH_USAGE_HISTORY = 4,
  /** OTHER - Other reasons. */
  OTHER = 2,
  UNRECOGNIZED = -1,
}
export const QuotaIncreaseEligibility_IneligibilityReasonSDKType = QuotaIncreaseEligibility_IneligibilityReason;
export const QuotaIncreaseEligibility_IneligibilityReasonAmino = QuotaIncreaseEligibility_IneligibilityReason;
export function quotaIncreaseEligibility_IneligibilityReasonFromJSON(object: any): QuotaIncreaseEligibility_IneligibilityReason {
  switch (object) {
    case 0:
    case "INELIGIBILITY_REASON_UNSPECIFIED":
      return QuotaIncreaseEligibility_IneligibilityReason.INELIGIBILITY_REASON_UNSPECIFIED;
    case 1:
    case "NO_VALID_BILLING_ACCOUNT":
      return QuotaIncreaseEligibility_IneligibilityReason.NO_VALID_BILLING_ACCOUNT;
    case 3:
    case "NOT_SUPPORTED":
      return QuotaIncreaseEligibility_IneligibilityReason.NOT_SUPPORTED;
    case 4:
    case "NOT_ENOUGH_USAGE_HISTORY":
      return QuotaIncreaseEligibility_IneligibilityReason.NOT_ENOUGH_USAGE_HISTORY;
    case 2:
    case "OTHER":
      return QuotaIncreaseEligibility_IneligibilityReason.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaIncreaseEligibility_IneligibilityReason.UNRECOGNIZED;
  }
}
export function quotaIncreaseEligibility_IneligibilityReasonToJSON(object: QuotaIncreaseEligibility_IneligibilityReason): string {
  switch (object) {
    case QuotaIncreaseEligibility_IneligibilityReason.INELIGIBILITY_REASON_UNSPECIFIED:
      return "INELIGIBILITY_REASON_UNSPECIFIED";
    case QuotaIncreaseEligibility_IneligibilityReason.NO_VALID_BILLING_ACCOUNT:
      return "NO_VALID_BILLING_ACCOUNT";
    case QuotaIncreaseEligibility_IneligibilityReason.NOT_SUPPORTED:
      return "NOT_SUPPORTED";
    case QuotaIncreaseEligibility_IneligibilityReason.NOT_ENOUGH_USAGE_HISTORY:
      return "NOT_ENOUGH_USAGE_HISTORY";
    case QuotaIncreaseEligibility_IneligibilityReason.OTHER:
      return "OTHER";
    case QuotaIncreaseEligibility_IneligibilityReason.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The enumeration of the origins of quota preference requests. */
export enum QuotaConfig_Origin {
  /** ORIGIN_UNSPECIFIED - The unspecified value. */
  ORIGIN_UNSPECIFIED = 0,
  /** CLOUD_CONSOLE - Created through Cloud Console. */
  CLOUD_CONSOLE = 1,
  /** AUTO_ADJUSTER - Generated by automatic quota adjustment. */
  AUTO_ADJUSTER = 2,
  UNRECOGNIZED = -1,
}
export const QuotaConfig_OriginSDKType = QuotaConfig_Origin;
export const QuotaConfig_OriginAmino = QuotaConfig_Origin;
export function quotaConfig_OriginFromJSON(object: any): QuotaConfig_Origin {
  switch (object) {
    case 0:
    case "ORIGIN_UNSPECIFIED":
      return QuotaConfig_Origin.ORIGIN_UNSPECIFIED;
    case 1:
    case "CLOUD_CONSOLE":
      return QuotaConfig_Origin.CLOUD_CONSOLE;
    case 2:
    case "AUTO_ADJUSTER":
      return QuotaConfig_Origin.AUTO_ADJUSTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaConfig_Origin.UNRECOGNIZED;
  }
}
export function quotaConfig_OriginToJSON(object: QuotaConfig_Origin): string {
  switch (object) {
    case QuotaConfig_Origin.ORIGIN_UNSPECIFIED:
      return "ORIGIN_UNSPECIFIED";
    case QuotaConfig_Origin.CLOUD_CONSOLE:
      return "CLOUD_CONSOLE";
    case QuotaConfig_Origin.AUTO_ADJUSTER:
      return "AUTO_ADJUSTER";
    case QuotaConfig_Origin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * QuotaInfo represents information about a particular quota for a given
 * project, folder or organization.
 */
export interface QuotaInfo {
  /**
   * Resource name of this QuotaInfo.
   * The ID component following "locations/" must be "global".
   * Example:
   * `projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion`
   */
  name: string;
  /**
   * The id of the quota, which is unquie within the service.
   * Example: `CpusPerProjectPerRegion`
   */
  quotaId: string;
  /**
   * The metric of the quota. It specifies the resources consumption the quota
   * is defined for.
   * Example: `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The name of the service in which the quota is defined.
   * Example: `compute.googleapis.com`
   */
  service: string;
  /**
   * Whether this is a precise quota. A precise quota is tracked with absolute
   * precision. In contrast, an imprecise quota is not tracked with precision.
   */
  isPrecise: boolean;
  /**
   * The reset time interval for the quota. Refresh interval applies to rate
   * quota only.
   * Example: "minute" for per minute, "day" for per day, or "10 seconds" for
   * every 10 seconds.
   */
  refreshInterval: string;
  /** The container type of the QuotaInfo. */
  containerType: QuotaInfo_ContainerType;
  /** The dimensions the quota is defined on. */
  dimensions: string[];
  /** The display name of the quota metric */
  metricDisplayName: string;
  /** The display name of the quota. */
  quotaDisplayName: string;
  /** The unit in which the metric value is reported, e.g., "MByte". */
  metricUnit: string;
  /** Whether it is eligible to request a higher quota value for this quota. */
  quotaIncreaseEligibility?: QuotaIncreaseEligibility;
  /** Whether the quota value is fixed or adjustable */
  isFixed: boolean;
  /**
   * The collection of dimensions info ordered by their dimensions from more
   * specific ones to less specific ones.
   */
  dimensionsInfos: DimensionsInfo[];
  /**
   * Whether the quota is a concurrent quota. Concurrent quotas are enforced
   * on the total number of concurrent operations in flight at any given time.
   */
  isConcurrent: boolean;
  /**
   * URI to the page where users can request more quota for the cloud
   * service—for example,
   * https://console.cloud.google.com/iam-admin/quotas.
   */
  serviceRequestQuotaUri: string;
}
export interface QuotaInfoProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.QuotaInfo";
  value: Uint8Array;
}
/**
 * QuotaInfo represents information about a particular quota for a given
 * project, folder or organization.
 * @name QuotaInfoAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaInfo
 */
export interface QuotaInfoAmino {
  /**
   * Resource name of this QuotaInfo.
   * The ID component following "locations/" must be "global".
   * Example:
   * `projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion`
   */
  name?: string;
  /**
   * The id of the quota, which is unquie within the service.
   * Example: `CpusPerProjectPerRegion`
   */
  quota_id?: string;
  /**
   * The metric of the quota. It specifies the resources consumption the quota
   * is defined for.
   * Example: `compute.googleapis.com/cpus`
   */
  metric?: string;
  /**
   * The name of the service in which the quota is defined.
   * Example: `compute.googleapis.com`
   */
  service?: string;
  /**
   * Whether this is a precise quota. A precise quota is tracked with absolute
   * precision. In contrast, an imprecise quota is not tracked with precision.
   */
  is_precise?: boolean;
  /**
   * The reset time interval for the quota. Refresh interval applies to rate
   * quota only.
   * Example: "minute" for per minute, "day" for per day, or "10 seconds" for
   * every 10 seconds.
   */
  refresh_interval?: string;
  /**
   * The container type of the QuotaInfo.
   */
  container_type?: QuotaInfo_ContainerType;
  /**
   * The dimensions the quota is defined on.
   */
  dimensions?: string[];
  /**
   * The display name of the quota metric
   */
  metric_display_name?: string;
  /**
   * The display name of the quota.
   */
  quota_display_name?: string;
  /**
   * The unit in which the metric value is reported, e.g., "MByte".
   */
  metric_unit?: string;
  /**
   * Whether it is eligible to request a higher quota value for this quota.
   */
  quota_increase_eligibility?: QuotaIncreaseEligibilityAmino;
  /**
   * Whether the quota value is fixed or adjustable
   */
  is_fixed?: boolean;
  /**
   * The collection of dimensions info ordered by their dimensions from more
   * specific ones to less specific ones.
   */
  dimensions_infos?: DimensionsInfoAmino[];
  /**
   * Whether the quota is a concurrent quota. Concurrent quotas are enforced
   * on the total number of concurrent operations in flight at any given time.
   */
  is_concurrent?: boolean;
  /**
   * URI to the page where users can request more quota for the cloud
   * service—for example,
   * https://console.cloud.google.com/iam-admin/quotas.
   */
  service_request_quota_uri?: string;
}
export interface QuotaInfoAminoMsg {
  type: "/google.api.cloudquotas.v1.QuotaInfo";
  value: QuotaInfoAmino;
}
/**
 * QuotaInfo represents information about a particular quota for a given
 * project, folder or organization.
 */
export interface QuotaInfoSDKType {
  name: string;
  quota_id: string;
  metric: string;
  service: string;
  is_precise: boolean;
  refresh_interval: string;
  container_type: QuotaInfo_ContainerType;
  dimensions: string[];
  metric_display_name: string;
  quota_display_name: string;
  metric_unit: string;
  quota_increase_eligibility?: QuotaIncreaseEligibilitySDKType;
  is_fixed: boolean;
  dimensions_infos: DimensionsInfoSDKType[];
  is_concurrent: boolean;
  service_request_quota_uri: string;
}
/** Eligibility information regarding requesting increase adjustment of a quota. */
export interface QuotaIncreaseEligibility {
  /** Whether a higher quota value can be requested for the quota. */
  isEligible: boolean;
  /**
   * The reason of why it is ineligible to request increased value of the quota.
   * If the is_eligible field is true, it defaults to
   * INELIGIBILITY_REASON_UNSPECIFIED.
   */
  ineligibilityReason: QuotaIncreaseEligibility_IneligibilityReason;
}
export interface QuotaIncreaseEligibilityProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.QuotaIncreaseEligibility";
  value: Uint8Array;
}
/**
 * Eligibility information regarding requesting increase adjustment of a quota.
 * @name QuotaIncreaseEligibilityAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaIncreaseEligibility
 */
export interface QuotaIncreaseEligibilityAmino {
  /**
   * Whether a higher quota value can be requested for the quota.
   */
  is_eligible?: boolean;
  /**
   * The reason of why it is ineligible to request increased value of the quota.
   * If the is_eligible field is true, it defaults to
   * INELIGIBILITY_REASON_UNSPECIFIED.
   */
  ineligibility_reason?: QuotaIncreaseEligibility_IneligibilityReason;
}
export interface QuotaIncreaseEligibilityAminoMsg {
  type: "/google.api.cloudquotas.v1.QuotaIncreaseEligibility";
  value: QuotaIncreaseEligibilityAmino;
}
/** Eligibility information regarding requesting increase adjustment of a quota. */
export interface QuotaIncreaseEligibilitySDKType {
  is_eligible: boolean;
  ineligibility_reason: QuotaIncreaseEligibility_IneligibilityReason;
}
export interface QuotaPreference_DimensionsEntry {
  key: string;
  value: string;
}
export interface QuotaPreference_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name QuotaPreference_DimensionsEntryAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaPreference_DimensionsEntry
 */
export interface QuotaPreference_DimensionsEntryAmino {
  key?: string;
  value?: string;
}
export interface QuotaPreference_DimensionsEntryAminoMsg {
  type: string;
  value: QuotaPreference_DimensionsEntryAmino;
}
export interface QuotaPreference_DimensionsEntrySDKType {
  key: string;
  value: string;
}
/**
 * QuotaPreference represents the preferred quota configuration specified for
 * a project, folder or organization. There is only one QuotaPreference
 * resource for a quota value targeting a unique set of dimensions.
 */
export interface QuotaPreference {
  /**
   * Required except in the CREATE requests.
   * The resource name of the quota preference.
   * The ID component following "locations/" must be "global".
   * Example:
   * `projects/123/locations/global/quotaPreferences/my-config-for-us-east1`
   */
  name: string;
  /**
   * Immutable. The dimensions that this quota preference applies to. The key of
   * the map entry is the name of a dimension, such as "region", "zone",
   * "network_id", and the value of the map entry is the dimension value.
   * 
   * If a dimension is missing from the map of dimensions, the quota preference
   * applies to all the dimension values except for those that have other quota
   * preferences configured for the specific value.
   * 
   * NOTE: QuotaPreferences can only be applied across all values of "user" and
   * "resource" dimension. Do not set values for "user" or "resource" in the
   * dimension map.
   * 
   * Example: {"provider", "Foo Inc"} where "provider" is a service specific
   * dimension.
   */
  dimensions: {
    [key: string]: string;
  };
  /** Required. Preferred quota configuration. */
  quotaConfig?: QuotaConfig;
  /**
   * Optional. The current etag of the quota preference. If an etag is provided
   * on update and does not match the current server's etag of the quota
   * preference, the request will be blocked and an ABORTED error will be
   * returned. See https://google.aip.dev/134#etags for more details on etags.
   */
  etag: string;
  /** Output only. Create time stamp */
  createTime?: Date;
  /** Output only. Update time stamp */
  updateTime?: Date;
  /** Required. The name of the service to which the quota preference is applied. */
  service: string;
  /**
   * Required. The id of the quota to which the quota preference is applied. A
   * quota name is unique in the service. Example: `CpusPerProjectPerRegion`
   */
  quotaId: string;
  /**
   * Output only. Is the quota preference pending Google Cloud approval and
   * fulfillment.
   */
  reconciling: boolean;
  /** The reason / justification for this quota preference. */
  justification: string;
  /**
   * Input only. An email address that can be used to contact the the user, in
   * case Google Cloud needs more information to make a decision before
   * additional quota can be granted.
   * 
   * When requesting a quota increase, the email address is required.
   * When requesting a quota decrease, the email address is optional.
   * For example, the email address is optional when the
   * `QuotaConfig.preferred_value` is smaller than the
   * `QuotaDetails.reset_value`.
   */
  contactEmail: string;
}
export interface QuotaPreferenceProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.QuotaPreference";
  value: Uint8Array;
}
/**
 * QuotaPreference represents the preferred quota configuration specified for
 * a project, folder or organization. There is only one QuotaPreference
 * resource for a quota value targeting a unique set of dimensions.
 * @name QuotaPreferenceAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaPreference
 */
export interface QuotaPreferenceAmino {
  /**
   * Required except in the CREATE requests.
   * The resource name of the quota preference.
   * The ID component following "locations/" must be "global".
   * Example:
   * `projects/123/locations/global/quotaPreferences/my-config-for-us-east1`
   */
  name?: string;
  /**
   * Immutable. The dimensions that this quota preference applies to. The key of
   * the map entry is the name of a dimension, such as "region", "zone",
   * "network_id", and the value of the map entry is the dimension value.
   * 
   * If a dimension is missing from the map of dimensions, the quota preference
   * applies to all the dimension values except for those that have other quota
   * preferences configured for the specific value.
   * 
   * NOTE: QuotaPreferences can only be applied across all values of "user" and
   * "resource" dimension. Do not set values for "user" or "resource" in the
   * dimension map.
   * 
   * Example: {"provider", "Foo Inc"} where "provider" is a service specific
   * dimension.
   */
  dimensions?: {
    [key: string]: string;
  };
  /**
   * Required. Preferred quota configuration.
   */
  quota_config?: QuotaConfigAmino;
  /**
   * Optional. The current etag of the quota preference. If an etag is provided
   * on update and does not match the current server's etag of the quota
   * preference, the request will be blocked and an ABORTED error will be
   * returned. See https://google.aip.dev/134#etags for more details on etags.
   */
  etag?: string;
  /**
   * Output only. Create time stamp
   */
  create_time?: string;
  /**
   * Output only. Update time stamp
   */
  update_time?: string;
  /**
   * Required. The name of the service to which the quota preference is applied.
   */
  service?: string;
  /**
   * Required. The id of the quota to which the quota preference is applied. A
   * quota name is unique in the service. Example: `CpusPerProjectPerRegion`
   */
  quota_id?: string;
  /**
   * Output only. Is the quota preference pending Google Cloud approval and
   * fulfillment.
   */
  reconciling?: boolean;
  /**
   * The reason / justification for this quota preference.
   */
  justification?: string;
  /**
   * Input only. An email address that can be used to contact the the user, in
   * case Google Cloud needs more information to make a decision before
   * additional quota can be granted.
   * 
   * When requesting a quota increase, the email address is required.
   * When requesting a quota decrease, the email address is optional.
   * For example, the email address is optional when the
   * `QuotaConfig.preferred_value` is smaller than the
   * `QuotaDetails.reset_value`.
   */
  contact_email?: string;
}
export interface QuotaPreferenceAminoMsg {
  type: "/google.api.cloudquotas.v1.QuotaPreference";
  value: QuotaPreferenceAmino;
}
/**
 * QuotaPreference represents the preferred quota configuration specified for
 * a project, folder or organization. There is only one QuotaPreference
 * resource for a quota value targeting a unique set of dimensions.
 */
export interface QuotaPreferenceSDKType {
  name: string;
  dimensions: {
    [key: string]: string;
  };
  quota_config?: QuotaConfigSDKType;
  etag: string;
  create_time?: Date;
  update_time?: Date;
  service: string;
  quota_id: string;
  reconciling: boolean;
  justification: string;
  contact_email: string;
}
export interface QuotaConfig_AnnotationsEntry {
  key: string;
  value: string;
}
export interface QuotaConfig_AnnotationsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name QuotaConfig_AnnotationsEntryAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaConfig_AnnotationsEntry
 */
export interface QuotaConfig_AnnotationsEntryAmino {
  key?: string;
  value?: string;
}
export interface QuotaConfig_AnnotationsEntryAminoMsg {
  type: string;
  value: QuotaConfig_AnnotationsEntryAmino;
}
export interface QuotaConfig_AnnotationsEntrySDKType {
  key: string;
  value: string;
}
/** The preferred quota configuration. */
export interface QuotaConfig {
  /**
   * Required. The preferred value. Must be greater than or equal to -1. If set
   * to -1, it means the value is "unlimited".
   */
  preferredValue: bigint;
  /** Output only. Optional details about the state of this quota preference. */
  stateDetail: string;
  /** Output only. Granted quota value. */
  grantedValue?: Int64Value;
  /**
   * Output only. The trace id that the Google Cloud uses to provision the
   * requested quota. This trace id may be used by the client to contact Cloud
   * support to track the state of a quota preference request. The trace id is
   * only produced for increase requests and is unique for each request. The
   * quota decrease requests do not have a trace id.
   */
  traceId: string;
  /**
   * Optional. The annotations map for clients to store small amounts of
   * arbitrary data. Do not put PII or other sensitive information here. See
   * https://google.aip.dev/128#annotations
   */
  annotations: {
    [key: string]: string;
  };
  /** Output only. The origin of the quota preference request. */
  requestOrigin: QuotaConfig_Origin;
}
export interface QuotaConfigProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.QuotaConfig";
  value: Uint8Array;
}
/**
 * The preferred quota configuration.
 * @name QuotaConfigAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaConfig
 */
export interface QuotaConfigAmino {
  /**
   * Required. The preferred value. Must be greater than or equal to -1. If set
   * to -1, it means the value is "unlimited".
   */
  preferred_value?: string;
  /**
   * Output only. Optional details about the state of this quota preference.
   */
  state_detail?: string;
  /**
   * Output only. Granted quota value.
   */
  granted_value?: Int64ValueAmino;
  /**
   * Output only. The trace id that the Google Cloud uses to provision the
   * requested quota. This trace id may be used by the client to contact Cloud
   * support to track the state of a quota preference request. The trace id is
   * only produced for increase requests and is unique for each request. The
   * quota decrease requests do not have a trace id.
   */
  trace_id?: string;
  /**
   * Optional. The annotations map for clients to store small amounts of
   * arbitrary data. Do not put PII or other sensitive information here. See
   * https://google.aip.dev/128#annotations
   */
  annotations?: {
    [key: string]: string;
  };
  /**
   * Output only. The origin of the quota preference request.
   */
  request_origin?: QuotaConfig_Origin;
}
export interface QuotaConfigAminoMsg {
  type: "/google.api.cloudquotas.v1.QuotaConfig";
  value: QuotaConfigAmino;
}
/** The preferred quota configuration. */
export interface QuotaConfigSDKType {
  preferred_value: bigint;
  state_detail: string;
  granted_value?: Int64ValueSDKType;
  trace_id: string;
  annotations: {
    [key: string]: string;
  };
  request_origin: QuotaConfig_Origin;
}
export interface DimensionsInfo_DimensionsEntry {
  key: string;
  value: string;
}
export interface DimensionsInfo_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name DimensionsInfo_DimensionsEntryAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.DimensionsInfo_DimensionsEntry
 */
export interface DimensionsInfo_DimensionsEntryAmino {
  key?: string;
  value?: string;
}
export interface DimensionsInfo_DimensionsEntryAminoMsg {
  type: string;
  value: DimensionsInfo_DimensionsEntryAmino;
}
export interface DimensionsInfo_DimensionsEntrySDKType {
  key: string;
  value: string;
}
/**
 * The detailed quota information such as effective quota value for a
 * combination of dimensions.
 */
export interface DimensionsInfo {
  /**
   * The map of dimensions for this dimensions info. The key of a map entry
   * is "region", "zone" or the name of a service specific dimension, and the
   * value of a map entry is the value of the dimension.  If a dimension does
   * not appear in the map of dimensions, the dimensions info applies to all
   * the dimension values except for those that have another DimenisonInfo
   * instance configured for the specific value.
   * Example: {"provider" : "Foo Inc"} where "provider" is a service specific
   * dimension of a quota.
   */
  dimensions: {
    [key: string]: string;
  };
  /** Quota details for the specified dimensions. */
  details?: QuotaDetails;
  /**
   * The applicable regions or zones of this dimensions info. The field will be
   * set to ['global'] for quotas that are not per region or per zone.
   * Otherwise, it will be set to the list of locations this dimension info is
   * applicable to.
   */
  applicableLocations: string[];
}
export interface DimensionsInfoProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.DimensionsInfo";
  value: Uint8Array;
}
/**
 * The detailed quota information such as effective quota value for a
 * combination of dimensions.
 * @name DimensionsInfoAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.DimensionsInfo
 */
export interface DimensionsInfoAmino {
  /**
   * The map of dimensions for this dimensions info. The key of a map entry
   * is "region", "zone" or the name of a service specific dimension, and the
   * value of a map entry is the value of the dimension.  If a dimension does
   * not appear in the map of dimensions, the dimensions info applies to all
   * the dimension values except for those that have another DimenisonInfo
   * instance configured for the specific value.
   * Example: {"provider" : "Foo Inc"} where "provider" is a service specific
   * dimension of a quota.
   */
  dimensions?: {
    [key: string]: string;
  };
  /**
   * Quota details for the specified dimensions.
   */
  details?: QuotaDetailsAmino;
  /**
   * The applicable regions or zones of this dimensions info. The field will be
   * set to ['global'] for quotas that are not per region or per zone.
   * Otherwise, it will be set to the list of locations this dimension info is
   * applicable to.
   */
  applicable_locations?: string[];
}
export interface DimensionsInfoAminoMsg {
  type: "/google.api.cloudquotas.v1.DimensionsInfo";
  value: DimensionsInfoAmino;
}
/**
 * The detailed quota information such as effective quota value for a
 * combination of dimensions.
 */
export interface DimensionsInfoSDKType {
  dimensions: {
    [key: string]: string;
  };
  details?: QuotaDetailsSDKType;
  applicable_locations: string[];
}
/** The quota details for a map of dimensions. */
export interface QuotaDetails {
  /** The value currently in effect and being enforced. */
  value: bigint;
  /**
   * Rollout information of this quota.
   * This field is present only if the effective limit will change due to the
   * ongoing rollout of the service config.
   */
  rolloutInfo?: RolloutInfo;
}
export interface QuotaDetailsProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.QuotaDetails";
  value: Uint8Array;
}
/**
 * The quota details for a map of dimensions.
 * @name QuotaDetailsAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.QuotaDetails
 */
export interface QuotaDetailsAmino {
  /**
   * The value currently in effect and being enforced.
   */
  value?: string;
  /**
   * Rollout information of this quota.
   * This field is present only if the effective limit will change due to the
   * ongoing rollout of the service config.
   */
  rollout_info?: RolloutInfoAmino;
}
export interface QuotaDetailsAminoMsg {
  type: "/google.api.cloudquotas.v1.QuotaDetails";
  value: QuotaDetailsAmino;
}
/** The quota details for a map of dimensions. */
export interface QuotaDetailsSDKType {
  value: bigint;
  rollout_info?: RolloutInfoSDKType;
}
/** [Output only] Rollout information of a quota. */
export interface RolloutInfo {
  /** Whether there is an ongoing rollout for a quota or not. */
  ongoingRollout: boolean;
}
export interface RolloutInfoProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.RolloutInfo";
  value: Uint8Array;
}
/**
 * [Output only] Rollout information of a quota.
 * @name RolloutInfoAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.RolloutInfo
 */
export interface RolloutInfoAmino {
  /**
   * Whether there is an ongoing rollout for a quota or not.
   */
  ongoing_rollout?: boolean;
}
export interface RolloutInfoAminoMsg {
  type: "/google.api.cloudquotas.v1.RolloutInfo";
  value: RolloutInfoAmino;
}
/** [Output only] Rollout information of a quota. */
export interface RolloutInfoSDKType {
  ongoing_rollout: boolean;
}
function createBaseQuotaInfo(): QuotaInfo {
  return {
    name: "",
    quotaId: "",
    metric: "",
    service: "",
    isPrecise: false,
    refreshInterval: "",
    containerType: 0,
    dimensions: [],
    metricDisplayName: "",
    quotaDisplayName: "",
    metricUnit: "",
    quotaIncreaseEligibility: undefined,
    isFixed: false,
    dimensionsInfos: [],
    isConcurrent: false,
    serviceRequestQuotaUri: ""
  };
}
export const QuotaInfo = {
  typeUrl: "/google.api.cloudquotas.v1.QuotaInfo",
  encode(message: QuotaInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quotaId !== "") {
      writer.uint32(18).string(message.quotaId);
    }
    if (message.metric !== "") {
      writer.uint32(26).string(message.metric);
    }
    if (message.service !== "") {
      writer.uint32(34).string(message.service);
    }
    if (message.isPrecise === true) {
      writer.uint32(40).bool(message.isPrecise);
    }
    if (message.refreshInterval !== "") {
      writer.uint32(50).string(message.refreshInterval);
    }
    if (message.containerType !== 0) {
      writer.uint32(56).int32(message.containerType);
    }
    for (const v of message.dimensions) {
      writer.uint32(66).string(v!);
    }
    if (message.metricDisplayName !== "") {
      writer.uint32(74).string(message.metricDisplayName);
    }
    if (message.quotaDisplayName !== "") {
      writer.uint32(82).string(message.quotaDisplayName);
    }
    if (message.metricUnit !== "") {
      writer.uint32(90).string(message.metricUnit);
    }
    if (message.quotaIncreaseEligibility !== undefined) {
      QuotaIncreaseEligibility.encode(message.quotaIncreaseEligibility, writer.uint32(98).fork()).ldelim();
    }
    if (message.isFixed === true) {
      writer.uint32(104).bool(message.isFixed);
    }
    for (const v of message.dimensionsInfos) {
      DimensionsInfo.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.isConcurrent === true) {
      writer.uint32(120).bool(message.isConcurrent);
    }
    if (message.serviceRequestQuotaUri !== "") {
      writer.uint32(138).string(message.serviceRequestQuotaUri);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.quotaId = reader.string();
          break;
        case 3:
          message.metric = reader.string();
          break;
        case 4:
          message.service = reader.string();
          break;
        case 5:
          message.isPrecise = reader.bool();
          break;
        case 6:
          message.refreshInterval = reader.string();
          break;
        case 7:
          message.containerType = reader.int32() as any;
          break;
        case 8:
          message.dimensions.push(reader.string());
          break;
        case 9:
          message.metricDisplayName = reader.string();
          break;
        case 10:
          message.quotaDisplayName = reader.string();
          break;
        case 11:
          message.metricUnit = reader.string();
          break;
        case 12:
          message.quotaIncreaseEligibility = QuotaIncreaseEligibility.decode(reader, reader.uint32());
          break;
        case 13:
          message.isFixed = reader.bool();
          break;
        case 14:
          message.dimensionsInfos.push(DimensionsInfo.decode(reader, reader.uint32()));
          break;
        case 15:
          message.isConcurrent = reader.bool();
          break;
        case 17:
          message.serviceRequestQuotaUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaInfo>): QuotaInfo {
    const message = createBaseQuotaInfo();
    message.name = object.name ?? "";
    message.quotaId = object.quotaId ?? "";
    message.metric = object.metric ?? "";
    message.service = object.service ?? "";
    message.isPrecise = object.isPrecise ?? false;
    message.refreshInterval = object.refreshInterval ?? "";
    message.containerType = object.containerType ?? 0;
    message.dimensions = object.dimensions?.map(e => e) || [];
    message.metricDisplayName = object.metricDisplayName ?? "";
    message.quotaDisplayName = object.quotaDisplayName ?? "";
    message.metricUnit = object.metricUnit ?? "";
    message.quotaIncreaseEligibility = object.quotaIncreaseEligibility !== undefined && object.quotaIncreaseEligibility !== null ? QuotaIncreaseEligibility.fromPartial(object.quotaIncreaseEligibility) : undefined;
    message.isFixed = object.isFixed ?? false;
    message.dimensionsInfos = object.dimensionsInfos?.map(e => DimensionsInfo.fromPartial(e)) || [];
    message.isConcurrent = object.isConcurrent ?? false;
    message.serviceRequestQuotaUri = object.serviceRequestQuotaUri ?? "";
    return message;
  },
  fromAmino(object: QuotaInfoAmino): QuotaInfo {
    const message = createBaseQuotaInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.quota_id !== undefined && object.quota_id !== null) {
      message.quotaId = object.quota_id;
    }
    if (object.metric !== undefined && object.metric !== null) {
      message.metric = object.metric;
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    }
    if (object.is_precise !== undefined && object.is_precise !== null) {
      message.isPrecise = object.is_precise;
    }
    if (object.refresh_interval !== undefined && object.refresh_interval !== null) {
      message.refreshInterval = object.refresh_interval;
    }
    if (object.container_type !== undefined && object.container_type !== null) {
      message.containerType = object.container_type;
    }
    message.dimensions = object.dimensions?.map(e => e) || [];
    if (object.metric_display_name !== undefined && object.metric_display_name !== null) {
      message.metricDisplayName = object.metric_display_name;
    }
    if (object.quota_display_name !== undefined && object.quota_display_name !== null) {
      message.quotaDisplayName = object.quota_display_name;
    }
    if (object.metric_unit !== undefined && object.metric_unit !== null) {
      message.metricUnit = object.metric_unit;
    }
    if (object.quota_increase_eligibility !== undefined && object.quota_increase_eligibility !== null) {
      message.quotaIncreaseEligibility = QuotaIncreaseEligibility.fromAmino(object.quota_increase_eligibility);
    }
    if (object.is_fixed !== undefined && object.is_fixed !== null) {
      message.isFixed = object.is_fixed;
    }
    message.dimensionsInfos = object.dimensions_infos?.map(e => DimensionsInfo.fromAmino(e)) || [];
    if (object.is_concurrent !== undefined && object.is_concurrent !== null) {
      message.isConcurrent = object.is_concurrent;
    }
    if (object.service_request_quota_uri !== undefined && object.service_request_quota_uri !== null) {
      message.serviceRequestQuotaUri = object.service_request_quota_uri;
    }
    return message;
  },
  toAmino(message: QuotaInfo): QuotaInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.quota_id = message.quotaId === "" ? undefined : message.quotaId;
    obj.metric = message.metric === "" ? undefined : message.metric;
    obj.service = message.service === "" ? undefined : message.service;
    obj.is_precise = message.isPrecise === false ? undefined : message.isPrecise;
    obj.refresh_interval = message.refreshInterval === "" ? undefined : message.refreshInterval;
    obj.container_type = message.containerType === 0 ? undefined : message.containerType;
    if (message.dimensions) {
      obj.dimensions = message.dimensions.map(e => e);
    } else {
      obj.dimensions = message.dimensions;
    }
    obj.metric_display_name = message.metricDisplayName === "" ? undefined : message.metricDisplayName;
    obj.quota_display_name = message.quotaDisplayName === "" ? undefined : message.quotaDisplayName;
    obj.metric_unit = message.metricUnit === "" ? undefined : message.metricUnit;
    obj.quota_increase_eligibility = message.quotaIncreaseEligibility ? QuotaIncreaseEligibility.toAmino(message.quotaIncreaseEligibility) : undefined;
    obj.is_fixed = message.isFixed === false ? undefined : message.isFixed;
    if (message.dimensionsInfos) {
      obj.dimensions_infos = message.dimensionsInfos.map(e => e ? DimensionsInfo.toAmino(e) : undefined);
    } else {
      obj.dimensions_infos = message.dimensionsInfos;
    }
    obj.is_concurrent = message.isConcurrent === false ? undefined : message.isConcurrent;
    obj.service_request_quota_uri = message.serviceRequestQuotaUri === "" ? undefined : message.serviceRequestQuotaUri;
    return obj;
  },
  fromAminoMsg(object: QuotaInfoAminoMsg): QuotaInfo {
    return QuotaInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaInfoProtoMsg): QuotaInfo {
    return QuotaInfo.decode(message.value);
  },
  toProto(message: QuotaInfo): Uint8Array {
    return QuotaInfo.encode(message).finish();
  },
  toProtoMsg(message: QuotaInfo): QuotaInfoProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.QuotaInfo",
      value: QuotaInfo.encode(message).finish()
    };
  }
};
function createBaseQuotaIncreaseEligibility(): QuotaIncreaseEligibility {
  return {
    isEligible: false,
    ineligibilityReason: 0
  };
}
export const QuotaIncreaseEligibility = {
  typeUrl: "/google.api.cloudquotas.v1.QuotaIncreaseEligibility",
  encode(message: QuotaIncreaseEligibility, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isEligible === true) {
      writer.uint32(8).bool(message.isEligible);
    }
    if (message.ineligibilityReason !== 0) {
      writer.uint32(16).int32(message.ineligibilityReason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaIncreaseEligibility {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaIncreaseEligibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isEligible = reader.bool();
          break;
        case 2:
          message.ineligibilityReason = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaIncreaseEligibility>): QuotaIncreaseEligibility {
    const message = createBaseQuotaIncreaseEligibility();
    message.isEligible = object.isEligible ?? false;
    message.ineligibilityReason = object.ineligibilityReason ?? 0;
    return message;
  },
  fromAmino(object: QuotaIncreaseEligibilityAmino): QuotaIncreaseEligibility {
    const message = createBaseQuotaIncreaseEligibility();
    if (object.is_eligible !== undefined && object.is_eligible !== null) {
      message.isEligible = object.is_eligible;
    }
    if (object.ineligibility_reason !== undefined && object.ineligibility_reason !== null) {
      message.ineligibilityReason = object.ineligibility_reason;
    }
    return message;
  },
  toAmino(message: QuotaIncreaseEligibility): QuotaIncreaseEligibilityAmino {
    const obj: any = {};
    obj.is_eligible = message.isEligible === false ? undefined : message.isEligible;
    obj.ineligibility_reason = message.ineligibilityReason === 0 ? undefined : message.ineligibilityReason;
    return obj;
  },
  fromAminoMsg(object: QuotaIncreaseEligibilityAminoMsg): QuotaIncreaseEligibility {
    return QuotaIncreaseEligibility.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaIncreaseEligibilityProtoMsg): QuotaIncreaseEligibility {
    return QuotaIncreaseEligibility.decode(message.value);
  },
  toProto(message: QuotaIncreaseEligibility): Uint8Array {
    return QuotaIncreaseEligibility.encode(message).finish();
  },
  toProtoMsg(message: QuotaIncreaseEligibility): QuotaIncreaseEligibilityProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.QuotaIncreaseEligibility",
      value: QuotaIncreaseEligibility.encode(message).finish()
    };
  }
};
function createBaseQuotaPreference_DimensionsEntry(): QuotaPreference_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaPreference_DimensionsEntry = {
  encode(message: QuotaPreference_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaPreference_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaPreference_DimensionsEntry();
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
  fromPartial(object: Partial<QuotaPreference_DimensionsEntry>): QuotaPreference_DimensionsEntry {
    const message = createBaseQuotaPreference_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QuotaPreference_DimensionsEntryAmino): QuotaPreference_DimensionsEntry {
    const message = createBaseQuotaPreference_DimensionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QuotaPreference_DimensionsEntry): QuotaPreference_DimensionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QuotaPreference_DimensionsEntryAminoMsg): QuotaPreference_DimensionsEntry {
    return QuotaPreference_DimensionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaPreference_DimensionsEntryProtoMsg): QuotaPreference_DimensionsEntry {
    return QuotaPreference_DimensionsEntry.decode(message.value);
  },
  toProto(message: QuotaPreference_DimensionsEntry): Uint8Array {
    return QuotaPreference_DimensionsEntry.encode(message).finish();
  }
};
function createBaseQuotaPreference(): QuotaPreference {
  return {
    name: "",
    dimensions: {},
    quotaConfig: undefined,
    etag: "",
    createTime: undefined,
    updateTime: undefined,
    service: "",
    quotaId: "",
    reconciling: false,
    justification: "",
    contactEmail: ""
  };
}
export const QuotaPreference = {
  typeUrl: "/google.api.cloudquotas.v1.QuotaPreference",
  encode(message: QuotaPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      QuotaPreference_DimensionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    if (message.quotaConfig !== undefined) {
      QuotaConfig.encode(message.quotaConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.etag !== "") {
      writer.uint32(34).string(message.etag);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.service !== "") {
      writer.uint32(58).string(message.service);
    }
    if (message.quotaId !== "") {
      writer.uint32(66).string(message.quotaId);
    }
    if (message.reconciling === true) {
      writer.uint32(80).bool(message.reconciling);
    }
    if (message.justification !== "") {
      writer.uint32(90).string(message.justification);
    }
    if (message.contactEmail !== "") {
      writer.uint32(98).string(message.contactEmail);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          const entry2 = QuotaPreference_DimensionsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.dimensions[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.quotaConfig = QuotaConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.etag = reader.string();
          break;
        case 5:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.service = reader.string();
          break;
        case 8:
          message.quotaId = reader.string();
          break;
        case 10:
          message.reconciling = reader.bool();
          break;
        case 11:
          message.justification = reader.string();
          break;
        case 12:
          message.contactEmail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaPreference>): QuotaPreference {
    const message = createBaseQuotaPreference();
    message.name = object.name ?? "";
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.quotaConfig = object.quotaConfig !== undefined && object.quotaConfig !== null ? QuotaConfig.fromPartial(object.quotaConfig) : undefined;
    message.etag = object.etag ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.service = object.service ?? "";
    message.quotaId = object.quotaId ?? "";
    message.reconciling = object.reconciling ?? false;
    message.justification = object.justification ?? "";
    message.contactEmail = object.contactEmail ?? "";
    return message;
  },
  fromAmino(object: QuotaPreferenceAmino): QuotaPreference {
    const message = createBaseQuotaPreference();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.quota_config !== undefined && object.quota_config !== null) {
      message.quotaConfig = QuotaConfig.fromAmino(object.quota_config);
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    }
    if (object.create_time !== undefined && object.create_time !== null) {
      message.createTime = fromTimestamp(Timestamp.fromAmino(object.create_time));
    }
    if (object.update_time !== undefined && object.update_time !== null) {
      message.updateTime = fromTimestamp(Timestamp.fromAmino(object.update_time));
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    }
    if (object.quota_id !== undefined && object.quota_id !== null) {
      message.quotaId = object.quota_id;
    }
    if (object.reconciling !== undefined && object.reconciling !== null) {
      message.reconciling = object.reconciling;
    }
    if (object.justification !== undefined && object.justification !== null) {
      message.justification = object.justification;
    }
    if (object.contact_email !== undefined && object.contact_email !== null) {
      message.contactEmail = object.contact_email;
    }
    return message;
  },
  toAmino(message: QuotaPreference): QuotaPreferenceAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.quota_config = message.quotaConfig ? QuotaConfig.toAmino(message.quotaConfig) : undefined;
    obj.etag = message.etag === "" ? undefined : message.etag;
    obj.create_time = message.createTime ? Timestamp.toAmino(toTimestamp(message.createTime)) : undefined;
    obj.update_time = message.updateTime ? Timestamp.toAmino(toTimestamp(message.updateTime)) : undefined;
    obj.service = message.service === "" ? undefined : message.service;
    obj.quota_id = message.quotaId === "" ? undefined : message.quotaId;
    obj.reconciling = message.reconciling === false ? undefined : message.reconciling;
    obj.justification = message.justification === "" ? undefined : message.justification;
    obj.contact_email = message.contactEmail === "" ? undefined : message.contactEmail;
    return obj;
  },
  fromAminoMsg(object: QuotaPreferenceAminoMsg): QuotaPreference {
    return QuotaPreference.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaPreferenceProtoMsg): QuotaPreference {
    return QuotaPreference.decode(message.value);
  },
  toProto(message: QuotaPreference): Uint8Array {
    return QuotaPreference.encode(message).finish();
  },
  toProtoMsg(message: QuotaPreference): QuotaPreferenceProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.QuotaPreference",
      value: QuotaPreference.encode(message).finish()
    };
  }
};
function createBaseQuotaConfig_AnnotationsEntry(): QuotaConfig_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaConfig_AnnotationsEntry = {
  encode(message: QuotaConfig_AnnotationsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaConfig_AnnotationsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaConfig_AnnotationsEntry();
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
  fromPartial(object: Partial<QuotaConfig_AnnotationsEntry>): QuotaConfig_AnnotationsEntry {
    const message = createBaseQuotaConfig_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QuotaConfig_AnnotationsEntryAmino): QuotaConfig_AnnotationsEntry {
    const message = createBaseQuotaConfig_AnnotationsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QuotaConfig_AnnotationsEntry): QuotaConfig_AnnotationsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QuotaConfig_AnnotationsEntryAminoMsg): QuotaConfig_AnnotationsEntry {
    return QuotaConfig_AnnotationsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaConfig_AnnotationsEntryProtoMsg): QuotaConfig_AnnotationsEntry {
    return QuotaConfig_AnnotationsEntry.decode(message.value);
  },
  toProto(message: QuotaConfig_AnnotationsEntry): Uint8Array {
    return QuotaConfig_AnnotationsEntry.encode(message).finish();
  }
};
function createBaseQuotaConfig(): QuotaConfig {
  return {
    preferredValue: BigInt(0),
    stateDetail: "",
    grantedValue: undefined,
    traceId: "",
    annotations: {},
    requestOrigin: 0
  };
}
export const QuotaConfig = {
  typeUrl: "/google.api.cloudquotas.v1.QuotaConfig",
  encode(message: QuotaConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.preferredValue !== BigInt(0)) {
      writer.uint32(8).int64(message.preferredValue);
    }
    if (message.stateDetail !== "") {
      writer.uint32(18).string(message.stateDetail);
    }
    if (message.grantedValue !== undefined) {
      Int64Value.encode(message.grantedValue, writer.uint32(26).fork()).ldelim();
    }
    if (message.traceId !== "") {
      writer.uint32(34).string(message.traceId);
    }
    Object.entries(message.annotations).forEach(([key, value]) => {
      QuotaConfig_AnnotationsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    if (message.requestOrigin !== 0) {
      writer.uint32(48).int32(message.requestOrigin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.preferredValue = reader.int64();
          break;
        case 2:
          message.stateDetail = reader.string();
          break;
        case 3:
          message.grantedValue = Int64Value.decode(reader, reader.uint32());
          break;
        case 4:
          message.traceId = reader.string();
          break;
        case 5:
          const entry5 = QuotaConfig_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.annotations[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.requestOrigin = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaConfig>): QuotaConfig {
    const message = createBaseQuotaConfig();
    message.preferredValue = object.preferredValue !== undefined && object.preferredValue !== null ? BigInt(object.preferredValue.toString()) : BigInt(0);
    message.stateDetail = object.stateDetail ?? "";
    message.grantedValue = object.grantedValue !== undefined && object.grantedValue !== null ? Int64Value.fromPartial(object.grantedValue) : undefined;
    message.traceId = object.traceId ?? "";
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.requestOrigin = object.requestOrigin ?? 0;
    return message;
  },
  fromAmino(object: QuotaConfigAmino): QuotaConfig {
    const message = createBaseQuotaConfig();
    if (object.preferred_value !== undefined && object.preferred_value !== null) {
      message.preferredValue = BigInt(object.preferred_value);
    }
    if (object.state_detail !== undefined && object.state_detail !== null) {
      message.stateDetail = object.state_detail;
    }
    if (object.granted_value !== undefined && object.granted_value !== null) {
      message.grantedValue = Int64Value.fromAmino(object.granted_value);
    }
    if (object.trace_id !== undefined && object.trace_id !== null) {
      message.traceId = object.trace_id;
    }
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.request_origin !== undefined && object.request_origin !== null) {
      message.requestOrigin = object.request_origin;
    }
    return message;
  },
  toAmino(message: QuotaConfig): QuotaConfigAmino {
    const obj: any = {};
    obj.preferred_value = message.preferredValue !== BigInt(0) ? message.preferredValue?.toString() : undefined;
    obj.state_detail = message.stateDetail === "" ? undefined : message.stateDetail;
    obj.granted_value = message.grantedValue ? Int64Value.toAmino(message.grantedValue) : undefined;
    obj.trace_id = message.traceId === "" ? undefined : message.traceId;
    obj.annotations = {};
    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }
    obj.request_origin = message.requestOrigin === 0 ? undefined : message.requestOrigin;
    return obj;
  },
  fromAminoMsg(object: QuotaConfigAminoMsg): QuotaConfig {
    return QuotaConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaConfigProtoMsg): QuotaConfig {
    return QuotaConfig.decode(message.value);
  },
  toProto(message: QuotaConfig): Uint8Array {
    return QuotaConfig.encode(message).finish();
  },
  toProtoMsg(message: QuotaConfig): QuotaConfigProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.QuotaConfig",
      value: QuotaConfig.encode(message).finish()
    };
  }
};
function createBaseDimensionsInfo_DimensionsEntry(): DimensionsInfo_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const DimensionsInfo_DimensionsEntry = {
  encode(message: DimensionsInfo_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DimensionsInfo_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDimensionsInfo_DimensionsEntry();
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
  fromPartial(object: Partial<DimensionsInfo_DimensionsEntry>): DimensionsInfo_DimensionsEntry {
    const message = createBaseDimensionsInfo_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: DimensionsInfo_DimensionsEntryAmino): DimensionsInfo_DimensionsEntry {
    const message = createBaseDimensionsInfo_DimensionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: DimensionsInfo_DimensionsEntry): DimensionsInfo_DimensionsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: DimensionsInfo_DimensionsEntryAminoMsg): DimensionsInfo_DimensionsEntry {
    return DimensionsInfo_DimensionsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: DimensionsInfo_DimensionsEntryProtoMsg): DimensionsInfo_DimensionsEntry {
    return DimensionsInfo_DimensionsEntry.decode(message.value);
  },
  toProto(message: DimensionsInfo_DimensionsEntry): Uint8Array {
    return DimensionsInfo_DimensionsEntry.encode(message).finish();
  }
};
function createBaseDimensionsInfo(): DimensionsInfo {
  return {
    dimensions: {},
    details: undefined,
    applicableLocations: []
  };
}
export const DimensionsInfo = {
  typeUrl: "/google.api.cloudquotas.v1.DimensionsInfo",
  encode(message: DimensionsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.dimensions).forEach(([key, value]) => {
      DimensionsInfo_DimensionsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.details !== undefined) {
      QuotaDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.applicableLocations) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DimensionsInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDimensionsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = DimensionsInfo_DimensionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dimensions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.details = QuotaDetails.decode(reader, reader.uint32());
          break;
        case 3:
          message.applicableLocations.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DimensionsInfo>): DimensionsInfo {
    const message = createBaseDimensionsInfo();
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.details = object.details !== undefined && object.details !== null ? QuotaDetails.fromPartial(object.details) : undefined;
    message.applicableLocations = object.applicableLocations?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DimensionsInfoAmino): DimensionsInfo {
    const message = createBaseDimensionsInfo();
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.details !== undefined && object.details !== null) {
      message.details = QuotaDetails.fromAmino(object.details);
    }
    message.applicableLocations = object.applicable_locations?.map(e => e) || [];
    return message;
  },
  toAmino(message: DimensionsInfo): DimensionsInfoAmino {
    const obj: any = {};
    obj.dimensions = {};
    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }
    obj.details = message.details ? QuotaDetails.toAmino(message.details) : undefined;
    if (message.applicableLocations) {
      obj.applicable_locations = message.applicableLocations.map(e => e);
    } else {
      obj.applicable_locations = message.applicableLocations;
    }
    return obj;
  },
  fromAminoMsg(object: DimensionsInfoAminoMsg): DimensionsInfo {
    return DimensionsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DimensionsInfoProtoMsg): DimensionsInfo {
    return DimensionsInfo.decode(message.value);
  },
  toProto(message: DimensionsInfo): Uint8Array {
    return DimensionsInfo.encode(message).finish();
  },
  toProtoMsg(message: DimensionsInfo): DimensionsInfoProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.DimensionsInfo",
      value: DimensionsInfo.encode(message).finish()
    };
  }
};
function createBaseQuotaDetails(): QuotaDetails {
  return {
    value: BigInt(0),
    rolloutInfo: undefined
  };
}
export const QuotaDetails = {
  typeUrl: "/google.api.cloudquotas.v1.QuotaDetails",
  encode(message: QuotaDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== BigInt(0)) {
      writer.uint32(8).int64(message.value);
    }
    if (message.rolloutInfo !== undefined) {
      RolloutInfo.encode(message.rolloutInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int64();
          break;
        case 3:
          message.rolloutInfo = RolloutInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QuotaDetails>): QuotaDetails {
    const message = createBaseQuotaDetails();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    message.rolloutInfo = object.rolloutInfo !== undefined && object.rolloutInfo !== null ? RolloutInfo.fromPartial(object.rolloutInfo) : undefined;
    return message;
  },
  fromAmino(object: QuotaDetailsAmino): QuotaDetails {
    const message = createBaseQuotaDetails();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    if (object.rollout_info !== undefined && object.rollout_info !== null) {
      message.rolloutInfo = RolloutInfo.fromAmino(object.rollout_info);
    }
    return message;
  },
  toAmino(message: QuotaDetails): QuotaDetailsAmino {
    const obj: any = {};
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    obj.rollout_info = message.rolloutInfo ? RolloutInfo.toAmino(message.rolloutInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuotaDetailsAminoMsg): QuotaDetails {
    return QuotaDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaDetailsProtoMsg): QuotaDetails {
    return QuotaDetails.decode(message.value);
  },
  toProto(message: QuotaDetails): Uint8Array {
    return QuotaDetails.encode(message).finish();
  },
  toProtoMsg(message: QuotaDetails): QuotaDetailsProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.QuotaDetails",
      value: QuotaDetails.encode(message).finish()
    };
  }
};
function createBaseRolloutInfo(): RolloutInfo {
  return {
    ongoingRollout: false
  };
}
export const RolloutInfo = {
  typeUrl: "/google.api.cloudquotas.v1.RolloutInfo",
  encode(message: RolloutInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ongoingRollout === true) {
      writer.uint32(8).bool(message.ongoingRollout);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RolloutInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRolloutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ongoingRollout = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<RolloutInfo>): RolloutInfo {
    const message = createBaseRolloutInfo();
    message.ongoingRollout = object.ongoingRollout ?? false;
    return message;
  },
  fromAmino(object: RolloutInfoAmino): RolloutInfo {
    const message = createBaseRolloutInfo();
    if (object.ongoing_rollout !== undefined && object.ongoing_rollout !== null) {
      message.ongoingRollout = object.ongoing_rollout;
    }
    return message;
  },
  toAmino(message: RolloutInfo): RolloutInfoAmino {
    const obj: any = {};
    obj.ongoing_rollout = message.ongoingRollout === false ? undefined : message.ongoingRollout;
    return obj;
  },
  fromAminoMsg(object: RolloutInfoAminoMsg): RolloutInfo {
    return RolloutInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RolloutInfoProtoMsg): RolloutInfo {
    return RolloutInfo.decode(message.value);
  },
  toProto(message: RolloutInfo): Uint8Array {
    return RolloutInfo.encode(message).finish();
  },
  toProtoMsg(message: RolloutInfo): RolloutInfoProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.RolloutInfo",
      value: RolloutInfo.encode(message).finish()
    };
  }
};