//@ts-nocheck
import { MsgSendQueryIbcDenomTWAP, MsgSwapCrossChain, MsgFundFeeAbsModuleAccount, MsgUpdateParams, MsgAddHostZone, MsgUpdateHostZone, MsgRemoveHostZone } from "./tx";
export const AminoConverter = {
  "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP": {
    aminoType: "/xion.feeabs.v1beta1.MsgSendQueryIbcDenomTWAP",
    toAmino: MsgSendQueryIbcDenomTWAP.toAmino,
    fromAmino: MsgSendQueryIbcDenomTWAP.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgSwapCrossChain": {
    aminoType: "/xion.feeabs.v1beta1.MsgSwapCrossChain",
    toAmino: MsgSwapCrossChain.toAmino,
    fromAmino: MsgSwapCrossChain.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount": {
    aminoType: "/xion.feeabs.v1beta1.MsgFundFeeAbsModuleAccount",
    toAmino: MsgFundFeeAbsModuleAccount.toAmino,
    fromAmino: MsgFundFeeAbsModuleAccount.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgUpdateParams": {
    aminoType: "/xion.feeabs.v1beta1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgAddHostZone": {
    aminoType: "/xion.feeabs.v1beta1.MsgAddHostZone",
    toAmino: MsgAddHostZone.toAmino,
    fromAmino: MsgAddHostZone.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgUpdateHostZone": {
    aminoType: "/xion.feeabs.v1beta1.MsgUpdateHostZone",
    toAmino: MsgUpdateHostZone.toAmino,
    fromAmino: MsgUpdateHostZone.fromAmino
  },
  "/xion.feeabs.v1beta1.MsgRemoveHostZone": {
    aminoType: "/xion.feeabs.v1beta1.MsgRemoveHostZone",
    toAmino: MsgRemoveHostZone.toAmino,
    fromAmino: MsgRemoveHostZone.fromAmino
  }
};