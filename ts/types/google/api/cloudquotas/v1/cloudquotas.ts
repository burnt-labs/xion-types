//@ts-nocheck
import { QuotaPreference, QuotaPreferenceAmino, QuotaPreferenceSDKType, QuotaSafetyCheck, QuotaInfo, QuotaInfoAmino, QuotaInfoSDKType } from "./resources";
import { FieldMask, FieldMaskAmino, FieldMaskSDKType } from "../../../protobuf/field_mask";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Message for requesting list of QuotaInfos */
export interface ListQuotaInfosRequest {
  /**
   * Required. Parent value of QuotaInfo resources.
   * Listing across different resource containers (such as 'projects/-') is not
   * allowed.
   * 
   * Example names:
   * `projects/123/locations/global/services/compute.googleapis.com`
   * `folders/234/locations/global/services/compute.googleapis.com`
   * `organizations/345/locations/global/services/compute.googleapis.com`
   */
  parent: string;
  /**
   * Optional. Requested page size. Server may return fewer items than
   * requested. If unspecified, server will pick an appropriate default.
   */
  pageSize: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken: string;
}
export interface ListQuotaInfosRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosRequest";
  value: Uint8Array;
}
/**
 * Message for requesting list of QuotaInfos
 * @name ListQuotaInfosRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.ListQuotaInfosRequest
 */
export interface ListQuotaInfosRequestAmino {
  /**
   * Required. Parent value of QuotaInfo resources.
   * Listing across different resource containers (such as 'projects/-') is not
   * allowed.
   * 
   * Example names:
   * `projects/123/locations/global/services/compute.googleapis.com`
   * `folders/234/locations/global/services/compute.googleapis.com`
   * `organizations/345/locations/global/services/compute.googleapis.com`
   */
  parent?: string;
  /**
   * Optional. Requested page size. Server may return fewer items than
   * requested. If unspecified, server will pick an appropriate default.
   */
  page_size?: number;
  /**
   * Optional. A token identifying a page of results the server should return.
   */
  page_token?: string;
}
export interface ListQuotaInfosRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.ListQuotaInfosRequest";
  value: ListQuotaInfosRequestAmino;
}
/** Message for requesting list of QuotaInfos */
export interface ListQuotaInfosRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
}
/** Message for response to listing QuotaInfos */
export interface ListQuotaInfosResponse {
  /** The list of QuotaInfo */
  quotaInfos: QuotaInfo[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}
export interface ListQuotaInfosResponseProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosResponse";
  value: Uint8Array;
}
/**
 * Message for response to listing QuotaInfos
 * @name ListQuotaInfosResponseAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.ListQuotaInfosResponse
 */
export interface ListQuotaInfosResponseAmino {
  /**
   * The list of QuotaInfo
   */
  quota_infos?: QuotaInfoAmino[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  next_page_token?: string;
}
export interface ListQuotaInfosResponseAminoMsg {
  type: "/google.api.cloudquotas.v1.ListQuotaInfosResponse";
  value: ListQuotaInfosResponseAmino;
}
/** Message for response to listing QuotaInfos */
export interface ListQuotaInfosResponseSDKType {
  quota_infos: QuotaInfoSDKType[];
  next_page_token: string;
}
/** Message for getting a QuotaInfo */
export interface GetQuotaInfoRequest {
  /**
   * Required. The resource name of the quota info.
   * 
   * An example name:
   * `projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion`
   */
  name: string;
}
export interface GetQuotaInfoRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.GetQuotaInfoRequest";
  value: Uint8Array;
}
/**
 * Message for getting a QuotaInfo
 * @name GetQuotaInfoRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.GetQuotaInfoRequest
 */
export interface GetQuotaInfoRequestAmino {
  /**
   * Required. The resource name of the quota info.
   * 
   * An example name:
   * `projects/123/locations/global/services/compute.googleapis.com/quotaInfos/CpusPerProjectPerRegion`
   */
  name?: string;
}
export interface GetQuotaInfoRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.GetQuotaInfoRequest";
  value: GetQuotaInfoRequestAmino;
}
/** Message for getting a QuotaInfo */
export interface GetQuotaInfoRequestSDKType {
  name: string;
}
/** Message for requesting list of QuotaPreferences */
export interface ListQuotaPreferencesRequest {
  /**
   * Required. Parent value of QuotaPreference resources.
   * Listing across different resource containers (such as 'projects/-') is not
   * allowed.
   * 
   * When the value starts with 'folders' or 'organizations', it lists the
   * QuotaPreferences for org quotas in the container. It does not list the
   * QuotaPreferences in the descendant projects of the container.
   * 
   * Example parents:
   * `projects/123/locations/global`
   */
  parent: string;
  /**
   * Optional. Requested page size. Server may return fewer items than
   * requested. If unspecified, server will pick an appropriate default.
   */
  pageSize: number;
  /** Optional. A token identifying a page of results the server should return. */
  pageToken: string;
  /**
   * Optional. Filter result QuotaPreferences by their state, type,
   * create/update time range.
   * 
   * Example filters:
   * `reconciling=true AND request_type=CLOUD_CONSOLE`,
   * `reconciling=true OR creation_time>2022-12-03T10:30:00`
   */
  filter: string;
  /**
   * Optional. How to order of the results. By default, the results are ordered
   * by create time.
   * 
   * Example orders:
   * `quota_id`,
   * `service, create_time`
   */
  orderBy: string;
}
export interface ListQuotaPreferencesRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesRequest";
  value: Uint8Array;
}
/**
 * Message for requesting list of QuotaPreferences
 * @name ListQuotaPreferencesRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.ListQuotaPreferencesRequest
 */
export interface ListQuotaPreferencesRequestAmino {
  /**
   * Required. Parent value of QuotaPreference resources.
   * Listing across different resource containers (such as 'projects/-') is not
   * allowed.
   * 
   * When the value starts with 'folders' or 'organizations', it lists the
   * QuotaPreferences for org quotas in the container. It does not list the
   * QuotaPreferences in the descendant projects of the container.
   * 
   * Example parents:
   * `projects/123/locations/global`
   */
  parent?: string;
  /**
   * Optional. Requested page size. Server may return fewer items than
   * requested. If unspecified, server will pick an appropriate default.
   */
  page_size?: number;
  /**
   * Optional. A token identifying a page of results the server should return.
   */
  page_token?: string;
  /**
   * Optional. Filter result QuotaPreferences by their state, type,
   * create/update time range.
   * 
   * Example filters:
   * `reconciling=true AND request_type=CLOUD_CONSOLE`,
   * `reconciling=true OR creation_time>2022-12-03T10:30:00`
   */
  filter?: string;
  /**
   * Optional. How to order of the results. By default, the results are ordered
   * by create time.
   * 
   * Example orders:
   * `quota_id`,
   * `service, create_time`
   */
  order_by?: string;
}
export interface ListQuotaPreferencesRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.ListQuotaPreferencesRequest";
  value: ListQuotaPreferencesRequestAmino;
}
/** Message for requesting list of QuotaPreferences */
export interface ListQuotaPreferencesRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
  filter: string;
  order_by: string;
}
/** Message for response to listing QuotaPreferences */
export interface ListQuotaPreferencesResponse {
  /** The list of QuotaPreference */
  quotaPreferences: QuotaPreference[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
  /** Locations that could not be reached. */
  unreachable: string[];
}
export interface ListQuotaPreferencesResponseProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesResponse";
  value: Uint8Array;
}
/**
 * Message for response to listing QuotaPreferences
 * @name ListQuotaPreferencesResponseAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.ListQuotaPreferencesResponse
 */
export interface ListQuotaPreferencesResponseAmino {
  /**
   * The list of QuotaPreference
   */
  quota_preferences?: QuotaPreferenceAmino[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  next_page_token?: string;
  /**
   * Locations that could not be reached.
   */
  unreachable?: string[];
}
export interface ListQuotaPreferencesResponseAminoMsg {
  type: "/google.api.cloudquotas.v1.ListQuotaPreferencesResponse";
  value: ListQuotaPreferencesResponseAmino;
}
/** Message for response to listing QuotaPreferences */
export interface ListQuotaPreferencesResponseSDKType {
  quota_preferences: QuotaPreferenceSDKType[];
  next_page_token: string;
  unreachable: string[];
}
/** Message for getting a QuotaPreference */
export interface GetQuotaPreferenceRequest {
  /**
   * Required. Name of the resource
   * 
   * Example name:
   * `projects/123/locations/global/quota_preferences/my-config-for-us-east1`
   */
  name: string;
}
export interface GetQuotaPreferenceRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.GetQuotaPreferenceRequest";
  value: Uint8Array;
}
/**
 * Message for getting a QuotaPreference
 * @name GetQuotaPreferenceRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.GetQuotaPreferenceRequest
 */
export interface GetQuotaPreferenceRequestAmino {
  /**
   * Required. Name of the resource
   * 
   * Example name:
   * `projects/123/locations/global/quota_preferences/my-config-for-us-east1`
   */
  name?: string;
}
export interface GetQuotaPreferenceRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.GetQuotaPreferenceRequest";
  value: GetQuotaPreferenceRequestAmino;
}
/** Message for getting a QuotaPreference */
export interface GetQuotaPreferenceRequestSDKType {
  name: string;
}
/** Message for creating a QuotaPreference */
export interface CreateQuotaPreferenceRequest {
  /**
   * Required. Value for parent.
   * 
   * Example:
   * `projects/123/locations/global`
   */
  parent: string;
  /**
   * Optional. Id of the requesting object, must be unique under its parent.
   * If client does not set this field, the service will generate one.
   */
  quotaPreferenceId: string;
  /** Required. The resource being created */
  quotaPreference?: QuotaPreference;
  /** The list of quota safety checks to be ignored. */
  ignoreSafetyChecks: QuotaSafetyCheck[];
}
export interface CreateQuotaPreferenceRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.CreateQuotaPreferenceRequest";
  value: Uint8Array;
}
/**
 * Message for creating a QuotaPreference
 * @name CreateQuotaPreferenceRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.CreateQuotaPreferenceRequest
 */
export interface CreateQuotaPreferenceRequestAmino {
  /**
   * Required. Value for parent.
   * 
   * Example:
   * `projects/123/locations/global`
   */
  parent?: string;
  /**
   * Optional. Id of the requesting object, must be unique under its parent.
   * If client does not set this field, the service will generate one.
   */
  quota_preference_id?: string;
  /**
   * Required. The resource being created
   */
  quota_preference?: QuotaPreferenceAmino;
  /**
   * The list of quota safety checks to be ignored.
   */
  ignore_safety_checks?: QuotaSafetyCheck[];
}
export interface CreateQuotaPreferenceRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.CreateQuotaPreferenceRequest";
  value: CreateQuotaPreferenceRequestAmino;
}
/** Message for creating a QuotaPreference */
export interface CreateQuotaPreferenceRequestSDKType {
  parent: string;
  quota_preference_id: string;
  quota_preference?: QuotaPreferenceSDKType;
  ignore_safety_checks: QuotaSafetyCheck[];
}
/** Message for updating a QuotaPreference */
export interface UpdateQuotaPreferenceRequest {
  /**
   * Optional. Field mask is used to specify the fields to be overwritten in the
   * QuotaPreference resource by the update.
   * The fields specified in the update_mask are relative to the resource, not
   * the full request. A field will be overwritten if it is in the mask. If the
   * user does not provide a mask then all fields will be overwritten.
   */
  updateMask?: FieldMask;
  /** Required. The resource being updated */
  quotaPreference?: QuotaPreference;
  /**
   * Optional. If set to true, and the quota preference is not found, a new one
   * will be created. In this situation, `update_mask` is ignored.
   */
  allowMissing: boolean;
  /**
   * Optional. If set to true, validate the request, but do not actually update.
   * Note that a request being valid does not mean that the request is
   * guaranteed to be fulfilled.
   */
  validateOnly: boolean;
  /** The list of quota safety checks to be ignored. */
  ignoreSafetyChecks: QuotaSafetyCheck[];
}
export interface UpdateQuotaPreferenceRequestProtoMsg {
  typeUrl: "/google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest";
  value: Uint8Array;
}
/**
 * Message for updating a QuotaPreference
 * @name UpdateQuotaPreferenceRequestAmino
 * @package google.api.cloudquotas.v1
 * @see proto type: google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest
 */
export interface UpdateQuotaPreferenceRequestAmino {
  /**
   * Optional. Field mask is used to specify the fields to be overwritten in the
   * QuotaPreference resource by the update.
   * The fields specified in the update_mask are relative to the resource, not
   * the full request. A field will be overwritten if it is in the mask. If the
   * user does not provide a mask then all fields will be overwritten.
   */
  update_mask?: FieldMaskAmino;
  /**
   * Required. The resource being updated
   */
  quota_preference?: QuotaPreferenceAmino;
  /**
   * Optional. If set to true, and the quota preference is not found, a new one
   * will be created. In this situation, `update_mask` is ignored.
   */
  allow_missing?: boolean;
  /**
   * Optional. If set to true, validate the request, but do not actually update.
   * Note that a request being valid does not mean that the request is
   * guaranteed to be fulfilled.
   */
  validate_only?: boolean;
  /**
   * The list of quota safety checks to be ignored.
   */
  ignore_safety_checks?: QuotaSafetyCheck[];
}
export interface UpdateQuotaPreferenceRequestAminoMsg {
  type: "/google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest";
  value: UpdateQuotaPreferenceRequestAmino;
}
/** Message for updating a QuotaPreference */
export interface UpdateQuotaPreferenceRequestSDKType {
  update_mask?: FieldMaskSDKType;
  quota_preference?: QuotaPreferenceSDKType;
  allow_missing: boolean;
  validate_only: boolean;
  ignore_safety_checks: QuotaSafetyCheck[];
}
function createBaseListQuotaInfosRequest(): ListQuotaInfosRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: ""
  };
}
export const ListQuotaInfosRequest = {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosRequest",
  encode(message: ListQuotaInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQuotaInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuotaInfosRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListQuotaInfosRequest>): ListQuotaInfosRequest {
    const message = createBaseListQuotaInfosRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromAmino(object: ListQuotaInfosRequestAmino): ListQuotaInfosRequest {
    const message = createBaseListQuotaInfosRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListQuotaInfosRequest): ListQuotaInfosRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListQuotaInfosRequestAminoMsg): ListQuotaInfosRequest {
    return ListQuotaInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListQuotaInfosRequestProtoMsg): ListQuotaInfosRequest {
    return ListQuotaInfosRequest.decode(message.value);
  },
  toProto(message: ListQuotaInfosRequest): Uint8Array {
    return ListQuotaInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: ListQuotaInfosRequest): ListQuotaInfosRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosRequest",
      value: ListQuotaInfosRequest.encode(message).finish()
    };
  }
};
function createBaseListQuotaInfosResponse(): ListQuotaInfosResponse {
  return {
    quotaInfos: [],
    nextPageToken: ""
  };
}
export const ListQuotaInfosResponse = {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosResponse",
  encode(message: ListQuotaInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.quotaInfos) {
      QuotaInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQuotaInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuotaInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotaInfos.push(QuotaInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListQuotaInfosResponse>): ListQuotaInfosResponse {
    const message = createBaseListQuotaInfosResponse();
    message.quotaInfos = object.quotaInfos?.map(e => QuotaInfo.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromAmino(object: ListQuotaInfosResponseAmino): ListQuotaInfosResponse {
    const message = createBaseListQuotaInfosResponse();
    message.quotaInfos = object.quota_infos?.map(e => QuotaInfo.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListQuotaInfosResponse): ListQuotaInfosResponseAmino {
    const obj: any = {};
    if (message.quotaInfos) {
      obj.quota_infos = message.quotaInfos.map(e => e ? QuotaInfo.toAmino(e) : undefined);
    } else {
      obj.quota_infos = message.quotaInfos;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListQuotaInfosResponseAminoMsg): ListQuotaInfosResponse {
    return ListQuotaInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListQuotaInfosResponseProtoMsg): ListQuotaInfosResponse {
    return ListQuotaInfosResponse.decode(message.value);
  },
  toProto(message: ListQuotaInfosResponse): Uint8Array {
    return ListQuotaInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: ListQuotaInfosResponse): ListQuotaInfosResponseProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.ListQuotaInfosResponse",
      value: ListQuotaInfosResponse.encode(message).finish()
    };
  }
};
function createBaseGetQuotaInfoRequest(): GetQuotaInfoRequest {
  return {
    name: ""
  };
}
export const GetQuotaInfoRequest = {
  typeUrl: "/google.api.cloudquotas.v1.GetQuotaInfoRequest",
  encode(message: GetQuotaInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetQuotaInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuotaInfoRequest();
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
  fromPartial(object: Partial<GetQuotaInfoRequest>): GetQuotaInfoRequest {
    const message = createBaseGetQuotaInfoRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: GetQuotaInfoRequestAmino): GetQuotaInfoRequest {
    const message = createBaseGetQuotaInfoRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetQuotaInfoRequest): GetQuotaInfoRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetQuotaInfoRequestAminoMsg): GetQuotaInfoRequest {
    return GetQuotaInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetQuotaInfoRequestProtoMsg): GetQuotaInfoRequest {
    return GetQuotaInfoRequest.decode(message.value);
  },
  toProto(message: GetQuotaInfoRequest): Uint8Array {
    return GetQuotaInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: GetQuotaInfoRequest): GetQuotaInfoRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.GetQuotaInfoRequest",
      value: GetQuotaInfoRequest.encode(message).finish()
    };
  }
};
function createBaseListQuotaPreferencesRequest(): ListQuotaPreferencesRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    filter: "",
    orderBy: ""
  };
}
export const ListQuotaPreferencesRequest = {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesRequest",
  encode(message: ListQuotaPreferencesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    if (message.orderBy !== "") {
      writer.uint32(42).string(message.orderBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQuotaPreferencesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuotaPreferencesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        case 5:
          message.orderBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListQuotaPreferencesRequest>): ListQuotaPreferencesRequest {
    const message = createBaseListQuotaPreferencesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    message.orderBy = object.orderBy ?? "";
    return message;
  },
  fromAmino(object: ListQuotaPreferencesRequestAmino): ListQuotaPreferencesRequest {
    const message = createBaseListQuotaPreferencesRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = object.order_by;
    }
    return message;
  },
  toAmino(message: ListQuotaPreferencesRequest): ListQuotaPreferencesRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.order_by = message.orderBy === "" ? undefined : message.orderBy;
    return obj;
  },
  fromAminoMsg(object: ListQuotaPreferencesRequestAminoMsg): ListQuotaPreferencesRequest {
    return ListQuotaPreferencesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListQuotaPreferencesRequestProtoMsg): ListQuotaPreferencesRequest {
    return ListQuotaPreferencesRequest.decode(message.value);
  },
  toProto(message: ListQuotaPreferencesRequest): Uint8Array {
    return ListQuotaPreferencesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListQuotaPreferencesRequest): ListQuotaPreferencesRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesRequest",
      value: ListQuotaPreferencesRequest.encode(message).finish()
    };
  }
};
function createBaseListQuotaPreferencesResponse(): ListQuotaPreferencesResponse {
  return {
    quotaPreferences: [],
    nextPageToken: "",
    unreachable: []
  };
}
export const ListQuotaPreferencesResponse = {
  typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesResponse",
  encode(message: ListQuotaPreferencesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.quotaPreferences) {
      QuotaPreference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    for (const v of message.unreachable) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQuotaPreferencesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQuotaPreferencesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quotaPreferences.push(QuotaPreference.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        case 3:
          message.unreachable.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListQuotaPreferencesResponse>): ListQuotaPreferencesResponse {
    const message = createBaseListQuotaPreferencesResponse();
    message.quotaPreferences = object.quotaPreferences?.map(e => QuotaPreference.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    message.unreachable = object.unreachable?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ListQuotaPreferencesResponseAmino): ListQuotaPreferencesResponse {
    const message = createBaseListQuotaPreferencesResponse();
    message.quotaPreferences = object.quota_preferences?.map(e => QuotaPreference.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    message.unreachable = object.unreachable?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListQuotaPreferencesResponse): ListQuotaPreferencesResponseAmino {
    const obj: any = {};
    if (message.quotaPreferences) {
      obj.quota_preferences = message.quotaPreferences.map(e => e ? QuotaPreference.toAmino(e) : undefined);
    } else {
      obj.quota_preferences = message.quotaPreferences;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    if (message.unreachable) {
      obj.unreachable = message.unreachable.map(e => e);
    } else {
      obj.unreachable = message.unreachable;
    }
    return obj;
  },
  fromAminoMsg(object: ListQuotaPreferencesResponseAminoMsg): ListQuotaPreferencesResponse {
    return ListQuotaPreferencesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListQuotaPreferencesResponseProtoMsg): ListQuotaPreferencesResponse {
    return ListQuotaPreferencesResponse.decode(message.value);
  },
  toProto(message: ListQuotaPreferencesResponse): Uint8Array {
    return ListQuotaPreferencesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListQuotaPreferencesResponse): ListQuotaPreferencesResponseProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.ListQuotaPreferencesResponse",
      value: ListQuotaPreferencesResponse.encode(message).finish()
    };
  }
};
function createBaseGetQuotaPreferenceRequest(): GetQuotaPreferenceRequest {
  return {
    name: ""
  };
}
export const GetQuotaPreferenceRequest = {
  typeUrl: "/google.api.cloudquotas.v1.GetQuotaPreferenceRequest",
  encode(message: GetQuotaPreferenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetQuotaPreferenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQuotaPreferenceRequest();
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
  fromPartial(object: Partial<GetQuotaPreferenceRequest>): GetQuotaPreferenceRequest {
    const message = createBaseGetQuotaPreferenceRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: GetQuotaPreferenceRequestAmino): GetQuotaPreferenceRequest {
    const message = createBaseGetQuotaPreferenceRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetQuotaPreferenceRequest): GetQuotaPreferenceRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetQuotaPreferenceRequestAminoMsg): GetQuotaPreferenceRequest {
    return GetQuotaPreferenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetQuotaPreferenceRequestProtoMsg): GetQuotaPreferenceRequest {
    return GetQuotaPreferenceRequest.decode(message.value);
  },
  toProto(message: GetQuotaPreferenceRequest): Uint8Array {
    return GetQuotaPreferenceRequest.encode(message).finish();
  },
  toProtoMsg(message: GetQuotaPreferenceRequest): GetQuotaPreferenceRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.GetQuotaPreferenceRequest",
      value: GetQuotaPreferenceRequest.encode(message).finish()
    };
  }
};
function createBaseCreateQuotaPreferenceRequest(): CreateQuotaPreferenceRequest {
  return {
    parent: "",
    quotaPreferenceId: "",
    quotaPreference: undefined,
    ignoreSafetyChecks: []
  };
}
export const CreateQuotaPreferenceRequest = {
  typeUrl: "/google.api.cloudquotas.v1.CreateQuotaPreferenceRequest",
  encode(message: CreateQuotaPreferenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.quotaPreferenceId !== "") {
      writer.uint32(18).string(message.quotaPreferenceId);
    }
    if (message.quotaPreference !== undefined) {
      QuotaPreference.encode(message.quotaPreference, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.ignoreSafetyChecks) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateQuotaPreferenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQuotaPreferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.quotaPreferenceId = reader.string();
          break;
        case 3:
          message.quotaPreference = QuotaPreference.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ignoreSafetyChecks.push(reader.int32() as any);
            }
          } else {
            message.ignoreSafetyChecks.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CreateQuotaPreferenceRequest>): CreateQuotaPreferenceRequest {
    const message = createBaseCreateQuotaPreferenceRequest();
    message.parent = object.parent ?? "";
    message.quotaPreferenceId = object.quotaPreferenceId ?? "";
    message.quotaPreference = object.quotaPreference !== undefined && object.quotaPreference !== null ? QuotaPreference.fromPartial(object.quotaPreference) : undefined;
    message.ignoreSafetyChecks = object.ignoreSafetyChecks?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateQuotaPreferenceRequestAmino): CreateQuotaPreferenceRequest {
    const message = createBaseCreateQuotaPreferenceRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.quota_preference_id !== undefined && object.quota_preference_id !== null) {
      message.quotaPreferenceId = object.quota_preference_id;
    }
    if (object.quota_preference !== undefined && object.quota_preference !== null) {
      message.quotaPreference = QuotaPreference.fromAmino(object.quota_preference);
    }
    message.ignoreSafetyChecks = object.ignore_safety_checks?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateQuotaPreferenceRequest): CreateQuotaPreferenceRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.quota_preference_id = message.quotaPreferenceId === "" ? undefined : message.quotaPreferenceId;
    obj.quota_preference = message.quotaPreference ? QuotaPreference.toAmino(message.quotaPreference) : undefined;
    if (message.ignoreSafetyChecks) {
      obj.ignore_safety_checks = message.ignoreSafetyChecks.map(e => e);
    } else {
      obj.ignore_safety_checks = message.ignoreSafetyChecks;
    }
    return obj;
  },
  fromAminoMsg(object: CreateQuotaPreferenceRequestAminoMsg): CreateQuotaPreferenceRequest {
    return CreateQuotaPreferenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateQuotaPreferenceRequestProtoMsg): CreateQuotaPreferenceRequest {
    return CreateQuotaPreferenceRequest.decode(message.value);
  },
  toProto(message: CreateQuotaPreferenceRequest): Uint8Array {
    return CreateQuotaPreferenceRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateQuotaPreferenceRequest): CreateQuotaPreferenceRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.CreateQuotaPreferenceRequest",
      value: CreateQuotaPreferenceRequest.encode(message).finish()
    };
  }
};
function createBaseUpdateQuotaPreferenceRequest(): UpdateQuotaPreferenceRequest {
  return {
    updateMask: undefined,
    quotaPreference: undefined,
    allowMissing: false,
    validateOnly: false,
    ignoreSafetyChecks: []
  };
}
export const UpdateQuotaPreferenceRequest = {
  typeUrl: "/google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest",
  encode(message: UpdateQuotaPreferenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(10).fork()).ldelim();
    }
    if (message.quotaPreference !== undefined) {
      QuotaPreference.encode(message.quotaPreference, writer.uint32(18).fork()).ldelim();
    }
    if (message.allowMissing === true) {
      writer.uint32(24).bool(message.allowMissing);
    }
    if (message.validateOnly === true) {
      writer.uint32(32).bool(message.validateOnly);
    }
    writer.uint32(42).fork();
    for (const v of message.ignoreSafetyChecks) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateQuotaPreferenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuotaPreferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        case 2:
          message.quotaPreference = QuotaPreference.decode(reader, reader.uint32());
          break;
        case 3:
          message.allowMissing = reader.bool();
          break;
        case 4:
          message.validateOnly = reader.bool();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ignoreSafetyChecks.push(reader.int32() as any);
            }
          } else {
            message.ignoreSafetyChecks.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateQuotaPreferenceRequest>): UpdateQuotaPreferenceRequest {
    const message = createBaseUpdateQuotaPreferenceRequest();
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    message.quotaPreference = object.quotaPreference !== undefined && object.quotaPreference !== null ? QuotaPreference.fromPartial(object.quotaPreference) : undefined;
    message.allowMissing = object.allowMissing ?? false;
    message.validateOnly = object.validateOnly ?? false;
    message.ignoreSafetyChecks = object.ignoreSafetyChecks?.map(e => e) || [];
    return message;
  },
  fromAmino(object: UpdateQuotaPreferenceRequestAmino): UpdateQuotaPreferenceRequest {
    const message = createBaseUpdateQuotaPreferenceRequest();
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    if (object.quota_preference !== undefined && object.quota_preference !== null) {
      message.quotaPreference = QuotaPreference.fromAmino(object.quota_preference);
    }
    if (object.allow_missing !== undefined && object.allow_missing !== null) {
      message.allowMissing = object.allow_missing;
    }
    if (object.validate_only !== undefined && object.validate_only !== null) {
      message.validateOnly = object.validate_only;
    }
    message.ignoreSafetyChecks = object.ignore_safety_checks?.map(e => e) || [];
    return message;
  },
  toAmino(message: UpdateQuotaPreferenceRequest): UpdateQuotaPreferenceRequestAmino {
    const obj: any = {};
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    obj.quota_preference = message.quotaPreference ? QuotaPreference.toAmino(message.quotaPreference) : undefined;
    obj.allow_missing = message.allowMissing === false ? undefined : message.allowMissing;
    obj.validate_only = message.validateOnly === false ? undefined : message.validateOnly;
    if (message.ignoreSafetyChecks) {
      obj.ignore_safety_checks = message.ignoreSafetyChecks.map(e => e);
    } else {
      obj.ignore_safety_checks = message.ignoreSafetyChecks;
    }
    return obj;
  },
  fromAminoMsg(object: UpdateQuotaPreferenceRequestAminoMsg): UpdateQuotaPreferenceRequest {
    return UpdateQuotaPreferenceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateQuotaPreferenceRequestProtoMsg): UpdateQuotaPreferenceRequest {
    return UpdateQuotaPreferenceRequest.decode(message.value);
  },
  toProto(message: UpdateQuotaPreferenceRequest): Uint8Array {
    return UpdateQuotaPreferenceRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateQuotaPreferenceRequest): UpdateQuotaPreferenceRequestProtoMsg {
    return {
      typeUrl: "/google.api.cloudquotas.v1.UpdateQuotaPreferenceRequest",
      value: UpdateQuotaPreferenceRequest.encode(message).finish()
    };
  }
};