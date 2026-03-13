//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetAudienceClaimRequest, QueryGetAudienceClaimResponseSDKType, QueryGetAudienceRequest, QueryGetAudienceResponseSDKType, QueryAllAudienceRequest, QueryAllAudienceResponseSDKType, QueryValidateJWTRequest, QueryValidateJWTResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.audienceClaim = this.audienceClaim.bind(this);
    this.audience = this.audience.bind(this);
    this.audienceAll = this.audienceAll.bind(this);
    this.validateJWT = this.validateJWT.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `xion/jwk/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AudienceClaim */
  async audienceClaim(params: QueryGetAudienceClaimRequest): Promise<QueryGetAudienceClaimResponseSDKType> {
    const endpoint = `xion/jwk/audience_claim/${params.hash}`;
    return await this.req.get<QueryGetAudienceClaimResponseSDKType>(endpoint);
  }
  /* Queries a list of Audience items. */
  async audience(params: QueryGetAudienceRequest): Promise<QueryGetAudienceResponseSDKType> {
    const endpoint = `xion/jwk/audience/${params.aud}`;
    return await this.req.get<QueryGetAudienceResponseSDKType>(endpoint);
  }
  /* AudienceAll */
  async audienceAll(params: QueryAllAudienceRequest = {
    pagination: undefined
  }): Promise<QueryAllAudienceResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `xion/jwk/audience`;
    return await this.req.get<QueryAllAudienceResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ValidateJWT items. */
  async validateJWT(params: QueryValidateJWTRequest): Promise<QueryValidateJWTResponseSDKType> {
    const endpoint = `xion/jwk/validate_jwt/${params.aud}/${params.sub}/${params.sigBytes}`;
    return await this.req.get<QueryValidateJWTResponseSDKType>(endpoint);
  }
}