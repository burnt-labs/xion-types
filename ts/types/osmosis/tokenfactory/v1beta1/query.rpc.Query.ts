//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryParamsRequest, QueryParamsResponse,
  QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse,
  QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse,
  QueryDenomsFromAdminRequest, QueryDenomsFromAdminResponse
} from "./query";
export interface Query {
  /** Params returns the tokenfactory module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomAuthorityMetadata returns the authority metadata for a denom. */
  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
  /** DenomsFromCreator returns all denoms created by a given creator address. */
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
  /** DenomsFromAdmin returns all denoms administered by a given admin address. */
  denomsFromAdmin(request: QueryDenomsFromAdminRequest): Promise<QueryDenomsFromAdminResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.denomsFromAdmin = this.denomsFromAdmin.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
    return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
  }
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
    return promise.then(data => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
  }
  denomsFromAdmin(request: QueryDenomsFromAdminRequest): Promise<QueryDenomsFromAdminResponse> {
    const data = QueryDenomsFromAdminRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromAdmin", data);
    return promise.then(data => QueryDenomsFromAdminResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
      return queryService.denomAuthorityMetadata(request);
    },
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
      return queryService.denomsFromCreator(request);
    },
    denomsFromAdmin(request: QueryDenomsFromAdminRequest): Promise<QueryDenomsFromAdminResponse> {
      return queryService.denomsFromAdmin(request);
    }
  };
};
