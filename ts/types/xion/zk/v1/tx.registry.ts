//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddVKey, MsgUpdateVKey, MsgRemoveVKey, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/xion.zk.v1.MsgAddVKey", MsgAddVKey], ["/xion.zk.v1.MsgUpdateVKey", MsgUpdateVKey], ["/xion.zk.v1.MsgRemoveVKey", MsgRemoveVKey], ["/xion.zk.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addVKey(value: MsgAddVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgAddVKey",
        value: MsgAddVKey.encode(value).finish()
      };
    },
    updateVKey(value: MsgUpdateVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateVKey",
        value: MsgUpdateVKey.encode(value).finish()
      };
    },
    removeVKey(value: MsgRemoveVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgRemoveVKey",
        value: MsgRemoveVKey.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addVKey(value: MsgAddVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgAddVKey",
        value
      };
    },
    updateVKey(value: MsgUpdateVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateVKey",
        value
      };
    },
    removeVKey(value: MsgRemoveVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgRemoveVKey",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    addVKey(value: MsgAddVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgAddVKey",
        value: MsgAddVKey.fromPartial(value)
      };
    },
    updateVKey(value: MsgUpdateVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateVKey",
        value: MsgUpdateVKey.fromPartial(value)
      };
    },
    removeVKey(value: MsgRemoveVKey) {
      return {
        typeUrl: "/xion.zk.v1.MsgRemoveVKey",
        value: MsgRemoveVKey.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.zk.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};