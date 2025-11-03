//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateAudienceClaim, MsgCreateAudienceClaimResponse, MsgDeleteAudienceClaim, MsgDeleteAudienceClaimResponse, MsgCreateAudience, MsgCreateAudienceResponse, MsgUpdateAudience, MsgUpdateAudienceResponse, MsgDeleteAudience, MsgDeleteAudienceResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateAudienceClaim creates a new audience claim */
  createAudienceClaim(request: MsgCreateAudienceClaim): Promise<MsgCreateAudienceClaimResponse>;
  /** DeleteAudienceClaim deletes an existing audience claim */
  deleteAudienceClaim(request: MsgDeleteAudienceClaim): Promise<MsgDeleteAudienceClaimResponse>;
  /** CreateAudience creates a new audience */
  createAudience(request: MsgCreateAudience): Promise<MsgCreateAudienceResponse>;
  /** UpdateAudience updates an existing audience */
  updateAudience(request: MsgUpdateAudience): Promise<MsgUpdateAudienceResponse>;
  /** DeleteAudience deletes an existing audience */
  deleteAudience(request: MsgDeleteAudience): Promise<MsgDeleteAudienceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createAudienceClaim = this.createAudienceClaim.bind(this);
    this.deleteAudienceClaim = this.deleteAudienceClaim.bind(this);
    this.createAudience = this.createAudience.bind(this);
    this.updateAudience = this.updateAudience.bind(this);
    this.deleteAudience = this.deleteAudience.bind(this);
  }
  createAudienceClaim(request: MsgCreateAudienceClaim): Promise<MsgCreateAudienceClaimResponse> {
    const data = MsgCreateAudienceClaim.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Msg", "CreateAudienceClaim", data);
    return promise.then(data => MsgCreateAudienceClaimResponse.decode(new BinaryReader(data)));
  }
  deleteAudienceClaim(request: MsgDeleteAudienceClaim): Promise<MsgDeleteAudienceClaimResponse> {
    const data = MsgDeleteAudienceClaim.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Msg", "DeleteAudienceClaim", data);
    return promise.then(data => MsgDeleteAudienceClaimResponse.decode(new BinaryReader(data)));
  }
  createAudience(request: MsgCreateAudience): Promise<MsgCreateAudienceResponse> {
    const data = MsgCreateAudience.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Msg", "CreateAudience", data);
    return promise.then(data => MsgCreateAudienceResponse.decode(new BinaryReader(data)));
  }
  updateAudience(request: MsgUpdateAudience): Promise<MsgUpdateAudienceResponse> {
    const data = MsgUpdateAudience.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Msg", "UpdateAudience", data);
    return promise.then(data => MsgUpdateAudienceResponse.decode(new BinaryReader(data)));
  }
  deleteAudience(request: MsgDeleteAudience): Promise<MsgDeleteAudienceResponse> {
    const data = MsgDeleteAudience.encode(request).finish();
    const promise = this.rpc.request("xion.jwk.v1.Msg", "DeleteAudience", data);
    return promise.then(data => MsgDeleteAudienceResponse.decode(new BinaryReader(data)));
  }
}