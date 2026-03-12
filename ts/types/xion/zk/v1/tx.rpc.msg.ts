//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAddVKey, MsgAddVKeyResponse, MsgUpdateVKey, MsgUpdateVKeyResponse, MsgRemoveVKey, MsgRemoveVKeyResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** AddVKey adds a new verification key */
  addVKey(request: MsgAddVKey): Promise<MsgAddVKeyResponse>;
  /** UpdateVKey updates an existing verification key */
  updateVKey(request: MsgUpdateVKey): Promise<MsgUpdateVKeyResponse>;
  /** RemoveVKey removes a verification key */
  removeVKey(request: MsgRemoveVKey): Promise<MsgRemoveVKeyResponse>;
  /** UpdateParams updates zk module parameters via governance. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addVKey = this.addVKey.bind(this);
    this.updateVKey = this.updateVKey.bind(this);
    this.removeVKey = this.removeVKey.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  addVKey(request: MsgAddVKey): Promise<MsgAddVKeyResponse> {
    const data = MsgAddVKey.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Msg", "AddVKey", data);
    return promise.then(data => MsgAddVKeyResponse.decode(new BinaryReader(data)));
  }
  updateVKey(request: MsgUpdateVKey): Promise<MsgUpdateVKeyResponse> {
    const data = MsgUpdateVKey.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Msg", "UpdateVKey", data);
    return promise.then(data => MsgUpdateVKeyResponse.decode(new BinaryReader(data)));
  }
  removeVKey(request: MsgRemoveVKey): Promise<MsgRemoveVKeyResponse> {
    const data = MsgRemoveVKey.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Msg", "RemoveVKey", data);
    return promise.then(data => MsgRemoveVKeyResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("xion.zk.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}