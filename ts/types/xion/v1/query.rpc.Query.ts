//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryWebAuthNVerifyRegisterRequest, QueryWebAuthNVerifyRegisterResponse, QueryWebAuthNVerifyAuthenticateRequest, QueryWebAuthNVerifyAuthenticateResponse, QueryPlatformPercentageRequest, QueryPlatformPercentageResponse, QueryPlatformMinimumRequest, QueryPlatformMinimumResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** WebAuthNVerifyRegister verifies a WebAuthN registration */
  webAuthNVerifyRegister(request: QueryWebAuthNVerifyRegisterRequest): Promise<QueryWebAuthNVerifyRegisterResponse>;
  /** WebAuthNVerifyAuthenticate verifies a WebAuthN authentication */
  webAuthNVerifyAuthenticate(request: QueryWebAuthNVerifyAuthenticateRequest): Promise<QueryWebAuthNVerifyAuthenticateResponse>;
  /** PlatformPercentage queries the platform percentage fee */
  platformPercentage(request?: QueryPlatformPercentageRequest): Promise<QueryPlatformPercentageResponse>;
  /** PlatformMinimum queries the platform minimum fees */
  platformMinimum(request?: QueryPlatformMinimumRequest): Promise<QueryPlatformMinimumResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.webAuthNVerifyRegister = this.webAuthNVerifyRegister.bind(this);
    this.webAuthNVerifyAuthenticate = this.webAuthNVerifyAuthenticate.bind(this);
    this.platformPercentage = this.platformPercentage.bind(this);
    this.platformMinimum = this.platformMinimum.bind(this);
  }
  webAuthNVerifyRegister(request: QueryWebAuthNVerifyRegisterRequest): Promise<QueryWebAuthNVerifyRegisterResponse> {
    const data = QueryWebAuthNVerifyRegisterRequest.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Query", "WebAuthNVerifyRegister", data);
    return promise.then(data => QueryWebAuthNVerifyRegisterResponse.decode(new BinaryReader(data)));
  }
  webAuthNVerifyAuthenticate(request: QueryWebAuthNVerifyAuthenticateRequest): Promise<QueryWebAuthNVerifyAuthenticateResponse> {
    const data = QueryWebAuthNVerifyAuthenticateRequest.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Query", "WebAuthNVerifyAuthenticate", data);
    return promise.then(data => QueryWebAuthNVerifyAuthenticateResponse.decode(new BinaryReader(data)));
  }
  platformPercentage(request: QueryPlatformPercentageRequest = {}): Promise<QueryPlatformPercentageResponse> {
    const data = QueryPlatformPercentageRequest.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Query", "PlatformPercentage", data);
    return promise.then(data => QueryPlatformPercentageResponse.decode(new BinaryReader(data)));
  }
  platformMinimum(request: QueryPlatformMinimumRequest = {}): Promise<QueryPlatformMinimumResponse> {
    const data = QueryPlatformMinimumRequest.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Query", "PlatformMinimum", data);
    return promise.then(data => QueryPlatformMinimumResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    webAuthNVerifyRegister(request: QueryWebAuthNVerifyRegisterRequest): Promise<QueryWebAuthNVerifyRegisterResponse> {
      return queryService.webAuthNVerifyRegister(request);
    },
    webAuthNVerifyAuthenticate(request: QueryWebAuthNVerifyAuthenticateRequest): Promise<QueryWebAuthNVerifyAuthenticateResponse> {
      return queryService.webAuthNVerifyAuthenticate(request);
    },
    platformPercentage(request?: QueryPlatformPercentageRequest): Promise<QueryPlatformPercentageResponse> {
      return queryService.platformPercentage(request);
    },
    platformMinimum(request?: QueryPlatformMinimumRequest): Promise<QueryPlatformMinimumResponse> {
      return queryService.platformMinimum(request);
    }
  };
};