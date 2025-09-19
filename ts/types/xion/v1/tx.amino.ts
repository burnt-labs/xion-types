//@ts-nocheck
import { MsgSend, MsgMultiSend, MsgSetPlatformPercentage, MsgSetPlatformMinimum } from "./tx";
export const AminoConverter = {
  "/xion.v1.MsgSend": {
    aminoType: "xion/MsgSend",
    toAmino: MsgSend.toAmino,
    fromAmino: MsgSend.fromAmino
  },
  "/xion.v1.MsgMultiSend": {
    aminoType: "xion/MsgMultiSend",
    toAmino: MsgMultiSend.toAmino,
    fromAmino: MsgMultiSend.fromAmino
  },
  "/xion.v1.MsgSetPlatformPercentage": {
    aminoType: "xion/MsgSetPlatformPercentage",
    toAmino: MsgSetPlatformPercentage.toAmino,
    fromAmino: MsgSetPlatformPercentage.fromAmino
  },
  "/xion.v1.MsgSetPlatformMinimum": {
    aminoType: "xion/MsgSetPlatformMinimum",
    toAmino: MsgSetPlatformMinimum.toAmino,
    fromAmino: MsgSetPlatformMinimum.fromAmino
  }
};