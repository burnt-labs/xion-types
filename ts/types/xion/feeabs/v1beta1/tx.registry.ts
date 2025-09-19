//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSendQueryIbcDenomTWAP, MsgSwapCrossChain, MsgFundFeeAbsModuleAccount, MsgUpdateParams, MsgAddHostZone, MsgUpdateHostZone, MsgRemoveHostZone } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP", MsgSendQueryIbcDenomTWAP], ["/xion.feeabs.v1beta1.MsgSwapCrossChain", MsgSwapCrossChain], ["/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount", MsgFundFeeAbsModuleAccount], ["/xion.feeabs.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/xion.feeabs.v1beta1.MsgAddHostZone", MsgAddHostZone], ["/xion.feeabs.v1beta1.MsgUpdateHostZone", MsgUpdateHostZone], ["/xion.feeabs.v1beta1.MsgRemoveHostZone", MsgRemoveHostZone]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    sendQueryIbcDenomTWAP(value: MsgSendQueryIbcDenomTWAP) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
        value: MsgSendQueryIbcDenomTWAP.encode(value).finish()
      };
    },
    swapCrossChain(value: MsgSwapCrossChain) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
        value: MsgSwapCrossChain.encode(value).finish()
      };
    },
    fundFeeAbsModuleAccount(value: MsgFundFeeAbsModuleAccount) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
        value: MsgFundFeeAbsModuleAccount.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addHostZone(value: MsgAddHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone",
        value: MsgAddHostZone.encode(value).finish()
      };
    },
    updateHostZone(value: MsgUpdateHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
        value: MsgUpdateHostZone.encode(value).finish()
      };
    },
    removeHostZone(value: MsgRemoveHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
        value: MsgRemoveHostZone.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    sendQueryIbcDenomTWAP(value: MsgSendQueryIbcDenomTWAP) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
        value
      };
    },
    swapCrossChain(value: MsgSwapCrossChain) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
        value
      };
    },
    fundFeeAbsModuleAccount(value: MsgFundFeeAbsModuleAccount) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams",
        value
      };
    },
    addHostZone(value: MsgAddHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone",
        value
      };
    },
    updateHostZone(value: MsgUpdateHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
        value
      };
    },
    removeHostZone(value: MsgRemoveHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
        value
      };
    }
  },
  fromPartial: {
    sendQueryIbcDenomTWAP(value: MsgSendQueryIbcDenomTWAP) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
        value: MsgSendQueryIbcDenomTWAP.fromPartial(value)
      };
    },
    swapCrossChain(value: MsgSwapCrossChain) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
        value: MsgSwapCrossChain.fromPartial(value)
      };
    },
    fundFeeAbsModuleAccount(value: MsgFundFeeAbsModuleAccount) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
        value: MsgFundFeeAbsModuleAccount.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addHostZone(value: MsgAddHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgAddHostZone",
        value: MsgAddHostZone.fromPartial(value)
      };
    },
    updateHostZone(value: MsgUpdateHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
        value: MsgUpdateHostZone.fromPartial(value)
      };
    },
    removeHostZone(value: MsgRemoveHostZone) {
      return {
        typeUrl: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
        value: MsgRemoveHostZone.fromPartial(value)
      };
    }
  }
};