//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddDkimPubKeys, MsgRemoveDkimPubKey, MsgRevokeDkimPubKey, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/xion.dkim.v1.MsgAddDkimPubKeys", MsgAddDkimPubKeys], ["/xion.dkim.v1.MsgRemoveDkimPubKey", MsgRemoveDkimPubKey], ["/xion.dkim.v1.MsgRevokeDkimPubKey", MsgRevokeDkimPubKey], ["/xion.dkim.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addDkimPubKeys(value: MsgAddDkimPubKeys) {
      return {
        typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys",
        value: MsgAddDkimPubKeys.encode(value).finish()
      };
    },
    removeDkimPubKey(value: MsgRemoveDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey",
        value: MsgRemoveDkimPubKey.encode(value).finish()
      };
    },
    revokeDkimPubKey(value: MsgRevokeDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey",
        value: MsgRevokeDkimPubKey.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.dkim.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addDkimPubKeys(value: MsgAddDkimPubKeys) {
      return {
        typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys",
        value
      };
    },
    removeDkimPubKey(value: MsgRemoveDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey",
        value
      };
    },
    revokeDkimPubKey(value: MsgRevokeDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.dkim.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    addDkimPubKeys(value: MsgAddDkimPubKeys) {
      return {
        typeUrl: "/xion.dkim.v1.MsgAddDkimPubKeys",
        value: MsgAddDkimPubKeys.fromPartial(value)
      };
    },
    removeDkimPubKey(value: MsgRemoveDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRemoveDkimPubKey",
        value: MsgRemoveDkimPubKey.fromPartial(value)
      };
    },
    revokeDkimPubKey(value: MsgRevokeDkimPubKey) {
      return {
        typeUrl: "/xion.dkim.v1.MsgRevokeDkimPubKey",
        value: MsgRevokeDkimPubKey.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.dkim.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};