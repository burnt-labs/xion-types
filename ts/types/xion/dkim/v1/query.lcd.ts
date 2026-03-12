//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDkimPubKeyRequest, QueryDkimPubKeyResponseSDKType, QueryDkimPubKeysRequest, QueryDkimPubKeysResponseSDKType, QueryAuthenticateRequest, AuthenticateResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.dkimPubKey = this.dkimPubKey.bind(this);
    this.dkimPubKeys = this.dkimPubKeys.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.params = this.params.bind(this);
  }
  /* DkimPubKey queries the DKIM public key for a given selector and domain. */
  async dkimPubKey(params: QueryDkimPubKeyRequest): Promise<QueryDkimPubKeyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.selector !== "undefined") {
      options.params.selector = params.selector;
    }
    if (typeof params?.domain !== "undefined") {
      options.params.domain = params.domain;
    }
    const endpoint = `dkim/v1/dkim_pubkey`;
    return await this.req.get<QueryDkimPubKeyResponseSDKType>(endpoint, options);
  }
  /* DkimPubKeys queries the DKIM public keys for a given selectors and domains. */
  async dkimPubKeys(params: QueryDkimPubKeysRequest): Promise<QueryDkimPubKeysResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.selector !== "undefined") {
      options.params.selector = params.selector;
    }
    if (typeof params?.domain !== "undefined") {
      options.params.domain = params.domain;
    }
    if (typeof params?.poseidonHash !== "undefined") {
      options.params.poseidon_hash = params.poseidonHash;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dkim/v1/dkim_pubkeys`;
    return await this.req.get<QueryDkimPubKeysResponseSDKType>(endpoint, options);
  }
  /* Authenticate verifies a zk proof for email authentication. */
  async authenticate(params: QueryAuthenticateRequest): Promise<AuthenticateResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.txBytes !== "undefined") {
      options.params.tx_bytes = params.txBytes;
    }
    if (typeof params?.emailHash !== "undefined") {
      options.params.email_hash = params.emailHash;
    }
    if (typeof params?.proof !== "undefined") {
      options.params.proof = params.proof;
    }
    if (typeof params?.publicInputs !== "undefined") {
      options.params.public_inputs = params.publicInputs;
    }
    if (typeof params?.allowedEmailHosts !== "undefined") {
      options.params.allowed_email_hosts = params.allowedEmailHosts;
    }
    const endpoint = `dkim/v1/auth`;
    return await this.req.get<AuthenticateResponseSDKType>(endpoint, options);
  }
  /* Params queries all parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `dkim/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}