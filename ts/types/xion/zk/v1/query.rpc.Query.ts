//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryVerifyRequest, ProofVerifyResponse, QueryVKeyRequest, QueryVKeyResponse, QueryVKeyByNameRequest, QueryVKeyByNameResponse, QueryVKeysRequest, QueryVKeysResponse, QueryHasVKeyRequest, QueryHasVKeyResponse, QueryNextVKeyIDRequest, QueryNextVKeyIDResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** ProofVerify verifies a zk proof for email authentication. */
  proofVerify(request: QueryVerifyRequest): Promise<ProofVerifyResponse>;
  /** VKey queries a verification key by ID */
  vKey(request: QueryVKeyRequest): Promise<QueryVKeyResponse>;
  /** VKeyByName queries a verification key by name */
  vKeyByName(request: QueryVKeyByNameRequest): Promise<QueryVKeyByNameResponse>;
  /** VKeys queries all verification keys with pagination */
  vKeys(request?: QueryVKeysRequest): Promise<QueryVKeysResponse>;
  /** HasVKey checks if a verification key exists by name */
  hasVKey(request: QueryHasVKeyRequest): Promise<QueryHasVKeyResponse>;
  /** NextVKeyID queries the next available verification key ID */
  nextVKeyID(request?: QueryNextVKeyIDRequest): Promise<QueryNextVKeyIDResponse>;
  /** Params returns zk module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proofVerify = this.proofVerify.bind(this);
    this.vKey = this.vKey.bind(this);
    this.vKeyByName = this.vKeyByName.bind(this);
    this.vKeys = this.vKeys.bind(this);
    this.hasVKey = this.hasVKey.bind(this);
    this.nextVKeyID = this.nextVKeyID.bind(this);
    this.params = this.params.bind(this);
  }
  proofVerify(request: QueryVerifyRequest): Promise<ProofVerifyResponse> {
    const data = QueryVerifyRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "ProofVerify", data);
    return promise.then(data => ProofVerifyResponse.decode(new BinaryReader(data)));
  }
  vKey(request: QueryVKeyRequest): Promise<QueryVKeyResponse> {
    const data = QueryVKeyRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "VKey", data);
    return promise.then(data => QueryVKeyResponse.decode(new BinaryReader(data)));
  }
  vKeyByName(request: QueryVKeyByNameRequest): Promise<QueryVKeyByNameResponse> {
    const data = QueryVKeyByNameRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "VKeyByName", data);
    return promise.then(data => QueryVKeyByNameResponse.decode(new BinaryReader(data)));
  }
  vKeys(request: QueryVKeysRequest = {
    pagination: undefined
  }): Promise<QueryVKeysResponse> {
    const data = QueryVKeysRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "VKeys", data);
    return promise.then(data => QueryVKeysResponse.decode(new BinaryReader(data)));
  }
  hasVKey(request: QueryHasVKeyRequest): Promise<QueryHasVKeyResponse> {
    const data = QueryHasVKeyRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "HasVKey", data);
    return promise.then(data => QueryHasVKeyResponse.decode(new BinaryReader(data)));
  }
  nextVKeyID(request: QueryNextVKeyIDRequest = {}): Promise<QueryNextVKeyIDResponse> {
    const data = QueryNextVKeyIDRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "NextVKeyID", data);
    return promise.then(data => QueryNextVKeyIDResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proofVerify(request: QueryVerifyRequest): Promise<ProofVerifyResponse> {
      return queryService.proofVerify(request);
    },
    vKey(request: QueryVKeyRequest): Promise<QueryVKeyResponse> {
      return queryService.vKey(request);
    },
    vKeyByName(request: QueryVKeyByNameRequest): Promise<QueryVKeyByNameResponse> {
      return queryService.vKeyByName(request);
    },
    vKeys(request?: QueryVKeysRequest): Promise<QueryVKeysResponse> {
      return queryService.vKeys(request);
    },
    hasVKey(request: QueryHasVKeyRequest): Promise<QueryHasVKeyResponse> {
      return queryService.hasVKey(request);
    },
    nextVKeyID(request?: QueryNextVKeyIDRequest): Promise<QueryNextVKeyIDResponse> {
      return queryService.nextVKeyID(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};