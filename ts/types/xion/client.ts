//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as xionFeeabsV1beta1TxRegistry from "./feeabs/v1beta1/tx.registry";
import * as xionJwkV1TxRegistry from "./jwk/v1/tx.registry";
import * as xionMintV1TxRegistry from "./mint/v1/tx.registry";
import * as xionV1TxRegistry from "./v1/tx.registry";
import * as xionFeeabsV1beta1TxAmino from "./feeabs/v1beta1/tx.amino";
import * as xionJwkV1TxAmino from "./jwk/v1/tx.amino";
import * as xionMintV1TxAmino from "./mint/v1/tx.amino";
import * as xionV1TxAmino from "./v1/tx.amino";
export const xionAminoConverters = {
  ...xionFeeabsV1beta1TxAmino.AminoConverter,
  ...xionJwkV1TxAmino.AminoConverter,
  ...xionMintV1TxAmino.AminoConverter,
  ...xionV1TxAmino.AminoConverter
};
export const xionProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...xionFeeabsV1beta1TxRegistry.registry, ...xionJwkV1TxRegistry.registry, ...xionMintV1TxRegistry.registry, ...xionV1TxRegistry.registry];
export const getSigningXionClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...xionProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...xionAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningXionClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningXionClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};