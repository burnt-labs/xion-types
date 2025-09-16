//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/xion.mint.v1.MsgUpdateParams": {
    aminoType: "xion/x/mint/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};