import {
  MsgChangeAdmin,
  MsgUpdateParams,
  MessageComposer,
  LCDQueryClient,
  QueryClientImpl,
  DenomAuthorityMetadata,
  Params,
  GenesisState,
} from "../types";

// Compile-time smoke test: these symbols must stay re-exported from package entrypoint.
const _msg = MsgChangeAdmin.fromPartial({
  sender: "xion1sender",
  denom: "factory/xion1sender/utest",
  newAdmin: "xion1newadmin",
});

const _update = MsgUpdateParams.fromPartial({
  authority: "xion1authority",
});

const _composer = MessageComposer.withTypeUrl.changeAdmin(_msg);
const _lcdCtor: typeof LCDQueryClient = LCDQueryClient;
const _queryCtor: typeof QueryClientImpl = QueryClientImpl;

const _authority: DenomAuthorityMetadata = { admin: "xion1admin" };
const _params: Params = { denomCreationFee: [], denomCreationGasConsume: 0n };
const _genesis: GenesisState = { params: _params, factoryDenoms: [] };

void _composer;
void _lcdCtor;
void _queryCtor;
void _authority;
void _params;
void _genesis;
void _update;
