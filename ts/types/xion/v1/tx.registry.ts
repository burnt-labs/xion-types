//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend, MsgMultiSend, MsgSetPlatformPercentage, MsgSetPlatformMinimum } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/xion.v1.MsgSend", MsgSend], ["/xion.v1.MsgMultiSend", MsgMultiSend], ["/xion.v1.MsgSetPlatformPercentage", MsgSetPlatformPercentage], ["/xion.v1.MsgSetPlatformMinimum", MsgSetPlatformMinimum]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    send(value: MsgSend) {
      return {
        typeUrl: "/xion.v1.MsgSend",
        value: MsgSend.encode(value).finish()
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/xion.v1.MsgMultiSend",
        value: MsgMultiSend.encode(value).finish()
      };
    },
    setPlatformPercentage(value: MsgSetPlatformPercentage) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformPercentage",
        value: MsgSetPlatformPercentage.encode(value).finish()
      };
    },
    setPlatformMinimum(value: MsgSetPlatformMinimum) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformMinimum",
        value: MsgSetPlatformMinimum.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    send(value: MsgSend) {
      return {
        typeUrl: "/xion.v1.MsgSend",
        value
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/xion.v1.MsgMultiSend",
        value
      };
    },
    setPlatformPercentage(value: MsgSetPlatformPercentage) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformPercentage",
        value
      };
    },
    setPlatformMinimum(value: MsgSetPlatformMinimum) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformMinimum",
        value
      };
    }
  },
  fromPartial: {
    send(value: MsgSend) {
      return {
        typeUrl: "/xion.v1.MsgSend",
        value: MsgSend.fromPartial(value)
      };
    },
    multiSend(value: MsgMultiSend) {
      return {
        typeUrl: "/xion.v1.MsgMultiSend",
        value: MsgMultiSend.fromPartial(value)
      };
    },
    setPlatformPercentage(value: MsgSetPlatformPercentage) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformPercentage",
        value: MsgSetPlatformPercentage.fromPartial(value)
      };
    },
    setPlatformMinimum(value: MsgSetPlatformMinimum) {
      return {
        typeUrl: "/xion.v1.MsgSetPlatformMinimum",
        value: MsgSetPlatformMinimum.fromPartial(value)
      };
    }
  }
};