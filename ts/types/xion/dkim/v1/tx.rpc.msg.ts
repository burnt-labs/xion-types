//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAddDkimPubKeys, MsgAddDkimPubKeysResponse, MsgRemoveDkimPubKey, MsgRemoveDkimPubKeyResponse, MsgRevokeDkimPubKey, MsgRevokeDkimPubKeyResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** AddDkimPubKey defines a message to add DKIM public keys. */
  addDkimPubKeys(request: MsgAddDkimPubKeys): Promise<MsgAddDkimPubKeysResponse>;
  /**
   * RemoveDkimPubKey defines a message to remove a DKIM public key via
   * governance
   */
  removeDkimPubKey(request: MsgRemoveDkimPubKey): Promise<MsgRemoveDkimPubKeyResponse>;
  /**
   * RevokeDkimPubKey defines a message to remove a DKIM public key without
   * governance, by submitting the compromised privkey
   */
  revokeDkimPubKey(request: MsgRevokeDkimPubKey): Promise<MsgRevokeDkimPubKeyResponse>;
  /**
   * UpdateParams defines a governance operation for updating the parameters.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addDkimPubKeys = this.addDkimPubKeys.bind(this);
    this.removeDkimPubKey = this.removeDkimPubKey.bind(this);
    this.revokeDkimPubKey = this.revokeDkimPubKey.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  addDkimPubKeys(request: MsgAddDkimPubKeys): Promise<MsgAddDkimPubKeysResponse> {
    const data = MsgAddDkimPubKeys.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Msg", "AddDkimPubKeys", data);
    return promise.then(data => MsgAddDkimPubKeysResponse.decode(new BinaryReader(data)));
  }
  removeDkimPubKey(request: MsgRemoveDkimPubKey): Promise<MsgRemoveDkimPubKeyResponse> {
    const data = MsgRemoveDkimPubKey.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Msg", "RemoveDkimPubKey", data);
    return promise.then(data => MsgRemoveDkimPubKeyResponse.decode(new BinaryReader(data)));
  }
  revokeDkimPubKey(request: MsgRevokeDkimPubKey): Promise<MsgRevokeDkimPubKeyResponse> {
    const data = MsgRevokeDkimPubKey.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Msg", "RevokeDkimPubKey", data);
    return promise.then(data => MsgRevokeDkimPubKeyResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("xion.dkim.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}