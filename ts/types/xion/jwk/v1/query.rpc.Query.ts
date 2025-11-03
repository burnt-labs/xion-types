//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryAudienceClaimRequest, QueryAudienceClaimResponse, QueryAudienceRequest, QueryAudienceResponse, QueryAudienceAllRequest, QueryAudienceAllResponse, QueryValidateJWTRequest, QueryValidateJWTResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AudienceClaim queries an audience claim by hash */
  audienceClaim(request: QueryAudienceClaimRequest): Promise<QueryAudienceClaimResponse>;
  /** Queries a list of Audience items. */
  audience(request: QueryAudienceRequest): Promise<QueryAudienceResponse>;
  /** AudienceAll queries all audiences */
  audienceAll(request?: QueryAudienceAllRequest): Promise<QueryAudienceAllResponse>;
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
  audienceClaim(request: QueryAudienceClaimRequest): Promise<QueryAudienceClaimResponse> {
    const data = QueryAudienceClaimRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "AudienceClaim", data);
    return promise.then(data => QueryAudienceClaimResponse.decode(new BinaryReader(data)));
  }
  audience(request: QueryAudienceRequest): Promise<QueryAudienceResponse> {
    const data = QueryAudienceRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "Audience", data);
    return promise.then(data => QueryAudienceResponse.decode(new BinaryReader(data)));
  }
  audienceAll(request: QueryAudienceAllRequest = {
    pagination: undefined
  }): Promise<QueryAudienceAllResponse> {
    const data = QueryAudienceAllRequest.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Query", "AudienceAll", data);
    return promise.then(data => QueryAudienceAllResponse.decode(new BinaryReader(data)));
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
    audienceClaim(request: QueryAudienceClaimRequest): Promise<QueryAudienceClaimResponse> {
      return queryService.audienceClaim(request);
    },
    audience(request: QueryAudienceRequest): Promise<QueryAudienceResponse> {
      return queryService.audience(request);
    },
    audienceAll(request?: QueryAudienceAllRequest): Promise<QueryAudienceAllResponse> {
      return queryService.audienceAll(request);
    },
    validateJWT(request: QueryValidateJWTRequest): Promise<QueryValidateJWTResponse> {
      return queryService.validateJWT(request);
    }
  };
};