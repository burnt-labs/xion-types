//@ts-nocheck
import { Key, KeyAmino, KeySDKType } from "./resources";
import { FieldMask, FieldMaskAmino, FieldMaskSDKType } from "../../../protobuf/field_mask";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Request message for `CreateKey` method. */
export interface CreateKeyRequest {
  /** Required. The project in which the API key is created. */
  parent: string;
  /**
   * Required. The API key fields to set at creation time.
   * You can configure only the `display_name`, `restrictions`, and
   * `annotations` fields.
   */
  key?: Key;
  /**
   * User specified key id (optional). If specified, it will become the final
   * component of the key resource name.
   * 
   * The id must be unique within the project, must conform with RFC-1034,
   * is restricted to lower-cased letters, and has a maximum length of 63
   * characters. In another word, the id must match the regular
   * expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
   * 
   * The id must NOT be a UUID-like string.
   */
  keyId: string;
}
export interface CreateKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.CreateKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `CreateKey` method.
 * @name CreateKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.CreateKeyRequest
 */
export interface CreateKeyRequestAmino {
  /**
   * Required. The project in which the API key is created.
   */
  parent?: string;
  /**
   * Required. The API key fields to set at creation time.
   * You can configure only the `display_name`, `restrictions`, and
   * `annotations` fields.
   */
  key?: KeyAmino;
  /**
   * User specified key id (optional). If specified, it will become the final
   * component of the key resource name.
   * 
   * The id must be unique within the project, must conform with RFC-1034,
   * is restricted to lower-cased letters, and has a maximum length of 63
   * characters. In another word, the id must match the regular
   * expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
   * 
   * The id must NOT be a UUID-like string.
   */
  key_id?: string;
}
export interface CreateKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.CreateKeyRequest";
  value: CreateKeyRequestAmino;
}
/** Request message for `CreateKey` method. */
export interface CreateKeyRequestSDKType {
  parent: string;
  key?: KeySDKType;
  key_id: string;
}
/** Request message for `ListKeys` method. */
export interface ListKeysRequest {
  /** Required. Lists all API keys associated with this project. */
  parent: string;
  /** Optional. Specifies the maximum number of results to be returned at a time. */
  pageSize: number;
  /** Optional. Requests a specific page of results. */
  pageToken: string;
  /**
   * Optional. Indicate that keys deleted in the past 30 days should also be
   * returned.
   */
  showDeleted: boolean;
}
export interface ListKeysRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.ListKeysRequest";
  value: Uint8Array;
}
/**
 * Request message for `ListKeys` method.
 * @name ListKeysRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.ListKeysRequest
 */
export interface ListKeysRequestAmino {
  /**
   * Required. Lists all API keys associated with this project.
   */
  parent?: string;
  /**
   * Optional. Specifies the maximum number of results to be returned at a time.
   */
  page_size?: number;
  /**
   * Optional. Requests a specific page of results.
   */
  page_token?: string;
  /**
   * Optional. Indicate that keys deleted in the past 30 days should also be
   * returned.
   */
  show_deleted?: boolean;
}
export interface ListKeysRequestAminoMsg {
  type: "/google.api.apikeys.v2.ListKeysRequest";
  value: ListKeysRequestAmino;
}
/** Request message for `ListKeys` method. */
export interface ListKeysRequestSDKType {
  parent: string;
  page_size: number;
  page_token: string;
  show_deleted: boolean;
}
/** Response message for `ListKeys` method. */
export interface ListKeysResponse {
  /** A list of API keys. */
  keys: Key[];
  /** The pagination token for the next page of results. */
  nextPageToken: string;
}
export interface ListKeysResponseProtoMsg {
  typeUrl: "/google.api.apikeys.v2.ListKeysResponse";
  value: Uint8Array;
}
/**
 * Response message for `ListKeys` method.
 * @name ListKeysResponseAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.ListKeysResponse
 */
export interface ListKeysResponseAmino {
  /**
   * A list of API keys.
   */
  keys?: KeyAmino[];
  /**
   * The pagination token for the next page of results.
   */
  next_page_token?: string;
}
export interface ListKeysResponseAminoMsg {
  type: "/google.api.apikeys.v2.ListKeysResponse";
  value: ListKeysResponseAmino;
}
/** Response message for `ListKeys` method. */
export interface ListKeysResponseSDKType {
  keys: KeySDKType[];
  next_page_token: string;
}
/** Request message for `GetKey` method. */
export interface GetKeyRequest {
  /** Required. The resource name of the API key to get. */
  name: string;
}
export interface GetKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.GetKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `GetKey` method.
 * @name GetKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.GetKeyRequest
 */
export interface GetKeyRequestAmino {
  /**
   * Required. The resource name of the API key to get.
   */
  name?: string;
}
export interface GetKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.GetKeyRequest";
  value: GetKeyRequestAmino;
}
/** Request message for `GetKey` method. */
export interface GetKeyRequestSDKType {
  name: string;
}
/** Request message for `GetKeyString` method. */
export interface GetKeyStringRequest {
  /** Required. The resource name of the API key to be retrieved. */
  name: string;
}
export interface GetKeyStringRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.GetKeyStringRequest";
  value: Uint8Array;
}
/**
 * Request message for `GetKeyString` method.
 * @name GetKeyStringRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.GetKeyStringRequest
 */
export interface GetKeyStringRequestAmino {
  /**
   * Required. The resource name of the API key to be retrieved.
   */
  name?: string;
}
export interface GetKeyStringRequestAminoMsg {
  type: "/google.api.apikeys.v2.GetKeyStringRequest";
  value: GetKeyStringRequestAmino;
}
/** Request message for `GetKeyString` method. */
export interface GetKeyStringRequestSDKType {
  name: string;
}
/** Response message for `GetKeyString` method. */
export interface GetKeyStringResponse {
  /** An encrypted and signed value of the key. */
  keyString: string;
}
export interface GetKeyStringResponseProtoMsg {
  typeUrl: "/google.api.apikeys.v2.GetKeyStringResponse";
  value: Uint8Array;
}
/**
 * Response message for `GetKeyString` method.
 * @name GetKeyStringResponseAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.GetKeyStringResponse
 */
export interface GetKeyStringResponseAmino {
  /**
   * An encrypted and signed value of the key.
   */
  key_string?: string;
}
export interface GetKeyStringResponseAminoMsg {
  type: "/google.api.apikeys.v2.GetKeyStringResponse";
  value: GetKeyStringResponseAmino;
}
/** Response message for `GetKeyString` method. */
export interface GetKeyStringResponseSDKType {
  key_string: string;
}
/** Request message for `UpdateKey` method. */
export interface UpdateKeyRequest {
  /**
   * Required. Set the `name` field to the resource name of the API key to be
   * updated. You can update only the `display_name`, `restrictions`, and
   * `annotations` fields.
   */
  key?: Key;
  /**
   * The field mask specifies which fields to be updated as part of this
   * request. All other fields are ignored.
   * Mutable fields are: `display_name`, `restrictions`, and `annotations`.
   * If an update mask is not provided, the service treats it as an implied mask
   * equivalent to all allowed fields that are set on the wire. If the field
   * mask has a special value "*", the service treats it equivalent to replace
   * all allowed mutable fields.
   */
  updateMask?: FieldMask;
}
export interface UpdateKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.UpdateKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `UpdateKey` method.
 * @name UpdateKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.UpdateKeyRequest
 */
export interface UpdateKeyRequestAmino {
  /**
   * Required. Set the `name` field to the resource name of the API key to be
   * updated. You can update only the `display_name`, `restrictions`, and
   * `annotations` fields.
   */
  key?: KeyAmino;
  /**
   * The field mask specifies which fields to be updated as part of this
   * request. All other fields are ignored.
   * Mutable fields are: `display_name`, `restrictions`, and `annotations`.
   * If an update mask is not provided, the service treats it as an implied mask
   * equivalent to all allowed fields that are set on the wire. If the field
   * mask has a special value "*", the service treats it equivalent to replace
   * all allowed mutable fields.
   */
  update_mask?: FieldMaskAmino;
}
export interface UpdateKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.UpdateKeyRequest";
  value: UpdateKeyRequestAmino;
}
/** Request message for `UpdateKey` method. */
export interface UpdateKeyRequestSDKType {
  key?: KeySDKType;
  update_mask?: FieldMaskSDKType;
}
/** Request message for `DeleteKey` method. */
export interface DeleteKeyRequest {
  /** Required. The resource name of the API key to be deleted. */
  name: string;
  /**
   * Optional. The etag known to the client for the expected state of the key.
   * This is to be used for optimistic concurrency.
   */
  etag: string;
}
export interface DeleteKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.DeleteKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `DeleteKey` method.
 * @name DeleteKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.DeleteKeyRequest
 */
export interface DeleteKeyRequestAmino {
  /**
   * Required. The resource name of the API key to be deleted.
   */
  name?: string;
  /**
   * Optional. The etag known to the client for the expected state of the key.
   * This is to be used for optimistic concurrency.
   */
  etag?: string;
}
export interface DeleteKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.DeleteKeyRequest";
  value: DeleteKeyRequestAmino;
}
/** Request message for `DeleteKey` method. */
export interface DeleteKeyRequestSDKType {
  name: string;
  etag: string;
}
/** Request message for `UndeleteKey` method. */
export interface UndeleteKeyRequest {
  /** Required. The resource name of the API key to be undeleted. */
  name: string;
}
export interface UndeleteKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.UndeleteKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `UndeleteKey` method.
 * @name UndeleteKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.UndeleteKeyRequest
 */
export interface UndeleteKeyRequestAmino {
  /**
   * Required. The resource name of the API key to be undeleted.
   */
  name?: string;
}
export interface UndeleteKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.UndeleteKeyRequest";
  value: UndeleteKeyRequestAmino;
}
/** Request message for `UndeleteKey` method. */
export interface UndeleteKeyRequestSDKType {
  name: string;
}
/** Request message for `LookupKey` method. */
export interface LookupKeyRequest {
  /** Required. Finds the project that owns the key string value. */
  keyString: string;
}
export interface LookupKeyRequestProtoMsg {
  typeUrl: "/google.api.apikeys.v2.LookupKeyRequest";
  value: Uint8Array;
}
/**
 * Request message for `LookupKey` method.
 * @name LookupKeyRequestAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.LookupKeyRequest
 */
export interface LookupKeyRequestAmino {
  /**
   * Required. Finds the project that owns the key string value.
   */
  key_string?: string;
}
export interface LookupKeyRequestAminoMsg {
  type: "/google.api.apikeys.v2.LookupKeyRequest";
  value: LookupKeyRequestAmino;
}
/** Request message for `LookupKey` method. */
export interface LookupKeyRequestSDKType {
  key_string: string;
}
/** Response message for `LookupKey` method. */
export interface LookupKeyResponse {
  /** The project that owns the key with the value specified in the request. */
  parent: string;
  /**
   * The resource name of the API key. If the API key has been purged,
   * resource name is empty.
   */
  name: string;
}
export interface LookupKeyResponseProtoMsg {
  typeUrl: "/google.api.apikeys.v2.LookupKeyResponse";
  value: Uint8Array;
}
/**
 * Response message for `LookupKey` method.
 * @name LookupKeyResponseAmino
 * @package google.api.apikeys.v2
 * @see proto type: google.api.apikeys.v2.LookupKeyResponse
 */
export interface LookupKeyResponseAmino {
  /**
   * The project that owns the key with the value specified in the request.
   */
  parent?: string;
  /**
   * The resource name of the API key. If the API key has been purged,
   * resource name is empty.
   */
  name?: string;
}
export interface LookupKeyResponseAminoMsg {
  type: "/google.api.apikeys.v2.LookupKeyResponse";
  value: LookupKeyResponseAmino;
}
/** Response message for `LookupKey` method. */
export interface LookupKeyResponseSDKType {
  parent: string;
  name: string;
}
function createBaseCreateKeyRequest(): CreateKeyRequest {
  return {
    parent: "",
    key: undefined,
    keyId: ""
  };
}
export const CreateKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.CreateKeyRequest",
  encode(message: CreateKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(18).fork()).ldelim();
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 3:
          message.keyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CreateKeyRequest>): CreateKeyRequest {
    const message = createBaseCreateKeyRequest();
    message.parent = object.parent ?? "";
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.keyId = object.keyId ?? "";
    return message;
  },
  fromAmino(object: CreateKeyRequestAmino): CreateKeyRequest {
    const message = createBaseCreateKeyRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.key_id !== undefined && object.key_id !== null) {
      message.keyId = object.key_id;
    }
    return message;
  },
  toAmino(message: CreateKeyRequest): CreateKeyRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.key_id = message.keyId === "" ? undefined : message.keyId;
    return obj;
  },
  fromAminoMsg(object: CreateKeyRequestAminoMsg): CreateKeyRequest {
    return CreateKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateKeyRequestProtoMsg): CreateKeyRequest {
    return CreateKeyRequest.decode(message.value);
  },
  toProto(message: CreateKeyRequest): Uint8Array {
    return CreateKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateKeyRequest): CreateKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.CreateKeyRequest",
      value: CreateKeyRequest.encode(message).finish()
    };
  }
};
function createBaseListKeysRequest(): ListKeysRequest {
  return {
    parent: "",
    pageSize: 0,
    pageToken: "",
    showDeleted: false
  };
}
export const ListKeysRequest = {
  typeUrl: "/google.api.apikeys.v2.ListKeysRequest",
  encode(message: ListKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.showDeleted === true) {
      writer.uint32(48).bool(message.showDeleted);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListKeysRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysRequest();
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
        case 6:
          message.showDeleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ListKeysRequest>): ListKeysRequest {
    const message = createBaseListKeysRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.showDeleted = object.showDeleted ?? false;
    return message;
  },
  fromAmino(object: ListKeysRequestAmino): ListKeysRequest {
    const message = createBaseListKeysRequest();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    if (object.show_deleted !== undefined && object.show_deleted !== null) {
      message.showDeleted = object.show_deleted;
    }
    return message;
  },
  toAmino(message: ListKeysRequest): ListKeysRequestAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    obj.show_deleted = message.showDeleted === false ? undefined : message.showDeleted;
    return obj;
  },
  fromAminoMsg(object: ListKeysRequestAminoMsg): ListKeysRequest {
    return ListKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListKeysRequestProtoMsg): ListKeysRequest {
    return ListKeysRequest.decode(message.value);
  },
  toProto(message: ListKeysRequest): Uint8Array {
    return ListKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: ListKeysRequest): ListKeysRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.ListKeysRequest",
      value: ListKeysRequest.encode(message).finish()
    };
  }
};
function createBaseListKeysResponse(): ListKeysResponse {
  return {
    keys: [],
    nextPageToken: ""
  };
}
export const ListKeysResponse = {
  typeUrl: "/google.api.apikeys.v2.ListKeysResponse",
  encode(message: ListKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(Key.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<ListKeysResponse>): ListKeysResponse {
    const message = createBaseListKeysResponse();
    message.keys = object.keys?.map(e => Key.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromAmino(object: ListKeysResponseAmino): ListKeysResponse {
    const message = createBaseListKeysResponse();
    message.keys = object.keys?.map(e => Key.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListKeysResponse): ListKeysResponseAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e ? Key.toAmino(e) : undefined);
    } else {
      obj.keys = message.keys;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListKeysResponseAminoMsg): ListKeysResponse {
    return ListKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListKeysResponseProtoMsg): ListKeysResponse {
    return ListKeysResponse.decode(message.value);
  },
  toProto(message: ListKeysResponse): Uint8Array {
    return ListKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: ListKeysResponse): ListKeysResponseProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.ListKeysResponse",
      value: ListKeysResponse.encode(message).finish()
    };
  }
};
function createBaseGetKeyRequest(): GetKeyRequest {
  return {
    name: ""
  };
}
export const GetKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.GetKeyRequest",
  encode(message: GetKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRequest();
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
  fromPartial(object: Partial<GetKeyRequest>): GetKeyRequest {
    const message = createBaseGetKeyRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: GetKeyRequestAmino): GetKeyRequest {
    const message = createBaseGetKeyRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetKeyRequest): GetKeyRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetKeyRequestAminoMsg): GetKeyRequest {
    return GetKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetKeyRequestProtoMsg): GetKeyRequest {
    return GetKeyRequest.decode(message.value);
  },
  toProto(message: GetKeyRequest): Uint8Array {
    return GetKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: GetKeyRequest): GetKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.GetKeyRequest",
      value: GetKeyRequest.encode(message).finish()
    };
  }
};
function createBaseGetKeyStringRequest(): GetKeyStringRequest {
  return {
    name: ""
  };
}
export const GetKeyStringRequest = {
  typeUrl: "/google.api.apikeys.v2.GetKeyStringRequest",
  encode(message: GetKeyStringRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetKeyStringRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyStringRequest();
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
  fromPartial(object: Partial<GetKeyStringRequest>): GetKeyStringRequest {
    const message = createBaseGetKeyStringRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: GetKeyStringRequestAmino): GetKeyStringRequest {
    const message = createBaseGetKeyStringRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetKeyStringRequest): GetKeyStringRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetKeyStringRequestAminoMsg): GetKeyStringRequest {
    return GetKeyStringRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetKeyStringRequestProtoMsg): GetKeyStringRequest {
    return GetKeyStringRequest.decode(message.value);
  },
  toProto(message: GetKeyStringRequest): Uint8Array {
    return GetKeyStringRequest.encode(message).finish();
  },
  toProtoMsg(message: GetKeyStringRequest): GetKeyStringRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.GetKeyStringRequest",
      value: GetKeyStringRequest.encode(message).finish()
    };
  }
};
function createBaseGetKeyStringResponse(): GetKeyStringResponse {
  return {
    keyString: ""
  };
}
export const GetKeyStringResponse = {
  typeUrl: "/google.api.apikeys.v2.GetKeyStringResponse",
  encode(message: GetKeyStringResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyString !== "") {
      writer.uint32(10).string(message.keyString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetKeyStringResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GetKeyStringResponse>): GetKeyStringResponse {
    const message = createBaseGetKeyStringResponse();
    message.keyString = object.keyString ?? "";
    return message;
  },
  fromAmino(object: GetKeyStringResponseAmino): GetKeyStringResponse {
    const message = createBaseGetKeyStringResponse();
    if (object.key_string !== undefined && object.key_string !== null) {
      message.keyString = object.key_string;
    }
    return message;
  },
  toAmino(message: GetKeyStringResponse): GetKeyStringResponseAmino {
    const obj: any = {};
    obj.key_string = message.keyString === "" ? undefined : message.keyString;
    return obj;
  },
  fromAminoMsg(object: GetKeyStringResponseAminoMsg): GetKeyStringResponse {
    return GetKeyStringResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetKeyStringResponseProtoMsg): GetKeyStringResponse {
    return GetKeyStringResponse.decode(message.value);
  },
  toProto(message: GetKeyStringResponse): Uint8Array {
    return GetKeyStringResponse.encode(message).finish();
  },
  toProtoMsg(message: GetKeyStringResponse): GetKeyStringResponseProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.GetKeyStringResponse",
      value: GetKeyStringResponse.encode(message).finish()
    };
  }
};
function createBaseUpdateKeyRequest(): UpdateKeyRequest {
  return {
    key: undefined,
    updateMask: undefined
  };
}
export const UpdateKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.UpdateKeyRequest",
  encode(message: UpdateKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(message.updateMask, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateMask = FieldMask.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UpdateKeyRequest>): UpdateKeyRequest {
    const message = createBaseUpdateKeyRequest();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.updateMask = object.updateMask !== undefined && object.updateMask !== null ? FieldMask.fromPartial(object.updateMask) : undefined;
    return message;
  },
  fromAmino(object: UpdateKeyRequestAmino): UpdateKeyRequest {
    const message = createBaseUpdateKeyRequest();
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.update_mask !== undefined && object.update_mask !== null) {
      message.updateMask = FieldMask.fromAmino(object.update_mask);
    }
    return message;
  },
  toAmino(message: UpdateKeyRequest): UpdateKeyRequestAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.update_mask = message.updateMask ? FieldMask.toAmino(message.updateMask) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateKeyRequestAminoMsg): UpdateKeyRequest {
    return UpdateKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateKeyRequestProtoMsg): UpdateKeyRequest {
    return UpdateKeyRequest.decode(message.value);
  },
  toProto(message: UpdateKeyRequest): Uint8Array {
    return UpdateKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: UpdateKeyRequest): UpdateKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.UpdateKeyRequest",
      value: UpdateKeyRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteKeyRequest(): DeleteKeyRequest {
  return {
    name: "",
    etag: ""
  };
}
export const DeleteKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.DeleteKeyRequest",
  encode(message: DeleteKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.etag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DeleteKeyRequest>): DeleteKeyRequest {
    const message = createBaseDeleteKeyRequest();
    message.name = object.name ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
  fromAmino(object: DeleteKeyRequestAmino): DeleteKeyRequest {
    const message = createBaseDeleteKeyRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.etag !== undefined && object.etag !== null) {
      message.etag = object.etag;
    }
    return message;
  },
  toAmino(message: DeleteKeyRequest): DeleteKeyRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.etag = message.etag === "" ? undefined : message.etag;
    return obj;
  },
  fromAminoMsg(object: DeleteKeyRequestAminoMsg): DeleteKeyRequest {
    return DeleteKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteKeyRequestProtoMsg): DeleteKeyRequest {
    return DeleteKeyRequest.decode(message.value);
  },
  toProto(message: DeleteKeyRequest): Uint8Array {
    return DeleteKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteKeyRequest): DeleteKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.DeleteKeyRequest",
      value: DeleteKeyRequest.encode(message).finish()
    };
  }
};
function createBaseUndeleteKeyRequest(): UndeleteKeyRequest {
  return {
    name: ""
  };
}
export const UndeleteKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.UndeleteKeyRequest",
  encode(message: UndeleteKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UndeleteKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndeleteKeyRequest();
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
  fromPartial(object: Partial<UndeleteKeyRequest>): UndeleteKeyRequest {
    const message = createBaseUndeleteKeyRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: UndeleteKeyRequestAmino): UndeleteKeyRequest {
    const message = createBaseUndeleteKeyRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: UndeleteKeyRequest): UndeleteKeyRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: UndeleteKeyRequestAminoMsg): UndeleteKeyRequest {
    return UndeleteKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: UndeleteKeyRequestProtoMsg): UndeleteKeyRequest {
    return UndeleteKeyRequest.decode(message.value);
  },
  toProto(message: UndeleteKeyRequest): Uint8Array {
    return UndeleteKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: UndeleteKeyRequest): UndeleteKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.UndeleteKeyRequest",
      value: UndeleteKeyRequest.encode(message).finish()
    };
  }
};
function createBaseLookupKeyRequest(): LookupKeyRequest {
  return {
    keyString: ""
  };
}
export const LookupKeyRequest = {
  typeUrl: "/google.api.apikeys.v2.LookupKeyRequest",
  encode(message: LookupKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyString !== "") {
      writer.uint32(10).string(message.keyString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LookupKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LookupKeyRequest>): LookupKeyRequest {
    const message = createBaseLookupKeyRequest();
    message.keyString = object.keyString ?? "";
    return message;
  },
  fromAmino(object: LookupKeyRequestAmino): LookupKeyRequest {
    const message = createBaseLookupKeyRequest();
    if (object.key_string !== undefined && object.key_string !== null) {
      message.keyString = object.key_string;
    }
    return message;
  },
  toAmino(message: LookupKeyRequest): LookupKeyRequestAmino {
    const obj: any = {};
    obj.key_string = message.keyString === "" ? undefined : message.keyString;
    return obj;
  },
  fromAminoMsg(object: LookupKeyRequestAminoMsg): LookupKeyRequest {
    return LookupKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LookupKeyRequestProtoMsg): LookupKeyRequest {
    return LookupKeyRequest.decode(message.value);
  },
  toProto(message: LookupKeyRequest): Uint8Array {
    return LookupKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: LookupKeyRequest): LookupKeyRequestProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.LookupKeyRequest",
      value: LookupKeyRequest.encode(message).finish()
    };
  }
};
function createBaseLookupKeyResponse(): LookupKeyResponse {
  return {
    parent: "",
    name: ""
  };
}
export const LookupKeyResponse = {
  typeUrl: "/google.api.apikeys.v2.LookupKeyResponse",
  encode(message: LookupKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LookupKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LookupKeyResponse>): LookupKeyResponse {
    const message = createBaseLookupKeyResponse();
    message.parent = object.parent ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: LookupKeyResponseAmino): LookupKeyResponse {
    const message = createBaseLookupKeyResponse();
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: LookupKeyResponse): LookupKeyResponseAmino {
    const obj: any = {};
    obj.parent = message.parent === "" ? undefined : message.parent;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: LookupKeyResponseAminoMsg): LookupKeyResponse {
    return LookupKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LookupKeyResponseProtoMsg): LookupKeyResponse {
    return LookupKeyResponse.decode(message.value);
  },
  toProto(message: LookupKeyResponse): Uint8Array {
    return LookupKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: LookupKeyResponse): LookupKeyResponseProtoMsg {
    return {
      typeUrl: "/google.api.apikeys.v2.LookupKeyResponse",
      value: LookupKeyResponse.encode(message).finish()
    };
  }
};