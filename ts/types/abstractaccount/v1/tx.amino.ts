//@ts-nocheck
import { MsgUpdateParams, MsgRegisterAccount } from "./tx";
export const AminoConverter = {
  "/abstractaccount.v1.MsgUpdateParams": {
    aminoType: "/abstractaccount.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/abstractaccount.v1.MsgRegisterAccount": {
    aminoType: "/abstractaccount.v1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  }
};