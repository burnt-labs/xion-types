//@ts-nocheck
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse, MsgSetPlatformPercentage, MsgSetPlatformPercentageResponse, MsgSetPlatformMinimum, MsgSetPlatformMinimumResponse } from "./tx";
export interface Msg {
  /**
   * Send defines a method for sending coins from one account to another
   * account.
   */
  send(request: MsgSend): Promise<MsgSendResponse>;
  /**
   * MultiSend defines a method for sending coins from some accounts to other
   * accounts.
   */
  multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
  /**
   * SetPlatformPercentage defines the method for updating the platform
   * percentage fee
   */
  setPlatformPercentage(request: MsgSetPlatformPercentage): Promise<MsgSetPlatformPercentageResponse>;
  /**
   * SetPlatformMinimum defines the method for updating the platform
   * percentage fee
   */
  setPlatformMinimum(request: MsgSetPlatformMinimum): Promise<MsgSetPlatformMinimumResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.send = this.send.bind(this);
    this.multiSend = this.multiSend.bind(this);
    this.setPlatformPercentage = this.setPlatformPercentage.bind(this);
    this.setPlatformMinimum = this.setPlatformMinimum.bind(this);
  }
  send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Msg", "Send", data);
    return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
  }
  multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse> {
    const data = MsgMultiSend.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Msg", "MultiSend", data);
    return promise.then(data => MsgMultiSendResponse.decode(new BinaryReader(data)));
  }
  setPlatformPercentage(request: MsgSetPlatformPercentage): Promise<MsgSetPlatformPercentageResponse> {
    const data = MsgSetPlatformPercentage.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Msg", "SetPlatformPercentage", data);
    return promise.then(data => MsgSetPlatformPercentageResponse.decode(new BinaryReader(data)));
  }
  setPlatformMinimum(request: MsgSetPlatformMinimum): Promise<MsgSetPlatformMinimumResponse> {
    const data = MsgSetPlatformMinimum.encode(request).finish();
    const promise = this.rpc.request("xion.v1.Msg", "SetPlatformMinimum", data);
    return promise.then(data => MsgSetPlatformMinimumResponse.decode(new BinaryReader(data)));
  }
}