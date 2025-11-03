//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSendQueryIbcDenomTWAP, MsgSendQueryIbcDenomTWAPResponse, MsgSwapCrossChain, MsgSwapCrossChainResponse, MsgFundFeeAbsModuleAccount, MsgFundFeeAbsModuleAccountResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgAddHostZone, MsgAddHostZoneResponse, MsgUpdateHostZone, MsgUpdateHostZoneResponse, MsgRemoveHostZone, MsgRemoveHostZoneResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** SendQueryIbcDenomTWAP sends a twap query to osmosis */
  sendQueryIbcDenomTWAP(request: MsgSendQueryIbcDenomTWAP): Promise<MsgSendQueryIbcDenomTWAPResponse>;
  /** SwapCrossChain submits a swap cross chain request. */
  swapCrossChain(request: MsgSwapCrossChain): Promise<MsgSwapCrossChainResponse>;
  /** FundFeeAbsModuleAccount funds to feeabs module account. */
  fundFeeAbsModuleAccount(request: MsgFundFeeAbsModuleAccount): Promise<MsgFundFeeAbsModuleAccountResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/feeabs
   * module parameters. The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** AddHostZone adds a new host zone configuration */
  addHostZone(request: MsgAddHostZone): Promise<MsgAddHostZoneResponse>;
  /** UpdateHostZone updates an existing host zone configuration */
  updateHostZone(request: MsgUpdateHostZone): Promise<MsgUpdateHostZoneResponse>;
  /** RemoveHostZone removes a host zone configuration */
  removeHostZone(request: MsgRemoveHostZone): Promise<MsgRemoveHostZoneResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.sendQueryIbcDenomTWAP = this.sendQueryIbcDenomTWAP.bind(this);
    this.swapCrossChain = this.swapCrossChain.bind(this);
    this.fundFeeAbsModuleAccount = this.fundFeeAbsModuleAccount.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.addHostZone = this.addHostZone.bind(this);
    this.updateHostZone = this.updateHostZone.bind(this);
    this.removeHostZone = this.removeHostZone.bind(this);
  }
  sendQueryIbcDenomTWAP(request: MsgSendQueryIbcDenomTWAP): Promise<MsgSendQueryIbcDenomTWAPResponse> {
    const data = MsgSendQueryIbcDenomTWAP.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "SendQueryIbcDenomTWAP", data);
    return promise.then(data => MsgSendQueryIbcDenomTWAPResponse.decode(new BinaryReader(data)));
  }
  swapCrossChain(request: MsgSwapCrossChain): Promise<MsgSwapCrossChainResponse> {
    const data = MsgSwapCrossChain.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "SwapCrossChain", data);
    return promise.then(data => MsgSwapCrossChainResponse.decode(new BinaryReader(data)));
  }
  fundFeeAbsModuleAccount(request: MsgFundFeeAbsModuleAccount): Promise<MsgFundFeeAbsModuleAccountResponse> {
    const data = MsgFundFeeAbsModuleAccount.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "FundFeeAbsModuleAccount", data);
    return promise.then(data => MsgFundFeeAbsModuleAccountResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  addHostZone(request: MsgAddHostZone): Promise<MsgAddHostZoneResponse> {
    const data = MsgAddHostZone.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "AddHostZone", data);
    return promise.then(data => MsgAddHostZoneResponse.decode(new BinaryReader(data)));
  }
  updateHostZone(request: MsgUpdateHostZone): Promise<MsgUpdateHostZoneResponse> {
    const data = MsgUpdateHostZone.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "UpdateHostZone", data);
    return promise.then(data => MsgUpdateHostZoneResponse.decode(new BinaryReader(data)));
  }
  removeHostZone(request: MsgRemoveHostZone): Promise<MsgRemoveHostZoneResponse> {
    const data = MsgRemoveHostZone.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Msg", "RemoveHostZone", data);
    return promise.then(data => MsgRemoveHostZoneResponse.decode(new BinaryReader(data)));
  }
}