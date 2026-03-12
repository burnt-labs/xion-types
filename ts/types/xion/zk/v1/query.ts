//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** SnarkJsProof represents a ZK-SNARK proof in SnarkJS format. */
export interface SnarkJsProof {
  /** pi_a defines the first component of the proof. */
  piA: Uint8Array[];
  /** pi_b defines the second component of the proof. */
  piB: Uint8Array[];
  /** pi_c defines the third component of the proof. */
  piC: Uint8Array[];
}
export interface SnarkJsProofProtoMsg {
  typeUrl: "/xion.zk.v1.SnarkJsProof";
  value: Uint8Array;
}
/**
 * SnarkJsProof represents a ZK-SNARK proof in SnarkJS format.
 * @name SnarkJsProofAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.SnarkJsProof
 */
export interface SnarkJsProofAmino {
  /**
   * pi_a defines the first component of the proof.
   */
  pi_a?: string[];
  /**
   * pi_b defines the second component of the proof.
   */
  pi_b?: string[];
  /**
   * pi_c defines the third component of the proof.
   */
  pi_c?: string[];
}
export interface SnarkJsProofAminoMsg {
  type: "/xion.zk.v1.SnarkJsProof";
  value: SnarkJsProofAmino;
}
/** SnarkJsProof represents a ZK-SNARK proof in SnarkJS format. */
export interface SnarkJsProofSDKType {
  pi_a: Uint8Array[];
  pi_b: Uint8Array[];
  pi_c: Uint8Array[];
}
/** QueryVerifyRequest is the request type for the Query/ProofVerify RPC method. */
export interface QueryVerifyRequest {
  /** proof is the serialized ZK proof to verify. */
  proof: Uint8Array;
  /** public_inputs is the list of public inputs for the proof. */
  publicInputs: string[];
  /** vkey_name is the name of the verification key to use. */
  vkeyName: string;
  /** vkey_id is the ID of the verification key to use. */
  vkeyId: bigint;
}
export interface QueryVerifyRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVerifyRequest";
  value: Uint8Array;
}
/**
 * QueryVerifyRequest is the request type for the Query/ProofVerify RPC method.
 * @name QueryVerifyRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVerifyRequest
 */
export interface QueryVerifyRequestAmino {
  /**
   * proof is the serialized ZK proof to verify.
   */
  proof?: string;
  /**
   * public_inputs is the list of public inputs for the proof.
   */
  public_inputs?: string[];
  /**
   * vkey_name is the name of the verification key to use.
   */
  vkey_name?: string;
  /**
   * vkey_id is the ID of the verification key to use.
   */
  vkey_id?: string;
}
export interface QueryVerifyRequestAminoMsg {
  type: "/xion.zk.v1.QueryVerifyRequest";
  value: QueryVerifyRequestAmino;
}
/** QueryVerifyRequest is the request type for the Query/ProofVerify RPC method. */
export interface QueryVerifyRequestSDKType {
  proof: Uint8Array;
  public_inputs: string[];
  vkey_name: string;
  vkey_id: bigint;
}
/** ProofVerifyResponse defines the response structure for proof verification. */
export interface ProofVerifyResponse {
  /** verified indicates whether the proof verification was successful. */
  verified: boolean;
}
export interface ProofVerifyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.ProofVerifyResponse";
  value: Uint8Array;
}
/**
 * ProofVerifyResponse defines the response structure for proof verification.
 * @name ProofVerifyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.ProofVerifyResponse
 */
export interface ProofVerifyResponseAmino {
  /**
   * verified indicates whether the proof verification was successful.
   */
  verified?: boolean;
}
export interface ProofVerifyResponseAminoMsg {
  type: "/xion.zk.v1.ProofVerifyResponse";
  value: ProofVerifyResponseAmino;
}
/** ProofVerifyResponse defines the response structure for proof verification. */
export interface ProofVerifyResponseSDKType {
  verified: boolean;
}
/** VKey represents a verification key for ZK proof verification. */
export interface VKey {
  /** key_bytes is the raw bytes of the verification key. */
  keyBytes: Uint8Array;
  /** name is the unique human-readable identifier for this key. */
  name: string;
  /** description provides additional context about the verification key. */
  description: string;
  /** circuit_hash is the hash of the circuit this key is associated with. */
  circuitHash: string;
  /** authority is the uploader of the verification key. */
  authority: string;
}
export interface VKeyProtoMsg {
  typeUrl: "/xion.zk.v1.VKey";
  value: Uint8Array;
}
/**
 * VKey represents a verification key for ZK proof verification.
 * @name VKeyAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.VKey
 */
export interface VKeyAmino {
  /**
   * key_bytes is the raw bytes of the verification key.
   */
  key_bytes?: string;
  /**
   * name is the unique human-readable identifier for this key.
   */
  name?: string;
  /**
   * description provides additional context about the verification key.
   */
  description?: string;
  /**
   * circuit_hash is the hash of the circuit this key is associated with.
   */
  circuit_hash?: string;
  /**
   * authority is the uploader of the verification key.
   */
  authority?: string;
}
export interface VKeyAminoMsg {
  type: "/xion.zk.v1.VKey";
  value: VKeyAmino;
}
/** VKey represents a verification key for ZK proof verification. */
export interface VKeySDKType {
  key_bytes: Uint8Array;
  name: string;
  description: string;
  circuit_hash: string;
  authority: string;
}
/** QueryVKeyRequest is the request type for the Query/VKey RPC method */
export interface QueryVKeyRequest {
  /** id is the unique identifier of the verification key */
  id: bigint;
}
export interface QueryVKeyRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeyRequest";
  value: Uint8Array;
}
/**
 * QueryVKeyRequest is the request type for the Query/VKey RPC method
 * @name QueryVKeyRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeyRequest
 */
export interface QueryVKeyRequestAmino {
  /**
   * id is the unique identifier of the verification key
   */
  id?: string;
}
export interface QueryVKeyRequestAminoMsg {
  type: "/xion.zk.v1.QueryVKeyRequest";
  value: QueryVKeyRequestAmino;
}
/** QueryVKeyRequest is the request type for the Query/VKey RPC method */
export interface QueryVKeyRequestSDKType {
  id: bigint;
}
/** QueryVKeyResponse is the response type for the Query/VKey RPC method */
export interface QueryVKeyResponse {
  /** vkey is the verification key */
  vkey: VKey;
}
export interface QueryVKeyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeyResponse";
  value: Uint8Array;
}
/**
 * QueryVKeyResponse is the response type for the Query/VKey RPC method
 * @name QueryVKeyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeyResponse
 */
export interface QueryVKeyResponseAmino {
  /**
   * vkey is the verification key
   */
  vkey?: VKeyAmino;
}
export interface QueryVKeyResponseAminoMsg {
  type: "/xion.zk.v1.QueryVKeyResponse";
  value: QueryVKeyResponseAmino;
}
/** QueryVKeyResponse is the response type for the Query/VKey RPC method */
export interface QueryVKeyResponseSDKType {
  vkey: VKeySDKType;
}
/**
 * QueryVKeyByNameRequest is the request type for the Query/VKeyByName RPC
 * method
 */
export interface QueryVKeyByNameRequest {
  /** name is the unique name of the verification key */
  name: string;
}
export interface QueryVKeyByNameRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeyByNameRequest";
  value: Uint8Array;
}
/**
 * QueryVKeyByNameRequest is the request type for the Query/VKeyByName RPC
 * method
 * @name QueryVKeyByNameRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeyByNameRequest
 */
export interface QueryVKeyByNameRequestAmino {
  /**
   * name is the unique name of the verification key
   */
  name?: string;
}
export interface QueryVKeyByNameRequestAminoMsg {
  type: "/xion.zk.v1.QueryVKeyByNameRequest";
  value: QueryVKeyByNameRequestAmino;
}
/**
 * QueryVKeyByNameRequest is the request type for the Query/VKeyByName RPC
 * method
 */
export interface QueryVKeyByNameRequestSDKType {
  name: string;
}
/**
 * QueryVKeyByNameResponse is the response type for the Query/VKeyByName RPC
 * method
 */
export interface QueryVKeyByNameResponse {
  /** vkey is the verification key */
  vkey: VKey;
  /** id is the numeric identifier of the verification key */
  id: bigint;
}
export interface QueryVKeyByNameResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeyByNameResponse";
  value: Uint8Array;
}
/**
 * QueryVKeyByNameResponse is the response type for the Query/VKeyByName RPC
 * method
 * @name QueryVKeyByNameResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeyByNameResponse
 */
export interface QueryVKeyByNameResponseAmino {
  /**
   * vkey is the verification key
   */
  vkey?: VKeyAmino;
  /**
   * id is the numeric identifier of the verification key
   */
  id?: string;
}
export interface QueryVKeyByNameResponseAminoMsg {
  type: "/xion.zk.v1.QueryVKeyByNameResponse";
  value: QueryVKeyByNameResponseAmino;
}
/**
 * QueryVKeyByNameResponse is the response type for the Query/VKeyByName RPC
 * method
 */
export interface QueryVKeyByNameResponseSDKType {
  vkey: VKeySDKType;
  id: bigint;
}
/** QueryVKeysRequest is the request type for the Query/VKeys RPC method */
export interface QueryVKeysRequest {
  /** pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
export interface QueryVKeysRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeysRequest";
  value: Uint8Array;
}
/**
 * QueryVKeysRequest is the request type for the Query/VKeys RPC method
 * @name QueryVKeysRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeysRequest
 */
export interface QueryVKeysRequestAmino {
  /**
   * pagination defines an optional pagination for the request
   */
  pagination?: PageRequestAmino;
}
export interface QueryVKeysRequestAminoMsg {
  type: "/xion.zk.v1.QueryVKeysRequest";
  value: QueryVKeysRequestAmino;
}
/** QueryVKeysRequest is the request type for the Query/VKeys RPC method */
export interface QueryVKeysRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryVKeysResponse is the response type for the Query/VKeys RPC method */
export interface QueryVKeysResponse {
  /** vkeys is the list of all verification keys with their IDs */
  vkeys: VKeyWithID[];
  /** pagination defines the pagination in the response */
  pagination?: PageResponse;
}
export interface QueryVKeysResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryVKeysResponse";
  value: Uint8Array;
}
/**
 * QueryVKeysResponse is the response type for the Query/VKeys RPC method
 * @name QueryVKeysResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryVKeysResponse
 */
export interface QueryVKeysResponseAmino {
  /**
   * vkeys is the list of all verification keys with their IDs
   */
  vkeys?: VKeyWithIDAmino[];
  /**
   * pagination defines the pagination in the response
   */
  pagination?: PageResponseAmino;
}
export interface QueryVKeysResponseAminoMsg {
  type: "/xion.zk.v1.QueryVKeysResponse";
  value: QueryVKeysResponseAmino;
}
/** QueryVKeysResponse is the response type for the Query/VKeys RPC method */
export interface QueryVKeysResponseSDKType {
  vkeys: VKeyWithIDSDKType[];
  pagination?: PageResponseSDKType;
}
/** VKeyWithID combines a verification key with its ID */
export interface VKeyWithID {
  /** id is the unique identifier */
  id: bigint;
  /** vkey is the verification key */
  vkey: VKey;
}
export interface VKeyWithIDProtoMsg {
  typeUrl: "/xion.zk.v1.VKeyWithID";
  value: Uint8Array;
}
/**
 * VKeyWithID combines a verification key with its ID
 * @name VKeyWithIDAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.VKeyWithID
 */
export interface VKeyWithIDAmino {
  /**
   * id is the unique identifier
   */
  id?: string;
  /**
   * vkey is the verification key
   */
  vkey?: VKeyAmino;
}
export interface VKeyWithIDAminoMsg {
  type: "/xion.zk.v1.VKeyWithID";
  value: VKeyWithIDAmino;
}
/** VKeyWithID combines a verification key with its ID */
export interface VKeyWithIDSDKType {
  id: bigint;
  vkey: VKeySDKType;
}
/** QueryHasVKeyRequest is the request type for the Query/HasVKey RPC method */
export interface QueryHasVKeyRequest {
  /** name is the name of the verification key to check */
  name: string;
}
export interface QueryHasVKeyRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryHasVKeyRequest";
  value: Uint8Array;
}
/**
 * QueryHasVKeyRequest is the request type for the Query/HasVKey RPC method
 * @name QueryHasVKeyRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryHasVKeyRequest
 */
export interface QueryHasVKeyRequestAmino {
  /**
   * name is the name of the verification key to check
   */
  name?: string;
}
export interface QueryHasVKeyRequestAminoMsg {
  type: "/xion.zk.v1.QueryHasVKeyRequest";
  value: QueryHasVKeyRequestAmino;
}
/** QueryHasVKeyRequest is the request type for the Query/HasVKey RPC method */
export interface QueryHasVKeyRequestSDKType {
  name: string;
}
/** QueryHasVKeyResponse is the response type for the Query/HasVKey RPC method */
export interface QueryHasVKeyResponse {
  /** exists indicates whether the verification key exists */
  exists: boolean;
  /** id is the numeric identifier if the key exists (0 if not found) */
  id: bigint;
}
export interface QueryHasVKeyResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryHasVKeyResponse";
  value: Uint8Array;
}
/**
 * QueryHasVKeyResponse is the response type for the Query/HasVKey RPC method
 * @name QueryHasVKeyResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryHasVKeyResponse
 */
export interface QueryHasVKeyResponseAmino {
  /**
   * exists indicates whether the verification key exists
   */
  exists?: boolean;
  /**
   * id is the numeric identifier if the key exists (0 if not found)
   */
  id?: string;
}
export interface QueryHasVKeyResponseAminoMsg {
  type: "/xion.zk.v1.QueryHasVKeyResponse";
  value: QueryHasVKeyResponseAmino;
}
/** QueryHasVKeyResponse is the response type for the Query/HasVKey RPC method */
export interface QueryHasVKeyResponseSDKType {
  exists: boolean;
  id: bigint;
}
/**
 * QueryNextVKeyIDRequest is the request type for the Query/NextVKeyID RPC
 * method
 */
export interface QueryNextVKeyIDRequest {}
export interface QueryNextVKeyIDRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryNextVKeyIDRequest";
  value: Uint8Array;
}
/**
 * QueryNextVKeyIDRequest is the request type for the Query/NextVKeyID RPC
 * method
 * @name QueryNextVKeyIDRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryNextVKeyIDRequest
 */
export interface QueryNextVKeyIDRequestAmino {}
export interface QueryNextVKeyIDRequestAminoMsg {
  type: "/xion.zk.v1.QueryNextVKeyIDRequest";
  value: QueryNextVKeyIDRequestAmino;
}
/**
 * QueryNextVKeyIDRequest is the request type for the Query/NextVKeyID RPC
 * method
 */
export interface QueryNextVKeyIDRequestSDKType {}
/**
 * QueryNextVKeyIDResponse is the response type for the Query/NextVKeyID RPC
 * method
 */
export interface QueryNextVKeyIDResponse {
  /** next_id is the next available verification key ID. */
  nextId: bigint;
}
export interface QueryNextVKeyIDResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryNextVKeyIDResponse";
  value: Uint8Array;
}
/**
 * QueryNextVKeyIDResponse is the response type for the Query/NextVKeyID RPC
 * method
 * @name QueryNextVKeyIDResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryNextVKeyIDResponse
 */
export interface QueryNextVKeyIDResponseAmino {
  /**
   * next_id is the next available verification key ID.
   */
  next_id?: string;
}
export interface QueryNextVKeyIDResponseAminoMsg {
  type: "/xion.zk.v1.QueryNextVKeyIDResponse";
  value: QueryNextVKeyIDResponseAmino;
}
/**
 * QueryNextVKeyIDResponse is the response type for the Query/NextVKeyID RPC
 * method
 */
export interface QueryNextVKeyIDResponseSDKType {
  next_id: bigint;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/xion.zk.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 * @name QueryParamsRequestAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/xion.zk.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  /** params is the current zk module parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/xion.zk.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 * @name QueryParamsResponseAmino
 * @package xion.zk.v1
 * @see proto type: xion.zk.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params is the current zk module parameters
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/xion.zk.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseSnarkJsProof(): SnarkJsProof {
  return {
    piA: [],
    piB: [],
    piC: []
  };
}
export const SnarkJsProof = {
  typeUrl: "/xion.zk.v1.SnarkJsProof",
  encode(message: SnarkJsProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.piA) {
      writer.uint32(10).bytes(v!);
    }
    for (const v of message.piB) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.piC) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnarkJsProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnarkJsProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.piA.push(reader.bytes());
          break;
        case 2:
          message.piB.push(reader.bytes());
          break;
        case 3:
          message.piC.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SnarkJsProof>): SnarkJsProof {
    const message = createBaseSnarkJsProof();
    message.piA = object.piA?.map(e => e) || [];
    message.piB = object.piB?.map(e => e) || [];
    message.piC = object.piC?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SnarkJsProofAmino): SnarkJsProof {
    const message = createBaseSnarkJsProof();
    message.piA = object.pi_a?.map(e => bytesFromBase64(e)) || [];
    message.piB = object.pi_b?.map(e => bytesFromBase64(e)) || [];
    message.piC = object.pi_c?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: SnarkJsProof): SnarkJsProofAmino {
    const obj: any = {};
    if (message.piA) {
      obj.pi_a = message.piA.map(e => base64FromBytes(e));
    } else {
      obj.pi_a = message.piA;
    }
    if (message.piB) {
      obj.pi_b = message.piB.map(e => base64FromBytes(e));
    } else {
      obj.pi_b = message.piB;
    }
    if (message.piC) {
      obj.pi_c = message.piC.map(e => base64FromBytes(e));
    } else {
      obj.pi_c = message.piC;
    }
    return obj;
  },
  fromAminoMsg(object: SnarkJsProofAminoMsg): SnarkJsProof {
    return SnarkJsProof.fromAmino(object.value);
  },
  fromProtoMsg(message: SnarkJsProofProtoMsg): SnarkJsProof {
    return SnarkJsProof.decode(message.value);
  },
  toProto(message: SnarkJsProof): Uint8Array {
    return SnarkJsProof.encode(message).finish();
  },
  toProtoMsg(message: SnarkJsProof): SnarkJsProofProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.SnarkJsProof",
      value: SnarkJsProof.encode(message).finish()
    };
  }
};
function createBaseQueryVerifyRequest(): QueryVerifyRequest {
  return {
    proof: new Uint8Array(),
    publicInputs: [],
    vkeyName: "",
    vkeyId: BigInt(0)
  };
}
export const QueryVerifyRequest = {
  typeUrl: "/xion.zk.v1.QueryVerifyRequest",
  encode(message: QueryVerifyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proof.length !== 0) {
      writer.uint32(10).bytes(message.proof);
    }
    for (const v of message.publicInputs) {
      writer.uint32(18).string(v!);
    }
    if (message.vkeyName !== "") {
      writer.uint32(26).string(message.vkeyName);
    }
    if (message.vkeyId !== BigInt(0)) {
      writer.uint32(32).uint64(message.vkeyId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = reader.bytes();
          break;
        case 2:
          message.publicInputs.push(reader.string());
          break;
        case 3:
          message.vkeyName = reader.string();
          break;
        case 4:
          message.vkeyId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVerifyRequest>): QueryVerifyRequest {
    const message = createBaseQueryVerifyRequest();
    message.proof = object.proof ?? new Uint8Array();
    message.publicInputs = object.publicInputs?.map(e => e) || [];
    message.vkeyName = object.vkeyName ?? "";
    message.vkeyId = object.vkeyId !== undefined && object.vkeyId !== null ? BigInt(object.vkeyId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVerifyRequestAmino): QueryVerifyRequest {
    const message = createBaseQueryVerifyRequest();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    message.publicInputs = object.public_inputs?.map(e => e) || [];
    if (object.vkey_name !== undefined && object.vkey_name !== null) {
      message.vkeyName = object.vkey_name;
    }
    if (object.vkey_id !== undefined && object.vkey_id !== null) {
      message.vkeyId = BigInt(object.vkey_id);
    }
    return message;
  },
  toAmino(message: QueryVerifyRequest): QueryVerifyRequestAmino {
    const obj: any = {};
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    if (message.publicInputs) {
      obj.public_inputs = message.publicInputs.map(e => e);
    } else {
      obj.public_inputs = message.publicInputs;
    }
    obj.vkey_name = message.vkeyName === "" ? undefined : message.vkeyName;
    obj.vkey_id = message.vkeyId !== BigInt(0) ? message.vkeyId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyRequestAminoMsg): QueryVerifyRequest {
    return QueryVerifyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyRequestProtoMsg): QueryVerifyRequest {
    return QueryVerifyRequest.decode(message.value);
  },
  toProto(message: QueryVerifyRequest): Uint8Array {
    return QueryVerifyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyRequest): QueryVerifyRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVerifyRequest",
      value: QueryVerifyRequest.encode(message).finish()
    };
  }
};
function createBaseProofVerifyResponse(): ProofVerifyResponse {
  return {
    verified: false
  };
}
export const ProofVerifyResponse = {
  typeUrl: "/xion.zk.v1.ProofVerifyResponse",
  encode(message: ProofVerifyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.verified === true) {
      writer.uint32(8).bool(message.verified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofVerifyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofVerifyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProofVerifyResponse>): ProofVerifyResponse {
    const message = createBaseProofVerifyResponse();
    message.verified = object.verified ?? false;
    return message;
  },
  fromAmino(object: ProofVerifyResponseAmino): ProofVerifyResponse {
    const message = createBaseProofVerifyResponse();
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    return message;
  },
  toAmino(message: ProofVerifyResponse): ProofVerifyResponseAmino {
    const obj: any = {};
    obj.verified = message.verified === false ? undefined : message.verified;
    return obj;
  },
  fromAminoMsg(object: ProofVerifyResponseAminoMsg): ProofVerifyResponse {
    return ProofVerifyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofVerifyResponseProtoMsg): ProofVerifyResponse {
    return ProofVerifyResponse.decode(message.value);
  },
  toProto(message: ProofVerifyResponse): Uint8Array {
    return ProofVerifyResponse.encode(message).finish();
  },
  toProtoMsg(message: ProofVerifyResponse): ProofVerifyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.ProofVerifyResponse",
      value: ProofVerifyResponse.encode(message).finish()
    };
  }
};
function createBaseVKey(): VKey {
  return {
    keyBytes: new Uint8Array(),
    name: "",
    description: "",
    circuitHash: "",
    authority: ""
  };
}
export const VKey = {
  typeUrl: "/xion.zk.v1.VKey",
  encode(message: VKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyBytes.length !== 0) {
      writer.uint32(10).bytes(message.keyBytes);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.circuitHash !== "") {
      writer.uint32(34).string(message.circuitHash);
    }
    if (message.authority !== "") {
      writer.uint32(42).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyBytes = reader.bytes();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.circuitHash = reader.string();
          break;
        case 5:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VKey>): VKey {
    const message = createBaseVKey();
    message.keyBytes = object.keyBytes ?? new Uint8Array();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.circuitHash = object.circuitHash ?? "";
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: VKeyAmino): VKey {
    const message = createBaseVKey();
    if (object.key_bytes !== undefined && object.key_bytes !== null) {
      message.keyBytes = bytesFromBase64(object.key_bytes);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.circuit_hash !== undefined && object.circuit_hash !== null) {
      message.circuitHash = object.circuit_hash;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: VKey): VKeyAmino {
    const obj: any = {};
    obj.key_bytes = message.keyBytes ? base64FromBytes(message.keyBytes) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.circuit_hash = message.circuitHash === "" ? undefined : message.circuitHash;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: VKeyAminoMsg): VKey {
    return VKey.fromAmino(object.value);
  },
  fromProtoMsg(message: VKeyProtoMsg): VKey {
    return VKey.decode(message.value);
  },
  toProto(message: VKey): Uint8Array {
    return VKey.encode(message).finish();
  },
  toProtoMsg(message: VKey): VKeyProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.VKey",
      value: VKey.encode(message).finish()
    };
  }
};
function createBaseQueryVKeyRequest(): QueryVKeyRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryVKeyRequest = {
  typeUrl: "/xion.zk.v1.QueryVKeyRequest",
  encode(message: QueryVKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVKeyRequest>): QueryVKeyRequest {
    const message = createBaseQueryVKeyRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVKeyRequestAmino): QueryVKeyRequest {
    const message = createBaseQueryVKeyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryVKeyRequest): QueryVKeyRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVKeyRequestAminoMsg): QueryVKeyRequest {
    return QueryVKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeyRequestProtoMsg): QueryVKeyRequest {
    return QueryVKeyRequest.decode(message.value);
  },
  toProto(message: QueryVKeyRequest): Uint8Array {
    return QueryVKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeyRequest): QueryVKeyRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeyRequest",
      value: QueryVKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVKeyResponse(): QueryVKeyResponse {
  return {
    vkey: VKey.fromPartial({})
  };
}
export const QueryVKeyResponse = {
  typeUrl: "/xion.zk.v1.QueryVKeyResponse",
  encode(message: QueryVKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vkey !== undefined) {
      VKey.encode(message.vkey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vkey = VKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVKeyResponse>): QueryVKeyResponse {
    const message = createBaseQueryVKeyResponse();
    message.vkey = object.vkey !== undefined && object.vkey !== null ? VKey.fromPartial(object.vkey) : undefined;
    return message;
  },
  fromAmino(object: QueryVKeyResponseAmino): QueryVKeyResponse {
    const message = createBaseQueryVKeyResponse();
    if (object.vkey !== undefined && object.vkey !== null) {
      message.vkey = VKey.fromAmino(object.vkey);
    }
    return message;
  },
  toAmino(message: QueryVKeyResponse): QueryVKeyResponseAmino {
    const obj: any = {};
    obj.vkey = message.vkey ? VKey.toAmino(message.vkey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVKeyResponseAminoMsg): QueryVKeyResponse {
    return QueryVKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeyResponseProtoMsg): QueryVKeyResponse {
    return QueryVKeyResponse.decode(message.value);
  },
  toProto(message: QueryVKeyResponse): Uint8Array {
    return QueryVKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeyResponse): QueryVKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeyResponse",
      value: QueryVKeyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVKeyByNameRequest(): QueryVKeyByNameRequest {
  return {
    name: ""
  };
}
export const QueryVKeyByNameRequest = {
  typeUrl: "/xion.zk.v1.QueryVKeyByNameRequest",
  encode(message: QueryVKeyByNameRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeyByNameRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeyByNameRequest();
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
  fromPartial(object: Partial<QueryVKeyByNameRequest>): QueryVKeyByNameRequest {
    const message = createBaseQueryVKeyByNameRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryVKeyByNameRequestAmino): QueryVKeyByNameRequest {
    const message = createBaseQueryVKeyByNameRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryVKeyByNameRequest): QueryVKeyByNameRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryVKeyByNameRequestAminoMsg): QueryVKeyByNameRequest {
    return QueryVKeyByNameRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeyByNameRequestProtoMsg): QueryVKeyByNameRequest {
    return QueryVKeyByNameRequest.decode(message.value);
  },
  toProto(message: QueryVKeyByNameRequest): Uint8Array {
    return QueryVKeyByNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeyByNameRequest): QueryVKeyByNameRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeyByNameRequest",
      value: QueryVKeyByNameRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVKeyByNameResponse(): QueryVKeyByNameResponse {
  return {
    vkey: VKey.fromPartial({}),
    id: BigInt(0)
  };
}
export const QueryVKeyByNameResponse = {
  typeUrl: "/xion.zk.v1.QueryVKeyByNameResponse",
  encode(message: QueryVKeyByNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vkey !== undefined) {
      VKey.encode(message.vkey, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeyByNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeyByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vkey = VKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVKeyByNameResponse>): QueryVKeyByNameResponse {
    const message = createBaseQueryVKeyByNameResponse();
    message.vkey = object.vkey !== undefined && object.vkey !== null ? VKey.fromPartial(object.vkey) : undefined;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryVKeyByNameResponseAmino): QueryVKeyByNameResponse {
    const message = createBaseQueryVKeyByNameResponse();
    if (object.vkey !== undefined && object.vkey !== null) {
      message.vkey = VKey.fromAmino(object.vkey);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryVKeyByNameResponse): QueryVKeyByNameResponseAmino {
    const obj: any = {};
    obj.vkey = message.vkey ? VKey.toAmino(message.vkey) : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVKeyByNameResponseAminoMsg): QueryVKeyByNameResponse {
    return QueryVKeyByNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeyByNameResponseProtoMsg): QueryVKeyByNameResponse {
    return QueryVKeyByNameResponse.decode(message.value);
  },
  toProto(message: QueryVKeyByNameResponse): Uint8Array {
    return QueryVKeyByNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeyByNameResponse): QueryVKeyByNameResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeyByNameResponse",
      value: QueryVKeyByNameResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVKeysRequest(): QueryVKeysRequest {
  return {
    pagination: undefined
  };
}
export const QueryVKeysRequest = {
  typeUrl: "/xion.zk.v1.QueryVKeysRequest",
  encode(message: QueryVKeysRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeysRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeysRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVKeysRequest>): QueryVKeysRequest {
    const message = createBaseQueryVKeysRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVKeysRequestAmino): QueryVKeysRequest {
    const message = createBaseQueryVKeysRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVKeysRequest): QueryVKeysRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVKeysRequestAminoMsg): QueryVKeysRequest {
    return QueryVKeysRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeysRequestProtoMsg): QueryVKeysRequest {
    return QueryVKeysRequest.decode(message.value);
  },
  toProto(message: QueryVKeysRequest): Uint8Array {
    return QueryVKeysRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeysRequest): QueryVKeysRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeysRequest",
      value: QueryVKeysRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVKeysResponse(): QueryVKeysResponse {
  return {
    vkeys: [],
    pagination: undefined
  };
}
export const QueryVKeysResponse = {
  typeUrl: "/xion.zk.v1.QueryVKeysResponse",
  encode(message: QueryVKeysResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vkeys) {
      VKeyWithID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVKeysResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vkeys.push(VKeyWithID.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryVKeysResponse>): QueryVKeysResponse {
    const message = createBaseQueryVKeysResponse();
    message.vkeys = object.vkeys?.map(e => VKeyWithID.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVKeysResponseAmino): QueryVKeysResponse {
    const message = createBaseQueryVKeysResponse();
    message.vkeys = object.vkeys?.map(e => VKeyWithID.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVKeysResponse): QueryVKeysResponseAmino {
    const obj: any = {};
    if (message.vkeys) {
      obj.vkeys = message.vkeys.map(e => e ? VKeyWithID.toAmino(e) : undefined);
    } else {
      obj.vkeys = message.vkeys;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVKeysResponseAminoMsg): QueryVKeysResponse {
    return QueryVKeysResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVKeysResponseProtoMsg): QueryVKeysResponse {
    return QueryVKeysResponse.decode(message.value);
  },
  toProto(message: QueryVKeysResponse): Uint8Array {
    return QueryVKeysResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVKeysResponse): QueryVKeysResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryVKeysResponse",
      value: QueryVKeysResponse.encode(message).finish()
    };
  }
};
function createBaseVKeyWithID(): VKeyWithID {
  return {
    id: BigInt(0),
    vkey: VKey.fromPartial({})
  };
}
export const VKeyWithID = {
  typeUrl: "/xion.zk.v1.VKeyWithID",
  encode(message: VKeyWithID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.vkey !== undefined) {
      VKey.encode(message.vkey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VKeyWithID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVKeyWithID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.vkey = VKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<VKeyWithID>): VKeyWithID {
    const message = createBaseVKeyWithID();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.vkey = object.vkey !== undefined && object.vkey !== null ? VKey.fromPartial(object.vkey) : undefined;
    return message;
  },
  fromAmino(object: VKeyWithIDAmino): VKeyWithID {
    const message = createBaseVKeyWithID();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.vkey !== undefined && object.vkey !== null) {
      message.vkey = VKey.fromAmino(object.vkey);
    }
    return message;
  },
  toAmino(message: VKeyWithID): VKeyWithIDAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.vkey = message.vkey ? VKey.toAmino(message.vkey) : undefined;
    return obj;
  },
  fromAminoMsg(object: VKeyWithIDAminoMsg): VKeyWithID {
    return VKeyWithID.fromAmino(object.value);
  },
  fromProtoMsg(message: VKeyWithIDProtoMsg): VKeyWithID {
    return VKeyWithID.decode(message.value);
  },
  toProto(message: VKeyWithID): Uint8Array {
    return VKeyWithID.encode(message).finish();
  },
  toProtoMsg(message: VKeyWithID): VKeyWithIDProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.VKeyWithID",
      value: VKeyWithID.encode(message).finish()
    };
  }
};
function createBaseQueryHasVKeyRequest(): QueryHasVKeyRequest {
  return {
    name: ""
  };
}
export const QueryHasVKeyRequest = {
  typeUrl: "/xion.zk.v1.QueryHasVKeyRequest",
  encode(message: QueryHasVKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHasVKeyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasVKeyRequest();
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
  fromPartial(object: Partial<QueryHasVKeyRequest>): QueryHasVKeyRequest {
    const message = createBaseQueryHasVKeyRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryHasVKeyRequestAmino): QueryHasVKeyRequest {
    const message = createBaseQueryHasVKeyRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryHasVKeyRequest): QueryHasVKeyRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryHasVKeyRequestAminoMsg): QueryHasVKeyRequest {
    return QueryHasVKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHasVKeyRequestProtoMsg): QueryHasVKeyRequest {
    return QueryHasVKeyRequest.decode(message.value);
  },
  toProto(message: QueryHasVKeyRequest): Uint8Array {
    return QueryHasVKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHasVKeyRequest): QueryHasVKeyRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryHasVKeyRequest",
      value: QueryHasVKeyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHasVKeyResponse(): QueryHasVKeyResponse {
  return {
    exists: false,
    id: BigInt(0)
  };
}
export const QueryHasVKeyResponse = {
  typeUrl: "/xion.zk.v1.QueryHasVKeyResponse",
  encode(message: QueryHasVKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exists === true) {
      writer.uint32(8).bool(message.exists);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHasVKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHasVKeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exists = reader.bool();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryHasVKeyResponse>): QueryHasVKeyResponse {
    const message = createBaseQueryHasVKeyResponse();
    message.exists = object.exists ?? false;
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHasVKeyResponseAmino): QueryHasVKeyResponse {
    const message = createBaseQueryHasVKeyResponse();
    if (object.exists !== undefined && object.exists !== null) {
      message.exists = object.exists;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryHasVKeyResponse): QueryHasVKeyResponseAmino {
    const obj: any = {};
    obj.exists = message.exists === false ? undefined : message.exists;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHasVKeyResponseAminoMsg): QueryHasVKeyResponse {
    return QueryHasVKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHasVKeyResponseProtoMsg): QueryHasVKeyResponse {
    return QueryHasVKeyResponse.decode(message.value);
  },
  toProto(message: QueryHasVKeyResponse): Uint8Array {
    return QueryHasVKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHasVKeyResponse): QueryHasVKeyResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryHasVKeyResponse",
      value: QueryHasVKeyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNextVKeyIDRequest(): QueryNextVKeyIDRequest {
  return {};
}
export const QueryNextVKeyIDRequest = {
  typeUrl: "/xion.zk.v1.QueryNextVKeyIDRequest",
  encode(_: QueryNextVKeyIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextVKeyIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextVKeyIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryNextVKeyIDRequest>): QueryNextVKeyIDRequest {
    const message = createBaseQueryNextVKeyIDRequest();
    return message;
  },
  fromAmino(_: QueryNextVKeyIDRequestAmino): QueryNextVKeyIDRequest {
    const message = createBaseQueryNextVKeyIDRequest();
    return message;
  },
  toAmino(_: QueryNextVKeyIDRequest): QueryNextVKeyIDRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNextVKeyIDRequestAminoMsg): QueryNextVKeyIDRequest {
    return QueryNextVKeyIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextVKeyIDRequestProtoMsg): QueryNextVKeyIDRequest {
    return QueryNextVKeyIDRequest.decode(message.value);
  },
  toProto(message: QueryNextVKeyIDRequest): Uint8Array {
    return QueryNextVKeyIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextVKeyIDRequest): QueryNextVKeyIDRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryNextVKeyIDRequest",
      value: QueryNextVKeyIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNextVKeyIDResponse(): QueryNextVKeyIDResponse {
  return {
    nextId: BigInt(0)
  };
}
export const QueryNextVKeyIDResponse = {
  typeUrl: "/xion.zk.v1.QueryNextVKeyIDResponse",
  encode(message: QueryNextVKeyIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextId !== BigInt(0)) {
      writer.uint32(8).uint64(message.nextId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextVKeyIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextVKeyIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryNextVKeyIDResponse>): QueryNextVKeyIDResponse {
    const message = createBaseQueryNextVKeyIDResponse();
    message.nextId = object.nextId !== undefined && object.nextId !== null ? BigInt(object.nextId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNextVKeyIDResponseAmino): QueryNextVKeyIDResponse {
    const message = createBaseQueryNextVKeyIDResponse();
    if (object.next_id !== undefined && object.next_id !== null) {
      message.nextId = BigInt(object.next_id);
    }
    return message;
  },
  toAmino(message: QueryNextVKeyIDResponse): QueryNextVKeyIDResponseAmino {
    const obj: any = {};
    obj.next_id = message.nextId !== BigInt(0) ? message.nextId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNextVKeyIDResponseAminoMsg): QueryNextVKeyIDResponse {
    return QueryNextVKeyIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNextVKeyIDResponseProtoMsg): QueryNextVKeyIDResponse {
    return QueryNextVKeyIDResponse.decode(message.value);
  },
  toProto(message: QueryNextVKeyIDResponse): Uint8Array {
    return QueryNextVKeyIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextVKeyIDResponse): QueryNextVKeyIDResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryNextVKeyIDResponse",
      value: QueryNextVKeyIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/xion.zk.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/xion.zk.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/xion.zk.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};