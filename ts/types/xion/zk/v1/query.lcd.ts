//@ts-nocheck
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryVerifyRequest, ProofVerifyResponseSDKType, QueryVKeyRequest, QueryVKeyResponseSDKType, QueryVKeyByNameRequest, QueryVKeyByNameResponseSDKType, QueryVKeysRequest, QueryVKeysResponseSDKType, QueryHasVKeyRequest, QueryHasVKeyResponseSDKType, QueryNextVKeyIDRequest, QueryNextVKeyIDResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.proofVerify = this.proofVerify.bind(this);
    this.vKey = this.vKey.bind(this);
    this.vKeyByName = this.vKeyByName.bind(this);
    this.vKeys = this.vKeys.bind(this);
    this.hasVKey = this.hasVKey.bind(this);
    this.nextVKeyID = this.nextVKeyID.bind(this);
    this.params = this.params.bind(this);
  }
  /* ProofVerify verifies a zk proof for email authentication. */
  async proofVerify(params: QueryVerifyRequest): Promise<ProofVerifyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.proof !== "undefined") {
      options.params.proof = params.proof;
    }
    if (typeof params?.publicInputs !== "undefined") {
      options.params.public_inputs = params.publicInputs;
    }
    if (typeof params?.vkeyName !== "undefined") {
      options.params.vkey_name = params.vkeyName;
    }
    if (typeof params?.vkeyId !== "undefined") {
      options.params.vkey_id = params.vkeyId;
    }
    const endpoint = `zk/v1/verify`;
    return await this.req.get<ProofVerifyResponseSDKType>(endpoint, options);
  }
  /* VKey queries a verification key by ID */
  async vKey(params: QueryVKeyRequest): Promise<QueryVKeyResponseSDKType> {
    const endpoint = `burnt/xion/zk/v1/vkeys/${params.id}`;
    return await this.req.get<QueryVKeyResponseSDKType>(endpoint);
  }
  /* VKeyByName queries a verification key by name */
  async vKeyByName(params: QueryVKeyByNameRequest): Promise<QueryVKeyByNameResponseSDKType> {
    const endpoint = `burnt/xion/zk/v1/vkeys/name/${params.name}`;
    return await this.req.get<QueryVKeyByNameResponseSDKType>(endpoint);
  }
  /* VKeys queries all verification keys with pagination */
  async vKeys(params: QueryVKeysRequest = {
    pagination: undefined
  }): Promise<QueryVKeysResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `burnt/xion/zk/v1/vkeys`;
    return await this.req.get<QueryVKeysResponseSDKType>(endpoint, options);
  }
  /* HasVKey checks if a verification key exists by name */
  async hasVKey(params: QueryHasVKeyRequest): Promise<QueryHasVKeyResponseSDKType> {
    const endpoint = `burnt/xion/zk/v1/vkeys/exists/${params.name}`;
    return await this.req.get<QueryHasVKeyResponseSDKType>(endpoint);
  }
  /* NextVKeyID queries the next available verification key ID */
  async nextVKeyID(_params: QueryNextVKeyIDRequest = {}): Promise<QueryNextVKeyIDResponseSDKType> {
    const endpoint = `burnt/xion/zk/v1/vkeys/next-id`;
    return await this.req.get<QueryNextVKeyIDResponseSDKType>(endpoint);
  }
  /* Params returns zk module parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `burnt/xion/zk/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}