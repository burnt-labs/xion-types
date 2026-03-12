//@ts-nocheck
import { MsgAddDkimPubKeys, MsgRemoveDkimPubKey, MsgRevokeDkimPubKey, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/xion.dkim.v1.MsgAddDkimPubKeys": {
    aminoType: "/xion.dkim.v1.MsgAddDkimPubKeys",
    toAmino: MsgAddDkimPubKeys.toAmino,
    fromAmino: MsgAddDkimPubKeys.fromAmino
  },
  "/xion.dkim.v1.MsgRemoveDkimPubKey": {
    aminoType: "/xion.dkim.v1.MsgRemoveDkimPubKey",
    toAmino: MsgRemoveDkimPubKey.toAmino,
    fromAmino: MsgRemoveDkimPubKey.fromAmino
  },
  "/xion.dkim.v1.MsgRevokeDkimPubKey": {
    aminoType: "/xion.dkim.v1.MsgRevokeDkimPubKey",
    toAmino: MsgRevokeDkimPubKey.toAmino,
    fromAmino: MsgRevokeDkimPubKey.fromAmino
  },
  "/xion.dkim.v1.MsgUpdateParams": {
    aminoType: "/xion.dkim.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};