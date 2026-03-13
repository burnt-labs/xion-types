//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { bytesFromBase64, base64FromBytes } from "../../helpers";
/** Represents an HTTP request. */
export interface HttpRequest {
  /** The HTTP request method. */
  method: string;
  /** The HTTP request URI. */
  uri: string;
  /**
   * The HTTP request headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the request.
   */
  headers: HttpHeader[];
  /** The HTTP request body. If the body is not expected, it should be empty. */
  body: Uint8Array;
}
export interface HttpRequestProtoMsg {
  typeUrl: "/google.rpc.HttpRequest";
  value: Uint8Array;
}
/**
 * Represents an HTTP request.
 * @name HttpRequestAmino
 * @package google.rpc
 * @see proto type: google.rpc.HttpRequest
 */
export interface HttpRequestAmino {
  /**
   * The HTTP request method.
   */
  method?: string;
  /**
   * The HTTP request URI.
   */
  uri?: string;
  /**
   * The HTTP request headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the request.
   */
  headers?: HttpHeaderAmino[];
  /**
   * The HTTP request body. If the body is not expected, it should be empty.
   */
  body?: string;
}
export interface HttpRequestAminoMsg {
  type: "/google.rpc.HttpRequest";
  value: HttpRequestAmino;
}
/** Represents an HTTP request. */
export interface HttpRequestSDKType {
  method: string;
  uri: string;
  headers: HttpHeaderSDKType[];
  body: Uint8Array;
}
/** Represents an HTTP response. */
export interface HttpResponse {
  /** The HTTP status code, such as 200 or 404. */
  status: number;
  /** The HTTP reason phrase, such as "OK" or "Not Found". */
  reason: string;
  /**
   * The HTTP response headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the response.
   */
  headers: HttpHeader[];
  /** The HTTP response body. If the body is not expected, it should be empty. */
  body: Uint8Array;
}
export interface HttpResponseProtoMsg {
  typeUrl: "/google.rpc.HttpResponse";
  value: Uint8Array;
}
/**
 * Represents an HTTP response.
 * @name HttpResponseAmino
 * @package google.rpc
 * @see proto type: google.rpc.HttpResponse
 */
export interface HttpResponseAmino {
  /**
   * The HTTP status code, such as 200 or 404.
   */
  status?: number;
  /**
   * The HTTP reason phrase, such as "OK" or "Not Found".
   */
  reason?: string;
  /**
   * The HTTP response headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the response.
   */
  headers?: HttpHeaderAmino[];
  /**
   * The HTTP response body. If the body is not expected, it should be empty.
   */
  body?: string;
}
export interface HttpResponseAminoMsg {
  type: "/google.rpc.HttpResponse";
  value: HttpResponseAmino;
}
/** Represents an HTTP response. */
export interface HttpResponseSDKType {
  status: number;
  reason: string;
  headers: HttpHeaderSDKType[];
  body: Uint8Array;
}
/** Represents an HTTP header. */
export interface HttpHeader {
  /** The HTTP header key. It is case insensitive. */
  key: string;
  /** The HTTP header value. */
  value: string;
}
export interface HttpHeaderProtoMsg {
  typeUrl: "/google.rpc.HttpHeader";
  value: Uint8Array;
}
/**
 * Represents an HTTP header.
 * @name HttpHeaderAmino
 * @package google.rpc
 * @see proto type: google.rpc.HttpHeader
 */
export interface HttpHeaderAmino {
  /**
   * The HTTP header key. It is case insensitive.
   */
  key?: string;
  /**
   * The HTTP header value.
   */
  value?: string;
}
export interface HttpHeaderAminoMsg {
  type: "/google.rpc.HttpHeader";
  value: HttpHeaderAmino;
}
/** Represents an HTTP header. */
export interface HttpHeaderSDKType {
  key: string;
  value: string;
}
function createBaseHttpRequest(): HttpRequest {
  return {
    method: "",
    uri: "",
    headers: [],
    body: new Uint8Array()
  };
}
export const HttpRequest = {
  typeUrl: "/google.rpc.HttpRequest",
  encode(message: HttpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    if (message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    for (const v of message.headers) {
      HttpHeader.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(34).bytes(message.body);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.uri = reader.string();
          break;
        case 3:
          message.headers.push(HttpHeader.decode(reader, reader.uint32()));
          break;
        case 4:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HttpRequest>): HttpRequest {
    const message = createBaseHttpRequest();
    message.method = object.method ?? "";
    message.uri = object.uri ?? "";
    message.headers = object.headers?.map(e => HttpHeader.fromPartial(e)) || [];
    message.body = object.body ?? new Uint8Array();
    return message;
  },
  fromAmino(object: HttpRequestAmino): HttpRequest {
    const message = createBaseHttpRequest();
    if (object.method !== undefined && object.method !== null) {
      message.method = object.method;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    message.headers = object.headers?.map(e => HttpHeader.fromAmino(e)) || [];
    if (object.body !== undefined && object.body !== null) {
      message.body = bytesFromBase64(object.body);
    }
    return message;
  },
  toAmino(message: HttpRequest): HttpRequestAmino {
    const obj: any = {};
    obj.method = message.method === "" ? undefined : message.method;
    obj.uri = message.uri === "" ? undefined : message.uri;
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? HttpHeader.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    obj.body = message.body ? base64FromBytes(message.body) : undefined;
    return obj;
  },
  fromAminoMsg(object: HttpRequestAminoMsg): HttpRequest {
    return HttpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: HttpRequestProtoMsg): HttpRequest {
    return HttpRequest.decode(message.value);
  },
  toProto(message: HttpRequest): Uint8Array {
    return HttpRequest.encode(message).finish();
  },
  toProtoMsg(message: HttpRequest): HttpRequestProtoMsg {
    return {
      typeUrl: "/google.rpc.HttpRequest",
      value: HttpRequest.encode(message).finish()
    };
  }
};
function createBaseHttpResponse(): HttpResponse {
  return {
    status: 0,
    reason: "",
    headers: [],
    body: new Uint8Array()
  };
}
export const HttpResponse = {
  typeUrl: "/google.rpc.HttpResponse",
  encode(message: HttpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    for (const v of message.headers) {
      HttpHeader.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.body.length !== 0) {
      writer.uint32(34).bytes(message.body);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HttpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.headers.push(HttpHeader.decode(reader, reader.uint32()));
          break;
        case 4:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HttpResponse>): HttpResponse {
    const message = createBaseHttpResponse();
    message.status = object.status ?? 0;
    message.reason = object.reason ?? "";
    message.headers = object.headers?.map(e => HttpHeader.fromPartial(e)) || [];
    message.body = object.body ?? new Uint8Array();
    return message;
  },
  fromAmino(object: HttpResponseAmino): HttpResponse {
    const message = createBaseHttpResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    message.headers = object.headers?.map(e => HttpHeader.fromAmino(e)) || [];
    if (object.body !== undefined && object.body !== null) {
      message.body = bytesFromBase64(object.body);
    }
    return message;
  },
  toAmino(message: HttpResponse): HttpResponseAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.reason = message.reason === "" ? undefined : message.reason;
    if (message.headers) {
      obj.headers = message.headers.map(e => e ? HttpHeader.toAmino(e) : undefined);
    } else {
      obj.headers = message.headers;
    }
    obj.body = message.body ? base64FromBytes(message.body) : undefined;
    return obj;
  },
  fromAminoMsg(object: HttpResponseAminoMsg): HttpResponse {
    return HttpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: HttpResponseProtoMsg): HttpResponse {
    return HttpResponse.decode(message.value);
  },
  toProto(message: HttpResponse): Uint8Array {
    return HttpResponse.encode(message).finish();
  },
  toProtoMsg(message: HttpResponse): HttpResponseProtoMsg {
    return {
      typeUrl: "/google.rpc.HttpResponse",
      value: HttpResponse.encode(message).finish()
    };
  }
};
function createBaseHttpHeader(): HttpHeader {
  return {
    key: "",
    value: ""
  };
}
export const HttpHeader = {
  typeUrl: "/google.rpc.HttpHeader",
  encode(message: HttpHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HttpHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpHeader();
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
  fromPartial(object: Partial<HttpHeader>): HttpHeader {
    const message = createBaseHttpHeader();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: HttpHeaderAmino): HttpHeader {
    const message = createBaseHttpHeader();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: HttpHeader): HttpHeaderAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: HttpHeaderAminoMsg): HttpHeader {
    return HttpHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: HttpHeaderProtoMsg): HttpHeader {
    return HttpHeader.decode(message.value);
  },
  toProto(message: HttpHeader): Uint8Array {
    return HttpHeader.encode(message).finish();
  },
  toProtoMsg(message: HttpHeader): HttpHeaderProtoMsg {
    return {
      typeUrl: "/google.rpc.HttpHeader",
      value: HttpHeader.encode(message).finish()
    };
  }
};