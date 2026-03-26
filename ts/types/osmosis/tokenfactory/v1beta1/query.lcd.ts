//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import {
  QueryParamsRequest, QueryParamsResponse,
  QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse,
  QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse,
  QueryDenomsFromAdminRequest, QueryDenomsFromAdminResponse
} from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.denomsFromAdmin = this.denomsFromAdmin.bind(this);
  }
  /* Params returns the tokenfactory module parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* DenomAuthorityMetadata returns the authority metadata for a denom. */
  async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
    return await this.req.get<QueryDenomAuthorityMetadataResponse>(endpoint);
  }
  /* DenomsFromCreator returns all denoms created by a given creator address. */
  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/creator/${params.creator}/denoms`;
    return await this.req.get<QueryDenomsFromCreatorResponse>(endpoint);
  }
  /* DenomsFromAdmin returns all denoms administered by a given admin address. */
  async denomsFromAdmin(params: QueryDenomsFromAdminRequest): Promise<QueryDenomsFromAdminResponse> {
    const endpoint = `osmosis/tokenfactory/v1beta1/admin/${params.admin}/denoms`;
    return await this.req.get<QueryDenomsFromAdminResponse>(endpoint);
  }
}
