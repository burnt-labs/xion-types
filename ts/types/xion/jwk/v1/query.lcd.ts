//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryAudienceClaimRequest, QueryAudienceClaimResponseSDKType, QueryAudienceRequest, QueryAudienceResponseSDKType, QueryAudienceAllRequest, QueryAudienceAllResponseSDKType, QueryValidateJWTRequest, QueryValidateJWTResponseSDKType } from "./query";
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
  /* AudienceClaim queries an audience claim by hash */
  async audienceClaim(params: QueryAudienceClaimRequest): Promise<QueryAudienceClaimResponseSDKType> {
    const endpoint = `xion/jwk/audience_claim/${params.hash}`;
    return await this.req.get<QueryAudienceClaimResponseSDKType>(endpoint);
  }
  /* Queries a list of Audience items. */
  async audience(params: QueryAudienceRequest): Promise<QueryAudienceResponseSDKType> {
    const endpoint = `xion/jwk/audience/${params.aud}`;
    return await this.req.get<QueryAudienceResponseSDKType>(endpoint);
  }
  /* AudienceAll queries all audiences */
  async audienceAll(params: QueryAudienceAllRequest = {
    pagination: undefined
  }): Promise<QueryAudienceAllResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `xion/jwk/audience`;
    return await this.req.get<QueryAudienceAllResponseSDKType>(endpoint, options);
  }
  /* Queries a list of ValidateJWT items. */
  async validateJWT(params: QueryValidateJWTRequest): Promise<QueryValidateJWTResponseSDKType> {
    const endpoint = `xion/jwk/validate_jwt/${params.aud}/${params.sub}/${params.sigBytes}`;
    return await this.req.get<QueryValidateJWTResponseSDKType>(endpoint);
  }
}