//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDkimPubKeyRequest, QueryDkimPubKeyResponse, QueryDkimPubKeysRequest, QueryDkimPubKeysResponse, QueryAuthenticateRequest, AuthenticateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DkimPubKey queries the DKIM public key for a given selector and domain. */
  dkimPubKey(request: QueryDkimPubKeyRequest): Promise<QueryDkimPubKeyResponse>;
  /** DkimPubKeys queries the DKIM public keys for a given selectors and domains. */
  dkimPubKeys(request: QueryDkimPubKeysRequest): Promise<QueryDkimPubKeysResponse>;
  /** Authenticate verifies a zk proof for email authentication. */
  authenticate(request: QueryAuthenticateRequest): Promise<AuthenticateResponse>;
  /** Params queries all parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.dkimPubKey = this.dkimPubKey.bind(this);
    this.dkimPubKeys = this.dkimPubKeys.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.params = this.params.bind(this);
  }
  dkimPubKey(request: QueryDkimPubKeyRequest): Promise<QueryDkimPubKeyResponse> {
    const data = QueryDkimPubKeyRequest.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Query", "DkimPubKey", data);
    return promise.then(data => QueryDkimPubKeyResponse.decode(new BinaryReader(data)));
  }
  dkimPubKeys(request: QueryDkimPubKeysRequest): Promise<QueryDkimPubKeysResponse> {
    const data = QueryDkimPubKeysRequest.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Query", "DkimPubKeys", data);
    return promise.then(data => QueryDkimPubKeysResponse.decode(new BinaryReader(data)));
  }
  authenticate(request: QueryAuthenticateRequest): Promise<AuthenticateResponse> {
    const data = QueryAuthenticateRequest.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Query", "Authenticate", data);
    return promise.then(data => AuthenticateResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    dkimPubKey(request: QueryDkimPubKeyRequest): Promise<QueryDkimPubKeyResponse> {
      return queryService.dkimPubKey(request);
    },
    dkimPubKeys(request: QueryDkimPubKeysRequest): Promise<QueryDkimPubKeysResponse> {
      return queryService.dkimPubKeys(request);
    },
    authenticate(request: QueryAuthenticateRequest): Promise<AuthenticateResponse> {
      return queryService.authenticate(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};