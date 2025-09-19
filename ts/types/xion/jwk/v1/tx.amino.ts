//@ts-nocheck
import { MsgCreateAudienceClaim, MsgDeleteAudienceClaim, MsgCreateAudience, MsgUpdateAudience, MsgDeleteAudience } from "./tx";
export const AminoConverter = {
  "/xion.jwk.v1.MsgCreateAudienceClaim": {
    aminoType: "/xion.jwk.v1.MsgCreateAudienceClaim",
    toAmino: MsgCreateAudienceClaim.toAmino,
    fromAmino: MsgCreateAudienceClaim.fromAmino
  },
  "/xion.jwk.v1.MsgDeleteAudienceClaim": {
    aminoType: "/xion.jwk.v1.MsgDeleteAudienceClaim",
    toAmino: MsgDeleteAudienceClaim.toAmino,
    fromAmino: MsgDeleteAudienceClaim.fromAmino
  },
  "/xion.jwk.v1.MsgCreateAudience": {
    aminoType: "/xion.jwk.v1.MsgCreateAudience",
    toAmino: MsgCreateAudience.toAmino,
    fromAmino: MsgCreateAudience.fromAmino
  },
  "/xion.jwk.v1.MsgUpdateAudience": {
    aminoType: "/xion.jwk.v1.MsgUpdateAudience",
    toAmino: MsgUpdateAudience.toAmino,
    fromAmino: MsgUpdateAudience.fromAmino
  },
  "/xion.jwk.v1.MsgDeleteAudience": {
    aminoType: "/xion.jwk.v1.MsgDeleteAudience",
    toAmino: MsgDeleteAudience.toAmino,
    fromAmino: MsgDeleteAudience.fromAmino
  }
};