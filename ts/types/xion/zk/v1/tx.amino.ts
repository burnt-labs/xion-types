//@ts-nocheck
import { MsgAddVKey, MsgUpdateVKey, MsgRemoveVKey, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/xion.zk.v1.MsgAddVKey": {
    aminoType: "zk/MsgAddVKey",
    toAmino: MsgAddVKey.toAmino,
    fromAmino: MsgAddVKey.fromAmino
  },
  "/xion.zk.v1.MsgUpdateVKey": {
    aminoType: "zk/MsgUpdateVKey",
    toAmino: MsgUpdateVKey.toAmino,
    fromAmino: MsgUpdateVKey.fromAmino
  },
  "/xion.zk.v1.MsgRemoveVKey": {
    aminoType: "zk/MsgRemoveVKey",
    toAmino: MsgRemoveVKey.toAmino,
    fromAmino: MsgRemoveVKey.fromAmino
  },
  "/xion.zk.v1.MsgUpdateParams": {
    aminoType: "/xion.zk.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};