//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateAudienceClaim, MsgDeleteAudienceClaim, MsgCreateAudience, MsgUpdateAudience, MsgDeleteAudience } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/xion.jwk.v1.MsgCreateAudienceClaim", MsgCreateAudienceClaim], ["/xion.jwk.v1.MsgDeleteAudienceClaim", MsgDeleteAudienceClaim], ["/xion.jwk.v1.MsgCreateAudience", MsgCreateAudience], ["/xion.jwk.v1.MsgUpdateAudience", MsgUpdateAudience], ["/xion.jwk.v1.MsgDeleteAudience", MsgDeleteAudience]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createAudienceClaim(value: MsgCreateAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim",
        value: MsgCreateAudienceClaim.encode(value).finish()
      };
    },
    deleteAudienceClaim(value: MsgDeleteAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim",
        value: MsgDeleteAudienceClaim.encode(value).finish()
      };
    },
    createAudience(value: MsgCreateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudience",
        value: MsgCreateAudience.encode(value).finish()
      };
    },
    updateAudience(value: MsgUpdateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgUpdateAudience",
        value: MsgUpdateAudience.encode(value).finish()
      };
    },
    deleteAudience(value: MsgDeleteAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudience",
        value: MsgDeleteAudience.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createAudienceClaim(value: MsgCreateAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim",
        value
      };
    },
    deleteAudienceClaim(value: MsgDeleteAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim",
        value
      };
    },
    createAudience(value: MsgCreateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudience",
        value
      };
    },
    updateAudience(value: MsgUpdateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgUpdateAudience",
        value
      };
    },
    deleteAudience(value: MsgDeleteAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudience",
        value
      };
    }
  },
  fromPartial: {
    createAudienceClaim(value: MsgCreateAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudienceClaim",
        value: MsgCreateAudienceClaim.fromPartial(value)
      };
    },
    deleteAudienceClaim(value: MsgDeleteAudienceClaim) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudienceClaim",
        value: MsgDeleteAudienceClaim.fromPartial(value)
      };
    },
    createAudience(value: MsgCreateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgCreateAudience",
        value: MsgCreateAudience.fromPartial(value)
      };
    },
    updateAudience(value: MsgUpdateAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgUpdateAudience",
        value: MsgUpdateAudience.fromPartial(value)
      };
    },
    deleteAudience(value: MsgDeleteAudience) {
      return {
        typeUrl: "/xion.jwk.v1.MsgDeleteAudience",
        value: MsgDeleteAudience.fromPartial(value)
      };
    }
  }
};