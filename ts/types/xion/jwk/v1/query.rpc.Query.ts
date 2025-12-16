//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetAudienceClaimRequest, QueryGetAudienceClaimResponse, QueryGetAudienceRequest, QueryGetAudienceResponse, QueryAllAudienceRequest, QueryAllAudienceResponse, QueryValidateJWTRequest, QueryValidateJWTResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  audienceClaim(request: QueryGetAudienceClaimRequest): Promise<QueryGetAudienceClaimResponse>;
  /** Queries a list of Audience items. */
  audience(request: QueryGetAudienceRequest): Promise<QueryGetAudienceResponse>;
  audienceAll(request?: QueryAllAudienceRequest): Promise<QueryAllAudienceResponse>;
  /** Queries a list of ValidateJWT items. */
  validateJWT(request: QueryValidateJWTRequest): Promise<QueryValidateJWTResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.audienceClaim = this.audienceClaim.bind(this);
    this.audience = this.audience.bind(this);
    this.audienceAll = this.audienceAll.bind(this);
    this.validateJWT = this.validateJWT.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  audienceClaim(request: QueryGetAudienceClaimRequest): Promise<QueryGetAudienceClaimResponse> {
    const data = QueryGetAudienceClaimRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "AudienceClaim", data);
    return promise.then(data => QueryGetAudienceClaimResponse.decode(new BinaryReader(data)));
  }
  audience(request: QueryGetAudienceRequest): Promise<QueryGetAudienceResponse> {
    const data = QueryGetAudienceRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "Audience", data);
    return promise.then(data => QueryGetAudienceResponse.decode(new BinaryReader(data)));
  }
  audienceAll(request: QueryAllAudienceRequest = {
    pagination: undefined
  }): Promise<QueryAllAudienceResponse> {
    const data = QueryAllAudienceRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "AudienceAll", data);
    return promise.then(data => QueryAllAudienceResponse.decode(new BinaryReader(data)));
  }
  validateJWT(request: QueryValidateJWTRequest): Promise<QueryValidateJWTResponse> {
    const data = QueryValidateJWTRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "ValidateJWT", data);
    return promise.then(data => QueryValidateJWTResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    audienceClaim(request: QueryGetAudienceClaimRequest): Promise<QueryGetAudienceClaimResponse> {
      return queryService.audienceClaim(request);
    },
    audience(request: QueryGetAudienceRequest): Promise<QueryGetAudienceResponse> {
      return queryService.audience(request);
    },
    audienceAll(request?: QueryAllAudienceRequest): Promise<QueryAllAudienceResponse> {
      return queryService.audienceAll(request);
    },
    validateJWT(request: QueryValidateJWTRequest): Promise<QueryValidateJWTResponse> {
      return queryService.validateJWT(request);
    }
  };
};