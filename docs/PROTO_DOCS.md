# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [cosmos_proto/cosmos.proto](#cosmos_proto_cosmos-proto)
    - [InterfaceDescriptor](#cosmos_proto-InterfaceDescriptor)
    - [ScalarDescriptor](#cosmos_proto-ScalarDescriptor)
  
    - [ScalarType](#cosmos_proto-ScalarType)
  
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
    - [File-level Extensions](#cosmos_proto_cosmos-proto-extensions)
  
- [gogoproto/gogo.proto](#gogoproto_gogo-proto)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
    - [File-level Extensions](#gogoproto_gogo-proto-extensions)
  
- [amino/amino.proto](#amino_amino-proto)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
    - [File-level Extensions](#amino_amino-proto-extensions)
  
- [abstractaccount/v1/account.proto](#abstractaccount_v1_account-proto)
    - [AbstractAccount](#abstractaccount-v1-AbstractAccount)
    - [NilPubKey](#abstractaccount-v1-NilPubKey)
  
- [abstractaccount/v1/events.proto](#abstractaccount_v1_events-proto)
    - [EventAccountRegistered](#abstractaccount-v1-EventAccountRegistered)
  
- [abstractaccount/v1/params.proto](#abstractaccount_v1_params-proto)
    - [Params](#abstractaccount-v1-Params)
  
- [abstractaccount/v1/genesis.proto](#abstractaccount_v1_genesis-proto)
    - [AccountAddress](#abstractaccount-v1-AccountAddress)
    - [GenesisState](#abstractaccount-v1-GenesisState)
  
- [cosmos/query/v1/query.proto](#cosmos_query_v1_query-proto)
    - [File-level Extensions](#cosmos_query_v1_query-proto-extensions)
  
- [google/api/http.proto](#google_api_http-proto)
    - [CustomHttpPattern](#google-api-CustomHttpPattern)
    - [Http](#google-api-Http)
    - [HttpRule](#google-api-HttpRule)
  
- [google/api/annotations.proto](#google_api_annotations-proto)
    - [File-level Extensions](#google_api_annotations-proto-extensions)
  
- [abstractaccount/v1/query.proto](#abstractaccount_v1_query-proto)
    - [QueryAccountAddressRequest](#abstractaccount-v1-QueryAccountAddressRequest)
    - [QueryAccountAddressResponse](#abstractaccount-v1-QueryAccountAddressResponse)
    - [QueryParamsRequest](#abstractaccount-v1-QueryParamsRequest)
    - [QueryParamsResponse](#abstractaccount-v1-QueryParamsResponse)
  
    - [Query](#abstractaccount-v1-Query)
  
- [cosmos/base/v1beta1/coin.proto](#cosmos_base_v1beta1_coin-proto)
    - [Coin](#cosmos-base-v1beta1-Coin)
    - [DecCoin](#cosmos-base-v1beta1-DecCoin)
    - [DecProto](#cosmos-base-v1beta1-DecProto)
    - [IntProto](#cosmos-base-v1beta1-IntProto)
  
- [cosmos/msg/v1/msg.proto](#cosmos_msg_v1_msg-proto)
    - [File-level Extensions](#cosmos_msg_v1_msg-proto-extensions)
    - [File-level Extensions](#cosmos_msg_v1_msg-proto-extensions)
  
- [abstractaccount/v1/tx.proto](#abstractaccount_v1_tx-proto)
    - [MsgRegisterAccount](#abstractaccount-v1-MsgRegisterAccount)
    - [MsgRegisterAccountResponse](#abstractaccount-v1-MsgRegisterAccountResponse)
    - [MsgUpdateParams](#abstractaccount-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#abstractaccount-v1-MsgUpdateParamsResponse)
  
    - [Msg](#abstractaccount-v1-Msg)
  
- [cosmos/app/v1alpha1/module.proto](#cosmos_app_v1alpha1_module-proto)
    - [MigrateFromInfo](#cosmos-app-v1alpha1-MigrateFromInfo)
    - [ModuleDescriptor](#cosmos-app-v1alpha1-ModuleDescriptor)
    - [PackageReference](#cosmos-app-v1alpha1-PackageReference)
  
    - [File-level Extensions](#cosmos_app_v1alpha1_module-proto-extensions)
  
- [cosmos/app/runtime/v1alpha1/module.proto](#cosmos_app_runtime_v1alpha1_module-proto)
    - [Module](#cosmos-app-runtime-v1alpha1-Module)
    - [StoreKeyConfig](#cosmos-app-runtime-v1alpha1-StoreKeyConfig)
  
- [cosmos/app/v1alpha1/config.proto](#cosmos_app_v1alpha1_config-proto)
    - [Config](#cosmos-app-v1alpha1-Config)
    - [GolangBinding](#cosmos-app-v1alpha1-GolangBinding)
    - [ModuleConfig](#cosmos-app-v1alpha1-ModuleConfig)
  
- [cosmos/app/v1alpha1/query.proto](#cosmos_app_v1alpha1_query-proto)
    - [QueryConfigRequest](#cosmos-app-v1alpha1-QueryConfigRequest)
    - [QueryConfigResponse](#cosmos-app-v1alpha1-QueryConfigResponse)
  
    - [Query](#cosmos-app-v1alpha1-Query)
  
- [cosmos/auth/module/v1/module.proto](#cosmos_auth_module_v1_module-proto)
    - [Module](#cosmos-auth-module-v1-Module)
    - [ModuleAccountPermission](#cosmos-auth-module-v1-ModuleAccountPermission)
  
- [cosmos/auth/v1beta1/auth.proto](#cosmos_auth_v1beta1_auth-proto)
    - [BaseAccount](#cosmos-auth-v1beta1-BaseAccount)
    - [ModuleAccount](#cosmos-auth-v1beta1-ModuleAccount)
    - [ModuleCredential](#cosmos-auth-v1beta1-ModuleCredential)
    - [Params](#cosmos-auth-v1beta1-Params)
  
- [cosmos/auth/v1beta1/genesis.proto](#cosmos_auth_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-auth-v1beta1-GenesisState)
  
- [cosmos/base/query/v1beta1/pagination.proto](#cosmos_base_query_v1beta1_pagination-proto)
    - [PageRequest](#cosmos-base-query-v1beta1-PageRequest)
    - [PageResponse](#cosmos-base-query-v1beta1-PageResponse)
  
- [cosmos/auth/v1beta1/query.proto](#cosmos_auth_v1beta1_query-proto)
    - [AddressBytesToStringRequest](#cosmos-auth-v1beta1-AddressBytesToStringRequest)
    - [AddressBytesToStringResponse](#cosmos-auth-v1beta1-AddressBytesToStringResponse)
    - [AddressStringToBytesRequest](#cosmos-auth-v1beta1-AddressStringToBytesRequest)
    - [AddressStringToBytesResponse](#cosmos-auth-v1beta1-AddressStringToBytesResponse)
    - [Bech32PrefixRequest](#cosmos-auth-v1beta1-Bech32PrefixRequest)
    - [Bech32PrefixResponse](#cosmos-auth-v1beta1-Bech32PrefixResponse)
    - [QueryAccountAddressByIDRequest](#cosmos-auth-v1beta1-QueryAccountAddressByIDRequest)
    - [QueryAccountAddressByIDResponse](#cosmos-auth-v1beta1-QueryAccountAddressByIDResponse)
    - [QueryAccountInfoRequest](#cosmos-auth-v1beta1-QueryAccountInfoRequest)
    - [QueryAccountInfoResponse](#cosmos-auth-v1beta1-QueryAccountInfoResponse)
    - [QueryAccountRequest](#cosmos-auth-v1beta1-QueryAccountRequest)
    - [QueryAccountResponse](#cosmos-auth-v1beta1-QueryAccountResponse)
    - [QueryAccountsRequest](#cosmos-auth-v1beta1-QueryAccountsRequest)
    - [QueryAccountsResponse](#cosmos-auth-v1beta1-QueryAccountsResponse)
    - [QueryModuleAccountByNameRequest](#cosmos-auth-v1beta1-QueryModuleAccountByNameRequest)
    - [QueryModuleAccountByNameResponse](#cosmos-auth-v1beta1-QueryModuleAccountByNameResponse)
    - [QueryModuleAccountsRequest](#cosmos-auth-v1beta1-QueryModuleAccountsRequest)
    - [QueryModuleAccountsResponse](#cosmos-auth-v1beta1-QueryModuleAccountsResponse)
    - [QueryParamsRequest](#cosmos-auth-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-auth-v1beta1-QueryParamsResponse)
  
    - [Query](#cosmos-auth-v1beta1-Query)
  
- [cosmos/auth/v1beta1/tx.proto](#cosmos_auth_v1beta1_tx-proto)
    - [MsgUpdateParams](#cosmos-auth-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-auth-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-auth-v1beta1-Msg)
  
- [cosmos/authz/module/v1/module.proto](#cosmos_authz_module_v1_module-proto)
    - [Module](#cosmos-authz-module-v1-Module)
  
- [cosmos/authz/v1beta1/authz.proto](#cosmos_authz_v1beta1_authz-proto)
    - [GenericAuthorization](#cosmos-authz-v1beta1-GenericAuthorization)
    - [Grant](#cosmos-authz-v1beta1-Grant)
    - [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization)
    - [GrantQueueItem](#cosmos-authz-v1beta1-GrantQueueItem)
  
- [cosmos/authz/v1beta1/event.proto](#cosmos_authz_v1beta1_event-proto)
    - [EventGrant](#cosmos-authz-v1beta1-EventGrant)
    - [EventRevoke](#cosmos-authz-v1beta1-EventRevoke)
  
- [cosmos/authz/v1beta1/genesis.proto](#cosmos_authz_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-authz-v1beta1-GenesisState)
  
- [cosmos/authz/v1beta1/query.proto](#cosmos_authz_v1beta1_query-proto)
    - [QueryGranteeGrantsRequest](#cosmos-authz-v1beta1-QueryGranteeGrantsRequest)
    - [QueryGranteeGrantsResponse](#cosmos-authz-v1beta1-QueryGranteeGrantsResponse)
    - [QueryGranterGrantsRequest](#cosmos-authz-v1beta1-QueryGranterGrantsRequest)
    - [QueryGranterGrantsResponse](#cosmos-authz-v1beta1-QueryGranterGrantsResponse)
    - [QueryGrantsRequest](#cosmos-authz-v1beta1-QueryGrantsRequest)
    - [QueryGrantsResponse](#cosmos-authz-v1beta1-QueryGrantsResponse)
  
    - [Query](#cosmos-authz-v1beta1-Query)
  
- [cosmos/authz/v1beta1/tx.proto](#cosmos_authz_v1beta1_tx-proto)
    - [MsgExec](#cosmos-authz-v1beta1-MsgExec)
    - [MsgExecResponse](#cosmos-authz-v1beta1-MsgExecResponse)
    - [MsgGrant](#cosmos-authz-v1beta1-MsgGrant)
    - [MsgGrantResponse](#cosmos-authz-v1beta1-MsgGrantResponse)
    - [MsgRevoke](#cosmos-authz-v1beta1-MsgRevoke)
    - [MsgRevokeResponse](#cosmos-authz-v1beta1-MsgRevokeResponse)
  
    - [Msg](#cosmos-authz-v1beta1-Msg)
  
- [cosmos/autocli/v1/options.proto](#cosmos_autocli_v1_options-proto)
    - [FlagOptions](#cosmos-autocli-v1-FlagOptions)
    - [ModuleOptions](#cosmos-autocli-v1-ModuleOptions)
    - [PositionalArgDescriptor](#cosmos-autocli-v1-PositionalArgDescriptor)
    - [RpcCommandOptions](#cosmos-autocli-v1-RpcCommandOptions)
    - [RpcCommandOptions.FlagOptionsEntry](#cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry)
    - [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor)
    - [ServiceCommandDescriptor.SubCommandsEntry](#cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry)
  
- [cosmos/autocli/v1/query.proto](#cosmos_autocli_v1_query-proto)
    - [AppOptionsRequest](#cosmos-autocli-v1-AppOptionsRequest)
    - [AppOptionsResponse](#cosmos-autocli-v1-AppOptionsResponse)
    - [AppOptionsResponse.ModuleOptionsEntry](#cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry)
  
    - [Query](#cosmos-autocli-v1-Query)
  
- [cosmos/bank/module/v1/module.proto](#cosmos_bank_module_v1_module-proto)
    - [Module](#cosmos-bank-module-v1-Module)
  
- [cosmos/bank/v1beta1/authz.proto](#cosmos_bank_v1beta1_authz-proto)
    - [SendAuthorization](#cosmos-bank-v1beta1-SendAuthorization)
  
- [cosmos/bank/v1beta1/bank.proto](#cosmos_bank_v1beta1_bank-proto)
    - [DenomUnit](#cosmos-bank-v1beta1-DenomUnit)
    - [Input](#cosmos-bank-v1beta1-Input)
    - [Metadata](#cosmos-bank-v1beta1-Metadata)
    - [Output](#cosmos-bank-v1beta1-Output)
    - [Params](#cosmos-bank-v1beta1-Params)
    - [SendEnabled](#cosmos-bank-v1beta1-SendEnabled)
    - [Supply](#cosmos-bank-v1beta1-Supply)
  
- [cosmos/bank/v1beta1/genesis.proto](#cosmos_bank_v1beta1_genesis-proto)
    - [Balance](#cosmos-bank-v1beta1-Balance)
    - [GenesisState](#cosmos-bank-v1beta1-GenesisState)
  
- [cosmos/bank/v1beta1/query.proto](#cosmos_bank_v1beta1_query-proto)
    - [DenomOwner](#cosmos-bank-v1beta1-DenomOwner)
    - [QueryAllBalancesRequest](#cosmos-bank-v1beta1-QueryAllBalancesRequest)
    - [QueryAllBalancesResponse](#cosmos-bank-v1beta1-QueryAllBalancesResponse)
    - [QueryBalanceRequest](#cosmos-bank-v1beta1-QueryBalanceRequest)
    - [QueryBalanceResponse](#cosmos-bank-v1beta1-QueryBalanceResponse)
    - [QueryDenomMetadataByQueryStringRequest](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest)
    - [QueryDenomMetadataByQueryStringResponse](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse)
    - [QueryDenomMetadataRequest](#cosmos-bank-v1beta1-QueryDenomMetadataRequest)
    - [QueryDenomMetadataResponse](#cosmos-bank-v1beta1-QueryDenomMetadataResponse)
    - [QueryDenomOwnersByQueryRequest](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest)
    - [QueryDenomOwnersByQueryResponse](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse)
    - [QueryDenomOwnersRequest](#cosmos-bank-v1beta1-QueryDenomOwnersRequest)
    - [QueryDenomOwnersResponse](#cosmos-bank-v1beta1-QueryDenomOwnersResponse)
    - [QueryDenomsMetadataRequest](#cosmos-bank-v1beta1-QueryDenomsMetadataRequest)
    - [QueryDenomsMetadataResponse](#cosmos-bank-v1beta1-QueryDenomsMetadataResponse)
    - [QueryParamsRequest](#cosmos-bank-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-bank-v1beta1-QueryParamsResponse)
    - [QuerySendEnabledRequest](#cosmos-bank-v1beta1-QuerySendEnabledRequest)
    - [QuerySendEnabledResponse](#cosmos-bank-v1beta1-QuerySendEnabledResponse)
    - [QuerySpendableBalanceByDenomRequest](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest)
    - [QuerySpendableBalanceByDenomResponse](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse)
    - [QuerySpendableBalancesRequest](#cosmos-bank-v1beta1-QuerySpendableBalancesRequest)
    - [QuerySpendableBalancesResponse](#cosmos-bank-v1beta1-QuerySpendableBalancesResponse)
    - [QuerySupplyOfRequest](#cosmos-bank-v1beta1-QuerySupplyOfRequest)
    - [QuerySupplyOfResponse](#cosmos-bank-v1beta1-QuerySupplyOfResponse)
    - [QueryTotalSupplyRequest](#cosmos-bank-v1beta1-QueryTotalSupplyRequest)
    - [QueryTotalSupplyResponse](#cosmos-bank-v1beta1-QueryTotalSupplyResponse)
  
    - [Query](#cosmos-bank-v1beta1-Query)
  
- [cosmos/bank/v1beta1/tx.proto](#cosmos_bank_v1beta1_tx-proto)
    - [MsgMultiSend](#cosmos-bank-v1beta1-MsgMultiSend)
    - [MsgMultiSendResponse](#cosmos-bank-v1beta1-MsgMultiSendResponse)
    - [MsgSend](#cosmos-bank-v1beta1-MsgSend)
    - [MsgSendResponse](#cosmos-bank-v1beta1-MsgSendResponse)
    - [MsgSetSendEnabled](#cosmos-bank-v1beta1-MsgSetSendEnabled)
    - [MsgSetSendEnabledResponse](#cosmos-bank-v1beta1-MsgSetSendEnabledResponse)
    - [MsgUpdateParams](#cosmos-bank-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-bank-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-bank-v1beta1-Msg)
  
- [tendermint/crypto/proof.proto](#tendermint_crypto_proof-proto)
    - [DominoOp](#tendermint-crypto-DominoOp)
    - [Proof](#tendermint-crypto-Proof)
    - [ProofOp](#tendermint-crypto-ProofOp)
    - [ProofOps](#tendermint-crypto-ProofOps)
    - [ValueOp](#tendermint-crypto-ValueOp)
  
- [tendermint/crypto/keys.proto](#tendermint_crypto_keys-proto)
    - [PublicKey](#tendermint-crypto-PublicKey)
  
- [tendermint/types/params.proto](#tendermint_types_params-proto)
    - [ABCIParams](#tendermint-types-ABCIParams)
    - [AuthorityParams](#tendermint-types-AuthorityParams)
    - [BlockParams](#tendermint-types-BlockParams)
    - [ConsensusParams](#tendermint-types-ConsensusParams)
    - [EvidenceParams](#tendermint-types-EvidenceParams)
    - [HashedParams](#tendermint-types-HashedParams)
    - [ValidatorParams](#tendermint-types-ValidatorParams)
    - [VersionParams](#tendermint-types-VersionParams)
  
- [tendermint/types/validator.proto](#tendermint_types_validator-proto)
    - [SimpleValidator](#tendermint-types-SimpleValidator)
    - [Validator](#tendermint-types-Validator)
    - [ValidatorSet](#tendermint-types-ValidatorSet)
  
    - [BlockIDFlag](#tendermint-types-BlockIDFlag)
  
- [tendermint/abci/types.proto](#tendermint_abci_types-proto)
    - [CommitInfo](#tendermint-abci-CommitInfo)
    - [Event](#tendermint-abci-Event)
    - [EventAttribute](#tendermint-abci-EventAttribute)
    - [ExecTxResult](#tendermint-abci-ExecTxResult)
    - [ExtendedCommitInfo](#tendermint-abci-ExtendedCommitInfo)
    - [ExtendedVoteInfo](#tendermint-abci-ExtendedVoteInfo)
    - [Misbehavior](#tendermint-abci-Misbehavior)
    - [Request](#tendermint-abci-Request)
    - [RequestApplySnapshotChunk](#tendermint-abci-RequestApplySnapshotChunk)
    - [RequestCheckTx](#tendermint-abci-RequestCheckTx)
    - [RequestCommit](#tendermint-abci-RequestCommit)
    - [RequestEcho](#tendermint-abci-RequestEcho)
    - [RequestExtendVote](#tendermint-abci-RequestExtendVote)
    - [RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock)
    - [RequestFlush](#tendermint-abci-RequestFlush)
    - [RequestInfo](#tendermint-abci-RequestInfo)
    - [RequestInitChain](#tendermint-abci-RequestInitChain)
    - [RequestListSnapshots](#tendermint-abci-RequestListSnapshots)
    - [RequestLoadSnapshotChunk](#tendermint-abci-RequestLoadSnapshotChunk)
    - [RequestOfferSnapshot](#tendermint-abci-RequestOfferSnapshot)
    - [RequestPrepareProposal](#tendermint-abci-RequestPrepareProposal)
    - [RequestProcessProposal](#tendermint-abci-RequestProcessProposal)
    - [RequestQuery](#tendermint-abci-RequestQuery)
    - [RequestVerifyVoteExtension](#tendermint-abci-RequestVerifyVoteExtension)
    - [Response](#tendermint-abci-Response)
    - [ResponseApplySnapshotChunk](#tendermint-abci-ResponseApplySnapshotChunk)
    - [ResponseCheckTx](#tendermint-abci-ResponseCheckTx)
    - [ResponseCommit](#tendermint-abci-ResponseCommit)
    - [ResponseEcho](#tendermint-abci-ResponseEcho)
    - [ResponseException](#tendermint-abci-ResponseException)
    - [ResponseExtendVote](#tendermint-abci-ResponseExtendVote)
    - [ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock)
    - [ResponseFlush](#tendermint-abci-ResponseFlush)
    - [ResponseInfo](#tendermint-abci-ResponseInfo)
    - [ResponseInitChain](#tendermint-abci-ResponseInitChain)
    - [ResponseListSnapshots](#tendermint-abci-ResponseListSnapshots)
    - [ResponseLoadSnapshotChunk](#tendermint-abci-ResponseLoadSnapshotChunk)
    - [ResponseOfferSnapshot](#tendermint-abci-ResponseOfferSnapshot)
    - [ResponsePrepareProposal](#tendermint-abci-ResponsePrepareProposal)
    - [ResponseProcessProposal](#tendermint-abci-ResponseProcessProposal)
    - [ResponseQuery](#tendermint-abci-ResponseQuery)
    - [ResponseVerifyVoteExtension](#tendermint-abci-ResponseVerifyVoteExtension)
    - [Snapshot](#tendermint-abci-Snapshot)
    - [TxResult](#tendermint-abci-TxResult)
    - [Validator](#tendermint-abci-Validator)
    - [ValidatorUpdate](#tendermint-abci-ValidatorUpdate)
    - [VoteInfo](#tendermint-abci-VoteInfo)
  
    - [CheckTxType](#tendermint-abci-CheckTxType)
    - [MisbehaviorType](#tendermint-abci-MisbehaviorType)
    - [ResponseApplySnapshotChunk.Result](#tendermint-abci-ResponseApplySnapshotChunk-Result)
    - [ResponseOfferSnapshot.Result](#tendermint-abci-ResponseOfferSnapshot-Result)
    - [ResponseProcessProposal.ProposalStatus](#tendermint-abci-ResponseProcessProposal-ProposalStatus)
    - [ResponseVerifyVoteExtension.VerifyStatus](#tendermint-abci-ResponseVerifyVoteExtension-VerifyStatus)
  
    - [ABCI](#tendermint-abci-ABCI)
  
- [tendermint/version/types.proto](#tendermint_version_types-proto)
    - [App](#tendermint-version-App)
    - [Consensus](#tendermint-version-Consensus)
  
- [tendermint/types/types.proto](#tendermint_types_types-proto)
    - [BlockID](#tendermint-types-BlockID)
    - [BlockMeta](#tendermint-types-BlockMeta)
    - [Commit](#tendermint-types-Commit)
    - [CommitSig](#tendermint-types-CommitSig)
    - [Data](#tendermint-types-Data)
    - [ExtendedCommit](#tendermint-types-ExtendedCommit)
    - [ExtendedCommitSig](#tendermint-types-ExtendedCommitSig)
    - [Header](#tendermint-types-Header)
    - [LightBlock](#tendermint-types-LightBlock)
    - [Part](#tendermint-types-Part)
    - [PartSetHeader](#tendermint-types-PartSetHeader)
    - [Proposal](#tendermint-types-Proposal)
    - [SignedHeader](#tendermint-types-SignedHeader)
    - [TxProof](#tendermint-types-TxProof)
    - [Vote](#tendermint-types-Vote)
  
    - [SignedMsgType](#tendermint-types-SignedMsgType)
  
- [tendermint/types/evidence.proto](#tendermint_types_evidence-proto)
    - [DuplicateVoteEvidence](#tendermint-types-DuplicateVoteEvidence)
    - [Evidence](#tendermint-types-Evidence)
    - [EvidenceList](#tendermint-types-EvidenceList)
    - [LightClientAttackEvidence](#tendermint-types-LightClientAttackEvidence)
  
- [tendermint/types/block.proto](#tendermint_types_block-proto)
    - [Block](#tendermint-types-Block)
  
- [cosmos/base/abci/v1beta1/abci.proto](#cosmos_base_abci_v1beta1_abci-proto)
    - [ABCIMessageLog](#cosmos-base-abci-v1beta1-ABCIMessageLog)
    - [Attribute](#cosmos-base-abci-v1beta1-Attribute)
    - [GasInfo](#cosmos-base-abci-v1beta1-GasInfo)
    - [MsgData](#cosmos-base-abci-v1beta1-MsgData)
    - [Result](#cosmos-base-abci-v1beta1-Result)
    - [SearchBlocksResult](#cosmos-base-abci-v1beta1-SearchBlocksResult)
    - [SearchTxsResult](#cosmos-base-abci-v1beta1-SearchTxsResult)
    - [SimulationResponse](#cosmos-base-abci-v1beta1-SimulationResponse)
    - [StringEvent](#cosmos-base-abci-v1beta1-StringEvent)
    - [TxMsgData](#cosmos-base-abci-v1beta1-TxMsgData)
    - [TxResponse](#cosmos-base-abci-v1beta1-TxResponse)
  
- [cosmos/base/node/v1beta1/query.proto](#cosmos_base_node_v1beta1_query-proto)
    - [ConfigRequest](#cosmos-base-node-v1beta1-ConfigRequest)
    - [ConfigResponse](#cosmos-base-node-v1beta1-ConfigResponse)
    - [StatusRequest](#cosmos-base-node-v1beta1-StatusRequest)
    - [StatusResponse](#cosmos-base-node-v1beta1-StatusResponse)
  
    - [Service](#cosmos-base-node-v1beta1-Service)
  
- [cosmos/base/reflection/v1beta1/reflection.proto](#cosmos_base_reflection_v1beta1_reflection-proto)
    - [ListAllInterfacesRequest](#cosmos-base-reflection-v1beta1-ListAllInterfacesRequest)
    - [ListAllInterfacesResponse](#cosmos-base-reflection-v1beta1-ListAllInterfacesResponse)
    - [ListImplementationsRequest](#cosmos-base-reflection-v1beta1-ListImplementationsRequest)
    - [ListImplementationsResponse](#cosmos-base-reflection-v1beta1-ListImplementationsResponse)
  
    - [ReflectionService](#cosmos-base-reflection-v1beta1-ReflectionService)
  
- [cosmos/base/reflection/v2alpha1/reflection.proto](#cosmos_base_reflection_v2alpha1_reflection-proto)
    - [AppDescriptor](#cosmos-base-reflection-v2alpha1-AppDescriptor)
    - [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor)
    - [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor)
    - [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor)
    - [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor)
    - [GetAuthnDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest)
    - [GetAuthnDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse)
    - [GetChainDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest)
    - [GetChainDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse)
    - [GetCodecDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest)
    - [GetCodecDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse)
    - [GetConfigurationDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest)
    - [GetConfigurationDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse)
    - [GetQueryServicesDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest)
    - [GetQueryServicesDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse)
    - [GetTxDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest)
    - [GetTxDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse)
    - [InterfaceAcceptingMessageDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor)
    - [InterfaceDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceDescriptor)
    - [InterfaceImplementerDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor)
    - [MsgDescriptor](#cosmos-base-reflection-v2alpha1-MsgDescriptor)
    - [QueryMethodDescriptor](#cosmos-base-reflection-v2alpha1-QueryMethodDescriptor)
    - [QueryServiceDescriptor](#cosmos-base-reflection-v2alpha1-QueryServiceDescriptor)
    - [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor)
    - [SigningModeDescriptor](#cosmos-base-reflection-v2alpha1-SigningModeDescriptor)
    - [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor)
  
    - [ReflectionService](#cosmos-base-reflection-v2alpha1-ReflectionService)
  
- [tendermint/p2p/types.proto](#tendermint_p2p_types-proto)
    - [DefaultNodeInfo](#tendermint-p2p-DefaultNodeInfo)
    - [DefaultNodeInfoOther](#tendermint-p2p-DefaultNodeInfoOther)
    - [NetAddress](#tendermint-p2p-NetAddress)
    - [ProtocolVersion](#tendermint-p2p-ProtocolVersion)
  
- [cosmos/base/tendermint/v1beta1/types.proto](#cosmos_base_tendermint_v1beta1_types-proto)
    - [Block](#cosmos-base-tendermint-v1beta1-Block)
    - [Header](#cosmos-base-tendermint-v1beta1-Header)
  
- [cosmos/base/tendermint/v1beta1/query.proto](#cosmos_base_tendermint_v1beta1_query-proto)
    - [ABCIQueryRequest](#cosmos-base-tendermint-v1beta1-ABCIQueryRequest)
    - [ABCIQueryResponse](#cosmos-base-tendermint-v1beta1-ABCIQueryResponse)
    - [GetBlockByHeightRequest](#cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest)
    - [GetBlockByHeightResponse](#cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse)
    - [GetBlockResultsRequest](#cosmos-base-tendermint-v1beta1-GetBlockResultsRequest)
    - [GetBlockResultsResponse](#cosmos-base-tendermint-v1beta1-GetBlockResultsResponse)
    - [GetLatestBlockRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockRequest)
    - [GetLatestBlockResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResponse)
    - [GetLatestBlockResultsRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockResultsRequest)
    - [GetLatestBlockResultsResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResultsResponse)
    - [GetLatestValidatorSetRequest](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest)
    - [GetLatestValidatorSetResponse](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse)
    - [GetNodeInfoRequest](#cosmos-base-tendermint-v1beta1-GetNodeInfoRequest)
    - [GetNodeInfoResponse](#cosmos-base-tendermint-v1beta1-GetNodeInfoResponse)
    - [GetSyncingRequest](#cosmos-base-tendermint-v1beta1-GetSyncingRequest)
    - [GetSyncingResponse](#cosmos-base-tendermint-v1beta1-GetSyncingResponse)
    - [GetValidatorSetByHeightRequest](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest)
    - [GetValidatorSetByHeightResponse](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse)
    - [Module](#cosmos-base-tendermint-v1beta1-Module)
    - [ProofOp](#cosmos-base-tendermint-v1beta1-ProofOp)
    - [ProofOps](#cosmos-base-tendermint-v1beta1-ProofOps)
    - [Validator](#cosmos-base-tendermint-v1beta1-Validator)
    - [VersionInfo](#cosmos-base-tendermint-v1beta1-VersionInfo)
  
    - [Service](#cosmos-base-tendermint-v1beta1-Service)
  
- [cosmos/consensus/module/v1/module.proto](#cosmos_consensus_module_v1_module-proto)
    - [Module](#cosmos-consensus-module-v1-Module)
  
- [cosmos/consensus/v1/query.proto](#cosmos_consensus_v1_query-proto)
    - [QueryParamsRequest](#cosmos-consensus-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-consensus-v1-QueryParamsResponse)
  
    - [Query](#cosmos-consensus-v1-Query)
  
- [cosmos/consensus/v1/tx.proto](#cosmos_consensus_v1_tx-proto)
    - [MsgUpdateParams](#cosmos-consensus-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-consensus-v1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-consensus-v1-Msg)
  
- [cosmos/counter/module/v1/module.proto](#cosmos_counter_module_v1_module-proto)
    - [Module](#cosmos-counter-module-v1-Module)
  
- [cosmos/counter/v1/query.proto](#cosmos_counter_v1_query-proto)
    - [QueryGetCountRequest](#cosmos-counter-v1-QueryGetCountRequest)
    - [QueryGetCountResponse](#cosmos-counter-v1-QueryGetCountResponse)
  
    - [Query](#cosmos-counter-v1-Query)
  
- [cosmos/counter/v1/tx.proto](#cosmos_counter_v1_tx-proto)
    - [MsgIncreaseCountResponse](#cosmos-counter-v1-MsgIncreaseCountResponse)
    - [MsgIncreaseCounter](#cosmos-counter-v1-MsgIncreaseCounter)
  
    - [Msg](#cosmos-counter-v1-Msg)
  
- [cosmos/crypto/bls12_381/keys.proto](#cosmos_crypto_bls12_381_keys-proto)
    - [PrivKey](#cosmos-crypto-bls12_381-PrivKey)
    - [PubKey](#cosmos-crypto-bls12_381-PubKey)
  
- [cosmos/crypto/ed25519/keys.proto](#cosmos_crypto_ed25519_keys-proto)
    - [PrivKey](#cosmos-crypto-ed25519-PrivKey)
    - [PubKey](#cosmos-crypto-ed25519-PubKey)
  
- [cosmos/crypto/hd/v1/hd.proto](#cosmos_crypto_hd_v1_hd-proto)
    - [BIP44Params](#cosmos-crypto-hd-v1-BIP44Params)
  
- [cosmos/crypto/keyring/v1/record.proto](#cosmos_crypto_keyring_v1_record-proto)
    - [Record](#cosmos-crypto-keyring-v1-Record)
    - [Record.Ledger](#cosmos-crypto-keyring-v1-Record-Ledger)
    - [Record.Local](#cosmos-crypto-keyring-v1-Record-Local)
    - [Record.Multi](#cosmos-crypto-keyring-v1-Record-Multi)
    - [Record.Offline](#cosmos-crypto-keyring-v1-Record-Offline)
  
- [cosmos/crypto/mldsa65/keys.proto](#cosmos_crypto_mldsa65_keys-proto)
    - [PrivKey](#cosmos-crypto-mldsa65-PrivKey)
    - [PubKey](#cosmos-crypto-mldsa65-PubKey)
  
- [cosmos/crypto/multisig/keys.proto](#cosmos_crypto_multisig_keys-proto)
    - [LegacyAminoPubKey](#cosmos-crypto-multisig-LegacyAminoPubKey)
  
- [cosmos/crypto/multisig/v1beta1/multisig.proto](#cosmos_crypto_multisig_v1beta1_multisig-proto)
    - [CompactBitArray](#cosmos-crypto-multisig-v1beta1-CompactBitArray)
    - [MultiSignature](#cosmos-crypto-multisig-v1beta1-MultiSignature)
  
- [cosmos/crypto/secp256k1/keys.proto](#cosmos_crypto_secp256k1_keys-proto)
    - [PrivKey](#cosmos-crypto-secp256k1-PrivKey)
    - [PubKey](#cosmos-crypto-secp256k1-PubKey)
  
- [cosmos/crypto/secp256k1eth/keys.proto](#cosmos_crypto_secp256k1eth_keys-proto)
    - [PrivKey](#cosmos-crypto-secp256k1eth-PrivKey)
    - [PubKey](#cosmos-crypto-secp256k1eth-PubKey)
  
- [cosmos/crypto/secp256r1/keys.proto](#cosmos_crypto_secp256r1_keys-proto)
    - [PrivKey](#cosmos-crypto-secp256r1-PrivKey)
    - [PubKey](#cosmos-crypto-secp256r1-PubKey)
  
- [cosmos/distribution/module/v1/module.proto](#cosmos_distribution_module_v1_module-proto)
    - [Module](#cosmos-distribution-module-v1-Module)
  
- [cosmos/distribution/v1beta1/distribution.proto](#cosmos_distribution_v1beta1_distribution-proto)
    - [CommunityPoolSpendProposal](#cosmos-distribution-v1beta1-CommunityPoolSpendProposal)
    - [CommunityPoolSpendProposalWithDeposit](#cosmos-distribution-v1beta1-CommunityPoolSpendProposalWithDeposit)
    - [DelegationDelegatorReward](#cosmos-distribution-v1beta1-DelegationDelegatorReward)
    - [DelegatorStartingInfo](#cosmos-distribution-v1beta1-DelegatorStartingInfo)
    - [FeePool](#cosmos-distribution-v1beta1-FeePool)
    - [Params](#cosmos-distribution-v1beta1-Params)
    - [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission)
    - [ValidatorCurrentRewards](#cosmos-distribution-v1beta1-ValidatorCurrentRewards)
    - [ValidatorHistoricalRewards](#cosmos-distribution-v1beta1-ValidatorHistoricalRewards)
    - [ValidatorOutstandingRewards](#cosmos-distribution-v1beta1-ValidatorOutstandingRewards)
    - [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent)
    - [ValidatorSlashEvents](#cosmos-distribution-v1beta1-ValidatorSlashEvents)
  
- [cosmos/distribution/v1beta1/genesis.proto](#cosmos_distribution_v1beta1_genesis-proto)
    - [DelegatorStartingInfoRecord](#cosmos-distribution-v1beta1-DelegatorStartingInfoRecord)
    - [DelegatorWithdrawInfo](#cosmos-distribution-v1beta1-DelegatorWithdrawInfo)
    - [GenesisState](#cosmos-distribution-v1beta1-GenesisState)
    - [ValidatorAccumulatedCommissionRecord](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord)
    - [ValidatorCurrentRewardsRecord](#cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord)
    - [ValidatorHistoricalRewardsRecord](#cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord)
    - [ValidatorOutstandingRewardsRecord](#cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord)
    - [ValidatorSlashEventRecord](#cosmos-distribution-v1beta1-ValidatorSlashEventRecord)
  
- [cosmos/distribution/v1beta1/query.proto](#cosmos_distribution_v1beta1_query-proto)
    - [QueryCommunityPoolRequest](#cosmos-distribution-v1beta1-QueryCommunityPoolRequest)
    - [QueryCommunityPoolResponse](#cosmos-distribution-v1beta1-QueryCommunityPoolResponse)
    - [QueryDelegationRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationRewardsRequest)
    - [QueryDelegationRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationRewardsResponse)
    - [QueryDelegationTotalRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest)
    - [QueryDelegationTotalRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse)
    - [QueryDelegatorStartingInfoRequest](#cosmos-distribution-v1beta1-QueryDelegatorStartingInfoRequest)
    - [QueryDelegatorStartingInfoResponse](#cosmos-distribution-v1beta1-QueryDelegatorStartingInfoResponse)
    - [QueryDelegatorValidatorsRequest](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest)
    - [QueryDelegatorValidatorsResponse](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse)
    - [QueryDelegatorWithdrawAddressRequest](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest)
    - [QueryDelegatorWithdrawAddressResponse](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse)
    - [QueryParamsRequest](#cosmos-distribution-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-distribution-v1beta1-QueryParamsResponse)
    - [QueryValidatorCommissionRequest](#cosmos-distribution-v1beta1-QueryValidatorCommissionRequest)
    - [QueryValidatorCommissionResponse](#cosmos-distribution-v1beta1-QueryValidatorCommissionResponse)
    - [QueryValidatorCurrentRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsRequest)
    - [QueryValidatorCurrentRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsResponse)
    - [QueryValidatorDistributionInfoRequest](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest)
    - [QueryValidatorDistributionInfoResponse](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse)
    - [QueryValidatorHistoricalRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsRequest)
    - [QueryValidatorHistoricalRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsResponse)
    - [QueryValidatorOutstandingRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest)
    - [QueryValidatorOutstandingRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse)
    - [QueryValidatorSlashesRequest](#cosmos-distribution-v1beta1-QueryValidatorSlashesRequest)
    - [QueryValidatorSlashesResponse](#cosmos-distribution-v1beta1-QueryValidatorSlashesResponse)
  
    - [Query](#cosmos-distribution-v1beta1-Query)
  
- [cosmos/distribution/v1beta1/tx.proto](#cosmos_distribution_v1beta1_tx-proto)
    - [MsgCommunityPoolSpend](#cosmos-distribution-v1beta1-MsgCommunityPoolSpend)
    - [MsgCommunityPoolSpendResponse](#cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse)
    - [MsgDepositValidatorRewardsPool](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool)
    - [MsgDepositValidatorRewardsPoolResponse](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse)
    - [MsgFundCommunityPool](#cosmos-distribution-v1beta1-MsgFundCommunityPool)
    - [MsgFundCommunityPoolResponse](#cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse)
    - [MsgSetWithdrawAddress](#cosmos-distribution-v1beta1-MsgSetWithdrawAddress)
    - [MsgSetWithdrawAddressResponse](#cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse)
    - [MsgUpdateParams](#cosmos-distribution-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-distribution-v1beta1-MsgUpdateParamsResponse)
    - [MsgWithdrawDelegatorReward](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward)
    - [MsgWithdrawDelegatorRewardResponse](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse)
    - [MsgWithdrawValidatorCommission](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission)
    - [MsgWithdrawValidatorCommissionResponse](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse)
  
    - [Msg](#cosmos-distribution-v1beta1-Msg)
  
- [cosmos/epochs/module/v1/module.proto](#cosmos_epochs_module_v1_module-proto)
    - [Module](#cosmos-epochs-module-v1-Module)
  
- [cosmos/epochs/v1beta1/events.proto](#cosmos_epochs_v1beta1_events-proto)
    - [EventEpochEnd](#cosmos-epochs-v1beta1-EventEpochEnd)
    - [EventEpochStart](#cosmos-epochs-v1beta1-EventEpochStart)
  
- [cosmos/epochs/v1beta1/genesis.proto](#cosmos_epochs_v1beta1_genesis-proto)
    - [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo)
    - [GenesisState](#cosmos-epochs-v1beta1-GenesisState)
  
- [cosmos/epochs/v1beta1/query.proto](#cosmos_epochs_v1beta1_query-proto)
    - [QueryCurrentEpochRequest](#cosmos-epochs-v1beta1-QueryCurrentEpochRequest)
    - [QueryCurrentEpochResponse](#cosmos-epochs-v1beta1-QueryCurrentEpochResponse)
    - [QueryEpochInfosRequest](#cosmos-epochs-v1beta1-QueryEpochInfosRequest)
    - [QueryEpochInfosResponse](#cosmos-epochs-v1beta1-QueryEpochInfosResponse)
  
    - [Query](#cosmos-epochs-v1beta1-Query)
  
- [cosmos/evidence/module/v1/module.proto](#cosmos_evidence_module_v1_module-proto)
    - [Module](#cosmos-evidence-module-v1-Module)
  
- [cosmos/evidence/v1beta1/evidence.proto](#cosmos_evidence_v1beta1_evidence-proto)
    - [Equivocation](#cosmos-evidence-v1beta1-Equivocation)
  
- [cosmos/evidence/v1beta1/genesis.proto](#cosmos_evidence_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-evidence-v1beta1-GenesisState)
  
- [cosmos/evidence/v1beta1/query.proto](#cosmos_evidence_v1beta1_query-proto)
    - [QueryAllEvidenceRequest](#cosmos-evidence-v1beta1-QueryAllEvidenceRequest)
    - [QueryAllEvidenceResponse](#cosmos-evidence-v1beta1-QueryAllEvidenceResponse)
    - [QueryEvidenceRequest](#cosmos-evidence-v1beta1-QueryEvidenceRequest)
    - [QueryEvidenceResponse](#cosmos-evidence-v1beta1-QueryEvidenceResponse)
  
    - [Query](#cosmos-evidence-v1beta1-Query)
  
- [cosmos/evidence/v1beta1/tx.proto](#cosmos_evidence_v1beta1_tx-proto)
    - [MsgSubmitEvidence](#cosmos-evidence-v1beta1-MsgSubmitEvidence)
    - [MsgSubmitEvidenceResponse](#cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse)
  
    - [Msg](#cosmos-evidence-v1beta1-Msg)
  
- [cosmos/feegrant/module/v1/module.proto](#cosmos_feegrant_module_v1_module-proto)
    - [Module](#cosmos-feegrant-module-v1-Module)
  
- [cosmos/feegrant/v1beta1/feegrant.proto](#cosmos_feegrant_v1beta1_feegrant-proto)
    - [AllowedMsgAllowance](#cosmos-feegrant-v1beta1-AllowedMsgAllowance)
    - [BasicAllowance](#cosmos-feegrant-v1beta1-BasicAllowance)
    - [Grant](#cosmos-feegrant-v1beta1-Grant)
    - [PeriodicAllowance](#cosmos-feegrant-v1beta1-PeriodicAllowance)
  
- [cosmos/feegrant/v1beta1/genesis.proto](#cosmos_feegrant_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-feegrant-v1beta1-GenesisState)
  
- [cosmos/feegrant/v1beta1/query.proto](#cosmos_feegrant_v1beta1_query-proto)
    - [QueryAllowanceRequest](#cosmos-feegrant-v1beta1-QueryAllowanceRequest)
    - [QueryAllowanceResponse](#cosmos-feegrant-v1beta1-QueryAllowanceResponse)
    - [QueryAllowancesByGranterRequest](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest)
    - [QueryAllowancesByGranterResponse](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse)
    - [QueryAllowancesRequest](#cosmos-feegrant-v1beta1-QueryAllowancesRequest)
    - [QueryAllowancesResponse](#cosmos-feegrant-v1beta1-QueryAllowancesResponse)
  
    - [Query](#cosmos-feegrant-v1beta1-Query)
  
- [cosmos/feegrant/v1beta1/tx.proto](#cosmos_feegrant_v1beta1_tx-proto)
    - [MsgGrantAllowance](#cosmos-feegrant-v1beta1-MsgGrantAllowance)
    - [MsgGrantAllowanceResponse](#cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse)
    - [MsgPruneAllowances](#cosmos-feegrant-v1beta1-MsgPruneAllowances)
    - [MsgPruneAllowancesResponse](#cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse)
    - [MsgRevokeAllowance](#cosmos-feegrant-v1beta1-MsgRevokeAllowance)
    - [MsgRevokeAllowanceResponse](#cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse)
  
    - [Msg](#cosmos-feegrant-v1beta1-Msg)
  
- [cosmos/genutil/module/v1/module.proto](#cosmos_genutil_module_v1_module-proto)
    - [Module](#cosmos-genutil-module-v1-Module)
  
- [cosmos/genutil/v1beta1/genesis.proto](#cosmos_genutil_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-genutil-v1beta1-GenesisState)
  
- [cosmos/gov/module/v1/module.proto](#cosmos_gov_module_v1_module-proto)
    - [Module](#cosmos-gov-module-v1-Module)
  
- [cosmos/gov/v1/gov.proto](#cosmos_gov_v1_gov-proto)
    - [Deposit](#cosmos-gov-v1-Deposit)
    - [DepositParams](#cosmos-gov-v1-DepositParams)
    - [Params](#cosmos-gov-v1-Params)
    - [Proposal](#cosmos-gov-v1-Proposal)
    - [TallyParams](#cosmos-gov-v1-TallyParams)
    - [TallyResult](#cosmos-gov-v1-TallyResult)
    - [Vote](#cosmos-gov-v1-Vote)
    - [VotingParams](#cosmos-gov-v1-VotingParams)
    - [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption)
  
    - [ProposalStatus](#cosmos-gov-v1-ProposalStatus)
    - [VoteOption](#cosmos-gov-v1-VoteOption)
  
- [cosmos/gov/v1/genesis.proto](#cosmos_gov_v1_genesis-proto)
    - [GenesisState](#cosmos-gov-v1-GenesisState)
  
- [cosmos/gov/v1/query.proto](#cosmos_gov_v1_query-proto)
    - [QueryConstitutionRequest](#cosmos-gov-v1-QueryConstitutionRequest)
    - [QueryConstitutionResponse](#cosmos-gov-v1-QueryConstitutionResponse)
    - [QueryDepositRequest](#cosmos-gov-v1-QueryDepositRequest)
    - [QueryDepositResponse](#cosmos-gov-v1-QueryDepositResponse)
    - [QueryDepositsRequest](#cosmos-gov-v1-QueryDepositsRequest)
    - [QueryDepositsResponse](#cosmos-gov-v1-QueryDepositsResponse)
    - [QueryParamsRequest](#cosmos-gov-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-gov-v1-QueryParamsResponse)
    - [QueryProposalRequest](#cosmos-gov-v1-QueryProposalRequest)
    - [QueryProposalResponse](#cosmos-gov-v1-QueryProposalResponse)
    - [QueryProposalsRequest](#cosmos-gov-v1-QueryProposalsRequest)
    - [QueryProposalsResponse](#cosmos-gov-v1-QueryProposalsResponse)
    - [QueryTallyResultRequest](#cosmos-gov-v1-QueryTallyResultRequest)
    - [QueryTallyResultResponse](#cosmos-gov-v1-QueryTallyResultResponse)
    - [QueryVoteRequest](#cosmos-gov-v1-QueryVoteRequest)
    - [QueryVoteResponse](#cosmos-gov-v1-QueryVoteResponse)
    - [QueryVotesRequest](#cosmos-gov-v1-QueryVotesRequest)
    - [QueryVotesResponse](#cosmos-gov-v1-QueryVotesResponse)
  
    - [Query](#cosmos-gov-v1-Query)
  
- [cosmos/gov/v1/tx.proto](#cosmos_gov_v1_tx-proto)
    - [MsgCancelProposal](#cosmos-gov-v1-MsgCancelProposal)
    - [MsgCancelProposalResponse](#cosmos-gov-v1-MsgCancelProposalResponse)
    - [MsgDeposit](#cosmos-gov-v1-MsgDeposit)
    - [MsgDepositResponse](#cosmos-gov-v1-MsgDepositResponse)
    - [MsgExecLegacyContent](#cosmos-gov-v1-MsgExecLegacyContent)
    - [MsgExecLegacyContentResponse](#cosmos-gov-v1-MsgExecLegacyContentResponse)
    - [MsgSubmitProposal](#cosmos-gov-v1-MsgSubmitProposal)
    - [MsgSubmitProposalResponse](#cosmos-gov-v1-MsgSubmitProposalResponse)
    - [MsgUpdateParams](#cosmos-gov-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-gov-v1-MsgUpdateParamsResponse)
    - [MsgVote](#cosmos-gov-v1-MsgVote)
    - [MsgVoteResponse](#cosmos-gov-v1-MsgVoteResponse)
    - [MsgVoteWeighted](#cosmos-gov-v1-MsgVoteWeighted)
    - [MsgVoteWeightedResponse](#cosmos-gov-v1-MsgVoteWeightedResponse)
  
    - [Msg](#cosmos-gov-v1-Msg)
  
- [cosmos/gov/v1beta1/gov.proto](#cosmos_gov_v1beta1_gov-proto)
    - [Deposit](#cosmos-gov-v1beta1-Deposit)
    - [DepositParams](#cosmos-gov-v1beta1-DepositParams)
    - [Proposal](#cosmos-gov-v1beta1-Proposal)
    - [TallyParams](#cosmos-gov-v1beta1-TallyParams)
    - [TallyResult](#cosmos-gov-v1beta1-TallyResult)
    - [TextProposal](#cosmos-gov-v1beta1-TextProposal)
    - [Vote](#cosmos-gov-v1beta1-Vote)
    - [VotingParams](#cosmos-gov-v1beta1-VotingParams)
    - [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption)
  
    - [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus)
    - [VoteOption](#cosmos-gov-v1beta1-VoteOption)
  
- [cosmos/gov/v1beta1/genesis.proto](#cosmos_gov_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-gov-v1beta1-GenesisState)
  
- [cosmos/gov/v1beta1/query.proto](#cosmos_gov_v1beta1_query-proto)
    - [QueryDepositRequest](#cosmos-gov-v1beta1-QueryDepositRequest)
    - [QueryDepositResponse](#cosmos-gov-v1beta1-QueryDepositResponse)
    - [QueryDepositsRequest](#cosmos-gov-v1beta1-QueryDepositsRequest)
    - [QueryDepositsResponse](#cosmos-gov-v1beta1-QueryDepositsResponse)
    - [QueryParamsRequest](#cosmos-gov-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-gov-v1beta1-QueryParamsResponse)
    - [QueryProposalRequest](#cosmos-gov-v1beta1-QueryProposalRequest)
    - [QueryProposalResponse](#cosmos-gov-v1beta1-QueryProposalResponse)
    - [QueryProposalsRequest](#cosmos-gov-v1beta1-QueryProposalsRequest)
    - [QueryProposalsResponse](#cosmos-gov-v1beta1-QueryProposalsResponse)
    - [QueryTallyResultRequest](#cosmos-gov-v1beta1-QueryTallyResultRequest)
    - [QueryTallyResultResponse](#cosmos-gov-v1beta1-QueryTallyResultResponse)
    - [QueryVoteRequest](#cosmos-gov-v1beta1-QueryVoteRequest)
    - [QueryVoteResponse](#cosmos-gov-v1beta1-QueryVoteResponse)
    - [QueryVotesRequest](#cosmos-gov-v1beta1-QueryVotesRequest)
    - [QueryVotesResponse](#cosmos-gov-v1beta1-QueryVotesResponse)
  
    - [Query](#cosmos-gov-v1beta1-Query)
  
- [cosmos/gov/v1beta1/tx.proto](#cosmos_gov_v1beta1_tx-proto)
    - [MsgDeposit](#cosmos-gov-v1beta1-MsgDeposit)
    - [MsgDepositResponse](#cosmos-gov-v1beta1-MsgDepositResponse)
    - [MsgSubmitProposal](#cosmos-gov-v1beta1-MsgSubmitProposal)
    - [MsgSubmitProposalResponse](#cosmos-gov-v1beta1-MsgSubmitProposalResponse)
    - [MsgVote](#cosmos-gov-v1beta1-MsgVote)
    - [MsgVoteResponse](#cosmos-gov-v1beta1-MsgVoteResponse)
    - [MsgVoteWeighted](#cosmos-gov-v1beta1-MsgVoteWeighted)
    - [MsgVoteWeightedResponse](#cosmos-gov-v1beta1-MsgVoteWeightedResponse)
  
    - [Msg](#cosmos-gov-v1beta1-Msg)
  
- [cosmos/mint/module/v1/module.proto](#cosmos_mint_module_v1_module-proto)
    - [Module](#cosmos-mint-module-v1-Module)
  
- [cosmos/mint/v1beta1/mint.proto](#cosmos_mint_v1beta1_mint-proto)
    - [Minter](#cosmos-mint-v1beta1-Minter)
    - [Params](#cosmos-mint-v1beta1-Params)
  
- [cosmos/mint/v1beta1/genesis.proto](#cosmos_mint_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-mint-v1beta1-GenesisState)
  
- [cosmos/mint/v1beta1/query.proto](#cosmos_mint_v1beta1_query-proto)
    - [QueryAnnualProvisionsRequest](#cosmos-mint-v1beta1-QueryAnnualProvisionsRequest)
    - [QueryAnnualProvisionsResponse](#cosmos-mint-v1beta1-QueryAnnualProvisionsResponse)
    - [QueryInflationRequest](#cosmos-mint-v1beta1-QueryInflationRequest)
    - [QueryInflationResponse](#cosmos-mint-v1beta1-QueryInflationResponse)
    - [QueryParamsRequest](#cosmos-mint-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-mint-v1beta1-QueryParamsResponse)
  
    - [Query](#cosmos-mint-v1beta1-Query)
  
- [cosmos/mint/v1beta1/tx.proto](#cosmos_mint_v1beta1_tx-proto)
    - [MsgUpdateParams](#cosmos-mint-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-mint-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-mint-v1beta1-Msg)
  
- [cosmos/reflection/v1/reflection.proto](#cosmos_reflection_v1_reflection-proto)
    - [FileDescriptorsRequest](#cosmos-reflection-v1-FileDescriptorsRequest)
    - [FileDescriptorsResponse](#cosmos-reflection-v1-FileDescriptorsResponse)
  
    - [ReflectionService](#cosmos-reflection-v1-ReflectionService)
  
- [cosmos/slashing/module/v1/module.proto](#cosmos_slashing_module_v1_module-proto)
    - [Module](#cosmos-slashing-module-v1-Module)
  
- [cosmos/slashing/v1beta1/slashing.proto](#cosmos_slashing_v1beta1_slashing-proto)
    - [Params](#cosmos-slashing-v1beta1-Params)
    - [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo)
  
- [cosmos/slashing/v1beta1/genesis.proto](#cosmos_slashing_v1beta1_genesis-proto)
    - [GenesisState](#cosmos-slashing-v1beta1-GenesisState)
    - [MissedBlock](#cosmos-slashing-v1beta1-MissedBlock)
    - [SigningInfo](#cosmos-slashing-v1beta1-SigningInfo)
    - [ValidatorMissedBlocks](#cosmos-slashing-v1beta1-ValidatorMissedBlocks)
  
- [cosmos/slashing/v1beta1/query.proto](#cosmos_slashing_v1beta1_query-proto)
    - [QueryParamsRequest](#cosmos-slashing-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-slashing-v1beta1-QueryParamsResponse)
    - [QuerySigningInfoRequest](#cosmos-slashing-v1beta1-QuerySigningInfoRequest)
    - [QuerySigningInfoResponse](#cosmos-slashing-v1beta1-QuerySigningInfoResponse)
    - [QuerySigningInfosRequest](#cosmos-slashing-v1beta1-QuerySigningInfosRequest)
    - [QuerySigningInfosResponse](#cosmos-slashing-v1beta1-QuerySigningInfosResponse)
  
    - [Query](#cosmos-slashing-v1beta1-Query)
  
- [cosmos/slashing/v1beta1/tx.proto](#cosmos_slashing_v1beta1_tx-proto)
    - [MsgUnjail](#cosmos-slashing-v1beta1-MsgUnjail)
    - [MsgUnjailResponse](#cosmos-slashing-v1beta1-MsgUnjailResponse)
    - [MsgUpdateParams](#cosmos-slashing-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-slashing-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-slashing-v1beta1-Msg)
  
- [cosmos/staking/module/v1/module.proto](#cosmos_staking_module_v1_module-proto)
    - [Module](#cosmos-staking-module-v1-Module)
  
- [cosmos/staking/v1beta1/authz.proto](#cosmos_staking_v1beta1_authz-proto)
    - [StakeAuthorization](#cosmos-staking-v1beta1-StakeAuthorization)
    - [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators)
  
    - [AuthorizationType](#cosmos-staking-v1beta1-AuthorizationType)
  
- [cosmos/staking/v1beta1/staking.proto](#cosmos_staking_v1beta1_staking-proto)
    - [Commission](#cosmos-staking-v1beta1-Commission)
    - [CommissionRates](#cosmos-staking-v1beta1-CommissionRates)
    - [ConsKeyEvidenceExpiry](#cosmos-staking-v1beta1-ConsKeyEvidenceExpiry)
    - [DVPair](#cosmos-staking-v1beta1-DVPair)
    - [DVPairs](#cosmos-staking-v1beta1-DVPairs)
    - [DVVTriplet](#cosmos-staking-v1beta1-DVVTriplet)
    - [DVVTriplets](#cosmos-staking-v1beta1-DVVTriplets)
    - [Delegation](#cosmos-staking-v1beta1-Delegation)
    - [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse)
    - [Description](#cosmos-staking-v1beta1-Description)
    - [HistoricalInfo](#cosmos-staking-v1beta1-HistoricalInfo)
    - [Params](#cosmos-staking-v1beta1-Params)
    - [Pool](#cosmos-staking-v1beta1-Pool)
    - [Redelegation](#cosmos-staking-v1beta1-Redelegation)
    - [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry)
    - [RedelegationEntryResponse](#cosmos-staking-v1beta1-RedelegationEntryResponse)
    - [RedelegationResponse](#cosmos-staking-v1beta1-RedelegationResponse)
    - [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation)
    - [UnbondingDelegationEntry](#cosmos-staking-v1beta1-UnbondingDelegationEntry)
    - [ValAddresses](#cosmos-staking-v1beta1-ValAddresses)
    - [Validator](#cosmos-staking-v1beta1-Validator)
    - [ValidatorUpdates](#cosmos-staking-v1beta1-ValidatorUpdates)
  
    - [BondStatus](#cosmos-staking-v1beta1-BondStatus)
    - [Infraction](#cosmos-staking-v1beta1-Infraction)
  
- [cosmos/staking/v1beta1/genesis.proto](#cosmos_staking_v1beta1_genesis-proto)
    - [ConsensusKeyRotationHistory](#cosmos-staking-v1beta1-ConsensusKeyRotationHistory)
    - [GenesisState](#cosmos-staking-v1beta1-GenesisState)
    - [LastValidatorPower](#cosmos-staking-v1beta1-LastValidatorPower)
    - [PendingConsensusKeyRotation](#cosmos-staking-v1beta1-PendingConsensusKeyRotation)
  
- [cosmos/staking/v1beta1/query.proto](#cosmos_staking_v1beta1_query-proto)
    - [QueryDelegationRequest](#cosmos-staking-v1beta1-QueryDelegationRequest)
    - [QueryDelegationResponse](#cosmos-staking-v1beta1-QueryDelegationResponse)
    - [QueryDelegatorDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest)
    - [QueryDelegatorDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse)
    - [QueryDelegatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest)
    - [QueryDelegatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse)
    - [QueryDelegatorValidatorRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorRequest)
    - [QueryDelegatorValidatorResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorResponse)
    - [QueryDelegatorValidatorsRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest)
    - [QueryDelegatorValidatorsResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse)
    - [QueryHistoricalInfoRequest](#cosmos-staking-v1beta1-QueryHistoricalInfoRequest)
    - [QueryHistoricalInfoResponse](#cosmos-staking-v1beta1-QueryHistoricalInfoResponse)
    - [QueryParamsRequest](#cosmos-staking-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmos-staking-v1beta1-QueryParamsResponse)
    - [QueryPoolRequest](#cosmos-staking-v1beta1-QueryPoolRequest)
    - [QueryPoolResponse](#cosmos-staking-v1beta1-QueryPoolResponse)
    - [QueryRedelegationsRequest](#cosmos-staking-v1beta1-QueryRedelegationsRequest)
    - [QueryRedelegationsResponse](#cosmos-staking-v1beta1-QueryRedelegationsResponse)
    - [QueryUnbondingDelegationRequest](#cosmos-staking-v1beta1-QueryUnbondingDelegationRequest)
    - [QueryUnbondingDelegationResponse](#cosmos-staking-v1beta1-QueryUnbondingDelegationResponse)
    - [QueryValidatorDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorDelegationsRequest)
    - [QueryValidatorDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorDelegationsResponse)
    - [QueryValidatorRequest](#cosmos-staking-v1beta1-QueryValidatorRequest)
    - [QueryValidatorResponse](#cosmos-staking-v1beta1-QueryValidatorResponse)
    - [QueryValidatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest)
    - [QueryValidatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse)
    - [QueryValidatorsRequest](#cosmos-staking-v1beta1-QueryValidatorsRequest)
    - [QueryValidatorsResponse](#cosmos-staking-v1beta1-QueryValidatorsResponse)
  
    - [Query](#cosmos-staking-v1beta1-Query)
  
- [cosmos/staking/v1beta1/tx.proto](#cosmos_staking_v1beta1_tx-proto)
    - [MsgBeginRedelegate](#cosmos-staking-v1beta1-MsgBeginRedelegate)
    - [MsgBeginRedelegateResponse](#cosmos-staking-v1beta1-MsgBeginRedelegateResponse)
    - [MsgCancelUnbondingDelegation](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegation)
    - [MsgCancelUnbondingDelegationResponse](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse)
    - [MsgCreateValidator](#cosmos-staking-v1beta1-MsgCreateValidator)
    - [MsgCreateValidatorResponse](#cosmos-staking-v1beta1-MsgCreateValidatorResponse)
    - [MsgDelegate](#cosmos-staking-v1beta1-MsgDelegate)
    - [MsgDelegateResponse](#cosmos-staking-v1beta1-MsgDelegateResponse)
    - [MsgEditValidator](#cosmos-staking-v1beta1-MsgEditValidator)
    - [MsgEditValidatorResponse](#cosmos-staking-v1beta1-MsgEditValidatorResponse)
    - [MsgRotateConsPubKey](#cosmos-staking-v1beta1-MsgRotateConsPubKey)
    - [MsgRotateConsPubKeyResponse](#cosmos-staking-v1beta1-MsgRotateConsPubKeyResponse)
    - [MsgUndelegate](#cosmos-staking-v1beta1-MsgUndelegate)
    - [MsgUndelegateResponse](#cosmos-staking-v1beta1-MsgUndelegateResponse)
    - [MsgUpdateParams](#cosmos-staking-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmos-staking-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmos-staking-v1beta1-Msg)
  
- [cosmos/store/internal/kv/v1beta1/kv.proto](#cosmos_store_internal_kv_v1beta1_kv-proto)
    - [Pair](#cosmos-store-internal-kv-v1beta1-Pair)
    - [Pairs](#cosmos-store-internal-kv-v1beta1-Pairs)
  
- [cosmos/store/snapshots/v1/snapshot.proto](#cosmos_store_snapshots_v1_snapshot-proto)
    - [Metadata](#cosmos-store-snapshots-v1-Metadata)
    - [Snapshot](#cosmos-store-snapshots-v1-Snapshot)
    - [SnapshotExtensionMeta](#cosmos-store-snapshots-v1-SnapshotExtensionMeta)
    - [SnapshotExtensionPayload](#cosmos-store-snapshots-v1-SnapshotExtensionPayload)
    - [SnapshotIAVLItem](#cosmos-store-snapshots-v1-SnapshotIAVLItem)
    - [SnapshotItem](#cosmos-store-snapshots-v1-SnapshotItem)
    - [SnapshotStoreItem](#cosmos-store-snapshots-v1-SnapshotStoreItem)
  
- [cosmos/store/v1beta1/listening.proto](#cosmos_store_v1beta1_listening-proto)
    - [BlockMetadata](#cosmos-store-v1beta1-BlockMetadata)
    - [StoreKVPair](#cosmos-store-v1beta1-StoreKVPair)
  
- [cosmos/store/streaming/abci/grpc.proto](#cosmos_store_streaming_abci_grpc-proto)
    - [ListenCommitRequest](#cosmos-store-streaming-abci-ListenCommitRequest)
    - [ListenCommitResponse](#cosmos-store-streaming-abci-ListenCommitResponse)
    - [ListenFinalizeBlockRequest](#cosmos-store-streaming-abci-ListenFinalizeBlockRequest)
    - [ListenFinalizeBlockResponse](#cosmos-store-streaming-abci-ListenFinalizeBlockResponse)
  
    - [ABCIListenerService](#cosmos-store-streaming-abci-ABCIListenerService)
  
- [cosmos/store/v1beta1/commit_info.proto](#cosmos_store_v1beta1_commit_info-proto)
    - [CommitID](#cosmos-store-v1beta1-CommitID)
    - [CommitInfo](#cosmos-store-v1beta1-CommitInfo)
    - [StoreInfo](#cosmos-store-v1beta1-StoreInfo)
  
- [cosmos/tx/config/v1/config.proto](#cosmos_tx_config_v1_config-proto)
    - [Config](#cosmos-tx-config-v1-Config)
  
- [cosmos/tx/signing/v1beta1/signing.proto](#cosmos_tx_signing_v1beta1_signing-proto)
    - [SignatureDescriptor](#cosmos-tx-signing-v1beta1-SignatureDescriptor)
    - [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data)
    - [SignatureDescriptor.Data.Multi](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi)
    - [SignatureDescriptor.Data.Single](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single)
    - [SignatureDescriptors](#cosmos-tx-signing-v1beta1-SignatureDescriptors)
  
    - [SignMode](#cosmos-tx-signing-v1beta1-SignMode)
  
- [cosmos/tx/v1beta1/tx.proto](#cosmos_tx_v1beta1_tx-proto)
    - [AuthInfo](#cosmos-tx-v1beta1-AuthInfo)
    - [AuxSignerData](#cosmos-tx-v1beta1-AuxSignerData)
    - [Fee](#cosmos-tx-v1beta1-Fee)
    - [ModeInfo](#cosmos-tx-v1beta1-ModeInfo)
    - [ModeInfo.Multi](#cosmos-tx-v1beta1-ModeInfo-Multi)
    - [ModeInfo.Single](#cosmos-tx-v1beta1-ModeInfo-Single)
    - [SignDoc](#cosmos-tx-v1beta1-SignDoc)
    - [SignDocDirectAux](#cosmos-tx-v1beta1-SignDocDirectAux)
    - [SignerInfo](#cosmos-tx-v1beta1-SignerInfo)
    - [Tip](#cosmos-tx-v1beta1-Tip)
    - [Tx](#cosmos-tx-v1beta1-Tx)
    - [TxBody](#cosmos-tx-v1beta1-TxBody)
    - [TxRaw](#cosmos-tx-v1beta1-TxRaw)
  
- [cosmos/tx/v1beta1/service.proto](#cosmos_tx_v1beta1_service-proto)
    - [BroadcastTxRequest](#cosmos-tx-v1beta1-BroadcastTxRequest)
    - [BroadcastTxResponse](#cosmos-tx-v1beta1-BroadcastTxResponse)
    - [GetBlockWithTxsRequest](#cosmos-tx-v1beta1-GetBlockWithTxsRequest)
    - [GetBlockWithTxsResponse](#cosmos-tx-v1beta1-GetBlockWithTxsResponse)
    - [GetTxRequest](#cosmos-tx-v1beta1-GetTxRequest)
    - [GetTxResponse](#cosmos-tx-v1beta1-GetTxResponse)
    - [GetTxsEventRequest](#cosmos-tx-v1beta1-GetTxsEventRequest)
    - [GetTxsEventResponse](#cosmos-tx-v1beta1-GetTxsEventResponse)
    - [SimulateRequest](#cosmos-tx-v1beta1-SimulateRequest)
    - [SimulateResponse](#cosmos-tx-v1beta1-SimulateResponse)
    - [TxDecodeAminoRequest](#cosmos-tx-v1beta1-TxDecodeAminoRequest)
    - [TxDecodeAminoResponse](#cosmos-tx-v1beta1-TxDecodeAminoResponse)
    - [TxDecodeRequest](#cosmos-tx-v1beta1-TxDecodeRequest)
    - [TxDecodeResponse](#cosmos-tx-v1beta1-TxDecodeResponse)
    - [TxEncodeAminoRequest](#cosmos-tx-v1beta1-TxEncodeAminoRequest)
    - [TxEncodeAminoResponse](#cosmos-tx-v1beta1-TxEncodeAminoResponse)
    - [TxEncodeRequest](#cosmos-tx-v1beta1-TxEncodeRequest)
    - [TxEncodeResponse](#cosmos-tx-v1beta1-TxEncodeResponse)
  
    - [BroadcastMode](#cosmos-tx-v1beta1-BroadcastMode)
    - [OrderBy](#cosmos-tx-v1beta1-OrderBy)
  
    - [Service](#cosmos-tx-v1beta1-Service)
  
- [cosmos/upgrade/module/v1/module.proto](#cosmos_upgrade_module_v1_module-proto)
    - [Module](#cosmos-upgrade-module-v1-Module)
  
- [cosmos/upgrade/v1beta1/upgrade.proto](#cosmos_upgrade_v1beta1_upgrade-proto)
    - [CancelSoftwareUpgradeProposal](#cosmos-upgrade-v1beta1-CancelSoftwareUpgradeProposal)
    - [ModuleVersion](#cosmos-upgrade-v1beta1-ModuleVersion)
    - [Plan](#cosmos-upgrade-v1beta1-Plan)
    - [SoftwareUpgradeProposal](#cosmos-upgrade-v1beta1-SoftwareUpgradeProposal)
  
- [cosmos/upgrade/v1beta1/query.proto](#cosmos_upgrade_v1beta1_query-proto)
    - [QueryAppliedPlanRequest](#cosmos-upgrade-v1beta1-QueryAppliedPlanRequest)
    - [QueryAppliedPlanResponse](#cosmos-upgrade-v1beta1-QueryAppliedPlanResponse)
    - [QueryAuthorityRequest](#cosmos-upgrade-v1beta1-QueryAuthorityRequest)
    - [QueryAuthorityResponse](#cosmos-upgrade-v1beta1-QueryAuthorityResponse)
    - [QueryCurrentPlanRequest](#cosmos-upgrade-v1beta1-QueryCurrentPlanRequest)
    - [QueryCurrentPlanResponse](#cosmos-upgrade-v1beta1-QueryCurrentPlanResponse)
    - [QueryModuleVersionsRequest](#cosmos-upgrade-v1beta1-QueryModuleVersionsRequest)
    - [QueryModuleVersionsResponse](#cosmos-upgrade-v1beta1-QueryModuleVersionsResponse)
    - [QueryUpgradedConsensusStateRequest](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest)
    - [QueryUpgradedConsensusStateResponse](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse)
  
    - [Query](#cosmos-upgrade-v1beta1-Query)
  
- [cosmos/upgrade/v1beta1/tx.proto](#cosmos_upgrade_v1beta1_tx-proto)
    - [MsgCancelUpgrade](#cosmos-upgrade-v1beta1-MsgCancelUpgrade)
    - [MsgCancelUpgradeResponse](#cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse)
    - [MsgSoftwareUpgrade](#cosmos-upgrade-v1beta1-MsgSoftwareUpgrade)
    - [MsgSoftwareUpgradeResponse](#cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse)
  
    - [Msg](#cosmos-upgrade-v1beta1-Msg)
  
- [cosmos/vesting/module/v1/module.proto](#cosmos_vesting_module_v1_module-proto)
    - [Module](#cosmos-vesting-module-v1-Module)
  
- [cosmos/vesting/v1beta1/vesting.proto](#cosmos_vesting_v1beta1_vesting-proto)
    - [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount)
    - [ContinuousVestingAccount](#cosmos-vesting-v1beta1-ContinuousVestingAccount)
    - [DelayedVestingAccount](#cosmos-vesting-v1beta1-DelayedVestingAccount)
    - [Period](#cosmos-vesting-v1beta1-Period)
    - [PeriodicVestingAccount](#cosmos-vesting-v1beta1-PeriodicVestingAccount)
    - [PermanentLockedAccount](#cosmos-vesting-v1beta1-PermanentLockedAccount)
  
- [cosmos/vesting/v1beta1/tx.proto](#cosmos_vesting_v1beta1_tx-proto)
    - [MsgCreatePeriodicVestingAccount](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount)
    - [MsgCreatePeriodicVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse)
    - [MsgCreatePermanentLockedAccount](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount)
    - [MsgCreatePermanentLockedAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse)
    - [MsgCreateVestingAccount](#cosmos-vesting-v1beta1-MsgCreateVestingAccount)
    - [MsgCreateVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse)
  
    - [Msg](#cosmos-vesting-v1beta1-Msg)
  
- [cosmwasm/wasm/v1/types.proto](#cosmwasm_wasm_v1_types-proto)
    - [AbsoluteTxPosition](#cosmwasm-wasm-v1-AbsoluteTxPosition)
    - [AccessConfig](#cosmwasm-wasm-v1-AccessConfig)
    - [AccessTypeParam](#cosmwasm-wasm-v1-AccessTypeParam)
    - [CodeInfo](#cosmwasm-wasm-v1-CodeInfo)
    - [ContractCodeHistoryEntry](#cosmwasm-wasm-v1-ContractCodeHistoryEntry)
    - [ContractInfo](#cosmwasm-wasm-v1-ContractInfo)
    - [Model](#cosmwasm-wasm-v1-Model)
    - [Params](#cosmwasm-wasm-v1-Params)
  
    - [AccessType](#cosmwasm-wasm-v1-AccessType)
    - [ContractCodeHistoryOperationType](#cosmwasm-wasm-v1-ContractCodeHistoryOperationType)
  
- [cosmwasm/wasm/v1/authz.proto](#cosmwasm_wasm_v1_authz-proto)
    - [AcceptedMessageKeysFilter](#cosmwasm-wasm-v1-AcceptedMessageKeysFilter)
    - [AcceptedMessagesFilter](#cosmwasm-wasm-v1-AcceptedMessagesFilter)
    - [AllowAllMessagesFilter](#cosmwasm-wasm-v1-AllowAllMessagesFilter)
    - [CodeGrant](#cosmwasm-wasm-v1-CodeGrant)
    - [CombinedLimit](#cosmwasm-wasm-v1-CombinedLimit)
    - [ContractExecutionAuthorization](#cosmwasm-wasm-v1-ContractExecutionAuthorization)
    - [ContractGrant](#cosmwasm-wasm-v1-ContractGrant)
    - [ContractMigrationAuthorization](#cosmwasm-wasm-v1-ContractMigrationAuthorization)
    - [MaxCallsLimit](#cosmwasm-wasm-v1-MaxCallsLimit)
    - [MaxFundsLimit](#cosmwasm-wasm-v1-MaxFundsLimit)
    - [StoreCodeAuthorization](#cosmwasm-wasm-v1-StoreCodeAuthorization)
  
- [cosmwasm/wasm/v1/genesis.proto](#cosmwasm_wasm_v1_genesis-proto)
    - [Code](#cosmwasm-wasm-v1-Code)
    - [Contract](#cosmwasm-wasm-v1-Contract)
    - [GenesisState](#cosmwasm-wasm-v1-GenesisState)
    - [Sequence](#cosmwasm-wasm-v1-Sequence)
  
- [cosmwasm/wasm/v1/ibc.proto](#cosmwasm_wasm_v1_ibc-proto)
    - [MsgIBCCloseChannel](#cosmwasm-wasm-v1-MsgIBCCloseChannel)
    - [MsgIBCSend](#cosmwasm-wasm-v1-MsgIBCSend)
    - [MsgIBCSendResponse](#cosmwasm-wasm-v1-MsgIBCSendResponse)
    - [MsgIBCWriteAcknowledgementResponse](#cosmwasm-wasm-v1-MsgIBCWriteAcknowledgementResponse)
  
- [cosmwasm/wasm/v1/proposal_legacy.proto](#cosmwasm_wasm_v1_proposal_legacy-proto)
    - [AccessConfigUpdate](#cosmwasm-wasm-v1-AccessConfigUpdate)
    - [ClearAdminProposal](#cosmwasm-wasm-v1-ClearAdminProposal)
    - [ExecuteContractProposal](#cosmwasm-wasm-v1-ExecuteContractProposal)
    - [InstantiateContract2Proposal](#cosmwasm-wasm-v1-InstantiateContract2Proposal)
    - [InstantiateContractProposal](#cosmwasm-wasm-v1-InstantiateContractProposal)
    - [MigrateContractProposal](#cosmwasm-wasm-v1-MigrateContractProposal)
    - [PinCodesProposal](#cosmwasm-wasm-v1-PinCodesProposal)
    - [StoreAndInstantiateContractProposal](#cosmwasm-wasm-v1-StoreAndInstantiateContractProposal)
    - [StoreCodeProposal](#cosmwasm-wasm-v1-StoreCodeProposal)
    - [SudoContractProposal](#cosmwasm-wasm-v1-SudoContractProposal)
    - [UnpinCodesProposal](#cosmwasm-wasm-v1-UnpinCodesProposal)
    - [UpdateAdminProposal](#cosmwasm-wasm-v1-UpdateAdminProposal)
    - [UpdateInstantiateConfigProposal](#cosmwasm-wasm-v1-UpdateInstantiateConfigProposal)
  
- [cosmwasm/wasm/v1/query.proto](#cosmwasm_wasm_v1_query-proto)
    - [CodeInfoResponse](#cosmwasm-wasm-v1-CodeInfoResponse)
    - [QueryAllContractStateRequest](#cosmwasm-wasm-v1-QueryAllContractStateRequest)
    - [QueryAllContractStateResponse](#cosmwasm-wasm-v1-QueryAllContractStateResponse)
    - [QueryBuildAddressRequest](#cosmwasm-wasm-v1-QueryBuildAddressRequest)
    - [QueryBuildAddressResponse](#cosmwasm-wasm-v1-QueryBuildAddressResponse)
    - [QueryCodeInfoRequest](#cosmwasm-wasm-v1-QueryCodeInfoRequest)
    - [QueryCodeInfoResponse](#cosmwasm-wasm-v1-QueryCodeInfoResponse)
    - [QueryCodeRequest](#cosmwasm-wasm-v1-QueryCodeRequest)
    - [QueryCodeResponse](#cosmwasm-wasm-v1-QueryCodeResponse)
    - [QueryCodesRequest](#cosmwasm-wasm-v1-QueryCodesRequest)
    - [QueryCodesResponse](#cosmwasm-wasm-v1-QueryCodesResponse)
    - [QueryContractHistoryRequest](#cosmwasm-wasm-v1-QueryContractHistoryRequest)
    - [QueryContractHistoryResponse](#cosmwasm-wasm-v1-QueryContractHistoryResponse)
    - [QueryContractInfoRequest](#cosmwasm-wasm-v1-QueryContractInfoRequest)
    - [QueryContractInfoResponse](#cosmwasm-wasm-v1-QueryContractInfoResponse)
    - [QueryContractsByCodeRequest](#cosmwasm-wasm-v1-QueryContractsByCodeRequest)
    - [QueryContractsByCodeResponse](#cosmwasm-wasm-v1-QueryContractsByCodeResponse)
    - [QueryContractsByCreatorRequest](#cosmwasm-wasm-v1-QueryContractsByCreatorRequest)
    - [QueryContractsByCreatorResponse](#cosmwasm-wasm-v1-QueryContractsByCreatorResponse)
    - [QueryParamsRequest](#cosmwasm-wasm-v1-QueryParamsRequest)
    - [QueryParamsResponse](#cosmwasm-wasm-v1-QueryParamsResponse)
    - [QueryPinnedCodesRequest](#cosmwasm-wasm-v1-QueryPinnedCodesRequest)
    - [QueryPinnedCodesResponse](#cosmwasm-wasm-v1-QueryPinnedCodesResponse)
    - [QueryRawContractStateRequest](#cosmwasm-wasm-v1-QueryRawContractStateRequest)
    - [QueryRawContractStateResponse](#cosmwasm-wasm-v1-QueryRawContractStateResponse)
    - [QuerySmartContractStateRequest](#cosmwasm-wasm-v1-QuerySmartContractStateRequest)
    - [QuerySmartContractStateResponse](#cosmwasm-wasm-v1-QuerySmartContractStateResponse)
    - [QueryWasmLimitsConfigRequest](#cosmwasm-wasm-v1-QueryWasmLimitsConfigRequest)
    - [QueryWasmLimitsConfigResponse](#cosmwasm-wasm-v1-QueryWasmLimitsConfigResponse)
  
    - [Query](#cosmwasm-wasm-v1-Query)
  
- [cosmwasm/wasm/v1/tx.proto](#cosmwasm_wasm_v1_tx-proto)
    - [MsgAddCodeUploadParamsAddresses](#cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddresses)
    - [MsgAddCodeUploadParamsAddressesResponse](#cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddressesResponse)
    - [MsgClearAdmin](#cosmwasm-wasm-v1-MsgClearAdmin)
    - [MsgClearAdminResponse](#cosmwasm-wasm-v1-MsgClearAdminResponse)
    - [MsgExecuteContract](#cosmwasm-wasm-v1-MsgExecuteContract)
    - [MsgExecuteContractResponse](#cosmwasm-wasm-v1-MsgExecuteContractResponse)
    - [MsgInstantiateContract](#cosmwasm-wasm-v1-MsgInstantiateContract)
    - [MsgInstantiateContract2](#cosmwasm-wasm-v1-MsgInstantiateContract2)
    - [MsgInstantiateContract2Response](#cosmwasm-wasm-v1-MsgInstantiateContract2Response)
    - [MsgInstantiateContractResponse](#cosmwasm-wasm-v1-MsgInstantiateContractResponse)
    - [MsgMigrateContract](#cosmwasm-wasm-v1-MsgMigrateContract)
    - [MsgMigrateContractResponse](#cosmwasm-wasm-v1-MsgMigrateContractResponse)
    - [MsgPinCodes](#cosmwasm-wasm-v1-MsgPinCodes)
    - [MsgPinCodesResponse](#cosmwasm-wasm-v1-MsgPinCodesResponse)
    - [MsgRemoveCodeUploadParamsAddresses](#cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddresses)
    - [MsgRemoveCodeUploadParamsAddressesResponse](#cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddressesResponse)
    - [MsgStoreAndInstantiateContract](#cosmwasm-wasm-v1-MsgStoreAndInstantiateContract)
    - [MsgStoreAndInstantiateContractResponse](#cosmwasm-wasm-v1-MsgStoreAndInstantiateContractResponse)
    - [MsgStoreAndMigrateContract](#cosmwasm-wasm-v1-MsgStoreAndMigrateContract)
    - [MsgStoreAndMigrateContractResponse](#cosmwasm-wasm-v1-MsgStoreAndMigrateContractResponse)
    - [MsgStoreCode](#cosmwasm-wasm-v1-MsgStoreCode)
    - [MsgStoreCodeResponse](#cosmwasm-wasm-v1-MsgStoreCodeResponse)
    - [MsgSudoContract](#cosmwasm-wasm-v1-MsgSudoContract)
    - [MsgSudoContractResponse](#cosmwasm-wasm-v1-MsgSudoContractResponse)
    - [MsgUnpinCodes](#cosmwasm-wasm-v1-MsgUnpinCodes)
    - [MsgUnpinCodesResponse](#cosmwasm-wasm-v1-MsgUnpinCodesResponse)
    - [MsgUpdateAdmin](#cosmwasm-wasm-v1-MsgUpdateAdmin)
    - [MsgUpdateAdminResponse](#cosmwasm-wasm-v1-MsgUpdateAdminResponse)
    - [MsgUpdateContractLabel](#cosmwasm-wasm-v1-MsgUpdateContractLabel)
    - [MsgUpdateContractLabelResponse](#cosmwasm-wasm-v1-MsgUpdateContractLabelResponse)
    - [MsgUpdateInstantiateConfig](#cosmwasm-wasm-v1-MsgUpdateInstantiateConfig)
    - [MsgUpdateInstantiateConfigResponse](#cosmwasm-wasm-v1-MsgUpdateInstantiateConfigResponse)
    - [MsgUpdateParams](#cosmwasm-wasm-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#cosmwasm-wasm-v1-MsgUpdateParamsResponse)
  
    - [Msg](#cosmwasm-wasm-v1-Msg)
  
- [ibc/applications/gmp/v1/account.proto](#ibc_applications_gmp_v1_account-proto)
    - [AccountIdentifier](#ibc-applications-gmp-v1-AccountIdentifier)
    - [CosmosTx](#ibc-applications-gmp-v1-CosmosTx)
    - [ICS27Account](#ibc-applications-gmp-v1-ICS27Account)
  
- [ibc/applications/gmp/v1/genesis.proto](#ibc_applications_gmp_v1_genesis-proto)
    - [GenesisState](#ibc-applications-gmp-v1-GenesisState)
    - [RegisteredICS27Account](#ibc-applications-gmp-v1-RegisteredICS27Account)
  
- [ibc/applications/gmp/v1/packet.proto](#ibc_applications_gmp_v1_packet-proto)
    - [Acknowledgement](#ibc-applications-gmp-v1-Acknowledgement)
    - [GMPPacketData](#ibc-applications-gmp-v1-GMPPacketData)
  
- [ibc/applications/gmp/v1/query.proto](#ibc_applications_gmp_v1_query-proto)
    - [QueryAccountAddressRequest](#ibc-applications-gmp-v1-QueryAccountAddressRequest)
    - [QueryAccountAddressResponse](#ibc-applications-gmp-v1-QueryAccountAddressResponse)
    - [QueryAccountIdentifierRequest](#ibc-applications-gmp-v1-QueryAccountIdentifierRequest)
    - [QueryAccountIdentifierResponse](#ibc-applications-gmp-v1-QueryAccountIdentifierResponse)
  
    - [Query](#ibc-applications-gmp-v1-Query)
  
- [ibc/applications/gmp/v1/tx.proto](#ibc_applications_gmp_v1_tx-proto)
    - [MsgSendCall](#ibc-applications-gmp-v1-MsgSendCall)
    - [MsgSendCallResponse](#ibc-applications-gmp-v1-MsgSendCallResponse)
  
    - [Msg](#ibc-applications-gmp-v1-Msg)
  
- [ibc/applications/interchain_accounts/controller/v1/controller.proto](#ibc_applications_interchain_accounts_controller_v1_controller-proto)
    - [Params](#ibc-applications-interchain_accounts-controller-v1-Params)
  
- [ibc/applications/interchain_accounts/controller/v1/query.proto](#ibc_applications_interchain_accounts_controller_v1_query-proto)
    - [QueryInterchainAccountRequest](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest)
    - [QueryInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse)
    - [QueryParamsRequest](#ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse)
  
    - [Query](#ibc-applications-interchain_accounts-controller-v1-Query)
  
- [ibc/applications/interchain_accounts/v1/packet.proto](#ibc_applications_interchain_accounts_v1_packet-proto)
    - [CosmosTx](#ibc-applications-interchain_accounts-v1-CosmosTx)
    - [InterchainAccountPacketData](#ibc-applications-interchain_accounts-v1-InterchainAccountPacketData)
  
    - [Type](#ibc-applications-interchain_accounts-v1-Type)
  
- [ibc/core/client/v1/client.proto](#ibc_core_client_v1_client-proto)
    - [ClientConsensusStates](#ibc-core-client-v1-ClientConsensusStates)
    - [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight)
    - [Height](#ibc-core-client-v1-Height)
    - [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState)
    - [Params](#ibc-core-client-v1-Params)
  
- [ibc/core/channel/v1/channel.proto](#ibc_core_channel_v1_channel-proto)
    - [Acknowledgement](#ibc-core-channel-v1-Acknowledgement)
    - [Channel](#ibc-core-channel-v1-Channel)
    - [Counterparty](#ibc-core-channel-v1-Counterparty)
    - [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel)
    - [Packet](#ibc-core-channel-v1-Packet)
    - [PacketId](#ibc-core-channel-v1-PacketId)
    - [PacketState](#ibc-core-channel-v1-PacketState)
    - [Timeout](#ibc-core-channel-v1-Timeout)
  
    - [Order](#ibc-core-channel-v1-Order)
    - [State](#ibc-core-channel-v1-State)
  
- [ibc/applications/interchain_accounts/controller/v1/tx.proto](#ibc_applications_interchain_accounts_controller_v1_tx-proto)
    - [MsgRegisterInterchainAccount](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount)
    - [MsgRegisterInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse)
    - [MsgSendTx](#ibc-applications-interchain_accounts-controller-v1-MsgSendTx)
    - [MsgSendTxResponse](#ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse)
    - [MsgUpdateParams](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-interchain_accounts-controller-v1-Msg)
  
- [ibc/applications/interchain_accounts/host/v1/host.proto](#ibc_applications_interchain_accounts_host_v1_host-proto)
    - [Params](#ibc-applications-interchain_accounts-host-v1-Params)
    - [QueryRequest](#ibc-applications-interchain_accounts-host-v1-QueryRequest)
  
- [ibc/applications/interchain_accounts/genesis/v1/genesis.proto](#ibc_applications_interchain_accounts_genesis_v1_genesis-proto)
    - [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel)
    - [ControllerGenesisState](#ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState)
    - [GenesisState](#ibc-applications-interchain_accounts-genesis-v1-GenesisState)
    - [HostGenesisState](#ibc-applications-interchain_accounts-genesis-v1-HostGenesisState)
    - [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount)
  
- [ibc/applications/interchain_accounts/host/v1/query.proto](#ibc_applications_interchain_accounts_host_v1_query-proto)
    - [QueryParamsRequest](#ibc-applications-interchain_accounts-host-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-interchain_accounts-host-v1-QueryParamsResponse)
  
    - [Query](#ibc-applications-interchain_accounts-host-v1-Query)
  
- [ibc/applications/interchain_accounts/host/v1/tx.proto](#ibc_applications_interchain_accounts_host_v1_tx-proto)
    - [MsgModuleQuerySafe](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe)
    - [MsgModuleQuerySafeResponse](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse)
    - [MsgUpdateParams](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-interchain_accounts-host-v1-Msg)
  
- [ibc/applications/interchain_accounts/v1/account.proto](#ibc_applications_interchain_accounts_v1_account-proto)
    - [InterchainAccount](#ibc-applications-interchain_accounts-v1-InterchainAccount)
  
- [ibc/applications/interchain_accounts/v1/metadata.proto](#ibc_applications_interchain_accounts_v1_metadata-proto)
    - [Metadata](#ibc-applications-interchain_accounts-v1-Metadata)
  
- [ibc/applications/packet_forward_middleware/v1/genesis.proto](#ibc_applications_packet_forward_middleware_v1_genesis-proto)
    - [GenesisState](#ibc-applications-packet_forward_middleware-v1-GenesisState)
    - [GenesisState.InFlightPacketsEntry](#ibc-applications-packet_forward_middleware-v1-GenesisState-InFlightPacketsEntry)
    - [InFlightPacket](#ibc-applications-packet_forward_middleware-v1-InFlightPacket)
  
- [ibc/applications/rate_limiting/v1/rate_limiting.proto](#ibc_applications_rate_limiting_v1_rate_limiting-proto)
    - [Flow](#ibc-applications-rate_limiting-v1-Flow)
    - [HourEpoch](#ibc-applications-rate_limiting-v1-HourEpoch)
    - [Path](#ibc-applications-rate_limiting-v1-Path)
    - [Quota](#ibc-applications-rate_limiting-v1-Quota)
    - [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit)
    - [WhitelistedAddressPair](#ibc-applications-rate_limiting-v1-WhitelistedAddressPair)
  
    - [PacketDirection](#ibc-applications-rate_limiting-v1-PacketDirection)
  
- [ibc/applications/rate_limiting/v1/genesis.proto](#ibc_applications_rate_limiting_v1_genesis-proto)
    - [GenesisState](#ibc-applications-rate_limiting-v1-GenesisState)
  
- [ibc/applications/rate_limiting/v1/query.proto](#ibc_applications_rate_limiting_v1_query-proto)
    - [QueryAllBlacklistedDenomsRequest](#ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsRequest)
    - [QueryAllBlacklistedDenomsResponse](#ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsResponse)
    - [QueryAllRateLimitsRequest](#ibc-applications-rate_limiting-v1-QueryAllRateLimitsRequest)
    - [QueryAllRateLimitsResponse](#ibc-applications-rate_limiting-v1-QueryAllRateLimitsResponse)
    - [QueryAllWhitelistedAddressesRequest](#ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesRequest)
    - [QueryAllWhitelistedAddressesResponse](#ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesResponse)
    - [QueryRateLimitRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitRequest)
    - [QueryRateLimitResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitResponse)
    - [QueryRateLimitsByChainIDRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDRequest)
    - [QueryRateLimitsByChainIDResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDResponse)
    - [QueryRateLimitsByChannelOrClientIDRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDRequest)
    - [QueryRateLimitsByChannelOrClientIDResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDResponse)
  
    - [Query](#ibc-applications-rate_limiting-v1-Query)
  
- [ibc/applications/rate_limiting/v1/tx.proto](#ibc_applications_rate_limiting_v1_tx-proto)
    - [MsgAddRateLimit](#ibc-applications-rate_limiting-v1-MsgAddRateLimit)
    - [MsgAddRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgAddRateLimitResponse)
    - [MsgRemoveRateLimit](#ibc-applications-rate_limiting-v1-MsgRemoveRateLimit)
    - [MsgRemoveRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgRemoveRateLimitResponse)
    - [MsgResetRateLimit](#ibc-applications-rate_limiting-v1-MsgResetRateLimit)
    - [MsgResetRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgResetRateLimitResponse)
    - [MsgUpdateRateLimit](#ibc-applications-rate_limiting-v1-MsgUpdateRateLimit)
    - [MsgUpdateRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgUpdateRateLimitResponse)
  
    - [Msg](#ibc-applications-rate_limiting-v1-Msg)
  
- [ibc/applications/transfer/v1/authz.proto](#ibc_applications_transfer_v1_authz-proto)
    - [Allocation](#ibc-applications-transfer-v1-Allocation)
    - [TransferAuthorization](#ibc-applications-transfer-v1-TransferAuthorization)
  
- [ibc/applications/transfer/v1/denomtrace.proto](#ibc_applications_transfer_v1_denomtrace-proto)
    - [DenomTrace](#ibc-applications-transfer-v1-DenomTrace)
  
- [ibc/applications/transfer/v1/transfer.proto](#ibc_applications_transfer_v1_transfer-proto)
    - [Params](#ibc-applications-transfer-v1-Params)
  
- [ibc/applications/transfer/v1/token.proto](#ibc_applications_transfer_v1_token-proto)
    - [Denom](#ibc-applications-transfer-v1-Denom)
    - [Hop](#ibc-applications-transfer-v1-Hop)
    - [Token](#ibc-applications-transfer-v1-Token)
  
- [ibc/applications/transfer/v1/genesis.proto](#ibc_applications_transfer_v1_genesis-proto)
    - [GenesisState](#ibc-applications-transfer-v1-GenesisState)
  
- [ibc/applications/transfer/v1/packet.proto](#ibc_applications_transfer_v1_packet-proto)
    - [FungibleTokenPacketData](#ibc-applications-transfer-v1-FungibleTokenPacketData)
  
- [ibc/applications/transfer/v1/query.proto](#ibc_applications_transfer_v1_query-proto)
    - [QueryDenomHashRequest](#ibc-applications-transfer-v1-QueryDenomHashRequest)
    - [QueryDenomHashResponse](#ibc-applications-transfer-v1-QueryDenomHashResponse)
    - [QueryDenomRequest](#ibc-applications-transfer-v1-QueryDenomRequest)
    - [QueryDenomResponse](#ibc-applications-transfer-v1-QueryDenomResponse)
    - [QueryDenomsRequest](#ibc-applications-transfer-v1-QueryDenomsRequest)
    - [QueryDenomsResponse](#ibc-applications-transfer-v1-QueryDenomsResponse)
    - [QueryEscrowAddressRequest](#ibc-applications-transfer-v1-QueryEscrowAddressRequest)
    - [QueryEscrowAddressResponse](#ibc-applications-transfer-v1-QueryEscrowAddressResponse)
    - [QueryParamsRequest](#ibc-applications-transfer-v1-QueryParamsRequest)
    - [QueryParamsResponse](#ibc-applications-transfer-v1-QueryParamsResponse)
    - [QueryTotalEscrowForDenomRequest](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest)
    - [QueryTotalEscrowForDenomResponse](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse)
  
    - [Query](#ibc-applications-transfer-v1-Query)
  
- [ibc/applications/transfer/v1/tx.proto](#ibc_applications_transfer_v1_tx-proto)
    - [MsgTransfer](#ibc-applications-transfer-v1-MsgTransfer)
    - [MsgTransferResponse](#ibc-applications-transfer-v1-MsgTransferResponse)
    - [MsgUpdateParams](#ibc-applications-transfer-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-applications-transfer-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-applications-transfer-v1-Msg)
  
- [ibc/core/channel/v1/genesis.proto](#ibc_core_channel_v1_genesis-proto)
    - [GenesisState](#ibc-core-channel-v1-GenesisState)
    - [PacketSequence](#ibc-core-channel-v1-PacketSequence)
  
- [ibc/core/channel/v1/query.proto](#ibc_core_channel_v1_query-proto)
    - [QueryChannelClientStateRequest](#ibc-core-channel-v1-QueryChannelClientStateRequest)
    - [QueryChannelClientStateResponse](#ibc-core-channel-v1-QueryChannelClientStateResponse)
    - [QueryChannelConsensusStateRequest](#ibc-core-channel-v1-QueryChannelConsensusStateRequest)
    - [QueryChannelConsensusStateResponse](#ibc-core-channel-v1-QueryChannelConsensusStateResponse)
    - [QueryChannelRequest](#ibc-core-channel-v1-QueryChannelRequest)
    - [QueryChannelResponse](#ibc-core-channel-v1-QueryChannelResponse)
    - [QueryChannelsRequest](#ibc-core-channel-v1-QueryChannelsRequest)
    - [QueryChannelsResponse](#ibc-core-channel-v1-QueryChannelsResponse)
    - [QueryConnectionChannelsRequest](#ibc-core-channel-v1-QueryConnectionChannelsRequest)
    - [QueryConnectionChannelsResponse](#ibc-core-channel-v1-QueryConnectionChannelsResponse)
    - [QueryNextSequenceReceiveRequest](#ibc-core-channel-v1-QueryNextSequenceReceiveRequest)
    - [QueryNextSequenceReceiveResponse](#ibc-core-channel-v1-QueryNextSequenceReceiveResponse)
    - [QueryNextSequenceSendRequest](#ibc-core-channel-v1-QueryNextSequenceSendRequest)
    - [QueryNextSequenceSendResponse](#ibc-core-channel-v1-QueryNextSequenceSendResponse)
    - [QueryPacketAcknowledgementRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementRequest)
    - [QueryPacketAcknowledgementResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementResponse)
    - [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementsRequest)
    - [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementsResponse)
    - [QueryPacketCommitmentRequest](#ibc-core-channel-v1-QueryPacketCommitmentRequest)
    - [QueryPacketCommitmentResponse](#ibc-core-channel-v1-QueryPacketCommitmentResponse)
    - [QueryPacketCommitmentsRequest](#ibc-core-channel-v1-QueryPacketCommitmentsRequest)
    - [QueryPacketCommitmentsResponse](#ibc-core-channel-v1-QueryPacketCommitmentsResponse)
    - [QueryPacketReceiptRequest](#ibc-core-channel-v1-QueryPacketReceiptRequest)
    - [QueryPacketReceiptResponse](#ibc-core-channel-v1-QueryPacketReceiptResponse)
    - [QueryUnreceivedAcksRequest](#ibc-core-channel-v1-QueryUnreceivedAcksRequest)
    - [QueryUnreceivedAcksResponse](#ibc-core-channel-v1-QueryUnreceivedAcksResponse)
    - [QueryUnreceivedPacketsRequest](#ibc-core-channel-v1-QueryUnreceivedPacketsRequest)
    - [QueryUnreceivedPacketsResponse](#ibc-core-channel-v1-QueryUnreceivedPacketsResponse)
  
    - [Query](#ibc-core-channel-v1-Query)
  
- [ibc/core/channel/v1/tx.proto](#ibc_core_channel_v1_tx-proto)
    - [MsgAcknowledgement](#ibc-core-channel-v1-MsgAcknowledgement)
    - [MsgAcknowledgementResponse](#ibc-core-channel-v1-MsgAcknowledgementResponse)
    - [MsgChannelCloseConfirm](#ibc-core-channel-v1-MsgChannelCloseConfirm)
    - [MsgChannelCloseConfirmResponse](#ibc-core-channel-v1-MsgChannelCloseConfirmResponse)
    - [MsgChannelCloseInit](#ibc-core-channel-v1-MsgChannelCloseInit)
    - [MsgChannelCloseInitResponse](#ibc-core-channel-v1-MsgChannelCloseInitResponse)
    - [MsgChannelOpenAck](#ibc-core-channel-v1-MsgChannelOpenAck)
    - [MsgChannelOpenAckResponse](#ibc-core-channel-v1-MsgChannelOpenAckResponse)
    - [MsgChannelOpenConfirm](#ibc-core-channel-v1-MsgChannelOpenConfirm)
    - [MsgChannelOpenConfirmResponse](#ibc-core-channel-v1-MsgChannelOpenConfirmResponse)
    - [MsgChannelOpenInit](#ibc-core-channel-v1-MsgChannelOpenInit)
    - [MsgChannelOpenInitResponse](#ibc-core-channel-v1-MsgChannelOpenInitResponse)
    - [MsgChannelOpenTry](#ibc-core-channel-v1-MsgChannelOpenTry)
    - [MsgChannelOpenTryResponse](#ibc-core-channel-v1-MsgChannelOpenTryResponse)
    - [MsgRecvPacket](#ibc-core-channel-v1-MsgRecvPacket)
    - [MsgRecvPacketResponse](#ibc-core-channel-v1-MsgRecvPacketResponse)
    - [MsgTimeout](#ibc-core-channel-v1-MsgTimeout)
    - [MsgTimeoutOnClose](#ibc-core-channel-v1-MsgTimeoutOnClose)
    - [MsgTimeoutOnCloseResponse](#ibc-core-channel-v1-MsgTimeoutOnCloseResponse)
    - [MsgTimeoutResponse](#ibc-core-channel-v1-MsgTimeoutResponse)
  
    - [ResponseResultType](#ibc-core-channel-v1-ResponseResultType)
  
    - [Msg](#ibc-core-channel-v1-Msg)
  
- [ibc/core/channel/v2/genesis.proto](#ibc_core_channel_v2_genesis-proto)
    - [GenesisState](#ibc-core-channel-v2-GenesisState)
    - [PacketSequence](#ibc-core-channel-v2-PacketSequence)
    - [PacketState](#ibc-core-channel-v2-PacketState)
  
- [ibc/core/channel/v2/packet.proto](#ibc_core_channel_v2_packet-proto)
    - [Acknowledgement](#ibc-core-channel-v2-Acknowledgement)
    - [Packet](#ibc-core-channel-v2-Packet)
    - [Payload](#ibc-core-channel-v2-Payload)
    - [RecvPacketResult](#ibc-core-channel-v2-RecvPacketResult)
  
    - [PacketStatus](#ibc-core-channel-v2-PacketStatus)
  
- [ibc/core/channel/v2/query.proto](#ibc_core_channel_v2_query-proto)
    - [QueryNextSequenceSendRequest](#ibc-core-channel-v2-QueryNextSequenceSendRequest)
    - [QueryNextSequenceSendResponse](#ibc-core-channel-v2-QueryNextSequenceSendResponse)
    - [QueryPacketAcknowledgementRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementRequest)
    - [QueryPacketAcknowledgementResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementResponse)
    - [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementsRequest)
    - [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementsResponse)
    - [QueryPacketCommitmentRequest](#ibc-core-channel-v2-QueryPacketCommitmentRequest)
    - [QueryPacketCommitmentResponse](#ibc-core-channel-v2-QueryPacketCommitmentResponse)
    - [QueryPacketCommitmentsRequest](#ibc-core-channel-v2-QueryPacketCommitmentsRequest)
    - [QueryPacketCommitmentsResponse](#ibc-core-channel-v2-QueryPacketCommitmentsResponse)
    - [QueryPacketReceiptRequest](#ibc-core-channel-v2-QueryPacketReceiptRequest)
    - [QueryPacketReceiptResponse](#ibc-core-channel-v2-QueryPacketReceiptResponse)
    - [QueryUnreceivedAcksRequest](#ibc-core-channel-v2-QueryUnreceivedAcksRequest)
    - [QueryUnreceivedAcksResponse](#ibc-core-channel-v2-QueryUnreceivedAcksResponse)
    - [QueryUnreceivedPacketsRequest](#ibc-core-channel-v2-QueryUnreceivedPacketsRequest)
    - [QueryUnreceivedPacketsResponse](#ibc-core-channel-v2-QueryUnreceivedPacketsResponse)
  
    - [Query](#ibc-core-channel-v2-Query)
  
- [ibc/core/channel/v2/tx.proto](#ibc_core_channel_v2_tx-proto)
    - [MsgAcknowledgement](#ibc-core-channel-v2-MsgAcknowledgement)
    - [MsgAcknowledgementResponse](#ibc-core-channel-v2-MsgAcknowledgementResponse)
    - [MsgRecvPacket](#ibc-core-channel-v2-MsgRecvPacket)
    - [MsgRecvPacketResponse](#ibc-core-channel-v2-MsgRecvPacketResponse)
    - [MsgSendPacket](#ibc-core-channel-v2-MsgSendPacket)
    - [MsgSendPacketResponse](#ibc-core-channel-v2-MsgSendPacketResponse)
    - [MsgTimeout](#ibc-core-channel-v2-MsgTimeout)
    - [MsgTimeoutResponse](#ibc-core-channel-v2-MsgTimeoutResponse)
  
    - [ResponseResultType](#ibc-core-channel-v2-ResponseResultType)
  
    - [Msg](#ibc-core-channel-v2-Msg)
  
- [ibc/core/client/v1/genesis.proto](#ibc_core_client_v1_genesis-proto)
    - [GenesisMetadata](#ibc-core-client-v1-GenesisMetadata)
    - [GenesisState](#ibc-core-client-v1-GenesisState)
    - [IdentifiedGenesisMetadata](#ibc-core-client-v1-IdentifiedGenesisMetadata)
  
- [ibc/core/commitment/v2/commitment.proto](#ibc_core_commitment_v2_commitment-proto)
    - [MerklePath](#ibc-core-commitment-v2-MerklePath)
  
- [ibc/core/client/v1/query.proto](#ibc_core_client_v1_query-proto)
    - [QueryClientCreatorRequest](#ibc-core-client-v1-QueryClientCreatorRequest)
    - [QueryClientCreatorResponse](#ibc-core-client-v1-QueryClientCreatorResponse)
    - [QueryClientParamsRequest](#ibc-core-client-v1-QueryClientParamsRequest)
    - [QueryClientParamsResponse](#ibc-core-client-v1-QueryClientParamsResponse)
    - [QueryClientStateRequest](#ibc-core-client-v1-QueryClientStateRequest)
    - [QueryClientStateResponse](#ibc-core-client-v1-QueryClientStateResponse)
    - [QueryClientStatesRequest](#ibc-core-client-v1-QueryClientStatesRequest)
    - [QueryClientStatesResponse](#ibc-core-client-v1-QueryClientStatesResponse)
    - [QueryClientStatusRequest](#ibc-core-client-v1-QueryClientStatusRequest)
    - [QueryClientStatusResponse](#ibc-core-client-v1-QueryClientStatusResponse)
    - [QueryConsensusStateHeightsRequest](#ibc-core-client-v1-QueryConsensusStateHeightsRequest)
    - [QueryConsensusStateHeightsResponse](#ibc-core-client-v1-QueryConsensusStateHeightsResponse)
    - [QueryConsensusStateRequest](#ibc-core-client-v1-QueryConsensusStateRequest)
    - [QueryConsensusStateResponse](#ibc-core-client-v1-QueryConsensusStateResponse)
    - [QueryConsensusStatesRequest](#ibc-core-client-v1-QueryConsensusStatesRequest)
    - [QueryConsensusStatesResponse](#ibc-core-client-v1-QueryConsensusStatesResponse)
    - [QueryUpgradedClientStateRequest](#ibc-core-client-v1-QueryUpgradedClientStateRequest)
    - [QueryUpgradedClientStateResponse](#ibc-core-client-v1-QueryUpgradedClientStateResponse)
    - [QueryUpgradedConsensusStateRequest](#ibc-core-client-v1-QueryUpgradedConsensusStateRequest)
    - [QueryUpgradedConsensusStateResponse](#ibc-core-client-v1-QueryUpgradedConsensusStateResponse)
    - [QueryVerifyMembershipRequest](#ibc-core-client-v1-QueryVerifyMembershipRequest)
    - [QueryVerifyMembershipResponse](#ibc-core-client-v1-QueryVerifyMembershipResponse)
  
    - [Query](#ibc-core-client-v1-Query)
  
- [ibc/core/client/v1/tx.proto](#ibc_core_client_v1_tx-proto)
    - [MsgCreateClient](#ibc-core-client-v1-MsgCreateClient)
    - [MsgCreateClientResponse](#ibc-core-client-v1-MsgCreateClientResponse)
    - [MsgDeleteClientCreator](#ibc-core-client-v1-MsgDeleteClientCreator)
    - [MsgDeleteClientCreatorResponse](#ibc-core-client-v1-MsgDeleteClientCreatorResponse)
    - [MsgIBCSoftwareUpgrade](#ibc-core-client-v1-MsgIBCSoftwareUpgrade)
    - [MsgIBCSoftwareUpgradeResponse](#ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse)
    - [MsgRecoverClient](#ibc-core-client-v1-MsgRecoverClient)
    - [MsgRecoverClientResponse](#ibc-core-client-v1-MsgRecoverClientResponse)
    - [MsgUpdateClient](#ibc-core-client-v1-MsgUpdateClient)
    - [MsgUpdateClientResponse](#ibc-core-client-v1-MsgUpdateClientResponse)
    - [MsgUpdateParams](#ibc-core-client-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-core-client-v1-MsgUpdateParamsResponse)
    - [MsgUpgradeClient](#ibc-core-client-v1-MsgUpgradeClient)
    - [MsgUpgradeClientResponse](#ibc-core-client-v1-MsgUpgradeClientResponse)
  
    - [Msg](#ibc-core-client-v1-Msg)
  
- [ibc/core/client/v2/config.proto](#ibc_core_client_v2_config-proto)
    - [Config](#ibc-core-client-v2-Config)
  
- [ibc/core/client/v2/counterparty.proto](#ibc_core_client_v2_counterparty-proto)
    - [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo)
  
- [ibc/core/client/v2/genesis.proto](#ibc_core_client_v2_genesis-proto)
    - [GenesisCounterpartyInfo](#ibc-core-client-v2-GenesisCounterpartyInfo)
    - [GenesisState](#ibc-core-client-v2-GenesisState)
  
- [ibc/core/client/v2/query.proto](#ibc_core_client_v2_query-proto)
    - [QueryConfigRequest](#ibc-core-client-v2-QueryConfigRequest)
    - [QueryConfigResponse](#ibc-core-client-v2-QueryConfigResponse)
    - [QueryCounterpartyInfoRequest](#ibc-core-client-v2-QueryCounterpartyInfoRequest)
    - [QueryCounterpartyInfoResponse](#ibc-core-client-v2-QueryCounterpartyInfoResponse)
  
    - [Query](#ibc-core-client-v2-Query)
  
- [ibc/core/client/v2/tx.proto](#ibc_core_client_v2_tx-proto)
    - [MsgRegisterCounterparty](#ibc-core-client-v2-MsgRegisterCounterparty)
    - [MsgRegisterCounterpartyResponse](#ibc-core-client-v2-MsgRegisterCounterpartyResponse)
    - [MsgUpdateClientConfig](#ibc-core-client-v2-MsgUpdateClientConfig)
    - [MsgUpdateClientConfigResponse](#ibc-core-client-v2-MsgUpdateClientConfigResponse)
  
    - [Msg](#ibc-core-client-v2-Msg)
  
- [cosmos/ics23/v1/proofs.proto](#cosmos_ics23_v1_proofs-proto)
    - [BatchEntry](#cosmos-ics23-v1-BatchEntry)
    - [BatchProof](#cosmos-ics23-v1-BatchProof)
    - [CommitmentProof](#cosmos-ics23-v1-CommitmentProof)
    - [CompressedBatchEntry](#cosmos-ics23-v1-CompressedBatchEntry)
    - [CompressedBatchProof](#cosmos-ics23-v1-CompressedBatchProof)
    - [CompressedExistenceProof](#cosmos-ics23-v1-CompressedExistenceProof)
    - [CompressedNonExistenceProof](#cosmos-ics23-v1-CompressedNonExistenceProof)
    - [ExistenceProof](#cosmos-ics23-v1-ExistenceProof)
    - [InnerOp](#cosmos-ics23-v1-InnerOp)
    - [InnerSpec](#cosmos-ics23-v1-InnerSpec)
    - [LeafOp](#cosmos-ics23-v1-LeafOp)
    - [NonExistenceProof](#cosmos-ics23-v1-NonExistenceProof)
    - [ProofSpec](#cosmos-ics23-v1-ProofSpec)
  
    - [HashOp](#cosmos-ics23-v1-HashOp)
    - [LengthOp](#cosmos-ics23-v1-LengthOp)
  
- [ibc/core/commitment/v1/commitment.proto](#ibc_core_commitment_v1_commitment-proto)
    - [MerklePrefix](#ibc-core-commitment-v1-MerklePrefix)
    - [MerkleProof](#ibc-core-commitment-v1-MerkleProof)
    - [MerkleRoot](#ibc-core-commitment-v1-MerkleRoot)
  
- [ibc/core/connection/v1/connection.proto](#ibc_core_connection_v1_connection-proto)
    - [ClientPaths](#ibc-core-connection-v1-ClientPaths)
    - [ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd)
    - [ConnectionPaths](#ibc-core-connection-v1-ConnectionPaths)
    - [Counterparty](#ibc-core-connection-v1-Counterparty)
    - [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection)
    - [Params](#ibc-core-connection-v1-Params)
    - [Version](#ibc-core-connection-v1-Version)
  
    - [State](#ibc-core-connection-v1-State)
  
- [ibc/core/connection/v1/genesis.proto](#ibc_core_connection_v1_genesis-proto)
    - [GenesisState](#ibc-core-connection-v1-GenesisState)
  
- [ibc/core/connection/v1/query.proto](#ibc_core_connection_v1_query-proto)
    - [QueryClientConnectionsRequest](#ibc-core-connection-v1-QueryClientConnectionsRequest)
    - [QueryClientConnectionsResponse](#ibc-core-connection-v1-QueryClientConnectionsResponse)
    - [QueryConnectionClientStateRequest](#ibc-core-connection-v1-QueryConnectionClientStateRequest)
    - [QueryConnectionClientStateResponse](#ibc-core-connection-v1-QueryConnectionClientStateResponse)
    - [QueryConnectionConsensusStateRequest](#ibc-core-connection-v1-QueryConnectionConsensusStateRequest)
    - [QueryConnectionConsensusStateResponse](#ibc-core-connection-v1-QueryConnectionConsensusStateResponse)
    - [QueryConnectionParamsRequest](#ibc-core-connection-v1-QueryConnectionParamsRequest)
    - [QueryConnectionParamsResponse](#ibc-core-connection-v1-QueryConnectionParamsResponse)
    - [QueryConnectionRequest](#ibc-core-connection-v1-QueryConnectionRequest)
    - [QueryConnectionResponse](#ibc-core-connection-v1-QueryConnectionResponse)
    - [QueryConnectionsRequest](#ibc-core-connection-v1-QueryConnectionsRequest)
    - [QueryConnectionsResponse](#ibc-core-connection-v1-QueryConnectionsResponse)
  
    - [Query](#ibc-core-connection-v1-Query)
  
- [ibc/core/connection/v1/tx.proto](#ibc_core_connection_v1_tx-proto)
    - [MsgConnectionOpenAck](#ibc-core-connection-v1-MsgConnectionOpenAck)
    - [MsgConnectionOpenAckResponse](#ibc-core-connection-v1-MsgConnectionOpenAckResponse)
    - [MsgConnectionOpenConfirm](#ibc-core-connection-v1-MsgConnectionOpenConfirm)
    - [MsgConnectionOpenConfirmResponse](#ibc-core-connection-v1-MsgConnectionOpenConfirmResponse)
    - [MsgConnectionOpenInit](#ibc-core-connection-v1-MsgConnectionOpenInit)
    - [MsgConnectionOpenInitResponse](#ibc-core-connection-v1-MsgConnectionOpenInitResponse)
    - [MsgConnectionOpenTry](#ibc-core-connection-v1-MsgConnectionOpenTry)
    - [MsgConnectionOpenTryResponse](#ibc-core-connection-v1-MsgConnectionOpenTryResponse)
    - [MsgUpdateParams](#ibc-core-connection-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#ibc-core-connection-v1-MsgUpdateParamsResponse)
  
    - [Msg](#ibc-core-connection-v1-Msg)
  
- [ibc/core/types/v1/genesis.proto](#ibc_core_types_v1_genesis-proto)
    - [GenesisState](#ibc-core-types-v1-GenesisState)
  
- [ibc/lightclients/attestations/v1/attestations.proto](#ibc_lightclients_attestations_v1_attestations-proto)
    - [AttestationProof](#ibc-lightclients-attestations-v1-AttestationProof)
    - [ClientState](#ibc-lightclients-attestations-v1-ClientState)
    - [ConsensusState](#ibc-lightclients-attestations-v1-ConsensusState)
  
- [ibc/lightclients/solomachine/v2/solomachine.proto](#ibc_lightclients_solomachine_v2_solomachine-proto)
    - [ChannelStateData](#ibc-lightclients-solomachine-v2-ChannelStateData)
    - [ClientState](#ibc-lightclients-solomachine-v2-ClientState)
    - [ClientStateData](#ibc-lightclients-solomachine-v2-ClientStateData)
    - [ConnectionStateData](#ibc-lightclients-solomachine-v2-ConnectionStateData)
    - [ConsensusState](#ibc-lightclients-solomachine-v2-ConsensusState)
    - [ConsensusStateData](#ibc-lightclients-solomachine-v2-ConsensusStateData)
    - [Header](#ibc-lightclients-solomachine-v2-Header)
    - [HeaderData](#ibc-lightclients-solomachine-v2-HeaderData)
    - [Misbehaviour](#ibc-lightclients-solomachine-v2-Misbehaviour)
    - [NextSequenceRecvData](#ibc-lightclients-solomachine-v2-NextSequenceRecvData)
    - [PacketAcknowledgementData](#ibc-lightclients-solomachine-v2-PacketAcknowledgementData)
    - [PacketCommitmentData](#ibc-lightclients-solomachine-v2-PacketCommitmentData)
    - [PacketReceiptAbsenceData](#ibc-lightclients-solomachine-v2-PacketReceiptAbsenceData)
    - [SignBytes](#ibc-lightclients-solomachine-v2-SignBytes)
    - [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData)
    - [TimestampedSignatureData](#ibc-lightclients-solomachine-v2-TimestampedSignatureData)
  
    - [DataType](#ibc-lightclients-solomachine-v2-DataType)
  
- [ibc/lightclients/solomachine/v3/solomachine.proto](#ibc_lightclients_solomachine_v3_solomachine-proto)
    - [ClientState](#ibc-lightclients-solomachine-v3-ClientState)
    - [ConsensusState](#ibc-lightclients-solomachine-v3-ConsensusState)
    - [Header](#ibc-lightclients-solomachine-v3-Header)
    - [HeaderData](#ibc-lightclients-solomachine-v3-HeaderData)
    - [Misbehaviour](#ibc-lightclients-solomachine-v3-Misbehaviour)
    - [SignBytes](#ibc-lightclients-solomachine-v3-SignBytes)
    - [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData)
    - [TimestampedSignatureData](#ibc-lightclients-solomachine-v3-TimestampedSignatureData)
  
- [ibc/lightclients/tendermint/v1/tendermint.proto](#ibc_lightclients_tendermint_v1_tendermint-proto)
    - [ClientState](#ibc-lightclients-tendermint-v1-ClientState)
    - [ConsensusState](#ibc-lightclients-tendermint-v1-ConsensusState)
    - [Fraction](#ibc-lightclients-tendermint-v1-Fraction)
    - [Header](#ibc-lightclients-tendermint-v1-Header)
    - [Misbehaviour](#ibc-lightclients-tendermint-v1-Misbehaviour)
  
- [ibc/lightclients/wasm/v1/genesis.proto](#ibc_lightclients_wasm_v1_genesis-proto)
    - [Contract](#ibc-lightclients-wasm-v1-Contract)
    - [GenesisState](#ibc-lightclients-wasm-v1-GenesisState)
  
- [ibc/lightclients/wasm/v1/query.proto](#ibc_lightclients_wasm_v1_query-proto)
    - [QueryChecksumsRequest](#ibc-lightclients-wasm-v1-QueryChecksumsRequest)
    - [QueryChecksumsResponse](#ibc-lightclients-wasm-v1-QueryChecksumsResponse)
    - [QueryCodeRequest](#ibc-lightclients-wasm-v1-QueryCodeRequest)
    - [QueryCodeResponse](#ibc-lightclients-wasm-v1-QueryCodeResponse)
  
    - [Query](#ibc-lightclients-wasm-v1-Query)
  
- [ibc/lightclients/wasm/v1/tx.proto](#ibc_lightclients_wasm_v1_tx-proto)
    - [MsgMigrateContract](#ibc-lightclients-wasm-v1-MsgMigrateContract)
    - [MsgMigrateContractResponse](#ibc-lightclients-wasm-v1-MsgMigrateContractResponse)
    - [MsgRemoveChecksum](#ibc-lightclients-wasm-v1-MsgRemoveChecksum)
    - [MsgRemoveChecksumResponse](#ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse)
    - [MsgStoreCode](#ibc-lightclients-wasm-v1-MsgStoreCode)
    - [MsgStoreCodeResponse](#ibc-lightclients-wasm-v1-MsgStoreCodeResponse)
  
    - [Msg](#ibc-lightclients-wasm-v1-Msg)
  
- [ibc/lightclients/wasm/v1/wasm.proto](#ibc_lightclients_wasm_v1_wasm-proto)
    - [ClientMessage](#ibc-lightclients-wasm-v1-ClientMessage)
    - [ClientState](#ibc-lightclients-wasm-v1-ClientState)
    - [ConsensusState](#ibc-lightclients-wasm-v1-ConsensusState)
  
- [osmosis/tokenfactory/v1beta1/authorityMetadata.proto](#osmosis_tokenfactory_v1beta1_authorityMetadata-proto)
    - [DenomAuthorityMetadata](#osmosis-tokenfactory-v1beta1-DenomAuthorityMetadata)
  
- [osmosis/tokenfactory/v1beta1/params.proto](#osmosis_tokenfactory_v1beta1_params-proto)
    - [Params](#osmosis-tokenfactory-v1beta1-Params)
  
- [osmosis/tokenfactory/v1beta1/genesis.proto](#osmosis_tokenfactory_v1beta1_genesis-proto)
    - [GenesisDenom](#osmosis-tokenfactory-v1beta1-GenesisDenom)
    - [GenesisState](#osmosis-tokenfactory-v1beta1-GenesisState)
  
- [osmosis/tokenfactory/v1beta1/query.proto](#osmosis_tokenfactory_v1beta1_query-proto)
    - [QueryDenomAuthorityMetadataRequest](#osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataRequest)
    - [QueryDenomAuthorityMetadataResponse](#osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataResponse)
    - [QueryDenomsFromAdminRequest](#osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminRequest)
    - [QueryDenomsFromAdminResponse](#osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminResponse)
    - [QueryDenomsFromCreatorRequest](#osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorRequest)
    - [QueryDenomsFromCreatorResponse](#osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorResponse)
    - [QueryParamsRequest](#osmosis-tokenfactory-v1beta1-QueryParamsRequest)
    - [QueryParamsResponse](#osmosis-tokenfactory-v1beta1-QueryParamsResponse)
  
    - [Query](#osmosis-tokenfactory-v1beta1-Query)
  
- [osmosis/tokenfactory/v1beta1/tx.proto](#osmosis_tokenfactory_v1beta1_tx-proto)
    - [MsgBurn](#osmosis-tokenfactory-v1beta1-MsgBurn)
    - [MsgBurnResponse](#osmosis-tokenfactory-v1beta1-MsgBurnResponse)
    - [MsgChangeAdmin](#osmosis-tokenfactory-v1beta1-MsgChangeAdmin)
    - [MsgChangeAdminResponse](#osmosis-tokenfactory-v1beta1-MsgChangeAdminResponse)
    - [MsgCreateDenom](#osmosis-tokenfactory-v1beta1-MsgCreateDenom)
    - [MsgCreateDenomResponse](#osmosis-tokenfactory-v1beta1-MsgCreateDenomResponse)
    - [MsgForceTransfer](#osmosis-tokenfactory-v1beta1-MsgForceTransfer)
    - [MsgForceTransferResponse](#osmosis-tokenfactory-v1beta1-MsgForceTransferResponse)
    - [MsgMint](#osmosis-tokenfactory-v1beta1-MsgMint)
    - [MsgMintResponse](#osmosis-tokenfactory-v1beta1-MsgMintResponse)
    - [MsgSetDenomMetadata](#osmosis-tokenfactory-v1beta1-MsgSetDenomMetadata)
    - [MsgSetDenomMetadataResponse](#osmosis-tokenfactory-v1beta1-MsgSetDenomMetadataResponse)
    - [MsgUpdateParams](#osmosis-tokenfactory-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#osmosis-tokenfactory-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#osmosis-tokenfactory-v1beta1-Msg)
  
- [tendermint/libs/bits/types.proto](#tendermint_libs_bits_types-proto)
    - [BitArray](#tendermint-libs-bits-BitArray)
  
- [xion/dkim/v1/state.proto](#xion_dkim_v1_state-proto)
    - [DkimPubKey](#xion-dkim-v1-DkimPubKey)
  
    - [KeyType](#xion-dkim-v1-KeyType)
    - [Version](#xion-dkim-v1-Version)
  
- [xion/dkim/v1/genesis.proto](#xion_dkim_v1_genesis-proto)
    - [GenesisState](#xion-dkim-v1-GenesisState)
    - [IndexRange](#xion-dkim-v1-IndexRange)
    - [Params](#xion-dkim-v1-Params)
    - [PublicInputIndices](#xion-dkim-v1-PublicInputIndices)
  
- [xion/dkim/v1/query.proto](#xion_dkim_v1_query-proto)
    - [AuthenticateResponse](#xion-dkim-v1-AuthenticateResponse)
    - [QueryAuthenticateRequest](#xion-dkim-v1-QueryAuthenticateRequest)
    - [QueryDkimPubKeyRequest](#xion-dkim-v1-QueryDkimPubKeyRequest)
    - [QueryDkimPubKeyResponse](#xion-dkim-v1-QueryDkimPubKeyResponse)
    - [QueryDkimPubKeysRequest](#xion-dkim-v1-QueryDkimPubKeysRequest)
    - [QueryDkimPubKeysResponse](#xion-dkim-v1-QueryDkimPubKeysResponse)
    - [QueryParamsRequest](#xion-dkim-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-dkim-v1-QueryParamsResponse)
  
    - [Query](#xion-dkim-v1-Query)
  
- [xion/dkim/v1/tx.proto](#xion_dkim_v1_tx-proto)
    - [MsgAddDkimPubKeys](#xion-dkim-v1-MsgAddDkimPubKeys)
    - [MsgAddDkimPubKeysResponse](#xion-dkim-v1-MsgAddDkimPubKeysResponse)
    - [MsgRemoveDkimPubKey](#xion-dkim-v1-MsgRemoveDkimPubKey)
    - [MsgRemoveDkimPubKeyResponse](#xion-dkim-v1-MsgRemoveDkimPubKeyResponse)
    - [MsgRevokeDkimPubKey](#xion-dkim-v1-MsgRevokeDkimPubKey)
    - [MsgRevokeDkimPubKeyResponse](#xion-dkim-v1-MsgRevokeDkimPubKeyResponse)
    - [MsgUpdateParams](#xion-dkim-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-dkim-v1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-dkim-v1-Msg)
  
- [xion/feeabs/v1beta1/epoch.proto](#xion_feeabs_v1beta1_epoch-proto)
    - [EpochInfo](#xion-feeabs-v1beta1-EpochInfo)
    - [ExponentialBackoff](#xion-feeabs-v1beta1-ExponentialBackoff)
  
- [xion/feeabs/v1beta1/params.proto](#xion_feeabs_v1beta1_params-proto)
    - [Params](#xion-feeabs-v1beta1-Params)
  
- [xion/feeabs/v1beta1/genesis.proto](#xion_feeabs_v1beta1_genesis-proto)
    - [GenesisState](#xion-feeabs-v1beta1-GenesisState)
  
- [xion/feeabs/v1beta1/osmosisibc.proto](#xion_feeabs_v1beta1_osmosisibc-proto)
    - [CosmosQuery](#xion-feeabs-v1beta1-CosmosQuery)
    - [CosmosResponse](#xion-feeabs-v1beta1-CosmosResponse)
    - [InterchainQueryPacketAck](#xion-feeabs-v1beta1-InterchainQueryPacketAck)
    - [InterchainQueryPacketData](#xion-feeabs-v1beta1-InterchainQueryPacketData)
    - [InterchainQueryRequest](#xion-feeabs-v1beta1-InterchainQueryRequest)
    - [InterchainQueryRequestPacket](#xion-feeabs-v1beta1-InterchainQueryRequestPacket)
    - [QueryArithmeticTwapToNowRequest](#xion-feeabs-v1beta1-QueryArithmeticTwapToNowRequest)
    - [QueryArithmeticTwapToNowResponse](#xion-feeabs-v1beta1-QueryArithmeticTwapToNowResponse)
  
- [xion/feeabs/v1beta1/proposal.proto](#xion_feeabs_v1beta1_proposal-proto)
    - [AddHostZoneProposal](#xion-feeabs-v1beta1-AddHostZoneProposal)
    - [DeleteHostZoneProposal](#xion-feeabs-v1beta1-DeleteHostZoneProposal)
    - [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig)
    - [SetHostZoneProposal](#xion-feeabs-v1beta1-SetHostZoneProposal)
  
    - [HostChainFeeAbsStatus](#xion-feeabs-v1beta1-HostChainFeeAbsStatus)
  
- [xion/feeabs/v1beta1/query.proto](#xion_feeabs_v1beta1_query-proto)
    - [QueryAllHostChainConfigRequest](#xion-feeabs-v1beta1-QueryAllHostChainConfigRequest)
    - [QueryAllHostChainConfigResponse](#xion-feeabs-v1beta1-QueryAllHostChainConfigResponse)
    - [QueryFeeabsModuleBalancesRequest](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest)
    - [QueryFeeabsModuleBalancesResponse](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse)
    - [QueryHostChainConfigRequest](#xion-feeabs-v1beta1-QueryHostChainConfigRequest)
    - [QueryHostChainConfigResponse](#xion-feeabs-v1beta1-QueryHostChainConfigResponse)
    - [QueryOsmosisArithmeticTwapRequest](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest)
    - [QueryOsmosisArithmeticTwapResponse](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse)
  
    - [Query](#xion-feeabs-v1beta1-Query)
  
- [xion/feeabs/v1beta1/tx.proto](#xion_feeabs_v1beta1_tx-proto)
    - [MsgAddHostZone](#xion-feeabs-v1beta1-MsgAddHostZone)
    - [MsgAddHostZoneResponse](#xion-feeabs-v1beta1-MsgAddHostZoneResponse)
    - [MsgFundFeeAbsModuleAccount](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount)
    - [MsgFundFeeAbsModuleAccountResponse](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse)
    - [MsgRemoveHostZone](#xion-feeabs-v1beta1-MsgRemoveHostZone)
    - [MsgRemoveHostZoneResponse](#xion-feeabs-v1beta1-MsgRemoveHostZoneResponse)
    - [MsgSendQueryIbcDenomTWAP](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP)
    - [MsgSendQueryIbcDenomTWAPResponse](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse)
    - [MsgSwapCrossChain](#xion-feeabs-v1beta1-MsgSwapCrossChain)
    - [MsgSwapCrossChainResponse](#xion-feeabs-v1beta1-MsgSwapCrossChainResponse)
    - [MsgUpdateHostZone](#xion-feeabs-v1beta1-MsgUpdateHostZone)
    - [MsgUpdateHostZoneResponse](#xion-feeabs-v1beta1-MsgUpdateHostZoneResponse)
    - [MsgUpdateParams](#xion-feeabs-v1beta1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-feeabs-v1beta1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-feeabs-v1beta1-Msg)
  
- [xion/globalfee/v1/genesis.proto](#xion_globalfee_v1_genesis-proto)
    - [GenesisState](#xion-globalfee-v1-GenesisState)
    - [Params](#xion-globalfee-v1-Params)
  
- [xion/globalfee/v1/query.proto](#xion_globalfee_v1_query-proto)
    - [QueryParamsRequest](#xion-globalfee-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-globalfee-v1-QueryParamsResponse)
  
    - [Query](#xion-globalfee-v1-Query)
  
- [xion/globalfee/v1/tx.proto](#xion_globalfee_v1_tx-proto)
    - [MsgUpdateParams](#xion-globalfee-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-globalfee-v1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-globalfee-v1-Msg)
  
- [xion/indexer/authz/v1/query.proto](#xion_indexer_authz_v1_query-proto)
    - [QueryGranteeGrantsRequest](#xion-indexer-authz-v1-QueryGranteeGrantsRequest)
    - [QueryGranteeGrantsResponse](#xion-indexer-authz-v1-QueryGranteeGrantsResponse)
    - [QueryGranterGrantsRequest](#xion-indexer-authz-v1-QueryGranterGrantsRequest)
    - [QueryGranterGrantsResponse](#xion-indexer-authz-v1-QueryGranterGrantsResponse)
    - [QueryGrantsRequest](#xion-indexer-authz-v1-QueryGrantsRequest)
    - [QueryGrantsResponse](#xion-indexer-authz-v1-QueryGrantsResponse)
  
    - [Query](#xion-indexer-authz-v1-Query)
  
- [xion/indexer/feegrant/v1/query.proto](#xion_indexer_feegrant_v1_query-proto)
    - [QueryAllowanceRequest](#xion-indexer-feegrant-v1-QueryAllowanceRequest)
    - [QueryAllowanceResponse](#xion-indexer-feegrant-v1-QueryAllowanceResponse)
    - [QueryAllowancesByGranterRequest](#xion-indexer-feegrant-v1-QueryAllowancesByGranterRequest)
    - [QueryAllowancesByGranterResponse](#xion-indexer-feegrant-v1-QueryAllowancesByGranterResponse)
    - [QueryAllowancesRequest](#xion-indexer-feegrant-v1-QueryAllowancesRequest)
    - [QueryAllowancesResponse](#xion-indexer-feegrant-v1-QueryAllowancesResponse)
  
    - [Query](#xion-indexer-feegrant-v1-Query)
  
- [xion/jwk/v1/audience.proto](#xion_jwk_v1_audience-proto)
    - [Audience](#xion-jwk-v1-Audience)
    - [AudienceClaim](#xion-jwk-v1-AudienceClaim)
  
- [xion/jwk/v1/params.proto](#xion_jwk_v1_params-proto)
    - [Params](#xion-jwk-v1-Params)
  
- [xion/jwk/v1/genesis.proto](#xion_jwk_v1_genesis-proto)
    - [GenesisState](#xion-jwk-v1-GenesisState)
  
- [xion/jwk/v1/query.proto](#xion_jwk_v1_query-proto)
    - [JWTClaim](#xion-jwk-v1-JWTClaim)
    - [PrivateClaim](#xion-jwk-v1-PrivateClaim)
    - [QueryAllAudienceRequest](#xion-jwk-v1-QueryAllAudienceRequest)
    - [QueryAllAudienceResponse](#xion-jwk-v1-QueryAllAudienceResponse)
    - [QueryAudienceAllRequest](#xion-jwk-v1-QueryAudienceAllRequest)
    - [QueryAudienceAllResponse](#xion-jwk-v1-QueryAudienceAllResponse)
    - [QueryAudienceClaimRequest](#xion-jwk-v1-QueryAudienceClaimRequest)
    - [QueryAudienceClaimResponse](#xion-jwk-v1-QueryAudienceClaimResponse)
    - [QueryAudienceRequest](#xion-jwk-v1-QueryAudienceRequest)
    - [QueryAudienceResponse](#xion-jwk-v1-QueryAudienceResponse)
    - [QueryDecodeJWTRequest](#xion-jwk-v1-QueryDecodeJWTRequest)
    - [QueryDecodeJWTResponse](#xion-jwk-v1-QueryDecodeJWTResponse)
    - [QueryGetAudienceClaimRequest](#xion-jwk-v1-QueryGetAudienceClaimRequest)
    - [QueryGetAudienceClaimResponse](#xion-jwk-v1-QueryGetAudienceClaimResponse)
    - [QueryGetAudienceRequest](#xion-jwk-v1-QueryGetAudienceRequest)
    - [QueryGetAudienceResponse](#xion-jwk-v1-QueryGetAudienceResponse)
    - [QueryParamsRequest](#xion-jwk-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-jwk-v1-QueryParamsResponse)
    - [QueryValidateJWTRequest](#xion-jwk-v1-QueryValidateJWTRequest)
    - [QueryValidateJWTResponse](#xion-jwk-v1-QueryValidateJWTResponse)
    - [QueryVerifyJWSRequest](#xion-jwk-v1-QueryVerifyJWSRequest)
    - [QueryVerifyJWSResponse](#xion-jwk-v1-QueryVerifyJWSResponse)
  
    - [Query](#xion-jwk-v1-Query)
  
- [xion/jwk/v1/tx.proto](#xion_jwk_v1_tx-proto)
    - [MsgCreateAudience](#xion-jwk-v1-MsgCreateAudience)
    - [MsgCreateAudienceClaim](#xion-jwk-v1-MsgCreateAudienceClaim)
    - [MsgCreateAudienceClaimResponse](#xion-jwk-v1-MsgCreateAudienceClaimResponse)
    - [MsgCreateAudienceResponse](#xion-jwk-v1-MsgCreateAudienceResponse)
    - [MsgDeleteAudience](#xion-jwk-v1-MsgDeleteAudience)
    - [MsgDeleteAudienceClaim](#xion-jwk-v1-MsgDeleteAudienceClaim)
    - [MsgDeleteAudienceClaimResponse](#xion-jwk-v1-MsgDeleteAudienceClaimResponse)
    - [MsgDeleteAudienceResponse](#xion-jwk-v1-MsgDeleteAudienceResponse)
    - [MsgUpdateAudience](#xion-jwk-v1-MsgUpdateAudience)
    - [MsgUpdateAudienceResponse](#xion-jwk-v1-MsgUpdateAudienceResponse)
    - [MsgUpdateParams](#xion-jwk-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-jwk-v1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-jwk-v1-Msg)
  
- [xion/mint/v1/event.proto](#xion_mint_v1_event-proto)
    - [MintIncentiveTokens](#xion-mint-v1-MintIncentiveTokens)
  
- [xion/mint/v1/mint.proto](#xion_mint_v1_mint-proto)
    - [Minter](#xion-mint-v1-Minter)
    - [Params](#xion-mint-v1-Params)
  
- [xion/mint/v1/genesis.proto](#xion_mint_v1_genesis-proto)
    - [GenesisState](#xion-mint-v1-GenesisState)
  
- [xion/mint/v1/query.proto](#xion_mint_v1_query-proto)
    - [QueryAnnualProvisionsRequest](#xion-mint-v1-QueryAnnualProvisionsRequest)
    - [QueryAnnualProvisionsResponse](#xion-mint-v1-QueryAnnualProvisionsResponse)
    - [QueryInflationRequest](#xion-mint-v1-QueryInflationRequest)
    - [QueryInflationResponse](#xion-mint-v1-QueryInflationResponse)
    - [QueryParamsRequest](#xion-mint-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-mint-v1-QueryParamsResponse)
  
    - [Query](#xion-mint-v1-Query)
  
- [xion/mint/v1/tx.proto](#xion_mint_v1_tx-proto)
    - [MsgUpdateParams](#xion-mint-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-mint-v1-MsgUpdateParamsResponse)
  
    - [Msg](#xion-mint-v1-Msg)
  
- [xion/v1/feegrant.proto](#xion_v1_feegrant-proto)
    - [AuthzAllowance](#xion-v1-AuthzAllowance)
    - [ContractsAllowance](#xion-v1-ContractsAllowance)
    - [MultiAnyAllowance](#xion-v1-MultiAnyAllowance)
  
- [xion/v1/genesis.proto](#xion_v1_genesis-proto)
    - [GenesisState](#xion-v1-GenesisState)
  
- [xion/v1/query.proto](#xion_v1_query-proto)
    - [QueryPlatformMinimumRequest](#xion-v1-QueryPlatformMinimumRequest)
    - [QueryPlatformMinimumResponse](#xion-v1-QueryPlatformMinimumResponse)
    - [QueryPlatformPercentageRequest](#xion-v1-QueryPlatformPercentageRequest)
    - [QueryPlatformPercentageResponse](#xion-v1-QueryPlatformPercentageResponse)
    - [QueryWebAuthNVerifyAuthenticateRequest](#xion-v1-QueryWebAuthNVerifyAuthenticateRequest)
    - [QueryWebAuthNVerifyAuthenticateResponse](#xion-v1-QueryWebAuthNVerifyAuthenticateResponse)
    - [QueryWebAuthNVerifyRegisterRequest](#xion-v1-QueryWebAuthNVerifyRegisterRequest)
    - [QueryWebAuthNVerifyRegisterResponse](#xion-v1-QueryWebAuthNVerifyRegisterResponse)
  
    - [Query](#xion-v1-Query)
  
- [xion/v1/tx.proto](#xion_v1_tx-proto)
    - [MsgMultiSend](#xion-v1-MsgMultiSend)
    - [MsgMultiSendResponse](#xion-v1-MsgMultiSendResponse)
    - [MsgSend](#xion-v1-MsgSend)
    - [MsgSendResponse](#xion-v1-MsgSendResponse)
    - [MsgSetPlatformMinimum](#xion-v1-MsgSetPlatformMinimum)
    - [MsgSetPlatformMinimumResponse](#xion-v1-MsgSetPlatformMinimumResponse)
    - [MsgSetPlatformPercentage](#xion-v1-MsgSetPlatformPercentage)
    - [MsgSetPlatformPercentageResponse](#xion-v1-MsgSetPlatformPercentageResponse)
  
    - [Msg](#xion-v1-Msg)
  
- [xion/zk/v1/params.proto](#xion_zk_v1_params-proto)
    - [Params](#xion-zk-v1-Params)
  
    - [ProofSystem](#xion-zk-v1-ProofSystem)
  
- [xion/zk/v1/query.proto](#xion_zk_v1_query-proto)
    - [ProofVerifyGnarkResponse](#xion-zk-v1-ProofVerifyGnarkResponse)
    - [ProofVerifyResponse](#xion-zk-v1-ProofVerifyResponse)
    - [ProofVerifyUltraHonkResponse](#xion-zk-v1-ProofVerifyUltraHonkResponse)
    - [QueryHasVKeyRequest](#xion-zk-v1-QueryHasVKeyRequest)
    - [QueryHasVKeyResponse](#xion-zk-v1-QueryHasVKeyResponse)
    - [QueryNextVKeyIDRequest](#xion-zk-v1-QueryNextVKeyIDRequest)
    - [QueryNextVKeyIDResponse](#xion-zk-v1-QueryNextVKeyIDResponse)
    - [QueryParamsRequest](#xion-zk-v1-QueryParamsRequest)
    - [QueryParamsResponse](#xion-zk-v1-QueryParamsResponse)
    - [QueryVKeyByNameRequest](#xion-zk-v1-QueryVKeyByNameRequest)
    - [QueryVKeyByNameResponse](#xion-zk-v1-QueryVKeyByNameResponse)
    - [QueryVKeyRequest](#xion-zk-v1-QueryVKeyRequest)
    - [QueryVKeyResponse](#xion-zk-v1-QueryVKeyResponse)
    - [QueryVKeysRequest](#xion-zk-v1-QueryVKeysRequest)
    - [QueryVKeysResponse](#xion-zk-v1-QueryVKeysResponse)
    - [QueryVerifyGnarkRequest](#xion-zk-v1-QueryVerifyGnarkRequest)
    - [QueryVerifyRequest](#xion-zk-v1-QueryVerifyRequest)
    - [QueryVerifyUltraHonkRequest](#xion-zk-v1-QueryVerifyUltraHonkRequest)
    - [SnarkJsProof](#xion-zk-v1-SnarkJsProof)
    - [VKey](#xion-zk-v1-VKey)
    - [VKeyWithID](#xion-zk-v1-VKeyWithID)
  
    - [Query](#xion-zk-v1-Query)
  
- [xion/zk/v1/genesis.proto](#xion_zk_v1_genesis-proto)
    - [GenesisState](#xion-zk-v1-GenesisState)
  
- [xion/zk/v1/tx.proto](#xion_zk_v1_tx-proto)
    - [MsgAddVKey](#xion-zk-v1-MsgAddVKey)
    - [MsgAddVKeyResponse](#xion-zk-v1-MsgAddVKeyResponse)
    - [MsgRemoveVKey](#xion-zk-v1-MsgRemoveVKey)
    - [MsgRemoveVKeyResponse](#xion-zk-v1-MsgRemoveVKeyResponse)
    - [MsgUpdateParams](#xion-zk-v1-MsgUpdateParams)
    - [MsgUpdateParamsResponse](#xion-zk-v1-MsgUpdateParamsResponse)
    - [MsgUpdateVKey](#xion-zk-v1-MsgUpdateVKey)
    - [MsgUpdateVKeyResponse](#xion-zk-v1-MsgUpdateVKeyResponse)
  
    - [Msg](#xion-zk-v1-Msg)
  
- [Scalar Value Types](#scalar-value-types)



<a name="cosmos_proto_cosmos-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos_proto/cosmos.proto



<a name="cosmos_proto-InterfaceDescriptor"></a>

### InterfaceDescriptor
InterfaceDescriptor describes an interface type to be used with
accepts_interface and implements_interface and declared by declare_interface.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the interface. It should be a short-name (without a period) such that the fully qualified name of the interface will be package.name, ex. for the package a.b and interface named C, the fully-qualified name will be a.b.C. |
| description | [string](#string) |  | description is a human-readable description of the interface and its purpose. |






<a name="cosmos_proto-ScalarDescriptor"></a>

### ScalarDescriptor
ScalarDescriptor describes an scalar type to be used with
the scalar field option and declared by declare_scalar.
Scalars extend simple protobuf built-in types with additional
syntax and semantics, for instance to represent big integers.
Scalars should ideally define an encoding such that there is only one
valid syntactical representation for a given semantic meaning,
i.e. the encoding should be deterministic.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the scalar. It should be a short-name (without a period) such that the fully qualified name of the scalar will be package.name, ex. for the package a.b and scalar named C, the fully-qualified name will be a.b.C. |
| description | [string](#string) |  | description is a human-readable description of the scalar and its encoding format. For instance a big integer or decimal scalar should specify precisely the expected encoding format. |
| field_type | [ScalarType](#cosmos_proto-ScalarType) | repeated | field_type is the type of field with which this scalar can be used. Scalars can be used with one and only one type of field so that encoding standards and simple and clear. Currently only string and bytes fields are supported for scalars. |





 


<a name="cosmos_proto-ScalarType"></a>

### ScalarType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SCALAR_TYPE_UNSPECIFIED | 0 |  |
| SCALAR_TYPE_STRING | 1 |  |
| SCALAR_TYPE_BYTES | 2 |  |


 


<a name="cosmos_proto_cosmos-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| accepts_interface | string | .google.protobuf.FieldOptions | 93001 | accepts_interface is used to annotate that a google.protobuf.Any field accepts messages that implement the specified interface. Interfaces should be declared using a declare_interface file option. |
| field_added_in | string | .google.protobuf.FieldOptions | 93003 | field_added_in is used to indicate from which version the field was added. |
| scalar | string | .google.protobuf.FieldOptions | 93002 | scalar is used to indicate that this field follows the formatting defined by the named scalar which should be declared with declare_scalar. Code generators may choose to use this information to map this field to a language-specific type representing the scalar. |
| declare_interface | InterfaceDescriptor | .google.protobuf.FileOptions | 793021 | declare_interface declares an interface type to be used with accepts_interface and implements_interface. Interface names are expected to follow the following convention such that their declaration can be discovered by tools: for a given interface type a.b.C, it is expected that the declaration will be found in a protobuf file named a/b/interfaces.proto in the file descriptor set. |
| declare_scalar | ScalarDescriptor | .google.protobuf.FileOptions | 793022 | declare_scalar declares a scalar type to be used with the scalar field option. Scalar names are expected to follow the following convention such that their declaration can be discovered by tools: for a given scalar type a.b.C, it is expected that the declaration will be found in a protobuf file named a/b/scalars.proto in the file descriptor set. |
| file_added_in | string | .google.protobuf.FileOptions | 793023 | file_added_in is used to indicate from which the version the file was added. |
| implements_interface | string | .google.protobuf.MessageOptions | 93001 | implements_interface is used to indicate the type name of the interface that a message implements so that it can be used in google.protobuf.Any fields that accept that interface. A message can implement multiple interfaces. Interfaces should be declared using a declare_interface file option. |
| message_added_in | string | .google.protobuf.MessageOptions | 93002 | message_added_in is used to indicate from which version the message was added. |
| method_added_in | string | .google.protobuf.MethodOptions | 93001 | method_added_in is used to indicate from which version the method was added. |

 

 



<a name="gogoproto_gogo-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## gogoproto/gogo.proto


 

 


<a name="gogoproto_gogo-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| enum_customname | string | .google.protobuf.EnumOptions | 62023 |  |
| enum_stringer | bool | .google.protobuf.EnumOptions | 62022 |  |
| enumdecl | bool | .google.protobuf.EnumOptions | 62024 |  |
| goproto_enum_prefix | bool | .google.protobuf.EnumOptions | 62001 |  |
| goproto_enum_stringer | bool | .google.protobuf.EnumOptions | 62021 |  |
| enumvalue_customname | string | .google.protobuf.EnumValueOptions | 66001 |  |
| castkey | string | .google.protobuf.FieldOptions | 65008 |  |
| castrepeated | string | .google.protobuf.FieldOptions | 65013 |  |
| casttype | string | .google.protobuf.FieldOptions | 65007 |  |
| castvalue | string | .google.protobuf.FieldOptions | 65009 |  |
| customname | string | .google.protobuf.FieldOptions | 65004 |  |
| customtype | string | .google.protobuf.FieldOptions | 65003 |  |
| embed | bool | .google.protobuf.FieldOptions | 65002 |  |
| jsontag | string | .google.protobuf.FieldOptions | 65005 |  |
| moretags | string | .google.protobuf.FieldOptions | 65006 |  |
| nullable | bool | .google.protobuf.FieldOptions | 65001 |  |
| stdduration | bool | .google.protobuf.FieldOptions | 65011 |  |
| stdtime | bool | .google.protobuf.FieldOptions | 65010 |  |
| wktpointer | bool | .google.protobuf.FieldOptions | 65012 |  |
| benchgen_all | bool | .google.protobuf.FileOptions | 63016 |  |
| compare_all | bool | .google.protobuf.FileOptions | 63029 |  |
| description_all | bool | .google.protobuf.FileOptions | 63014 |  |
| enum_stringer_all | bool | .google.protobuf.FileOptions | 63022 |  |
| enumdecl_all | bool | .google.protobuf.FileOptions | 63031 |  |
| equal_all | bool | .google.protobuf.FileOptions | 63013 |  |
| face_all | bool | .google.protobuf.FileOptions | 63005 |  |
| goproto_enum_prefix_all | bool | .google.protobuf.FileOptions | 63002 |  |
| goproto_enum_stringer_all | bool | .google.protobuf.FileOptions | 63021 |  |
| goproto_extensions_map_all | bool | .google.protobuf.FileOptions | 63025 |  |
| goproto_getters_all | bool | .google.protobuf.FileOptions | 63001 |  |
| goproto_registration | bool | .google.protobuf.FileOptions | 63032 |  |
| goproto_sizecache_all | bool | .google.protobuf.FileOptions | 63034 |  |
| goproto_stringer_all | bool | .google.protobuf.FileOptions | 63003 |  |
| goproto_unkeyed_all | bool | .google.protobuf.FileOptions | 63035 |  |
| goproto_unrecognized_all | bool | .google.protobuf.FileOptions | 63026 |  |
| gostring_all | bool | .google.protobuf.FileOptions | 63006 |  |
| marshaler_all | bool | .google.protobuf.FileOptions | 63017 |  |
| messagename_all | bool | .google.protobuf.FileOptions | 63033 |  |
| onlyone_all | bool | .google.protobuf.FileOptions | 63009 |  |
| populate_all | bool | .google.protobuf.FileOptions | 63007 |  |
| protosizer_all | bool | .google.protobuf.FileOptions | 63028 |  |
| sizer_all | bool | .google.protobuf.FileOptions | 63020 |  |
| stable_marshaler_all | bool | .google.protobuf.FileOptions | 63019 |  |
| stringer_all | bool | .google.protobuf.FileOptions | 63008 |  |
| testgen_all | bool | .google.protobuf.FileOptions | 63015 |  |
| typedecl_all | bool | .google.protobuf.FileOptions | 63030 |  |
| unmarshaler_all | bool | .google.protobuf.FileOptions | 63018 |  |
| unsafe_marshaler_all | bool | .google.protobuf.FileOptions | 63023 |  |
| unsafe_unmarshaler_all | bool | .google.protobuf.FileOptions | 63024 |  |
| verbose_equal_all | bool | .google.protobuf.FileOptions | 63004 |  |
| benchgen | bool | .google.protobuf.MessageOptions | 64016 |  |
| compare | bool | .google.protobuf.MessageOptions | 64029 |  |
| description | bool | .google.protobuf.MessageOptions | 64014 |  |
| equal | bool | .google.protobuf.MessageOptions | 64013 |  |
| face | bool | .google.protobuf.MessageOptions | 64005 |  |
| goproto_extensions_map | bool | .google.protobuf.MessageOptions | 64025 |  |
| goproto_getters | bool | .google.protobuf.MessageOptions | 64001 |  |
| goproto_sizecache | bool | .google.protobuf.MessageOptions | 64034 |  |
| goproto_stringer | bool | .google.protobuf.MessageOptions | 64003 |  |
| goproto_unkeyed | bool | .google.protobuf.MessageOptions | 64035 |  |
| goproto_unrecognized | bool | .google.protobuf.MessageOptions | 64026 |  |
| gostring | bool | .google.protobuf.MessageOptions | 64006 |  |
| marshaler | bool | .google.protobuf.MessageOptions | 64017 |  |
| messagename | bool | .google.protobuf.MessageOptions | 64033 |  |
| onlyone | bool | .google.protobuf.MessageOptions | 64009 |  |
| populate | bool | .google.protobuf.MessageOptions | 64007 |  |
| protosizer | bool | .google.protobuf.MessageOptions | 64028 |  |
| sizer | bool | .google.protobuf.MessageOptions | 64020 |  |
| stable_marshaler | bool | .google.protobuf.MessageOptions | 64019 |  |
| stringer | bool | .google.protobuf.MessageOptions | 67008 |  |
| testgen | bool | .google.protobuf.MessageOptions | 64015 |  |
| typedecl | bool | .google.protobuf.MessageOptions | 64030 |  |
| unmarshaler | bool | .google.protobuf.MessageOptions | 64018 |  |
| unsafe_marshaler | bool | .google.protobuf.MessageOptions | 64023 |  |
| unsafe_unmarshaler | bool | .google.protobuf.MessageOptions | 64024 |  |
| verbose_equal | bool | .google.protobuf.MessageOptions | 64004 |  |
| gogoproto_import | bool | .google.protobuf.FileOptions | 63027 |  |

 

 



<a name="amino_amino-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## amino/amino.proto


 

 


<a name="amino_amino-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| dont_omitempty | bool | .google.protobuf.FieldOptions | 11110005 | dont_omitempty sets the field in the JSON object even if its value is empty, i.e. equal to the Golang zero value. To learn what the zero values are, see https://go.dev/ref/spec#The_zero_value.

Fields default to `omitempty`, which is the default behavior when this annotation is unset. When set to true, then the field value in the JSON object will be set, i.e. not `undefined`.

Example:

message Foo { string bar = 1; string baz = 2 [(amino.dont_omitempty) = true]; }

f := Foo{}; out := AminoJSONEncoder(&amp;f); out == {&#34;baz&#34;:&#34;&#34;} |
| encoding | string | .google.protobuf.FieldOptions | 11110003 | encoding describes the encoding format used by Amino for the given field. The field type is chosen to be a string for flexibility, but it should ideally be short and expected to be machine-readable, for example &#34;base64&#34; or &#34;utf8_json&#34;. We highly recommend to use underscores for word separation instead of spaces.

If left empty, then the Amino encoding is expected to be the same as the Protobuf one.

This annotation should not be confused with the `message_encoding` one which operates on the message level. |
| field_name | string | .google.protobuf.FieldOptions | 11110004 | field_name sets a different field name (i.e. key name) in the amino JSON object for the given field.

Example:

message Foo { string bar = 1 [(amino.field_name) = &#34;baz&#34;]; }

Then the Amino encoding of Foo will be: `{&#34;baz&#34;:&#34;some value&#34;}` |
| oneof_name | string | .google.protobuf.FieldOptions | 11110006 | oneof_name sets the type name for the given field oneof field. This is used by the Amino JSON encoder to encode the type of the oneof field, and must be the same string in the RegisterConcrete() method usage used to register the concrete type. |
| message_encoding | string | .google.protobuf.MessageOptions | 11110002 | encoding describes the encoding format used by Amino for the given message. The field type is chosen to be a string for flexibility, but it should ideally be short and expected to be machine-readable, for example &#34;base64&#34; or &#34;utf8_json&#34;. We highly recommend to use underscores for word separation instead of spaces.

If left empty, then the Amino encoding is expected to be the same as the Protobuf one.

This annotation should not be confused with the `encoding` one which operates on the field level. |
| name | string | .google.protobuf.MessageOptions | 11110001 | name is the string used when registering a concrete type into the Amino type registry, via the Amino codec&#39;s `RegisterConcrete()` method. This string MUST be at most 39 characters long, or else the message will be rejected by the Ledger hardware device. |

 

 



<a name="abstractaccount_v1_account-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/account.proto



<a name="abstractaccount-v1-AbstractAccount"></a>

### AbstractAccount
AbstractAccount is a smart contract that is capable of initiating txs.

This account type is similar to BaseAccount except for it doesn&#39;t have a
pubkey. If a pubkey is needed, it creates and returns a new NilPubKey.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the bech32-encoded address of the account&#39;s contract. |
| account_number | [uint64](#uint64) |  | account_number is the account&#39;s number assigned by the auth module. |
| sequence | [uint64](#uint64) |  | sequence is the account&#39;s current transaction sequence. |






<a name="abstractaccount-v1-NilPubKey"></a>

### NilPubKey
NilPubKey is the pubkey type of the AbstractAccount. Basically, it represents
a pubkey that doesn&#39;t exist.

The actual pubkey of an AbstractAccount (if it has one) is to be stored
inside the contract, not at the SDK level. Signature verification is also
done inside the contract, typically in the BeforeTx hook.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_bytes | [bytes](#bytes) |  | address_bytes is the raw address bytes of the account the pubkey stands in for. |





 

 

 

 



<a name="abstractaccount_v1_events-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/events.proto



<a name="abstractaccount-v1-EventAccountRegistered"></a>

### EventAccountRegistered
EventAccountRegistered is emitted when an AbstractAccount is registered.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  | creator is the address that requested the account registration. |
| code_id | [uint64](#uint64) |  | CodeID is the caller-selected implementation active after registration. |
| contract_addr | [string](#string) |  | contract_addr is the address of the newly instantiated account contract. |
| account_number | [uint64](#uint64) |  | account_number is the account number assigned to the new account. |
| address_derivation_hash | [bytes](#bytes) |  | address_derivation_hash is the fixed hash used to derive the account&#39;s address. |





 

 

 

 



<a name="abstractaccount_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/params.proto



<a name="abstractaccount-v1-Params"></a>

### Params
Params defines the parameters for the abstractaccount module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allow_all_code_ids | [bool](#bool) |  | AllowAllCodeIDs determines whether a Wasm code ID may be selected as the final implementation for a newly registered AbstractAccount or a top-level raw Wasm migration: - if set to true, any code ID can be used; - if set to false, only code IDs whitelisted in the AllowedCodeIDs list can be used. |
| allowed_code_ids | [uint64](#uint64) | repeated | AllowedCodeIDs is the whitelist for registration implementations and top-level raw Wasm migrations. This is not a wasmd-level policy. |
| max_gas_before | [uint64](#uint64) |  | MaxGasBefore is the maximum amount of gas that can be consumed by the contract call in the before_tx decorator.

Must be greater than zero. |
| max_gas_after | [uint64](#uint64) |  | MaxGasAfter is the maximum amount of gas that can be consumed by the contract call in the after_tx decorator.

Must be greater than zero. |
| registration_enabled | [bool](#bool) |  | RegistrationEnabled controls whether new abstract accounts may be registered. Governance can pause registration without changing the immutable address namespace or blocking address queries. |
| address_derivation_hash | [bytes](#bytes) |  | AddressDerivationHash is the immutable 32-byte namespace used only to derive predictable AbstractAccount addresses. The caller-selected code ID is instantiated directly and does not participate in address derivation. An empty value leaves registration unconfigured. |





 

 

 

 



<a name="abstractaccount_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/genesis.proto



<a name="abstractaccount-v1-AccountAddress"></a>

### AccountAddress
AccountAddress is an exported sender/salt registry entry.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the address that registered the account. |
| salt | [bytes](#bytes) |  | salt is the caller-chosen salt the address was derived with. |
| address | [string](#string) |  | address is the derived account address. |






<a name="abstractaccount-v1-GenesisState"></a>

### GenesisState
GenesisState defines the genesis state of the abstractaccount module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#abstractaccount-v1-Params) |  | params defines the module parameters. |
| next_account_id | [uint64](#uint64) |  | next_account_id is the identifier assigned to the next registered account. |
| account_addresses | [AccountAddress](#abstractaccount-v1-AccountAddress) | repeated | account_addresses is the exported sender/salt address registry. |





 

 

 

 



<a name="cosmos_query_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/query/v1/query.proto


 

 


<a name="cosmos_query_v1_query-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| module_query_safe | bool | .google.protobuf.MethodOptions | 11110001 | module_query_safe is set to true when the query is safe to be called from within the state machine, for example from another module&#39;s Keeper, via ADR-033 calls or from CosmWasm contracts. Concretely, it means that the query is: 1. deterministic: given a block height, returns the exact same response upon multiple calls; and doesn&#39;t introduce any state-machine-breaking changes across SDK patch version. 2. consumes gas correctly.

If you are a module developer and want to add this annotation to one of your own queries, please make sure that the corresponding query: 1. is deterministic and won&#39;t introduce state-machine-breaking changes without a coordinated upgrade path, 2. has its gas tracked, to avoid the attack vector where no gas is accounted for on potentially high-computation queries.

For queries that potentially consume a large amount of gas (for example those with pagination, if the pagination field is incorrectly set), we also recommend adding Protobuf comments to warn module developers consuming these queries.

When set to true, the query can safely be called |

 

 



<a name="google_api_http-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## google/api/http.proto



<a name="google-api-CustomHttpPattern"></a>

### CustomHttpPattern
A custom pattern is used for defining custom HTTP verb.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| kind | [string](#string) |  | The name of this custom HTTP verb. |
| path | [string](#string) |  | The path matched by this custom verb. |






<a name="google-api-Http"></a>

### Http
Defines the HTTP configuration for an API service. It contains a list of
[HttpRule][google.api.HttpRule], each specifying the mapping of an RPC method
to one or more HTTP REST API methods.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rules | [HttpRule](#google-api-HttpRule) | repeated | A list of HTTP configuration rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &#34;last one wins&#34; order. |
| fully_decode_reserved_expansion | [bool](#bool) |  | When set to true, URL path parameters will be fully URI-decoded except in cases of single segment matches in reserved expansion, where &#34;%2F&#34; will be left encoded.

The default behavior is to not decode RFC 6570 reserved characters in multi segment matches. |






<a name="google-api-HttpRule"></a>

### HttpRule
gRPC Transcoding

gRPC Transcoding is a feature for mapping between a gRPC method and one or
more HTTP REST endpoints. It allows developers to build a single API service
that supports both gRPC APIs and REST APIs. Many systems, including [Google
APIs](https://github.com/googleapis/googleapis),
[Cloud Endpoints](https://cloud.google.com/endpoints), [gRPC
Gateway](https://github.com/grpc-ecosystem/grpc-gateway),
and [Envoy](https://github.com/envoyproxy/envoy) proxy support this feature
and use it for large scale production services.

`HttpRule` defines the schema of the gRPC/REST mapping. The mapping specifies
how different portions of the gRPC request message are mapped to the URL
path, URL query parameters, and HTTP request body. It also controls how the
gRPC response message is mapped to the HTTP response body. `HttpRule` is
typically specified as an `google.api.http` annotation on the gRPC method.

Each mapping specifies a URL path template and an HTTP method. The path
template may refer to one or more fields in the gRPC request message, as long
as each field is a non-repeated field with a primitive (non-message) type.
The path template controls how fields of the request message are mapped to
the URL path.

Example:

    service Messaging {
      rpc GetMessage(GetMessageRequest) returns (Message) {
        option (google.api.http) = {
            get: &#34;/v1/{name=messages/*}&#34;
        };
      }
    }
    message GetMessageRequest {
      string name = 1; // Mapped to URL path.
    }
    message Message {
      string text = 1; // The resource content.
    }

This enables an HTTP REST to gRPC mapping as below:

- HTTP: `GET /v1/messages/123456`
- gRPC: `GetMessage(name: &#34;messages/123456&#34;)`

Any fields in the request message which are not bound by the path template
automatically become HTTP query parameters if there is no HTTP request body.
For example:

    service Messaging {
      rpc GetMessage(GetMessageRequest) returns (Message) {
        option (google.api.http) = {
            get:&#34;/v1/messages/{message_id}&#34;
        };
      }
    }
    message GetMessageRequest {
      message SubMessage {
        string subfield = 1;
      }
      string message_id = 1; // Mapped to URL path.
      int64 revision = 2;    // Mapped to URL query parameter `revision`.
      SubMessage sub = 3;    // Mapped to URL query parameter `sub.subfield`.
    }

This enables a HTTP JSON to RPC mapping as below:

- HTTP: `GET /v1/messages/123456?revision=2&amp;sub.subfield=foo`
- gRPC: `GetMessage(message_id: &#34;123456&#34; revision: 2 sub:
SubMessage(subfield: &#34;foo&#34;))`

Note that fields which are mapped to URL query parameters must have a
primitive type or a repeated primitive type or a non-repeated message type.
In the case of a repeated type, the parameter can be repeated in the URL
as `...?param=A&amp;param=B`. In the case of a message type, each field of the
message is mapped to a separate parameter, such as
`...?foo.a=A&amp;foo.b=B&amp;foo.c=C`.

For HTTP methods that allow a request body, the `body` field
specifies the mapping. Consider a REST update method on the
message resource collection:

    service Messaging {
      rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
        option (google.api.http) = {
          patch: &#34;/v1/messages/{message_id}&#34;
          body: &#34;message&#34;
        };
      }
    }
    message UpdateMessageRequest {
      string message_id = 1; // mapped to the URL
      Message message = 2;   // mapped to the body
    }

The following HTTP JSON to RPC mapping is enabled, where the
representation of the JSON in the request body is determined by
protos JSON encoding:

- HTTP: `PATCH /v1/messages/123456 { &#34;text&#34;: &#34;Hi!&#34; }`
- gRPC: `UpdateMessage(message_id: &#34;123456&#34; message { text: &#34;Hi!&#34; })`

The special name `*` can be used in the body mapping to define that
every field not bound by the path template should be mapped to the
request body.  This enables the following alternative definition of
the update method:

    service Messaging {
      rpc UpdateMessage(Message) returns (Message) {
        option (google.api.http) = {
          patch: &#34;/v1/messages/{message_id}&#34;
          body: &#34;*&#34;
        };
      }
    }
    message Message {
      string message_id = 1;
      string text = 2;
    }


The following HTTP JSON to RPC mapping is enabled:

- HTTP: `PATCH /v1/messages/123456 { &#34;text&#34;: &#34;Hi!&#34; }`
- gRPC: `UpdateMessage(message_id: &#34;123456&#34; text: &#34;Hi!&#34;)`

Note that when using `*` in the body mapping, it is not possible to
have HTTP parameters, as all fields not bound by the path end in
the body. This makes this option more rarely used in practice when
defining REST APIs. The common usage of `*` is in custom methods
which don&#39;t use the URL at all for transferring data.

It is possible to define multiple HTTP methods for one RPC by using
the `additional_bindings` option. Example:

    service Messaging {
      rpc GetMessage(GetMessageRequest) returns (Message) {
        option (google.api.http) = {
          get: &#34;/v1/messages/{message_id}&#34;
          additional_bindings {
            get: &#34;/v1/users/{user_id}/messages/{message_id}&#34;
          }
        };
      }
    }
    message GetMessageRequest {
      string message_id = 1;
      string user_id = 2;
    }

This enables the following two alternative HTTP JSON to RPC mappings:

- HTTP: `GET /v1/messages/123456`
- gRPC: `GetMessage(message_id: &#34;123456&#34;)`

- HTTP: `GET /v1/users/me/messages/123456`
- gRPC: `GetMessage(user_id: &#34;me&#34; message_id: &#34;123456&#34;)`

Rules for HTTP mapping

1. Leaf request fields (recursive expansion nested messages in the request
   message) are classified into three categories:
   - Fields referred by the path template. They are passed via the URL path.
   - Fields referred by the [HttpRule.body][google.api.HttpRule.body]. They
   are passed via the HTTP
     request body.
   - All other fields are passed via the URL query parameters, and the
     parameter name is the field path in the request message. A repeated
     field can be represented as multiple query parameters under the same
     name.
 2. If [HttpRule.body][google.api.HttpRule.body] is &#34;*&#34;, there is no URL
 query parameter, all fields
    are passed via URL path and HTTP request body.
 3. If [HttpRule.body][google.api.HttpRule.body] is omitted, there is no HTTP
 request body, all
    fields are passed via URL path and URL query parameters.

Path template syntax

    Template = &#34;/&#34; Segments [ Verb ] ;
    Segments = Segment { &#34;/&#34; Segment } ;
    Segment  = &#34;*&#34; | &#34;**&#34; | LITERAL | Variable ;
    Variable = &#34;{&#34; FieldPath [ &#34;=&#34; Segments ] &#34;}&#34; ;
    FieldPath = IDENT { &#34;.&#34; IDENT } ;
    Verb     = &#34;:&#34; LITERAL ;

The syntax `*` matches a single URL path segment. The syntax `**` matches
zero or more URL path segments, which must be the last part of the URL path
except the `Verb`.

The syntax `Variable` matches part of the URL path as specified by its
template. A variable template must not contain other variables. If a variable
matches a single path segment, its template may be omitted, e.g. `{var}`
is equivalent to `{var=*}`.

The syntax `LITERAL` matches literal text in the URL path. If the `LITERAL`
contains any reserved character, such characters should be percent-encoded
before the matching.

If a variable contains exactly one path segment, such as `&#34;{var}&#34;` or
`&#34;{var=*}&#34;`, when such a variable is expanded into a URL path on the client
side, all characters except `[-_.~0-9a-zA-Z]` are percent-encoded. The
server side does the reverse decoding. Such variables show up in the
[Discovery
Document](https://developers.google.com/discovery/v1/reference/apis) as
`{var}`.

If a variable contains multiple path segments, such as `&#34;{var=foo/*}&#34;`
or `&#34;{var=**}&#34;`, when such a variable is expanded into a URL path on the
client side, all characters except `[-_.~/0-9a-zA-Z]` are percent-encoded.
The server side does the reverse decoding, except &#34;%2F&#34; and &#34;%2f&#34; are left
unchanged. Such variables show up in the
[Discovery
Document](https://developers.google.com/discovery/v1/reference/apis) as
`{&#43;var}`.

Using gRPC API Service Configuration

gRPC API Service Configuration (service config) is a configuration language
for configuring a gRPC service to become a user-facing product. The
service config is simply the YAML representation of the `google.api.Service`
proto message.

As an alternative to annotating your proto file, you can configure gRPC
transcoding in your service config YAML files. You do this by specifying a
`HttpRule` that maps the gRPC method to a REST endpoint, achieving the same
effect as the proto annotation. This can be particularly useful if you
have a proto that is reused in multiple services. Note that any transcoding
specified in the service config will override any matching transcoding
configuration in the proto.

The following example selects a gRPC method and applies an `HttpRule` to it:

    http:
      rules:
        - selector: example.v1.Messaging.GetMessage
          get: /v1/messages/{message_id}/{sub.subfield}

Special notes

When gRPC Transcoding is used to map a gRPC to JSON REST endpoints, the
proto to JSON conversion must follow the [proto3
specification](https://developers.google.com/protocol-buffers/docs/proto3#json).

While the single segment variable follows the semantics of
[RFC 6570](https://tools.ietf.org/html/rfc6570) Section 3.2.2 Simple String
Expansion, the multi segment variable **does not** follow RFC 6570 Section
3.2.3 Reserved Expansion. The reason is that the Reserved Expansion
does not expand special characters like `?` and `#`, which would lead
to invalid URLs. As the result, gRPC Transcoding uses a custom encoding
for multi segment variables.

The path variables **must not** refer to any repeated or mapped field,
because client libraries are not capable of handling such variable expansion.

The path variables **must not** capture the leading &#34;/&#34; character. The reason
is that the most common use case &#34;{var}&#34; does not capture the leading &#34;/&#34;
character. For consistency, all path variables must share the same behavior.

Repeated message fields must not be mapped to URL query parameters, because
no client library can support such complicated mapping.

If an API needs to use a JSON array for request or response body, it can map
the request or response body to a repeated field. However, some gRPC
Transcoding implementations may not support this feature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| selector | [string](#string) |  | Selects a method to which this rule applies.

Refer to [selector][google.api.DocumentationRule.selector] for syntax details. |
| get | [string](#string) |  | Maps to HTTP GET. Used for listing and getting information about resources. |
| put | [string](#string) |  | Maps to HTTP PUT. Used for replacing a resource. |
| post | [string](#string) |  | Maps to HTTP POST. Used for creating a resource or performing an action. |
| delete | [string](#string) |  | Maps to HTTP DELETE. Used for deleting a resource. |
| patch | [string](#string) |  | Maps to HTTP PATCH. Used for updating a resource. |
| custom | [CustomHttpPattern](#google-api-CustomHttpPattern) |  | The custom pattern is used for specifying an HTTP method that is not included in the `pattern` field, such as HEAD, or &#34;*&#34; to leave the HTTP method unspecified for this rule. The wild-card rule is useful for services that provide content to Web (HTML) clients. |
| body | [string](#string) |  | The name of the request field whose value is mapped to the HTTP request body, or `*` for mapping all request fields not captured by the path pattern to the HTTP body, or omitted for not having any HTTP request body.

NOTE: the referred field must be present at the top-level of the request message type. |
| response_body | [string](#string) |  | Optional. The name of the response field whose value is mapped to the HTTP response body. When omitted, the entire response message will be used as the HTTP response body.

NOTE: The referred field must be present at the top-level of the response message type. |
| additional_bindings | [HttpRule](#google-api-HttpRule) | repeated | Additional HTTP bindings for the selector. Nested bindings must not contain an `additional_bindings` field themselves (that is, the nesting may only be one level deep). |





 

 

 

 



<a name="google_api_annotations-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## google/api/annotations.proto


 

 


<a name="google_api_annotations-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| http | HttpRule | .google.protobuf.MethodOptions | 72295728 | See `HttpRule`. |

 

 



<a name="abstractaccount_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/query.proto



<a name="abstractaccount-v1-QueryAccountAddressRequest"></a>

### QueryAccountAddressRequest
QueryAccountAddressRequest identifies an account namespace. Implementation
code IDs do not participate in this address lookup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the address registering the account. |
| salt | [bytes](#bytes) |  | salt is the caller-chosen salt the address is derived with. |






<a name="abstractaccount-v1-QueryAccountAddressResponse"></a>

### QueryAccountAddressResponse
QueryAccountAddressResponse contains the stable address and whether an
AbstractAccount is already registered for the namespace.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the stable address derived for the namespace. |
| registered | [bool](#bool) |  | registered reports whether an AbstractAccount already exists for the namespace. |






<a name="abstractaccount-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="abstractaccount-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#abstractaccount-v1-Params) |  | params holds the current module parameters. |





 

 

 


<a name="abstractaccount-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#abstractaccount-v1-QueryParamsRequest) | [QueryParamsResponse](#abstractaccount-v1-QueryParamsResponse) | Params queries the module&#39;s parameters. |
| AccountAddress | [QueryAccountAddressRequest](#abstractaccount-v1-QueryAccountAddressRequest) | [QueryAccountAddressResponse](#abstractaccount-v1-QueryAccountAddressResponse) | AccountAddress returns the registered address or predicts the stable address using the module-managed address derivation hash. |

 



<a name="cosmos_base_v1beta1_coin-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/v1beta1/coin.proto



<a name="cosmos-base-v1beta1-Coin"></a>

### Coin
Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| amount | [string](#string) |  |  |






<a name="cosmos-base-v1beta1-DecCoin"></a>

### DecCoin
DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is a Dec which implements the custom method
signatures required by gogoproto.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| amount | [string](#string) |  |  |






<a name="cosmos-base-v1beta1-DecProto"></a>

### DecProto
DecProto defines a Protobuf wrapper around a Dec object.
Deprecated: Prefer to use math.LegacyDec directly. It supports binary Marshal and Unmarshal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dec | [string](#string) |  |  |






<a name="cosmos-base-v1beta1-IntProto"></a>

### IntProto
IntProto defines a Protobuf wrapper around an Int object.
Deprecated: Prefer to use math.Int directly. It supports binary Marshal and Unmarshal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| int | [string](#string) |  |  |





 

 

 

 



<a name="cosmos_msg_v1_msg-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/msg/v1/msg.proto


 

 


<a name="cosmos_msg_v1_msg-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| signer | string | .google.protobuf.MessageOptions | 11110000 | signer must be used in cosmos messages in order to signal to external clients which fields in a given cosmos message must be filled with signer information (address). The field must be the protobuf name of the message field extended with this MessageOption. The field must either be of string kind, or of message kind in case the signer information is contained within a message inside the cosmos message. |
| service | bool | .google.protobuf.ServiceOptions | 11110000 | service indicates that the service is a Msg service and that requests must be transported via blockchain transactions rather than gRPC. Tooling can use this annotation to distinguish between Msg services and other types of services via reflection. |

 

 



<a name="abstractaccount_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## abstractaccount/v1/tx.proto



<a name="abstractaccount-v1-MsgRegisterAccount"></a>

### MsgRegisterAccount
MsgRegisterAccount is the message for registering a new AbstractAccount.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the actor who signs the message |
| code_id | [uint64](#uint64) |  | CodeID selects the allowed implementation installed after deterministic direct instantiation. It does not participate in address derivation. |
| msg | [bytes](#bytes) |  | Msg is the JSON-encoded instantiate message for the contract |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds are coins to be deposited to the contract on instantiation |
| salt | [bytes](#bytes) |  | Salt is an arbitrary value to be used in deriving the account address. Max 64 bytes. |






<a name="abstractaccount-v1-MsgRegisterAccountResponse"></a>

### MsgRegisterAccountResponse
MsgRegisterAccountResponse is the response message for MsgRegisterAccount.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the newly registered account contract. |
| data | [bytes](#bytes) |  | data is the raw response data from the contract instantiation. |






<a name="abstractaccount-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the message for updating the module parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the authority address requesting the update. |
| params | [Params](#abstractaccount-v1-Params) |  | params is the new module parameters to apply. |






<a name="abstractaccount-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse is the response message for MsgUpdateParams.





 

 

 


<a name="abstractaccount-v1-Msg"></a>

### Msg
Msg defines the abstractaccount Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#abstractaccount-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#abstractaccount-v1-MsgUpdateParamsResponse) | UpdateParams updates the module&#39;s parameters. Can only be called by the authority. |
| RegisterAccount | [MsgRegisterAccount](#abstractaccount-v1-MsgRegisterAccount) | [MsgRegisterAccountResponse](#abstractaccount-v1-MsgRegisterAccountResponse) | RegisterAccount registers a new AbstractAccount. |

 



<a name="cosmos_app_v1alpha1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/module.proto



<a name="cosmos-app-v1alpha1-MigrateFromInfo"></a>

### MigrateFromInfo
MigrateFromInfo is information on a module version that a newer module
can migrate from.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [string](#string) |  | module is the fully-qualified protobuf name of the module config object for the previous module version, ex: &#34;cosmos.group.module.v1.Module&#34;. |






<a name="cosmos-app-v1alpha1-ModuleDescriptor"></a>

### ModuleDescriptor
ModuleDescriptor describes an app module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| go_import | [string](#string) |  | go_import names the package that should be imported by an app to load the module in the runtime module registry. It is required to make debugging of configuration errors easier for users. |
| use_package | [PackageReference](#cosmos-app-v1alpha1-PackageReference) | repeated | use_package refers to a protobuf package that this module uses and exposes to the world. In an app, only one module should &#34;use&#34; or own a single protobuf package. It is assumed that the module uses all of the .proto files in a single package. |
| can_migrate_from | [MigrateFromInfo](#cosmos-app-v1alpha1-MigrateFromInfo) | repeated | can_migrate_from defines which module versions this module can migrate state from. The framework will check that one module version is able to migrate from a previous module version before attempting to update its config. It is assumed that modules can transitively migrate from earlier versions. For instance if v3 declares it can migrate from v2, and v2 declares it can migrate from v1, the framework knows how to migrate from v1 to v3, assuming all 3 module versions are registered at runtime. |






<a name="cosmos-app-v1alpha1-PackageReference"></a>

### PackageReference
PackageReference is a reference to a protobuf package used by a module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the fully-qualified name of the package. |
| revision | [uint32](#uint32) |  | revision is the optional revision of the package that is being used. Protobuf packages used in Cosmos should generally have a major version as the last part of the package name, ex. foo.bar.baz.v1. The revision of a package can be thought of as the minor version of a package which has additional backwards compatible definitions that weren&#39;t present in a previous version.

A package should indicate its revision with a source code comment above the package declaration in one of its files containing the text &#34;Revision N&#34; where N is an integer revision. All packages start at revision 0 the first time they are released in a module.

When a new version of a module is released and items are added to existing .proto files, these definitions should contain comments of the form &#34;Since: Revision N&#34; where N is an integer revision.

When the module runtime starts up, it will check the pinned proto image and panic if there are runtime protobuf definitions that are not in the pinned descriptor which do not have a &#34;Since Revision N&#34; comment or have a &#34;Since Revision N&#34; comment where N is &lt;= to the revision specified here. This indicates that the protobuf files have been updated, but the pinned file descriptor hasn&#39;t.

If there are items in the pinned file descriptor with a revision greater than the value indicated here, this will also cause a panic as it may mean that the pinned descriptor for a legacy module has been improperly updated or that there is some other versioning discrepancy. Runtime protobuf definitions will also be checked for compatibility with pinned file descriptors to make sure there are no incompatible changes.

This behavior ensures that: * pinned proto images are up-to-date * protobuf files are carefully annotated with revision comments which are important good client UX * protobuf files are changed in backwards and forwards compatible ways |





 

 


<a name="cosmos_app_v1alpha1_module-proto-extensions"></a>

### File-level Extensions
| Extension | Type | Base | Number | Description |
| --------- | ---- | ---- | ------ | ----------- |
| module | ModuleDescriptor | .google.protobuf.MessageOptions | 57193479 | module indicates that this proto type is a config object for an app module and optionally provides other descriptive information about the module. It is recommended that a new module config object and go module is versioned for every state machine breaking version of a module. The recommended pattern for doing this is to put module config objects in a separate proto package from the API they expose. Ex: the cosmos.group.v1 API would be exposed by module configs cosmos.group.module.v1, cosmos.group.module.v2, etc. |

 

 



<a name="cosmos_app_runtime_v1alpha1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/runtime/v1alpha1/module.proto



<a name="cosmos-app-runtime-v1alpha1-Module"></a>

### Module
Module is the config object for the runtime module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_name | [string](#string) |  | app_name is the name of the app. |
| begin_blockers | [string](#string) | repeated | begin_blockers specifies the module names of begin blockers to call in the order in which they should be called. If this is left empty no begin blocker will be registered. |
| end_blockers | [string](#string) | repeated | end_blockers specifies the module names of the end blockers to call in the order in which they should be called. If this is left empty no end blocker will be registered. |
| init_genesis | [string](#string) | repeated | init_genesis specifies the module names of init genesis functions to call in the order in which they should be called. If this is left empty no init genesis function will be registered. |
| export_genesis | [string](#string) | repeated | export_genesis specifies the order in which to export module genesis data. If this is left empty, the init_genesis order will be used for export genesis if it is specified. |
| override_store_keys | [StoreKeyConfig](#cosmos-app-runtime-v1alpha1-StoreKeyConfig) | repeated | override_store_keys is an optional list of overrides for the module store keys to be used in keeper construction. |
| skip_store_keys | [string](#string) | repeated | skip_store_keys is an optional list of store keys to skip when constructing the module&#39;s keeper. This is useful when a module does not have a store key. NOTE: the provided environment variable will have a fake store service. |
| order_migrations | [string](#string) | repeated | order_migrations defines the order in which module migrations are performed. If this is left empty, it uses the default migration order. https://pkg.go.dev/github.com/cosmos/cosmos-sdk/types/module#DefaultMigrationsOrder |
| precommiters | [string](#string) | repeated | precommiters specifies the module names of the precommiters to call in the order in which they should be called. If this is left empty no precommit function will be registered. |
| prepare_check_staters | [string](#string) | repeated | prepare_check_staters specifies the module names of the prepare_check_staters to call in the order in which they should be called. If this is left empty no preparecheckstate function will be registered. |
| pre_blockers | [string](#string) | repeated | pre_blockers specifies the module names of pre blockers to call in the order in which they should be called. If this is left empty no pre blocker will be registered. |






<a name="cosmos-app-runtime-v1alpha1-StoreKeyConfig"></a>

### StoreKeyConfig
StoreKeyConfig may be supplied to override the default module store key, which
is the module name.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | name of the module to override the store key of |
| kv_store_key | [string](#string) |  | the kv store key to use instead of the module name. |





 

 

 

 



<a name="cosmos_app_v1alpha1_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/config.proto



<a name="cosmos-app-v1alpha1-Config"></a>

### Config
Config represents the configuration for a Cosmos SDK ABCI app.
It is intended that all state machine logic including the version of
baseapp and tx handlers (and possibly even Tendermint) that an app needs
can be described in a config object. For compatibility, the framework should
allow a mixture of declarative and imperative app wiring, however, apps
that strive for the maximum ease of maintainability should be able to describe
their state machine with a config object alone.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| modules | [ModuleConfig](#cosmos-app-v1alpha1-ModuleConfig) | repeated | modules are the module configurations for the app. |
| golang_bindings | [GolangBinding](#cosmos-app-v1alpha1-GolangBinding) | repeated | golang_bindings specifies explicit interface to implementation type bindings which depinject uses to resolve interface inputs to provider functions. The scope of this field&#39;s configuration is global (not module specific). |






<a name="cosmos-app-v1alpha1-GolangBinding"></a>

### GolangBinding
GolangBinding is an explicit interface type to implementing type binding for dependency injection.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_type | [string](#string) |  | interface_type is the interface type which will be bound to a specific implementation type |
| implementation | [string](#string) |  | implementation is the implementing type which will be supplied when an input of type interface is requested |






<a name="cosmos-app-v1alpha1-ModuleConfig"></a>

### ModuleConfig
ModuleConfig is a module configuration for an app.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the unique name of the module within the app. It should be a name that persists between different versions of a module so that modules can be smoothly upgraded to new versions.

For example, for the module cosmos.bank.module.v1.Module, we may chose to simply name the module &#34;bank&#34; in the app. When we upgrade to cosmos.bank.module.v2.Module, the app-specific name &#34;bank&#34; stays the same and the framework knows that the v2 module should receive all the same state that the v1 module had. Note: modules should provide info on which versions they can migrate from in the ModuleDescriptor.can_migrate_from field. |
| config | [google.protobuf.Any](#google-protobuf-Any) |  | config is the config object for the module. Module config messages should define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension. |
| golang_bindings | [GolangBinding](#cosmos-app-v1alpha1-GolangBinding) | repeated | golang_bindings specifies explicit interface to implementation type bindings which depinject uses to resolve interface inputs to provider functions. The scope of this field&#39;s configuration is module specific. |





 

 

 

 



<a name="cosmos_app_v1alpha1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/app/v1alpha1/query.proto



<a name="cosmos-app-v1alpha1-QueryConfigRequest"></a>

### QueryConfigRequest
QueryConfigRequest is the Query/Config request type.






<a name="cosmos-app-v1alpha1-QueryConfigResponse"></a>

### QueryConfigResponse
QueryConfigResponse is the Query/Config response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [Config](#cosmos-app-v1alpha1-Config) |  | config is the current app config. |





 

 

 


<a name="cosmos-app-v1alpha1-Query"></a>

### Query
Query is the app module query service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Config | [QueryConfigRequest](#cosmos-app-v1alpha1-QueryConfigRequest) | [QueryConfigResponse](#cosmos-app-v1alpha1-QueryConfigResponse) | Config returns the current app config. |

 



<a name="cosmos_auth_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/module/v1/module.proto



<a name="cosmos-auth-module-v1-Module"></a>

### Module
Module is the config object for the auth module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bech32_prefix | [string](#string) |  | bech32_prefix is the bech32 account prefix for the app. |
| module_account_permissions | [ModuleAccountPermission](#cosmos-auth-module-v1-ModuleAccountPermission) | repeated | module_account_permissions are module account permissions. |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |
| enable_unordered_transactions | [bool](#bool) |  | enable_unordered_transactions determines whether unordered transactions should be supported or not. When true, unordered transactions will be validated and processed. When false, unordered transactions will be rejected. |






<a name="cosmos-auth-module-v1-ModuleAccountPermission"></a>

### ModuleAccountPermission
ModuleAccountPermission represents permissions for a module account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [string](#string) |  | account is the name of the module. |
| permissions | [string](#string) | repeated | permissions are the permissions this module has. Currently recognized values are minter, burner and staking. |





 

 

 

 



<a name="cosmos_auth_v1beta1_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/auth.proto



<a name="cosmos-auth-v1beta1-BaseAccount"></a>

### BaseAccount
BaseAccount defines a base account type. It contains all the necessary fields
for basic account functionality. Any custom account type should extend this
type for additional functionality (e.g. vesting).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| account_number | [uint64](#uint64) |  |  |
| sequence | [uint64](#uint64) |  |  |






<a name="cosmos-auth-v1beta1-ModuleAccount"></a>

### ModuleAccount
ModuleAccount defines an account for modules that holds coins on a pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| name | [string](#string) |  |  |
| permissions | [string](#string) | repeated |  |






<a name="cosmos-auth-v1beta1-ModuleCredential"></a>

### ModuleCredential
ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | module_name is the name of the module used for address derivation (passed into address.Module). |
| derivation_keys | [bytes](#bytes) | repeated | derivation_keys is for deriving a module account address (passed into address.Module) adding more keys creates sub-account addresses (passed into address.Derive) |






<a name="cosmos-auth-v1beta1-Params"></a>

### Params
Params defines the parameters for the auth module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_memo_characters | [uint64](#uint64) |  |  |
| tx_sig_limit | [uint64](#uint64) |  |  |
| tx_size_cost_per_byte | [uint64](#uint64) |  |  |
| sig_verify_cost_ed25519 | [uint64](#uint64) |  |  |
| sig_verify_cost_secp256k1 | [uint64](#uint64) |  |  |
| sig_verify_cost_mldsa65 | [uint64](#uint64) |  |  |





 

 

 

 



<a name="cosmos_auth_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/genesis.proto



<a name="cosmos-auth-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the auth module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines all the parameters of the module. |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated | accounts are the accounts present at genesis. |





 

 

 

 



<a name="cosmos_base_query_v1beta1_pagination-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/query/v1beta1/pagination.proto



<a name="cosmos-base-query-v1beta1-PageRequest"></a>

### PageRequest
PageRequest is to be embedded in gRPC request messages for efficient
pagination. Ex:

 message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | key is a value returned in PageResponse.next_key to begin querying the next page most efficiently. Only one of offset or key should be set. |
| offset | [uint64](#uint64) |  | offset is a numeric offset that can be used when key is unavailable. It is less efficient than using key. Only one of offset or key should be set. |
| limit | [uint64](#uint64) |  | limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| count_total | [bool](#bool) |  | count_total is set to true to indicate that the result set should include a count of the total number of items available for pagination in UIs. count_total is only respected when offset is used. It is ignored when key is set. |
| reverse | [bool](#bool) |  | reverse is set to true if results are to be returned in the descending order. |






<a name="cosmos-base-query-v1beta1-PageResponse"></a>

### PageResponse
PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_key | [bytes](#bytes) |  | next_key is the key to be passed to PageRequest.key to query the next page most efficiently. It will be empty if there are no more results. |
| total | [uint64](#uint64) |  | total is total number of results available if PageRequest.count_total was set, its value is undefined otherwise |





 

 

 

 



<a name="cosmos_auth_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/query.proto



<a name="cosmos-auth-v1beta1-AddressBytesToStringRequest"></a>

### AddressBytesToStringRequest
AddressBytesToStringRequest is the request type for AddressString rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_bytes | [bytes](#bytes) |  |  |






<a name="cosmos-auth-v1beta1-AddressBytesToStringResponse"></a>

### AddressBytesToStringResponse
AddressBytesToStringResponse is the response type for AddressString rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_string | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-AddressStringToBytesRequest"></a>

### AddressStringToBytesRequest
AddressStringToBytesRequest is the request type for AccountBytes rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_string | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-AddressStringToBytesResponse"></a>

### AddressStringToBytesResponse
AddressStringToBytesResponse is the response type for AddressBytes rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_bytes | [bytes](#bytes) |  |  |






<a name="cosmos-auth-v1beta1-Bech32PrefixRequest"></a>

### Bech32PrefixRequest
Bech32PrefixRequest is the request type for Bech32Prefix rpc method.






<a name="cosmos-auth-v1beta1-Bech32PrefixResponse"></a>

### Bech32PrefixResponse
Bech32PrefixResponse is the response type for Bech32Prefix rpc method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bech32_prefix | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryAccountAddressByIDRequest"></a>

### QueryAccountAddressByIDRequest
QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [int64](#int64) |  | **Deprecated.** Deprecated, use account_id instead

id is the account number of the address to be queried. This field should have been an uint64 (like all account numbers), and will be updated to uint64 in a future version of the auth query. |
| account_id | [uint64](#uint64) |  | account_id is the account number of the address to be queried. |






<a name="cosmos-auth-v1beta1-QueryAccountAddressByIDResponse"></a>

### QueryAccountAddressByIDResponse
QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_address | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryAccountInfoRequest"></a>

### QueryAccountInfoRequest
QueryAccountInfoRequest is the Query/AccountInfo request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the account address string. |






<a name="cosmos-auth-v1beta1-QueryAccountInfoResponse"></a>

### QueryAccountInfoResponse
QueryAccountInfoResponse is the Query/AccountInfo response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  | info is the account info which is represented by BaseAccount. |






<a name="cosmos-auth-v1beta1-QueryAccountRequest"></a>

### QueryAccountRequest
QueryAccountRequest is the request type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address defines the address to query for. |






<a name="cosmos-auth-v1beta1-QueryAccountResponse"></a>

### QueryAccountResponse
QueryAccountResponse is the response type for the Query/Account RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [google.protobuf.Any](#google-protobuf-Any) |  | account defines the account of the corresponding address. |






<a name="cosmos-auth-v1beta1-QueryAccountsRequest"></a>

### QueryAccountsRequest
QueryAccountsRequest is the request type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-auth-v1beta1-QueryAccountsResponse"></a>

### QueryAccountsResponse
QueryAccountsResponse is the response type for the Query/Accounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated | accounts are the existing accounts |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-auth-v1beta1-QueryModuleAccountByNameRequest"></a>

### QueryModuleAccountByNameRequest
QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |






<a name="cosmos-auth-v1beta1-QueryModuleAccountByNameResponse"></a>

### QueryModuleAccountByNameResponse
QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="cosmos-auth-v1beta1-QueryModuleAccountsRequest"></a>

### QueryModuleAccountsRequest
QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.






<a name="cosmos-auth-v1beta1-QueryModuleAccountsResponse"></a>

### QueryModuleAccountsResponse
QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accounts | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |






<a name="cosmos-auth-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-auth-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="cosmos-auth-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Accounts | [QueryAccountsRequest](#cosmos-auth-v1beta1-QueryAccountsRequest) | [QueryAccountsResponse](#cosmos-auth-v1beta1-QueryAccountsResponse) | Accounts returns all the existing accounts.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Account | [QueryAccountRequest](#cosmos-auth-v1beta1-QueryAccountRequest) | [QueryAccountResponse](#cosmos-auth-v1beta1-QueryAccountResponse) | Account returns account details based on address. |
| AccountAddressByID | [QueryAccountAddressByIDRequest](#cosmos-auth-v1beta1-QueryAccountAddressByIDRequest) | [QueryAccountAddressByIDResponse](#cosmos-auth-v1beta1-QueryAccountAddressByIDResponse) | AccountAddressByID returns account address based on account number. |
| Params | [QueryParamsRequest](#cosmos-auth-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-auth-v1beta1-QueryParamsResponse) | Params queries all parameters. |
| ModuleAccounts | [QueryModuleAccountsRequest](#cosmos-auth-v1beta1-QueryModuleAccountsRequest) | [QueryModuleAccountsResponse](#cosmos-auth-v1beta1-QueryModuleAccountsResponse) | ModuleAccounts returns all the existing module accounts. |
| ModuleAccountByName | [QueryModuleAccountByNameRequest](#cosmos-auth-v1beta1-QueryModuleAccountByNameRequest) | [QueryModuleAccountByNameResponse](#cosmos-auth-v1beta1-QueryModuleAccountByNameResponse) | ModuleAccountByName returns the module account info by module name |
| Bech32Prefix | [Bech32PrefixRequest](#cosmos-auth-v1beta1-Bech32PrefixRequest) | [Bech32PrefixResponse](#cosmos-auth-v1beta1-Bech32PrefixResponse) | Bech32Prefix queries bech32Prefix |
| AddressBytesToString | [AddressBytesToStringRequest](#cosmos-auth-v1beta1-AddressBytesToStringRequest) | [AddressBytesToStringResponse](#cosmos-auth-v1beta1-AddressBytesToStringResponse) | AddressBytesToString converts Account Address bytes to string |
| AddressStringToBytes | [AddressStringToBytesRequest](#cosmos-auth-v1beta1-AddressStringToBytesRequest) | [AddressStringToBytesResponse](#cosmos-auth-v1beta1-AddressStringToBytesResponse) | AddressStringToBytes converts Address string to bytes |
| AccountInfo | [QueryAccountInfoRequest](#cosmos-auth-v1beta1-QueryAccountInfoRequest) | [QueryAccountInfoResponse](#cosmos-auth-v1beta1-QueryAccountInfoResponse) | AccountInfo queries account info which is common to all account types. |

 



<a name="cosmos_auth_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/auth/v1beta1/tx.proto



<a name="cosmos-auth-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-auth-v1beta1-Params) |  | params defines the x/auth parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-auth-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-auth-v1beta1-Msg"></a>

### Msg
Msg defines the x/auth Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-auth-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-auth-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a (governance) operation for updating the x/auth module parameters. The authority defaults to the x/gov module account. |

 



<a name="cosmos_authz_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/module/v1/module.proto



<a name="cosmos-authz-module-v1-Module"></a>

### Module
Module is the config object of the authz module.





 

 

 

 



<a name="cosmos_authz_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/authz.proto



<a name="cosmos-authz-v1beta1-GenericAuthorization"></a>

### GenericAuthorization
GenericAuthorization gives the grantee unrestricted permissions to execute
the provided method on behalf of the granter&#39;s account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg | [string](#string) |  | Msg, identified by it&#39;s type URL, to grant unrestricted permissions to execute |






<a name="cosmos-authz-v1beta1-Grant"></a>

### Grant
Grant gives permissions to execute
the provide method with expiration time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authorization | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | time when the grant will expire and will be pruned. If null, then the grant doesn&#39;t have a time expiration (other conditions in `authorization` may apply to invalidate the grant) |






<a name="cosmos-authz-v1beta1-GrantAuthorization"></a>

### GrantAuthorization
GrantAuthorization extends a grant with both the addresses of the grantee and granter.
It is used in genesis.proto and query.proto


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| authorization | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-authz-v1beta1-GrantQueueItem"></a>

### GrantQueueItem
GrantQueueItem contains the list of TypeURL of a sdk.Msg.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_urls | [string](#string) | repeated | msg_type_urls contains the list of TypeURL of a sdk.Msg. |





 

 

 

 



<a name="cosmos_authz_v1beta1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/event.proto



<a name="cosmos-authz-v1beta1-EventGrant"></a>

### EventGrant
EventGrant is emitted on Msg/Grant


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | Msg type URL for which an authorization is granted |
| granter | [string](#string) |  | Granter account address |
| grantee | [string](#string) |  | Grantee account address |






<a name="cosmos-authz-v1beta1-EventRevoke"></a>

### EventRevoke
EventRevoke is emitted on Msg/Revoke


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | Msg type URL for which an authorization is revoked |
| granter | [string](#string) |  | Granter account address |
| grantee | [string](#string) |  | Grantee account address |





 

 

 

 



<a name="cosmos_authz_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/genesis.proto



<a name="cosmos-authz-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the authz module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authorization | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated |  |





 

 

 

 



<a name="cosmos_authz_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/query.proto



<a name="cosmos-authz-v1beta1-QueryGranteeGrantsRequest"></a>

### QueryGranteeGrantsRequest
QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGranteeGrantsResponse"></a>

### QueryGranteeGrantsResponse
QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted to the grantee. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |






<a name="cosmos-authz-v1beta1-QueryGranterGrantsRequest"></a>

### QueryGranterGrantsRequest
QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGranterGrantsResponse"></a>

### QueryGranterGrantsResponse
QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |






<a name="cosmos-authz-v1beta1-QueryGrantsRequest"></a>

### QueryGrantsRequest
QueryGrantsRequest is the request type for the Query/Grants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| msg_type_url | [string](#string) |  | Optional, msg_type_url, when set, will query only grants matching given msg type. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-authz-v1beta1-QueryGrantsResponse"></a>

### QueryGrantsResponse
QueryGrantsResponse is the response type for the Query/Authorizations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [Grant](#cosmos-authz-v1beta1-Grant) | repeated | authorizations is a list of grants granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |





 

 

 


<a name="cosmos-authz-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Grants | [QueryGrantsRequest](#cosmos-authz-v1beta1-QueryGrantsRequest) | [QueryGrantsResponse](#cosmos-authz-v1beta1-QueryGrantsResponse) | Returns list of `Authorization`, granted to the grantee by the granter. |
| GranterGrants | [QueryGranterGrantsRequest](#cosmos-authz-v1beta1-QueryGranterGrantsRequest) | [QueryGranterGrantsResponse](#cosmos-authz-v1beta1-QueryGranterGrantsResponse) | GranterGrants returns list of `GrantAuthorization`, granted by granter. |
| GranteeGrants | [QueryGranteeGrantsRequest](#cosmos-authz-v1beta1-QueryGranteeGrantsRequest) | [QueryGranteeGrantsResponse](#cosmos-authz-v1beta1-QueryGranteeGrantsResponse) | GranteeGrants returns a list of `GrantAuthorization` by grantee. |

 



<a name="cosmos_authz_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/authz/v1beta1/tx.proto



<a name="cosmos-authz-v1beta1-MsgExec"></a>

### MsgExec
MsgExec attempts to execute the provided messages using
authorizations granted to the grantee. Each message should have only
one signer corresponding to the granter of the authorization.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| msgs | [google.protobuf.Any](#google-protobuf-Any) | repeated | Execute Msg. The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg)) triple and validate it. |






<a name="cosmos-authz-v1beta1-MsgExecResponse"></a>

### MsgExecResponse
MsgExecResponse defines the Msg/MsgExecResponse response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| results | [bytes](#bytes) | repeated |  |






<a name="cosmos-authz-v1beta1-MsgGrant"></a>

### MsgGrant
MsgGrant is a request type for Grant method. It declares authorization to the grantee
on behalf of the granter with the provided expiration time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| grant | [Grant](#cosmos-authz-v1beta1-Grant) |  |  |






<a name="cosmos-authz-v1beta1-MsgGrantResponse"></a>

### MsgGrantResponse
MsgGrantResponse defines the Msg/MsgGrant response type.






<a name="cosmos-authz-v1beta1-MsgRevoke"></a>

### MsgRevoke
MsgRevoke revokes any authorization with the provided sdk.Msg type on the
granter&#39;s account with that has been granted to the grantee.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| grantee | [string](#string) |  |  |
| msg_type_url | [string](#string) |  |  |






<a name="cosmos-authz-v1beta1-MsgRevokeResponse"></a>

### MsgRevokeResponse
MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.





 

 

 


<a name="cosmos-authz-v1beta1-Msg"></a>

### Msg
Msg defines the authz Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Grant | [MsgGrant](#cosmos-authz-v1beta1-MsgGrant) | [MsgGrantResponse](#cosmos-authz-v1beta1-MsgGrantResponse) | Grant grants the provided authorization to the grantee on the granter&#39;s account with the provided expiration time. If there is already a grant for the given (granter, grantee, Authorization) triple, then the grant will be overwritten. |
| Exec | [MsgExec](#cosmos-authz-v1beta1-MsgExec) | [MsgExecResponse](#cosmos-authz-v1beta1-MsgExecResponse) | Exec attempts to execute the provided messages using authorizations granted to the grantee. Each message should have only one signer corresponding to the granter of the authorization. |
| Revoke | [MsgRevoke](#cosmos-authz-v1beta1-MsgRevoke) | [MsgRevokeResponse](#cosmos-authz-v1beta1-MsgRevokeResponse) | Revoke revokes any authorization corresponding to the provided method name on the granter&#39;s account that has been granted to the grantee. |

 



<a name="cosmos_autocli_v1_options-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/autocli/v1/options.proto



<a name="cosmos-autocli-v1-FlagOptions"></a>

### FlagOptions
FlagOptions are options for flags generated from rpc request fields.
By default, all request fields are configured as flags based on the
kebab-case name of the field. Fields can be turned into positional arguments
instead by using RpcCommandOptions.positional_args.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is an alternate name to use for the field flag. |
| shorthand | [string](#string) |  | shorthand is a one-letter abbreviated flag. |
| usage | [string](#string) |  | usage is the help message. |
| default_value | [string](#string) |  | default_value is the default value as text. |
| deprecated | [string](#string) |  | deprecated is the usage text to show if this flag is deprecated. |
| shorthand_deprecated | [string](#string) |  | shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. |
| hidden | [bool](#bool) |  | hidden hides the flag from help/usage text |






<a name="cosmos-autocli-v1-ModuleOptions"></a>

### ModuleOptions
ModuleOptions describes the CLI options for a Cosmos SDK module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  | tx describes the tx commands for the module. |
| query | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  | query describes the queries commands for the module. |






<a name="cosmos-autocli-v1-PositionalArgDescriptor"></a>

### PositionalArgDescriptor
PositionalArgDescriptor describes a positional argument.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proto_field | [string](#string) |  | proto_field specifies the proto field to use as the positional arg. Any fields used as positional args will not have a flag generated. |
| varargs | [bool](#bool) |  | varargs makes a positional parameter a varargs parameter. This can only be applied to last positional parameter and the proto_field must a repeated field. Note: It is mutually exclusive with optional. |
| optional | [bool](#bool) |  | optional makes the last positional parameter optional. Note: It is mutually exclusive with varargs. |






<a name="cosmos-autocli-v1-RpcCommandOptions"></a>

### RpcCommandOptions
RpcCommandOptions specifies options for commands generated from protobuf
rpc methods.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rpc_method | [string](#string) |  | rpc_method is short name of the protobuf rpc method that this command is generated from. |
| use | [string](#string) |  | use is the one-line usage method. It also allows specifying an alternate name for the command as the first word of the usage text.

By default the name of an rpc command is the kebab-case short name of the rpc method. |
| long | [string](#string) |  | long is the long message shown in the &#39;help &lt;this-command&gt;&#39; output. |
| short | [string](#string) |  | short is the short description shown in the &#39;help&#39; output. |
| example | [string](#string) |  | example is examples of how to use the command. |
| alias | [string](#string) | repeated | alias is an array of aliases that can be used instead of the first word in Use. |
| suggest_for | [string](#string) | repeated | suggest_for is an array of command names for which this command will be suggested - similar to aliases but only suggests. |
| deprecated | [string](#string) |  | deprecated defines, if this command is deprecated and should print this string when used. |
| version | [string](#string) |  | version defines the version for this command. If this value is non-empty and the command does not define a &#34;version&#34; flag, a &#34;version&#34; boolean flag will be added to the command and, if specified, will print content of the &#34;Version&#34; variable. A shorthand &#34;v&#34; flag will also be added if the command does not define one. |
| flag_options | [RpcCommandOptions.FlagOptionsEntry](#cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry) | repeated | flag_options are options for flags generated from rpc request fields. By default all request fields are configured as flags. They can also be configured as positional args instead using positional_args. |
| positional_args | [PositionalArgDescriptor](#cosmos-autocli-v1-PositionalArgDescriptor) | repeated | positional_args specifies positional arguments for the command. |
| skip | [bool](#bool) |  | skip specifies whether to skip this rpc method when generating commands. |
| gov_proposal | [bool](#bool) |  | gov_proposal specifies whether autocli should generate a gov proposal transaction for this rpc method. Normally autocli generates a transaction containing the message and broadcast it. However, when true, autocli generates a proposal transaction containing the message and broadcast it. This option is ineffective for query commands. |






<a name="cosmos-autocli-v1-RpcCommandOptions-FlagOptionsEntry"></a>

### RpcCommandOptions.FlagOptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [FlagOptions](#cosmos-autocli-v1-FlagOptions) |  |  |






<a name="cosmos-autocli-v1-ServiceCommandDescriptor"></a>

### ServiceCommandDescriptor
ServiceCommandDescriptor describes a CLI command based on a protobuf service.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| service | [string](#string) |  | service is the fully qualified name of the protobuf service to build the command from. It can be left empty if sub_commands are used instead which may be the case if a module provides multiple tx and/or query services. |
| rpc_command_options | [RpcCommandOptions](#cosmos-autocli-v1-RpcCommandOptions) | repeated | rpc_command_options are options for commands generated from rpc methods. If no options are specified for a given rpc method on the service, a command will be generated for that method with the default options. |
| sub_commands | [ServiceCommandDescriptor.SubCommandsEntry](#cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry) | repeated | sub_commands is a map of optional sub-commands for this command based on different protobuf services. The map key is used as the name of the sub-command. |
| enhance_custom_command | [bool](#bool) |  | enhance_custom_commands specifies whether to skip the service when generating commands, if a custom command already exists, or enhance the existing command. If set to true, the custom command will be enhanced with the services from gRPC. otherwise when a custom command exists, no commands will be generated for the service. |
| short | [string](#string) |  | short is an optional parameter used to override the short description of the auto generated command. |






<a name="cosmos-autocli-v1-ServiceCommandDescriptor-SubCommandsEntry"></a>

### ServiceCommandDescriptor.SubCommandsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ServiceCommandDescriptor](#cosmos-autocli-v1-ServiceCommandDescriptor) |  |  |





 

 

 

 



<a name="cosmos_autocli_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/autocli/v1/query.proto



<a name="cosmos-autocli-v1-AppOptionsRequest"></a>

### AppOptionsRequest
AppOptionsRequest is the RemoteInfoService/AppOptions request type.






<a name="cosmos-autocli-v1-AppOptionsResponse"></a>

### AppOptionsResponse
AppOptionsResponse is the RemoteInfoService/AppOptions response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_options | [AppOptionsResponse.ModuleOptionsEntry](#cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry) | repeated | module_options is a map of module name to autocli module options. |






<a name="cosmos-autocli-v1-AppOptionsResponse-ModuleOptionsEntry"></a>

### AppOptionsResponse.ModuleOptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [ModuleOptions](#cosmos-autocli-v1-ModuleOptions) |  |  |





 

 

 


<a name="cosmos-autocli-v1-Query"></a>

### Query
RemoteInfoService provides clients with the information they need
to build dynamically CLI clients for remote chains.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AppOptions | [AppOptionsRequest](#cosmos-autocli-v1-AppOptionsRequest) | [AppOptionsResponse](#cosmos-autocli-v1-AppOptionsResponse) | AppOptions returns the autocli options for all of the modules in an app. |

 



<a name="cosmos_bank_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/module/v1/module.proto



<a name="cosmos-bank-module-v1-Module"></a>

### Module
Module is the config object of the bank module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| blocked_module_accounts_override | [string](#string) | repeated | blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving funds. If left empty it defaults to the list of account names supplied in the auth module configuration as module_account_permissions |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |
| restrictions_order | [string](#string) | repeated | restrictions_order specifies the order of send restrictions and should be a list of module names which provide a send restriction instance. If no order is provided, then restrictions will be applied in alphabetical order of module names. |





 

 

 

 



<a name="cosmos_bank_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/authz.proto



<a name="cosmos-bank-v1beta1-SendAuthorization"></a>

### SendAuthorization
SendAuthorization allows the grantee to spend up to spend_limit coins from
the granter&#39;s account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| allow_list | [string](#string) | repeated | allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the granter. If omitted, any recipient is allowed. |





 

 

 

 



<a name="cosmos_bank_v1beta1_bank-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/bank.proto



<a name="cosmos-bank-v1beta1-DenomUnit"></a>

### DenomUnit
DenomUnit represents a struct that describes a given
denomination unit of the basic token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom represents the string name of the given denom unit (e.g uatom). |
| exponent | [uint32](#uint32) |  | exponent represents power of 10 exponent that one must raise the base_denom to in order to equal the given DenomUnit&#39;s denom 1 denom = 10^exponent base_denom (e.g. with a base_denom of uatom, one can create a DenomUnit of &#39;atom&#39; with exponent = 6, thus: 1 atom = 10^6 uatom). |
| aliases | [string](#string) | repeated | aliases is a list of string aliases for the given denom |






<a name="cosmos-bank-v1beta1-Input"></a>

### Input
Input models transaction input.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-Metadata"></a>

### Metadata
Metadata represents a struct that describes
a basic token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| denom_units | [DenomUnit](#cosmos-bank-v1beta1-DenomUnit) | repeated | denom_units represents the list of DenomUnit&#39;s for a given coin |
| base | [string](#string) |  | base represents the base denom (should be the DenomUnit with exponent = 0). |
| display | [string](#string) |  | display indicates the suggested denom that should be displayed in clients. |
| name | [string](#string) |  | name defines the name of the token (eg: Cosmos Atom) |
| symbol | [string](#string) |  | symbol is the token symbol usually shown on exchanges (eg: ATOM). This can be the same as the display. |
| uri | [string](#string) |  | URI to a document (on or off-chain) that contains additional information. Optional. |
| uri_hash | [string](#string) |  | URIHash is a sha256 hash of a document pointed by URI. It&#39;s used to verify that the document didn&#39;t change. Optional. |






<a name="cosmos-bank-v1beta1-Output"></a>

### Output
Output models transaction outputs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-Params"></a>

### Params
Params defines the parameters for the bank module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | **Deprecated.** Deprecated: Use of SendEnabled in params is deprecated. For genesis, use the newly added send_enabled field in the genesis object. Storage, lookup, and manipulation of this information is now in the keeper.

As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files. |
| default_send_enabled | [bool](#bool) |  |  |






<a name="cosmos-bank-v1beta1-SendEnabled"></a>

### SendEnabled
SendEnabled maps coin denom to a send_enabled status (whether a denom is
sendable).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| enabled | [bool](#bool) |  |  |






<a name="cosmos-bank-v1beta1-Supply"></a>

### Supply
Supply represents a struct that passively keeps track of the total supply
amounts in the network.
This message is deprecated now that supply is indexed by denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |





 

 

 

 



<a name="cosmos_bank_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/genesis.proto



<a name="cosmos-bank-v1beta1-Balance"></a>

### Balance
Balance defines an account address and balance pair used in the bank module&#39;s
genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the balance holder. |
| coins | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | coins defines the different coins this balance holds. |






<a name="cosmos-bank-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the bank module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params defines all the parameters of the module. |
| balances | [Balance](#cosmos-bank-v1beta1-Balance) | repeated | balances is an array containing the balances of all the accounts. |
| supply | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | supply represents the total supply. If it is left empty, then supply will be calculated based on the provided balances. Otherwise, it will be used to validate that the sum of the balances equals this amount. |
| denom_metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) | repeated | denom_metadata defines the metadata of the different coins. |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | send_enabled defines the denoms where send is enabled or disabled. |





 

 

 

 



<a name="cosmos_bank_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/query.proto



<a name="cosmos-bank-v1beta1-DenomOwner"></a>

### DenomOwner
DenomOwner defines structure representing an account that owns or holds a
particular denominated token. It contains the account address and account
balance of the denominated token.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address defines the address that owns a particular denomination. |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the denominated coin for an account. |






<a name="cosmos-bank-v1beta1-QueryAllBalancesRequest"></a>

### QueryAllBalancesRequest
QueryBalanceRequest is the request type for the Query/AllBalances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |
| resolve_denom | [bool](#bool) |  | resolve_denom is the flag to resolve the denom into a human-readable form from the metadata. |






<a name="cosmos-bank-v1beta1-QueryAllBalancesResponse"></a>

### QueryAllBalancesResponse
QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | balances is the balances of all the coins. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryBalanceRequest"></a>

### QueryBalanceRequest
QueryBalanceRequest is the request type for the Query/Balance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QueryBalanceResponse"></a>

### QueryBalanceResponse
QueryBalanceResponse is the response type for the Query/Balance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the coin. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest"></a>

### QueryDenomMetadataByQueryStringRequest
QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
Identical with QueryDenomMetadataRequest but receives denom as query string.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query the metadata for. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse"></a>

### QueryDenomMetadataByQueryStringResponse
QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) |  | metadata describes and provides all the client information for the requested token. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataRequest"></a>

### QueryDenomMetadataRequest
QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query the metadata for. |






<a name="cosmos-bank-v1beta1-QueryDenomMetadataResponse"></a>

### QueryDenomMetadataResponse
QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [Metadata](#cosmos-bank-v1beta1-Metadata) |  | metadata describes and provides all the client information for the requested token. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest"></a>

### QueryDenomOwnersByQueryRequest
QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
which queries for a paginated set of all account holders of a particular
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom defines the coin denomination to query all account holders for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse"></a>

### QueryDenomOwnersByQueryResponse
QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom_owners | [DenomOwner](#cosmos-bank-v1beta1-DenomOwner) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersRequest"></a>

### QueryDenomOwnersRequest
QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
which queries for a paginated set of all account holders of a particular
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom defines the coin denomination to query all account holders for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomOwnersResponse"></a>

### QueryDenomOwnersResponse
QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom_owners | [DenomOwner](#cosmos-bank-v1beta1-DenomOwner) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryDenomsMetadataRequest"></a>

### QueryDenomsMetadataRequest
QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryDenomsMetadataResponse"></a>

### QueryDenomsMetadataResponse
QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadatas | [Metadata](#cosmos-bank-v1beta1-Metadata) | repeated | metadata provides the client information for all the registered tokens. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest defines the request type for querying x/bank parameters.






<a name="cosmos-bank-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse defines the response type for querying x/bank parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params provides the parameters of the bank module. |






<a name="cosmos-bank-v1beta1-QuerySendEnabledRequest"></a>

### QuerySendEnabledRequest
QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [string](#string) | repeated | denoms is the specific denoms you want look up. Leave empty to get all entries. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. This field is only read if the denoms field is empty. |






<a name="cosmos-bank-v1beta1-QuerySendEnabledResponse"></a>

### QuerySendEnabledResponse
QuerySendEnabledResponse defines the RPC response of a SendEnable query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. This field is only populated if the denoms field in the request is empty. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest"></a>

### QuerySpendableBalanceByDenomRequest
QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
querying an account&#39;s spendable balance for a specific denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query balances for. |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse"></a>

### QuerySpendableBalanceByDenomResponse
QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
querying an account&#39;s spendable balance for a specific denom.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | balance is the balance of the coin. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalancesRequest"></a>

### QuerySpendableBalancesRequest
QuerySpendableBalancesRequest defines the gRPC request structure for querying
an account&#39;s spendable balances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address to query spendable balances for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QuerySpendableBalancesResponse"></a>

### QuerySpendableBalancesResponse
QuerySpendableBalancesResponse defines the gRPC response structure for querying
an account&#39;s spendable balances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | balances is the spendable balances of all the coins. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-bank-v1beta1-QuerySupplyOfRequest"></a>

### QuerySupplyOfRequest
QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | denom is the coin denom to query balances for. |






<a name="cosmos-bank-v1beta1-QuerySupplyOfResponse"></a>

### QuerySupplyOfResponse
QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount is the supply of the coin. |






<a name="cosmos-bank-v1beta1-QueryTotalSupplyRequest"></a>

### QueryTotalSupplyRequest
QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-bank-v1beta1-QueryTotalSupplyResponse"></a>

### QueryTotalSupplyResponse
QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| supply | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | supply is the supply of the coins |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-bank-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Balance | [QueryBalanceRequest](#cosmos-bank-v1beta1-QueryBalanceRequest) | [QueryBalanceResponse](#cosmos-bank-v1beta1-QueryBalanceResponse) | Balance queries the balance of a single coin for a single account. |
| AllBalances | [QueryAllBalancesRequest](#cosmos-bank-v1beta1-QueryAllBalancesRequest) | [QueryAllBalancesResponse](#cosmos-bank-v1beta1-QueryAllBalancesResponse) | AllBalances queries the balance of all coins for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SpendableBalances | [QuerySpendableBalancesRequest](#cosmos-bank-v1beta1-QuerySpendableBalancesRequest) | [QuerySpendableBalancesResponse](#cosmos-bank-v1beta1-QuerySpendableBalancesResponse) | SpendableBalances queries the spendable balance of all coins for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SpendableBalanceByDenom | [QuerySpendableBalanceByDenomRequest](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomRequest) | [QuerySpendableBalanceByDenomResponse](#cosmos-bank-v1beta1-QuerySpendableBalanceByDenomResponse) | SpendableBalanceByDenom queries the spendable balance of a single denom for a single account.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| TotalSupply | [QueryTotalSupplyRequest](#cosmos-bank-v1beta1-QueryTotalSupplyRequest) | [QueryTotalSupplyResponse](#cosmos-bank-v1beta1-QueryTotalSupplyResponse) | TotalSupply queries the total supply of all coins.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| SupplyOf | [QuerySupplyOfRequest](#cosmos-bank-v1beta1-QuerySupplyOfRequest) | [QuerySupplyOfResponse](#cosmos-bank-v1beta1-QuerySupplyOfResponse) | SupplyOf queries the supply of a single coin.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Params | [QueryParamsRequest](#cosmos-bank-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-bank-v1beta1-QueryParamsResponse) | Params queries the parameters of x/bank module. |
| DenomsMetadata | [QueryDenomsMetadataRequest](#cosmos-bank-v1beta1-QueryDenomsMetadataRequest) | [QueryDenomsMetadataResponse](#cosmos-bank-v1beta1-QueryDenomsMetadataResponse) | DenomsMetadata queries the client metadata for all registered coin denominations. |
| DenomMetadata | [QueryDenomMetadataRequest](#cosmos-bank-v1beta1-QueryDenomMetadataRequest) | [QueryDenomMetadataResponse](#cosmos-bank-v1beta1-QueryDenomMetadataResponse) | DenomMetadata queries the client metadata of a given coin denomination. |
| DenomMetadataByQueryString | [QueryDenomMetadataByQueryStringRequest](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringRequest) | [QueryDenomMetadataByQueryStringResponse](#cosmos-bank-v1beta1-QueryDenomMetadataByQueryStringResponse) | DenomMetadataByQueryString queries the client metadata of a given coin denomination. |
| DenomOwners | [QueryDenomOwnersRequest](#cosmos-bank-v1beta1-QueryDenomOwnersRequest) | [QueryDenomOwnersResponse](#cosmos-bank-v1beta1-QueryDenomOwnersResponse) | DenomOwners queries for all account addresses that own a particular token denomination.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DenomOwnersByQuery | [QueryDenomOwnersByQueryRequest](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryRequest) | [QueryDenomOwnersByQueryResponse](#cosmos-bank-v1beta1-QueryDenomOwnersByQueryResponse) | DenomOwnersByQuery queries for all account addresses that own a particular token denomination. |
| SendEnabled | [QuerySendEnabledRequest](#cosmos-bank-v1beta1-QuerySendEnabledRequest) | [QuerySendEnabledResponse](#cosmos-bank-v1beta1-QuerySendEnabledResponse) | SendEnabled queries for SendEnabled entries.

This query only returns denominations that have specific SendEnabled settings. Any denomination that does not have a specific setting will use the default params.default_send_enabled, and will not be returned by this query. |

 



<a name="cosmos_bank_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/bank/v1beta1/tx.proto



<a name="cosmos-bank-v1beta1-MsgMultiSend"></a>

### MsgMultiSend
MsgMultiSend represents an arbitrary multi-in, multi-out send message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputs | [Input](#cosmos-bank-v1beta1-Input) | repeated | Inputs, despite being `repeated`, only allows one sender input. This is checked in MsgMultiSend&#39;s ValidateBasic. |
| outputs | [Output](#cosmos-bank-v1beta1-Output) | repeated |  |






<a name="cosmos-bank-v1beta1-MsgMultiSendResponse"></a>

### MsgMultiSendResponse
MsgMultiSendResponse defines the Msg/MultiSend response type.






<a name="cosmos-bank-v1beta1-MsgSend"></a>

### MsgSend
MsgSend represents a message to send coins from one account to another.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-bank-v1beta1-MsgSendResponse"></a>

### MsgSendResponse
MsgSendResponse defines the Msg/Send response type.






<a name="cosmos-bank-v1beta1-MsgSetSendEnabled"></a>

### MsgSetSendEnabled
MsgSetSendEnabled is the Msg/SetSendEnabled request type.

Only entries to add/update/delete need to be included.
Existing SendEnabled entries that are not included in this
message are left unchanged.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module. |
| send_enabled | [SendEnabled](#cosmos-bank-v1beta1-SendEnabled) | repeated | send_enabled is the list of entries to add or update. |
| use_default_for | [string](#string) | repeated | use_default_for is a list of denoms that should use the params.default_send_enabled value. Denoms listed here will have their SendEnabled entries deleted. If a denom is included that doesn&#39;t have a SendEnabled entry, it will be ignored. |






<a name="cosmos-bank-v1beta1-MsgSetSendEnabledResponse"></a>

### MsgSetSendEnabledResponse
MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.






<a name="cosmos-bank-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-bank-v1beta1-Params) |  | params defines the x/bank parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-bank-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-bank-v1beta1-Msg"></a>

### Msg
Msg defines the bank Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [MsgSend](#cosmos-bank-v1beta1-MsgSend) | [MsgSendResponse](#cosmos-bank-v1beta1-MsgSendResponse) | Send defines a method for sending coins from one account to another account. |
| MultiSend | [MsgMultiSend](#cosmos-bank-v1beta1-MsgMultiSend) | [MsgMultiSendResponse](#cosmos-bank-v1beta1-MsgMultiSendResponse) | MultiSend defines a method for sending coins from some accounts to other accounts. |
| UpdateParams | [MsgUpdateParams](#cosmos-bank-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-bank-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/bank module parameters. The authority is defined in the keeper. |
| SetSendEnabled | [MsgSetSendEnabled](#cosmos-bank-v1beta1-MsgSetSendEnabled) | [MsgSetSendEnabledResponse](#cosmos-bank-v1beta1-MsgSetSendEnabledResponse) | SetSendEnabled is a governance operation for setting the SendEnabled flag on any number of Denoms. Only the entries to add or update should be included. Entries that already exist in the store, but that aren&#39;t included in this message, will be left unchanged. |

 



<a name="tendermint_crypto_proof-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/crypto/proof.proto



<a name="tendermint-crypto-DominoOp"></a>

### DominoOp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| input | [string](#string) |  |  |
| output | [string](#string) |  |  |






<a name="tendermint-crypto-Proof"></a>

### Proof



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [int64](#int64) |  |  |
| index | [int64](#int64) |  |  |
| leaf_hash | [bytes](#bytes) |  |  |
| aunts | [bytes](#bytes) | repeated |  |






<a name="tendermint-crypto-ProofOp"></a>

### ProofOp
ProofOp defines an operation used for calculating Merkle root
The data could be arbitrary format, providing necessary data
for example neighbouring node hash


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| key | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="tendermint-crypto-ProofOps"></a>

### ProofOps
ProofOps is Merkle proof defined by the list of ProofOps


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ops | [ProofOp](#tendermint-crypto-ProofOp) | repeated |  |






<a name="tendermint-crypto-ValueOp"></a>

### ValueOp



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | Encoded in ProofOp.Key. |
| proof | [Proof](#tendermint-crypto-Proof) |  | To encode in ProofOp.Data |





 

 

 

 



<a name="tendermint_crypto_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/crypto/keys.proto



<a name="tendermint-crypto-PublicKey"></a>

### PublicKey
PublicKey defines the keys available for use with Validators


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ed25519 | [bytes](#bytes) |  |  |
| secp256k1 | [bytes](#bytes) |  |  |





 

 

 

 



<a name="tendermint_types_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/params.proto



<a name="tendermint-types-ABCIParams"></a>

### ABCIParams
ABCIParams configure functionality specific to the Application Blockchain Interface.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote_extensions_enable_height | [int64](#int64) |  | vote_extensions_enable_height configures the first height during which vote extensions will be enabled. During this specified height, and for all subsequent heights, precommit messages that do not contain valid extension data will be considered invalid. Prior to this height, vote extensions will not be used or accepted by validators on the network.

Once enabled, vote extensions will be created by the application in ExtendVote, passed to the application for validation in VerifyVoteExtension and given to the application to use when proposing a block during PrepareProposal. |






<a name="tendermint-types-AuthorityParams"></a>

### AuthorityParams



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  |  |






<a name="tendermint-types-BlockParams"></a>

### BlockParams
BlockParams contains limits on the block size.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_bytes | [int64](#int64) |  | Max block size, in bytes. Note: must be greater than 0 |
| max_gas | [int64](#int64) |  | Max gas per block. Note: must be greater or equal to -1 |






<a name="tendermint-types-ConsensusParams"></a>

### ConsensusParams
ConsensusParams contains consensus critical parameters that determine the
validity of blocks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [BlockParams](#tendermint-types-BlockParams) |  |  |
| evidence | [EvidenceParams](#tendermint-types-EvidenceParams) |  |  |
| validator | [ValidatorParams](#tendermint-types-ValidatorParams) |  |  |
| version | [VersionParams](#tendermint-types-VersionParams) |  |  |
| abci | [ABCIParams](#tendermint-types-ABCIParams) |  |  |
| authority | [AuthorityParams](#tendermint-types-AuthorityParams) |  |  |






<a name="tendermint-types-EvidenceParams"></a>

### EvidenceParams
EvidenceParams determine how we handle evidence of malfeasance.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_age_num_blocks | [int64](#int64) |  | Max age of evidence, in blocks.

The basic formula for calculating this is: MaxAgeDuration / {average block time}. |
| max_age_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | Max age of evidence, in time.

It should correspond with an app&#39;s &#34;unbonding period&#34; or other similar mechanism for handling [Nothing-At-Stake attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed). |
| max_bytes | [int64](#int64) |  | This sets the maximum size of total evidence in bytes that can be committed in a single block. and should fall comfortably under the max block bytes. Default is 1048576 or 1MB |






<a name="tendermint-types-HashedParams"></a>

### HashedParams
HashedParams is a subset of ConsensusParams.

It is hashed into the Header.ConsensusHash.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_max_bytes | [int64](#int64) |  |  |
| block_max_gas | [int64](#int64) |  |  |






<a name="tendermint-types-ValidatorParams"></a>

### ValidatorParams
ValidatorParams restrict the public key types validators can use.
NOTE: uses ABCI pubkey naming, not Amino names.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pub_key_types | [string](#string) | repeated |  |






<a name="tendermint-types-VersionParams"></a>

### VersionParams
VersionParams contains the ABCI application version.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app | [uint64](#uint64) |  |  |





 

 

 

 



<a name="tendermint_types_validator-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/validator.proto



<a name="tendermint-types-SimpleValidator"></a>

### SimpleValidator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pub_key | [tendermint.crypto.PublicKey](#tendermint-crypto-PublicKey) |  |  |
| voting_power | [int64](#int64) |  |  |






<a name="tendermint-types-Validator"></a>

### Validator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  |  |
| pub_key | [tendermint.crypto.PublicKey](#tendermint-crypto-PublicKey) |  |  |
| voting_power | [int64](#int64) |  |  |
| proposer_priority | [int64](#int64) |  |  |






<a name="tendermint-types-ValidatorSet"></a>

### ValidatorSet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#tendermint-types-Validator) | repeated |  |
| proposer | [Validator](#tendermint-types-Validator) |  |  |
| total_voting_power | [int64](#int64) |  |  |





 


<a name="tendermint-types-BlockIDFlag"></a>

### BlockIDFlag
BlockIdFlag indicates which BlockID the signature is for

| Name | Number | Description |
| ---- | ------ | ----------- |
| BLOCK_ID_FLAG_UNKNOWN | 0 | indicates an error condition |
| BLOCK_ID_FLAG_ABSENT | 1 | the vote was not received |
| BLOCK_ID_FLAG_COMMIT | 2 | voted for the block that received the majority |
| BLOCK_ID_FLAG_NIL | 3 | voted for nil |


 

 

 



<a name="tendermint_abci_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/abci/types.proto



<a name="tendermint-abci-CommitInfo"></a>

### CommitInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| round | [int32](#int32) |  |  |
| votes | [VoteInfo](#tendermint-abci-VoteInfo) | repeated |  |






<a name="tendermint-abci-Event"></a>

### Event
Event allows application developers to attach additional information to
ResponseFinalizeBlock and ResponseCheckTx.
Later, transactions may be queried using these events.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| attributes | [EventAttribute](#tendermint-abci-EventAttribute) | repeated |  |






<a name="tendermint-abci-EventAttribute"></a>

### EventAttribute
EventAttribute is a single key-value pair, associated with an event.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |
| index | [bool](#bool) |  | nondeterministic |






<a name="tendermint-abci-ExecTxResult"></a>

### ExecTxResult
ExecTxResult contains results of executing one individual transaction.

* Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| data | [bytes](#bytes) |  |  |
| log | [string](#string) |  | nondeterministic |
| info | [string](#string) |  | nondeterministic |
| gas_wanted | [int64](#int64) |  |  |
| gas_used | [int64](#int64) |  |  |
| events | [Event](#tendermint-abci-Event) | repeated | nondeterministic |
| codespace | [string](#string) |  |  |






<a name="tendermint-abci-ExtendedCommitInfo"></a>

### ExtendedCommitInfo
ExtendedCommitInfo is similar to CommitInfo except that it is only used in
the PrepareProposal request such that CometBFT can provide vote extensions
to the application.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| round | [int32](#int32) |  | The round at which the block proposer decided in the previous height. |
| votes | [ExtendedVoteInfo](#tendermint-abci-ExtendedVoteInfo) | repeated | List of validators&#39; addresses in the last validator set with their voting information, including vote extensions. |






<a name="tendermint-abci-ExtendedVoteInfo"></a>

### ExtendedVoteInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#tendermint-abci-Validator) |  | The validator that sent the vote. |
| vote_extension | [bytes](#bytes) |  | Non-deterministic extension provided by the sending validator&#39;s application. |
| extension_signature | [bytes](#bytes) |  | Vote extension signature created by CometBFT |
| block_id_flag | [tendermint.types.BlockIDFlag](#tendermint-types-BlockIDFlag) |  | block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all |






<a name="tendermint-abci-Misbehavior"></a>

### Misbehavior



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [MisbehaviorType](#tendermint-abci-MisbehaviorType) |  |  |
| validator | [Validator](#tendermint-abci-Validator) |  | The offending validator |
| height | [int64](#int64) |  | The height when the offense occurred |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The corresponding time where the offense occurred |
| total_voting_power | [int64](#int64) |  | Total voting power of the validator set in case the ABCI application does not store historical validators. https://github.com/tendermint/tendermint/issues/4581 |






<a name="tendermint-abci-Request"></a>

### Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| echo | [RequestEcho](#tendermint-abci-RequestEcho) |  |  |
| flush | [RequestFlush](#tendermint-abci-RequestFlush) |  |  |
| info | [RequestInfo](#tendermint-abci-RequestInfo) |  |  |
| init_chain | [RequestInitChain](#tendermint-abci-RequestInitChain) |  |  |
| query | [RequestQuery](#tendermint-abci-RequestQuery) |  |  |
| check_tx | [RequestCheckTx](#tendermint-abci-RequestCheckTx) |  |  |
| commit | [RequestCommit](#tendermint-abci-RequestCommit) |  |  |
| list_snapshots | [RequestListSnapshots](#tendermint-abci-RequestListSnapshots) |  |  |
| offer_snapshot | [RequestOfferSnapshot](#tendermint-abci-RequestOfferSnapshot) |  |  |
| load_snapshot_chunk | [RequestLoadSnapshotChunk](#tendermint-abci-RequestLoadSnapshotChunk) |  |  |
| apply_snapshot_chunk | [RequestApplySnapshotChunk](#tendermint-abci-RequestApplySnapshotChunk) |  |  |
| prepare_proposal | [RequestPrepareProposal](#tendermint-abci-RequestPrepareProposal) |  |  |
| process_proposal | [RequestProcessProposal](#tendermint-abci-RequestProcessProposal) |  |  |
| extend_vote | [RequestExtendVote](#tendermint-abci-RequestExtendVote) |  |  |
| verify_vote_extension | [RequestVerifyVoteExtension](#tendermint-abci-RequestVerifyVoteExtension) |  |  |
| finalize_block | [RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) |  |  |






<a name="tendermint-abci-RequestApplySnapshotChunk"></a>

### RequestApplySnapshotChunk
Applies a snapshot chunk


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |
| chunk | [bytes](#bytes) |  |  |
| sender | [string](#string) |  |  |






<a name="tendermint-abci-RequestCheckTx"></a>

### RequestCheckTx



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [bytes](#bytes) |  |  |
| type | [CheckTxType](#tendermint-abci-CheckTxType) |  |  |






<a name="tendermint-abci-RequestCommit"></a>

### RequestCommit







<a name="tendermint-abci-RequestEcho"></a>

### RequestEcho



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="tendermint-abci-RequestExtendVote"></a>

### RequestExtendVote
Extends a vote with application-injected data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | the hash of the block that this vote may be referring to |
| height | [int64](#int64) |  | the height of the extended vote |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | info of the block that this vote may be referring to |
| txs | [bytes](#bytes) | repeated |  |
| proposed_last_commit | [CommitInfo](#tendermint-abci-CommitInfo) |  |  |
| misbehavior | [Misbehavior](#tendermint-abci-Misbehavior) | repeated |  |
| next_validators_hash | [bytes](#bytes) |  |  |
| proposer_address | [bytes](#bytes) |  | address of the public key of the original proposer of the block. |






<a name="tendermint-abci-RequestFinalizeBlock"></a>

### RequestFinalizeBlock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [bytes](#bytes) | repeated |  |
| decided_last_commit | [CommitInfo](#tendermint-abci-CommitInfo) |  |  |
| misbehavior | [Misbehavior](#tendermint-abci-Misbehavior) | repeated |  |
| hash | [bytes](#bytes) |  | hash is the merkle root hash of the fields of the decided block. |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| next_validators_hash | [bytes](#bytes) |  |  |
| proposer_address | [bytes](#bytes) |  | proposer_address is the address of the public key of the original proposer of the block. |






<a name="tendermint-abci-RequestFlush"></a>

### RequestFlush







<a name="tendermint-abci-RequestInfo"></a>

### RequestInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| block_version | [uint64](#uint64) |  |  |
| p2p_version | [uint64](#uint64) |  |  |
| abci_version | [string](#string) |  |  |






<a name="tendermint-abci-RequestInitChain"></a>

### RequestInitChain



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| chain_id | [string](#string) |  |  |
| consensus_params | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  |  |
| validators | [ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated |  |
| app_state_bytes | [bytes](#bytes) |  |  |
| initial_height | [int64](#int64) |  |  |






<a name="tendermint-abci-RequestListSnapshots"></a>

### RequestListSnapshots
lists available snapshots






<a name="tendermint-abci-RequestLoadSnapshotChunk"></a>

### RequestLoadSnapshotChunk
loads a snapshot chunk


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  |  |
| format | [uint32](#uint32) |  |  |
| chunk | [uint32](#uint32) |  |  |






<a name="tendermint-abci-RequestOfferSnapshot"></a>

### RequestOfferSnapshot
offers a snapshot to the application


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| snapshot | [Snapshot](#tendermint-abci-Snapshot) |  | snapshot offered by peers |
| app_hash | [bytes](#bytes) |  | light client-verified app hash for snapshot height |






<a name="tendermint-abci-RequestPrepareProposal"></a>

### RequestPrepareProposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_tx_bytes | [int64](#int64) |  | the modified transactions cannot exceed this size. |
| txs | [bytes](#bytes) | repeated | txs is an array of transactions that will be included in a block, sent to the app for possible modifications. |
| local_last_commit | [ExtendedCommitInfo](#tendermint-abci-ExtendedCommitInfo) |  |  |
| misbehavior | [Misbehavior](#tendermint-abci-Misbehavior) | repeated |  |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| next_validators_hash | [bytes](#bytes) |  |  |
| proposer_address | [bytes](#bytes) |  | address of the public key of the validator proposing the block. |






<a name="tendermint-abci-RequestProcessProposal"></a>

### RequestProcessProposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [bytes](#bytes) | repeated |  |
| proposed_last_commit | [CommitInfo](#tendermint-abci-CommitInfo) |  |  |
| misbehavior | [Misbehavior](#tendermint-abci-Misbehavior) | repeated |  |
| hash | [bytes](#bytes) |  | hash is the merkle root hash of the fields of the proposed block. |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| next_validators_hash | [bytes](#bytes) |  |  |
| proposer_address | [bytes](#bytes) |  | address of the public key of the original proposer of the block. |






<a name="tendermint-abci-RequestQuery"></a>

### RequestQuery



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |
| path | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| prove | [bool](#bool) |  |  |






<a name="tendermint-abci-RequestVerifyVoteExtension"></a>

### RequestVerifyVoteExtension
Verify the vote extension


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | the hash of the block that this received vote corresponds to |
| validator_address | [bytes](#bytes) |  | the validator that signed the vote extension |
| height | [int64](#int64) |  |  |
| vote_extension | [bytes](#bytes) |  |  |






<a name="tendermint-abci-Response"></a>

### Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exception | [ResponseException](#tendermint-abci-ResponseException) |  |  |
| echo | [ResponseEcho](#tendermint-abci-ResponseEcho) |  |  |
| flush | [ResponseFlush](#tendermint-abci-ResponseFlush) |  |  |
| info | [ResponseInfo](#tendermint-abci-ResponseInfo) |  |  |
| init_chain | [ResponseInitChain](#tendermint-abci-ResponseInitChain) |  |  |
| query | [ResponseQuery](#tendermint-abci-ResponseQuery) |  |  |
| check_tx | [ResponseCheckTx](#tendermint-abci-ResponseCheckTx) |  |  |
| commit | [ResponseCommit](#tendermint-abci-ResponseCommit) |  |  |
| list_snapshots | [ResponseListSnapshots](#tendermint-abci-ResponseListSnapshots) |  |  |
| offer_snapshot | [ResponseOfferSnapshot](#tendermint-abci-ResponseOfferSnapshot) |  |  |
| load_snapshot_chunk | [ResponseLoadSnapshotChunk](#tendermint-abci-ResponseLoadSnapshotChunk) |  |  |
| apply_snapshot_chunk | [ResponseApplySnapshotChunk](#tendermint-abci-ResponseApplySnapshotChunk) |  |  |
| prepare_proposal | [ResponsePrepareProposal](#tendermint-abci-ResponsePrepareProposal) |  |  |
| process_proposal | [ResponseProcessProposal](#tendermint-abci-ResponseProcessProposal) |  |  |
| extend_vote | [ResponseExtendVote](#tendermint-abci-ResponseExtendVote) |  |  |
| verify_vote_extension | [ResponseVerifyVoteExtension](#tendermint-abci-ResponseVerifyVoteExtension) |  |  |
| finalize_block | [ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  |  |






<a name="tendermint-abci-ResponseApplySnapshotChunk"></a>

### ResponseApplySnapshotChunk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseApplySnapshotChunk.Result](#tendermint-abci-ResponseApplySnapshotChunk-Result) |  |  |
| refetch_chunks | [uint32](#uint32) | repeated | Chunks to refetch and reapply |
| reject_senders | [string](#string) | repeated | Chunk senders to reject and ban |






<a name="tendermint-abci-ResponseCheckTx"></a>

### ResponseCheckTx



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| data | [bytes](#bytes) |  |  |
| log | [string](#string) |  | nondeterministic |
| info | [string](#string) |  | nondeterministic |
| gas_wanted | [int64](#int64) |  |  |
| gas_used | [int64](#int64) |  |  |
| events | [Event](#tendermint-abci-Event) | repeated |  |
| codespace | [string](#string) |  |  |






<a name="tendermint-abci-ResponseCommit"></a>

### ResponseCommit



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| retain_height | [int64](#int64) |  |  |






<a name="tendermint-abci-ResponseEcho"></a>

### ResponseEcho



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="tendermint-abci-ResponseException"></a>

### ResponseException
nondeterministic


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [string](#string) |  |  |






<a name="tendermint-abci-ResponseExtendVote"></a>

### ResponseExtendVote



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote_extension | [bytes](#bytes) |  |  |






<a name="tendermint-abci-ResponseFinalizeBlock"></a>

### ResponseFinalizeBlock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| events | [Event](#tendermint-abci-Event) | repeated | set of block events emitted as part of executing the block |
| tx_results | [ExecTxResult](#tendermint-abci-ExecTxResult) | repeated | the result of executing each transaction including the events the particular transaction emitted. This should match the order of the transactions delivered in the block itself |
| validator_updates | [ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated | a list of updates to the validator set. These will reflect the validator set at current height &#43; 2. |
| consensus_param_updates | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  | updates to the consensus params, if any. |
| app_hash | [bytes](#bytes) |  | app_hash is the hash of the applications&#39; state which is used to confirm that execution of the transactions was deterministic. It is up to the application to decide which algorithm to use. |






<a name="tendermint-abci-ResponseFlush"></a>

### ResponseFlush







<a name="tendermint-abci-ResponseInfo"></a>

### ResponseInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [string](#string) |  |  |
| version | [string](#string) |  |  |
| app_version | [uint64](#uint64) |  |  |
| last_block_height | [int64](#int64) |  |  |
| last_block_app_hash | [bytes](#bytes) |  |  |






<a name="tendermint-abci-ResponseInitChain"></a>

### ResponseInitChain



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_params | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  |  |
| validators | [ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated |  |
| app_hash | [bytes](#bytes) |  |  |






<a name="tendermint-abci-ResponseListSnapshots"></a>

### ResponseListSnapshots



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| snapshots | [Snapshot](#tendermint-abci-Snapshot) | repeated |  |






<a name="tendermint-abci-ResponseLoadSnapshotChunk"></a>

### ResponseLoadSnapshotChunk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunk | [bytes](#bytes) |  |  |






<a name="tendermint-abci-ResponseOfferSnapshot"></a>

### ResponseOfferSnapshot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseOfferSnapshot.Result](#tendermint-abci-ResponseOfferSnapshot-Result) |  |  |






<a name="tendermint-abci-ResponsePrepareProposal"></a>

### ResponsePrepareProposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [bytes](#bytes) | repeated |  |






<a name="tendermint-abci-ResponseProcessProposal"></a>

### ResponseProcessProposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseProcessProposal.ProposalStatus](#tendermint-abci-ResponseProcessProposal-ProposalStatus) |  |  |






<a name="tendermint-abci-ResponseQuery"></a>

### ResponseQuery



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| log | [string](#string) |  | bytes data = 2; // use &#34;value&#34; instead.

nondeterministic |
| info | [string](#string) |  | nondeterministic |
| index | [int64](#int64) |  |  |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| proof_ops | [tendermint.crypto.ProofOps](#tendermint-crypto-ProofOps) |  |  |
| height | [int64](#int64) |  |  |
| codespace | [string](#string) |  |  |






<a name="tendermint-abci-ResponseVerifyVoteExtension"></a>

### ResponseVerifyVoteExtension



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [ResponseVerifyVoteExtension.VerifyStatus](#tendermint-abci-ResponseVerifyVoteExtension-VerifyStatus) |  |  |






<a name="tendermint-abci-Snapshot"></a>

### Snapshot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  | The height at which the snapshot was taken |
| format | [uint32](#uint32) |  | The application-specific snapshot format |
| chunks | [uint32](#uint32) |  | Number of chunks in the snapshot |
| hash | [bytes](#bytes) |  | Arbitrary snapshot hash, equal only if identical |
| metadata | [bytes](#bytes) |  | Arbitrary application metadata |






<a name="tendermint-abci-TxResult"></a>

### TxResult
TxResult contains results of executing the transaction.

One usage is indexing transaction results.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| index | [uint32](#uint32) |  |  |
| tx | [bytes](#bytes) |  |  |
| result | [ExecTxResult](#tendermint-abci-ExecTxResult) |  |  |






<a name="tendermint-abci-Validator"></a>

### Validator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [bytes](#bytes) |  | The first 20 bytes of SHA256(public key) |
| power | [int64](#int64) |  | PubKey pub_key = 2 [(gogoproto.nullable)=false];

The voting power |






<a name="tendermint-abci-ValidatorUpdate"></a>

### ValidatorUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pub_key | [tendermint.crypto.PublicKey](#tendermint-crypto-PublicKey) |  |  |
| power | [int64](#int64) |  |  |






<a name="tendermint-abci-VoteInfo"></a>

### VoteInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#tendermint-abci-Validator) |  |  |
| block_id_flag | [tendermint.types.BlockIDFlag](#tendermint-types-BlockIDFlag) |  |  |





 


<a name="tendermint-abci-CheckTxType"></a>

### CheckTxType


| Name | Number | Description |
| ---- | ------ | ----------- |
| NEW | 0 |  |
| RECHECK | 1 |  |



<a name="tendermint-abci-MisbehaviorType"></a>

### MisbehaviorType


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| DUPLICATE_VOTE | 1 |  |
| LIGHT_CLIENT_ATTACK | 2 |  |



<a name="tendermint-abci-ResponseApplySnapshotChunk-Result"></a>

### ResponseApplySnapshotChunk.Result


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Unknown result, abort all snapshot restoration |
| ACCEPT | 1 | Chunk successfully accepted |
| ABORT | 2 | Abort all snapshot restoration |
| RETRY | 3 | Retry chunk (combine with refetch and reject) |
| RETRY_SNAPSHOT | 4 | Retry snapshot (combine with refetch and reject) |
| REJECT_SNAPSHOT | 5 | Reject this snapshot, try others |



<a name="tendermint-abci-ResponseOfferSnapshot-Result"></a>

### ResponseOfferSnapshot.Result


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 | Unknown result, abort all snapshot restoration |
| ACCEPT | 1 | Snapshot accepted, apply chunks |
| ABORT | 2 | Abort all snapshot restoration |
| REJECT | 3 | Reject this specific snapshot, try others |
| REJECT_FORMAT | 4 | Reject all snapshots of this format, try others |
| REJECT_SENDER | 5 | Reject all snapshots from the sender(s), try others |



<a name="tendermint-abci-ResponseProcessProposal-ProposalStatus"></a>

### ResponseProcessProposal.ProposalStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| ACCEPT | 1 |  |
| REJECT | 2 |  |



<a name="tendermint-abci-ResponseVerifyVoteExtension-VerifyStatus"></a>

### ResponseVerifyVoteExtension.VerifyStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| ACCEPT | 1 |  |
| REJECT | 2 | Rejecting the vote extension will reject the entire precommit by the sender. Incorrectly implementing this thus has liveness implications as it may affect CometBFT&#39;s ability to receive 2/3&#43; valid votes to finalize the block. Honest nodes should never be rejected. |


 

 


<a name="tendermint-abci-ABCI"></a>

### ABCI


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Echo | [RequestEcho](#tendermint-abci-RequestEcho) | [ResponseEcho](#tendermint-abci-ResponseEcho) |  |
| Flush | [RequestFlush](#tendermint-abci-RequestFlush) | [ResponseFlush](#tendermint-abci-ResponseFlush) |  |
| Info | [RequestInfo](#tendermint-abci-RequestInfo) | [ResponseInfo](#tendermint-abci-ResponseInfo) |  |
| CheckTx | [RequestCheckTx](#tendermint-abci-RequestCheckTx) | [ResponseCheckTx](#tendermint-abci-ResponseCheckTx) |  |
| Query | [RequestQuery](#tendermint-abci-RequestQuery) | [ResponseQuery](#tendermint-abci-ResponseQuery) |  |
| Commit | [RequestCommit](#tendermint-abci-RequestCommit) | [ResponseCommit](#tendermint-abci-ResponseCommit) |  |
| InitChain | [RequestInitChain](#tendermint-abci-RequestInitChain) | [ResponseInitChain](#tendermint-abci-ResponseInitChain) |  |
| ListSnapshots | [RequestListSnapshots](#tendermint-abci-RequestListSnapshots) | [ResponseListSnapshots](#tendermint-abci-ResponseListSnapshots) |  |
| OfferSnapshot | [RequestOfferSnapshot](#tendermint-abci-RequestOfferSnapshot) | [ResponseOfferSnapshot](#tendermint-abci-ResponseOfferSnapshot) |  |
| LoadSnapshotChunk | [RequestLoadSnapshotChunk](#tendermint-abci-RequestLoadSnapshotChunk) | [ResponseLoadSnapshotChunk](#tendermint-abci-ResponseLoadSnapshotChunk) |  |
| ApplySnapshotChunk | [RequestApplySnapshotChunk](#tendermint-abci-RequestApplySnapshotChunk) | [ResponseApplySnapshotChunk](#tendermint-abci-ResponseApplySnapshotChunk) |  |
| PrepareProposal | [RequestPrepareProposal](#tendermint-abci-RequestPrepareProposal) | [ResponsePrepareProposal](#tendermint-abci-ResponsePrepareProposal) |  |
| ProcessProposal | [RequestProcessProposal](#tendermint-abci-RequestProcessProposal) | [ResponseProcessProposal](#tendermint-abci-ResponseProcessProposal) |  |
| ExtendVote | [RequestExtendVote](#tendermint-abci-RequestExtendVote) | [ResponseExtendVote](#tendermint-abci-ResponseExtendVote) |  |
| VerifyVoteExtension | [RequestVerifyVoteExtension](#tendermint-abci-RequestVerifyVoteExtension) | [ResponseVerifyVoteExtension](#tendermint-abci-ResponseVerifyVoteExtension) |  |
| FinalizeBlock | [RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) | [ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  |

 



<a name="tendermint_version_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/version/types.proto



<a name="tendermint-version-App"></a>

### App
App includes the protocol and software version for the application.
This information is included in ResponseInfo. The App.Protocol can be
updated in ResponseEndBlock.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol | [uint64](#uint64) |  |  |
| software | [string](#string) |  |  |






<a name="tendermint-version-Consensus"></a>

### Consensus
Consensus captures the consensus rules for processing a block in the blockchain,
including all blockchain data structures and the rules of the application&#39;s
state transition machine.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [uint64](#uint64) |  |  |
| app | [uint64](#uint64) |  |  |





 

 

 

 



<a name="tendermint_types_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/types.proto



<a name="tendermint-types-BlockID"></a>

### BlockID
BlockID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  |  |
| part_set_header | [PartSetHeader](#tendermint-types-PartSetHeader) |  |  |






<a name="tendermint-types-BlockMeta"></a>

### BlockMeta



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| block_size | [int64](#int64) |  |  |
| header | [Header](#tendermint-types-Header) |  |  |
| num_txs | [int64](#int64) |  |  |






<a name="tendermint-types-Commit"></a>

### Commit
Commit contains the evidence that a block was committed by a set of validators.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| signatures | [CommitSig](#tendermint-types-CommitSig) | repeated |  |






<a name="tendermint-types-CommitSig"></a>

### CommitSig
CommitSig is a part of the Vote included in a Commit.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id_flag | [BlockIDFlag](#tendermint-types-BlockIDFlag) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name="tendermint-types-Data"></a>

### Data
Data contains the set of transactions included in the block


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [bytes](#bytes) | repeated | Txs that will be applied by state @ block.Height&#43;1. NOTE: not all txs here are valid. We&#39;re just agreeing on the order first. This means that block.AppHash does not include these txs. |






<a name="tendermint-types-ExtendedCommit"></a>

### ExtendedCommit



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| extended_signatures | [ExtendedCommitSig](#tendermint-types-ExtendedCommitSig) | repeated |  |






<a name="tendermint-types-ExtendedCommitSig"></a>

### ExtendedCommitSig
ExtendedCommitSig retains all the same fields as CommitSig but adds vote
extension-related fields. We use two signatures to ensure backwards compatibility.
That is the digest of the original signature is still the same in prior versions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id_flag | [BlockIDFlag](#tendermint-types-BlockIDFlag) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |
| extension | [bytes](#bytes) |  | Vote extension data |
| extension_signature | [bytes](#bytes) |  | Vote extension signature |






<a name="tendermint-types-Header"></a>

### Header
Header defines the structure of a block header.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [tendermint.version.Consensus](#tendermint-version-Consensus) |  | basic block info |
| chain_id | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| last_block_id | [BlockID](#tendermint-types-BlockID) |  | prev block info |
| last_commit_hash | [bytes](#bytes) |  | hashes of block data

commit from validators from the last block |
| data_hash | [bytes](#bytes) |  | transactions |
| validators_hash | [bytes](#bytes) |  | hashes from the app output from the prev block

validators for the current block |
| next_validators_hash | [bytes](#bytes) |  | validators for the next block |
| consensus_hash | [bytes](#bytes) |  | consensus params for current block |
| app_hash | [bytes](#bytes) |  | state after txs from the previous block |
| last_results_hash | [bytes](#bytes) |  | root hash of all results from the txs from the previous block |
| evidence_hash | [bytes](#bytes) |  | consensus info

evidence included in the block |
| proposer_address | [bytes](#bytes) |  | original proposer of the block |






<a name="tendermint-types-LightBlock"></a>

### LightBlock



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_header | [SignedHeader](#tendermint-types-SignedHeader) |  |  |
| validator_set | [ValidatorSet](#tendermint-types-ValidatorSet) |  |  |






<a name="tendermint-types-Part"></a>

### Part



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  |  |
| bytes | [bytes](#bytes) |  |  |
| proof | [tendermint.crypto.Proof](#tendermint-crypto-Proof) |  |  |






<a name="tendermint-types-PartSetHeader"></a>

### PartSetHeader
PartsetHeader


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [uint32](#uint32) |  |  |
| hash | [bytes](#bytes) |  |  |






<a name="tendermint-types-Proposal"></a>

### Proposal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SignedMsgType](#tendermint-types-SignedMsgType) |  |  |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| pol_round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name="tendermint-types-SignedHeader"></a>

### SignedHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#tendermint-types-Header) |  |  |
| commit | [Commit](#tendermint-types-Commit) |  |  |






<a name="tendermint-types-TxProof"></a>

### TxProof
TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| root_hash | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |
| proof | [tendermint.crypto.Proof](#tendermint-crypto-Proof) |  |  |






<a name="tendermint-types-Vote"></a>

### Vote
Vote represents a prevote or precommit vote from validators for
consensus.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [SignedMsgType](#tendermint-types-SignedMsgType) |  |  |
| height | [int64](#int64) |  |  |
| round | [int32](#int32) |  |  |
| block_id | [BlockID](#tendermint-types-BlockID) |  | zero if vote is nil. |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| validator_address | [bytes](#bytes) |  |  |
| validator_index | [int32](#int32) |  |  |
| signature | [bytes](#bytes) |  | Vote signature by the validator if they participated in consensus for the associated block. |
| extension | [bytes](#bytes) |  | Vote extension provided by the application. Only valid for precommit messages. |
| extension_signature | [bytes](#bytes) |  | Vote extension signature by the validator if they participated in consensus for the associated block. Only valid for precommit messages. |





 


<a name="tendermint-types-SignedMsgType"></a>

### SignedMsgType
SignedMsgType is a type of signed message in the consensus.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGNED_MSG_TYPE_UNKNOWN | 0 |  |
| SIGNED_MSG_TYPE_PREVOTE | 1 | Votes |
| SIGNED_MSG_TYPE_PRECOMMIT | 2 |  |
| SIGNED_MSG_TYPE_PROPOSAL | 32 | Proposals |


 

 

 



<a name="tendermint_types_evidence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/evidence.proto



<a name="tendermint-types-DuplicateVoteEvidence"></a>

### DuplicateVoteEvidence
DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote_a | [Vote](#tendermint-types-Vote) |  |  |
| vote_b | [Vote](#tendermint-types-Vote) |  |  |
| total_voting_power | [int64](#int64) |  |  |
| validator_power | [int64](#int64) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="tendermint-types-Evidence"></a>

### Evidence



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| duplicate_vote_evidence | [DuplicateVoteEvidence](#tendermint-types-DuplicateVoteEvidence) |  |  |
| light_client_attack_evidence | [LightClientAttackEvidence](#tendermint-types-LightClientAttackEvidence) |  |  |






<a name="tendermint-types-EvidenceList"></a>

### EvidenceList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [Evidence](#tendermint-types-Evidence) | repeated |  |






<a name="tendermint-types-LightClientAttackEvidence"></a>

### LightClientAttackEvidence
LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| conflicting_block | [LightBlock](#tendermint-types-LightBlock) |  |  |
| common_height | [int64](#int64) |  |  |
| byzantine_validators | [Validator](#tendermint-types-Validator) | repeated |  |
| total_voting_power | [int64](#int64) |  |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |





 

 

 

 



<a name="tendermint_types_block-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/types/block.proto



<a name="tendermint-types-Block"></a>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#tendermint-types-Header) |  |  |
| data | [Data](#tendermint-types-Data) |  |  |
| evidence | [EvidenceList](#tendermint-types-EvidenceList) |  |  |
| last_commit | [Commit](#tendermint-types-Commit) |  |  |





 

 

 

 



<a name="cosmos_base_abci_v1beta1_abci-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/abci/v1beta1/abci.proto



<a name="cosmos-base-abci-v1beta1-ABCIMessageLog"></a>

### ABCIMessageLog
ABCIMessageLog defines a structure containing an indexed tx ABCI message log.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_index | [uint32](#uint32) |  |  |
| log | [string](#string) |  |  |
| events | [StringEvent](#cosmos-base-abci-v1beta1-StringEvent) | repeated | Events contains a slice of Event objects that were emitted during some execution. |






<a name="cosmos-base-abci-v1beta1-Attribute"></a>

### Attribute
Attribute defines an attribute wrapper where the key and value are
strings instead of raw bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="cosmos-base-abci-v1beta1-GasInfo"></a>

### GasInfo
GasInfo defines tx execution gas context.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_wanted | [uint64](#uint64) |  | GasWanted is the maximum units of work we allow this tx to perform. |
| gas_used | [uint64](#uint64) |  | GasUsed is the amount of gas actually consumed. |






<a name="cosmos-base-abci-v1beta1-MsgData"></a>

### MsgData
MsgData defines the data returned in a Result object during message
execution.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type | [string](#string) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="cosmos-base-abci-v1beta1-Result"></a>

### Result
Result is the union of ResponseFormat and ResponseCheckTx.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | **Deprecated.** Data is any data returned from message or handler execution. It MUST be length prefixed in order to separate data from multiple message executions. Deprecated. This field is still populated, but prefer msg_response instead because it also contains the Msg response typeURL. |
| log | [string](#string) |  | Log contains the log information from message or handler execution. |
| events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | Events contains a slice of Event objects that were emitted during message or handler execution. |
| msg_responses | [google.protobuf.Any](#google-protobuf-Any) | repeated | msg_responses contains the Msg handler responses type packed in Anys. |






<a name="cosmos-base-abci-v1beta1-SearchBlocksResult"></a>

### SearchBlocksResult
SearchBlocksResult defines a structure for querying blocks pageable


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [int64](#int64) |  | Count of all blocks |
| count | [int64](#int64) |  | Count of blocks in current page |
| page_number | [int64](#int64) |  | Index of current page, start from 1 |
| page_total | [int64](#int64) |  | Count of total pages |
| limit | [int64](#int64) |  | Max count blocks per page |
| blocks | [tendermint.types.Block](#tendermint-types-Block) | repeated | List of blocks in current page |






<a name="cosmos-base-abci-v1beta1-SearchTxsResult"></a>

### SearchTxsResult
SearchTxsResult defines a structure for querying txs pageable


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [uint64](#uint64) |  | Count of all txs |
| count | [uint64](#uint64) |  | Count of txs in current page |
| page_number | [uint64](#uint64) |  | Index of current page, start from 1 |
| page_total | [uint64](#uint64) |  | Count of total pages |
| limit | [uint64](#uint64) |  | Max count txs per page |
| txs | [TxResponse](#cosmos-base-abci-v1beta1-TxResponse) | repeated | List of txs in current page |






<a name="cosmos-base-abci-v1beta1-SimulationResponse"></a>

### SimulationResponse
SimulationResponse defines the response generated when a transaction is
successfully simulated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_info | [GasInfo](#cosmos-base-abci-v1beta1-GasInfo) |  |  |
| result | [Result](#cosmos-base-abci-v1beta1-Result) |  |  |






<a name="cosmos-base-abci-v1beta1-StringEvent"></a>

### StringEvent
StringEvent defines en Event object wrapper where all the attributes
contain key/value pairs that are strings instead of raw bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| attributes | [Attribute](#cosmos-base-abci-v1beta1-Attribute) | repeated |  |






<a name="cosmos-base-abci-v1beta1-TxMsgData"></a>

### TxMsgData
TxMsgData defines a list of MsgData. A transaction will have a MsgData object
for each message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [MsgData](#cosmos-base-abci-v1beta1-MsgData) | repeated | **Deprecated.** data field is deprecated and not populated. |
| msg_responses | [google.protobuf.Any](#google-protobuf-Any) | repeated | msg_responses contains the Msg handler responses packed into Anys. |






<a name="cosmos-base-abci-v1beta1-TxResponse"></a>

### TxResponse
TxResponse defines a structure containing relevant tx data and metadata. The
tags are stringified and the log is JSON decoded.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | The block height |
| txhash | [string](#string) |  | The transaction hash. |
| codespace | [string](#string) |  | Namespace for the Code |
| code | [uint32](#uint32) |  | Response code. |
| data | [string](#string) |  | Result bytes, if any. |
| raw_log | [string](#string) |  | The output of the application&#39;s logger (raw string). May be non-deterministic. |
| logs | [ABCIMessageLog](#cosmos-base-abci-v1beta1-ABCIMessageLog) | repeated | The output of the application&#39;s logger (typed). May be non-deterministic. |
| info | [string](#string) |  | Additional information. May be non-deterministic. |
| gas_wanted | [int64](#int64) |  | Amount of gas requested for transaction. |
| gas_used | [int64](#int64) |  | Amount of gas consumed by transaction. |
| tx | [google.protobuf.Any](#google-protobuf-Any) |  | The request transaction bytes. |
| timestamp | [string](#string) |  | Time of the previous block. For heights &gt; 1, it&#39;s the weighted median of the timestamps of the valid votes in the block.LastCommit. For height == 1, it&#39;s genesis time. |
| events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | Events defines all the events emitted by processing a transaction. Note, these events include those emitted by processing all the messages and those emitted from the ante. Whereas Logs contains the events, with additional metadata, emitted only by processing the messages. |





 

 

 

 



<a name="cosmos_base_node_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/node/v1beta1/query.proto



<a name="cosmos-base-node-v1beta1-ConfigRequest"></a>

### ConfigRequest
ConfigRequest defines the request structure for the Config gRPC query.






<a name="cosmos-base-node-v1beta1-ConfigResponse"></a>

### ConfigResponse
ConfigResponse defines the response structure for the Config gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimum_gas_price | [string](#string) |  |  |
| pruning_keep_recent | [string](#string) |  |  |
| pruning_interval | [string](#string) |  |  |
| halt_height | [uint64](#uint64) |  |  |






<a name="cosmos-base-node-v1beta1-StatusRequest"></a>

### StatusRequest
StateRequest defines the request structure for the status of a node.






<a name="cosmos-base-node-v1beta1-StatusResponse"></a>

### StatusResponse
StateResponse defines the response structure for the status of a node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| earliest_store_height | [uint64](#uint64) |  | earliest block height available in the store |
| height | [uint64](#uint64) |  | current block height |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | block height timestamp |
| app_hash | [bytes](#bytes) |  | app hash of the current block |
| validator_hash | [bytes](#bytes) |  | validator hash provided by the consensus header |





 

 

 


<a name="cosmos-base-node-v1beta1-Service"></a>

### Service
Service defines the gRPC querier service for node related queries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Config | [ConfigRequest](#cosmos-base-node-v1beta1-ConfigRequest) | [ConfigResponse](#cosmos-base-node-v1beta1-ConfigResponse) | Config queries for the operator configuration. |
| Status | [StatusRequest](#cosmos-base-node-v1beta1-StatusRequest) | [StatusResponse](#cosmos-base-node-v1beta1-StatusResponse) | Status queries for the node status. |

 



<a name="cosmos_base_reflection_v1beta1_reflection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/reflection/v1beta1/reflection.proto



<a name="cosmos-base-reflection-v1beta1-ListAllInterfacesRequest"></a>

### ListAllInterfacesRequest
ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.






<a name="cosmos-base-reflection-v1beta1-ListAllInterfacesResponse"></a>

### ListAllInterfacesResponse
ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_names | [string](#string) | repeated | interface_names is an array of all the registered interfaces. |






<a name="cosmos-base-reflection-v1beta1-ListImplementationsRequest"></a>

### ListImplementationsRequest
ListImplementationsRequest is the request type of the ListImplementations
RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interface_name | [string](#string) |  | interface_name defines the interface to query the implementations for. |






<a name="cosmos-base-reflection-v1beta1-ListImplementationsResponse"></a>

### ListImplementationsResponse
ListImplementationsResponse is the response type of the ListImplementations
RPC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| implementation_message_names | [string](#string) | repeated |  |





 

 

 


<a name="cosmos-base-reflection-v1beta1-ReflectionService"></a>

### ReflectionService
ReflectionService defines a service for interface reflection.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListAllInterfaces | [ListAllInterfacesRequest](#cosmos-base-reflection-v1beta1-ListAllInterfacesRequest) | [ListAllInterfacesResponse](#cosmos-base-reflection-v1beta1-ListAllInterfacesResponse) | ListAllInterfaces lists all the interfaces registered in the interface registry. |
| ListImplementations | [ListImplementationsRequest](#cosmos-base-reflection-v1beta1-ListImplementationsRequest) | [ListImplementationsResponse](#cosmos-base-reflection-v1beta1-ListImplementationsResponse) | ListImplementations list all the concrete types that implement a given interface. |

 



<a name="cosmos_base_reflection_v2alpha1_reflection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/reflection/v2alpha1/reflection.proto



<a name="cosmos-base-reflection-v2alpha1-AppDescriptor"></a>

### AppDescriptor
AppDescriptor describes a cosmos-sdk based application


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authn | [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor) |  | AuthnDescriptor provides information on how to authenticate transactions on the application NOTE: experimental and subject to change in future releases. |
| chain | [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor) |  | chain provides the chain descriptor |
| codec | [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor) |  | codec provides metadata information regarding codec related types |
| configuration | [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor) |  | configuration provides metadata information regarding the sdk.Config type |
| query_services | [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor) |  | query_services provides metadata information regarding the available queryable endpoints |
| tx | [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor) |  | tx provides metadata information regarding how to send transactions to the given application |






<a name="cosmos-base-reflection-v2alpha1-AuthnDescriptor"></a>

### AuthnDescriptor
AuthnDescriptor provides information on how to sign transactions without relying
on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sign_modes | [SigningModeDescriptor](#cosmos-base-reflection-v2alpha1-SigningModeDescriptor) | repeated | sign_modes defines the supported signature algorithm |






<a name="cosmos-base-reflection-v2alpha1-ChainDescriptor"></a>

### ChainDescriptor
ChainDescriptor describes chain information of the application


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | id is the chain id |






<a name="cosmos-base-reflection-v2alpha1-CodecDescriptor"></a>

### CodecDescriptor
CodecDescriptor describes the registered interfaces and provides metadata information on the types


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| interfaces | [InterfaceDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceDescriptor) | repeated | interfaces is a list of the registered interfaces descriptors |






<a name="cosmos-base-reflection-v2alpha1-ConfigurationDescriptor"></a>

### ConfigurationDescriptor
ConfigurationDescriptor contains metadata information on the sdk.Config


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bech32_account_address_prefix | [string](#string) |  | bech32_account_address_prefix is the account address prefix |






<a name="cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest"></a>

### GetAuthnDescriptorRequest
GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse"></a>

### GetAuthnDescriptorResponse
GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authn | [AuthnDescriptor](#cosmos-base-reflection-v2alpha1-AuthnDescriptor) |  | authn describes how to authenticate to the application when sending transactions |






<a name="cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest"></a>

### GetChainDescriptorRequest
GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse"></a>

### GetChainDescriptorResponse
GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chain | [ChainDescriptor](#cosmos-base-reflection-v2alpha1-ChainDescriptor) |  | chain describes application chain information |






<a name="cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest"></a>

### GetCodecDescriptorRequest
GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse"></a>

### GetCodecDescriptorResponse
GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| codec | [CodecDescriptor](#cosmos-base-reflection-v2alpha1-CodecDescriptor) |  | codec describes the application codec such as registered interfaces and implementations |






<a name="cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest"></a>

### GetConfigurationDescriptorRequest
GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse"></a>

### GetConfigurationDescriptorResponse
GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [ConfigurationDescriptor](#cosmos-base-reflection-v2alpha1-ConfigurationDescriptor) |  | config describes the application&#39;s sdk.Config |






<a name="cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest"></a>

### GetQueryServicesDescriptorRequest
GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse"></a>

### GetQueryServicesDescriptorResponse
GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| queries | [QueryServicesDescriptor](#cosmos-base-reflection-v2alpha1-QueryServicesDescriptor) |  | queries provides information on the available queryable services |






<a name="cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest"></a>

### GetTxDescriptorRequest
GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC






<a name="cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse"></a>

### GetTxDescriptorResponse
GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [TxDescriptor](#cosmos-base-reflection-v2alpha1-TxDescriptor) |  | tx provides information on msgs that can be forwarded to the application alongside the accepted transaction protobuf type |






<a name="cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor"></a>

### InterfaceAcceptingMessageDescriptor
InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
an interface represented as a google.protobuf.Any


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the type containing the interface |
| field_descriptor_names | [string](#string) | repeated | field_descriptor_names is a list of the protobuf name (not fullname) of the field which contains the interface as google.protobuf.Any (the interface is the same, but it can be in multiple fields of the same proto message) |






<a name="cosmos-base-reflection-v2alpha1-InterfaceDescriptor"></a>

### InterfaceDescriptor
InterfaceDescriptor describes the implementation of an interface


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the name of the interface |
| interface_accepting_messages | [InterfaceAcceptingMessageDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceAcceptingMessageDescriptor) | repeated | interface_accepting_messages contains information regarding the proto messages which contain the interface as google.protobuf.Any field |
| interface_implementers | [InterfaceImplementerDescriptor](#cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor) | repeated | interface_implementers is a list of the descriptors of the interface implementers |






<a name="cosmos-base-reflection-v2alpha1-InterfaceImplementerDescriptor"></a>

### InterfaceImplementerDescriptor
InterfaceImplementerDescriptor describes an interface implementer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf queryable name of the interface implementer |
| type_url | [string](#string) |  | type_url defines the type URL used when marshalling the type as any this is required so we can provide type safe google.protobuf.Any marshalling and unmarshalling, making sure that we don&#39;t accept just &#39;any&#39; type in our interface fields |






<a name="cosmos-base-reflection-v2alpha1-MsgDescriptor"></a>

### MsgDescriptor
MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| msg_type_url | [string](#string) |  | msg_type_url contains the TypeURL of a sdk.Msg. |






<a name="cosmos-base-reflection-v2alpha1-QueryMethodDescriptor"></a>

### QueryMethodDescriptor
QueryMethodDescriptor describes a queryable method of a query service
no other info is provided beside method name and tendermint queryable path
because it would be redundant with the grpc reflection service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the protobuf name (not fullname) of the method |
| full_query_path | [string](#string) |  | full_query_path is the path that can be used to query this method via tendermint abci.Query |






<a name="cosmos-base-reflection-v2alpha1-QueryServiceDescriptor"></a>

### QueryServiceDescriptor
QueryServiceDescriptor describes a cosmos-sdk queryable service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the service descriptor |
| is_module | [bool](#bool) |  | is_module describes if this service is actually exposed by an application&#39;s module |
| methods | [QueryMethodDescriptor](#cosmos-base-reflection-v2alpha1-QueryMethodDescriptor) | repeated | methods provides a list of query service methods |






<a name="cosmos-base-reflection-v2alpha1-QueryServicesDescriptor"></a>

### QueryServicesDescriptor
QueryServicesDescriptor contains the list of cosmos-sdk queryable services


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query_services | [QueryServiceDescriptor](#cosmos-base-reflection-v2alpha1-QueryServiceDescriptor) | repeated | query_services is a list of cosmos-sdk QueryServiceDescriptor |






<a name="cosmos-base-reflection-v2alpha1-SigningModeDescriptor"></a>

### SigningModeDescriptor
SigningModeDescriptor provides information on a signing flow of the application
NOTE(fdymylja): here we could go as far as providing an entire flow on how
to sign a message given a SigningModeDescriptor, but it&#39;s better to think about
this another time


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name defines the unique name of the signing mode |
| number | [int32](#int32) |  | number is the unique int32 identifier for the sign_mode enum |
| authn_info_provider_method_fullname | [string](#string) |  | authn_info_provider_method_fullname defines the fullname of the method to call to get the metadata required to authenticate using the provided sign_modes |






<a name="cosmos-base-reflection-v2alpha1-TxDescriptor"></a>

### TxDescriptor
TxDescriptor describes the accepted transaction type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fullname | [string](#string) |  | fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type) it is not meant to support polymorphism of transaction types, it is supposed to be used by reflection clients to understand if they can handle a specific transaction type in an application. |
| msgs | [MsgDescriptor](#cosmos-base-reflection-v2alpha1-MsgDescriptor) | repeated | msgs lists the accepted application messages (sdk.Msg) |





 

 

 


<a name="cosmos-base-reflection-v2alpha1-ReflectionService"></a>

### ReflectionService
ReflectionService defines a service for application reflection.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAuthnDescriptor | [GetAuthnDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorRequest) | [GetAuthnDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetAuthnDescriptorResponse) | GetAuthnDescriptor returns information on how to authenticate transactions in the application NOTE: this RPC is still experimental and might be subject to breaking changes or removal in future releases of the cosmos-sdk. |
| GetChainDescriptor | [GetChainDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetChainDescriptorRequest) | [GetChainDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetChainDescriptorResponse) | GetChainDescriptor returns the description of the chain |
| GetCodecDescriptor | [GetCodecDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorRequest) | [GetCodecDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetCodecDescriptorResponse) | GetCodecDescriptor returns the descriptor of the codec of the application |
| GetConfigurationDescriptor | [GetConfigurationDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorRequest) | [GetConfigurationDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetConfigurationDescriptorResponse) | GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application |
| GetQueryServicesDescriptor | [GetQueryServicesDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorRequest) | [GetQueryServicesDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetQueryServicesDescriptorResponse) | GetQueryServicesDescriptor returns the available gRPC queryable services of the application |
| GetTxDescriptor | [GetTxDescriptorRequest](#cosmos-base-reflection-v2alpha1-GetTxDescriptorRequest) | [GetTxDescriptorResponse](#cosmos-base-reflection-v2alpha1-GetTxDescriptorResponse) | GetTxDescriptor returns information on the used transaction object and available msgs that can be used |

 



<a name="tendermint_p2p_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/p2p/types.proto



<a name="tendermint-p2p-DefaultNodeInfo"></a>

### DefaultNodeInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| protocol_version | [ProtocolVersion](#tendermint-p2p-ProtocolVersion) |  |  |
| default_node_id | [string](#string) |  |  |
| listen_addr | [string](#string) |  |  |
| network | [string](#string) |  |  |
| version | [string](#string) |  |  |
| channels | [bytes](#bytes) |  |  |
| moniker | [string](#string) |  |  |
| other | [DefaultNodeInfoOther](#tendermint-p2p-DefaultNodeInfoOther) |  |  |






<a name="tendermint-p2p-DefaultNodeInfoOther"></a>

### DefaultNodeInfoOther



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_index | [string](#string) |  |  |
| rpc_address | [string](#string) |  |  |






<a name="tendermint-p2p-NetAddress"></a>

### NetAddress



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| ip | [string](#string) |  |  |
| port | [uint32](#uint32) |  |  |






<a name="tendermint-p2p-ProtocolVersion"></a>

### ProtocolVersion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| p2p | [uint64](#uint64) |  |  |
| block | [uint64](#uint64) |  |  |
| app | [uint64](#uint64) |  |  |





 

 

 

 



<a name="cosmos_base_tendermint_v1beta1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/tendermint/v1beta1/types.proto



<a name="cosmos-base-tendermint-v1beta1-Block"></a>

### Block
Block is tendermint type Block, with the Header proposer address
field converted to bech32 string.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [Header](#cosmos-base-tendermint-v1beta1-Header) |  |  |
| data | [tendermint.types.Data](#tendermint-types-Data) |  |  |
| evidence | [tendermint.types.EvidenceList](#tendermint-types-EvidenceList) |  |  |
| last_commit | [tendermint.types.Commit](#tendermint-types-Commit) |  |  |






<a name="cosmos-base-tendermint-v1beta1-Header"></a>

### Header
Header defines the structure of a Tendermint block header.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [tendermint.version.Consensus](#tendermint-version-Consensus) |  | basic block info |
| chain_id | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| last_block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  | prev block info |
| last_commit_hash | [bytes](#bytes) |  | hashes of block data

commit from validators from the last block |
| data_hash | [bytes](#bytes) |  | transactions |
| validators_hash | [bytes](#bytes) |  | hashes from the app output from the prev block

validators for the current block |
| next_validators_hash | [bytes](#bytes) |  | validators for the next block |
| consensus_hash | [bytes](#bytes) |  | consensus params for current block |
| app_hash | [bytes](#bytes) |  | state after txs from the previous block |
| last_results_hash | [bytes](#bytes) |  | root hash of all results from the txs from the previous block |
| evidence_hash | [bytes](#bytes) |  | consensus info

evidence included in the block |
| proposer_address | [string](#string) |  | proposer_address is the original block proposer address, formatted as a Bech32 string. In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string for better UX.

original proposer of the block |





 

 

 

 



<a name="cosmos_base_tendermint_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/base/tendermint/v1beta1/query.proto



<a name="cosmos-base-tendermint-v1beta1-ABCIQueryRequest"></a>

### ABCIQueryRequest
ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |
| path | [string](#string) |  |  |
| height | [int64](#int64) |  |  |
| prove | [bool](#bool) |  |  |






<a name="cosmos-base-tendermint-v1beta1-ABCIQueryResponse"></a>

### ABCIQueryResponse
ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.

Note: This type is a duplicate of the ResponseQuery proto type defined in
Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| log | [string](#string) |  | nondeterministic |
| info | [string](#string) |  | nondeterministic |
| index | [int64](#int64) |  |  |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| proof_ops | [ProofOps](#cosmos-base-tendermint-v1beta1-ProofOps) |  |  |
| height | [int64](#int64) |  |  |
| codespace | [string](#string) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest"></a>

### GetBlockByHeightRequest
GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse"></a>

### GetBlockByHeightResponse
GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  | Deprecated: please use `sdk_block` instead |
| sdk_block | [Block](#cosmos-base-tendermint-v1beta1-Block) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockResultsRequest"></a>

### GetBlockResultsRequest
GetBlockResultsRequest is the request type for the Query/GetBlockResults RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetBlockResultsResponse"></a>

### GetBlockResultsResponse
GetBlockResultsResponse is the response type for the Query/GetBlockResults RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the block height. |
| txs_results | [tendermint.abci.ExecTxResult](#tendermint-abci-ExecTxResult) | repeated | txs_results contains the results of each transaction execution. |
| finalize_block_events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | finalize_block_events contains consensus-level events emitted during block finalization, including slashing, jailing, and validator set updates. |
| validator_updates | [tendermint.abci.ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated | validator_updates contains the validator updates for this block. |
| consensus_param_updates | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  | consensus_param_updates contains any consensus parameter updates for this block. |
| app_hash | [bytes](#bytes) |  | app_hash is the app hash after processing this block. |






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockRequest"></a>

### GetLatestBlockRequest
GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockResponse"></a>

### GetLatestBlockResponse
GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  | Deprecated: please use `sdk_block` instead |
| sdk_block | [Block](#cosmos-base-tendermint-v1beta1-Block) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockResultsRequest"></a>

### GetLatestBlockResultsRequest
GetLatestBlockResultsRequest is the request type for the Query/GetLatestBlockResults RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetLatestBlockResultsResponse"></a>

### GetLatestBlockResultsResponse
GetLatestBlockResultsResponse is the response type for the Query/GetLatestBlockResults RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the block height. |
| txs_results | [tendermint.abci.ExecTxResult](#tendermint-abci-ExecTxResult) | repeated | txs_results contains the results of each transaction execution. |
| finalize_block_events | [tendermint.abci.Event](#tendermint-abci-Event) | repeated | finalize_block_events contains consensus-level events emitted during block finalization, including slashing, jailing, and validator set updates. |
| validator_updates | [tendermint.abci.ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated | validator_updates contains the validator updates for this block. |
| consensus_param_updates | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  | consensus_param_updates contains any consensus parameter updates for this block. |
| app_hash | [bytes](#bytes) |  | app_hash is the app hash after processing this block. |






<a name="cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest"></a>

### GetLatestValidatorSetRequest
GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse"></a>

### GetLatestValidatorSetResponse
GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  |  |
| validators | [Validator](#cosmos-base-tendermint-v1beta1-Validator) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-base-tendermint-v1beta1-GetNodeInfoRequest"></a>

### GetNodeInfoRequest
GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetNodeInfoResponse"></a>

### GetNodeInfoResponse
GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| default_node_info | [tendermint.p2p.DefaultNodeInfo](#tendermint-p2p-DefaultNodeInfo) |  |  |
| application_version | [VersionInfo](#cosmos-base-tendermint-v1beta1-VersionInfo) |  |  |






<a name="cosmos-base-tendermint-v1beta1-GetSyncingRequest"></a>

### GetSyncingRequest
GetSyncingRequest is the request type for the Query/GetSyncing RPC method.






<a name="cosmos-base-tendermint-v1beta1-GetSyncingResponse"></a>

### GetSyncingResponse
GetSyncingResponse is the response type for the Query/GetSyncing RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| syncing | [bool](#bool) |  |  |
| earliest_block_height | [int64](#int64) |  | earliest_block_height is the earliest block height available on this node. |
| latest_block_height | [int64](#int64) |  | latest_block_height is the latest block height available on this node. |






<a name="cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest"></a>

### GetValidatorSetByHeightRequest
GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an pagination for the request. |






<a name="cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse"></a>

### GetValidatorSetByHeightResponse
GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  |  |
| validators | [Validator](#cosmos-base-tendermint-v1beta1-Validator) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines an pagination for the response. |






<a name="cosmos-base-tendermint-v1beta1-Module"></a>

### Module
Module is the type for VersionInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | module path |
| version | [string](#string) |  | module version |
| sum | [string](#string) |  | checksum |






<a name="cosmos-base-tendermint-v1beta1-ProofOp"></a>

### ProofOp
ProofOp defines an operation used for calculating Merkle root. The data could
be arbitrary format, providing necessary data for example neighbouring node
hash.

Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| key | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="cosmos-base-tendermint-v1beta1-ProofOps"></a>

### ProofOps
ProofOps is Merkle proof defined by the list of ProofOps.

Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ops | [ProofOp](#cosmos-base-tendermint-v1beta1-ProofOp) | repeated |  |






<a name="cosmos-base-tendermint-v1beta1-Validator"></a>

### Validator
Validator is the type for the validator-set.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| voting_power | [int64](#int64) |  |  |
| proposer_priority | [int64](#int64) |  |  |






<a name="cosmos-base-tendermint-v1beta1-VersionInfo"></a>

### VersionInfo
VersionInfo is the type for the GetNodeInfoResponse message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| app_name | [string](#string) |  |  |
| version | [string](#string) |  |  |
| git_commit | [string](#string) |  |  |
| build_tags | [string](#string) |  |  |
| go_version | [string](#string) |  |  |
| build_deps | [Module](#cosmos-base-tendermint-v1beta1-Module) | repeated |  |
| cosmos_sdk_version | [string](#string) |  |  |





 

 

 


<a name="cosmos-base-tendermint-v1beta1-Service"></a>

### Service
Service defines the gRPC querier service for tendermint queries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetNodeInfo | [GetNodeInfoRequest](#cosmos-base-tendermint-v1beta1-GetNodeInfoRequest) | [GetNodeInfoResponse](#cosmos-base-tendermint-v1beta1-GetNodeInfoResponse) | GetNodeInfo queries the current node info. |
| GetSyncing | [GetSyncingRequest](#cosmos-base-tendermint-v1beta1-GetSyncingRequest) | [GetSyncingResponse](#cosmos-base-tendermint-v1beta1-GetSyncingResponse) | GetSyncing queries node syncing. |
| GetLatestBlock | [GetLatestBlockRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockRequest) | [GetLatestBlockResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResponse) | GetLatestBlock returns the latest block. |
| GetBlockByHeight | [GetBlockByHeightRequest](#cosmos-base-tendermint-v1beta1-GetBlockByHeightRequest) | [GetBlockByHeightResponse](#cosmos-base-tendermint-v1beta1-GetBlockByHeightResponse) | GetBlockByHeight queries block for given height. |
| GetLatestValidatorSet | [GetLatestValidatorSetRequest](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetRequest) | [GetLatestValidatorSetResponse](#cosmos-base-tendermint-v1beta1-GetLatestValidatorSetResponse) | GetLatestValidatorSet queries latest validator-set. |
| GetValidatorSetByHeight | [GetValidatorSetByHeightRequest](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightRequest) | [GetValidatorSetByHeightResponse](#cosmos-base-tendermint-v1beta1-GetValidatorSetByHeightResponse) | GetValidatorSetByHeight queries validator-set at a given height. |
| ABCIQuery | [ABCIQueryRequest](#cosmos-base-tendermint-v1beta1-ABCIQueryRequest) | [ABCIQueryResponse](#cosmos-base-tendermint-v1beta1-ABCIQueryResponse) | ABCIQuery defines a query handler that supports ABCI queries directly to the application, bypassing Tendermint completely. The ABCI query must contain a valid and supported path, including app, custom, p2p, and store. |
| GetLatestBlockResults | [GetLatestBlockResultsRequest](#cosmos-base-tendermint-v1beta1-GetLatestBlockResultsRequest) | [GetLatestBlockResultsResponse](#cosmos-base-tendermint-v1beta1-GetLatestBlockResultsResponse) | GetLatestBlockResults returns the block results for the latest block. Block results contain finalize_block_events which include consensus-level events like slashing, jailing, and validator set updates. |
| GetBlockResults | [GetBlockResultsRequest](#cosmos-base-tendermint-v1beta1-GetBlockResultsRequest) | [GetBlockResultsResponse](#cosmos-base-tendermint-v1beta1-GetBlockResultsResponse) | GetBlockResults queries block results for given height. |

 



<a name="cosmos_consensus_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/consensus/module/v1/module.proto



<a name="cosmos-consensus-module-v1-Module"></a>

### Module
Module is the config object of the consensus module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_consensus_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/consensus/v1/query.proto



<a name="cosmos-consensus-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest defines the request type for querying x/consensus parameters.






<a name="cosmos-consensus-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse defines the response type for querying x/consensus parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [tendermint.types.ConsensusParams](#tendermint-types-ConsensusParams) |  | params are the tendermint consensus params stored in the consensus module. Please note that `params.version` is not populated in this response, it is tracked separately in the x/upgrade module. |





 

 

 


<a name="cosmos-consensus-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-consensus-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-consensus-v1-QueryParamsResponse) | Params queries the parameters of x/consensus module. |

 



<a name="cosmos_consensus_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/consensus/v1/tx.proto



<a name="cosmos-consensus-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| block | [tendermint.types.BlockParams](#tendermint-types-BlockParams) |  | params defines the x/consensus parameters to update. VersionsParams is not included in this Msg because it is tracked separarately in x/upgrade.

NOTE: All parameters must be supplied. |
| evidence | [tendermint.types.EvidenceParams](#tendermint-types-EvidenceParams) |  |  |
| validator | [tendermint.types.ValidatorParams](#tendermint-types-ValidatorParams) |  |  |
| abci | [tendermint.types.ABCIParams](#tendermint-types-ABCIParams) |  |  |
| auth | [tendermint.types.AuthorityParams](#tendermint-types-AuthorityParams) |  |  |






<a name="cosmos-consensus-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-consensus-v1-Msg"></a>

### Msg
Msg defines the consensus Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-consensus-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-consensus-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/consensus module parameters. The authority is defined in the keeper. |

 



<a name="cosmos_counter_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/counter/module/v1/module.proto



<a name="cosmos-counter-module-v1-Module"></a>

### Module
Module is the config object of the counter module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_counter_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/counter/v1/query.proto



<a name="cosmos-counter-v1-QueryGetCountRequest"></a>

### QueryGetCountRequest
QueryGetCountRequest defines the request type for querying x/mock count.






<a name="cosmos-counter-v1-QueryGetCountResponse"></a>

### QueryGetCountResponse
QueryGetCountResponse defines the response type for querying x/mock count.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_count | [int64](#int64) |  |  |





 

 

 


<a name="cosmos-counter-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetCount | [QueryGetCountRequest](#cosmos-counter-v1-QueryGetCountRequest) | [QueryGetCountResponse](#cosmos-counter-v1-QueryGetCountResponse) | GetCount queries the parameters of x/Counter module. |

 



<a name="cosmos_counter_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/counter/v1/tx.proto



<a name="cosmos-counter-v1-MsgIncreaseCountResponse"></a>

### MsgIncreaseCountResponse
MsgIncreaseCountResponse is the Msg/Counter response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_count | [int64](#int64) |  | new_count is the number of times the counter was incremented. |






<a name="cosmos-counter-v1-MsgIncreaseCounter"></a>

### MsgIncreaseCounter
MsgIncreaseCounter defines a count Msg service counter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer is the address that controls the module (defaults to x/gov unless overwritten). |
| count | [int64](#int64) |  | count is the number of times to increment the counter. |





 

 

 


<a name="cosmos-counter-v1-Msg"></a>

### Msg
Msg defines the counter Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| IncreaseCount | [MsgIncreaseCounter](#cosmos-counter-v1-MsgIncreaseCounter) | [MsgIncreaseCountResponse](#cosmos-counter-v1-MsgIncreaseCountResponse) | IncreaseCount increments the counter by the specified amount. |

 



<a name="cosmos_crypto_bls12_381_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/bls12_381/keys.proto



<a name="cosmos-crypto-bls12_381-PrivKey"></a>

### PrivKey
PrivKey defines a bls12_381 private key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-bls12_381-PubKey"></a>

### PubKey
PubKey is an bls12_381 public key for handling CometBFT keys in SDK.
It&#39;s needed for Any serialization and SDK compatibility.
It must not be used in a non Tendermint key context because it doesn&#39;t implement
ADR-28. Nevertheless, you will like to use bls12_381 in app user level
then you must create a new proto message and follow ADR-28 for Address construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_crypto_ed25519_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/ed25519/keys.proto



<a name="cosmos-crypto-ed25519-PrivKey"></a>

### PrivKey
PrivKey defines a ed25519 private key.
NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-ed25519-PubKey"></a>

### PubKey
PubKey is an ed25519 public key for handling Tendermint keys in SDK.
It&#39;s needed for Any serialization and SDK compatibility.
It must not be used in a non Tendermint key context because it doesn&#39;t implement
ADR-28. Nevertheless, you will like to use ed25519 in app user level
then you must create a new proto message and follow ADR-28 for Address construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_crypto_hd_v1_hd-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/hd/v1/hd.proto



<a name="cosmos-crypto-hd-v1-BIP44Params"></a>

### BIP44Params
BIP44Params is used as path field in ledger item in Record.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| purpose | [uint32](#uint32) |  | purpose is a constant set to 44&#39; (or 0x8000002C) following the BIP43 recommendation |
| coin_type | [uint32](#uint32) |  | coin_type is a constant that improves privacy |
| account | [uint32](#uint32) |  | account splits the key space into independent user identities |
| change | [bool](#bool) |  | change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal chain. |
| address_index | [uint32](#uint32) |  | address_index is used as child index in BIP32 derivation |





 

 

 

 



<a name="cosmos_crypto_keyring_v1_record-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/keyring/v1/record.proto



<a name="cosmos-crypto-keyring-v1-Record"></a>

### Record
Record is used for representing a key in the keyring.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name represents a name of Record |
| pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | pub_key represents a public key in any format |
| local | [Record.Local](#cosmos-crypto-keyring-v1-Record-Local) |  | local stores the private key locally. |
| ledger | [Record.Ledger](#cosmos-crypto-keyring-v1-Record-Ledger) |  | ledger stores the information about a Ledger key. |
| multi | [Record.Multi](#cosmos-crypto-keyring-v1-Record-Multi) |  | Multi does not store any other information. |
| offline | [Record.Offline](#cosmos-crypto-keyring-v1-Record-Offline) |  | Offline does not store any other information. |






<a name="cosmos-crypto-keyring-v1-Record-Ledger"></a>

### Record.Ledger
Ledger item


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [cosmos.crypto.hd.v1.BIP44Params](#cosmos-crypto-hd-v1-BIP44Params) |  |  |






<a name="cosmos-crypto-keyring-v1-Record-Local"></a>

### Record.Local
Item is a keyring item stored in a keyring backend.
Local item


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| priv_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="cosmos-crypto-keyring-v1-Record-Multi"></a>

### Record.Multi
Multi item






<a name="cosmos-crypto-keyring-v1-Record-Offline"></a>

### Record.Offline
Offline item





 

 

 

 



<a name="cosmos_crypto_mldsa65_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/mldsa65/keys.proto



<a name="cosmos-crypto-mldsa65-PrivKey"></a>

### PrivKey
PrivKey defines an ML-DSA-65 private key (FIPS 204 packed form).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-mldsa65-PubKey"></a>

### PubKey
PubKey is an ML-DSA-65 (FIPS 204) public key for handling CometBFT keys in
the SDK. It is intended for validator-key use and must not be used in
application-level account contexts because it does not implement ADR-28
address derivation. If you want to use ML-DSA-65 at the user/account level,
define a new proto message and follow ADR-28 for address construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_crypto_multisig_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/multisig/keys.proto



<a name="cosmos-crypto-multisig-LegacyAminoPubKey"></a>

### LegacyAminoPubKey
LegacyAminoPubKey specifies a public key type
which nests multiple public keys and a threshold,
it uses legacy amino address rules.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| threshold | [uint32](#uint32) |  |  |
| public_keys | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |





 

 

 

 



<a name="cosmos_crypto_multisig_v1beta1_multisig-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/multisig/v1beta1/multisig.proto



<a name="cosmos-crypto-multisig-v1beta1-CompactBitArray"></a>

### CompactBitArray
CompactBitArray is an implementation of a space efficient bit array.
This is used to ensure that the encoded data takes up a minimal amount of
space after proto encoding.
This is not thread safe, and is not intended for concurrent usage.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extra_bits_stored | [uint32](#uint32) |  |  |
| elems | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-multisig-v1beta1-MultiSignature"></a>

### MultiSignature
MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
See cosmos.tx.v1beta1.ModeInfo.Multi for how to specify which signers
signed and with which modes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signatures | [bytes](#bytes) | repeated |  |





 

 

 

 



<a name="cosmos_crypto_secp256k1_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/secp256k1/keys.proto



<a name="cosmos-crypto-secp256k1-PrivKey"></a>

### PrivKey
PrivKey defines a secp256k1 private key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-secp256k1-PubKey"></a>

### PubKey
PubKey defines a secp256k1 public key
Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
if the y-coordinate is the lexicographically largest of the two associated with
the x-coordinate. Otherwise the first byte is a 0x03.
This prefix is followed with the x-coordinate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_crypto_secp256k1eth_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/secp256k1eth/keys.proto



<a name="cosmos-crypto-secp256k1eth-PrivKey"></a>

### PrivKey
PrivKey defines an Ethereum-compatible secp256k1 private key (32-byte
scalar).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |






<a name="cosmos-crypto-secp256k1eth-PubKey"></a>

### PubKey
PubKey is an Ethereum-compatible secp256k1 public key (33-byte compressed
SEC1) for handling CometBFT secp256k1eth validator keys in the SDK. It is
intended for validator-key use only: address derivation is the 20-byte
Ethereum address Keccak256(uncompressedPubKey[1:])[12:], matching CometBFT,
not ADR-28. For user/account-level Ethereum keys use an application key type
such as cosmos/evm&#39;s eth_secp256k1.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_crypto_secp256r1_keys-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/crypto/secp256r1/keys.proto



<a name="cosmos-crypto-secp256r1-PrivKey"></a>

### PrivKey
PrivKey defines a secp256r1 ECDSA private key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| secret | [bytes](#bytes) |  | secret number serialized using big-endian encoding |






<a name="cosmos-crypto-secp256r1-PubKey"></a>

### PubKey
PubKey defines a secp256r1 ECDSA public key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | Point on secp256r1 curve in a compressed representation as specified in section 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998 |





 

 

 

 



<a name="cosmos_distribution_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/module/v1/module.proto



<a name="cosmos-distribution-module-v1-Module"></a>

### Module
Module is the config object of the distribution module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fee_collector_name | [string](#string) |  |  |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_distribution_v1beta1_distribution-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/distribution.proto



<a name="cosmos-distribution-v1beta1-CommunityPoolSpendProposal"></a>

### CommunityPoolSpendProposal
CommunityPoolSpendProposal details a proposal for use of community funds,
together with how many coins are proposed to be spent, and to which
recipient account.

Deprecated: Do not use. As of the Cosmos SDK release v0.47.x, there is no
longer a need for an explicit CommunityPoolSpendProposal. To spend community
pool funds, a simple MsgCommunityPoolSpend can be invoked from the x/gov
module via a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| recipient | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-CommunityPoolSpendProposalWithDeposit"></a>

### CommunityPoolSpendProposalWithDeposit
CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
with a deposit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| recipient | [string](#string) |  |  |
| amount | [string](#string) |  |  |
| deposit | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-DelegationDelegatorReward"></a>

### DelegationDelegatorReward
DelegationDelegatorReward represents the properties
of a delegator&#39;s delegation reward.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  |  |
| reward | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-DelegatorStartingInfo"></a>

### DelegatorStartingInfo
DelegatorStartingInfo represents the starting info for a delegator reward
period. It tracks the previous validator period, the delegation&#39;s amount of
staking token, and the creation height (to check later on if any slashes have
occurred). NOTE: Even though validators are slashed to whole staking tokens,
the delegators within the validator may be left with less than a full token,
thus sdk.Dec is used.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| previous_period | [uint64](#uint64) |  |  |
| stake | [string](#string) |  |  |
| height | [uint64](#uint64) |  |  |






<a name="cosmos-distribution-v1beta1-FeePool"></a>

### FeePool
FeePool is the global fee pool for distribution.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| community_pool | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-Params"></a>

### Params
Params defines the set of params for the distribution module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| community_tax | [string](#string) |  |  |
| base_proposer_reward | [string](#string) |  | **Deprecated.** Deprecated: The base_proposer_reward field is deprecated and is no longer used in the x/distribution module&#39;s reward mechanism. |
| bonus_proposer_reward | [string](#string) |  | **Deprecated.** Deprecated: The bonus_proposer_reward field is deprecated and is no longer used in the x/distribution module&#39;s reward mechanism. |
| withdraw_addr_enabled | [bool](#bool) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorAccumulatedCommission"></a>

### ValidatorAccumulatedCommission
ValidatorAccumulatedCommission represents accumulated commission
for a validator kept as a running counter, can be withdrawn at any time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-ValidatorCurrentRewards"></a>

### ValidatorCurrentRewards
ValidatorCurrentRewards represents current rewards and current
period for a validator kept as a running counter and incremented
each block as long as the validator&#39;s tokens remain constant.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |
| period | [uint64](#uint64) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorHistoricalRewards"></a>

### ValidatorHistoricalRewards
ValidatorHistoricalRewards represents historical rewards for a validator.
Height is implicit within the store key.
Cumulative reward ratio is the sum from the zeroeth period
until this period of rewards / tokens, per the spec.
The reference count indicates the number of objects
which might need to reference this historical entry at any point.
ReferenceCount =
   number of outstanding delegations which ended the associated period (and
   might need to read that record)
 &#43; number of slashes which ended the associated period (and might need to
 read that record)
 &#43; one per validator for the zeroeth period, set on initialization


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cumulative_reward_ratio | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |
| reference_count | [uint32](#uint32) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorOutstandingRewards"></a>

### ValidatorOutstandingRewards
ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
for a validator inexpensive to track, allows simple sanity checks.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated |  |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEvent"></a>

### ValidatorSlashEvent
ValidatorSlashEvent represents a validator slash event.
Height is implicit within the store key.
This is needed to calculate appropriate amount of staking tokens
for delegations which are withdrawn after a slash has occurred.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_period | [uint64](#uint64) |  |  |
| fraction | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEvents"></a>

### ValidatorSlashEvents
ValidatorSlashEvents is a collection of ValidatorSlashEvent messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_slash_events | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) | repeated |  |





 

 

 

 



<a name="cosmos_distribution_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/genesis.proto



<a name="cosmos-distribution-v1beta1-DelegatorStartingInfoRecord"></a>

### DelegatorStartingInfoRecord
DelegatorStartingInfoRecord used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| starting_info | [DelegatorStartingInfo](#cosmos-distribution-v1beta1-DelegatorStartingInfo) |  | starting_info defines the starting info of a delegator. |






<a name="cosmos-distribution-v1beta1-DelegatorWithdrawInfo"></a>

### DelegatorWithdrawInfo
DelegatorWithdrawInfo is the address for where distributions rewards are
withdrawn to by default this struct is only used at genesis to feed in
default withdraw addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the address of the delegator. |
| withdraw_address | [string](#string) |  | withdraw_address is the address to withdraw the delegation rewards to. |






<a name="cosmos-distribution-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the distribution module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines all the parameters of the module. |
| fee_pool | [FeePool](#cosmos-distribution-v1beta1-FeePool) |  | fee_pool defines the fee pool at genesis. |
| delegator_withdraw_infos | [DelegatorWithdrawInfo](#cosmos-distribution-v1beta1-DelegatorWithdrawInfo) | repeated | fee_pool defines the delegator withdraw infos at genesis. |
| previous_proposer | [string](#string) |  | fee_pool defines the previous proposer at genesis. |
| outstanding_rewards | [ValidatorOutstandingRewardsRecord](#cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord) | repeated | fee_pool defines the outstanding rewards of all validators at genesis. |
| validator_accumulated_commissions | [ValidatorAccumulatedCommissionRecord](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord) | repeated | fee_pool defines the accumulated commissions of all validators at genesis. |
| validator_historical_rewards | [ValidatorHistoricalRewardsRecord](#cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord) | repeated | fee_pool defines the historical rewards of all validators at genesis. |
| validator_current_rewards | [ValidatorCurrentRewardsRecord](#cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord) | repeated | fee_pool defines the current rewards of all validators at genesis. |
| delegator_starting_infos | [DelegatorStartingInfoRecord](#cosmos-distribution-v1beta1-DelegatorStartingInfoRecord) | repeated | fee_pool defines the delegator starting infos at genesis. |
| validator_slash_events | [ValidatorSlashEventRecord](#cosmos-distribution-v1beta1-ValidatorSlashEventRecord) | repeated | fee_pool defines the validator slash events at genesis. |






<a name="cosmos-distribution-v1beta1-ValidatorAccumulatedCommissionRecord"></a>

### ValidatorAccumulatedCommissionRecord
ValidatorAccumulatedCommissionRecord is used for import / export via genesis
json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| accumulated | [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission) |  | accumulated is the accumulated commission of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorCurrentRewardsRecord"></a>

### ValidatorCurrentRewardsRecord
ValidatorCurrentRewardsRecord is used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| rewards | [ValidatorCurrentRewards](#cosmos-distribution-v1beta1-ValidatorCurrentRewards) |  | rewards defines the current rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorHistoricalRewardsRecord"></a>

### ValidatorHistoricalRewardsRecord
ValidatorHistoricalRewardsRecord is used for import / export via genesis
json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| period | [uint64](#uint64) |  | period defines the period the historical rewards apply to. |
| rewards | [ValidatorHistoricalRewards](#cosmos-distribution-v1beta1-ValidatorHistoricalRewards) |  | rewards defines the historical rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorOutstandingRewardsRecord"></a>

### ValidatorOutstandingRewardsRecord
ValidatorOutstandingRewardsRecord is used for import/export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| outstanding_rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | outstanding_rewards represents the outstanding rewards of a validator. |






<a name="cosmos-distribution-v1beta1-ValidatorSlashEventRecord"></a>

### ValidatorSlashEventRecord
ValidatorSlashEventRecord is used for import / export via genesis json.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the address of the validator. |
| height | [uint64](#uint64) |  | height defines the block height at which the slash event occurred. |
| period | [uint64](#uint64) |  | period is the period of the slash event. |
| validator_slash_event | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) |  | validator_slash_event describes the slash event. |





 

 

 

 



<a name="cosmos_distribution_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/query.proto



<a name="cosmos-distribution-v1beta1-QueryCommunityPoolRequest"></a>

### QueryCommunityPoolRequest
QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
method.






<a name="cosmos-distribution-v1beta1-QueryCommunityPoolResponse"></a>

### QueryCommunityPoolResponse
QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | pool defines community pool&#39;s coins. |






<a name="cosmos-distribution-v1beta1-QueryDelegationRewardsRequest"></a>

### QueryDelegationRewardsRequest
QueryDelegationRewardsRequest is the request type for the
Query/DelegationRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegationRewardsResponse"></a>

### QueryDelegationRewardsResponse
QueryDelegationRewardsResponse is the response type for the
Query/DelegationRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | rewards defines the rewards accrued by a delegation. |






<a name="cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest"></a>

### QueryDelegationTotalRewardsRequest
QueryDelegationTotalRewardsRequest is the request type for the
Query/DelegationTotalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse"></a>

### QueryDelegationTotalRewardsResponse
QueryDelegationTotalRewardsResponse is the response type for the
Query/DelegationTotalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [DelegationDelegatorReward](#cosmos-distribution-v1beta1-DelegationDelegatorReward) | repeated | rewards defines all the rewards accrued by a delegator. |
| total | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | total defines the sum of all the rewards. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorStartingInfoRequest"></a>

### QueryDelegatorStartingInfoRequest
QueryDelegatorStartingInfoRequest is the request type for the
Query/DelegatorStartingInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorStartingInfoResponse"></a>

### QueryDelegatorStartingInfoResponse
QueryDelegatorStartingInfoResponse is the response type for the
Query/DelegatorStartingInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_info | [DelegatorStartingInfo](#cosmos-distribution-v1beta1-DelegatorStartingInfo) |  | starting_info defines the starting info of a delegator. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest"></a>

### QueryDelegatorValidatorsRequest
QueryDelegatorValidatorsRequest is the request type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse"></a>

### QueryDelegatorValidatorsResponse
QueryDelegatorValidatorsResponse is the response type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [string](#string) | repeated | validators defines the validators a delegator is delegating for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest"></a>

### QueryDelegatorWithdrawAddressRequest
QueryDelegatorWithdrawAddressRequest is the request type for the
Query/DelegatorWithdrawAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse"></a>

### QueryDelegatorWithdrawAddressResponse
QueryDelegatorWithdrawAddressResponse is the response type for the
Query/DelegatorWithdrawAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| withdraw_address | [string](#string) |  | withdraw_address defines the delegator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-distribution-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines the parameters of the module. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCommissionRequest"></a>

### QueryValidatorCommissionRequest
QueryValidatorCommissionRequest is the request type for the
Query/ValidatorCommission RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCommissionResponse"></a>

### QueryValidatorCommissionResponse
QueryValidatorCommissionResponse is the response type for the
Query/ValidatorCommission RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission | [ValidatorAccumulatedCommission](#cosmos-distribution-v1beta1-ValidatorAccumulatedCommission) |  | commission defines the commission the validator received. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsRequest"></a>

### QueryValidatorCurrentRewardsRequest
QueryValidatorCurrentRewardsRequest is the request type for the
Query/ValidatorCurrentRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsResponse"></a>

### QueryValidatorCurrentRewardsResponse
QueryValidatorCurrentRewardsResponse is the response type for the
Query/ValidatorCurrentRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [ValidatorCurrentRewards](#cosmos-distribution-v1beta1-ValidatorCurrentRewards) |  | rewards defines the current rewards of a validator. |






<a name="cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest"></a>

### QueryValidatorDistributionInfoRequest
QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse"></a>

### QueryValidatorDistributionInfoResponse
QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operator_address | [string](#string) |  | operator_address defines the validator operator address. |
| self_bond_rewards | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | self_bond_rewards defines the self delegations rewards. |
| commission | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | commission defines the commission the validator received. |






<a name="cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsRequest"></a>

### QueryValidatorHistoricalRewardsRequest
QueryValidatorHistoricalRewardsRequest is the request type for the
Query/ValidatorHistoricalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |
| period | [uint64](#uint64) |  | period defines the period to query historical rewards for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsResponse"></a>

### QueryValidatorHistoricalRewardsResponse
QueryValidatorHistoricalRewardsResponse is the response type for the
Query/ValidatorHistoricalRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [ValidatorHistoricalRewards](#cosmos-distribution-v1beta1-ValidatorHistoricalRewards) |  | rewards defines the historical rewards of a validator. |






<a name="cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest"></a>

### QueryValidatorOutstandingRewardsRequest
QueryValidatorOutstandingRewardsRequest is the request type for the
Query/ValidatorOutstandingRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |






<a name="cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse"></a>

### QueryValidatorOutstandingRewardsResponse
QueryValidatorOutstandingRewardsResponse is the response type for the
Query/ValidatorOutstandingRewards RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rewards | [ValidatorOutstandingRewards](#cosmos-distribution-v1beta1-ValidatorOutstandingRewards) |  |  |






<a name="cosmos-distribution-v1beta1-QueryValidatorSlashesRequest"></a>

### QueryValidatorSlashesRequest
QueryValidatorSlashesRequest is the request type for the
Query/ValidatorSlashes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address defines the validator address to query for. |
| starting_height | [uint64](#uint64) |  | starting_height defines the optional starting height to query the slashes. |
| ending_height | [uint64](#uint64) |  | starting_height defines the optional ending height to query the slashes. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-distribution-v1beta1-QueryValidatorSlashesResponse"></a>

### QueryValidatorSlashesResponse
QueryValidatorSlashesResponse is the response type for the
Query/ValidatorSlashes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slashes | [ValidatorSlashEvent](#cosmos-distribution-v1beta1-ValidatorSlashEvent) | repeated | slashes defines the slashes the validator received. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-distribution-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service for distribution module.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-distribution-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-distribution-v1beta1-QueryParamsResponse) | Params queries params of the distribution module. |
| ValidatorDistributionInfo | [QueryValidatorDistributionInfoRequest](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoRequest) | [QueryValidatorDistributionInfoResponse](#cosmos-distribution-v1beta1-QueryValidatorDistributionInfoResponse) | ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator |
| ValidatorOutstandingRewards | [QueryValidatorOutstandingRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsRequest) | [QueryValidatorOutstandingRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorOutstandingRewardsResponse) | ValidatorOutstandingRewards queries rewards of a validator address. |
| ValidatorCommission | [QueryValidatorCommissionRequest](#cosmos-distribution-v1beta1-QueryValidatorCommissionRequest) | [QueryValidatorCommissionResponse](#cosmos-distribution-v1beta1-QueryValidatorCommissionResponse) | ValidatorCommission queries accumulated commission for a validator. |
| ValidatorSlashes | [QueryValidatorSlashesRequest](#cosmos-distribution-v1beta1-QueryValidatorSlashesRequest) | [QueryValidatorSlashesResponse](#cosmos-distribution-v1beta1-QueryValidatorSlashesResponse) | ValidatorSlashes queries slash events of a validator. |
| DelegationRewards | [QueryDelegationRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationRewardsRequest) | [QueryDelegationRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationRewardsResponse) | DelegationRewards queries the total rewards accrued by a delegation. |
| DelegationTotalRewards | [QueryDelegationTotalRewardsRequest](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsRequest) | [QueryDelegationTotalRewardsResponse](#cosmos-distribution-v1beta1-QueryDelegationTotalRewardsResponse) | DelegationTotalRewards queries the total rewards accrued by each validator. |
| DelegatorValidators | [QueryDelegatorValidatorsRequest](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsRequest) | [QueryDelegatorValidatorsResponse](#cosmos-distribution-v1beta1-QueryDelegatorValidatorsResponse) | DelegatorValidators queries the validators of a delegator. |
| DelegatorWithdrawAddress | [QueryDelegatorWithdrawAddressRequest](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressRequest) | [QueryDelegatorWithdrawAddressResponse](#cosmos-distribution-v1beta1-QueryDelegatorWithdrawAddressResponse) | DelegatorWithdrawAddress queries withdraw address of a delegator. |
| CommunityPool | [QueryCommunityPoolRequest](#cosmos-distribution-v1beta1-QueryCommunityPoolRequest) | [QueryCommunityPoolResponse](#cosmos-distribution-v1beta1-QueryCommunityPoolResponse) | CommunityPool queries the community pool coins. |
| ValidatorHistoricalRewards | [QueryValidatorHistoricalRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsRequest) | [QueryValidatorHistoricalRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorHistoricalRewardsResponse) | ValidatorHistoricalRewards queries historical rewards for a validator at a specific period. |
| ValidatorCurrentRewards | [QueryValidatorCurrentRewardsRequest](#cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsRequest) | [QueryValidatorCurrentRewardsResponse](#cosmos-distribution-v1beta1-QueryValidatorCurrentRewardsResponse) | ValidatorCurrentRewards queries current rewards for a validator. |
| DelegatorStartingInfo | [QueryDelegatorStartingInfoRequest](#cosmos-distribution-v1beta1-QueryDelegatorStartingInfoRequest) | [QueryDelegatorStartingInfoResponse](#cosmos-distribution-v1beta1-QueryDelegatorStartingInfoResponse) | DelegatorStartingInfo queries the starting info for a delegator. |

 



<a name="cosmos_distribution_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/distribution/v1beta1/tx.proto



<a name="cosmos-distribution-v1beta1-MsgCommunityPoolSpend"></a>

### MsgCommunityPoolSpend
MsgCommunityPoolSpend defines a message for sending tokens from the community
pool to another account. This message is typically executed via a governance
proposal with the governance module being the executing authority.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| recipient | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse"></a>

### MsgCommunityPoolSpendResponse
MsgCommunityPoolSpendResponse defines the response to executing a
MsgCommunityPoolSpend message.






<a name="cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool"></a>

### MsgDepositValidatorRewardsPool
DepositValidatorRewardsPool defines the request structure to provide
additional rewards to delegators from a specific validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| depositor | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse"></a>

### MsgDepositValidatorRewardsPoolResponse
MsgDepositValidatorRewardsPoolResponse defines the response to executing a
MsgDepositValidatorRewardsPool message.






<a name="cosmos-distribution-v1beta1-MsgFundCommunityPool"></a>

### MsgFundCommunityPool
MsgFundCommunityPool allows an account to directly
fund the community pool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| depositor | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse"></a>

### MsgFundCommunityPoolResponse
MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.






<a name="cosmos-distribution-v1beta1-MsgSetWithdrawAddress"></a>

### MsgSetWithdrawAddress
MsgSetWithdrawAddress sets the withdraw address for
a delegator (or validator self-delegation).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| withdraw_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse"></a>

### MsgSetWithdrawAddressResponse
MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
type.






<a name="cosmos-distribution-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-distribution-v1beta1-Params) |  | params defines the x/distribution parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-distribution-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward"></a>

### MsgWithdrawDelegatorReward
MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
from a single validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse"></a>

### MsgWithdrawDelegatorRewardResponse
MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission"></a>

### MsgWithdrawValidatorCommission
MsgWithdrawValidatorCommission withdraws the full commission to the validator
address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  |  |






<a name="cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse"></a>

### MsgWithdrawValidatorCommissionResponse
MsgWithdrawValidatorCommissionResponse defines the
Msg/WithdrawValidatorCommission response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |





 

 

 


<a name="cosmos-distribution-v1beta1-Msg"></a>

### Msg
Msg defines the distribution Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SetWithdrawAddress | [MsgSetWithdrawAddress](#cosmos-distribution-v1beta1-MsgSetWithdrawAddress) | [MsgSetWithdrawAddressResponse](#cosmos-distribution-v1beta1-MsgSetWithdrawAddressResponse) | SetWithdrawAddress defines a method to change the withdraw address for a delegator (or validator self-delegation). |
| WithdrawDelegatorReward | [MsgWithdrawDelegatorReward](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorReward) | [MsgWithdrawDelegatorRewardResponse](#cosmos-distribution-v1beta1-MsgWithdrawDelegatorRewardResponse) | WithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator. |
| WithdrawValidatorCommission | [MsgWithdrawValidatorCommission](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommission) | [MsgWithdrawValidatorCommissionResponse](#cosmos-distribution-v1beta1-MsgWithdrawValidatorCommissionResponse) | WithdrawValidatorCommission defines a method to withdraw the full commission to the validator address. |
| FundCommunityPool | [MsgFundCommunityPool](#cosmos-distribution-v1beta1-MsgFundCommunityPool) | [MsgFundCommunityPoolResponse](#cosmos-distribution-v1beta1-MsgFundCommunityPoolResponse) | FundCommunityPool defines a method to allow an account to directly fund the community pool. |
| UpdateParams | [MsgUpdateParams](#cosmos-distribution-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-distribution-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/distribution module parameters. The authority is defined in the keeper. |
| CommunityPoolSpend | [MsgCommunityPoolSpend](#cosmos-distribution-v1beta1-MsgCommunityPoolSpend) | [MsgCommunityPoolSpendResponse](#cosmos-distribution-v1beta1-MsgCommunityPoolSpendResponse) | CommunityPoolSpend defines a governance operation for sending tokens from the community pool in the x/distribution module to another account, which could be the governance module itself. The authority is defined in the keeper. |
| DepositValidatorRewardsPool | [MsgDepositValidatorRewardsPool](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPool) | [MsgDepositValidatorRewardsPoolResponse](#cosmos-distribution-v1beta1-MsgDepositValidatorRewardsPoolResponse) | DepositValidatorRewardsPool defines a method to provide additional rewards to delegators to a specific validator. |

 



<a name="cosmos_epochs_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/module/v1/module.proto



<a name="cosmos-epochs-module-v1-Module"></a>

### Module
Module is the config object of the epochs module.





 

 

 

 



<a name="cosmos_epochs_v1beta1_events-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/events.proto



<a name="cosmos-epochs-v1beta1-EventEpochEnd"></a>

### EventEpochEnd
EventEpochEnd is an event emitted when an epoch end.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [int64](#int64) |  |  |






<a name="cosmos-epochs-v1beta1-EventEpochStart"></a>

### EventEpochStart
EventEpochStart is an event emitted when an epoch start.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [int64](#int64) |  |  |
| epoch_start_time | [int64](#int64) |  |  |





 

 

 

 



<a name="cosmos_epochs_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/genesis.proto



<a name="cosmos-epochs-v1beta1-EpochInfo"></a>

### EpochInfo
EpochInfo is a struct that describes the data going into
a timer defined by the x/epochs module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | identifier is a unique reference to this particular timer. |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time. |
| duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero. |
| current_epoch | [int64](#int64) |  | current_epoch is the current epoch number, or in other words, how many times has the timer &#39;ticked&#39;. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time. |
| current_epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time &#43; duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time &#43; duration only one timer tick for a given identifier can occur per block.

NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be &gt;&gt; current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40] |
| epoch_counting_started | [bool](#bool) |  | epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet. |
| current_epoch_start_height | [int64](#int64) |  | current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked) |






<a name="cosmos-epochs-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the epochs module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 

 



<a name="cosmos_epochs_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/epochs/v1beta1/query.proto



<a name="cosmos-epochs-v1beta1-QueryCurrentEpochRequest"></a>

### QueryCurrentEpochRequest
QueryCurrentEpochRequest defines the gRPC request structure for
querying an epoch by its identifier.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  |  |






<a name="cosmos-epochs-v1beta1-QueryCurrentEpochResponse"></a>

### QueryCurrentEpochResponse
QueryCurrentEpochResponse defines the gRPC response structure for
querying an epoch by its identifier.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_epoch | [int64](#int64) |  |  |






<a name="cosmos-epochs-v1beta1-QueryEpochInfosRequest"></a>

### QueryEpochInfosRequest
QueryEpochInfosRequest defines the gRPC request structure for
querying all epoch info.






<a name="cosmos-epochs-v1beta1-QueryEpochInfosResponse"></a>

### QueryEpochInfosResponse
QueryEpochInfosRequest defines the gRPC response structure for
querying all epoch info.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#cosmos-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 


<a name="cosmos-epochs-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| EpochInfos | [QueryEpochInfosRequest](#cosmos-epochs-v1beta1-QueryEpochInfosRequest) | [QueryEpochInfosResponse](#cosmos-epochs-v1beta1-QueryEpochInfosResponse) | EpochInfos provide running epochInfos |
| CurrentEpoch | [QueryCurrentEpochRequest](#cosmos-epochs-v1beta1-QueryCurrentEpochRequest) | [QueryCurrentEpochResponse](#cosmos-epochs-v1beta1-QueryCurrentEpochResponse) | CurrentEpoch provide current epoch of specified identifier |

 



<a name="cosmos_evidence_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/module/v1/module.proto



<a name="cosmos-evidence-module-v1-Module"></a>

### Module
Module is the config object of the evidence module.





 

 

 

 



<a name="cosmos_evidence_v1beta1_evidence-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/evidence.proto



<a name="cosmos-evidence-v1beta1-Equivocation"></a>

### Equivocation
Equivocation implements the Evidence interface and defines evidence of double
signing misbehavior.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the equivocation height. |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | time is the equivocation time. |
| power | [int64](#int64) |  | power is the equivocation validator power. |
| consensus_address | [string](#string) |  | consensus_address is the equivocation validator consensus address. |





 

 

 

 



<a name="cosmos_evidence_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/genesis.proto



<a name="cosmos-evidence-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the evidence module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) | repeated | evidence defines all the evidence at genesis. |





 

 

 

 



<a name="cosmos_evidence_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/query.proto



<a name="cosmos-evidence-v1beta1-QueryAllEvidenceRequest"></a>

### QueryAllEvidenceRequest
QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-evidence-v1beta1-QueryAllEvidenceResponse"></a>

### QueryAllEvidenceResponse
QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) | repeated | evidence returns all evidences. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-evidence-v1beta1-QueryEvidenceRequest"></a>

### QueryEvidenceRequest
QueryEvidenceRequest is the request type for the Query/Evidence RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence_hash | [bytes](#bytes) |  | **Deprecated.** evidence_hash defines the hash of the requested evidence. Deprecated: Use hash, a HEX encoded string, instead. |
| hash | [string](#string) |  | hash defines the evidence hash of the requested evidence. |






<a name="cosmos-evidence-v1beta1-QueryEvidenceResponse"></a>

### QueryEvidenceResponse
QueryEvidenceResponse is the response type for the Query/Evidence RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evidence | [google.protobuf.Any](#google-protobuf-Any) |  | evidence returns the requested evidence. |





 

 

 


<a name="cosmos-evidence-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Evidence | [QueryEvidenceRequest](#cosmos-evidence-v1beta1-QueryEvidenceRequest) | [QueryEvidenceResponse](#cosmos-evidence-v1beta1-QueryEvidenceResponse) | Evidence queries evidence based on evidence hash. |
| AllEvidence | [QueryAllEvidenceRequest](#cosmos-evidence-v1beta1-QueryAllEvidenceRequest) | [QueryAllEvidenceResponse](#cosmos-evidence-v1beta1-QueryAllEvidenceResponse) | AllEvidence queries all evidence. |

 



<a name="cosmos_evidence_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/evidence/v1beta1/tx.proto



<a name="cosmos-evidence-v1beta1-MsgSubmitEvidence"></a>

### MsgSubmitEvidence
MsgSubmitEvidence represents a message that supports submitting arbitrary
Evidence of misbehavior such as equivocation or counterfactual signing.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| submitter | [string](#string) |  | submitter is the signer account address of evidence. |
| evidence | [google.protobuf.Any](#google-protobuf-Any) |  | evidence defines the evidence of misbehavior. |






<a name="cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse"></a>

### MsgSubmitEvidenceResponse
MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | hash defines the hash of the evidence. |





 

 

 


<a name="cosmos-evidence-v1beta1-Msg"></a>

### Msg
Msg defines the evidence Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitEvidence | [MsgSubmitEvidence](#cosmos-evidence-v1beta1-MsgSubmitEvidence) | [MsgSubmitEvidenceResponse](#cosmos-evidence-v1beta1-MsgSubmitEvidenceResponse) | SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or counterfactual signing. |

 



<a name="cosmos_feegrant_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/module/v1/module.proto



<a name="cosmos-feegrant-module-v1-Module"></a>

### Module
Module is the config object of the feegrant module.





 

 

 

 



<a name="cosmos_feegrant_v1beta1_feegrant-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/feegrant.proto



<a name="cosmos-feegrant-v1beta1-AllowedMsgAllowance"></a>

### AllowedMsgAllowance
AllowedMsgAllowance creates allowance only for specified message types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic and periodic fee allowance. |
| allowed_messages | [string](#string) | repeated | allowed_messages are the messages for which the grantee has the access. |






<a name="cosmos-feegrant-v1beta1-BasicAllowance"></a>

### BasicAllowance
BasicAllowance implements Allowance with a one-time grant of coins
that optionally expires. The grantee can use up to SpendLimit to cover fees.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | spend_limit specifies the maximum amount of coins that can be spent by this allowance and will be updated as coins are spent. If it is empty, there is no spend limit and any amount of coins can be spent. |
| expiration | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | expiration specifies an optional time when this allowance expires |






<a name="cosmos-feegrant-v1beta1-Grant"></a>

### Grant
Grant is stored in the KVStore to record a grant with full context


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic, periodic, allowed fee allowance. |






<a name="cosmos-feegrant-v1beta1-PeriodicAllowance"></a>

### PeriodicAllowance
PeriodicAllowance extends Allowance to allow for both a maximum cap,
as well as a limit per time period.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basic | [BasicAllowance](#cosmos-feegrant-v1beta1-BasicAllowance) |  | basic specifies a struct of `BasicAllowance` |
| period | [google.protobuf.Duration](#google-protobuf-Duration) |  | period specifies the time duration in which period_spend_limit coins can be spent before that allowance is reset |
| period_spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | period_spend_limit specifies the maximum number of coins that can be spent in the period |
| period_can_spend | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | period_can_spend is the number of coins left to be spent before the period_reset time |
| period_reset | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | period_reset is the time at which this period resets and a new one begins, it is calculated from the start time of the first transaction after the last period ended |





 

 

 

 



<a name="cosmos_feegrant_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/genesis.proto



<a name="cosmos-feegrant-v1beta1-GenesisState"></a>

### GenesisState
GenesisState contains a set of fee allowances, persisted from the store


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated |  |





 

 

 

 



<a name="cosmos_feegrant_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/query.proto



<a name="cosmos-feegrant-v1beta1-QueryAllowanceRequest"></a>

### QueryAllowanceRequest
QueryAllowanceRequest is the request type for the Query/Allowance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |






<a name="cosmos-feegrant-v1beta1-QueryAllowanceResponse"></a>

### QueryAllowanceResponse
QueryAllowanceResponse is the response type for the Query/Allowance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [Grant](#cosmos-feegrant-v1beta1-Grant) |  | allowance is an allowance granted for grantee by granter. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest"></a>

### QueryAllowancesByGranterRequest
QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse"></a>

### QueryAllowancesByGranterResponse
QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances that have been issued by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesRequest"></a>

### QueryAllowancesRequest
QueryAllowancesRequest is the request type for the Query/Allowances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-feegrant-v1beta1-QueryAllowancesResponse"></a>

### QueryAllowancesResponse
QueryAllowancesResponse is the response type for the Query/Allowances RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances are allowance&#39;s granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |





 

 

 


<a name="cosmos-feegrant-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Allowance | [QueryAllowanceRequest](#cosmos-feegrant-v1beta1-QueryAllowanceRequest) | [QueryAllowanceResponse](#cosmos-feegrant-v1beta1-QueryAllowanceResponse) | Allowance returns granted allowance to the grantee by the granter. |
| Allowances | [QueryAllowancesRequest](#cosmos-feegrant-v1beta1-QueryAllowancesRequest) | [QueryAllowancesResponse](#cosmos-feegrant-v1beta1-QueryAllowancesResponse) | Allowances returns all the grants for the given grantee address. |
| AllowancesByGranter | [QueryAllowancesByGranterRequest](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterRequest) | [QueryAllowancesByGranterResponse](#cosmos-feegrant-v1beta1-QueryAllowancesByGranterResponse) | AllowancesByGranter returns all the grants given by an address |

 



<a name="cosmos_feegrant_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/feegrant/v1beta1/tx.proto



<a name="cosmos-feegrant-v1beta1-MsgGrantAllowance"></a>

### MsgGrantAllowance
MsgGrantAllowance adds permission for Grantee to spend up to Allowance
of fees from the account of Granter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic, periodic, allowed fee allowance. |






<a name="cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse"></a>

### MsgGrantAllowanceResponse
MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.






<a name="cosmos-feegrant-v1beta1-MsgPruneAllowances"></a>

### MsgPruneAllowances
MsgPruneAllowances prunes expired fee allowances.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pruner | [string](#string) |  | pruner is the address of the user pruning expired allowances. |






<a name="cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse"></a>

### MsgPruneAllowancesResponse
MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.






<a name="cosmos-feegrant-v1beta1-MsgRevokeAllowance"></a>

### MsgRevokeAllowance
MsgRevokeAllowance removes any existing Allowance from Granter to Grantee.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |






<a name="cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse"></a>

### MsgRevokeAllowanceResponse
MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.





 

 

 


<a name="cosmos-feegrant-v1beta1-Msg"></a>

### Msg
Msg defines the feegrant msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GrantAllowance | [MsgGrantAllowance](#cosmos-feegrant-v1beta1-MsgGrantAllowance) | [MsgGrantAllowanceResponse](#cosmos-feegrant-v1beta1-MsgGrantAllowanceResponse) | GrantAllowance grants fee allowance to the grantee on the granter&#39;s account with the provided expiration time. |
| RevokeAllowance | [MsgRevokeAllowance](#cosmos-feegrant-v1beta1-MsgRevokeAllowance) | [MsgRevokeAllowanceResponse](#cosmos-feegrant-v1beta1-MsgRevokeAllowanceResponse) | RevokeAllowance revokes any fee allowance of granter&#39;s account that has been granted to the grantee. |
| PruneAllowances | [MsgPruneAllowances](#cosmos-feegrant-v1beta1-MsgPruneAllowances) | [MsgPruneAllowancesResponse](#cosmos-feegrant-v1beta1-MsgPruneAllowancesResponse) | PruneAllowances prunes expired fee allowances, currently up to 75 at a time. |

 



<a name="cosmos_genutil_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/genutil/module/v1/module.proto



<a name="cosmos-genutil-module-v1-Module"></a>

### Module
Module is the config object for the genutil module.





 

 

 

 



<a name="cosmos_genutil_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/genutil/v1beta1/genesis.proto



<a name="cosmos-genutil-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the raw genesis transaction in JSON.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gen_txs | [bytes](#bytes) | repeated | gen_txs defines the genesis transactions. |





 

 

 

 



<a name="cosmos_gov_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/module/v1/module.proto



<a name="cosmos-gov-module-v1-Module"></a>

### Module
Module is the config object of the gov module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_metadata_len | [uint64](#uint64) |  | max_metadata_len defines the maximum proposal metadata length. Defaults to 255 if not explicitly set. |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_gov_v1_gov-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/gov.proto



<a name="cosmos-gov-v1-Deposit"></a>

### Deposit
Deposit defines an amount deposited by an account address to an active
proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1-DepositParams"></a>

### DepositParams
DepositParams defines the params for deposits on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |






<a name="cosmos-gov-v1-Params"></a>

### Params
Params defines the parameters for the x/gov module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |
| quorum | [string](#string) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [string](#string) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |
| min_initial_deposit_ratio | [string](#string) |  | The ratio representing the proportion of the deposit value that must be paid at proposal submission. |
| proposal_cancel_ratio | [string](#string) |  | The cancel ratio which will not be returned back to the depositors when a proposal is cancelled. |
| proposal_cancel_dest | [string](#string) |  | The address which will receive (proposal_cancel_ratio * deposit) proposal deposits. If empty, the (proposal_cancel_ratio * deposit) proposal deposits will be burned. |
| expedited_voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period of an expedited proposal. |
| expedited_threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.67. |
| expedited_min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum expedited deposit for a proposal to enter voting period. |
| burn_vote_quorum | [bool](#bool) |  | burn deposits if a proposal does not meet quorum |
| burn_proposal_deposit_prevote | [bool](#bool) |  | burn deposits if the proposal does not enter voting period |
| burn_vote_veto | [bool](#bool) |  | burn deposits if quorum with vote type no_veto is met |
| min_deposit_ratio | [string](#string) |  | The ratio representing the proportion of the deposit value minimum that must be met when making a deposit. Default value: 0.01. Meaning that for a chain with a min_deposit of 100stake, a deposit of 1stake would be required. |






<a name="cosmos-gov-v1-Proposal"></a>

### Proposal
Proposal defines the core field members of a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id defines the unique id of the proposal. |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages are the arbitrary messages to be executed if the proposal passes. |
| status | [ProposalStatus](#cosmos-gov-v1-ProposalStatus) |  | status defines the proposal status. |
| final_tally_result | [TallyResult](#cosmos-gov-v1-TallyResult) |  | final_tally_result is the final tally result of the proposal. When querying a proposal via gRPC, this field is not populated until the proposal&#39;s voting period has ended. |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is the time of proposal submission. |
| deposit_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | deposit_end_time is the end time for deposition. |
| total_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_deposit is the total deposit on the proposal. |
| voting_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_start_time is the starting time to vote on a proposal. |
| voting_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_end_time is the end time of voting on a proposal. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#proposal-3 |
| title | [string](#string) |  | title is the title of the proposal |
| summary | [string](#string) |  | summary is a short summary of the proposal |
| proposer | [string](#string) |  | proposer is the address of the proposal submitter |
| expedited | [bool](#bool) |  | expedited defines if the proposal is expedited |
| failed_reason | [string](#string) |  | failed_reason defines the reason why the proposal failed |






<a name="cosmos-gov-v1-TallyParams"></a>

### TallyParams
TallyParams defines the params for tallying votes on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quorum | [string](#string) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [string](#string) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [string](#string) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |






<a name="cosmos-gov-v1-TallyResult"></a>

### TallyResult
TallyResult defines a standard tally for a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| yes_count | [string](#string) |  | yes_count is the number of yes votes on a proposal. |
| abstain_count | [string](#string) |  | abstain_count is the number of abstain votes on a proposal. |
| no_count | [string](#string) |  | no_count is the number of no votes on a proposal. |
| no_with_veto_count | [string](#string) |  | no_with_veto_count is the number of no with veto votes on a proposal. |






<a name="cosmos-gov-v1-Vote"></a>

### Vote
Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address of the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption) | repeated | options is the weighted vote options. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the vote. the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/gov#vote-5 |






<a name="cosmos-gov-v1-VotingParams"></a>

### VotingParams
VotingParams defines the params for voting on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |






<a name="cosmos-gov-v1-WeightedVoteOption"></a>

### WeightedVoteOption
WeightedVoteOption defines a unit of vote for vote split.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| option | [VoteOption](#cosmos-gov-v1-VoteOption) |  | option defines the valid vote options, it must not contain duplicate vote options. |
| weight | [string](#string) |  | weight is the vote weight associated with the vote option. |





 


<a name="cosmos-gov-v1-ProposalStatus"></a>

### ProposalStatus
ProposalStatus enumerates the valid statuses of a proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROPOSAL_STATUS_UNSPECIFIED | 0 | PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. |
| PROPOSAL_STATUS_DEPOSIT_PERIOD | 1 | PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit period. |
| PROPOSAL_STATUS_VOTING_PERIOD | 2 | PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting period. |
| PROPOSAL_STATUS_PASSED | 3 | PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has passed. |
| PROPOSAL_STATUS_REJECTED | 4 | PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has been rejected. |
| PROPOSAL_STATUS_FAILED | 5 | PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has failed. |



<a name="cosmos-gov-v1-VoteOption"></a>

### VoteOption
VoteOption enumerates the valid vote options for a given governance proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VOTE_OPTION_UNSPECIFIED | 0 | VOTE_OPTION_UNSPECIFIED defines a no-op vote option. |
| VOTE_OPTION_YES | 1 | VOTE_OPTION_YES defines a yes vote option. |
| VOTE_OPTION_ABSTAIN | 2 | VOTE_OPTION_ABSTAIN defines an abstain vote option. |
| VOTE_OPTION_NO | 3 | VOTE_OPTION_NO defines a no vote option. |
| VOTE_OPTION_NO_WITH_VETO | 4 | VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. |


 

 

 



<a name="cosmos_gov_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/genesis.proto



<a name="cosmos-gov-v1-GenesisState"></a>

### GenesisState
GenesisState defines the gov module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_proposal_id | [uint64](#uint64) |  | starting_proposal_id is the ID of the starting proposal. |
| deposits | [Deposit](#cosmos-gov-v1-Deposit) | repeated | deposits defines all the deposits present at genesis. |
| votes | [Vote](#cosmos-gov-v1-Vote) | repeated | votes defines all the votes present at genesis. |
| proposals | [Proposal](#cosmos-gov-v1-Proposal) | repeated | proposals defines all the proposals present at genesis. |
| deposit_params | [DepositParams](#cosmos-gov-v1-DepositParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. deposit_params defines all the parameters of related to deposit. |
| voting_params | [VotingParams](#cosmos-gov-v1-VotingParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. voting_params defines all the parameters of related to voting. |
| tally_params | [TallyParams](#cosmos-gov-v1-TallyParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. tally_params defines all the parameters of related to tally. |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines all the parameters of x/gov module. |
| constitution | [string](#string) |  | The constitution allows builders to lay a foundation and define purpose. This is an immutable string set in genesis. There are no amendments, to go outside of scope, just fork. constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals. |





 

 

 

 



<a name="cosmos_gov_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/query.proto



<a name="cosmos-gov-v1-QueryConstitutionRequest"></a>

### QueryConstitutionRequest
QueryConstitutionRequest is the request type for the Query/Constitution RPC method






<a name="cosmos-gov-v1-QueryConstitutionResponse"></a>

### QueryConstitutionResponse
QueryConstitutionResponse is the response type for the Query/Constitution RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| constitution | [string](#string) |  |  |






<a name="cosmos-gov-v1-QueryDepositRequest"></a>

### QueryDepositRequest
QueryDepositRequest is the request type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |






<a name="cosmos-gov-v1-QueryDepositResponse"></a>

### QueryDepositResponse
QueryDepositResponse is the response type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposit | [Deposit](#cosmos-gov-v1-Deposit) |  | deposit defines the requested deposit. |






<a name="cosmos-gov-v1-QueryDepositsRequest"></a>

### QueryDepositsRequest
QueryDepositsRequest is the request type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryDepositsResponse"></a>

### QueryDepositsResponse
QueryDepositsResponse is the response type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposits | [Deposit](#cosmos-gov-v1-Deposit) | repeated | deposits defines the requested deposits. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params_type | [string](#string) |  | params_type defines which parameters to query for, can be one of &#34;voting&#34;, &#34;tallying&#34; or &#34;deposit&#34;. |






<a name="cosmos-gov-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_params | [VotingParams](#cosmos-gov-v1-VotingParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. voting_params defines the parameters related to voting. |
| deposit_params | [DepositParams](#cosmos-gov-v1-DepositParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. deposit_params defines the parameters related to deposit. |
| tally_params | [TallyParams](#cosmos-gov-v1-TallyParams) |  | **Deprecated.** Deprecated: Prefer to use `params` instead. tally_params defines the parameters related to tally. |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines all the parameters of x/gov module. |






<a name="cosmos-gov-v1-QueryProposalRequest"></a>

### QueryProposalRequest
QueryProposalRequest is the request type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-QueryProposalResponse"></a>

### QueryProposalResponse
QueryProposalResponse is the response type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal | [Proposal](#cosmos-gov-v1-Proposal) |  | proposal is the requested governance proposal. |






<a name="cosmos-gov-v1-QueryProposalsRequest"></a>

### QueryProposalsRequest
QueryProposalsRequest is the request type for the Query/Proposals RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_status | [ProposalStatus](#cosmos-gov-v1-ProposalStatus) |  | proposal_status defines the status of the proposals. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryProposalsResponse"></a>

### QueryProposalsResponse
QueryProposalsResponse is the response type for the Query/Proposals RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposals | [Proposal](#cosmos-gov-v1-Proposal) | repeated | proposals defines all the requested governance proposals. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1-QueryTallyResultRequest"></a>

### QueryTallyResultRequest
QueryTallyResultRequest is the request type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-QueryTallyResultResponse"></a>

### QueryTallyResultResponse
QueryTallyResultResponse is the response type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tally | [TallyResult](#cosmos-gov-v1-TallyResult) |  | tally defines the requested tally. |






<a name="cosmos-gov-v1-QueryVoteRequest"></a>

### QueryVoteRequest
QueryVoteRequest is the request type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |






<a name="cosmos-gov-v1-QueryVoteResponse"></a>

### QueryVoteResponse
QueryVoteResponse is the response type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote | [Vote](#cosmos-gov-v1-Vote) |  | vote defines the queried vote. |






<a name="cosmos-gov-v1-QueryVotesRequest"></a>

### QueryVotesRequest
QueryVotesRequest is the request type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1-QueryVotesResponse"></a>

### QueryVotesResponse
QueryVotesResponse is the response type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-gov-v1-Vote) | repeated | votes defines the queried votes. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-gov-v1-Query"></a>

### Query
Query defines the gRPC querier service for gov module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Constitution | [QueryConstitutionRequest](#cosmos-gov-v1-QueryConstitutionRequest) | [QueryConstitutionResponse](#cosmos-gov-v1-QueryConstitutionResponse) | Constitution queries the chain&#39;s constitution. |
| Proposal | [QueryProposalRequest](#cosmos-gov-v1-QueryProposalRequest) | [QueryProposalResponse](#cosmos-gov-v1-QueryProposalResponse) | Proposal queries proposal details based on ProposalID. |
| Proposals | [QueryProposalsRequest](#cosmos-gov-v1-QueryProposalsRequest) | [QueryProposalsResponse](#cosmos-gov-v1-QueryProposalsResponse) | Proposals queries all proposals based on given status. |
| Vote | [QueryVoteRequest](#cosmos-gov-v1-QueryVoteRequest) | [QueryVoteResponse](#cosmos-gov-v1-QueryVoteResponse) | Vote queries voted information based on proposalID, voterAddr. |
| Votes | [QueryVotesRequest](#cosmos-gov-v1-QueryVotesRequest) | [QueryVotesResponse](#cosmos-gov-v1-QueryVotesResponse) | Votes queries votes of a given proposal. |
| Params | [QueryParamsRequest](#cosmos-gov-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-gov-v1-QueryParamsResponse) | Params queries all parameters of the gov module. |
| Deposit | [QueryDepositRequest](#cosmos-gov-v1-QueryDepositRequest) | [QueryDepositResponse](#cosmos-gov-v1-QueryDepositResponse) | Deposit queries single deposit information based on proposalID, depositAddr. |
| Deposits | [QueryDepositsRequest](#cosmos-gov-v1-QueryDepositsRequest) | [QueryDepositsResponse](#cosmos-gov-v1-QueryDepositsResponse) | Deposits queries all deposits of a single proposal. |
| TallyResult | [QueryTallyResultRequest](#cosmos-gov-v1-QueryTallyResultRequest) | [QueryTallyResultResponse](#cosmos-gov-v1-QueryTallyResultResponse) | TallyResult queries the tally of a proposal vote. |

 



<a name="cosmos_gov_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1/tx.proto



<a name="cosmos-gov-v1-MsgCancelProposal"></a>

### MsgCancelProposal
MsgCancelProposal is the Msg/CancelProposal request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |






<a name="cosmos-gov-v1-MsgCancelProposalResponse"></a>

### MsgCancelProposalResponse
MsgCancelProposalResponse defines the response structure for executing a
MsgCancelProposal message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| canceled_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | canceled_time is the time when proposal is canceled. |
| canceled_height | [uint64](#uint64) |  | canceled_height defines the block height at which the proposal is canceled. |






<a name="cosmos-gov-v1-MsgDeposit"></a>

### MsgDeposit
MsgDeposit defines a message to submit a deposit to an existing proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1-MsgDepositResponse"></a>

### MsgDepositResponse
MsgDepositResponse defines the Msg/Deposit response type.






<a name="cosmos-gov-v1-MsgExecLegacyContent"></a>

### MsgExecLegacyContent
MsgExecLegacyContent is used to wrap the legacy content field into a message.
This ensures backwards compatibility with v1beta1.MsgSubmitProposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| authority | [string](#string) |  | authority must be the gov module address. |






<a name="cosmos-gov-v1-MsgExecLegacyContentResponse"></a>

### MsgExecLegacyContentResponse
MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.






<a name="cosmos-gov-v1-MsgSubmitProposal"></a>

### MsgSubmitProposal
MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages are the arbitrary messages to be executed if proposal passes. |
| initial_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | initial_deposit is the deposit value that must be paid at proposal submission. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the proposal. |
| title | [string](#string) |  | title is the title of the proposal. |
| summary | [string](#string) |  | summary is the summary of the proposal |
| expedited | [bool](#bool) |  | expedited defines if the proposal is expedited or not |






<a name="cosmos-gov-v1-MsgSubmitProposalResponse"></a>

### MsgSubmitProposalResponse
MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-gov-v1-Params) |  | params defines the x/gov parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-gov-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="cosmos-gov-v1-MsgVote"></a>

### MsgVote
MsgVote defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| option | [VoteOption](#cosmos-gov-v1-VoteOption) |  | option defines the vote option. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the Vote. |






<a name="cosmos-gov-v1-MsgVoteResponse"></a>

### MsgVoteResponse
MsgVoteResponse defines the Msg/Vote response type.






<a name="cosmos-gov-v1-MsgVoteWeighted"></a>

### MsgVoteWeighted
MsgVoteWeighted defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1-WeightedVoteOption) | repeated | options defines the weighted vote options. |
| metadata | [string](#string) |  | metadata is any arbitrary metadata attached to the VoteWeighted. |






<a name="cosmos-gov-v1-MsgVoteWeightedResponse"></a>

### MsgVoteWeightedResponse
MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.





 

 

 


<a name="cosmos-gov-v1-Msg"></a>

### Msg
Msg defines the gov Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitProposal | [MsgSubmitProposal](#cosmos-gov-v1-MsgSubmitProposal) | [MsgSubmitProposalResponse](#cosmos-gov-v1-MsgSubmitProposalResponse) | SubmitProposal defines a method to create new proposal given the messages. |
| ExecLegacyContent | [MsgExecLegacyContent](#cosmos-gov-v1-MsgExecLegacyContent) | [MsgExecLegacyContentResponse](#cosmos-gov-v1-MsgExecLegacyContentResponse) | ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal to execute a legacy content-based proposal. |
| Vote | [MsgVote](#cosmos-gov-v1-MsgVote) | [MsgVoteResponse](#cosmos-gov-v1-MsgVoteResponse) | Vote defines a method to add a vote on a specific proposal. |
| VoteWeighted | [MsgVoteWeighted](#cosmos-gov-v1-MsgVoteWeighted) | [MsgVoteWeightedResponse](#cosmos-gov-v1-MsgVoteWeightedResponse) | VoteWeighted defines a method to add a weighted vote on a specific proposal. |
| Deposit | [MsgDeposit](#cosmos-gov-v1-MsgDeposit) | [MsgDepositResponse](#cosmos-gov-v1-MsgDepositResponse) | Deposit defines a method to add deposit on a specific proposal. |
| UpdateParams | [MsgUpdateParams](#cosmos-gov-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-gov-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/gov module parameters. The authority is defined in the keeper. |
| CancelProposal | [MsgCancelProposal](#cosmos-gov-v1-MsgCancelProposal) | [MsgCancelProposalResponse](#cosmos-gov-v1-MsgCancelProposalResponse) | CancelProposal defines a method to cancel governance proposal |

 



<a name="cosmos_gov_v1beta1_gov-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/gov.proto



<a name="cosmos-gov-v1beta1-Deposit"></a>

### Deposit
Deposit defines an amount deposited by an account address to an active
proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1beta1-DepositParams"></a>

### DepositParams
DepositParams defines the params for deposits on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum deposit for a proposal to enter voting period. |
| max_deposit_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Maximum period for Atom holders to deposit on a proposal. Initial value: 2 months. |






<a name="cosmos-gov-v1beta1-Proposal"></a>

### Proposal
Proposal defines the core field members of a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| status | [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus) |  | status defines the proposal status. |
| final_tally_result | [TallyResult](#cosmos-gov-v1beta1-TallyResult) |  | final_tally_result is the final tally result of the proposal. When querying a proposal via gRPC, this field is not populated until the proposal&#39;s voting period has ended. |
| submit_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | submit_time is the time of proposal submission. |
| deposit_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | deposit_end_time is the end time for deposition. |
| total_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_deposit is the total deposit on the proposal. |
| voting_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_start_time is the starting time to vote on a proposal. |
| voting_end_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | voting_end_time is the end time of voting on a proposal. |






<a name="cosmos-gov-v1beta1-TallyParams"></a>

### TallyParams
TallyParams defines the params for tallying votes on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| quorum | [bytes](#bytes) |  | Minimum percentage of total stake needed to vote for a result to be considered valid. |
| threshold | [bytes](#bytes) |  | Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. |
| veto_threshold | [bytes](#bytes) |  | Minimum value of Veto votes to Total votes ratio for proposal to be vetoed. Default value: 1/3. |






<a name="cosmos-gov-v1beta1-TallyResult"></a>

### TallyResult
TallyResult defines a standard tally for a governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| yes | [string](#string) |  | yes is the number of yes votes on a proposal. |
| abstain | [string](#string) |  | abstain is the number of abstain votes on a proposal. |
| no | [string](#string) |  | no is the number of no votes on a proposal. |
| no_with_veto | [string](#string) |  | no_with_veto is the number of no with veto votes on a proposal. |






<a name="cosmos-gov-v1beta1-TextProposal"></a>

### TextProposal
TextProposal defines a standard text proposal whose changes need to be
manually updated in case of approval.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal. |
| description | [string](#string) |  | description associated with the proposal. |






<a name="cosmos-gov-v1beta1-Vote"></a>

### Vote
Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address of the proposal. |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | **Deprecated.** Deprecated: Prefer to use `options` instead. This field is set in queries if and only if `len(options) == 1` and that option has weight 1. In all other cases, this field will default to VOTE_OPTION_UNSPECIFIED. |
| options | [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption) | repeated | options is the weighted vote options. |






<a name="cosmos-gov-v1beta1-VotingParams"></a>

### VotingParams
VotingParams defines the params for voting on governance proposals.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | Duration of the voting period. |






<a name="cosmos-gov-v1beta1-WeightedVoteOption"></a>

### WeightedVoteOption
WeightedVoteOption defines a unit of vote for vote split.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | option defines the valid vote options, it must not contain duplicate vote options. |
| weight | [string](#string) |  | weight is the vote weight associated with the vote option. |





 


<a name="cosmos-gov-v1beta1-ProposalStatus"></a>

### ProposalStatus
ProposalStatus enumerates the valid statuses of a proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROPOSAL_STATUS_UNSPECIFIED | 0 | PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. |
| PROPOSAL_STATUS_DEPOSIT_PERIOD | 1 | PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit period. |
| PROPOSAL_STATUS_VOTING_PERIOD | 2 | PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting period. |
| PROPOSAL_STATUS_PASSED | 3 | PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has passed. |
| PROPOSAL_STATUS_REJECTED | 4 | PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has been rejected. |
| PROPOSAL_STATUS_FAILED | 5 | PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has failed. |



<a name="cosmos-gov-v1beta1-VoteOption"></a>

### VoteOption
VoteOption enumerates the valid vote options for a given governance proposal.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VOTE_OPTION_UNSPECIFIED | 0 | VOTE_OPTION_UNSPECIFIED defines a no-op vote option. |
| VOTE_OPTION_YES | 1 | VOTE_OPTION_YES defines a yes vote option. |
| VOTE_OPTION_ABSTAIN | 2 | VOTE_OPTION_ABSTAIN defines an abstain vote option. |
| VOTE_OPTION_NO | 3 | VOTE_OPTION_NO defines a no vote option. |
| VOTE_OPTION_NO_WITH_VETO | 4 | VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. |


 

 

 



<a name="cosmos_gov_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/genesis.proto



<a name="cosmos-gov-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the gov module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| starting_proposal_id | [uint64](#uint64) |  | starting_proposal_id is the ID of the starting proposal. |
| deposits | [Deposit](#cosmos-gov-v1beta1-Deposit) | repeated | deposits defines all the deposits present at genesis. |
| votes | [Vote](#cosmos-gov-v1beta1-Vote) | repeated | votes defines all the votes present at genesis. |
| proposals | [Proposal](#cosmos-gov-v1beta1-Proposal) | repeated | proposals defines all the proposals present at genesis. |
| deposit_params | [DepositParams](#cosmos-gov-v1beta1-DepositParams) |  | deposit_params defines all the parameters related to deposit. |
| voting_params | [VotingParams](#cosmos-gov-v1beta1-VotingParams) |  | voting_params defines all the parameters related to voting. |
| tally_params | [TallyParams](#cosmos-gov-v1beta1-TallyParams) |  | tally_params defines all the parameters related to tally. |





 

 

 

 



<a name="cosmos_gov_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/query.proto



<a name="cosmos-gov-v1beta1-QueryDepositRequest"></a>

### QueryDepositRequest
QueryDepositRequest is the request type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |






<a name="cosmos-gov-v1beta1-QueryDepositResponse"></a>

### QueryDepositResponse
QueryDepositResponse is the response type for the Query/Deposit RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposit | [Deposit](#cosmos-gov-v1beta1-Deposit) |  | deposit defines the requested deposit. |






<a name="cosmos-gov-v1beta1-QueryDepositsRequest"></a>

### QueryDepositsRequest
QueryDepositsRequest is the request type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryDepositsResponse"></a>

### QueryDepositsResponse
QueryDepositsResponse is the response type for the Query/Deposits RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| deposits | [Deposit](#cosmos-gov-v1beta1-Deposit) | repeated | deposits defines the requested deposits. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params_type | [string](#string) |  | params_type defines which parameters to query for, can be one of &#34;voting&#34;, &#34;tallying&#34; or &#34;deposit&#34;. |






<a name="cosmos-gov-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| voting_params | [VotingParams](#cosmos-gov-v1beta1-VotingParams) |  | voting_params defines the parameters related to voting. |
| deposit_params | [DepositParams](#cosmos-gov-v1beta1-DepositParams) |  | deposit_params defines the parameters related to deposit. |
| tally_params | [TallyParams](#cosmos-gov-v1beta1-TallyParams) |  | tally_params defines the parameters related to tally. |






<a name="cosmos-gov-v1beta1-QueryProposalRequest"></a>

### QueryProposalRequest
QueryProposalRequest is the request type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-QueryProposalResponse"></a>

### QueryProposalResponse
QueryProposalResponse is the response type for the Query/Proposal RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal | [Proposal](#cosmos-gov-v1beta1-Proposal) |  |  |






<a name="cosmos-gov-v1beta1-QueryProposalsRequest"></a>

### QueryProposalsRequest
QueryProposalsRequest is the request type for the Query/Proposals RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_status | [ProposalStatus](#cosmos-gov-v1beta1-ProposalStatus) |  | proposal_status defines the status of the proposals. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryProposalsResponse"></a>

### QueryProposalsResponse
QueryProposalsResponse is the response type for the Query/Proposals RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposals | [Proposal](#cosmos-gov-v1beta1-Proposal) | repeated | proposals defines all the requested governance proposals. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-gov-v1beta1-QueryTallyResultRequest"></a>

### QueryTallyResultRequest
QueryTallyResultRequest is the request type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-QueryTallyResultResponse"></a>

### QueryTallyResultResponse
QueryTallyResultResponse is the response type for the Query/Tally RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tally | [TallyResult](#cosmos-gov-v1beta1-TallyResult) |  | tally defines the requested tally. |






<a name="cosmos-gov-v1beta1-QueryVoteRequest"></a>

### QueryVoteRequest
QueryVoteRequest is the request type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter defines the voter address for the proposals. |






<a name="cosmos-gov-v1beta1-QueryVoteResponse"></a>

### QueryVoteResponse
QueryVoteResponse is the response type for the Query/Vote RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vote | [Vote](#cosmos-gov-v1beta1-Vote) |  | vote defines the queried vote. |






<a name="cosmos-gov-v1beta1-QueryVotesRequest"></a>

### QueryVotesRequest
QueryVotesRequest is the request type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-gov-v1beta1-QueryVotesResponse"></a>

### QueryVotesResponse
QueryVotesResponse is the response type for the Query/Votes RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| votes | [Vote](#cosmos-gov-v1beta1-Vote) | repeated | votes defines the queried votes. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-gov-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service for gov module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Proposal | [QueryProposalRequest](#cosmos-gov-v1beta1-QueryProposalRequest) | [QueryProposalResponse](#cosmos-gov-v1beta1-QueryProposalResponse) | Proposal queries proposal details based on ProposalID. |
| Proposals | [QueryProposalsRequest](#cosmos-gov-v1beta1-QueryProposalsRequest) | [QueryProposalsResponse](#cosmos-gov-v1beta1-QueryProposalsResponse) | Proposals queries all proposals based on given status. |
| Vote | [QueryVoteRequest](#cosmos-gov-v1beta1-QueryVoteRequest) | [QueryVoteResponse](#cosmos-gov-v1beta1-QueryVoteResponse) | Vote queries voted information based on proposalID, voterAddr. |
| Votes | [QueryVotesRequest](#cosmos-gov-v1beta1-QueryVotesRequest) | [QueryVotesResponse](#cosmos-gov-v1beta1-QueryVotesResponse) | Votes queries votes of a given proposal. |
| Params | [QueryParamsRequest](#cosmos-gov-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-gov-v1beta1-QueryParamsResponse) | Params queries all parameters of the gov module. |
| Deposit | [QueryDepositRequest](#cosmos-gov-v1beta1-QueryDepositRequest) | [QueryDepositResponse](#cosmos-gov-v1beta1-QueryDepositResponse) | Deposit queries single deposit information based on proposalID, depositor address. |
| Deposits | [QueryDepositsRequest](#cosmos-gov-v1beta1-QueryDepositsRequest) | [QueryDepositsResponse](#cosmos-gov-v1beta1-QueryDepositsResponse) | Deposits queries all deposits of a single proposal. |
| TallyResult | [QueryTallyResultRequest](#cosmos-gov-v1beta1-QueryTallyResultRequest) | [QueryTallyResultResponse](#cosmos-gov-v1beta1-QueryTallyResultResponse) | TallyResult queries the tally of a proposal vote. |

 



<a name="cosmos_gov_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/gov/v1beta1/tx.proto



<a name="cosmos-gov-v1beta1-MsgDeposit"></a>

### MsgDeposit
MsgDeposit defines a message to submit a deposit to an existing proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| depositor | [string](#string) |  | depositor defines the deposit addresses from the proposals. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount to be deposited by depositor. |






<a name="cosmos-gov-v1beta1-MsgDepositResponse"></a>

### MsgDepositResponse
MsgDepositResponse defines the Msg/Deposit response type.






<a name="cosmos-gov-v1beta1-MsgSubmitProposal"></a>

### MsgSubmitProposal
MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
proposal Content.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| content | [google.protobuf.Any](#google-protobuf-Any) |  | content is the proposal&#39;s content. |
| initial_deposit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | initial_deposit is the deposit value that must be paid at proposal submission. |
| proposer | [string](#string) |  | proposer is the account address of the proposer. |






<a name="cosmos-gov-v1beta1-MsgSubmitProposalResponse"></a>

### MsgSubmitProposalResponse
MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |






<a name="cosmos-gov-v1beta1-MsgVote"></a>

### MsgVote
MsgVote defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| option | [VoteOption](#cosmos-gov-v1beta1-VoteOption) |  | option defines the vote option. |






<a name="cosmos-gov-v1beta1-MsgVoteResponse"></a>

### MsgVoteResponse
MsgVoteResponse defines the Msg/Vote response type.






<a name="cosmos-gov-v1beta1-MsgVoteWeighted"></a>

### MsgVoteWeighted
MsgVoteWeighted defines a message to cast a vote.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proposal_id | [uint64](#uint64) |  | proposal_id defines the unique id of the proposal. |
| voter | [string](#string) |  | voter is the voter address for the proposal. |
| options | [WeightedVoteOption](#cosmos-gov-v1beta1-WeightedVoteOption) | repeated | options defines the weighted vote options. |






<a name="cosmos-gov-v1beta1-MsgVoteWeightedResponse"></a>

### MsgVoteWeightedResponse
MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.





 

 

 


<a name="cosmos-gov-v1beta1-Msg"></a>

### Msg
Msg defines the gov Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SubmitProposal | [MsgSubmitProposal](#cosmos-gov-v1beta1-MsgSubmitProposal) | [MsgSubmitProposalResponse](#cosmos-gov-v1beta1-MsgSubmitProposalResponse) | SubmitProposal defines a method to create new proposal given a content. |
| Vote | [MsgVote](#cosmos-gov-v1beta1-MsgVote) | [MsgVoteResponse](#cosmos-gov-v1beta1-MsgVoteResponse) | Vote defines a method to add a vote on a specific proposal. |
| VoteWeighted | [MsgVoteWeighted](#cosmos-gov-v1beta1-MsgVoteWeighted) | [MsgVoteWeightedResponse](#cosmos-gov-v1beta1-MsgVoteWeightedResponse) | VoteWeighted defines a method to add a weighted vote on a specific proposal. |
| Deposit | [MsgDeposit](#cosmos-gov-v1beta1-MsgDeposit) | [MsgDepositResponse](#cosmos-gov-v1beta1-MsgDepositResponse) | Deposit defines a method to add deposit on a specific proposal. |

 



<a name="cosmos_mint_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/module/v1/module.proto



<a name="cosmos-mint-module-v1-Module"></a>

### Module
Module is the config object of the mint module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fee_collector_name | [string](#string) |  |  |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_mint_v1beta1_mint-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/mint.proto



<a name="cosmos-mint-v1beta1-Minter"></a>

### Minter
Minter represents the minting state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [string](#string) |  | current annual inflation rate |
| annual_provisions | [string](#string) |  | current annual expected provisions |






<a name="cosmos-mint-v1beta1-Params"></a>

### Params
Params defines the parameters for the x/mint module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mint_denom | [string](#string) |  | type of coin to mint |
| inflation_rate_change | [string](#string) |  | maximum annual change in inflation rate |
| inflation_max | [string](#string) |  | maximum inflation rate |
| inflation_min | [string](#string) |  | minimum inflation rate |
| goal_bonded | [string](#string) |  | goal of percent bonded atoms |
| blocks_per_year | [uint64](#uint64) |  | expected blocks per year |
| max_supply | [string](#string) |  | maximum supply for the token.

A value of &#34;0&#34; indicates an unlimited (infinite) maximum supply. |





 

 

 

 



<a name="cosmos_mint_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/genesis.proto



<a name="cosmos-mint-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the mint module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minter | [Minter](#cosmos-mint-v1beta1-Minter) |  | minter is a space for holding current inflation information. |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines all the parameters of the module. |





 

 

 

 



<a name="cosmos_mint_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/query.proto



<a name="cosmos-mint-v1beta1-QueryAnnualProvisionsRequest"></a>

### QueryAnnualProvisionsRequest
QueryAnnualProvisionsRequest is the request type for the
Query/AnnualProvisions RPC method.






<a name="cosmos-mint-v1beta1-QueryAnnualProvisionsResponse"></a>

### QueryAnnualProvisionsResponse
QueryAnnualProvisionsResponse is the response type for the
Query/AnnualProvisions RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| annual_provisions | [bytes](#bytes) |  | annual_provisions is the current minting annual provisions value. |






<a name="cosmos-mint-v1beta1-QueryInflationRequest"></a>

### QueryInflationRequest
QueryInflationRequest is the request type for the Query/Inflation RPC method.






<a name="cosmos-mint-v1beta1-QueryInflationResponse"></a>

### QueryInflationResponse
QueryInflationResponse is the response type for the Query/Inflation RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [bytes](#bytes) |  | inflation is the current minting inflation value. |






<a name="cosmos-mint-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmos-mint-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="cosmos-mint-v1beta1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-mint-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-mint-v1beta1-QueryParamsResponse) | Params returns the total set of minting parameters. |
| Inflation | [QueryInflationRequest](#cosmos-mint-v1beta1-QueryInflationRequest) | [QueryInflationResponse](#cosmos-mint-v1beta1-QueryInflationResponse) | Inflation returns the current minting inflation value. |
| AnnualProvisions | [QueryAnnualProvisionsRequest](#cosmos-mint-v1beta1-QueryAnnualProvisionsRequest) | [QueryAnnualProvisionsResponse](#cosmos-mint-v1beta1-QueryAnnualProvisionsResponse) | AnnualProvisions current minting annual provisions value. |

 



<a name="cosmos_mint_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/mint/v1beta1/tx.proto



<a name="cosmos-mint-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-mint-v1beta1-Params) |  | params defines the x/mint parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-mint-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-mint-v1beta1-Msg"></a>

### Msg
Msg defines the x/mint Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#cosmos-mint-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-mint-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is defaults to the x/gov module account. |

 



<a name="cosmos_reflection_v1_reflection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/reflection/v1/reflection.proto



<a name="cosmos-reflection-v1-FileDescriptorsRequest"></a>

### FileDescriptorsRequest
FileDescriptorsRequest is the Query/FileDescriptors request type.






<a name="cosmos-reflection-v1-FileDescriptorsResponse"></a>

### FileDescriptorsResponse
FileDescriptorsResponse is the Query/FileDescriptors response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| files | [google.protobuf.FileDescriptorProto](#google-protobuf-FileDescriptorProto) | repeated | files is the file descriptors. |





 

 

 


<a name="cosmos-reflection-v1-ReflectionService"></a>

### ReflectionService
Package cosmos.reflection.v1 provides support for inspecting protobuf
file descriptors.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| FileDescriptors | [FileDescriptorsRequest](#cosmos-reflection-v1-FileDescriptorsRequest) | [FileDescriptorsResponse](#cosmos-reflection-v1-FileDescriptorsResponse) | FileDescriptors queries all the file descriptors in the app in order to enable easier generation of dynamic clients. |

 



<a name="cosmos_slashing_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/module/v1/module.proto



<a name="cosmos-slashing-module-v1-Module"></a>

### Module
Module is the config object of the slashing module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_slashing_v1beta1_slashing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/slashing.proto



<a name="cosmos-slashing-v1beta1-Params"></a>

### Params
Params represents the parameters used for by the slashing module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_blocks_window | [int64](#int64) |  |  |
| min_signed_per_window | [bytes](#bytes) |  |  |
| downtime_jail_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| slash_fraction_double_sign | [bytes](#bytes) |  |  |
| slash_fraction_downtime | [bytes](#bytes) |  |  |






<a name="cosmos-slashing-v1beta1-ValidatorSigningInfo"></a>

### ValidatorSigningInfo
ValidatorSigningInfo defines a validator&#39;s signing info for monitoring their
liveness activity.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| start_height | [int64](#int64) |  | Height at which validator was first a candidate OR was un-jailed |
| index_offset | [int64](#int64) |  | Index which is incremented every time a validator is bonded in a block and _may_ have signed a pre-commit or not. This in conjunction with the signed_blocks_window param determines the index in the missed block bitmap. |
| jailed_until | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Timestamp until which the validator is jailed due to liveness downtime. |
| tombstoned | [bool](#bool) |  | Whether or not a validator has been tombstoned (killed out of validator set). It is set once the validator commits an equivocation or for any other configured misbehavior. |
| missed_blocks_counter | [int64](#int64) |  | A counter of missed (unsigned) blocks. It is used to avoid unnecessary reads in the missed block bitmap. |





 

 

 

 



<a name="cosmos_slashing_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/genesis.proto



<a name="cosmos-slashing-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the slashing module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  | params defines all the parameters of the module. |
| signing_infos | [SigningInfo](#cosmos-slashing-v1beta1-SigningInfo) | repeated | signing_infos represents a map between validator addresses and their signing infos. |
| missed_blocks | [ValidatorMissedBlocks](#cosmos-slashing-v1beta1-ValidatorMissedBlocks) | repeated | missed_blocks represents a map between validator addresses and their missed blocks. |






<a name="cosmos-slashing-v1beta1-MissedBlock"></a>

### MissedBlock
MissedBlock contains height and missed status as boolean.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [int64](#int64) |  | index is the height at which the block was missed. |
| missed | [bool](#bool) |  | missed is the missed status. |






<a name="cosmos-slashing-v1beta1-SigningInfo"></a>

### SigningInfo
SigningInfo stores validator signing info of corresponding address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the validator address. |
| validator_signing_info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) |  | validator_signing_info represents the signing info of this validator. |






<a name="cosmos-slashing-v1beta1-ValidatorMissedBlocks"></a>

### ValidatorMissedBlocks
ValidatorMissedBlocks contains array of missed blocks of corresponding
address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the validator address. |
| missed_blocks | [MissedBlock](#cosmos-slashing-v1beta1-MissedBlock) | repeated | missed_blocks is an array of missed blocks by the validator. |





 

 

 

 



<a name="cosmos_slashing_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/query.proto



<a name="cosmos-slashing-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method






<a name="cosmos-slashing-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  |  |






<a name="cosmos-slashing-v1beta1-QuerySigningInfoRequest"></a>

### QuerySigningInfoRequest
QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cons_address | [string](#string) |  | cons_address is the address to query signing info of |






<a name="cosmos-slashing-v1beta1-QuerySigningInfoResponse"></a>

### QuerySigningInfoResponse
QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| val_signing_info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) |  | val_signing_info is the signing info of requested val cons address |






<a name="cosmos-slashing-v1beta1-QuerySigningInfosRequest"></a>

### QuerySigningInfosRequest
QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="cosmos-slashing-v1beta1-QuerySigningInfosResponse"></a>

### QuerySigningInfosResponse
QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [ValidatorSigningInfo](#cosmos-slashing-v1beta1-ValidatorSigningInfo) | repeated | info is the signing info of all validators |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |





 

 

 


<a name="cosmos-slashing-v1beta1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#cosmos-slashing-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-slashing-v1beta1-QueryParamsResponse) | Params queries the parameters of slashing module |
| SigningInfo | [QuerySigningInfoRequest](#cosmos-slashing-v1beta1-QuerySigningInfoRequest) | [QuerySigningInfoResponse](#cosmos-slashing-v1beta1-QuerySigningInfoResponse) | SigningInfo queries the signing info of given cons address |
| SigningInfos | [QuerySigningInfosRequest](#cosmos-slashing-v1beta1-QuerySigningInfosRequest) | [QuerySigningInfosResponse](#cosmos-slashing-v1beta1-QuerySigningInfosResponse) | SigningInfos queries signing info of all validators |

 



<a name="cosmos_slashing_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/slashing/v1beta1/tx.proto



<a name="cosmos-slashing-v1beta1-MsgUnjail"></a>

### MsgUnjail
MsgUnjail defines the Msg/Unjail request type


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  |  |






<a name="cosmos-slashing-v1beta1-MsgUnjailResponse"></a>

### MsgUnjailResponse
MsgUnjailResponse defines the Msg/Unjail response type






<a name="cosmos-slashing-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-slashing-v1beta1-Params) |  | params defines the x/slashing parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-slashing-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-slashing-v1beta1-Msg"></a>

### Msg
Msg defines the slashing Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Unjail | [MsgUnjail](#cosmos-slashing-v1beta1-MsgUnjail) | [MsgUnjailResponse](#cosmos-slashing-v1beta1-MsgUnjailResponse) | Unjail defines a method for unjailing a jailed validator, thus returning them into the bonded validator set, so they can begin receiving provisions and rewards again. |
| UpdateParams | [MsgUpdateParams](#cosmos-slashing-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-slashing-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/slashing module parameters. The authority defaults to the x/gov module account. |

 



<a name="cosmos_staking_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/module/v1/module.proto



<a name="cosmos-staking-module-v1-Module"></a>

### Module
Module is the config object of the staking module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hooks_order | [string](#string) | repeated | hooks_order specifies the order of staking hooks and should be a list of module names which provide a staking hooks instance. If no order is provided, then hooks will be applied in alphabetical order of module names. |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |
| bech32_prefix_validator | [string](#string) |  | bech32_prefix_validator is the bech32 validator prefix for the app. |
| bech32_prefix_consensus | [string](#string) |  | bech32_prefix_consensus is the bech32 consensus node prefix for the app. |





 

 

 

 



<a name="cosmos_staking_v1beta1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/authz.proto



<a name="cosmos-staking-v1beta1-StakeAuthorization"></a>

### StakeAuthorization
StakeAuthorization defines authorization for delegate/undelegate/redelegate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_tokens | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is empty, there is no spend limit and any amount of coins can be delegated. |
| allow_list | [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators) |  | allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter&#39;s account. |
| deny_list | [StakeAuthorization.Validators](#cosmos-staking-v1beta1-StakeAuthorization-Validators) |  | deny_list specifies list of validator addresses to whom grantee can not delegate tokens. |
| authorization_type | [AuthorizationType](#cosmos-staking-v1beta1-AuthorizationType) |  | authorization_type defines one of AuthorizationType. |






<a name="cosmos-staking-v1beta1-StakeAuthorization-Validators"></a>

### StakeAuthorization.Validators
Validators defines list of validator addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) | repeated |  |





 


<a name="cosmos-staking-v1beta1-AuthorizationType"></a>

### AuthorizationType
AuthorizationType defines the type of staking module authorization type

| Name | Number | Description |
| ---- | ------ | ----------- |
| AUTHORIZATION_TYPE_UNSPECIFIED | 0 | AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type |
| AUTHORIZATION_TYPE_DELEGATE | 1 | AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate |
| AUTHORIZATION_TYPE_UNDELEGATE | 2 | AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate |
| AUTHORIZATION_TYPE_REDELEGATE | 3 | AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate |
| AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION | 4 | AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION defines an authorization type for Msg/MsgCancelUnbondingDelegation |


 

 

 



<a name="cosmos_staking_v1beta1_staking-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/staking.proto



<a name="cosmos-staking-v1beta1-Commission"></a>

### Commission
Commission defines commission parameters for a given validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commission_rates | [CommissionRates](#cosmos-staking-v1beta1-CommissionRates) |  | commission_rates defines the initial commission rates to be used for creating a validator. |
| update_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | update_time is the last time the commission rate was changed. |






<a name="cosmos-staking-v1beta1-CommissionRates"></a>

### CommissionRates
CommissionRates defines the initial commission rates to be used for creating
a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate | [string](#string) |  | rate is the commission rate charged to delegators, as a fraction. |
| max_rate | [string](#string) |  | max_rate defines the maximum commission rate which validator can ever charge, as a fraction. |
| max_change_rate | [string](#string) |  | max_change_rate defines the maximum daily increase of the validator commission, as a fraction. |






<a name="cosmos-staking-v1beta1-ConsKeyEvidenceExpiry"></a>

### ConsKeyEvidenceExpiry
ConsKeyEvidenceExpiry is the value stored in the evidence-lock retirement
queue: the validator that rotated and the time and height at which its
RotatedFrom lock may be retired because equivocation evidence for the
rotated-away key can no longer be admitted. The queue is keyed by expiry_time
for time-ordered iteration; expiry_time is duplicated here so the record is
self-describing.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [bytes](#bytes) |  |  |
| expiry_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| expiry_height | [int64](#int64) |  |  |






<a name="cosmos-staking-v1beta1-DVPair"></a>

### DVPair
DVPair is struct that just has a delegator-validator pair with no other data.
It is intended to be used as a marshalable pointer. For example, a DVPair can
be used to construct the key to getting an UnbondingDelegation from state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-DVPairs"></a>

### DVPairs
DVPairs defines an array of DVPair objects.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pairs | [DVPair](#cosmos-staking-v1beta1-DVPair) | repeated |  |






<a name="cosmos-staking-v1beta1-DVVTriplet"></a>

### DVVTriplet
DVVTriplet is struct that just has a delegator-validator-validator triplet
with no other data. It is intended to be used as a marshalable pointer. For
example, a DVVTriplet can be used to construct the key to getting a
Redelegation from state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_src_address | [string](#string) |  |  |
| validator_dst_address | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-DVVTriplets"></a>

### DVVTriplets
DVVTriplets defines an array of DVVTriplet objects.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| triplets | [DVVTriplet](#cosmos-staking-v1beta1-DVVTriplet) | repeated |  |






<a name="cosmos-staking-v1beta1-Delegation"></a>

### Delegation
Delegation represents the bond with tokens held by an account. It is
owned by one delegator, and is associated with the voting power of one
validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the encoded address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the encoded address of the validator. |
| shares | [string](#string) |  | shares define the delegation shares received. |






<a name="cosmos-staking-v1beta1-DelegationResponse"></a>

### DelegationResponse
DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation | [Delegation](#cosmos-staking-v1beta1-Delegation) |  |  |
| balance | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-Description"></a>

### Description
Description defines a validator description.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| moniker | [string](#string) |  | moniker defines a human-readable name for the validator. |
| identity | [string](#string) |  | identity defines an optional identity signature (ex. UPort or Keybase). |
| website | [string](#string) |  | website defines an optional website link. |
| security_contact | [string](#string) |  | security_contact defines an optional email for security contact. |
| details | [string](#string) |  | details define other optional details. |






<a name="cosmos-staking-v1beta1-HistoricalInfo"></a>

### HistoricalInfo
HistoricalInfo contains header and validator information for a given block.
It is stored as part of staking module&#39;s state, which persists the `n` most
recent HistoricalInfo
(`n` is set by the staking module&#39;s `historical_entries` parameter).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| header | [tendermint.types.Header](#tendermint-types-Header) |  |  |
| valset | [Validator](#cosmos-staking-v1beta1-Validator) | repeated |  |






<a name="cosmos-staking-v1beta1-Params"></a>

### Params
Params defines the parameters for the x/staking module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_time | [google.protobuf.Duration](#google-protobuf-Duration) |  | unbonding_time is the time duration of unbonding. |
| max_validators | [uint32](#uint32) |  | max_validators is the maximum number of validators. |
| max_entries | [uint32](#uint32) |  | max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). |
| historical_entries | [uint32](#uint32) |  | historical_entries is the number of historical entries to persist. |
| bond_denom | [string](#string) |  | bond_denom defines the bondable coin denomination. |
| min_commission_rate | [string](#string) |  | min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators |
| key_rotation_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | key_rotation_fee is the fee charged when rotating a validator&#39;s consensus key. |






<a name="cosmos-staking-v1beta1-Pool"></a>

### Pool
Pool is used for tracking bonded and not-bonded token supply of the bond
denomination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| not_bonded_tokens | [string](#string) |  |  |
| bonded_tokens | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-Redelegation"></a>

### Redelegation
Redelegation contains the list of a particular delegator&#39;s redelegating bonds
from a particular source validator to a particular destination validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the bech32-encoded address of the delegator. |
| validator_src_address | [string](#string) |  | validator_src_address is the validator redelegation source operator address. |
| validator_dst_address | [string](#string) |  | validator_dst_address is the validator redelegation destination operator address. |
| entries | [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry) | repeated | entries are the redelegation entries.

redelegation entries |






<a name="cosmos-staking-v1beta1-RedelegationEntry"></a>

### RedelegationEntry
RedelegationEntry defines a redelegation object with relevant metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_height | [int64](#int64) |  | creation_height defines the height which the redelegation took place. |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | completion_time defines the unix time for redelegation completion. |
| initial_balance | [string](#string) |  | initial_balance defines the initial balance when redelegation started. |
| shares_dst | [string](#string) |  | shares_dst is the amount of destination-validator shares created by redelegation. |
| unbonding_id | [uint64](#uint64) |  | Incrementing id that uniquely identifies this entry |
| unbonding_on_hold_ref_count | [int64](#int64) |  | Strictly positive if this entry&#39;s unbonding has been stopped by external modules |






<a name="cosmos-staking-v1beta1-RedelegationEntryResponse"></a>

### RedelegationEntryResponse
RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
contains a balance in addition to shares which is more suitable for client
responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation_entry | [RedelegationEntry](#cosmos-staking-v1beta1-RedelegationEntry) |  |  |
| balance | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-RedelegationResponse"></a>

### RedelegationResponse
RedelegationResponse is equivalent to a Redelegation except that its entries
contain a balance in addition to shares which is more suitable for client
responses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation | [Redelegation](#cosmos-staking-v1beta1-Redelegation) |  |  |
| entries | [RedelegationEntryResponse](#cosmos-staking-v1beta1-RedelegationEntryResponse) | repeated |  |






<a name="cosmos-staking-v1beta1-UnbondingDelegation"></a>

### UnbondingDelegation
UnbondingDelegation stores all of a single delegator&#39;s unbonding bonds
for a single validator in an time-ordered list.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  | delegator_address is the encoded address of the delegator. |
| validator_address | [string](#string) |  | validator_address is the encoded address of the validator. |
| entries | [UnbondingDelegationEntry](#cosmos-staking-v1beta1-UnbondingDelegationEntry) | repeated | entries are the unbonding delegation entries.

unbonding delegation entries |






<a name="cosmos-staking-v1beta1-UnbondingDelegationEntry"></a>

### UnbondingDelegationEntry
UnbondingDelegationEntry defines an unbonding object with relevant metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creation_height | [int64](#int64) |  | creation_height is the height which the unbonding took place. |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | completion_time is the unix time for unbonding completion. |
| initial_balance | [string](#string) |  | initial_balance defines the tokens initially scheduled to receive at completion. |
| balance | [string](#string) |  | balance defines the tokens to receive at completion. |
| unbonding_id | [uint64](#uint64) |  | Incrementing id that uniquely identifies this entry |
| unbonding_on_hold_ref_count | [int64](#int64) |  | Strictly positive if this entry&#39;s unbonding has been stopped by external modules |






<a name="cosmos-staking-v1beta1-ValAddresses"></a>

### ValAddresses
ValAddresses defines a repeated set of validator addresses.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [string](#string) | repeated |  |






<a name="cosmos-staking-v1beta1-Validator"></a>

### Validator
Validator defines a validator, together with the total amount of the
Validator&#39;s bond shares and their exchange rate to coins. Slashing results in
a decrease in the exchange rate, allowing correct calculation of future
undelegations without iterating over delegators. When coins are delegated to
this validator, the validator is credited with a delegation whose number of
bond shares is based on the amount of coins delegated divided by the current
exchange rate. Voting power can be calculated as total bonded shares
multiplied by exchange rate.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operator_address | [string](#string) |  | operator_address defines the address of the validator&#39;s operator; bech encoded in JSON. |
| consensus_pubkey | [google.protobuf.Any](#google-protobuf-Any) |  | consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. |
| jailed | [bool](#bool) |  | jailed defined whether the validator has been jailed from bonded status or not. |
| status | [BondStatus](#cosmos-staking-v1beta1-BondStatus) |  | status is the validator status (bonded/unbonding/unbonded). |
| tokens | [string](#string) |  | tokens define the delegated tokens (incl. self-delegation). |
| delegator_shares | [string](#string) |  | delegator_shares defines total shares issued to a validator&#39;s delegators. |
| description | [Description](#cosmos-staking-v1beta1-Description) |  | description defines the description terms for the validator. |
| unbonding_height | [int64](#int64) |  | unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. |
| unbonding_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. |
| commission | [Commission](#cosmos-staking-v1beta1-Commission) |  | commission defines the commission parameters. |
| min_self_delegation | [string](#string) |  | min_self_delegation is the validator&#39;s self declared minimum self delegation. |
| unbonding_on_hold_ref_count | [int64](#int64) |  | strictly positive if this validator&#39;s unbonding has been stopped by external modules |
| unbonding_ids | [uint64](#uint64) | repeated | list of unbonding ids, each uniquely identifying an unbonding of this validator |






<a name="cosmos-staking-v1beta1-ValidatorUpdates"></a>

### ValidatorUpdates
ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| updates | [tendermint.abci.ValidatorUpdate](#tendermint-abci-ValidatorUpdate) | repeated |  |





 


<a name="cosmos-staking-v1beta1-BondStatus"></a>

### BondStatus
BondStatus is the status of a validator.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BOND_STATUS_UNSPECIFIED | 0 | UNSPECIFIED defines an invalid validator status. |
| BOND_STATUS_UNBONDED | 1 | UNBONDED defines a validator that is not bonded. |
| BOND_STATUS_UNBONDING | 2 | UNBONDING defines a validator that is unbonding. |
| BOND_STATUS_BONDED | 3 | BONDED defines a validator that is bonded. |



<a name="cosmos-staking-v1beta1-Infraction"></a>

### Infraction
Infraction indicates the infraction a validator committed.

| Name | Number | Description |
| ---- | ------ | ----------- |
| INFRACTION_UNSPECIFIED | 0 | UNSPECIFIED defines an empty infraction. |
| INFRACTION_DOUBLE_SIGN | 1 | DOUBLE_SIGN defines a validator that double-signs a block. |
| INFRACTION_DOWNTIME | 2 | DOWNTIME defines a validator that missed signing too many blocks. |


 

 

 



<a name="cosmos_staking_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/genesis.proto



<a name="cosmos-staking-v1beta1-ConsensusKeyRotationHistory"></a>

### ConsensusKeyRotationHistory
ConsensusKeyRotationHistory stores the old consensus address for a
validator rotation until the unbonding window has elapsed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the validator operator address. |
| old_consensus_address | [string](#string) |  | old_consensus_address is the consensus address rotated away from. |
| maturity_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | maturity_time is the unbonding-window maturity of this validator&#39;s re-rotation rate limit, present only while that gate is still active. A zero value means the gate has already been retired and only the evidence lock (below) remains. |
| evidence_expiry_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | evidence_expiry_time is the time after which equivocation evidence for the rotated-away key can no longer be admitted on the time dimension. |
| evidence_expiry_height | [int64](#int64) |  | evidence_expiry_height is the block height after which equivocation evidence for the rotated-away key can no longer be admitted on the height dimension. |






<a name="cosmos-staking-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the staking module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params defines all the parameters of related to deposit. |
| last_total_power | [bytes](#bytes) |  | last_total_power tracks the total amounts of bonded tokens recorded during the previous end block. |
| last_validator_powers | [LastValidatorPower](#cosmos-staking-v1beta1-LastValidatorPower) | repeated | last_validator_powers is a special index that provides a historical list of the last-block&#39;s bonded validators. |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators defines the validator set at genesis. |
| delegations | [Delegation](#cosmos-staking-v1beta1-Delegation) | repeated | delegations defines the delegations active at genesis. |
| unbonding_delegations | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated | unbonding_delegations defines the unbonding delegations active at genesis. |
| redelegations | [Redelegation](#cosmos-staking-v1beta1-Redelegation) | repeated | redelegations defines the redelegations active at genesis. |
| exported | [bool](#bool) |  | exported defines a bool to identify whether the chain dealing with exported or initialized genesis. |
| consensus_key_rotation_history | [ConsensusKeyRotationHistory](#cosmos-staking-v1beta1-ConsensusKeyRotationHistory) | repeated | consensus_key_rotation_history defines consensus key rotations that are still within the unbonding window. |
| pending_consensus_key_rotations | [PendingConsensusKeyRotation](#cosmos-staking-v1beta1-PendingConsensusKeyRotation) | repeated | pending_consensus_key_rotations defines consensus key rotations whose SDK-side validator state has not reached its deferred apply height yet. |






<a name="cosmos-staking-v1beta1-LastValidatorPower"></a>

### LastValidatorPower
LastValidatorPower required for validator set update logic.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the validator. |
| power | [int64](#int64) |  | power defines the power of the validator. |






<a name="cosmos-staking-v1beta1-PendingConsensusKeyRotation"></a>

### PendingConsensusKeyRotation
PendingConsensusKeyRotation stores a consensus key rotation that is waiting
for its deferred SDK-side state update.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  | validator_address is the validator operator address. |
| new_pubkey | [google.protobuf.Any](#google-protobuf-Any) |  | new_pubkey is the consensus public key being rotated to. |
| apply_height | [int64](#int64) |  | apply_height is the block height where the SDK-side state update should occur. |





 

 

 

 



<a name="cosmos_staking_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/query.proto



<a name="cosmos-staking-v1beta1-QueryDelegationRequest"></a>

### QueryDelegationRequest
QueryDelegationRequest is request type for the Query/Delegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryDelegationResponse"></a>

### QueryDelegationResponse
QueryDelegationResponse is response type for the Query/Delegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_response | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) |  | delegation_responses defines the delegation info of a delegation. |






<a name="cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest"></a>

### QueryDelegatorDelegationsRequest
QueryDelegatorDelegationsRequest is request type for the
Query/DelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse"></a>

### QueryDelegatorDelegationsResponse
QueryDelegatorDelegationsResponse is response type for the
Query/DelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_responses | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) | repeated | delegation_responses defines all the delegations&#39; info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest"></a>

### QueryDelegatorUnbondingDelegationsRequest
QueryDelegatorUnbondingDelegationsRequest is request type for the
Query/DelegatorUnbondingDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse"></a>

### QueryDelegatorUnbondingDelegationsResponse
QueryUnbondingDelegatorDelegationsResponse is response type for the
Query/UnbondingDelegatorDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_responses | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorRequest"></a>

### QueryDelegatorValidatorRequest
QueryDelegatorValidatorRequest is request type for the
Query/DelegatorValidator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorResponse"></a>

### QueryDelegatorValidatorResponse
QueryDelegatorValidatorResponse response type for the
Query/DelegatorValidator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#cosmos-staking-v1beta1-Validator) |  | validator defines the validator info. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest"></a>

### QueryDelegatorValidatorsRequest
QueryDelegatorValidatorsRequest is request type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse"></a>

### QueryDelegatorValidatorsResponse
QueryDelegatorValidatorsResponse is response type for the
Query/DelegatorValidators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators defines the validators&#39; info of a delegator. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryHistoricalInfoRequest"></a>

### QueryHistoricalInfoRequest
QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height defines at which height to query the historical info. |






<a name="cosmos-staking-v1beta1-QueryHistoricalInfoResponse"></a>

### QueryHistoricalInfoResponse
QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hist | [HistoricalInfo](#cosmos-staking-v1beta1-HistoricalInfo) |  | hist defines the historical info at the given height. |






<a name="cosmos-staking-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="cosmos-staking-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params holds all the parameters of this module. |






<a name="cosmos-staking-v1beta1-QueryPoolRequest"></a>

### QueryPoolRequest
QueryPoolRequest is request type for the Query/Pool RPC method.






<a name="cosmos-staking-v1beta1-QueryPoolResponse"></a>

### QueryPoolResponse
QueryPoolResponse is response type for the Query/Pool RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool | [Pool](#cosmos-staking-v1beta1-Pool) |  | pool defines the pool info. |






<a name="cosmos-staking-v1beta1-QueryRedelegationsRequest"></a>

### QueryRedelegationsRequest
QueryRedelegationsRequest is request type for the Query/Redelegations RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| src_validator_addr | [string](#string) |  | src_validator_addr defines the validator address to redelegate from. |
| dst_validator_addr | [string](#string) |  | dst_validator_addr defines the validator address to redelegate to. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryRedelegationsResponse"></a>

### QueryRedelegationsResponse
QueryRedelegationsResponse is response type for the Query/Redelegations RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| redelegation_responses | [RedelegationResponse](#cosmos-staking-v1beta1-RedelegationResponse) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryUnbondingDelegationRequest"></a>

### QueryUnbondingDelegationRequest
QueryUnbondingDelegationRequest is request type for the
Query/UnbondingDelegation RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_addr | [string](#string) |  | delegator_addr defines the delegator address to query for. |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryUnbondingDelegationResponse"></a>

### QueryUnbondingDelegationResponse
QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbond | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) |  | unbond defines the unbonding information of a delegation. |






<a name="cosmos-staking-v1beta1-QueryValidatorDelegationsRequest"></a>

### QueryValidatorDelegationsRequest
QueryValidatorDelegationsRequest is request type for the
Query/ValidatorDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorDelegationsResponse"></a>

### QueryValidatorDelegationsResponse
QueryValidatorDelegationsResponse is response type for the
Query/ValidatorDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegation_responses | [DelegationResponse](#cosmos-staking-v1beta1-DelegationResponse) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryValidatorRequest"></a>

### QueryValidatorRequest
QueryValidatorRequest is request type for the Query/Validator RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |






<a name="cosmos-staking-v1beta1-QueryValidatorResponse"></a>

### QueryValidatorResponse
QueryValidatorResponse is response type for the Query/Validator RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator | [Validator](#cosmos-staking-v1beta1-Validator) |  | validator defines the validator info. |






<a name="cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest"></a>

### QueryValidatorUnbondingDelegationsRequest
QueryValidatorUnbondingDelegationsRequest is required type for the
Query/ValidatorUnbondingDelegations RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_addr | [string](#string) |  | validator_addr defines the validator address to query for. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse"></a>

### QueryValidatorUnbondingDelegationsResponse
QueryValidatorUnbondingDelegationsResponse is response type for the
Query/ValidatorUnbondingDelegations RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unbonding_responses | [UnbondingDelegation](#cosmos-staking-v1beta1-UnbondingDelegation) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmos-staking-v1beta1-QueryValidatorsRequest"></a>

### QueryValidatorsRequest
QueryValidatorsRequest is request type for Query/Validators RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  | status enables to query for validators matching a given status. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmos-staking-v1beta1-QueryValidatorsResponse"></a>

### QueryValidatorsResponse
QueryValidatorsResponse is response type for the Query/Validators RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validators | [Validator](#cosmos-staking-v1beta1-Validator) | repeated | validators contains all the queried validators. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |





 

 

 


<a name="cosmos-staking-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Validators | [QueryValidatorsRequest](#cosmos-staking-v1beta1-QueryValidatorsRequest) | [QueryValidatorsResponse](#cosmos-staking-v1beta1-QueryValidatorsResponse) | Validators queries all validators that match the given status.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Validator | [QueryValidatorRequest](#cosmos-staking-v1beta1-QueryValidatorRequest) | [QueryValidatorResponse](#cosmos-staking-v1beta1-QueryValidatorResponse) | Validator queries validator info for given validator address. |
| ValidatorDelegations | [QueryValidatorDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorDelegationsRequest) | [QueryValidatorDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorDelegationsResponse) | ValidatorDelegations queries delegate info for given validator.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| ValidatorUnbondingDelegations | [QueryValidatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsRequest) | [QueryValidatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryValidatorUnbondingDelegationsResponse) | ValidatorUnbondingDelegations queries unbonding delegations of a validator.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Delegation | [QueryDelegationRequest](#cosmos-staking-v1beta1-QueryDelegationRequest) | [QueryDelegationResponse](#cosmos-staking-v1beta1-QueryDelegationResponse) | Delegation queries delegate info for given validator delegator pair. |
| UnbondingDelegation | [QueryUnbondingDelegationRequest](#cosmos-staking-v1beta1-QueryUnbondingDelegationRequest) | [QueryUnbondingDelegationResponse](#cosmos-staking-v1beta1-QueryUnbondingDelegationResponse) | UnbondingDelegation queries unbonding info for given validator delegator pair. |
| DelegatorDelegations | [QueryDelegatorDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorDelegationsRequest) | [QueryDelegatorDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorDelegationsResponse) | DelegatorDelegations queries all delegations of a given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorUnbondingDelegations | [QueryDelegatorUnbondingDelegationsRequest](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsRequest) | [QueryDelegatorUnbondingDelegationsResponse](#cosmos-staking-v1beta1-QueryDelegatorUnbondingDelegationsResponse) | DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| Redelegations | [QueryRedelegationsRequest](#cosmos-staking-v1beta1-QueryRedelegationsRequest) | [QueryRedelegationsResponse](#cosmos-staking-v1beta1-QueryRedelegationsResponse) | Redelegations queries redelegations of given address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorValidators | [QueryDelegatorValidatorsRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorsRequest) | [QueryDelegatorValidatorsResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorsResponse) | DelegatorValidators queries all validators info for given delegator address.

When called from another module, this query might consume a high amount of gas if the pagination field is incorrectly set. |
| DelegatorValidator | [QueryDelegatorValidatorRequest](#cosmos-staking-v1beta1-QueryDelegatorValidatorRequest) | [QueryDelegatorValidatorResponse](#cosmos-staking-v1beta1-QueryDelegatorValidatorResponse) | DelegatorValidator queries validator info for given delegator validator pair. |
| HistoricalInfo | [QueryHistoricalInfoRequest](#cosmos-staking-v1beta1-QueryHistoricalInfoRequest) | [QueryHistoricalInfoResponse](#cosmos-staking-v1beta1-QueryHistoricalInfoResponse) | HistoricalInfo queries the historical info for given height. |
| Pool | [QueryPoolRequest](#cosmos-staking-v1beta1-QueryPoolRequest) | [QueryPoolResponse](#cosmos-staking-v1beta1-QueryPoolResponse) | Pool queries the pool info. |
| Params | [QueryParamsRequest](#cosmos-staking-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#cosmos-staking-v1beta1-QueryParamsResponse) | Parameters queries the staking parameters. |

 



<a name="cosmos_staking_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/staking/v1beta1/tx.proto



<a name="cosmos-staking-v1beta1-MsgBeginRedelegate"></a>

### MsgBeginRedelegate
MsgBeginRedelegate defines a SDK message for performing a redelegation
of coins from a delegator and source validator to a destination validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_src_address | [string](#string) |  |  |
| validator_dst_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgBeginRedelegateResponse"></a>

### MsgBeginRedelegateResponse
MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-staking-v1beta1-MsgCancelUnbondingDelegation"></a>

### MsgCancelUnbondingDelegation
MsgCancelUnbondingDelegation defines the SDK message for performing a cancel unbonding delegation for delegator


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount is always less than or equal to unbonding delegation entry balance |
| creation_height | [int64](#int64) |  | creation_height is the height which the unbonding took place. |






<a name="cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse"></a>

### MsgCancelUnbondingDelegationResponse
MsgCancelUnbondingDelegationResponse






<a name="cosmos-staking-v1beta1-MsgCreateValidator"></a>

### MsgCreateValidator
MsgCreateValidator defines a SDK message for creating a new validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [Description](#cosmos-staking-v1beta1-Description) |  |  |
| commission | [CommissionRates](#cosmos-staking-v1beta1-CommissionRates) |  |  |
| min_self_delegation | [string](#string) |  |  |
| delegator_address | [string](#string) |  | **Deprecated.** Deprecated: Use of Delegator Address in MsgCreateValidator is deprecated. The validator address bytes and delegator address bytes refer to the same account while creating validator (defer only in bech32 notation). |
| validator_address | [string](#string) |  |  |
| pubkey | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| value | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgCreateValidatorResponse"></a>

### MsgCreateValidatorResponse
MsgCreateValidatorResponse defines the Msg/CreateValidator response type.






<a name="cosmos-staking-v1beta1-MsgDelegate"></a>

### MsgDelegate
MsgDelegate defines a SDK message for performing a delegation of coins
from a delegator to a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgDelegateResponse"></a>

### MsgDelegateResponse
MsgDelegateResponse defines the Msg/Delegate response type.






<a name="cosmos-staking-v1beta1-MsgEditValidator"></a>

### MsgEditValidator
MsgEditValidator defines a SDK message for editing an existing validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [Description](#cosmos-staking-v1beta1-Description) |  |  |
| validator_address | [string](#string) |  |  |
| commission_rate | [string](#string) |  | We pass a reference to the new commission rate and min self delegation as it&#39;s not mandatory to update. If not updated, the deserialized rate will be zero with no way to distinguish if an update was intended. REF: #2373 |
| min_self_delegation | [string](#string) |  |  |






<a name="cosmos-staking-v1beta1-MsgEditValidatorResponse"></a>

### MsgEditValidatorResponse
MsgEditValidatorResponse defines the Msg/EditValidator response type.






<a name="cosmos-staking-v1beta1-MsgRotateConsPubKey"></a>

### MsgRotateConsPubKey
MsgRotateConsPubKey is the Msg/RotateConsPubKey request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| validator_address | [string](#string) |  |  |
| new_pubkey | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="cosmos-staking-v1beta1-MsgRotateConsPubKeyResponse"></a>

### MsgRotateConsPubKeyResponse
MsgRotateConsPubKeyResponse defines the response structure for executing a
MsgRotateConsPubKey message.






<a name="cosmos-staking-v1beta1-MsgUndelegate"></a>

### MsgUndelegate
MsgUndelegate defines a SDK message for performing an undelegation from a
delegate and a validator.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| delegator_address | [string](#string) |  |  |
| validator_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |






<a name="cosmos-staking-v1beta1-MsgUndelegateResponse"></a>

### MsgUndelegateResponse
MsgUndelegateResponse defines the Msg/Undelegate response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| completion_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | amount returns the amount of undelegated coins |






<a name="cosmos-staking-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#cosmos-staking-v1beta1-Params) |  | params defines the x/staking parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmos-staking-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="cosmos-staking-v1beta1-Msg"></a>

### Msg
Msg defines the staking Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateValidator | [MsgCreateValidator](#cosmos-staking-v1beta1-MsgCreateValidator) | [MsgCreateValidatorResponse](#cosmos-staking-v1beta1-MsgCreateValidatorResponse) | CreateValidator defines a method for creating a new validator. |
| EditValidator | [MsgEditValidator](#cosmos-staking-v1beta1-MsgEditValidator) | [MsgEditValidatorResponse](#cosmos-staking-v1beta1-MsgEditValidatorResponse) | EditValidator defines a method for editing an existing validator. |
| Delegate | [MsgDelegate](#cosmos-staking-v1beta1-MsgDelegate) | [MsgDelegateResponse](#cosmos-staking-v1beta1-MsgDelegateResponse) | Delegate defines a method for performing a delegation of coins from a delegator to a validator. |
| BeginRedelegate | [MsgBeginRedelegate](#cosmos-staking-v1beta1-MsgBeginRedelegate) | [MsgBeginRedelegateResponse](#cosmos-staking-v1beta1-MsgBeginRedelegateResponse) | BeginRedelegate defines a method for performing a redelegation of coins from a delegator and source validator to a destination validator. |
| Undelegate | [MsgUndelegate](#cosmos-staking-v1beta1-MsgUndelegate) | [MsgUndelegateResponse](#cosmos-staking-v1beta1-MsgUndelegateResponse) | Undelegate defines a method for performing an undelegation from a delegate and a validator. |
| CancelUnbondingDelegation | [MsgCancelUnbondingDelegation](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegation) | [MsgCancelUnbondingDelegationResponse](#cosmos-staking-v1beta1-MsgCancelUnbondingDelegationResponse) | CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation and delegate back to previous validator. |
| UpdateParams | [MsgUpdateParams](#cosmos-staking-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmos-staking-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines an operation for updating the x/staking module parameters. |
| RotateConsPubKey | [MsgRotateConsPubKey](#cosmos-staking-v1beta1-MsgRotateConsPubKey) | [MsgRotateConsPubKeyResponse](#cosmos-staking-v1beta1-MsgRotateConsPubKeyResponse) | RotateConsPubKey defines an operation for rotating the consensus keys of a validator. |

 



<a name="cosmos_store_internal_kv_v1beta1_kv-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/internal/kv/v1beta1/kv.proto



<a name="cosmos-store-internal-kv-v1beta1-Pair"></a>

### Pair
Pair defines a key/value bytes tuple.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |






<a name="cosmos-store-internal-kv-v1beta1-Pairs"></a>

### Pairs
Pairs defines a repeated slice of Pair objects.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pairs | [Pair](#cosmos-store-internal-kv-v1beta1-Pair) | repeated |  |





 

 

 

 



<a name="cosmos_store_snapshots_v1_snapshot-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/snapshots/v1/snapshot.proto



<a name="cosmos-store-snapshots-v1-Metadata"></a>

### Metadata
Metadata contains SDK-specific snapshot metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunk_hashes | [bytes](#bytes) | repeated | SHA-256 chunk hashes |






<a name="cosmos-store-snapshots-v1-Snapshot"></a>

### Snapshot
Snapshot contains Tendermint state sync snapshot info.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  |  |
| format | [uint32](#uint32) |  |  |
| chunks | [uint32](#uint32) |  |  |
| hash | [bytes](#bytes) |  |  |
| metadata | [Metadata](#cosmos-store-snapshots-v1-Metadata) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotExtensionMeta"></a>

### SnapshotExtensionMeta
SnapshotExtensionMeta contains metadata about an external snapshotter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| format | [uint32](#uint32) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotExtensionPayload"></a>

### SnapshotExtensionPayload
SnapshotExtensionPayload contains payloads of an external snapshotter.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotIAVLItem"></a>

### SnapshotIAVLItem
SnapshotIAVLItem is an exported IAVL node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| version | [int64](#int64) |  | version is block height |
| height | [int32](#int32) |  | height is depth of the tree. |






<a name="cosmos-store-snapshots-v1-SnapshotItem"></a>

### SnapshotItem
SnapshotItem is an item contained in a rootmulti.Store snapshot.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| store | [SnapshotStoreItem](#cosmos-store-snapshots-v1-SnapshotStoreItem) |  |  |
| iavl | [SnapshotIAVLItem](#cosmos-store-snapshots-v1-SnapshotIAVLItem) |  |  |
| extension | [SnapshotExtensionMeta](#cosmos-store-snapshots-v1-SnapshotExtensionMeta) |  |  |
| extension_payload | [SnapshotExtensionPayload](#cosmos-store-snapshots-v1-SnapshotExtensionPayload) |  |  |






<a name="cosmos-store-snapshots-v1-SnapshotStoreItem"></a>

### SnapshotStoreItem
SnapshotStoreItem contains metadata about a snapshotted store.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |





 

 

 

 



<a name="cosmos_store_v1beta1_listening-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/v1beta1/listening.proto



<a name="cosmos-store-v1beta1-BlockMetadata"></a>

### BlockMetadata
BlockMetadata contains all the abci event data of a block
the file streamer dump them into files together with the state changes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| response_commit | [tendermint.abci.ResponseCommit](#tendermint-abci-ResponseCommit) |  |  |
| request_finalize_block | [tendermint.abci.RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) |  |  |
| response_finalize_block | [tendermint.abci.ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  | TODO: should we renumber this? |






<a name="cosmos-store-v1beta1-StoreKVPair"></a>

### StoreKVPair
StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
Deletes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| store_key | [string](#string) |  | the store key for the KVStore this pair originates from |
| delete | [bool](#bool) |  | true indicates a delete operation, false indicates a set operation |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |





 

 

 

 



<a name="cosmos_store_streaming_abci_grpc-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/streaming/abci/grpc.proto



<a name="cosmos-store-streaming-abci-ListenCommitRequest"></a>

### ListenCommitRequest
ListenCommitRequest is the request type for the ListenCommit RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [int64](#int64) |  | explicitly pass in block height as ResponseCommit does not contain this info |
| res | [tendermint.abci.ResponseCommit](#tendermint-abci-ResponseCommit) |  |  |
| change_set | [cosmos.store.v1beta1.StoreKVPair](#cosmos-store-v1beta1-StoreKVPair) | repeated |  |






<a name="cosmos-store-streaming-abci-ListenCommitResponse"></a>

### ListenCommitResponse
ListenCommitResponse is the response type for the ListenCommit RPC method






<a name="cosmos-store-streaming-abci-ListenFinalizeBlockRequest"></a>

### ListenFinalizeBlockRequest
ListenEndBlockRequest is the request type for the ListenEndBlock RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [tendermint.abci.RequestFinalizeBlock](#tendermint-abci-RequestFinalizeBlock) |  |  |
| res | [tendermint.abci.ResponseFinalizeBlock](#tendermint-abci-ResponseFinalizeBlock) |  |  |






<a name="cosmos-store-streaming-abci-ListenFinalizeBlockResponse"></a>

### ListenFinalizeBlockResponse
ListenEndBlockResponse is the response type for the ListenEndBlock RPC method





 

 

 


<a name="cosmos-store-streaming-abci-ABCIListenerService"></a>

### ABCIListenerService
ABCIListenerService is the service for the BaseApp ABCIListener interface

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListenFinalizeBlock | [ListenFinalizeBlockRequest](#cosmos-store-streaming-abci-ListenFinalizeBlockRequest) | [ListenFinalizeBlockResponse](#cosmos-store-streaming-abci-ListenFinalizeBlockResponse) | ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock |
| ListenCommit | [ListenCommitRequest](#cosmos-store-streaming-abci-ListenCommitRequest) | [ListenCommitResponse](#cosmos-store-streaming-abci-ListenCommitResponse) | ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit |

 



<a name="cosmos_store_v1beta1_commit_info-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/store/v1beta1/commit_info.proto



<a name="cosmos-store-v1beta1-CommitID"></a>

### CommitID
CommitID defines the commitment information when a specific store is
committed.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int64](#int64) |  |  |
| hash | [bytes](#bytes) |  |  |






<a name="cosmos-store-v1beta1-CommitInfo"></a>

### CommitInfo
CommitInfo defines commit information used by the multi-store when committing
a version/height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [int64](#int64) |  |  |
| store_infos | [StoreInfo](#cosmos-store-v1beta1-StoreInfo) | repeated |  |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |






<a name="cosmos-store-v1beta1-StoreInfo"></a>

### StoreInfo
StoreInfo defines store-specific commit information. It contains a reference
between a store name and the commit ID.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| commit_id | [CommitID](#cosmos-store-v1beta1-CommitID) |  |  |





 

 

 

 



<a name="cosmos_tx_config_v1_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/config/v1/config.proto



<a name="cosmos-tx-config-v1-Config"></a>

### Config
Config is the config object of the x/auth/tx package.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| skip_ante_handler | [bool](#bool) |  | skip_ante_handler defines whether the ante handler registration should be skipped in case an app wants to override this functionality. |
| skip_post_handler | [bool](#bool) |  | skip_post_handler defines whether the post handler registration should be skipped in case an app wants to override this functionality. |





 

 

 

 



<a name="cosmos_tx_signing_v1beta1_signing-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/signing/v1beta1/signing.proto



<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor"></a>

### SignatureDescriptor
SignatureDescriptor is a convenience type which represents the full data for
a signature including the public key of the signer, signing modes and the
signature itself. It is primarily used for coordinating signatures between
clients.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signer |
| data | [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data) |  |  |
| sequence | [uint64](#uint64) |  | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data"></a>

### SignatureDescriptor.Data
Data represents signature data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| single | [SignatureDescriptor.Data.Single](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single) |  | single represents a single signer |
| multi | [SignatureDescriptor.Data.Multi](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi) |  | multi represents a multisig signer |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Multi"></a>

### SignatureDescriptor.Data.Multi
Multi is the signature data for a multisig public key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bitarray | [cosmos.crypto.multisig.v1beta1.CompactBitArray](#cosmos-crypto-multisig-v1beta1-CompactBitArray) |  | bitarray specifies which keys within the multisig are signing |
| signatures | [SignatureDescriptor.Data](#cosmos-tx-signing-v1beta1-SignatureDescriptor-Data) | repeated | signatures is the signatures of the multi-signature |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptor-Data-Single"></a>

### SignatureDescriptor.Data.Single
Single is the signature data for a single signer


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer |
| signature | [bytes](#bytes) |  | signature is the raw signature bytes |






<a name="cosmos-tx-signing-v1beta1-SignatureDescriptors"></a>

### SignatureDescriptors
SignatureDescriptors wraps multiple SignatureDescriptor&#39;s.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signatures | [SignatureDescriptor](#cosmos-tx-signing-v1beta1-SignatureDescriptor) | repeated | signatures are the signature descriptors |





 


<a name="cosmos-tx-signing-v1beta1-SignMode"></a>

### SignMode
SignMode represents a signing mode with its own security guarantees.

This enum should be considered a registry of all known sign modes
in the Cosmos ecosystem. Apps are not expected to support all known
sign modes. Apps that would like to support custom  sign modes are
encouraged to open a small PR against this file to add a new case
to this SignMode enum describing their sign mode so that different
apps have a consistent version of this enum.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIGN_MODE_UNSPECIFIED | 0 | SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be rejected. |
| SIGN_MODE_DIRECT | 1 | SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is verified with raw bytes from Tx. |
| SIGN_MODE_DIRECT_AUX | 3 | SIGN_MODE_DIRECT_AUX specifies a signing mode which uses SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not require signers signing over other signers&#39; `signer_info`.

Since: cosmos-sdk 0.46 |
| SIGN_MODE_LEGACY_AMINO_JSON | 127 | SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses Amino JSON and will be removed in the future. |
| SIGN_MODE_EIP_191 | 191 | SIGN_MODE_EIP_191 specifies the sign mode for EIP 191 signing on the Cosmos SDK. Ref: https://eips.ethereum.org/EIPS/eip-191

Currently, SIGN_MODE_EIP_191 is registered as a SignMode enum variant, but is not implemented on the SDK by default. To enable EIP-191, you need to pass a custom `TxConfig` that has an implementation of `SignModeHandler` for EIP-191. The SDK may decide to fully support EIP-191 in the future.

Since: cosmos-sdk 0.45.2 |


 

 

 



<a name="cosmos_tx_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/v1beta1/tx.proto



<a name="cosmos-tx-v1beta1-AuthInfo"></a>

### AuthInfo
AuthInfo describes the fee and signer modes that are used to sign a
transaction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer_infos | [SignerInfo](#cosmos-tx-v1beta1-SignerInfo) | repeated | signer_infos defines the signing modes for the required signers. The number and order of elements must match the required signers from TxBody&#39;s messages. The first element is the primary signer and the one which pays the fee. |
| fee | [Fee](#cosmos-tx-v1beta1-Fee) |  | Fee is the fee and gas limit for the transaction. The first signer is the primary signer and the one which pays the fee. The fee can be calculated based on the cost of evaluating the body and doing signature verification of the signers. This can be estimated via simulation. |
| tip | [Tip](#cosmos-tx-v1beta1-Tip) |  | **Deprecated.** Tip is the optional tip used for transactions fees paid in another denom.

This field is ignored if the chain didn&#39;t enable tips, i.e. didn&#39;t add the `TipDecorator` in its posthandler. |






<a name="cosmos-tx-v1beta1-AuxSignerData"></a>

### AuxSignerData
AuxSignerData is the intermediary format that an auxiliary signer (e.g. a
tipper) builds and sends to the fee payer (who will build and broadcast the
actual tx). AuxSignerData is not a valid tx in itself, and will be rejected
by the node if sent directly as-is.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the bech32-encoded address of the auxiliary signer. If using AuxSignerData across different chains, the bech32 prefix of the target chain (where the final transaction is broadcasted) should be used. |
| sign_doc | [SignDocDirectAux](#cosmos-tx-v1beta1-SignDocDirectAux) |  | sign_doc is the SIGN_MODE_DIRECT_AUX sign doc that the auxiliary signer signs. Note: we use the same sign doc even if we&#39;re signing with LEGACY_AMINO_JSON. |
| mode | [cosmos.tx.signing.v1beta1.SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer. |
| sig | [bytes](#bytes) |  | sig is the signature of the sign doc. |






<a name="cosmos-tx-v1beta1-Fee"></a>

### Fee
Fee includes the amount of coins paid in fees and the maximum
gas to be used by the transaction. The ratio yields an effective &#34;gasprice&#34;,
which must be above some minimum to be accepted into the mempool.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount is the amount of coins to be paid as a fee |
| gas_limit | [uint64](#uint64) |  | gas_limit is the maximum gas that can be used in transaction processing before an out of gas error occurs |
| payer | [string](#string) |  | if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees. the payer must be a tx signer (and thus have signed this field in AuthInfo). setting this field does *not* change the ordering of required signers for the transaction. |
| granter | [string](#string) |  | if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used to pay fees instead of the fee payer&#39;s own balance. If an appropriate fee grant does not exist or the chain does not support fee grants, this will fail |






<a name="cosmos-tx-v1beta1-ModeInfo"></a>

### ModeInfo
ModeInfo describes the signing mode of a single or nested multisig signer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| single | [ModeInfo.Single](#cosmos-tx-v1beta1-ModeInfo-Single) |  | single represents a single signer |
| multi | [ModeInfo.Multi](#cosmos-tx-v1beta1-ModeInfo-Multi) |  | multi represents a nested multisig signer |






<a name="cosmos-tx-v1beta1-ModeInfo-Multi"></a>

### ModeInfo.Multi
Multi is the mode info for a multisig public key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bitarray | [cosmos.crypto.multisig.v1beta1.CompactBitArray](#cosmos-crypto-multisig-v1beta1-CompactBitArray) |  | bitarray specifies which keys within the multisig are signing |
| mode_infos | [ModeInfo](#cosmos-tx-v1beta1-ModeInfo) | repeated | mode_infos is the corresponding modes of the signers of the multisig which could include nested multisig public keys |






<a name="cosmos-tx-v1beta1-ModeInfo-Single"></a>

### ModeInfo.Single
Single is the mode info for a single signer. It is structured as a message
to allow for additional fields such as locale for SIGN_MODE_TEXTUAL in the
future


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mode | [cosmos.tx.signing.v1beta1.SignMode](#cosmos-tx-signing-v1beta1-SignMode) |  | mode is the signing mode of the single signer |






<a name="cosmos-tx-v1beta1-SignDoc"></a>

### SignDoc
SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw. |
| auth_info_bytes | [bytes](#bytes) |  | auth_info_bytes is a protobuf serialization of an AuthInfo that matches the representation in TxRaw. |
| chain_id | [string](#string) |  | chain_id is the unique identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker |
| account_number | [uint64](#uint64) |  | account_number is the account number of the account in state |






<a name="cosmos-tx-v1beta1-SignDocDirectAux"></a>

### SignDocDirectAux
SignDocDirectAux is the type used for generating sign bytes for
SIGN_MODE_DIRECT_AUX.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is protobuf serialization of a TxBody that matches the representation in TxRaw. |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signing account. |
| chain_id | [string](#string) |  | chain_id is the identifier of the chain this transaction targets. It prevents signed transactions from being used on another chain by an attacker. |
| account_number | [uint64](#uint64) |  | account_number is the account number of the account in state. |
| sequence | [uint64](#uint64) |  | sequence is the sequence number of the signing account. |
| tip | [Tip](#cosmos-tx-v1beta1-Tip) |  | **Deprecated.** tips have been deprecated and should not be used |






<a name="cosmos-tx-v1beta1-SignerInfo"></a>

### SignerInfo
SignerInfo describes the public key and signing mode of a single top-level
signer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public_key is the public key of the signer. It is optional for accounts that already exist in state. If unset, the verifier can use the required \ signer address for this position and lookup the public key. |
| mode_info | [ModeInfo](#cosmos-tx-v1beta1-ModeInfo) |  | mode_info describes the signing mode of the signer and is a nested structure to support nested multisig pubkey&#39;s |
| sequence | [uint64](#uint64) |  | sequence is the sequence of the account, which describes the number of committed transactions signed by a given address. It is used to prevent replay attacks. |






<a name="cosmos-tx-v1beta1-Tip"></a>

### Tip
Tip is the tip used for meta-transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | amount is the amount of the tip |
| tipper | [string](#string) |  | tipper is the address of the account paying for the tip |






<a name="cosmos-tx-v1beta1-Tx"></a>

### Tx
Tx is the standard type used for broadcasting transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body | [TxBody](#cosmos-tx-v1beta1-TxBody) |  | body is the processable content of the transaction |
| auth_info | [AuthInfo](#cosmos-tx-v1beta1-AuthInfo) |  | auth_info is the authorization related content of the transaction, specifically signers, signer modes and fee |
| signatures | [bytes](#bytes) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo&#39;s signer_infos to allow connecting signature meta information like public key and signing mode by position. |






<a name="cosmos-tx-v1beta1-TxBody"></a>

### TxBody
TxBody is the body of a transaction that all signers sign over.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated | messages is a list of messages to be executed. The required signers of those messages define the number and order of elements in AuthInfo&#39;s signer_infos and Tx&#39;s signatures. Each required signer address is added to the list only the first time it occurs. By convention, the first required signer (usually from the first message) is referred to as the primary signer and pays the fee for the whole transaction. |
| memo | [string](#string) |  | memo is any arbitrary note/comment to be added to the transaction. WARNING: in clients, any publicly exposed text should not be called memo, but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122). |
| timeout_height | [uint64](#uint64) |  | timeout_height is the block height after which this transaction will not be processed by the chain. |
| unordered | [bool](#bool) |  | unordered, when set to true, indicates that the transaction signer(s) intend for the transaction to be evaluated and executed in an un-ordered fashion. Specifically, the account&#39;s nonce will NOT be checked or incremented, which allows for fire-and-forget as well as concurrent transaction execution.

Note, when set to true, the existing &#39;timeout_timestamp&#39; value must be set and will be used to correspond to a timestamp in which the transaction is deemed valid.

When true, the sequence value MUST be 0, and any transaction with unordered=true and a non-zero sequence value will be rejected. External services that make assumptions about sequence values may need to be updated because of this. |
| timeout_timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | timeout_timestamp is the block time after which this transaction will not be processed by the chain.

Note, if unordered=true this value MUST be set and will act as a short-lived TTL in which the transaction is deemed valid and kept in memory to prevent duplicates. |
| extension_options | [google.protobuf.Any](#google-protobuf-Any) | repeated | extension_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can&#39;t be handled, the transaction will be rejected |
| non_critical_extension_options | [google.protobuf.Any](#google-protobuf-Any) | repeated | extension_options are arbitrary options that can be added by chains when the default options are not sufficient. If any of these are present and can&#39;t be handled, they will be ignored |






<a name="cosmos-tx-v1beta1-TxRaw"></a>

### TxRaw
TxRaw is a variant of Tx that pins the signer&#39;s exact binary representation
of body and auth_info. This is used for signing, broadcasting and
verification. The binary `serialize(tx: TxRaw)` is stored in Tendermint and
the hash `sha256(serialize(tx: TxRaw))` becomes the &#34;txhash&#34;, commonly used
as the transaction ID.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_bytes | [bytes](#bytes) |  | body_bytes is a protobuf serialization of a TxBody that matches the representation in SignDoc. |
| auth_info_bytes | [bytes](#bytes) |  | auth_info_bytes is a protobuf serialization of an AuthInfo that matches the representation in SignDoc. |
| signatures | [bytes](#bytes) | repeated | signatures is a list of signatures that matches the length and order of AuthInfo&#39;s signer_infos to allow connecting signature meta information like public key and signing mode by position. |





 

 

 

 



<a name="cosmos_tx_v1beta1_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/tx/v1beta1/service.proto



<a name="cosmos-tx-v1beta1-BroadcastTxRequest"></a>

### BroadcastTxRequest
BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |
| mode | [BroadcastMode](#cosmos-tx-v1beta1-BroadcastMode) |  |  |






<a name="cosmos-tx-v1beta1-BroadcastTxResponse"></a>

### BroadcastTxResponse
BroadcastTxResponse is the response type for the
Service.BroadcastTx method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_response | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) |  | tx_response is the queried TxResponses. |






<a name="cosmos-tx-v1beta1-GetBlockWithTxsRequest"></a>

### GetBlockWithTxsRequest
GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the height of the block to query. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines a pagination for the request. |






<a name="cosmos-tx-v1beta1-GetBlockWithTxsResponse"></a>

### GetBlockWithTxsResponse
GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [Tx](#cosmos-tx-v1beta1-Tx) | repeated | txs are the transactions in the block. |
| block_id | [tendermint.types.BlockID](#tendermint-types-BlockID) |  |  |
| block | [tendermint.types.Block](#tendermint-types-Block) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines a pagination for the response. |






<a name="cosmos-tx-v1beta1-GetTxRequest"></a>

### GetTxRequest
GetTxRequest is the request type for the Service.GetTx
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash is the tx hash to query, encoded as a hex string. |






<a name="cosmos-tx-v1beta1-GetTxResponse"></a>

### GetTxResponse
GetTxResponse is the response type for the Service.GetTx method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the queried transaction. |
| tx_response | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) |  | tx_response is the queried TxResponses. |






<a name="cosmos-tx-v1beta1-GetTxsEventRequest"></a>

### GetTxsEventRequest
GetTxsEventRequest is the request type for the Service.TxsByEvents
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| events | [string](#string) | repeated | **Deprecated.** events is the list of transaction event type. Deprecated post v0.47.x: use query instead, which should contain a valid events query. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | **Deprecated.** pagination defines a pagination for the request. Deprecated post v0.46.x: use page and limit instead. |
| order_by | [OrderBy](#cosmos-tx-v1beta1-OrderBy) |  |  |
| page | [uint64](#uint64) |  | page is the page number to query, starts at 1. If not provided, will default to first page. |
| limit | [uint64](#uint64) |  | limit is the total number of results to be returned in the result page. If left empty it will default to a value to be set by each app. |
| query | [string](#string) |  | query defines the transaction event query that is proxied to Tendermint&#39;s TxSearch RPC method. The query must be valid. |






<a name="cosmos-tx-v1beta1-GetTxsEventResponse"></a>

### GetTxsEventResponse
GetTxsEventResponse is the response type for the Service.TxsByEvents
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txs | [Tx](#cosmos-tx-v1beta1-Tx) | repeated | txs is the list of queried transactions. |
| tx_responses | [cosmos.base.abci.v1beta1.TxResponse](#cosmos-base-abci-v1beta1-TxResponse) | repeated | tx_responses is the list of queried TxResponses. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | **Deprecated.** pagination defines a pagination for the response. Deprecated post v0.46.x: use total instead. |
| total | [uint64](#uint64) |  | total is total number of results available |






<a name="cosmos-tx-v1beta1-SimulateRequest"></a>

### SimulateRequest
SimulateRequest is the request type for the Service.Simulate
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | **Deprecated.** tx is the transaction to simulate. Deprecated. Send raw tx bytes instead. |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |






<a name="cosmos-tx-v1beta1-SimulateResponse"></a>

### SimulateResponse
SimulateResponse is the response type for the
Service.SimulateRPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gas_info | [cosmos.base.abci.v1beta1.GasInfo](#cosmos-base-abci-v1beta1-GasInfo) |  | gas_info is the information about gas used in the simulation. |
| result | [cosmos.base.abci.v1beta1.Result](#cosmos-base-abci-v1beta1-Result) |  | result is the result of the simulation. |






<a name="cosmos-tx-v1beta1-TxDecodeAminoRequest"></a>

### TxDecodeAminoRequest
TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_binary | [bytes](#bytes) |  |  |






<a name="cosmos-tx-v1beta1-TxDecodeAminoResponse"></a>

### TxDecodeAminoResponse
TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_json | [string](#string) |  |  |






<a name="cosmos-tx-v1beta1-TxDecodeRequest"></a>

### TxDecodeRequest
TxDecodeRequest is the request type for the Service.TxDecode
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the raw transaction. |






<a name="cosmos-tx-v1beta1-TxDecodeResponse"></a>

### TxDecodeResponse
TxDecodeResponse is the response type for the
Service.TxDecode method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the decoded transaction. |






<a name="cosmos-tx-v1beta1-TxEncodeAminoRequest"></a>

### TxEncodeAminoRequest
TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_json | [string](#string) |  |  |






<a name="cosmos-tx-v1beta1-TxEncodeAminoResponse"></a>

### TxEncodeAminoResponse
TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amino_binary | [bytes](#bytes) |  |  |






<a name="cosmos-tx-v1beta1-TxEncodeRequest"></a>

### TxEncodeRequest
TxEncodeRequest is the request type for the Service.TxEncode
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx | [Tx](#cosmos-tx-v1beta1-Tx) |  | tx is the transaction to encode. |






<a name="cosmos-tx-v1beta1-TxEncodeResponse"></a>

### TxEncodeResponse
TxEncodeResponse is the response type for the
Service.TxEncode method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes is the encoded transaction bytes. |





 


<a name="cosmos-tx-v1beta1-BroadcastMode"></a>

### BroadcastMode
BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
method.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BROADCAST_MODE_UNSPECIFIED | 0 | zero-value for mode ordering |
| BROADCAST_MODE_BLOCK | 1 | DEPRECATED: use BROADCAST_MODE_SYNC instead, BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards. |
| BROADCAST_MODE_SYNC | 2 | BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for a CheckTx execution response only. |
| BROADCAST_MODE_ASYNC | 3 | BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns immediately. |



<a name="cosmos-tx-v1beta1-OrderBy"></a>

### OrderBy
OrderBy defines the sorting order

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_BY_UNSPECIFIED | 0 | ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. |
| ORDER_BY_ASC | 1 | ORDER_BY_ASC defines ascending order |
| ORDER_BY_DESC | 2 | ORDER_BY_DESC defines descending order |


 

 


<a name="cosmos-tx-v1beta1-Service"></a>

### Service
Service defines a gRPC service for interacting with transactions.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Simulate | [SimulateRequest](#cosmos-tx-v1beta1-SimulateRequest) | [SimulateResponse](#cosmos-tx-v1beta1-SimulateResponse) | Simulate simulates executing a transaction for estimating gas usage. |
| GetTx | [GetTxRequest](#cosmos-tx-v1beta1-GetTxRequest) | [GetTxResponse](#cosmos-tx-v1beta1-GetTxResponse) | GetTx fetches a tx by hash. |
| BroadcastTx | [BroadcastTxRequest](#cosmos-tx-v1beta1-BroadcastTxRequest) | [BroadcastTxResponse](#cosmos-tx-v1beta1-BroadcastTxResponse) | BroadcastTx broadcast transaction. |
| GetTxsEvent | [GetTxsEventRequest](#cosmos-tx-v1beta1-GetTxsEventRequest) | [GetTxsEventResponse](#cosmos-tx-v1beta1-GetTxsEventResponse) | GetTxsEvent fetches txs by event. |
| GetBlockWithTxs | [GetBlockWithTxsRequest](#cosmos-tx-v1beta1-GetBlockWithTxsRequest) | [GetBlockWithTxsResponse](#cosmos-tx-v1beta1-GetBlockWithTxsResponse) | GetBlockWithTxs fetches a block with decoded txs. |
| TxDecode | [TxDecodeRequest](#cosmos-tx-v1beta1-TxDecodeRequest) | [TxDecodeResponse](#cosmos-tx-v1beta1-TxDecodeResponse) | TxDecode decodes the transaction. |
| TxEncode | [TxEncodeRequest](#cosmos-tx-v1beta1-TxEncodeRequest) | [TxEncodeResponse](#cosmos-tx-v1beta1-TxEncodeResponse) | TxEncode encodes the transaction. |
| TxEncodeAmino | [TxEncodeAminoRequest](#cosmos-tx-v1beta1-TxEncodeAminoRequest) | [TxEncodeAminoResponse](#cosmos-tx-v1beta1-TxEncodeAminoResponse) | TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes. |
| TxDecodeAmino | [TxDecodeAminoRequest](#cosmos-tx-v1beta1-TxDecodeAminoRequest) | [TxDecodeAminoResponse](#cosmos-tx-v1beta1-TxDecodeAminoResponse) | TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON. |

 



<a name="cosmos_upgrade_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/module/v1/module.proto



<a name="cosmos-upgrade-module-v1-Module"></a>

### Module
Module is the config object of the upgrade module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority defines the custom module authority. If not set, defaults to the governance module. |





 

 

 

 



<a name="cosmos_upgrade_v1beta1_upgrade-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/upgrade.proto



<a name="cosmos-upgrade-v1beta1-CancelSoftwareUpgradeProposal"></a>

### CancelSoftwareUpgradeProposal
CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
upgrade.
Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
proposals, see MsgCancelUpgrade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal |
| description | [string](#string) |  | description of the proposal |






<a name="cosmos-upgrade-v1beta1-ModuleVersion"></a>

### ModuleVersion
ModuleVersion specifies a module and its consensus version.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name of the app module |
| version | [uint64](#uint64) |  | consensus version of the app module |






<a name="cosmos-upgrade-v1beta1-Plan"></a>

### Plan
Plan specifies information about a planned upgrade and when it should occur.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any special &#34;on-upgrade&#34; commands during the first BeginBlock method after the upgrade is applied. It is also used to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height is reached and the software will exit. |
| time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | **Deprecated.** Deprecated: Time based upgrades have been deprecated. Time based upgrade logic has been removed from the SDK. If this field is not empty, an error will be thrown. |
| height | [int64](#int64) |  | The height at which the upgrade must be performed. |
| info | [string](#string) |  | Any application specific upgrade info to be included on-chain such as a git commit that validators could automatically upgrade to |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been moved to the IBC module in the sub module 02-client. If this field is not empty, an error will be thrown. |






<a name="cosmos-upgrade-v1beta1-SoftwareUpgradeProposal"></a>

### SoftwareUpgradeProposal
SoftwareUpgradeProposal is a gov Content type for initiating a software
upgrade.
Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
proposals, see MsgSoftwareUpgrade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | title of the proposal |
| description | [string](#string) |  | description of the proposal |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan of the proposal |





 

 

 

 



<a name="cosmos_upgrade_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/query.proto



<a name="cosmos-upgrade-v1beta1-QueryAppliedPlanRequest"></a>

### QueryAppliedPlanRequest
QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the applied plan to query for. |






<a name="cosmos-upgrade-v1beta1-QueryAppliedPlanResponse"></a>

### QueryAppliedPlanResponse
QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [int64](#int64) |  | height is the block height at which the plan was applied. |






<a name="cosmos-upgrade-v1beta1-QueryAuthorityRequest"></a>

### QueryAuthorityRequest
QueryAuthorityRequest is the request type for Query/Authority






<a name="cosmos-upgrade-v1beta1-QueryAuthorityResponse"></a>

### QueryAuthorityResponse
QueryAuthorityResponse is the response type for Query/Authority


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |






<a name="cosmos-upgrade-v1beta1-QueryCurrentPlanRequest"></a>

### QueryCurrentPlanRequest
QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
method.






<a name="cosmos-upgrade-v1beta1-QueryCurrentPlanResponse"></a>

### QueryCurrentPlanResponse
QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan is the current upgrade plan. |






<a name="cosmos-upgrade-v1beta1-QueryModuleVersionsRequest"></a>

### QueryModuleVersionsRequest
QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_name | [string](#string) |  | module_name is a field to query a specific module consensus version from state. Leaving this empty will fetch the full list of module versions from state |






<a name="cosmos-upgrade-v1beta1-QueryModuleVersionsResponse"></a>

### QueryModuleVersionsResponse
QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_versions | [ModuleVersion](#cosmos-upgrade-v1beta1-ModuleVersion) | repeated | module_versions is a list of module names with their consensus versions. |






<a name="cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest"></a>

### QueryUpgradedConsensusStateRequest
QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| last_height | [int64](#int64) |  | last height of the current chain must be sent in request as this is the height under which next consensus state is stored |






<a name="cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse"></a>

### QueryUpgradedConsensusStateResponse
QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_consensus_state | [bytes](#bytes) |  |  |





 

 

 


<a name="cosmos-upgrade-v1beta1-Query"></a>

### Query
Query defines the gRPC upgrade querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CurrentPlan | [QueryCurrentPlanRequest](#cosmos-upgrade-v1beta1-QueryCurrentPlanRequest) | [QueryCurrentPlanResponse](#cosmos-upgrade-v1beta1-QueryCurrentPlanResponse) | CurrentPlan queries the current upgrade plan. |
| AppliedPlan | [QueryAppliedPlanRequest](#cosmos-upgrade-v1beta1-QueryAppliedPlanRequest) | [QueryAppliedPlanResponse](#cosmos-upgrade-v1beta1-QueryAppliedPlanResponse) | AppliedPlan queries a previously applied upgrade plan by its name. |
| UpgradedConsensusState | [QueryUpgradedConsensusStateRequest](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateRequest) | [QueryUpgradedConsensusStateResponse](#cosmos-upgrade-v1beta1-QueryUpgradedConsensusStateResponse) | UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) |
| ModuleVersions | [QueryModuleVersionsRequest](#cosmos-upgrade-v1beta1-QueryModuleVersionsRequest) | [QueryModuleVersionsResponse](#cosmos-upgrade-v1beta1-QueryModuleVersionsResponse) | ModuleVersions queries the list of module versions from state. |
| Authority | [QueryAuthorityRequest](#cosmos-upgrade-v1beta1-QueryAuthorityRequest) | [QueryAuthorityResponse](#cosmos-upgrade-v1beta1-QueryAuthorityResponse) | Returns the account with authority to conduct upgrades |

 



<a name="cosmos_upgrade_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/upgrade/v1beta1/tx.proto



<a name="cosmos-upgrade-v1beta1-MsgCancelUpgrade"></a>

### MsgCancelUpgrade
MsgCancelUpgrade is the Msg/CancelUpgrade request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |






<a name="cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse"></a>

### MsgCancelUpgradeResponse
MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.






<a name="cosmos-upgrade-v1beta1-MsgSoftwareUpgrade"></a>

### MsgSoftwareUpgrade
MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| plan | [Plan](#cosmos-upgrade-v1beta1-Plan) |  | plan is the upgrade plan. |






<a name="cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse"></a>

### MsgSoftwareUpgradeResponse
MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.





 

 

 


<a name="cosmos-upgrade-v1beta1-Msg"></a>

### Msg
Msg defines the upgrade Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SoftwareUpgrade | [MsgSoftwareUpgrade](#cosmos-upgrade-v1beta1-MsgSoftwareUpgrade) | [MsgSoftwareUpgradeResponse](#cosmos-upgrade-v1beta1-MsgSoftwareUpgradeResponse) | SoftwareUpgrade is a governance operation for initiating a software upgrade. |
| CancelUpgrade | [MsgCancelUpgrade](#cosmos-upgrade-v1beta1-MsgCancelUpgrade) | [MsgCancelUpgradeResponse](#cosmos-upgrade-v1beta1-MsgCancelUpgradeResponse) | CancelUpgrade is a governance operation for cancelling a previously approved software upgrade. |

 



<a name="cosmos_vesting_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/vesting/module/v1/module.proto



<a name="cosmos-vesting-module-v1-Module"></a>

### Module
Module is the config object of the vesting module.





 

 

 

 



<a name="cosmos_vesting_v1beta1_vesting-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/vesting/v1beta1/vesting.proto



<a name="cosmos-vesting-v1beta1-BaseVestingAccount"></a>

### BaseVestingAccount
BaseVestingAccount implements the VestingAccount interface. It contains all
the necessary fields needed for any vesting account implementation.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [cosmos.auth.v1beta1.BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| original_vesting | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| delegated_free | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| delegated_vesting | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| end_time | [int64](#int64) |  | Vesting end time, as unix timestamp (in seconds). |






<a name="cosmos-vesting-v1beta1-ContinuousVestingAccount"></a>

### ContinuousVestingAccount
ContinuousVestingAccount implements the VestingAccount interface. It
continuously vests by unlocking coins linearly with respect to time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |
| start_time | [int64](#int64) |  | Vesting start time, as unix timestamp (in seconds). |






<a name="cosmos-vesting-v1beta1-DelayedVestingAccount"></a>

### DelayedVestingAccount
DelayedVestingAccount implements the VestingAccount interface. It vests all
coins after a specific time, but not prior. In other words, it keeps them
locked until a specified time.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |






<a name="cosmos-vesting-v1beta1-Period"></a>

### Period
Period defines a length of time and amount of coins that will vest.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [int64](#int64) |  | Period duration in seconds. |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-vesting-v1beta1-PeriodicVestingAccount"></a>

### PeriodicVestingAccount
PeriodicVestingAccount implements the VestingAccount interface. It
periodically vests by unlocking coins during each specified period.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |
| start_time | [int64](#int64) |  |  |
| vesting_periods | [Period](#cosmos-vesting-v1beta1-Period) | repeated |  |






<a name="cosmos-vesting-v1beta1-PermanentLockedAccount"></a>

### PermanentLockedAccount
PermanentLockedAccount implements the VestingAccount interface. It does
not ever release coins, locking them indefinitely. Coins in this account can
still be used for delegating and for governance votes even while locked.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_vesting_account | [BaseVestingAccount](#cosmos-vesting-v1beta1-BaseVestingAccount) |  |  |





 

 

 

 



<a name="cosmos_vesting_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/vesting/v1beta1/tx.proto



<a name="cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount"></a>

### MsgCreatePeriodicVestingAccount
MsgCreateVestingAccount defines a message that enables creating a vesting
account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| start_time | [int64](#int64) |  | start of vesting as unix time (in seconds). |
| vesting_periods | [Period](#cosmos-vesting-v1beta1-Period) | repeated |  |






<a name="cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse"></a>

### MsgCreatePeriodicVestingAccountResponse
MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
response type.






<a name="cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount"></a>

### MsgCreatePermanentLockedAccount
MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
locked account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |






<a name="cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse"></a>

### MsgCreatePermanentLockedAccountResponse
MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.






<a name="cosmos-vesting-v1beta1-MsgCreateVestingAccount"></a>

### MsgCreateVestingAccount
MsgCreateVestingAccount defines a message that enables creating a vesting
account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  |  |
| to_address | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| end_time | [int64](#int64) |  | end of vesting as unix time (in seconds). |
| delayed | [bool](#bool) |  |  |






<a name="cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse"></a>

### MsgCreateVestingAccountResponse
MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.





 

 

 


<a name="cosmos-vesting-v1beta1-Msg"></a>

### Msg
Msg defines the bank Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateVestingAccount | [MsgCreateVestingAccount](#cosmos-vesting-v1beta1-MsgCreateVestingAccount) | [MsgCreateVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreateVestingAccountResponse) | CreateVestingAccount defines a method that enables creating a vesting account. |
| CreatePermanentLockedAccount | [MsgCreatePermanentLockedAccount](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccount) | [MsgCreatePermanentLockedAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePermanentLockedAccountResponse) | CreatePermanentLockedAccount defines a method that enables creating a permanent locked account. |
| CreatePeriodicVestingAccount | [MsgCreatePeriodicVestingAccount](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccount) | [MsgCreatePeriodicVestingAccountResponse](#cosmos-vesting-v1beta1-MsgCreatePeriodicVestingAccountResponse) | CreatePeriodicVestingAccount defines a method that enables creating a periodic vesting account. |

 



<a name="cosmwasm_wasm_v1_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/types.proto



<a name="cosmwasm-wasm-v1-AbsoluteTxPosition"></a>

### AbsoluteTxPosition
AbsoluteTxPosition is a unique transaction position that allows for global
ordering of transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_height | [uint64](#uint64) |  | BlockHeight is the block the contract was created at |
| tx_index | [uint64](#uint64) |  | TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) |






<a name="cosmwasm-wasm-v1-AccessConfig"></a>

### AccessConfig
AccessConfig access control type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [AccessType](#cosmwasm-wasm-v1-AccessType) |  |  |
| addresses | [string](#string) | repeated |  |






<a name="cosmwasm-wasm-v1-AccessTypeParam"></a>

### AccessTypeParam
AccessTypeParam


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [AccessType](#cosmwasm-wasm-v1-AccessType) |  |  |






<a name="cosmwasm-wasm-v1-CodeInfo"></a>

### CodeInfo
CodeInfo is data for the uploaded contract WASM code


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_hash | [bytes](#bytes) |  | CodeHash is the unique identifier created by wasmvm |
| creator | [string](#string) |  | Creator address who initially stored the code |
| instantiate_config | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiateConfig access control to apply on contract creation, optional |






<a name="cosmwasm-wasm-v1-ContractCodeHistoryEntry"></a>

### ContractCodeHistoryEntry
ContractCodeHistoryEntry metadata to a contract.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| operation | [ContractCodeHistoryOperationType](#cosmwasm-wasm-v1-ContractCodeHistoryOperationType) |  |  |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| updated | [AbsoluteTxPosition](#cosmwasm-wasm-v1-AbsoluteTxPosition) |  | Updated Tx position when the operation was executed. |
| msg | [bytes](#bytes) |  |  |






<a name="cosmwasm-wasm-v1-ContractInfo"></a>

### ContractInfo
ContractInfo stores a WASM contract instance


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored Wasm code |
| creator | [string](#string) |  | Creator address who initially instantiated the contract |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| created | [AbsoluteTxPosition](#cosmwasm-wasm-v1-AbsoluteTxPosition) |  | Created Tx position when the contract was instantiated. |
| ibc_port_id | [string](#string) |  |  |
| extension | [google.protobuf.Any](#google-protobuf-Any) |  | Extension is an extension point to store custom metadata within the persistence model. |
| ibc2_port_id | [string](#string) |  |  |






<a name="cosmwasm-wasm-v1-Model"></a>

### Model
Model is a struct that holds a KV pair


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | hex-encode key to read it better (this is often ascii) |
| value | [bytes](#bytes) |  | base64-encode raw value |






<a name="cosmwasm-wasm-v1-Params"></a>

### Params
Params defines the set of wasm parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_upload_access | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  |  |
| instantiate_default_permission | [AccessType](#cosmwasm-wasm-v1-AccessType) |  |  |





 


<a name="cosmwasm-wasm-v1-AccessType"></a>

### AccessType
AccessType permission types

| Name | Number | Description |
| ---- | ------ | ----------- |
| ACCESS_TYPE_UNSPECIFIED | 0 | AccessTypeUnspecified placeholder for empty value |
| ACCESS_TYPE_NOBODY | 1 | AccessTypeNobody forbidden |
| ACCESS_TYPE_EVERYBODY | 3 | AccessTypeEverybody unrestricted |
| ACCESS_TYPE_ANY_OF_ADDRESSES | 4 | AccessTypeAnyOfAddresses allow any of the addresses |



<a name="cosmwasm-wasm-v1-ContractCodeHistoryOperationType"></a>

### ContractCodeHistoryOperationType
ContractCodeHistoryOperationType actions that caused a code change

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED | 0 | ContractCodeHistoryOperationTypeUnspecified placeholder for empty value |
| CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT | 1 | ContractCodeHistoryOperationTypeInit on chain contract instantiation |
| CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE | 2 | ContractCodeHistoryOperationTypeMigrate code migration |
| CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS | 3 | ContractCodeHistoryOperationTypeGenesis based on genesis data |


 

 

 



<a name="cosmwasm_wasm_v1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/authz.proto



<a name="cosmwasm-wasm-v1-AcceptedMessageKeysFilter"></a>

### AcceptedMessageKeysFilter
AcceptedMessageKeysFilter accept only the specific contract message keys in
the json object to be executed.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| keys | [string](#string) | repeated | Messages is the list of unique keys |






<a name="cosmwasm-wasm-v1-AcceptedMessagesFilter"></a>

### AcceptedMessagesFilter
AcceptedMessagesFilter accept only the specific raw contract messages to be
executed.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [bytes](#bytes) | repeated | Messages is the list of raw contract messages |






<a name="cosmwasm-wasm-v1-AllowAllMessagesFilter"></a>

### AllowAllMessagesFilter
AllowAllMessagesFilter is a wildcard to allow any type of contract payload
message.
Since: wasmd 0.30






<a name="cosmwasm-wasm-v1-CodeGrant"></a>

### CodeGrant
CodeGrant a granted permission for a single code


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_hash | [bytes](#bytes) |  | CodeHash is the unique identifier created by wasmvm Wildcard &#34;*&#34; is used to specify any kind of grant. |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission is the superset access control to apply on contract creation. Optional |






<a name="cosmwasm-wasm-v1-CombinedLimit"></a>

### CombinedLimit
CombinedLimit defines the maximal amounts that can be sent to a contract and
the maximal number of calls executable. Both need to remain &gt;0 to be valid.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| calls_remaining | [uint64](#uint64) |  | Remaining number that is decremented on each execution |
| amounts | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Amounts is the maximal amount of tokens transferable to the contract. |






<a name="cosmwasm-wasm-v1-ContractExecutionAuthorization"></a>

### ContractExecutionAuthorization
ContractExecutionAuthorization defines authorization for wasm execute.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [ContractGrant](#cosmwasm-wasm-v1-ContractGrant) | repeated | Grants for contract executions |






<a name="cosmwasm-wasm-v1-ContractGrant"></a>

### ContractGrant
ContractGrant a granted permission for a single contract
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract | [string](#string) |  | Contract is the bech32 address of the smart contract |
| limit | [google.protobuf.Any](#google-protobuf-Any) |  | Limit defines execution limits that are enforced and updated when the grant is applied. When the limit lapsed the grant is removed. |
| filter | [google.protobuf.Any](#google-protobuf-Any) |  | Filter define more fine-grained control on the message payload passed to the contract in the operation. When no filter applies on execution, the operation is prohibited. |






<a name="cosmwasm-wasm-v1-ContractMigrationAuthorization"></a>

### ContractMigrationAuthorization
ContractMigrationAuthorization defines authorization for wasm contract
migration. Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [ContractGrant](#cosmwasm-wasm-v1-ContractGrant) | repeated | Grants for contract migrations |






<a name="cosmwasm-wasm-v1-MaxCallsLimit"></a>

### MaxCallsLimit
MaxCallsLimit limited number of calls to the contract. No funds transferable.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| remaining | [uint64](#uint64) |  | Remaining number that is decremented on each execution |






<a name="cosmwasm-wasm-v1-MaxFundsLimit"></a>

### MaxFundsLimit
MaxFundsLimit defines the maximal amounts that can be sent to the contract.
Since: wasmd 0.30


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amounts | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Amounts is the maximal amount of tokens transferable to the contract. |






<a name="cosmwasm-wasm-v1-StoreCodeAuthorization"></a>

### StoreCodeAuthorization
StoreCodeAuthorization defines authorization for wasm code upload.
Since: wasmd 0.42


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [CodeGrant](#cosmwasm-wasm-v1-CodeGrant) | repeated | Grants for code upload |





 

 

 

 



<a name="cosmwasm_wasm_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/genesis.proto



<a name="cosmwasm-wasm-v1-Code"></a>

### Code
Code struct encompasses CodeInfo and CodeBytes


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  |  |
| code_info | [CodeInfo](#cosmwasm-wasm-v1-CodeInfo) |  |  |
| code_bytes | [bytes](#bytes) |  |  |
| pinned | [bool](#bool) |  | Pinned to wasmvm cache |






<a name="cosmwasm-wasm-v1-Contract"></a>

### Contract
Contract struct encompasses ContractAddress, ContractInfo, and ContractState


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_address | [string](#string) |  |  |
| contract_info | [ContractInfo](#cosmwasm-wasm-v1-ContractInfo) |  |  |
| contract_state | [Model](#cosmwasm-wasm-v1-Model) | repeated |  |
| contract_code_history | [ContractCodeHistoryEntry](#cosmwasm-wasm-v1-ContractCodeHistoryEntry) | repeated |  |






<a name="cosmwasm-wasm-v1-GenesisState"></a>

### GenesisState
GenesisState - genesis state of x/wasm


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmwasm-wasm-v1-Params) |  |  |
| codes | [Code](#cosmwasm-wasm-v1-Code) | repeated |  |
| contracts | [Contract](#cosmwasm-wasm-v1-Contract) | repeated |  |
| sequences | [Sequence](#cosmwasm-wasm-v1-Sequence) | repeated |  |






<a name="cosmwasm-wasm-v1-Sequence"></a>

### Sequence
Sequence key and value of an id generation counter


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id_key | [bytes](#bytes) |  |  |
| value | [uint64](#uint64) |  |  |





 

 

 

 



<a name="cosmwasm_wasm_v1_ibc-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/ibc.proto



<a name="cosmwasm-wasm-v1-MsgIBCCloseChannel"></a>

### MsgIBCCloseChannel
MsgIBCCloseChannel port and channel need to be owned by the contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel | [string](#string) |  |  |






<a name="cosmwasm-wasm-v1-MsgIBCSend"></a>

### MsgIBCSend
MsgIBCSend


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel | [string](#string) |  | the channel by which the packet will be sent |
| timeout_height | [uint64](#uint64) |  | Timeout height relative to the current block height. The timeout is disabled when set to 0. |
| timeout_timestamp | [uint64](#uint64) |  | Timeout timestamp (in nanoseconds) relative to the current block timestamp. The timeout is disabled when set to 0. |
| data | [bytes](#bytes) |  | Data is the payload to transfer. We must not make assumption what format or content is in here. |






<a name="cosmwasm-wasm-v1-MsgIBCSendResponse"></a>

### MsgIBCSendResponse
MsgIBCSendResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | Sequence number of the IBC packet sent |






<a name="cosmwasm-wasm-v1-MsgIBCWriteAcknowledgementResponse"></a>

### MsgIBCWriteAcknowledgementResponse
MsgIBCWriteAcknowledgementResponse





 

 

 

 



<a name="cosmwasm_wasm_v1_proposal_legacy-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/proposal_legacy.proto



<a name="cosmwasm-wasm-v1-AccessConfigUpdate"></a>

### AccessConfigUpdate
AccessConfigUpdate contains the code id and the access config to be
applied.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code to be updated |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission to apply to the set of code ids |






<a name="cosmwasm-wasm-v1-ClearAdminProposal"></a>

### ClearAdminProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit ClearAdminProposal. To clear the admin of a contract,
a simple MsgClearAdmin can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| contract | [string](#string) |  | Contract is the address of the smart contract |






<a name="cosmwasm-wasm-v1-ExecuteContractProposal"></a>

### ExecuteContractProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit ExecuteContractProposal. To call execute on a contract,
a simple MsgExecuteContract can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| run_as | [string](#string) |  | RunAs is the address that is passed to the contract&#39;s environment as sender |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract as execute |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |






<a name="cosmwasm-wasm-v1-InstantiateContract2Proposal"></a>

### InstantiateContract2Proposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit InstantiateContract2Proposal. To instantiate contract 2,
a simple MsgInstantiateContract2 can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| run_as | [string](#string) |  | RunAs is the address that is passed to the contract&#39;s environment as sender |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encode message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |
| salt | [bytes](#bytes) |  | Salt is an arbitrary value provided by the sender. Size can be 1 to 64. |
| fix_msg | [bool](#bool) |  | FixMsg include the msg value into the hash for the predictable address. Default is false |






<a name="cosmwasm-wasm-v1-InstantiateContractProposal"></a>

### InstantiateContractProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit InstantiateContractProposal. To instantiate a contract,
a simple MsgInstantiateContract can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| run_as | [string](#string) |  | RunAs is the address that is passed to the contract&#39;s environment as sender |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |






<a name="cosmwasm-wasm-v1-MigrateContractProposal"></a>

### MigrateContractProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit MigrateContractProposal. To migrate a contract,
a simple MsgMigrateContract can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text

Note: skipping 3 as this was previously used for unneeded run_as |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| code_id | [uint64](#uint64) |  | CodeID references the new WASM code |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on migration |






<a name="cosmwasm-wasm-v1-PinCodesProposal"></a>

### PinCodesProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
cache, a simple MsgPinCodes can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| code_ids | [uint64](#uint64) | repeated | CodeIDs references the new WASM codes |






<a name="cosmwasm-wasm-v1-StoreAndInstantiateContractProposal"></a>

### StoreAndInstantiateContractProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit StoreAndInstantiateContractProposal. To store and instantiate
the contract, a simple MsgStoreAndInstantiateContract can be invoked from
the x/gov module via a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| run_as | [string](#string) |  | RunAs is the address that is passed to the contract&#39;s environment as sender |
| wasm_byte_code | [bytes](#bytes) |  | WASMByteCode can be raw or gzip compressed |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission to apply on contract creation, optional |
| unpin_code | [bool](#bool) |  | UnpinCode code on upload, optional |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |
| source | [string](#string) |  | Source is the URL where the code is hosted |
| builder | [string](#string) |  | Builder is the docker image used to build the code deterministically, used for smart contract verification |
| code_hash | [bytes](#bytes) |  | CodeHash is the SHA256 sum of the code outputted by builder, used for smart contract verification |






<a name="cosmwasm-wasm-v1-StoreCodeProposal"></a>

### StoreCodeProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit StoreCodeProposal. To submit WASM code to the system,
a simple MsgStoreCode can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| run_as | [string](#string) |  | RunAs is the address that is passed to the contract&#39;s environment as sender |
| wasm_byte_code | [bytes](#bytes) |  | WASMByteCode can be raw or gzip compressed |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission to apply on contract creation, optional |
| unpin_code | [bool](#bool) |  | UnpinCode code on upload, optional |
| source | [string](#string) |  | Source is the URL where the code is hosted |
| builder | [string](#string) |  | Builder is the docker image used to build the code deterministically, used for smart contract verification |
| code_hash | [bytes](#bytes) |  | CodeHash is the SHA256 sum of the code outputted by builder, used for smart contract verification |






<a name="cosmwasm-wasm-v1-SudoContractProposal"></a>

### SudoContractProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit SudoContractProposal. To call sudo on a contract,
a simple MsgSudoContract can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract as sudo |






<a name="cosmwasm-wasm-v1-UnpinCodesProposal"></a>

### UnpinCodesProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| code_ids | [uint64](#uint64) | repeated | CodeIDs references the WASM codes |






<a name="cosmwasm-wasm-v1-UpdateAdminProposal"></a>

### UpdateAdminProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit UpdateAdminProposal. To set an admin for a contract,
a simple MsgUpdateAdmin can be invoked from the x/gov module via
a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| new_admin | [string](#string) |  | NewAdmin address to be set |
| contract | [string](#string) |  | Contract is the address of the smart contract |






<a name="cosmwasm-wasm-v1-UpdateInstantiateConfigProposal"></a>

### UpdateInstantiateConfigProposal
Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
an explicit UpdateInstantiateConfigProposal. To update instantiate config
to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
the x/gov module via a v1 governance proposal.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | Title is a short summary |
| description | [string](#string) |  | Description is a human readable text |
| access_config_updates | [AccessConfigUpdate](#cosmwasm-wasm-v1-AccessConfigUpdate) | repeated | AccessConfigUpdates contains the list of code ids and the access config to be applied. |





 

 

 

 



<a name="cosmwasm_wasm_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/query.proto



<a name="cosmwasm-wasm-v1-CodeInfoResponse"></a>

### CodeInfoResponse
CodeInfoResponse contains code meta data from CodeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | id for legacy support |
| creator | [string](#string) |  |  |
| data_hash | [bytes](#bytes) |  |  |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  |  |






<a name="cosmwasm-wasm-v1-QueryAllContractStateRequest"></a>

### QueryAllContractStateRequest
QueryAllContractStateRequest is the request type for the
Query/AllContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryAllContractStateResponse"></a>

### QueryAllContractStateResponse
QueryAllContractStateResponse is the response type for the
Query/AllContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| models | [Model](#cosmwasm-wasm-v1-Model) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryBuildAddressRequest"></a>

### QueryBuildAddressRequest
QueryBuildAddressRequest is the request type for the Query/BuildAddress RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_hash | [string](#string) |  | CodeHash is the hash of the code |
| creator_address | [string](#string) |  | CreatorAddress is the address of the contract instantiator |
| salt | [string](#string) |  | Salt is a hex encoded salt |
| init_args | [bytes](#bytes) |  | InitArgs are optional json encoded init args to be used in contract address building if provided |






<a name="cosmwasm-wasm-v1-QueryBuildAddressResponse"></a>

### QueryBuildAddressResponse
QueryBuildAddressResponse is the response type for the Query/BuildAddress RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | Address is the contract address |






<a name="cosmwasm-wasm-v1-QueryCodeInfoRequest"></a>

### QueryCodeInfoRequest
QueryCodeInfoRequest is the request type for the Query/CodeInfo RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | grpc-gateway_out does not support Go style CodeID |






<a name="cosmwasm-wasm-v1-QueryCodeInfoResponse"></a>

### QueryCodeInfoResponse
QueryCodeInfoResponse is the response type for the Query/CodeInfo RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  |  |
| creator | [string](#string) |  |  |
| checksum | [bytes](#bytes) |  |  |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  |  |






<a name="cosmwasm-wasm-v1-QueryCodeRequest"></a>

### QueryCodeRequest
QueryCodeRequest is the request type for the Query/Code RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | grpc-gateway_out does not support Go style CodeID |






<a name="cosmwasm-wasm-v1-QueryCodeResponse"></a>

### QueryCodeResponse
QueryCodeResponse is the response type for the Query/Code RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_info | [CodeInfoResponse](#cosmwasm-wasm-v1-CodeInfoResponse) |  |  |
| data | [bytes](#bytes) |  |  |






<a name="cosmwasm-wasm-v1-QueryCodesRequest"></a>

### QueryCodesRequest
QueryCodesRequest is the request type for the Query/Codes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryCodesResponse"></a>

### QueryCodesResponse
QueryCodesResponse is the response type for the Query/Codes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_infos | [CodeInfoResponse](#cosmwasm-wasm-v1-CodeInfoResponse) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryContractHistoryRequest"></a>

### QueryContractHistoryRequest
QueryContractHistoryRequest is the request type for the Query/ContractHistory
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract to query |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryContractHistoryResponse"></a>

### QueryContractHistoryResponse
QueryContractHistoryResponse is the response type for the
Query/ContractHistory RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entries | [ContractCodeHistoryEntry](#cosmwasm-wasm-v1-ContractCodeHistoryEntry) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryContractInfoRequest"></a>

### QueryContractInfoRequest
QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract to query |






<a name="cosmwasm-wasm-v1-QueryContractInfoResponse"></a>

### QueryContractInfoResponse
QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract |
| contract_info | [ContractInfo](#cosmwasm-wasm-v1-ContractInfo) |  |  |






<a name="cosmwasm-wasm-v1-QueryContractsByCodeRequest"></a>

### QueryContractsByCodeRequest
QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | grpc-gateway_out does not support Go style CodeID |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryContractsByCodeResponse"></a>

### QueryContractsByCodeResponse
QueryContractsByCodeResponse is the response type for the
Query/ContractsByCode RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contracts | [string](#string) | repeated | contracts are a set of contract addresses |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryContractsByCreatorRequest"></a>

### QueryContractsByCreatorRequest
QueryContractsByCreatorRequest is the request type for the
Query/ContractsByCreator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator_address | [string](#string) |  | CreatorAddress is the address of contract creator |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | Pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryContractsByCreatorResponse"></a>

### QueryContractsByCreatorResponse
QueryContractsByCreatorResponse is the response type for the
Query/ContractsByCreator RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_addresses | [string](#string) | repeated | ContractAddresses result set |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | Pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="cosmwasm-wasm-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#cosmwasm-wasm-v1-Params) |  | params defines the parameters of the module. |






<a name="cosmwasm-wasm-v1-QueryPinnedCodesRequest"></a>

### QueryPinnedCodesRequest
QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="cosmwasm-wasm-v1-QueryPinnedCodesResponse"></a>

### QueryPinnedCodesResponse
QueryPinnedCodesResponse is the response type for the
Query/PinnedCodes RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_ids | [uint64](#uint64) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="cosmwasm-wasm-v1-QueryRawContractStateRequest"></a>

### QueryRawContractStateRequest
QueryRawContractStateRequest is the request type for the
Query/RawContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract |
| query_data | [bytes](#bytes) |  |  |






<a name="cosmwasm-wasm-v1-QueryRawContractStateResponse"></a>

### QueryRawContractStateResponse
QueryRawContractStateResponse is the response type for the
Query/RawContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Data contains the raw store data |






<a name="cosmwasm-wasm-v1-QuerySmartContractStateRequest"></a>

### QuerySmartContractStateRequest
QuerySmartContractStateRequest is the request type for the
Query/SmartContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | address is the address of the contract |
| query_data | [bytes](#bytes) |  | QueryData contains the query data passed to the contract |






<a name="cosmwasm-wasm-v1-QuerySmartContractStateResponse"></a>

### QuerySmartContractStateResponse
QuerySmartContractStateResponse is the response type for the
Query/SmartContractState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Data contains the json data returned from the smart contract |






<a name="cosmwasm-wasm-v1-QueryWasmLimitsConfigRequest"></a>

### QueryWasmLimitsConfigRequest
QueryWasmLimitsConfigRequest is the request type for the
Query/WasmLimitsConfig RPC method.






<a name="cosmwasm-wasm-v1-QueryWasmLimitsConfigResponse"></a>

### QueryWasmLimitsConfigResponse
QueryWasmLimitsConfigResponse is the response type for the
Query/WasmLimitsConfig RPC method. It contains the JSON encoded limits for
static validation of Wasm files.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [string](#string) |  |  |





 

 

 


<a name="cosmwasm-wasm-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ContractInfo | [QueryContractInfoRequest](#cosmwasm-wasm-v1-QueryContractInfoRequest) | [QueryContractInfoResponse](#cosmwasm-wasm-v1-QueryContractInfoResponse) | ContractInfo gets the contract meta data |
| ContractHistory | [QueryContractHistoryRequest](#cosmwasm-wasm-v1-QueryContractHistoryRequest) | [QueryContractHistoryResponse](#cosmwasm-wasm-v1-QueryContractHistoryResponse) | ContractHistory gets the contract code history |
| ContractsByCode | [QueryContractsByCodeRequest](#cosmwasm-wasm-v1-QueryContractsByCodeRequest) | [QueryContractsByCodeResponse](#cosmwasm-wasm-v1-QueryContractsByCodeResponse) | ContractsByCode lists all smart contracts for a code id |
| AllContractState | [QueryAllContractStateRequest](#cosmwasm-wasm-v1-QueryAllContractStateRequest) | [QueryAllContractStateResponse](#cosmwasm-wasm-v1-QueryAllContractStateResponse) | AllContractState gets all raw store data for a single contract |
| RawContractState | [QueryRawContractStateRequest](#cosmwasm-wasm-v1-QueryRawContractStateRequest) | [QueryRawContractStateResponse](#cosmwasm-wasm-v1-QueryRawContractStateResponse) | RawContractState gets single key from the raw store data of a contract |
| SmartContractState | [QuerySmartContractStateRequest](#cosmwasm-wasm-v1-QuerySmartContractStateRequest) | [QuerySmartContractStateResponse](#cosmwasm-wasm-v1-QuerySmartContractStateResponse) | SmartContractState get smart query result from the contract |
| Code | [QueryCodeRequest](#cosmwasm-wasm-v1-QueryCodeRequest) | [QueryCodeResponse](#cosmwasm-wasm-v1-QueryCodeResponse) | Code gets the binary code and metadata for a single wasm code |
| Codes | [QueryCodesRequest](#cosmwasm-wasm-v1-QueryCodesRequest) | [QueryCodesResponse](#cosmwasm-wasm-v1-QueryCodesResponse) | Codes gets the metadata for all stored wasm codes |
| CodeInfo | [QueryCodeInfoRequest](#cosmwasm-wasm-v1-QueryCodeInfoRequest) | [QueryCodeInfoResponse](#cosmwasm-wasm-v1-QueryCodeInfoResponse) | CodeInfo gets the metadata for a single wasm code |
| PinnedCodes | [QueryPinnedCodesRequest](#cosmwasm-wasm-v1-QueryPinnedCodesRequest) | [QueryPinnedCodesResponse](#cosmwasm-wasm-v1-QueryPinnedCodesResponse) | PinnedCodes gets the pinned code ids |
| Params | [QueryParamsRequest](#cosmwasm-wasm-v1-QueryParamsRequest) | [QueryParamsResponse](#cosmwasm-wasm-v1-QueryParamsResponse) | Params gets the module params |
| ContractsByCreator | [QueryContractsByCreatorRequest](#cosmwasm-wasm-v1-QueryContractsByCreatorRequest) | [QueryContractsByCreatorResponse](#cosmwasm-wasm-v1-QueryContractsByCreatorResponse) | ContractsByCreator gets the contracts by creator |
| WasmLimitsConfig | [QueryWasmLimitsConfigRequest](#cosmwasm-wasm-v1-QueryWasmLimitsConfigRequest) | [QueryWasmLimitsConfigResponse](#cosmwasm-wasm-v1-QueryWasmLimitsConfigResponse) | WasmLimitsConfig gets the configured limits for static validation of Wasm files, encoded in JSON. |
| BuildAddress | [QueryBuildAddressRequest](#cosmwasm-wasm-v1-QueryBuildAddressRequest) | [QueryBuildAddressResponse](#cosmwasm-wasm-v1-QueryBuildAddressResponse) | BuildAddress builds a contract address |

 



<a name="cosmwasm_wasm_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmwasm/wasm/v1/tx.proto



<a name="cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddresses"></a>

### MsgAddCodeUploadParamsAddresses
MsgAddCodeUploadParamsAddresses is the
MsgAddCodeUploadParamsAddresses request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| addresses | [string](#string) | repeated |  |






<a name="cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddressesResponse"></a>

### MsgAddCodeUploadParamsAddressesResponse
MsgAddCodeUploadParamsAddressesResponse defines the response
structure for executing a MsgAddCodeUploadParamsAddresses message.






<a name="cosmwasm-wasm-v1-MsgClearAdmin"></a>

### MsgClearAdmin
MsgClearAdmin removes any admin stored for a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the actor that signed the messages |
| contract | [string](#string) |  | Contract is the address of the smart contract |






<a name="cosmwasm-wasm-v1-MsgClearAdminResponse"></a>

### MsgClearAdminResponse
MsgClearAdminResponse returns empty data






<a name="cosmwasm-wasm-v1-MsgExecuteContract"></a>

### MsgExecuteContract
MsgExecuteContract submits the given message data to a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on execution |






<a name="cosmwasm-wasm-v1-MsgExecuteContractResponse"></a>

### MsgExecuteContractResponse
MsgExecuteContractResponse returns execution result data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgInstantiateContract"></a>

### MsgInstantiateContract
MsgInstantiateContract create a new smart contract instance for the given
code id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |






<a name="cosmwasm-wasm-v1-MsgInstantiateContract2"></a>

### MsgInstantiateContract2
MsgInstantiateContract2 create a new smart contract instance for the given
code id with a predictable address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred to the contract on instantiation |
| salt | [bytes](#bytes) |  | Salt is an arbitrary value provided by the sender. Size can be 1 to 64. |
| fix_msg | [bool](#bool) |  | FixMsg include the msg value into the hash for the predictable address. Default is false |






<a name="cosmwasm-wasm-v1-MsgInstantiateContract2Response"></a>

### MsgInstantiateContract2Response
MsgInstantiateContract2Response return instantiation result data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | Address is the bech32 address of the new contract instance. |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgInstantiateContractResponse"></a>

### MsgInstantiateContractResponse
MsgInstantiateContractResponse return instantiation result data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | Address is the bech32 address of the new contract instance. |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgMigrateContract"></a>

### MsgMigrateContract
MsgMigrateContract runs a code upgrade/ downgrade for a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| code_id | [uint64](#uint64) |  | CodeID references the new WASM code |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on migration |






<a name="cosmwasm-wasm-v1-MsgMigrateContractResponse"></a>

### MsgMigrateContractResponse
MsgMigrateContractResponse returns contract migration result data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Data contains same raw bytes returned as data from the wasm contract. (May be empty) |






<a name="cosmwasm-wasm-v1-MsgPinCodes"></a>

### MsgPinCodes
MsgPinCodes is the MsgPinCodes request type.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| code_ids | [uint64](#uint64) | repeated | CodeIDs references the new WASM codes |






<a name="cosmwasm-wasm-v1-MsgPinCodesResponse"></a>

### MsgPinCodesResponse
MsgPinCodesResponse defines the response structure for executing a
MsgPinCodes message.

Since: 0.40






<a name="cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddresses"></a>

### MsgRemoveCodeUploadParamsAddresses
MsgRemoveCodeUploadParamsAddresses is the
MsgRemoveCodeUploadParamsAddresses request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| addresses | [string](#string) | repeated |  |






<a name="cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddressesResponse"></a>

### MsgRemoveCodeUploadParamsAddressesResponse
MsgRemoveCodeUploadParamsAddressesResponse defines the response
structure for executing a MsgRemoveCodeUploadParamsAddresses message.






<a name="cosmwasm-wasm-v1-MsgStoreAndInstantiateContract"></a>

### MsgStoreAndInstantiateContract
MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
request type.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| wasm_byte_code | [bytes](#bytes) |  | WASMByteCode can be raw or gzip compressed |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission to apply on contract creation, optional |
| unpin_code | [bool](#bool) |  | UnpinCode code on upload, optional. As default the uploaded contract is pinned to cache. |
| admin | [string](#string) |  | Admin is an optional address that can execute migrations |
| label | [string](#string) |  | Label is optional metadata to be stored with a contract instance. |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on instantiation |
| funds | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Funds coins that are transferred from the authority account to the contract on instantiation |
| source | [string](#string) |  | Source is the URL where the code is hosted |
| builder | [string](#string) |  | Builder is the docker image used to build the code deterministically, used for smart contract verification |
| code_hash | [bytes](#bytes) |  | CodeHash is the SHA256 sum of the code outputted by builder, used for smart contract verification |






<a name="cosmwasm-wasm-v1-MsgStoreAndInstantiateContractResponse"></a>

### MsgStoreAndInstantiateContractResponse
MsgStoreAndInstantiateContractResponse defines the response structure
for executing a MsgStoreAndInstantiateContract message.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | Address is the bech32 address of the new contract instance. |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgStoreAndMigrateContract"></a>

### MsgStoreAndMigrateContract
MsgStoreAndMigrateContract is the MsgStoreAndMigrateContract
request type.

Since: 0.42


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| wasm_byte_code | [bytes](#bytes) |  | WASMByteCode can be raw or gzip compressed |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission to apply on contract creation, optional |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract on migration |






<a name="cosmwasm-wasm-v1-MsgStoreAndMigrateContractResponse"></a>

### MsgStoreAndMigrateContractResponse
MsgStoreAndMigrateContractResponse defines the response structure
for executing a MsgStoreAndMigrateContract message.

Since: 0.42


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| checksum | [bytes](#bytes) |  | Checksum is the sha256 hash of the stored code |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgStoreCode"></a>

### MsgStoreCode
MsgStoreCode submit Wasm code to the system


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the actor that signed the messages |
| wasm_byte_code | [bytes](#bytes) |  | WASMByteCode can be raw or gzip compressed |
| instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | InstantiatePermission access control to apply on contract creation, optional |






<a name="cosmwasm-wasm-v1-MsgStoreCodeResponse"></a>

### MsgStoreCodeResponse
MsgStoreCodeResponse returns store result data.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_id | [uint64](#uint64) |  | CodeID is the reference to the stored WASM code |
| checksum | [bytes](#bytes) |  | Checksum is the sha256 hash of the stored code |






<a name="cosmwasm-wasm-v1-MsgSudoContract"></a>

### MsgSudoContract
MsgSudoContract is the MsgSudoContract request type.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| contract | [string](#string) |  | Contract is the address of the smart contract |
| msg | [bytes](#bytes) |  | Msg json encoded message to be passed to the contract as sudo |






<a name="cosmwasm-wasm-v1-MsgSudoContractResponse"></a>

### MsgSudoContractResponse
MsgSudoContractResponse defines the response structure for executing a
MsgSudoContract message.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | Data contains bytes to returned from the contract |






<a name="cosmwasm-wasm-v1-MsgUnpinCodes"></a>

### MsgUnpinCodes
MsgUnpinCodes is the MsgUnpinCodes request type.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| code_ids | [uint64](#uint64) | repeated | CodeIDs references the WASM codes |






<a name="cosmwasm-wasm-v1-MsgUnpinCodesResponse"></a>

### MsgUnpinCodesResponse
MsgUnpinCodesResponse defines the response structure for executing a
MsgUnpinCodes message.

Since: 0.40






<a name="cosmwasm-wasm-v1-MsgUpdateAdmin"></a>

### MsgUpdateAdmin
MsgUpdateAdmin sets a new admin for a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| new_admin | [string](#string) |  | NewAdmin address to be set |
| contract | [string](#string) |  | Contract is the address of the smart contract |






<a name="cosmwasm-wasm-v1-MsgUpdateAdminResponse"></a>

### MsgUpdateAdminResponse
MsgUpdateAdminResponse returns empty data






<a name="cosmwasm-wasm-v1-MsgUpdateContractLabel"></a>

### MsgUpdateContractLabel
MsgUpdateContractLabel sets a new label for a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| new_label | [string](#string) |  | NewLabel string to be set |
| contract | [string](#string) |  | Contract is the address of the smart contract |






<a name="cosmwasm-wasm-v1-MsgUpdateContractLabelResponse"></a>

### MsgUpdateContractLabelResponse
MsgUpdateContractLabelResponse returns empty data






<a name="cosmwasm-wasm-v1-MsgUpdateInstantiateConfig"></a>

### MsgUpdateInstantiateConfig
MsgUpdateInstantiateConfig updates instantiate config for a smart contract


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| code_id | [uint64](#uint64) |  | CodeID references the stored WASM code |
| new_instantiate_permission | [AccessConfig](#cosmwasm-wasm-v1-AccessConfig) |  | NewInstantiatePermission is the new access control |






<a name="cosmwasm-wasm-v1-MsgUpdateInstantiateConfigResponse"></a>

### MsgUpdateInstantiateConfigResponse
MsgUpdateInstantiateConfigResponse returns empty data






<a name="cosmwasm-wasm-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the MsgUpdateParams request type.

Since: 0.40


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | Authority is the address of the governance account. |
| params | [Params](#cosmwasm-wasm-v1-Params) |  | params defines the x/wasm parameters to update.

NOTE: All parameters must be supplied. |






<a name="cosmwasm-wasm-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: 0.40





 

 

 


<a name="cosmwasm-wasm-v1-Msg"></a>

### Msg
Msg defines the wasm Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| StoreCode | [MsgStoreCode](#cosmwasm-wasm-v1-MsgStoreCode) | [MsgStoreCodeResponse](#cosmwasm-wasm-v1-MsgStoreCodeResponse) | StoreCode to submit Wasm code to the system |
| InstantiateContract | [MsgInstantiateContract](#cosmwasm-wasm-v1-MsgInstantiateContract) | [MsgInstantiateContractResponse](#cosmwasm-wasm-v1-MsgInstantiateContractResponse) | InstantiateContract creates a new smart contract instance for the given code id. |
| InstantiateContract2 | [MsgInstantiateContract2](#cosmwasm-wasm-v1-MsgInstantiateContract2) | [MsgInstantiateContract2Response](#cosmwasm-wasm-v1-MsgInstantiateContract2Response) | InstantiateContract2 creates a new smart contract instance for the given code id with a predictable address |
| ExecuteContract | [MsgExecuteContract](#cosmwasm-wasm-v1-MsgExecuteContract) | [MsgExecuteContractResponse](#cosmwasm-wasm-v1-MsgExecuteContractResponse) | Execute submits the given message data to a smart contract |
| MigrateContract | [MsgMigrateContract](#cosmwasm-wasm-v1-MsgMigrateContract) | [MsgMigrateContractResponse](#cosmwasm-wasm-v1-MsgMigrateContractResponse) | Migrate runs a code upgrade/ downgrade for a smart contract |
| UpdateAdmin | [MsgUpdateAdmin](#cosmwasm-wasm-v1-MsgUpdateAdmin) | [MsgUpdateAdminResponse](#cosmwasm-wasm-v1-MsgUpdateAdminResponse) | UpdateAdmin sets a new admin for a smart contract |
| ClearAdmin | [MsgClearAdmin](#cosmwasm-wasm-v1-MsgClearAdmin) | [MsgClearAdminResponse](#cosmwasm-wasm-v1-MsgClearAdminResponse) | ClearAdmin removes any admin stored for a smart contract |
| UpdateInstantiateConfig | [MsgUpdateInstantiateConfig](#cosmwasm-wasm-v1-MsgUpdateInstantiateConfig) | [MsgUpdateInstantiateConfigResponse](#cosmwasm-wasm-v1-MsgUpdateInstantiateConfigResponse) | UpdateInstantiateConfig updates instantiate config for a smart contract |
| UpdateParams | [MsgUpdateParams](#cosmwasm-wasm-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#cosmwasm-wasm-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/wasm module parameters. The authority is defined in the keeper.

Since: 0.40 |
| SudoContract | [MsgSudoContract](#cosmwasm-wasm-v1-MsgSudoContract) | [MsgSudoContractResponse](#cosmwasm-wasm-v1-MsgSudoContractResponse) | SudoContract defines a governance operation for calling sudo on a contract. The authority is defined in the keeper.

Since: 0.40 |
| PinCodes | [MsgPinCodes](#cosmwasm-wasm-v1-MsgPinCodes) | [MsgPinCodesResponse](#cosmwasm-wasm-v1-MsgPinCodesResponse) | PinCodes defines a governance operation for pinning a set of code ids in the wasmvm cache. The authority is defined in the keeper.

Since: 0.40 |
| UnpinCodes | [MsgUnpinCodes](#cosmwasm-wasm-v1-MsgUnpinCodes) | [MsgUnpinCodesResponse](#cosmwasm-wasm-v1-MsgUnpinCodesResponse) | UnpinCodes defines a governance operation for unpinning a set of code ids in the wasmvm cache. The authority is defined in the keeper.

Since: 0.40 |
| StoreAndInstantiateContract | [MsgStoreAndInstantiateContract](#cosmwasm-wasm-v1-MsgStoreAndInstantiateContract) | [MsgStoreAndInstantiateContractResponse](#cosmwasm-wasm-v1-MsgStoreAndInstantiateContractResponse) | StoreAndInstantiateContract defines a governance operation for storing and instantiating the contract. The authority is defined in the keeper.

Since: 0.40 |
| RemoveCodeUploadParamsAddresses | [MsgRemoveCodeUploadParamsAddresses](#cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddresses) | [MsgRemoveCodeUploadParamsAddressesResponse](#cosmwasm-wasm-v1-MsgRemoveCodeUploadParamsAddressesResponse) | RemoveCodeUploadParamsAddresses defines a governance operation for removing addresses from code upload params. The authority is defined in the keeper. |
| AddCodeUploadParamsAddresses | [MsgAddCodeUploadParamsAddresses](#cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddresses) | [MsgAddCodeUploadParamsAddressesResponse](#cosmwasm-wasm-v1-MsgAddCodeUploadParamsAddressesResponse) | AddCodeUploadParamsAddresses defines a governance operation for adding addresses to code upload params. The authority is defined in the keeper. |
| StoreAndMigrateContract | [MsgStoreAndMigrateContract](#cosmwasm-wasm-v1-MsgStoreAndMigrateContract) | [MsgStoreAndMigrateContractResponse](#cosmwasm-wasm-v1-MsgStoreAndMigrateContractResponse) | StoreAndMigrateContract defines a governance operation for storing and migrating the contract. The authority is defined in the keeper.

Since: 0.42 |
| UpdateContractLabel | [MsgUpdateContractLabel](#cosmwasm-wasm-v1-MsgUpdateContractLabel) | [MsgUpdateContractLabelResponse](#cosmwasm-wasm-v1-MsgUpdateContractLabelResponse) | UpdateContractLabel sets a new label for a smart contract

Since: 0.43 |

 



<a name="ibc_applications_gmp_v1_account-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/gmp/v1/account.proto



<a name="ibc-applications-gmp-v1-AccountIdentifier"></a>

### AccountIdentifier
AccountIdentifier is used to identify a ICS27 account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | The (local) client identifier |
| sender | [string](#string) |  | The sender of the packet |
| salt | [bytes](#bytes) |  | The salt of the packet |






<a name="ibc-applications-gmp-v1-CosmosTx"></a>

### CosmosTx
CosmosTx contains a list of sdk.Msg&#39;s. It should be used when sending transactions to an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |






<a name="ibc-applications-gmp-v1-ICS27Account"></a>

### ICS27Account
An ICS27Account is defined as a BaseAccount &amp; the account identifier


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |
| account_id | [AccountIdentifier](#ibc-applications-gmp-v1-AccountIdentifier) |  |  |





 

 

 

 



<a name="ibc_applications_gmp_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/gmp/v1/genesis.proto



<a name="ibc-applications-gmp-v1-GenesisState"></a>

### GenesisState
GenesisState defines the 27-gmp genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ics27_accounts | [RegisteredICS27Account](#ibc-applications-gmp-v1-RegisteredICS27Account) | repeated | The list of registered ICS27 accounts |






<a name="ibc-applications-gmp-v1-RegisteredICS27Account"></a>

### RegisteredICS27Account
RegisteredICS27Account contains an account identifier and associated interchain account address


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_address | [string](#string) |  | The address of the ics27 account |
| account_id | [AccountIdentifier](#ibc-applications-gmp-v1-AccountIdentifier) |  | The account identifier |





 

 

 

 



<a name="ibc_applications_gmp_v1_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/gmp/v1/packet.proto



<a name="ibc-applications-gmp-v1-Acknowledgement"></a>

### Acknowledgement
Acknowledgement defines a struct for the ICS27-2 acknowledgement


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [bytes](#bytes) |  | The result of the call |






<a name="ibc-applications-gmp-v1-GMPPacketData"></a>

### GMPPacketData
GMPPacketData defines a struct for the packet payload


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| salt | [bytes](#bytes) |  | The salt used to generate the caller account address |
| payload | [bytes](#bytes) |  | The payload of the call |
| memo | [string](#string) |  | optional memo |





 

 

 

 



<a name="ibc_applications_gmp_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/gmp/v1/query.proto



<a name="ibc-applications-gmp-v1-QueryAccountAddressRequest"></a>

### QueryAccountAddressRequest
QueryAccountAddressRequest is the request type for the Query/AccountAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | The (local) client identifier |
| sender | [string](#string) |  | The sender of the packet |
| salt | [string](#string) |  | The salt of the packet (in hex format) |






<a name="ibc-applications-gmp-v1-QueryAccountAddressResponse"></a>

### QueryAccountAddressResponse
QueryAccountAddressResponse is the response type for the Query/AccountAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_address | [string](#string) |  | The interchain account address |






<a name="ibc-applications-gmp-v1-QueryAccountIdentifierRequest"></a>

### QueryAccountIdentifierRequest
QueryAccountIdentifierRequest is the request type for querying the account identifier by account address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_address | [string](#string) |  |  |






<a name="ibc-applications-gmp-v1-QueryAccountIdentifierResponse"></a>

### QueryAccountIdentifierResponse
QueryAccountIdentifierResponse is the response type for querying the account identifier by account address.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [AccountIdentifier](#ibc-applications-gmp-v1-AccountIdentifier) |  |  |





 

 

 


<a name="ibc-applications-gmp-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AccountAddress | [QueryAccountAddressRequest](#ibc-applications-gmp-v1-QueryAccountAddressRequest) | [QueryAccountAddressResponse](#ibc-applications-gmp-v1-QueryAccountAddressResponse) | AccountAddress queries the interchain account address for a given client_id, sender, and salt. If the account is not registered, the address is computed deterministically |
| AccountIdentifier | [QueryAccountIdentifierRequest](#ibc-applications-gmp-v1-QueryAccountIdentifierRequest) | [QueryAccountIdentifierResponse](#ibc-applications-gmp-v1-QueryAccountIdentifierResponse) | AccountIdentifier queries the account identifier for a given interchain account address. |

 



<a name="ibc_applications_gmp_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/gmp/v1/tx.proto



<a name="ibc-applications-gmp-v1-MsgSendCall"></a>

### MsgSendCall
MsgSendCall defines a msg to send a call to a contract/receiver on a ICS27-2 enabled chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_client | [string](#string) |  | the client by which the packet will be sent |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| salt | [bytes](#bytes) |  | The salt used to generate the caller account address |
| payload | [bytes](#bytes) |  | The payload of the call |
| timeout_timestamp | [uint64](#uint64) |  | Timeout timestamp in absolute nanoseconds since unix epoch. |
| memo | [string](#string) |  | optional memo |
| encoding | [string](#string) |  | optional encoding |






<a name="ibc-applications-gmp-v1-MsgSendCallResponse"></a>

### MsgSendCallResponse
MsgSendCallResponse defines the Msg/SendCall response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | sequence number of the GMP packet sent |





 

 

 


<a name="ibc-applications-gmp-v1-Msg"></a>

### Msg
Msg defines the ibc/gmp Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendCall | [MsgSendCall](#ibc-applications-gmp-v1-MsgSendCall) | [MsgSendCallResponse](#ibc-applications-gmp-v1-MsgSendCallResponse) | SendCall defines a rpc handler method for MsgSendCall. |

 



<a name="ibc_applications_interchain_accounts_controller_v1_controller-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/controller.proto



<a name="ibc-applications-interchain_accounts-controller-v1-Params"></a>

### Params
Params defines the set of on-chain interchain accounts parameters.
The following parameters may be used to disable the controller submodule.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| controller_enabled | [bool](#bool) |  | controller_enabled enables or disables the controller submodule. |





 

 

 

 



<a name="ibc_applications_interchain_accounts_controller_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/query.proto



<a name="ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest"></a>

### QueryInterchainAccountRequest
QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse"></a>

### QueryInterchainAccountResponse
QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="ibc-applications-interchain_accounts-controller-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| InterchainAccount | [QueryInterchainAccountRequest](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountRequest) | [QueryInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-QueryInterchainAccountResponse) | InterchainAccount returns the interchain account address for a given owner address on a given connection |
| Params | [QueryParamsRequest](#ibc-applications-interchain_accounts-controller-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-interchain_accounts-controller-v1-QueryParamsResponse) | Params queries all parameters of the ICA controller submodule. |

 



<a name="ibc_applications_interchain_accounts_v1_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/packet.proto



<a name="ibc-applications-interchain_accounts-v1-CosmosTx"></a>

### CosmosTx
CosmosTx contains a list of sdk.Msg&#39;s. It should be used when sending transactions to an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messages | [google.protobuf.Any](#google-protobuf-Any) | repeated |  |






<a name="ibc-applications-interchain_accounts-v1-InterchainAccountPacketData"></a>

### InterchainAccountPacketData
InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [Type](#ibc-applications-interchain_accounts-v1-Type) |  |  |
| data | [bytes](#bytes) |  |  |
| memo | [string](#string) |  |  |





 


<a name="ibc-applications-interchain_accounts-v1-Type"></a>

### Type
Type defines a classification of message issued from a controller chain to its associated interchain accounts
host

| Name | Number | Description |
| ---- | ------ | ----------- |
| TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| TYPE_EXECUTE_TX | 1 | Execute a transaction on an interchain accounts host chain |


 

 

 



<a name="ibc_core_client_v1_client-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/client.proto



<a name="ibc-core-client-v1-ClientConsensusStates"></a>

### ClientConsensusStates
ClientConsensusStates defines all the stored consensus states for a given
client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| consensus_states | [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight) | repeated | consensus states and their heights associated with the client |






<a name="ibc-core-client-v1-ConsensusStateWithHeight"></a>

### ConsensusStateWithHeight
ConsensusStateWithHeight defines a consensus state with an additional height
field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [Height](#ibc-core-client-v1-Height) |  | consensus state height |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state |






<a name="ibc-core-client-v1-Height"></a>

### Height
Height is a monotonically increasing data type
that can be compared against another Height for the purposes of updating and
freezing clients

Normally the RevisionHeight is incremented at each height while keeping
RevisionNumber the same. However some consensus algorithms may choose to
reset the height in certain conditions e.g. hard forks, state-machine
breaking changes In these cases, the RevisionNumber is incremented so that
height continues to be monitonically increasing even as the RevisionHeight
gets reset

Please note that json tags for generated Go code are overridden to explicitly exclude the omitempty jsontag.
This enforces the Go json marshaller to always emit zero values for both revision_number and revision_height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| revision_number | [uint64](#uint64) |  | the revision that the client is currently on |
| revision_height | [uint64](#uint64) |  | the height within the given revision |






<a name="ibc-core-client-v1-IdentifiedClientState"></a>

### IdentifiedClientState
IdentifiedClientState defines a client state with an additional client
identifier field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state |






<a name="ibc-core-client-v1-Params"></a>

### Params
Params defines the set of IBC light client parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowed_clients | [string](#string) | repeated | allowed_clients defines the list of allowed client state types which can be created and interacted with. If a client type is removed from the allowed clients list, usage of this client will be disabled until it is added again to the list. |





 

 

 

 



<a name="ibc_core_channel_v1_channel-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/channel.proto



<a name="ibc-core-channel-v1-Acknowledgement"></a>

### Acknowledgement
Acknowledgement is the recommended acknowledgement format to be used by
app-specific protocols.
NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
conflicts with other protobuf message formats used for acknowledgements.
The first byte of any message with this format will be the non-ASCII values
`0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [bytes](#bytes) |  |  |
| error | [string](#string) |  |  |






<a name="ibc-core-channel-v1-Channel"></a>

### Channel
Channel defines pipeline for exactly-once packet delivery between specific
modules on separate blockchains, which has at least one end capable of
sending packets and one end capable of receiving packets.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [State](#ibc-core-channel-v1-State) |  | current state of the channel end |
| ordering | [Order](#ibc-core-channel-v1-Order) |  | whether the channel is ordered or unordered |
| counterparty | [Counterparty](#ibc-core-channel-v1-Counterparty) |  | counterparty channel end |
| connection_hops | [string](#string) | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version | [string](#string) |  | opaque channel version, which is agreed upon during the handshake |






<a name="ibc-core-channel-v1-Counterparty"></a>

### Counterparty
Counterparty defines a channel end counterparty


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port on the counterparty chain which owns the other end of the channel. |
| channel_id | [string](#string) |  | channel end on the counterparty chain |






<a name="ibc-core-channel-v1-IdentifiedChannel"></a>

### IdentifiedChannel
IdentifiedChannel defines a channel with additional port and channel
identifier fields.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [State](#ibc-core-channel-v1-State) |  | current state of the channel end |
| ordering | [Order](#ibc-core-channel-v1-Order) |  | whether the channel is ordered or unordered |
| counterparty | [Counterparty](#ibc-core-channel-v1-Counterparty) |  | counterparty channel end |
| connection_hops | [string](#string) | repeated | list of connection identifiers, in order, along which packets sent on this channel will travel |
| version | [string](#string) |  | opaque channel version, which is agreed upon during the handshake |
| port_id | [string](#string) |  | port identifier |
| channel_id | [string](#string) |  | channel identifier |






<a name="ibc-core-channel-v1-Packet"></a>

### Packet
Packet defines a type that carries data across different chains through IBC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source_port | [string](#string) |  | identifies the port on the sending chain. |
| source_channel | [string](#string) |  | identifies the channel end on the sending chain. |
| destination_port | [string](#string) |  | identifies the port on the receiving chain. |
| destination_channel | [string](#string) |  | identifies the channel end on the receiving chain. |
| data | [bytes](#bytes) |  | actual opaque bytes transferred directly to the application module |
| timeout_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | block height after which the packet times out |
| timeout_timestamp | [uint64](#uint64) |  | block timestamp (in nanoseconds) after which the packet times out |






<a name="ibc-core-channel-v1-PacketId"></a>

### PacketId
PacketId is an identifier for a unique Packet
Source chains refer to packets by source port/channel
Destination chains refer to packets by destination port/channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | channel port identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-PacketState"></a>

### PacketState
PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | channel port identifier. |
| channel_id | [string](#string) |  | channel unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence. |
| data | [bytes](#bytes) |  | embedded data that represents packet state. |






<a name="ibc-core-channel-v1-Timeout"></a>

### Timeout
Timeout defines an execution deadline structure for 04-channel handlers.
This includes packet lifecycle handlers.
A valid Timeout contains either one or both of a timestamp and block height (sequence).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | block height after which the packet times out |
| timestamp | [uint64](#uint64) |  | block timestamp (in nanoseconds) after which the packet times out |





 


<a name="ibc-core-channel-v1-Order"></a>

### Order
Order defines if a channel is ORDERED or UNORDERED

| Name | Number | Description |
| ---- | ------ | ----------- |
| ORDER_NONE_UNSPECIFIED | 0 | zero-value for channel ordering |
| ORDER_UNORDERED | 1 | packets can be delivered in any order, which may differ from the order in which they were sent. |
| ORDER_ORDERED | 2 | packets are delivered exactly in the order which they were sent |



<a name="ibc-core-channel-v1-State"></a>

### State
State defines if a channel is in one of the following states:
CLOSED, INIT, TRYOPEN, OPEN, or UNINITIALIZED.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STATE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| STATE_INIT | 1 | A channel has just started the opening handshake. |
| STATE_TRYOPEN | 2 | A channel has acknowledged the handshake step on the counterparty chain. |
| STATE_OPEN | 3 | A channel has completed the handshake. Open channels are ready to send and receive packets. |
| STATE_CLOSED | 4 | A channel has been closed and can no longer be used to send or receive packets. |


 

 

 



<a name="ibc_applications_interchain_accounts_controller_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/controller/v1/tx.proto



<a name="ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount"></a>

### MsgRegisterInterchainAccount
MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |
| version | [string](#string) |  |  |
| ordering | [ibc.core.channel.v1.Order](#ibc-core-channel-v1-Order) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse"></a>

### MsgRegisterInterchainAccountResponse
MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgSendTx"></a>

### MsgSendTx
MsgSendTx defines the payload for Msg/SendTx


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| owner | [string](#string) |  |  |
| connection_id | [string](#string) |  |  |
| packet_data | [ibc.applications.interchain_accounts.v1.InterchainAccountPacketData](#ibc-applications-interchain_accounts-v1-InterchainAccountPacketData) |  |  |
| relative_timeout | [uint64](#uint64) |  | Relative timeout timestamp provided will be added to the current block time during transaction execution. The timeout timestamp must be non-zero. |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse"></a>

### MsgSendTxResponse
MsgSendTxResponse defines the response for MsgSendTx


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the payload for Msg/UpdateParams


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  | params defines the 27-interchain-accounts/controller parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response for Msg/UpdateParams





 

 

 


<a name="ibc-applications-interchain_accounts-controller-v1-Msg"></a>

### Msg
Msg defines the 27-interchain-accounts/controller Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RegisterInterchainAccount | [MsgRegisterInterchainAccount](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccount) | [MsgRegisterInterchainAccountResponse](#ibc-applications-interchain_accounts-controller-v1-MsgRegisterInterchainAccountResponse) | RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. |
| SendTx | [MsgSendTx](#ibc-applications-interchain_accounts-controller-v1-MsgSendTx) | [MsgSendTxResponse](#ibc-applications-interchain_accounts-controller-v1-MsgSendTxResponse) | SendTx defines a rpc handler for MsgSendTx. |
| UpdateParams | [MsgUpdateParams](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-controller-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |

 



<a name="ibc_applications_interchain_accounts_host_v1_host-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/host.proto



<a name="ibc-applications-interchain_accounts-host-v1-Params"></a>

### Params
Params defines the set of on-chain interchain accounts parameters.
The following parameters may be used to disable the host submodule.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host_enabled | [bool](#bool) |  | host_enabled enables or disables the host submodule. |
| allow_messages | [string](#string) | repeated | allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. |






<a name="ibc-applications-interchain_accounts-host-v1-QueryRequest"></a>

### QueryRequest
QueryRequest defines the parameters for a particular query request
by an interchain account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | path defines the path of the query request as defined by ADR-021. https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing |
| data | [bytes](#bytes) |  | data defines the payload of the query request as defined by ADR-021. https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing |





 

 

 

 



<a name="ibc_applications_interchain_accounts_genesis_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/genesis/v1/genesis.proto



<a name="ibc-applications-interchain_accounts-genesis-v1-ActiveChannel"></a>

### ActiveChannel
ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
indicate if the channel is middleware enabled


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| is_middleware_enabled | [bool](#bool) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState"></a>

### ControllerGenesisState
ControllerGenesisState defines the interchain accounts controller genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| active_channels | [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel) | repeated |  |
| interchain_accounts | [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount) | repeated |  |
| ports | [string](#string) | repeated |  |
| params | [ibc.applications.interchain_accounts.controller.v1.Params](#ibc-applications-interchain_accounts-controller-v1-Params) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-GenesisState"></a>

### GenesisState
GenesisState defines the interchain accounts genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| controller_genesis_state | [ControllerGenesisState](#ibc-applications-interchain_accounts-genesis-v1-ControllerGenesisState) |  |  |
| host_genesis_state | [HostGenesisState](#ibc-applications-interchain_accounts-genesis-v1-HostGenesisState) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-HostGenesisState"></a>

### HostGenesisState
HostGenesisState defines the interchain accounts host genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| active_channels | [ActiveChannel](#ibc-applications-interchain_accounts-genesis-v1-ActiveChannel) | repeated |  |
| interchain_accounts | [RegisteredInterchainAccount](#ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount) | repeated |  |
| port | [string](#string) |  |  |
| params | [ibc.applications.interchain_accounts.host.v1.Params](#ibc-applications-interchain_accounts-host-v1-Params) |  |  |






<a name="ibc-applications-interchain_accounts-genesis-v1-RegisteredInterchainAccount"></a>

### RegisteredInterchainAccount
RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| port_id | [string](#string) |  |  |
| account_address | [string](#string) |  |  |





 

 

 

 



<a name="ibc_applications_interchain_accounts_host_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/query.proto



<a name="ibc-applications-interchain_accounts-host-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-interchain_accounts-host-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-interchain_accounts-host-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="ibc-applications-interchain_accounts-host-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#ibc-applications-interchain_accounts-host-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-interchain_accounts-host-v1-QueryParamsResponse) | Params queries all parameters of the ICA host submodule. |

 



<a name="ibc_applications_interchain_accounts_host_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/host/v1/tx.proto



<a name="ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe"></a>

### MsgModuleQuerySafe
MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| requests | [QueryRequest](#ibc-applications-interchain_accounts-host-v1-QueryRequest) | repeated | requests defines the module safe queries to execute. |






<a name="ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse"></a>

### MsgModuleQuerySafeResponse
MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| height | [uint64](#uint64) |  | height at which the responses were queried |
| responses | [bytes](#bytes) | repeated | protobuf encoded responses for each query |






<a name="ibc-applications-interchain_accounts-host-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the payload for Msg/UpdateParams


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-interchain_accounts-host-v1-Params) |  | params defines the 27-interchain-accounts/host parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response for Msg/UpdateParams





 

 

 


<a name="ibc-applications-interchain_accounts-host-v1-Msg"></a>

### Msg
Msg defines the 27-interchain-accounts/host Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-interchain_accounts-host-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |
| ModuleQuerySafe | [MsgModuleQuerySafe](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafe) | [MsgModuleQuerySafeResponse](#ibc-applications-interchain_accounts-host-v1-MsgModuleQuerySafeResponse) | ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe. |

 



<a name="ibc_applications_interchain_accounts_v1_account-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/account.proto



<a name="ibc-applications-interchain_accounts-v1-InterchainAccount"></a>

### InterchainAccount
An InterchainAccount is defined as a BaseAccount &amp; the address of the account owner on the controller chain


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_account | [cosmos.auth.v1beta1.BaseAccount](#cosmos-auth-v1beta1-BaseAccount) |  |  |
| account_owner | [string](#string) |  |  |





 

 

 

 



<a name="ibc_applications_interchain_accounts_v1_metadata-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/interchain_accounts/v1/metadata.proto



<a name="ibc-applications-interchain_accounts-v1-Metadata"></a>

### Metadata
Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  | version defines the ICS27 protocol version |
| controller_connection_id | [string](#string) |  | controller_connection_id is the connection identifier associated with the controller chain |
| host_connection_id | [string](#string) |  | host_connection_id is the connection identifier associated with the host chain |
| address | [string](#string) |  | address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step NOTE: the address field is empty on the OnChanOpenInit handshake step |
| encoding | [string](#string) |  | encoding defines the supported codec format |
| tx_type | [string](#string) |  | tx_type defines the type of transactions the interchain account can execute |





 

 

 

 



<a name="ibc_applications_packet_forward_middleware_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/packet_forward_middleware/v1/genesis.proto



<a name="ibc-applications-packet_forward_middleware-v1-GenesisState"></a>

### GenesisState
GenesisState defines the packetforward genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| in_flight_packets | [GenesisState.InFlightPacketsEntry](#ibc-applications-packet_forward_middleware-v1-GenesisState-InFlightPacketsEntry) | repeated | key - information about forwarded packet: src_channel (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value - information about original packet for refunding if necessary: retries, srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort |






<a name="ibc-applications-packet_forward_middleware-v1-GenesisState-InFlightPacketsEntry"></a>

### GenesisState.InFlightPacketsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [InFlightPacket](#ibc-applications-packet_forward_middleware-v1-InFlightPacket) |  |  |






<a name="ibc-applications-packet_forward_middleware-v1-InFlightPacket"></a>

### InFlightPacket
InFlightPacket contains information about original packet for
writing the acknowledgement and refunding if necessary.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| original_sender_address | [string](#string) |  |  |
| refund_channel_id | [string](#string) |  |  |
| refund_port_id | [string](#string) |  |  |
| packet_src_channel_id | [string](#string) |  |  |
| packet_src_port_id | [string](#string) |  |  |
| packet_timeout_timestamp | [uint64](#uint64) |  |  |
| packet_timeout_height | [string](#string) |  |  |
| packet_data | [bytes](#bytes) |  |  |
| refund_sequence | [uint64](#uint64) |  |  |
| retries_remaining | [int32](#int32) |  |  |
| timeout | [uint64](#uint64) |  |  |





 

 

 

 



<a name="ibc_applications_rate_limiting_v1_rate_limiting-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/rate_limiting/v1/rate_limiting.proto



<a name="ibc-applications-rate_limiting-v1-Flow"></a>

### Flow
Flow tracks all the inflows and outflows of a channel.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflow | [string](#string) |  | Inflow defines the total amount of inbound transfers for the given rate limit in the current window |
| outflow | [string](#string) |  | Outflow defines the total amount of outbound transfers for the given rate limit in the current window |
| channel_value | [string](#string) |  | ChannelValue stores the total supply of the denom at the start of the rate limit. This is used as the denominator when checking the rate limit threshold The ChannelValue is fixed for the duration of the rate limit window |






<a name="ibc-applications-rate_limiting-v1-HourEpoch"></a>

### HourEpoch
HourEpoch is the epoch type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [uint64](#uint64) |  |  |
| duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  |  |
| epoch_start_height | [int64](#int64) |  |  |






<a name="ibc-applications-rate_limiting-v1-Path"></a>

### Path
Path holds the denom and channelID that define the rate limited route


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| channel_or_client_id | [string](#string) |  |  |






<a name="ibc-applications-rate_limiting-v1-Quota"></a>

### Quota
Quota defines the rate limit thresholds for transfer packets


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_percent_send | [string](#string) |  | MaxPercentSend defines the threshold for outflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| max_percent_recv | [string](#string) |  | MaxPercentSend defines the threshold for inflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| duration_hours | [uint64](#uint64) |  | DurationHours specifies the number of hours before the rate limit is reset (e.g. 24 indicates that the rate limit is reset each day) |






<a name="ibc-applications-rate_limiting-v1-RateLimit"></a>

### RateLimit
RateLimit stores all the context about a given rate limit, including
the relevant denom and channel, rate limit thresholds, and current
progress towards the limits


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [Path](#ibc-applications-rate_limiting-v1-Path) |  |  |
| quota | [Quota](#ibc-applications-rate_limiting-v1-Quota) |  |  |
| flow | [Flow](#ibc-applications-rate_limiting-v1-Flow) |  |  |






<a name="ibc-applications-rate_limiting-v1-WhitelistedAddressPair"></a>

### WhitelistedAddressPair
WhitelistedAddressPair represents a sender-receiver combo that is
not subject to rate limit restrictions


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| receiver | [string](#string) |  |  |





 


<a name="ibc-applications-rate_limiting-v1-PacketDirection"></a>

### PacketDirection
PacketDirection defines whether the transfer packet is being sent from
this chain or is being received on this chain

| Name | Number | Description |
| ---- | ------ | ----------- |
| PACKET_SEND | 0 |  |
| PACKET_RECV | 1 |  |


 

 

 



<a name="ibc_applications_rate_limiting_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/rate_limiting/v1/genesis.proto



<a name="ibc-applications-rate_limiting-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ratelimit module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate_limits | [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit) | repeated |  |
| whitelisted_address_pairs | [WhitelistedAddressPair](#ibc-applications-rate_limiting-v1-WhitelistedAddressPair) | repeated |  |
| blacklisted_denoms | [string](#string) | repeated |  |
| pending_send_packet_sequence_numbers | [string](#string) | repeated |  |
| hour_epoch | [HourEpoch](#ibc-applications-rate_limiting-v1-HourEpoch) |  |  |
| pending_recv_packet_sequence_numbers | [string](#string) | repeated |  |





 

 

 

 



<a name="ibc_applications_rate_limiting_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/rate_limiting/v1/query.proto



<a name="ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsRequest"></a>

### QueryAllBlacklistedDenomsRequest
Queries all blacklisted denoms


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsResponse"></a>

### QueryAllBlacklistedDenomsResponse
QueryAllBlacklistedDenomsResponse returns all the blacklisted denosm.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [string](#string) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryAllRateLimitsRequest"></a>

### QueryAllRateLimitsRequest
Queries all rate limits


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryAllRateLimitsResponse"></a>

### QueryAllRateLimitsResponse
QueryAllRateLimitsResponse returns all the rate limits stored on the chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate_limits | [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesRequest"></a>

### QueryAllWhitelistedAddressesRequest
Queries all whitelisted address pairs


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesResponse"></a>

### QueryAllWhitelistedAddressesResponse
QueryAllWhitelistedAddressesResponse returns all whitelisted pairs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address_pairs | [WhitelistedAddressPair](#ibc-applications-rate_limiting-v1-WhitelistedAddressPair) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitRequest"></a>

### QueryRateLimitRequest
Queries a specific rate limit by channel ID and denom


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| channel_or_client_id | [string](#string) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitResponse"></a>

### QueryRateLimitResponse
QueryRateLimitResponse returns a rate limit by denom and channel_or_client_id combination.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate_limit | [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDRequest"></a>

### QueryRateLimitsByChainIDRequest
Queries all the rate limits for a given chain


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chain_id | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDResponse"></a>

### QueryRateLimitsByChainIDResponse
QueryRateLimitsByChainIDResponse returns all rate-limits by a chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate_limits | [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDRequest"></a>

### QueryRateLimitsByChannelOrClientIDRequest
Queries all the rate limits for a given channel or client ID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_or_client_id | [string](#string) |  |  |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDResponse"></a>

### QueryRateLimitsByChannelOrClientIDResponse
QueryRateLimitsByChannelOrClientIDResponse returns all rate-limits by a channel or client id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rate_limits | [RateLimit](#ibc-applications-rate_limiting-v1-RateLimit) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  |  |





 

 

 


<a name="ibc-applications-rate_limiting-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AllRateLimits | [QueryAllRateLimitsRequest](#ibc-applications-rate_limiting-v1-QueryAllRateLimitsRequest) | [QueryAllRateLimitsResponse](#ibc-applications-rate_limiting-v1-QueryAllRateLimitsResponse) | Queries all rate limits |
| RateLimit | [QueryRateLimitRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitRequest) | [QueryRateLimitResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitResponse) | Queries a specific rate limit by channel ID and denom Ex: - /ratelimit/{channel_or_client_id}/by_denom?denom={denom} |
| RateLimitsByChainID | [QueryRateLimitsByChainIDRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDRequest) | [QueryRateLimitsByChainIDResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChainIDResponse) | Queries all the rate limits for a given chain |
| RateLimitsByChannelOrClientID | [QueryRateLimitsByChannelOrClientIDRequest](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDRequest) | [QueryRateLimitsByChannelOrClientIDResponse](#ibc-applications-rate_limiting-v1-QueryRateLimitsByChannelOrClientIDResponse) | Queries all the rate limits for a given channel ID |
| AllBlacklistedDenoms | [QueryAllBlacklistedDenomsRequest](#ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsRequest) | [QueryAllBlacklistedDenomsResponse](#ibc-applications-rate_limiting-v1-QueryAllBlacklistedDenomsResponse) | Queries all blacklisted denoms |
| AllWhitelistedAddresses | [QueryAllWhitelistedAddressesRequest](#ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesRequest) | [QueryAllWhitelistedAddressesResponse](#ibc-applications-rate_limiting-v1-QueryAllWhitelistedAddressesResponse) | Queries all whitelisted address pairs |

 



<a name="ibc_applications_rate_limiting_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/rate_limiting/v1/tx.proto



<a name="ibc-applications-rate_limiting-v1-MsgAddRateLimit"></a>

### MsgAddRateLimit
Gov tx to add a new rate limit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer defines the x/gov module account address or other authority signing the message |
| denom | [string](#string) |  | Denom for the rate limit, as it appears on the rate limited chain When rate limiting a non-native token, this will be an ibc denom |
| channel_or_client_id | [string](#string) |  | ChannelId for the rate limit, on the side of the rate limited chain |
| max_percent_send | [string](#string) |  | MaxPercentSend defines the threshold for outflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| max_percent_recv | [string](#string) |  | MaxPercentSend defines the threshold for inflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| duration_hours | [uint64](#uint64) |  | DurationHours specifies the number of hours before the rate limit is reset (e.g. 24 indicates that the rate limit is reset each day) |






<a name="ibc-applications-rate_limiting-v1-MsgAddRateLimitResponse"></a>

### MsgAddRateLimitResponse
MsgAddRateLimitResponse is the return type for AddRateLimit function.






<a name="ibc-applications-rate_limiting-v1-MsgRemoveRateLimit"></a>

### MsgRemoveRateLimit
Gov tx to remove a rate limit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer defines the x/gov module account address or other authority signing the message |
| denom | [string](#string) |  | Denom for the rate limit, as it appears on the rate limited chain When rate limiting a non-native token, this will be an ibc denom |
| channel_or_client_id | [string](#string) |  | ChannelId for the rate limit, on the side of the rate limited chain |






<a name="ibc-applications-rate_limiting-v1-MsgRemoveRateLimitResponse"></a>

### MsgRemoveRateLimitResponse
MsgRemoveRateLimitResponse is the response type for RemoveRateLimit






<a name="ibc-applications-rate_limiting-v1-MsgResetRateLimit"></a>

### MsgResetRateLimit
Gov tx to reset the flow on a rate limit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer defines the x/gov module account address or other authority signing the message |
| denom | [string](#string) |  | Denom for the rate limit, as it appears on the rate limited chain When rate limiting a non-native token, this will be an ibc denom |
| channel_or_client_id | [string](#string) |  | ChannelId for the rate limit, on the side of the rate limited chain |






<a name="ibc-applications-rate_limiting-v1-MsgResetRateLimitResponse"></a>

### MsgResetRateLimitResponse
MsgResetRateLimitResponse is the response type for ResetRateLimit.






<a name="ibc-applications-rate_limiting-v1-MsgUpdateRateLimit"></a>

### MsgUpdateRateLimit
Gov tx to update an existing rate limit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer defines the x/gov module account address or other authority signing the message |
| denom | [string](#string) |  | Denom for the rate limit, as it appears on the rate limited chain When rate limiting a non-native token, this will be an ibc denom |
| channel_or_client_id | [string](#string) |  | ChannelId for the rate limit, on the side of the rate limited chain |
| max_percent_send | [string](#string) |  | MaxPercentSend defines the threshold for outflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| max_percent_recv | [string](#string) |  | MaxPercentSend defines the threshold for inflows The threshold is defined as a percentage (e.g. 10 indicates 10%) |
| duration_hours | [uint64](#uint64) |  | DurationHours specifies the number of hours before the rate limit is reset (e.g. 24 indicates that the rate limit is reset each day) |






<a name="ibc-applications-rate_limiting-v1-MsgUpdateRateLimitResponse"></a>

### MsgUpdateRateLimitResponse
MsgUpdateRateLimitResponse is the return type for UpdateRateLimit.





 

 

 


<a name="ibc-applications-rate_limiting-v1-Msg"></a>

### Msg
Msg service for rate limit txs

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AddRateLimit | [MsgAddRateLimit](#ibc-applications-rate_limiting-v1-MsgAddRateLimit) | [MsgAddRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgAddRateLimitResponse) | Gov tx to add a new rate limit |
| UpdateRateLimit | [MsgUpdateRateLimit](#ibc-applications-rate_limiting-v1-MsgUpdateRateLimit) | [MsgUpdateRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgUpdateRateLimitResponse) | Gov tx to update an existing rate limit |
| RemoveRateLimit | [MsgRemoveRateLimit](#ibc-applications-rate_limiting-v1-MsgRemoveRateLimit) | [MsgRemoveRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgRemoveRateLimitResponse) | Gov tx to remove a rate limit |
| ResetRateLimit | [MsgResetRateLimit](#ibc-applications-rate_limiting-v1-MsgResetRateLimit) | [MsgResetRateLimitResponse](#ibc-applications-rate_limiting-v1-MsgResetRateLimitResponse) | Gov tx to reset the flow on a rate limit |

 



<a name="ibc_applications_transfer_v1_authz-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/authz.proto



<a name="ibc-applications-transfer-v1-Allocation"></a>

### Allocation
Allocation defines the spend limit for a particular port and channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | the port on which the packet will be sent |
| source_channel | [string](#string) |  | the channel by which the packet will be sent |
| spend_limit | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | spend limitation on the channel |
| allow_list | [string](#string) | repeated | allow list of receivers, an empty allow list permits any receiver address |
| allowed_packet_data | [string](#string) | repeated | allow list of memo strings, an empty list prohibits all memo strings; a list only with &#34;*&#34; permits any memo string |






<a name="ibc-applications-transfer-v1-TransferAuthorization"></a>

### TransferAuthorization
TransferAuthorization allows the grantee to spend up to spend_limit coins from
the granter&#39;s account for ibc transfer on a specific channel


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allocations | [Allocation](#ibc-applications-transfer-v1-Allocation) | repeated | port and channel amounts |





 

 

 

 



<a name="ibc_applications_transfer_v1_denomtrace-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/denomtrace.proto



<a name="ibc-applications-transfer-v1-DenomTrace"></a>

### DenomTrace
DenomTrace contains the base denomination for ICS20 fungible tokens and the
source tracing information path.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | path defines the chain of port/channel identifiers used for tracing the source of the fungible token. |
| base_denom | [string](#string) |  | base denomination of the relayed fungible token. |





 

 

 

 



<a name="ibc_applications_transfer_v1_transfer-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/transfer.proto



<a name="ibc-applications-transfer-v1-Params"></a>

### Params
Params defines the set of IBC transfer parameters.
NOTE: To prevent a single token from being transferred, set the
TransfersEnabled parameter to true and then set the bank module&#39;s SendEnabled
parameter for the denomination to false.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| send_enabled | [bool](#bool) |  | send_enabled enables or disables all cross-chain token transfers from this chain. |
| receive_enabled | [bool](#bool) |  | receive_enabled enables or disables all cross-chain token transfers to this chain. |





 

 

 

 



<a name="ibc_applications_transfer_v1_token-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/token.proto



<a name="ibc-applications-transfer-v1-Denom"></a>

### Denom
Denom holds the base denom of a Token and a trace of the chains it was sent through.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base | [string](#string) |  | the base token denomination |
| trace | [Hop](#ibc-applications-transfer-v1-Hop) | repeated | the trace of the token |






<a name="ibc-applications-transfer-v1-Hop"></a>

### Hop
Hop defines a port ID, channel ID pair specifying a unique &#34;hop&#34; in a trace


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |






<a name="ibc-applications-transfer-v1-Token"></a>

### Token
Token defines a struct which represents a token to be transferred.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [Denom](#ibc-applications-transfer-v1-Denom) |  | the token denomination |
| amount | [string](#string) |  | the token amount to be transferred |





 

 

 

 



<a name="ibc_applications_transfer_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/genesis.proto



<a name="ibc-applications-transfer-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc-transfer genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| denoms | [Denom](#ibc-applications-transfer-v1-Denom) | repeated |  |
| params | [Params](#ibc-applications-transfer-v1-Params) |  |  |
| total_escrowed | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | total_escrowed contains the total amount of tokens escrowed by the transfer module |





 

 

 

 



<a name="ibc_applications_transfer_v1_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/packet.proto



<a name="ibc-applications-transfer-v1-FungibleTokenPacketData"></a>

### FungibleTokenPacketData
FungibleTokenPacketData defines a struct for the packet payload
See FungibleTokenPacketData spec:
https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  | the token denomination to be transferred |
| amount | [string](#string) |  | the token amount to be transferred |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| memo | [string](#string) |  | optional memo |





 

 

 

 



<a name="ibc_applications_transfer_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/query.proto



<a name="ibc-applications-transfer-v1-QueryDenomHashRequest"></a>

### QueryDenomHashRequest
QueryDenomHashRequest is the request type for the Query/DenomHash RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| trace | [string](#string) |  | The denomination trace ([port_id]/[channel_id])&#43;/[denom] |






<a name="ibc-applications-transfer-v1-QueryDenomHashResponse"></a>

### QueryDenomHashResponse
QueryDenomHashResponse is the response type for the Query/DenomHash RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash (in hex format) of the denomination trace information. |






<a name="ibc-applications-transfer-v1-QueryDenomRequest"></a>

### QueryDenomRequest
QueryDenomRequest is the request type for the Query/Denom RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | hash (in hex format) or denom (full denom with ibc prefix) of the on chain denomination. |






<a name="ibc-applications-transfer-v1-QueryDenomResponse"></a>

### QueryDenomResponse
QueryDenomResponse is the response type for the Query/Denom RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [Denom](#ibc-applications-transfer-v1-Denom) |  | denom returns the requested denomination. |






<a name="ibc-applications-transfer-v1-QueryDenomsRequest"></a>

### QueryDenomsRequest
QueryDenomsRequest is the request type for the Query/Denoms RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="ibc-applications-transfer-v1-QueryDenomsResponse"></a>

### QueryDenomsResponse
QueryDenomsResponse is the response type for the Query/Denoms RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [Denom](#ibc-applications-transfer-v1-Denom) | repeated | denoms returns all denominations. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="ibc-applications-transfer-v1-QueryEscrowAddressRequest"></a>

### QueryEscrowAddressRequest
QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | unique port identifier |
| channel_id | [string](#string) |  | unique channel identifier |






<a name="ibc-applications-transfer-v1-QueryEscrowAddressResponse"></a>

### QueryEscrowAddressResponse
QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| escrow_address | [string](#string) |  | the escrow account address |






<a name="ibc-applications-transfer-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="ibc-applications-transfer-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-applications-transfer-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest"></a>

### QueryTotalEscrowForDenomRequest
QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |






<a name="ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse"></a>

### QueryTotalEscrowForDenomResponse
QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |





 

 

 


<a name="ibc-applications-transfer-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#ibc-applications-transfer-v1-QueryParamsRequest) | [QueryParamsResponse](#ibc-applications-transfer-v1-QueryParamsResponse) | Params queries all parameters of the ibc-transfer module. |
| Denoms | [QueryDenomsRequest](#ibc-applications-transfer-v1-QueryDenomsRequest) | [QueryDenomsResponse](#ibc-applications-transfer-v1-QueryDenomsResponse) | Denoms queries all denominations |
| Denom | [QueryDenomRequest](#ibc-applications-transfer-v1-QueryDenomRequest) | [QueryDenomResponse](#ibc-applications-transfer-v1-QueryDenomResponse) | Denom queries a denomination |
| DenomHash | [QueryDenomHashRequest](#ibc-applications-transfer-v1-QueryDenomHashRequest) | [QueryDenomHashResponse](#ibc-applications-transfer-v1-QueryDenomHashResponse) | DenomHash queries a denomination hash information. |
| EscrowAddress | [QueryEscrowAddressRequest](#ibc-applications-transfer-v1-QueryEscrowAddressRequest) | [QueryEscrowAddressResponse](#ibc-applications-transfer-v1-QueryEscrowAddressResponse) | EscrowAddress returns the escrow address for a particular port and channel id. |
| TotalEscrowForDenom | [QueryTotalEscrowForDenomRequest](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomRequest) | [QueryTotalEscrowForDenomResponse](#ibc-applications-transfer-v1-QueryTotalEscrowForDenomResponse) | TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. |

 



<a name="ibc_applications_transfer_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/applications/transfer/v1/tx.proto



<a name="ibc-applications-transfer-v1-MsgTransfer"></a>

### MsgTransfer
MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
ICS20 enabled chains. See ICS Spec here:
https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | the port on which the packet will be sent |
| source_channel | [string](#string) |  | the channel by which the packet will be sent |
| token | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  | token to be transferred |
| sender | [string](#string) |  | the sender address |
| receiver | [string](#string) |  | the recipient address on the destination chain |
| timeout_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Timeout height relative to the current block height. If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set. If you are sending with IBC v2 protocol, timeout_timestamp must be set, and timeout_height must be omitted. |
| timeout_timestamp | [uint64](#uint64) |  | Timeout timestamp in absolute nanoseconds since unix epoch. If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set. If you are sending with IBC v2 protocol, timeout_timestamp must be set. |
| memo | [string](#string) |  | optional memo |
| encoding | [string](#string) |  | optional encoding |
| use_aliasing | [bool](#bool) |  | boolean flag to indicate if the transfer message is sent with the IBC v2 protocol but uses v1 channel identifiers. In this case, the v1 channel identifiers function as aliases to the underlying client ids. This only needs to be set if the channel IDs are V1 channel identifiers. |






<a name="ibc-applications-transfer-v1-MsgTransferResponse"></a>

### MsgTransferResponse
MsgTransferResponse defines the Msg/Transfer response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | sequence number of the transfer packet sent |






<a name="ibc-applications-transfer-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-applications-transfer-v1-Params) |  | params defines the transfer parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-applications-transfer-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="ibc-applications-transfer-v1-Msg"></a>

### Msg
Msg defines the ibc/transfer Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Transfer | [MsgTransfer](#ibc-applications-transfer-v1-MsgTransfer) | [MsgTransferResponse](#ibc-applications-transfer-v1-MsgTransferResponse) | Transfer defines a rpc handler method for MsgTransfer. |
| UpdateParams | [MsgUpdateParams](#ibc-applications-transfer-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-applications-transfer-v1-MsgUpdateParamsResponse) | UpdateParams defines a rpc handler for MsgUpdateParams. |

 



<a name="ibc_core_channel_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/genesis.proto



<a name="ibc-core-channel-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc channel submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated |  |
| acknowledgements | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| commitments | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| receipts | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| send_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| recv_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| ack_sequences | [PacketSequence](#ibc-core-channel-v1-PacketSequence) | repeated |  |
| next_channel_sequence | [uint64](#uint64) |  | the sequence for the next generated channel identifier |






<a name="ibc-core-channel-v1-PacketSequence"></a>

### PacketSequence
PacketSequence defines the genesis type necessary to retrieve and store
next send and receive sequences.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| sequence | [uint64](#uint64) |  |  |





 

 

 

 



<a name="ibc_core_channel_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/query.proto



<a name="ibc-core-channel-v1-QueryChannelClientStateRequest"></a>

### QueryChannelClientStateRequest
QueryChannelClientStateRequest is the request type for the Query/ClientState
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryChannelClientStateResponse"></a>

### QueryChannelClientStateResponse
QueryChannelClientStateResponse is the Response type for the
Query/QueryChannelClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identified_client_state | [ibc.core.client.v1.IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) |  | client state associated with the channel |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelConsensusStateRequest"></a>

### QueryChannelConsensusStateRequest
QueryChannelConsensusStateRequest is the request type for the
Query/ConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| revision_number | [uint64](#uint64) |  | revision number of the consensus state |
| revision_height | [uint64](#uint64) |  | revision height of the consensus state |






<a name="ibc-core-channel-v1-QueryChannelConsensusStateResponse"></a>

### QueryChannelConsensusStateResponse
QueryChannelClientStateResponse is the Response type for the
Query/QueryChannelClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the channel |
| client_id | [string](#string) |  | client ID associated with the consensus state |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelRequest"></a>

### QueryChannelRequest
QueryChannelRequest is the request type for the Query/Channel RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryChannelResponse"></a>

### QueryChannelResponse
QueryChannelResponse is the response type for the Query/Channel RPC method.
Besides the Channel end, it includes a proof and the height from which the
proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  | channel associated with the request identifiers |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryChannelsRequest"></a>

### QueryChannelsRequest
QueryChannelsRequest is the request type for the Query/Channels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryChannelsResponse"></a>

### QueryChannelsResponse
QueryChannelsResponse is the response type for the Query/Channels RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated | list of stored channels of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryConnectionChannelsRequest"></a>

### QueryConnectionChannelsRequest
QueryConnectionChannelsRequest is the request type for the
Query/QueryConnectionChannels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection | [string](#string) |  | connection unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryConnectionChannelsResponse"></a>

### QueryConnectionChannelsResponse
QueryConnectionChannelsResponse is the Response type for the
Query/QueryConnectionChannels RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channels | [IdentifiedChannel](#ibc-core-channel-v1-IdentifiedChannel) | repeated | list of channels associated with a connection. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryNextSequenceReceiveRequest"></a>

### QueryNextSequenceReceiveRequest
QueryNextSequenceReceiveRequest is the request type for the
Query/QueryNextSequenceReceiveRequest RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryNextSequenceReceiveResponse"></a>

### QueryNextSequenceReceiveResponse
QuerySequenceResponse is the response type for the
Query/QueryNextSequenceReceiveResponse RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_receive | [uint64](#uint64) |  | next sequence receive number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryNextSequenceSendRequest"></a>

### QueryNextSequenceSendRequest
QueryNextSequenceSendRequest is the request type for the
Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |






<a name="ibc-core-channel-v1-QueryNextSequenceSendResponse"></a>

### QueryNextSequenceSendResponse
QueryNextSequenceSendResponse is the request type for the
Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_send | [uint64](#uint64) |  | next sequence send number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementRequest"></a>

### QueryPacketAcknowledgementRequest
QueryPacketAcknowledgementRequest is the request type for the
Query/PacketAcknowledgement RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementResponse"></a>

### QueryPacketAcknowledgementResponse
QueryPacketAcknowledgementResponse defines the client query response for a
packet which also includes a proof and the height from which the
proof was retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgement | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementsRequest"></a>

### QueryPacketAcknowledgementsRequest
QueryPacketAcknowledgementsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v1-QueryPacketAcknowledgementsResponse"></a>

### QueryPacketAcknowledgementsResponse
QueryPacketAcknowledgemetsResponse is the request type for the
Query/QueryPacketAcknowledgements RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryPacketCommitmentRequest"></a>

### QueryPacketCommitmentRequest
QueryPacketCommitmentRequest is the request type for the
Query/PacketCommitment RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketCommitmentResponse"></a>

### QueryPacketCommitmentResponse
QueryPacketCommitmentResponse defines the client query response for a packet
which also includes a proof and the height from which the proof was
retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitment | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryPacketCommitmentsRequest"></a>

### QueryPacketCommitmentsRequest
QueryPacketCommitmentsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v1-QueryPacketCommitmentsResponse"></a>

### QueryPacketCommitmentsResponse
QueryPacketCommitmentsResponse is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitments | [PacketState](#ibc-core-channel-v1-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryPacketReceiptRequest"></a>

### QueryPacketReceiptRequest
QueryPacketReceiptRequest is the request type for the
Query/PacketReceipt RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v1-QueryPacketReceiptResponse"></a>

### QueryPacketReceiptResponse
QueryPacketReceiptResponse defines the client query response for a packet
receipt which also includes a proof, and the height from which the proof was
retrieved


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| received | [bool](#bool) |  | success flag for if receipt exists |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v1-QueryUnreceivedAcksRequest"></a>

### QueryUnreceivedAcksRequest
QueryUnreceivedAcks is the request type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| packet_ack_sequences | [uint64](#uint64) | repeated | list of acknowledgement sequences |






<a name="ibc-core-channel-v1-QueryUnreceivedAcksResponse"></a>

### QueryUnreceivedAcksResponse
QueryUnreceivedAcksResponse is the response type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived acknowledgement sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v1-QueryUnreceivedPacketsRequest"></a>

### QueryUnreceivedPacketsRequest
QueryUnreceivedPacketsRequest is the request type for the
Query/UnreceivedPackets RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  | port unique identifier |
| channel_id | [string](#string) |  | channel unique identifier |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v1-QueryUnreceivedPacketsResponse"></a>

### QueryUnreceivedPacketsResponse
QueryUnreceivedPacketsResponse is the response type for the
Query/UnreceivedPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived packet sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-channel-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Channel | [QueryChannelRequest](#ibc-core-channel-v1-QueryChannelRequest) | [QueryChannelResponse](#ibc-core-channel-v1-QueryChannelResponse) | Channel queries an IBC Channel. |
| Channels | [QueryChannelsRequest](#ibc-core-channel-v1-QueryChannelsRequest) | [QueryChannelsResponse](#ibc-core-channel-v1-QueryChannelsResponse) | Channels queries all the IBC channels of a chain. |
| ConnectionChannels | [QueryConnectionChannelsRequest](#ibc-core-channel-v1-QueryConnectionChannelsRequest) | [QueryConnectionChannelsResponse](#ibc-core-channel-v1-QueryConnectionChannelsResponse) | ConnectionChannels queries all the channels associated with a connection end. |
| ChannelClientState | [QueryChannelClientStateRequest](#ibc-core-channel-v1-QueryChannelClientStateRequest) | [QueryChannelClientStateResponse](#ibc-core-channel-v1-QueryChannelClientStateResponse) | ChannelClientState queries for the client state for the channel associated with the provided channel identifiers. |
| ChannelConsensusState | [QueryChannelConsensusStateRequest](#ibc-core-channel-v1-QueryChannelConsensusStateRequest) | [QueryChannelConsensusStateResponse](#ibc-core-channel-v1-QueryChannelConsensusStateResponse) | ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers. |
| PacketCommitment | [QueryPacketCommitmentRequest](#ibc-core-channel-v1-QueryPacketCommitmentRequest) | [QueryPacketCommitmentResponse](#ibc-core-channel-v1-QueryPacketCommitmentResponse) | PacketCommitment queries a stored packet commitment hash. |
| PacketCommitments | [QueryPacketCommitmentsRequest](#ibc-core-channel-v1-QueryPacketCommitmentsRequest) | [QueryPacketCommitmentsResponse](#ibc-core-channel-v1-QueryPacketCommitmentsResponse) | PacketCommitments returns all the packet commitments hashes associated with a channel. |
| PacketReceipt | [QueryPacketReceiptRequest](#ibc-core-channel-v1-QueryPacketReceiptRequest) | [QueryPacketReceiptResponse](#ibc-core-channel-v1-QueryPacketReceiptResponse) | PacketReceipt queries if a given packet sequence has been received on the queried chain |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementRequest) | [QueryPacketAcknowledgementResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementResponse) | PacketAcknowledgement queries a stored packet acknowledgement hash. |
| PacketAcknowledgements | [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v1-QueryPacketAcknowledgementsRequest) | [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v1-QueryPacketAcknowledgementsResponse) | PacketAcknowledgements returns all the packet acknowledgements associated with a channel. |
| UnreceivedPackets | [QueryUnreceivedPacketsRequest](#ibc-core-channel-v1-QueryUnreceivedPacketsRequest) | [QueryUnreceivedPacketsResponse](#ibc-core-channel-v1-QueryUnreceivedPacketsResponse) | UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. |
| UnreceivedAcks | [QueryUnreceivedAcksRequest](#ibc-core-channel-v1-QueryUnreceivedAcksRequest) | [QueryUnreceivedAcksResponse](#ibc-core-channel-v1-QueryUnreceivedAcksResponse) | UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. |
| NextSequenceReceive | [QueryNextSequenceReceiveRequest](#ibc-core-channel-v1-QueryNextSequenceReceiveRequest) | [QueryNextSequenceReceiveResponse](#ibc-core-channel-v1-QueryNextSequenceReceiveResponse) | NextSequenceReceive returns the next receive sequence for a given channel. |
| NextSequenceSend | [QueryNextSequenceSendRequest](#ibc-core-channel-v1-QueryNextSequenceSendRequest) | [QueryNextSequenceSendResponse](#ibc-core-channel-v1-QueryNextSequenceSendResponse) | NextSequenceSend returns the next send sequence for a given channel. |

 



<a name="ibc_core_channel_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v1/tx.proto



<a name="ibc-core-channel-v1-MsgAcknowledgement"></a>

### MsgAcknowledgement
MsgAcknowledgement receives incoming IBC acknowledgement


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| acknowledgement | [bytes](#bytes) |  |  |
| proof_acked | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgAcknowledgementResponse"></a>

### MsgAcknowledgementResponse
MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseConfirm"></a>

### MsgChannelCloseConfirm
MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
to acknowledge the change of channel state to CLOSED on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| proof_init | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseConfirmResponse"></a>

### MsgChannelCloseConfirmResponse
MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
type.






<a name="ibc-core-channel-v1-MsgChannelCloseInit"></a>

### MsgChannelCloseInit
MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
to close a channel with Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelCloseInitResponse"></a>

### MsgChannelCloseInitResponse
MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.






<a name="ibc-core-channel-v1-MsgChannelOpenAck"></a>

### MsgChannelOpenAck
MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
the change of channel state to TRYOPEN on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| counterparty_channel_id | [string](#string) |  |  |
| counterparty_version | [string](#string) |  |  |
| proof_try | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenAckResponse"></a>

### MsgChannelOpenAckResponse
MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.






<a name="ibc-core-channel-v1-MsgChannelOpenConfirm"></a>

### MsgChannelOpenConfirm
MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
acknowledge the change of channel state to OPEN on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |
| proof_ack | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenConfirmResponse"></a>

### MsgChannelOpenConfirmResponse
MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
type.






<a name="ibc-core-channel-v1-MsgChannelOpenInit"></a>

### MsgChannelOpenInit
MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
is called by a relayer on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenInitResponse"></a>

### MsgChannelOpenInitResponse
MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| channel_id | [string](#string) |  |  |
| version | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenTry"></a>

### MsgChannelOpenTry
MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
on Chain B. The version field within the Channel field has been deprecated. Its
value will be ignored by core IBC.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| port_id | [string](#string) |  |  |
| previous_channel_id | [string](#string) |  | **Deprecated.** Deprecated: this field is unused. Crossing hello&#39;s are no longer supported in core IBC. |
| channel | [Channel](#ibc-core-channel-v1-Channel) |  | NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. |
| counterparty_version | [string](#string) |  |  |
| proof_init | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgChannelOpenTryResponse"></a>

### MsgChannelOpenTryResponse
MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [string](#string) |  |  |
| channel_id | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgRecvPacket"></a>

### MsgRecvPacket
MsgRecvPacket receives incoming IBC packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_commitment | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgRecvPacketResponse"></a>

### MsgRecvPacketResponse
MsgRecvPacketResponse defines the Msg/RecvPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgTimeout"></a>

### MsgTimeout
MsgTimeout receives timed-out packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| next_sequence_recv | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutOnClose"></a>

### MsgTimeoutOnClose
MsgTimeoutOnClose timed-out packet upon counterparty channel closure.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v1-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_close | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| next_sequence_recv | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutOnCloseResponse"></a>

### MsgTimeoutOnCloseResponse
MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |






<a name="ibc-core-channel-v1-MsgTimeoutResponse"></a>

### MsgTimeoutResponse
MsgTimeoutResponse defines the Msg/Timeout response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v1-ResponseResultType) |  |  |





 


<a name="ibc-core-channel-v1-ResponseResultType"></a>

### ResponseResultType
ResponseResultType defines the possible outcomes of the execution of a message

| Name | Number | Description |
| ---- | ------ | ----------- |
| RESPONSE_RESULT_TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| RESPONSE_RESULT_TYPE_NOOP | 1 | The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) |
| RESPONSE_RESULT_TYPE_SUCCESS | 2 | The message was executed successfully |
| RESPONSE_RESULT_TYPE_FAILURE | 3 | The message was executed unsuccessfully |


 

 


<a name="ibc-core-channel-v1-Msg"></a>

### Msg
Msg defines the ibc/channel Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ChannelOpenInit | [MsgChannelOpenInit](#ibc-core-channel-v1-MsgChannelOpenInit) | [MsgChannelOpenInitResponse](#ibc-core-channel-v1-MsgChannelOpenInitResponse) | ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. |
| ChannelOpenTry | [MsgChannelOpenTry](#ibc-core-channel-v1-MsgChannelOpenTry) | [MsgChannelOpenTryResponse](#ibc-core-channel-v1-MsgChannelOpenTryResponse) | ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. |
| ChannelOpenAck | [MsgChannelOpenAck](#ibc-core-channel-v1-MsgChannelOpenAck) | [MsgChannelOpenAckResponse](#ibc-core-channel-v1-MsgChannelOpenAckResponse) | ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. |
| ChannelOpenConfirm | [MsgChannelOpenConfirm](#ibc-core-channel-v1-MsgChannelOpenConfirm) | [MsgChannelOpenConfirmResponse](#ibc-core-channel-v1-MsgChannelOpenConfirmResponse) | ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. |
| ChannelCloseInit | [MsgChannelCloseInit](#ibc-core-channel-v1-MsgChannelCloseInit) | [MsgChannelCloseInitResponse](#ibc-core-channel-v1-MsgChannelCloseInitResponse) | ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. |
| ChannelCloseConfirm | [MsgChannelCloseConfirm](#ibc-core-channel-v1-MsgChannelCloseConfirm) | [MsgChannelCloseConfirmResponse](#ibc-core-channel-v1-MsgChannelCloseConfirmResponse) | ChannelCloseConfirm defines a rpc handler method for MsgChannelCloseConfirm. |
| RecvPacket | [MsgRecvPacket](#ibc-core-channel-v1-MsgRecvPacket) | [MsgRecvPacketResponse](#ibc-core-channel-v1-MsgRecvPacketResponse) | RecvPacket defines a rpc handler method for MsgRecvPacket. |
| Timeout | [MsgTimeout](#ibc-core-channel-v1-MsgTimeout) | [MsgTimeoutResponse](#ibc-core-channel-v1-MsgTimeoutResponse) | Timeout defines a rpc handler method for MsgTimeout. |
| TimeoutOnClose | [MsgTimeoutOnClose](#ibc-core-channel-v1-MsgTimeoutOnClose) | [MsgTimeoutOnCloseResponse](#ibc-core-channel-v1-MsgTimeoutOnCloseResponse) | TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. |
| Acknowledgement | [MsgAcknowledgement](#ibc-core-channel-v1-MsgAcknowledgement) | [MsgAcknowledgementResponse](#ibc-core-channel-v1-MsgAcknowledgementResponse) | Acknowledgement defines a rpc handler method for MsgAcknowledgement. |

 



<a name="ibc_core_channel_v2_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/genesis.proto



<a name="ibc-core-channel-v2-GenesisState"></a>

### GenesisState
GenesisState defines the ibc channel/v2 submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| commitments | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| receipts | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| async_packets | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| send_sequences | [PacketSequence](#ibc-core-channel-v2-PacketSequence) | repeated |  |






<a name="ibc-core-channel-v2-PacketSequence"></a>

### PacketSequence
PacketSequence defines the genesis type necessary to retrieve and store next send sequences.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-PacketState"></a>

### PacketState
PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| sequence | [uint64](#uint64) |  | packet sequence. |
| data | [bytes](#bytes) |  | embedded data that represents packet state. |





 

 

 

 



<a name="ibc_core_channel_v2_packet-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/packet.proto



<a name="ibc-core-channel-v2-Acknowledgement"></a>

### Acknowledgement
Acknowledgement contains a list of all ack results associated with a single packet.
In the case of a successful receive, the acknowledgement will contain an app acknowledgement
for each application that received a payload in the same order that the payloads were sent
in the packet.
If the receive is not successful, the acknowledgement will contain a single app acknowledgment
which will be a constant error acknowledgment as defined by the IBC v2 protocol.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| app_acknowledgements | [bytes](#bytes) | repeated |  |






<a name="ibc-core-channel-v2-Packet"></a>

### Packet
Packet defines a type that carries data across different chains through IBC


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | number corresponds to the order of sends and receives, where a Packet with an earlier sequence number must be sent and received before a Packet with a later sequence number. |
| source_client | [string](#string) |  | identifies the sending client on the sending chain. |
| destination_client | [string](#string) |  | identifies the receiving client on the receiving chain. |
| timeout_timestamp | [uint64](#uint64) |  | timeout timestamp in seconds after which the packet times out. |
| payloads | [Payload](#ibc-core-channel-v2-Payload) | repeated | a list of payloads, each one for a specific application. |






<a name="ibc-core-channel-v2-Payload"></a>

### Payload
Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_port | [string](#string) |  | specifies the source port of the packet. |
| destination_port | [string](#string) |  | specifies the destination port of the packet. |
| version | [string](#string) |  | version of the specified application. |
| encoding | [string](#string) |  | the encoding used for the provided value. |
| value | [bytes](#bytes) |  | the raw bytes for the payload. |






<a name="ibc-core-channel-v2-RecvPacketResult"></a>

### RecvPacketResult
RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [PacketStatus](#ibc-core-channel-v2-PacketStatus) |  | status of the packet |
| acknowledgement | [bytes](#bytes) |  | acknowledgement of the packet |





 


<a name="ibc-core-channel-v2-PacketStatus"></a>

### PacketStatus
PacketStatus specifies the status of a RecvPacketResult.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PACKET_STATUS_UNSPECIFIED | 0 | PACKET_STATUS_UNSPECIFIED indicates an unknown packet status. |
| PACKET_STATUS_SUCCESS | 1 | PACKET_STATUS_SUCCESS indicates a successful packet receipt. |
| PACKET_STATUS_FAILURE | 2 | PACKET_STATUS_FAILURE indicates a failed packet receipt. |
| PACKET_STATUS_ASYNC | 3 | PACKET_STATUS_ASYNC indicates an async packet receipt. |


 

 

 



<a name="ibc_core_channel_v2_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/query.proto



<a name="ibc-core-channel-v2-QueryNextSequenceSendRequest"></a>

### QueryNextSequenceSendRequest
QueryNextSequenceSendRequest is the request type for the Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-channel-v2-QueryNextSequenceSendResponse"></a>

### QueryNextSequenceSendResponse
QueryNextSequenceSendResponse is the response type for the Query/QueryNextSequenceSend RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_sequence_send | [uint64](#uint64) |  | next sequence send number |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementRequest"></a>

### QueryPacketAcknowledgementRequest
QueryPacketAcknowledgementRequest is the request type for the Query/PacketAcknowledgement RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementResponse"></a>

### QueryPacketAcknowledgementResponse
QueryPacketAcknowledgementResponse is the response type for the Query/PacketAcknowledgement RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgement | [bytes](#bytes) |  | acknowledgement associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementsRequest"></a>

### QueryPacketAcknowledgementsRequest
QueryPacketAcknowledgementsRequest is the request type for the
Query/QueryPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |
| packet_commitment_sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v2-QueryPacketAcknowledgementsResponse"></a>

### QueryPacketAcknowledgementsResponse
QueryPacketAcknowledgemetsResponse is the request type for the
Query/QueryPacketAcknowledgements RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acknowledgements | [PacketState](#ibc-core-channel-v2-PacketState) | repeated |  |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v2-QueryPacketCommitmentRequest"></a>

### QueryPacketCommitmentRequest
QueryPacketCommitmentRequest is the request type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketCommitmentResponse"></a>

### QueryPacketCommitmentResponse
QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitment | [bytes](#bytes) |  | packet associated with the request fields |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryPacketCommitmentsRequest"></a>

### QueryPacketCommitmentsRequest
QueryPacketCommitmentsRequest is the request type for the Query/PacketCommitments RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-channel-v2-QueryPacketCommitmentsResponse"></a>

### QueryPacketCommitmentsResponse
QueryPacketCommitmentResponse is the response type for the Query/PacketCommitment RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| commitments | [PacketState](#ibc-core-channel-v2-PacketState) | repeated | collection of packet commitments for the requested channel identifier. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response. |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height. |






<a name="ibc-core-channel-v2-QueryPacketReceiptRequest"></a>

### QueryPacketReceiptRequest
QueryPacketReceiptRequest is the request type for the Query/PacketReceipt RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequence | [uint64](#uint64) |  | packet sequence |






<a name="ibc-core-channel-v2-QueryPacketReceiptResponse"></a>

### QueryPacketReceiptResponse
QueryPacketReceiptResponse is the response type for the Query/PacketReceipt RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| received | [bool](#bool) |  | success flag for if receipt exists |
| proof | [bytes](#bytes) |  | merkle proof of existence or absence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-channel-v2-QueryUnreceivedAcksRequest"></a>

### QueryUnreceivedAcksRequest
QueryUnreceivedAcks is the request type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| packet_ack_sequences | [uint64](#uint64) | repeated | list of acknowledgement sequences |






<a name="ibc-core-channel-v2-QueryUnreceivedAcksResponse"></a>

### QueryUnreceivedAcksResponse
QueryUnreceivedAcksResponse is the response type for the
Query/UnreceivedAcks RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived acknowledgement sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |






<a name="ibc-core-channel-v2-QueryUnreceivedPacketsRequest"></a>

### QueryUnreceivedPacketsRequest
QueryUnreceivedPacketsRequest is the request type for the Query/UnreceivedPackets RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| sequences | [uint64](#uint64) | repeated | list of packet sequences |






<a name="ibc-core-channel-v2-QueryUnreceivedPacketsResponse"></a>

### QueryUnreceivedPacketsResponse
QueryUnreceivedPacketsResponse is the response type for the Query/UnreceivedPacketCommitments RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequences | [uint64](#uint64) | repeated | list of unreceived packet sequences |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-channel-v2-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| NextSequenceSend | [QueryNextSequenceSendRequest](#ibc-core-channel-v2-QueryNextSequenceSendRequest) | [QueryNextSequenceSendResponse](#ibc-core-channel-v2-QueryNextSequenceSendResponse) | NextSequenceSend returns the next send sequence for a given channel. |
| PacketCommitment | [QueryPacketCommitmentRequest](#ibc-core-channel-v2-QueryPacketCommitmentRequest) | [QueryPacketCommitmentResponse](#ibc-core-channel-v2-QueryPacketCommitmentResponse) | PacketCommitment queries a stored packet commitment hash. |
| PacketCommitments | [QueryPacketCommitmentsRequest](#ibc-core-channel-v2-QueryPacketCommitmentsRequest) | [QueryPacketCommitmentsResponse](#ibc-core-channel-v2-QueryPacketCommitmentsResponse) | PacketCommitments queries a stored packet commitment hash. |
| PacketAcknowledgement | [QueryPacketAcknowledgementRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementRequest) | [QueryPacketAcknowledgementResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementResponse) | PacketAcknowledgement queries a stored acknowledgement commitment hash. |
| PacketAcknowledgements | [QueryPacketAcknowledgementsRequest](#ibc-core-channel-v2-QueryPacketAcknowledgementsRequest) | [QueryPacketAcknowledgementsResponse](#ibc-core-channel-v2-QueryPacketAcknowledgementsResponse) | PacketAcknowledgements returns all packet acknowledgements associated with a channel. |
| PacketReceipt | [QueryPacketReceiptRequest](#ibc-core-channel-v2-QueryPacketReceiptRequest) | [QueryPacketReceiptResponse](#ibc-core-channel-v2-QueryPacketReceiptResponse) | PacketReceipt queries a stored packet receipt. |
| UnreceivedPackets | [QueryUnreceivedPacketsRequest](#ibc-core-channel-v2-QueryUnreceivedPacketsRequest) | [QueryUnreceivedPacketsResponse](#ibc-core-channel-v2-QueryUnreceivedPacketsResponse) | UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. |
| UnreceivedAcks | [QueryUnreceivedAcksRequest](#ibc-core-channel-v2-QueryUnreceivedAcksRequest) | [QueryUnreceivedAcksResponse](#ibc-core-channel-v2-QueryUnreceivedAcksResponse) | UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. |

 



<a name="ibc_core_channel_v2_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/channel/v2/tx.proto



<a name="ibc-core-channel-v2-MsgAcknowledgement"></a>

### MsgAcknowledgement
MsgAcknowledgement receives incoming IBC acknowledgement.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| acknowledgement | [Acknowledgement](#ibc-core-channel-v2-Acknowledgement) |  |  |
| proof_acked | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgAcknowledgementResponse"></a>

### MsgAcknowledgementResponse
MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |






<a name="ibc-core-channel-v2-MsgRecvPacket"></a>

### MsgRecvPacket
MsgRecvPacket receives an incoming IBC packet.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| proof_commitment | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgRecvPacketResponse"></a>

### MsgRecvPacketResponse
MsgRecvPacketResponse defines the Msg/RecvPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |






<a name="ibc-core-channel-v2-MsgSendPacket"></a>

### MsgSendPacket
MsgSendPacket sends an outgoing IBC packet.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_client | [string](#string) |  |  |
| timeout_timestamp | [uint64](#uint64) |  |  |
| payloads | [Payload](#ibc-core-channel-v2-Payload) | repeated |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgSendPacketResponse"></a>

### MsgSendPacketResponse
MsgSendPacketResponse defines the Msg/SendPacket response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |






<a name="ibc-core-channel-v2-MsgTimeout"></a>

### MsgTimeout
MsgTimeout receives timed-out packet


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| packet | [Packet](#ibc-core-channel-v2-Packet) |  |  |
| proof_unreceived | [bytes](#bytes) |  |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-channel-v2-MsgTimeoutResponse"></a>

### MsgTimeoutResponse
MsgTimeoutResponse defines the Msg/Timeout response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| result | [ResponseResultType](#ibc-core-channel-v2-ResponseResultType) |  |  |





 


<a name="ibc-core-channel-v2-ResponseResultType"></a>

### ResponseResultType
ResponseResultType defines the possible outcomes of the execution of a message

| Name | Number | Description |
| ---- | ------ | ----------- |
| RESPONSE_RESULT_TYPE_UNSPECIFIED | 0 | Default zero value enumeration |
| RESPONSE_RESULT_TYPE_NOOP | 1 | The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) |
| RESPONSE_RESULT_TYPE_SUCCESS | 2 | The message was executed successfully |
| RESPONSE_RESULT_TYPE_FAILURE | 3 | The message was executed unsuccessfully |


 

 


<a name="ibc-core-channel-v2-Msg"></a>

### Msg
Msg defines the ibc/channel/v2 Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendPacket | [MsgSendPacket](#ibc-core-channel-v2-MsgSendPacket) | [MsgSendPacketResponse](#ibc-core-channel-v2-MsgSendPacketResponse) | SendPacket defines a rpc handler method for MsgSendPacket. |
| RecvPacket | [MsgRecvPacket](#ibc-core-channel-v2-MsgRecvPacket) | [MsgRecvPacketResponse](#ibc-core-channel-v2-MsgRecvPacketResponse) | RecvPacket defines a rpc handler method for MsgRecvPacket. |
| Timeout | [MsgTimeout](#ibc-core-channel-v2-MsgTimeout) | [MsgTimeoutResponse](#ibc-core-channel-v2-MsgTimeoutResponse) | Timeout defines a rpc handler method for MsgTimeout. |
| Acknowledgement | [MsgAcknowledgement](#ibc-core-channel-v2-MsgAcknowledgement) | [MsgAcknowledgementResponse](#ibc-core-channel-v2-MsgAcknowledgementResponse) | Acknowledgement defines a rpc handler method for MsgAcknowledgement. |

 



<a name="ibc_core_client_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/genesis.proto



<a name="ibc-core-client-v1-GenesisMetadata"></a>

### GenesisMetadata
GenesisMetadata defines the genesis type for metadata that will be used
to export all client store keys that are not client or consensus states.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | store key of metadata without clientID-prefix |
| value | [bytes](#bytes) |  | metadata value |






<a name="ibc-core-client-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc client submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| clients | [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) | repeated | client states with their corresponding identifiers |
| clients_consensus | [ClientConsensusStates](#ibc-core-client-v1-ClientConsensusStates) | repeated | consensus states from each client |
| clients_metadata | [IdentifiedGenesisMetadata](#ibc-core-client-v1-IdentifiedGenesisMetadata) | repeated | metadata from each client |
| params | [Params](#ibc-core-client-v1-Params) |  |  |
| create_localhost | [bool](#bool) |  | **Deprecated.** Deprecated: create_localhost has been deprecated. The localhost client is automatically created at genesis. |
| next_client_sequence | [uint64](#uint64) |  | the sequence for the next generated client identifier |






<a name="ibc-core-client-v1-IdentifiedGenesisMetadata"></a>

### IdentifiedGenesisMetadata
IdentifiedGenesisMetadata has the client metadata with the corresponding
client id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| client_metadata | [GenesisMetadata](#ibc-core-client-v1-GenesisMetadata) | repeated |  |





 

 

 

 



<a name="ibc_core_commitment_v2_commitment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/commitment/v2/commitment.proto



<a name="ibc-core-commitment-v2-MerklePath"></a>

### MerklePath
MerklePath is the path used to verify commitment proofs, which can be an
arbitrary structured object (defined by a commitment type).
ICS-23 verification supports membership proofs for nested merkle trees.
The ICS-24 standard provable keys MUST be stored in the lowest level tree with an optional prefix.
The IC24 provable tree may then be stored in a higher level tree(s) that hash up to the root hash
stored in the consensus state of the client.
Each element of the path represents the key of a merkle tree from the root to the leaf.
The elements of the path before the final element must be the path to the tree that contains
the ICS24 provable store. Thus, it should remain constant for all ICS24 proofs.
The final element of the path is the key of the leaf in the ICS24 provable store,
Thus IBC core will append the ICS24 path to the final element of the MerklePath
stored in the counterparty to create the full path to the leaf for proof verification.
Examples:
Cosmos SDK:
The Cosmos SDK commits to a multi-tree where each store is an IAVL tree and all store hashes
are hashed in a simple merkle tree to get the final root hash. Thus, the MerklePath in the counterparty
MerklePrefix has the following structure: [&#34;ibc&#34;, &#34;&#34;]
The core IBC handler will append the ICS24 path to the final element of the MerklePath
like so: [&#34;ibc&#34;, &#34;{packetCommitmentPath}&#34;] which will then be used for final verification.
Ethereum:
The Ethereum client commits to a single Patricia merkle trie. The ICS24 provable store is managed
by the smart contract state. Each smart contract has a specific prefix reserved within the global trie.
Thus the MerklePath in the counterparty is the prefix to the smart contract state in the global trie.
Since there is only one tree in the commitment structure of ethereum the MerklePath in the counterparty
MerklePrefix has the following structure: [&#34;IBCCoreContractAddressStoragePrefix&#34;]
The core IBC handler will append the ICS24 path to the final element of the MerklePath
like so: [&#34;IBCCoreContractAddressStoragePrefix{packetCommitmentPath}&#34;] which will then be used for final
verification. Thus the MerklePath in the counterparty MerklePrefix is the nested key path from the root hash of the
consensus state down to the ICS24 provable store. The IBC handler retrieves the counterparty key path to the ICS24
provable store from the MerklePath and appends the ICS24 path to get the final key path to the value being verified
by the client against the root hash in the client&#39;s consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_path | [bytes](#bytes) | repeated |  |





 

 

 

 



<a name="ibc_core_client_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/query.proto



<a name="ibc-core-client-v1-QueryClientCreatorRequest"></a>

### QueryClientCreatorRequest
QueryClientCreatorRequest is the request type for the Query/ClientCreator RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-client-v1-QueryClientCreatorResponse"></a>

### QueryClientCreatorResponse
QueryClientCreatorResponse is the response type for the Query/ClientCreator RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  | creator of the client |






<a name="ibc-core-client-v1-QueryClientParamsRequest"></a>

### QueryClientParamsRequest
QueryClientParamsRequest is the request type for the Query/ClientParams RPC
method.






<a name="ibc-core-client-v1-QueryClientParamsResponse"></a>

### QueryClientParamsResponse
QueryClientParamsResponse is the response type for the Query/ClientParams RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-core-client-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-core-client-v1-QueryClientStateRequest"></a>

### QueryClientStateRequest
QueryClientStateRequest is the request type for the Query/ClientState RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v1-QueryClientStateResponse"></a>

### QueryClientStateResponse
QueryClientStateResponse is the response type for the Query/ClientState RPC
method. Besides the client state, it includes a proof and the height from
which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state associated with the request identifier |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-client-v1-QueryClientStatesRequest"></a>

### QueryClientStatesRequest
QueryClientStatesRequest is the request type for the Query/ClientStates RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryClientStatesResponse"></a>

### QueryClientStatesResponse
QueryClientStatesResponse is the response type for the Query/ClientStates RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_states | [IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) | repeated | list of stored ClientStates of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryClientStatusRequest"></a>

### QueryClientStatusRequest
QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |






<a name="ibc-core-client-v1-QueryClientStatusResponse"></a>

### QueryClientStatusResponse
QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
method. It returns the current status of the IBC client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  |  |






<a name="ibc-core-client-v1-QueryConsensusStateHeightsRequest"></a>

### QueryConsensusStateHeightsRequest
QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryConsensusStateHeightsResponse"></a>

### QueryConsensusStateHeightsResponse
QueryConsensusStateHeightsResponse is the response type for the
Query/ConsensusStateHeights RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state_heights | [Height](#ibc-core-client-v1-Height) | repeated | consensus state heights |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryConsensusStateRequest"></a>

### QueryConsensusStateRequest
QueryConsensusStateRequest is the request type for the Query/ConsensusState
RPC method. Besides the consensus state, it includes a proof and the height
from which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| revision_number | [uint64](#uint64) |  | consensus state revision number |
| revision_height | [uint64](#uint64) |  | consensus state revision height |
| latest_height | [bool](#bool) |  | latest_height overrides the height field and queries the latest stored ConsensusState |






<a name="ibc-core-client-v1-QueryConsensusStateResponse"></a>

### QueryConsensusStateResponse
QueryConsensusStateResponse is the response type for the Query/ConsensusState
RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the client identifier at the given height |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-client-v1-QueryConsensusStatesRequest"></a>

### QueryConsensusStatesRequest
QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination request |






<a name="ibc-core-client-v1-QueryConsensusStatesResponse"></a>

### QueryConsensusStatesResponse
QueryConsensusStatesResponse is the response type for the
Query/ConsensusStates RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_states | [ConsensusStateWithHeight](#ibc-core-client-v1-ConsensusStateWithHeight) | repeated | consensus states associated with the identifier |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |






<a name="ibc-core-client-v1-QueryUpgradedClientStateRequest"></a>

### QueryUpgradedClientStateRequest
QueryUpgradedClientStateRequest is the request type for the
Query/UpgradedClientState RPC method






<a name="ibc-core-client-v1-QueryUpgradedClientStateResponse"></a>

### QueryUpgradedClientStateResponse
QueryUpgradedClientStateResponse is the response type for the
Query/UpgradedClientState RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | client state associated with the request identifier |






<a name="ibc-core-client-v1-QueryUpgradedConsensusStateRequest"></a>

### QueryUpgradedConsensusStateRequest
QueryUpgradedConsensusStateRequest is the request type for the
Query/UpgradedConsensusState RPC method






<a name="ibc-core-client-v1-QueryUpgradedConsensusStateResponse"></a>

### QueryUpgradedConsensusStateResponse
QueryUpgradedConsensusStateResponse is the response type for the
Query/UpgradedConsensusState RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| upgraded_consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | Consensus state associated with the request identifier |






<a name="ibc-core-client-v1-QueryVerifyMembershipRequest"></a>

### QueryVerifyMembershipRequest
QueryVerifyMembershipRequest is the request type for the Query/VerifyMembership RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier. |
| proof | [bytes](#bytes) |  | the proof to be verified by the client. |
| proof_height | [Height](#ibc-core-client-v1-Height) |  | the height of the commitment root at which the proof is verified. |
| value | [bytes](#bytes) |  | the value which is proven. |
| time_delay | [uint64](#uint64) |  | optional time delay |
| block_delay | [uint64](#uint64) |  | optional block delay |
| merkle_path | [ibc.core.commitment.v2.MerklePath](#ibc-core-commitment-v2-MerklePath) |  | the commitment key path. |






<a name="ibc-core-client-v1-QueryVerifyMembershipResponse"></a>

### QueryVerifyMembershipResponse
QueryVerifyMembershipResponse is the response type for the Query/VerifyMembership RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  | boolean indicating success or failure of proof verification. |





 

 

 


<a name="ibc-core-client-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ClientState | [QueryClientStateRequest](#ibc-core-client-v1-QueryClientStateRequest) | [QueryClientStateResponse](#ibc-core-client-v1-QueryClientStateResponse) | ClientState queries an IBC light client. |
| ClientStates | [QueryClientStatesRequest](#ibc-core-client-v1-QueryClientStatesRequest) | [QueryClientStatesResponse](#ibc-core-client-v1-QueryClientStatesResponse) | ClientStates queries all the IBC light clients of a chain. |
| ConsensusState | [QueryConsensusStateRequest](#ibc-core-client-v1-QueryConsensusStateRequest) | [QueryConsensusStateResponse](#ibc-core-client-v1-QueryConsensusStateResponse) | ConsensusState queries a consensus state associated with a client state at a given height. |
| ConsensusStates | [QueryConsensusStatesRequest](#ibc-core-client-v1-QueryConsensusStatesRequest) | [QueryConsensusStatesResponse](#ibc-core-client-v1-QueryConsensusStatesResponse) | ConsensusStates queries all the consensus state associated with a given client. |
| ConsensusStateHeights | [QueryConsensusStateHeightsRequest](#ibc-core-client-v1-QueryConsensusStateHeightsRequest) | [QueryConsensusStateHeightsResponse](#ibc-core-client-v1-QueryConsensusStateHeightsResponse) | ConsensusStateHeights queries the height of every consensus states associated with a given client. |
| ClientStatus | [QueryClientStatusRequest](#ibc-core-client-v1-QueryClientStatusRequest) | [QueryClientStatusResponse](#ibc-core-client-v1-QueryClientStatusResponse) | Status queries the status of an IBC client. |
| ClientParams | [QueryClientParamsRequest](#ibc-core-client-v1-QueryClientParamsRequest) | [QueryClientParamsResponse](#ibc-core-client-v1-QueryClientParamsResponse) | ClientParams queries all parameters of the ibc client submodule. |
| ClientCreator | [QueryClientCreatorRequest](#ibc-core-client-v1-QueryClientCreatorRequest) | [QueryClientCreatorResponse](#ibc-core-client-v1-QueryClientCreatorResponse) | ClientCreator queries the creator of a given client. |
| UpgradedClientState | [QueryUpgradedClientStateRequest](#ibc-core-client-v1-QueryUpgradedClientStateRequest) | [QueryUpgradedClientStateResponse](#ibc-core-client-v1-QueryUpgradedClientStateResponse) | UpgradedClientState queries an Upgraded IBC light client. |
| UpgradedConsensusState | [QueryUpgradedConsensusStateRequest](#ibc-core-client-v1-QueryUpgradedConsensusStateRequest) | [QueryUpgradedConsensusStateResponse](#ibc-core-client-v1-QueryUpgradedConsensusStateResponse) | UpgradedConsensusState queries an Upgraded IBC consensus state. |
| VerifyMembership | [QueryVerifyMembershipRequest](#ibc-core-client-v1-QueryVerifyMembershipRequest) | [QueryVerifyMembershipResponse](#ibc-core-client-v1-QueryVerifyMembershipResponse) | VerifyMembership queries an IBC light client for proof verification of a value at a given key path. |

 



<a name="ibc_core_client_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v1/tx.proto



<a name="ibc-core-client-v1-MsgCreateClient"></a>

### MsgCreateClient
MsgCreateClient defines a message to create an IBC client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | light client state |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the client that corresponds to a given height. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgCreateClientResponse"></a>

### MsgCreateClientResponse
MsgCreateClientResponse defines the Msg/CreateClient response type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |






<a name="ibc-core-client-v1-MsgDeleteClientCreator"></a>

### MsgDeleteClientCreator
MsgDeleteClientCreator defines a message to delete the client creator of a client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgDeleteClientCreatorResponse"></a>

### MsgDeleteClientCreatorResponse
MsgDeleteClientCreatorResponse defines the Msg/DeleteClientCreator response type.






<a name="ibc-core-client-v1-MsgIBCSoftwareUpgrade"></a>

### MsgIBCSoftwareUpgrade
MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plan | [cosmos.upgrade.v1beta1.Plan](#cosmos-upgrade-v1beta1-Plan) |  |  |
| upgraded_client_state | [google.protobuf.Any](#google-protobuf-Any) |  | An UpgradedClientState must be provided to perform an IBC breaking upgrade. This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs, so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the previous version of the chain. This will allow IBC connections to persist smoothly across planned chain upgrades. Correspondingly, the UpgradedClientState field has been deprecated in the Cosmos SDK to allow for this logic to exist solely in the 02-client module. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse"></a>

### MsgIBCSoftwareUpgradeResponse
MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.






<a name="ibc-core-client-v1-MsgRecoverClient"></a>

### MsgRecoverClient
MsgRecoverClient defines the message used to recover a frozen or expired client.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject_client_id | [string](#string) |  | the client identifier for the client to be updated if the proposal passes |
| substitute_client_id | [string](#string) |  | the substitute client identifier for the client which will replace the subject client |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgRecoverClientResponse"></a>

### MsgRecoverClientResponse
MsgRecoverClientResponse defines the Msg/RecoverClient response type.






<a name="ibc-core-client-v1-MsgUpdateClient"></a>

### MsgUpdateClient
MsgUpdateClient defines an sdk.Msg to update a IBC client state using
the given client message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| client_message | [google.protobuf.Any](#google-protobuf-Any) |  | client message to update the light client |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgUpdateClientResponse"></a>

### MsgUpdateClientResponse
MsgUpdateClientResponse defines the Msg/UpdateClient response type.






<a name="ibc-core-client-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the sdk.Msg type to update the client parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-core-client-v1-Params) |  | params defines the client parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-core-client-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the MsgUpdateParams response type.






<a name="ibc-core-client-v1-MsgUpgradeClient"></a>

### MsgUpgradeClient
MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client unique identifier |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | upgraded client state |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | upgraded consensus state, only contains enough information to serve as a basis of trust in update logic |
| proof_upgrade_client | [bytes](#bytes) |  | proof that old chain committed to new client |
| proof_upgrade_consensus_state | [bytes](#bytes) |  | proof that old chain committed to new consensus state |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v1-MsgUpgradeClientResponse"></a>

### MsgUpgradeClientResponse
MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.





 

 

 


<a name="ibc-core-client-v1-Msg"></a>

### Msg
Msg defines the ibc/client Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateClient | [MsgCreateClient](#ibc-core-client-v1-MsgCreateClient) | [MsgCreateClientResponse](#ibc-core-client-v1-MsgCreateClientResponse) | CreateClient defines a rpc handler method for MsgCreateClient. |
| UpdateClient | [MsgUpdateClient](#ibc-core-client-v1-MsgUpdateClient) | [MsgUpdateClientResponse](#ibc-core-client-v1-MsgUpdateClientResponse) | UpdateClient defines a rpc handler method for MsgUpdateClient. |
| UpgradeClient | [MsgUpgradeClient](#ibc-core-client-v1-MsgUpgradeClient) | [MsgUpgradeClientResponse](#ibc-core-client-v1-MsgUpgradeClientResponse) | UpgradeClient defines a rpc handler method for MsgUpgradeClient. |
| RecoverClient | [MsgRecoverClient](#ibc-core-client-v1-MsgRecoverClient) | [MsgRecoverClientResponse](#ibc-core-client-v1-MsgRecoverClientResponse) | RecoverClient defines a rpc handler method for MsgRecoverClient. |
| IBCSoftwareUpgrade | [MsgIBCSoftwareUpgrade](#ibc-core-client-v1-MsgIBCSoftwareUpgrade) | [MsgIBCSoftwareUpgradeResponse](#ibc-core-client-v1-MsgIBCSoftwareUpgradeResponse) | IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. |
| UpdateClientParams | [MsgUpdateParams](#ibc-core-client-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-core-client-v1-MsgUpdateParamsResponse) | UpdateClientParams defines a rpc handler method for MsgUpdateParams. |
| DeleteClientCreator | [MsgDeleteClientCreator](#ibc-core-client-v1-MsgDeleteClientCreator) | [MsgDeleteClientCreatorResponse](#ibc-core-client-v1-MsgDeleteClientCreatorResponse) | DeleteClientCreator defines a rpc handler method for MsgDeleteClientCreator. |

 



<a name="ibc_core_client_v2_config-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/config.proto



<a name="ibc-core-client-v2-Config"></a>

### Config
Config is a **per-client** configuration struct that sets which relayers are allowed to relay v2 IBC messages
for a given client.
If it is set, then only relayers in the allow list can send v2 messages
If it is not set, then the client allows permissionless relaying of v2 messages


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowed_relayers | [string](#string) | repeated | allowed_relayers defines the set of allowed relayers for IBC V2 protocol for the given client |





 

 

 

 



<a name="ibc_core_client_v2_counterparty-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/counterparty.proto



<a name="ibc-core-client-v2-CounterpartyInfo"></a>

### CounterpartyInfo
CounterpartyInfo defines the key that the counterparty will use to message our client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| merkle_prefix | [bytes](#bytes) | repeated | merkle prefix key is the prefix that ics provable keys are stored under |
| client_id | [string](#string) |  | client identifier is the identifier used to send packet messages to our client |





 

 

 

 



<a name="ibc_core_client_v2_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/genesis.proto



<a name="ibc-core-client-v2-GenesisCounterpartyInfo"></a>

### GenesisCounterpartyInfo
GenesisCounterpartyInfo defines the state associating a client with a counterparty.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | ClientId is the ID of the given client. |
| counterparty_info | [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo) |  | CounterpartyInfo is the counterparty info of the given client. |






<a name="ibc-core-client-v2-GenesisState"></a>

### GenesisState
GenesisState defines the ibc client v2 submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| counterparty_infos | [GenesisCounterpartyInfo](#ibc-core-client-v2-GenesisCounterpartyInfo) | repeated | counterparty info for each client |





 

 

 

 



<a name="ibc_core_client_v2_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/query.proto



<a name="ibc-core-client-v2-QueryConfigRequest"></a>

### QueryConfigRequest
QueryConfigRequest is the request type for the Query/Config RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v2-QueryConfigResponse"></a>

### QueryConfigResponse
QueryConfigResponse is the response type for the Query/Config RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config | [Config](#ibc-core-client-v2-Config) |  |  |






<a name="ibc-core-client-v2-QueryCounterpartyInfoRequest"></a>

### QueryCounterpartyInfoRequest
QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |






<a name="ibc-core-client-v2-QueryCounterpartyInfoResponse"></a>

### QueryCounterpartyInfoResponse
QueryCounterpartyInfoResponse is the response type for the
Query/CounterpartyInfo RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| counterparty_info | [CounterpartyInfo](#ibc-core-client-v2-CounterpartyInfo) |  |  |





 

 

 


<a name="ibc-core-client-v2-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CounterpartyInfo | [QueryCounterpartyInfoRequest](#ibc-core-client-v2-QueryCounterpartyInfoRequest) | [QueryCounterpartyInfoResponse](#ibc-core-client-v2-QueryCounterpartyInfoResponse) | CounterpartyInfo queries an IBC light counter party info. |
| Config | [QueryConfigRequest](#ibc-core-client-v2-QueryConfigRequest) | [QueryConfigResponse](#ibc-core-client-v2-QueryConfigResponse) | Config queries the IBC client v2 configuration for a given client. |

 



<a name="ibc_core_client_v2_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/client/v2/tx.proto



<a name="ibc-core-client-v2-MsgRegisterCounterparty"></a>

### MsgRegisterCounterparty
MsgRegisterCounterparty defines a message to register a counterparty on a client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| counterparty_merkle_prefix | [bytes](#bytes) | repeated | counterparty merkle prefix |
| counterparty_client_id | [string](#string) |  | counterparty client identifier |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v2-MsgRegisterCounterpartyResponse"></a>

### MsgRegisterCounterpartyResponse
MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type.






<a name="ibc-core-client-v2-MsgUpdateClientConfig"></a>

### MsgUpdateClientConfig
MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier |
| config | [Config](#ibc-core-client-v2-Config) |  | allowed relayers

NOTE: All fields in the config must be supplied. |
| signer | [string](#string) |  | signer address |






<a name="ibc-core-client-v2-MsgUpdateClientConfigResponse"></a>

### MsgUpdateClientConfigResponse
MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type.





 

 

 


<a name="ibc-core-client-v2-Msg"></a>

### Msg
Msg defines the ibc/client/v2 Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| RegisterCounterparty | [MsgRegisterCounterparty](#ibc-core-client-v2-MsgRegisterCounterparty) | [MsgRegisterCounterpartyResponse](#ibc-core-client-v2-MsgRegisterCounterpartyResponse) | RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. |
| UpdateClientConfig | [MsgUpdateClientConfig](#ibc-core-client-v2-MsgUpdateClientConfig) | [MsgUpdateClientConfigResponse](#ibc-core-client-v2-MsgUpdateClientConfigResponse) | UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. |

 



<a name="cosmos_ics23_v1_proofs-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## cosmos/ics23/v1/proofs.proto



<a name="cosmos-ics23-v1-BatchEntry"></a>

### BatchEntry
Use BatchEntry not CommitmentProof, to avoid recursion


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exist | [ExistenceProof](#cosmos-ics23-v1-ExistenceProof) |  |  |
| nonexist | [NonExistenceProof](#cosmos-ics23-v1-NonExistenceProof) |  |  |






<a name="cosmos-ics23-v1-BatchProof"></a>

### BatchProof
BatchProof is a group of multiple proof types than can be compressed


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entries | [BatchEntry](#cosmos-ics23-v1-BatchEntry) | repeated |  |






<a name="cosmos-ics23-v1-CommitmentProof"></a>

### CommitmentProof
CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exist | [ExistenceProof](#cosmos-ics23-v1-ExistenceProof) |  |  |
| nonexist | [NonExistenceProof](#cosmos-ics23-v1-NonExistenceProof) |  |  |
| batch | [BatchProof](#cosmos-ics23-v1-BatchProof) |  |  |
| compressed | [CompressedBatchProof](#cosmos-ics23-v1-CompressedBatchProof) |  |  |






<a name="cosmos-ics23-v1-CompressedBatchEntry"></a>

### CompressedBatchEntry
Use BatchEntry not CommitmentProof, to avoid recursion


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exist | [CompressedExistenceProof](#cosmos-ics23-v1-CompressedExistenceProof) |  |  |
| nonexist | [CompressedNonExistenceProof](#cosmos-ics23-v1-CompressedNonExistenceProof) |  |  |






<a name="cosmos-ics23-v1-CompressedBatchProof"></a>

### CompressedBatchProof



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entries | [CompressedBatchEntry](#cosmos-ics23-v1-CompressedBatchEntry) | repeated |  |
| lookup_inners | [InnerOp](#cosmos-ics23-v1-InnerOp) | repeated |  |






<a name="cosmos-ics23-v1-CompressedExistenceProof"></a>

### CompressedExistenceProof



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| leaf | [LeafOp](#cosmos-ics23-v1-LeafOp) |  |  |
| path | [int32](#int32) | repeated | these are indexes into the lookup_inners table in CompressedBatchProof |






<a name="cosmos-ics23-v1-CompressedNonExistenceProof"></a>

### CompressedNonExistenceProof



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | TODO: remove this as unnecessary??? we prove a range |
| left | [CompressedExistenceProof](#cosmos-ics23-v1-CompressedExistenceProof) |  |  |
| right | [CompressedExistenceProof](#cosmos-ics23-v1-CompressedExistenceProof) |  |  |






<a name="cosmos-ics23-v1-ExistenceProof"></a>

### ExistenceProof
ExistenceProof takes a key and a value and a set of steps to perform on it.
The result of peforming all these steps will provide a &#34;root hash&#34;, which can
be compared to the value in a header.

Since it is computationally infeasible to produce a hash collission for any of the used
cryptographic hash functions, if someone can provide a series of operations to transform
a given key and value into a root hash that matches some trusted root, these key and values
must be in the referenced merkle tree.

The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
which should be controlled by a spec. Eg. with lengthOp as NONE,
prefix = FOO, key = BAR, value = CHOICE
and
prefix = F, key = OOBAR, value = CHOICE
would produce the same value.

With LengthOp this is tricker but not impossible. Which is why the &#34;leafPrefixEqual&#34; field
in the ProofSpec is valuable to prevent this mutability. And why all trees should
length-prefix the data before hashing it.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  |  |
| value | [bytes](#bytes) |  |  |
| leaf | [LeafOp](#cosmos-ics23-v1-LeafOp) |  |  |
| path | [InnerOp](#cosmos-ics23-v1-InnerOp) | repeated |  |






<a name="cosmos-ics23-v1-InnerOp"></a>

### InnerOp
InnerOp represents a merkle-proof step that is not a leaf.
It represents concatenating two children and hashing them to provide the next result.

The result of the previous step is passed in, so the signature of this op is:
innerOp(child) -&gt; output

The result of applying InnerOp should be:
output = op.hash(op.prefix || child || op.suffix)

where the || operator is concatenation of binary data,
and child is the result of hashing all the tree below this step.

Any special data, like prepending child with the length, or prepending the entire operation with
some value to differentiate from leaf nodes, should be included in prefix and suffix.
If either of prefix or suffix is empty, we just treat it as an empty string


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [HashOp](#cosmos-ics23-v1-HashOp) |  |  |
| prefix | [bytes](#bytes) |  |  |
| suffix | [bytes](#bytes) |  |  |






<a name="cosmos-ics23-v1-InnerSpec"></a>

### InnerSpec
InnerSpec contains all store-specific structure info to determine if two proofs from a
given store are neighbors.

This enables:

isLeftMost(spec: InnerSpec, op: InnerOp)
isRightMost(spec: InnerSpec, op: InnerOp)
isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| child_order | [int32](#int32) | repeated | Child order is the ordering of the children node, must count from 0 iavl tree is [0, 1] (left then right) merk is [0, 2, 1] (left, right, here) |
| child_size | [int32](#int32) |  |  |
| min_prefix_length | [int32](#int32) |  |  |
| max_prefix_length | [int32](#int32) |  |  |
| empty_child | [bytes](#bytes) |  | empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) |
| hash | [HashOp](#cosmos-ics23-v1-HashOp) |  | hash is the algorithm that must be used for each InnerOp |






<a name="cosmos-ics23-v1-LeafOp"></a>

### LeafOp
LeafOp represents the raw key-value data we wish to prove, and
must be flexible to represent the internal transformation from
the original key-value pairs into the basis hash, for many existing
merkle trees.

key and value are passed in. So that the signature of this operation is:
leafOp(key, value) -&gt; output

To process this, first prehash the keys and values if needed (ANY means no hash in this case):
hkey = prehashKey(key)
hvalue = prehashValue(value)

Then combine the bytes, and hash it
output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [HashOp](#cosmos-ics23-v1-HashOp) |  |  |
| prehash_key | [HashOp](#cosmos-ics23-v1-HashOp) |  |  |
| prehash_value | [HashOp](#cosmos-ics23-v1-HashOp) |  |  |
| length | [LengthOp](#cosmos-ics23-v1-LengthOp) |  |  |
| prefix | [bytes](#bytes) |  | prefix is a fixed bytes that may optionally be included at the beginning to differentiate a leaf node from an inner node. |






<a name="cosmos-ics23-v1-NonExistenceProof"></a>

### NonExistenceProof
NonExistenceProof takes a proof of two neighbors, one left of the desired key,
one right of the desired key. If both proofs are valid AND they are neighbors,
then there is no valid proof for the given key.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [bytes](#bytes) |  | TODO: remove this as unnecessary??? we prove a range |
| left | [ExistenceProof](#cosmos-ics23-v1-ExistenceProof) |  |  |
| right | [ExistenceProof](#cosmos-ics23-v1-ExistenceProof) |  |  |






<a name="cosmos-ics23-v1-ProofSpec"></a>

### ProofSpec
ProofSpec defines what the expected parameters are for a given proof type.
This can be stored in the client and used to validate any incoming proofs.

verify(ProofSpec, Proof) -&gt; Proof | Error

As demonstrated in tests, if we don&#39;t fix the algorithm used to calculate the
LeafHash for a given tree, there are many possible key-value pairs that can
generate a given hash (by interpretting the preimage differently).
We need this for proper security, requires client knows a priori what
tree format server uses. But not in code, rather a configuration object.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| leaf_spec | [LeafOp](#cosmos-ics23-v1-LeafOp) |  | any field in the ExistenceProof must be the same as in this spec. except Prefix, which is just the first bytes of prefix (spec can be longer) |
| inner_spec | [InnerSpec](#cosmos-ics23-v1-InnerSpec) |  |  |
| max_depth | [int32](#int32) |  | max_depth (if &gt; 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries) |
| min_depth | [int32](#int32) |  | min_depth (if &gt; 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) |





 


<a name="cosmos-ics23-v1-HashOp"></a>

### HashOp


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_HASH | 0 | NO_HASH is the default if no data passed. Note this is an illegal argument some places. |
| SHA256 | 1 |  |
| SHA512 | 2 |  |
| KECCAK | 3 |  |
| RIPEMD160 | 4 |  |
| BITCOIN | 5 | ripemd160(sha256(x)) |
| SHA512_256 | 6 |  |



<a name="cosmos-ics23-v1-LengthOp"></a>

### LengthOp
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it&#39;s own encoded length)

| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_PREFIX | 0 | NO_PREFIX don&#39;t include any length info |
| VAR_PROTO | 1 | VAR_PROTO uses protobuf (and go-amino) varint encoding of the length |
| VAR_RLP | 2 | VAR_RLP uses rlp int encoding of the length |
| FIXED32_BIG | 3 | FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer |
| FIXED32_LITTLE | 4 | FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer |
| FIXED64_BIG | 5 | FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer |
| FIXED64_LITTLE | 6 | FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer |
| REQUIRE_32_BYTES | 7 | REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) |
| REQUIRE_64_BYTES | 8 | REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) |


 

 

 



<a name="ibc_core_commitment_v1_commitment-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/commitment/v1/commitment.proto



<a name="ibc-core-commitment-v1-MerklePrefix"></a>

### MerklePrefix
MerklePrefix is merkle path prefixed to the key.
The constructed key from the Path and the key will be append(Path.KeyPath,
append(Path.KeyPrefix, key...))


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_prefix | [bytes](#bytes) |  |  |






<a name="ibc-core-commitment-v1-MerkleProof"></a>

### MerkleProof
MerkleProof is a wrapper type over a chain of CommitmentProofs.
It demonstrates membership or non-membership for an element or set of
elements, verifiable in conjunction with a known commitment root. Proofs
should be succinct.
MerkleProofs are ordered from leaf-to-root


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proofs | [cosmos.ics23.v1.CommitmentProof](#cosmos-ics23-v1-CommitmentProof) | repeated |  |






<a name="ibc-core-commitment-v1-MerkleRoot"></a>

### MerkleRoot
MerkleRoot defines a merkle root hash.
In the Cosmos SDK, the AppHash of a block header becomes the root.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  |  |





 

 

 

 



<a name="ibc_core_connection_v1_connection-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/connection.proto



<a name="ibc-core-connection-v1-ClientPaths"></a>

### ClientPaths
ClientPaths define all the connection paths for a client state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| paths | [string](#string) | repeated | list of connection paths |






<a name="ibc-core-connection-v1-ConnectionEnd"></a>

### ConnectionEnd
ConnectionEnd defines a stateful object on a chain connected to another
separate one.
NOTE: there must only be 2 defined ConnectionEnds to establish
a connection between two chains.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client associated with this connection. |
| versions | [Version](#ibc-core-connection-v1-Version) | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection. |
| state | [State](#ibc-core-connection-v1-State) |  | current state of the connection end. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  | counterparty chain associated with this connection. |
| delay_period | [uint64](#uint64) |  | delay period that must pass before a consensus state can be used for packet-verification NOTE: delay period logic is only implemented by some clients. |






<a name="ibc-core-connection-v1-ConnectionPaths"></a>

### ConnectionPaths
ConnectionPaths define all the connection paths for a given client state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client state unique identifier |
| paths | [string](#string) | repeated | list of connection paths |






<a name="ibc-core-connection-v1-Counterparty"></a>

### Counterparty
Counterparty defines the counterparty chain associated with a connection end.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | identifies the client on the counterparty chain associated with a given connection. |
| connection_id | [string](#string) |  | identifies the connection end on the counterparty chain associated with a given connection. |
| prefix | [ibc.core.commitment.v1.MerklePrefix](#ibc-core-commitment-v1-MerklePrefix) |  | commitment merkle prefix of the counterparty chain. |






<a name="ibc-core-connection-v1-IdentifiedConnection"></a>

### IdentifiedConnection
IdentifiedConnection defines a connection with additional connection
identifier field.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | connection identifier. |
| client_id | [string](#string) |  | client associated with this connection. |
| versions | [Version](#ibc-core-connection-v1-Version) | repeated | IBC version which can be utilised to determine encodings or protocols for channels or packets utilising this connection |
| state | [State](#ibc-core-connection-v1-State) |  | current state of the connection end. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  | counterparty chain associated with this connection. |
| delay_period | [uint64](#uint64) |  | delay period associated with this connection. |






<a name="ibc-core-connection-v1-Params"></a>

### Params
Params defines the set of Connection parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_expected_time_per_block | [uint64](#uint64) |  | maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the largest amount of time that the chain might reasonably take to produce the next block under normal operating conditions. A safe choice is 3-5x the expected time per block. |






<a name="ibc-core-connection-v1-Version"></a>

### Version
Version defines the versioning scheme used to negotiate the IBC version in
the connection handshake.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | unique version identifier |
| features | [string](#string) | repeated | list of features compatible with the specified identifier |





 


<a name="ibc-core-connection-v1-State"></a>

### State
State defines if a connection is in one of the following states:
INIT, TRYOPEN, OPEN or UNINITIALIZED.

| Name | Number | Description |
| ---- | ------ | ----------- |
| STATE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| STATE_INIT | 1 | A connection end has just started the opening handshake. |
| STATE_TRYOPEN | 2 | A connection end has acknowledged the handshake step on the counterparty chain. |
| STATE_OPEN | 3 | A connection end has completed the handshake. |


 

 

 



<a name="ibc_core_connection_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/genesis.proto



<a name="ibc-core-connection-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc connection submodule&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connections | [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection) | repeated |  |
| client_connection_paths | [ConnectionPaths](#ibc-core-connection-v1-ConnectionPaths) | repeated |  |
| next_connection_sequence | [uint64](#uint64) |  | the sequence for the next generated connection identifier |
| params | [Params](#ibc-core-connection-v1-Params) |  |  |





 

 

 

 



<a name="ibc_core_connection_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/query.proto



<a name="ibc-core-connection-v1-QueryClientConnectionsRequest"></a>

### QueryClientConnectionsRequest
QueryClientConnectionsRequest is the request type for the
Query/ClientConnections RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | client identifier associated with a connection |






<a name="ibc-core-connection-v1-QueryClientConnectionsResponse"></a>

### QueryClientConnectionsResponse
QueryClientConnectionsResponse is the response type for the
Query/ClientConnections RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_paths | [string](#string) | repeated | slice of all the connection paths associated with a client. |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was generated |






<a name="ibc-core-connection-v1-QueryConnectionClientStateRequest"></a>

### QueryConnectionClientStateRequest
QueryConnectionClientStateRequest is the request type for the
Query/ConnectionClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection identifier |






<a name="ibc-core-connection-v1-QueryConnectionClientStateResponse"></a>

### QueryConnectionClientStateResponse
QueryConnectionClientStateResponse is the response type for the
Query/ConnectionClientState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identified_client_state | [ibc.core.client.v1.IdentifiedClientState](#ibc-core-client-v1-IdentifiedClientState) |  | client state associated with the channel |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionConsensusStateRequest"></a>

### QueryConnectionConsensusStateRequest
QueryConnectionConsensusStateRequest is the request type for the
Query/ConnectionConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection identifier |
| revision_number | [uint64](#uint64) |  |  |
| revision_height | [uint64](#uint64) |  |  |






<a name="ibc-core-connection-v1-QueryConnectionConsensusStateResponse"></a>

### QueryConnectionConsensusStateResponse
QueryConnectionConsensusStateResponse is the response type for the
Query/ConnectionConsensusState RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  | consensus state associated with the channel |
| client_id | [string](#string) |  | client ID associated with the consensus state |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionParamsRequest"></a>

### QueryConnectionParamsRequest
QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method.






<a name="ibc-core-connection-v1-QueryConnectionParamsResponse"></a>

### QueryConnectionParamsResponse
QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#ibc-core-connection-v1-Params) |  | params defines the parameters of the module. |






<a name="ibc-core-connection-v1-QueryConnectionRequest"></a>

### QueryConnectionRequest
QueryConnectionRequest is the request type for the Query/Connection RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  | connection unique identifier |






<a name="ibc-core-connection-v1-QueryConnectionResponse"></a>

### QueryConnectionResponse
QueryConnectionResponse is the response type for the Query/Connection RPC
method. Besides the connection end, it includes a proof and the height from
which the proof was retrieved.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection | [ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd) |  | connection associated with the request identifier |
| proof | [bytes](#bytes) |  | merkle proof of existence |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | height at which the proof was retrieved |






<a name="ibc-core-connection-v1-QueryConnectionsRequest"></a>

### QueryConnectionsRequest
QueryConnectionsRequest is the request type for the Query/Connections RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  |  |






<a name="ibc-core-connection-v1-QueryConnectionsResponse"></a>

### QueryConnectionsResponse
QueryConnectionsResponse is the response type for the Query/Connections RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connections | [IdentifiedConnection](#ibc-core-connection-v1-IdentifiedConnection) | repeated | list of stored connections of the chain. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination response |
| height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | query block height |





 

 

 


<a name="ibc-core-connection-v1-Query"></a>

### Query
Query provides defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Connection | [QueryConnectionRequest](#ibc-core-connection-v1-QueryConnectionRequest) | [QueryConnectionResponse](#ibc-core-connection-v1-QueryConnectionResponse) | Connection queries an IBC connection end. |
| Connections | [QueryConnectionsRequest](#ibc-core-connection-v1-QueryConnectionsRequest) | [QueryConnectionsResponse](#ibc-core-connection-v1-QueryConnectionsResponse) | Connections queries all the IBC connections of a chain. |
| ClientConnections | [QueryClientConnectionsRequest](#ibc-core-connection-v1-QueryClientConnectionsRequest) | [QueryClientConnectionsResponse](#ibc-core-connection-v1-QueryClientConnectionsResponse) | ClientConnections queries the connection paths associated with a client state. |
| ConnectionClientState | [QueryConnectionClientStateRequest](#ibc-core-connection-v1-QueryConnectionClientStateRequest) | [QueryConnectionClientStateResponse](#ibc-core-connection-v1-QueryConnectionClientStateResponse) | ConnectionClientState queries the client state associated with the connection. |
| ConnectionConsensusState | [QueryConnectionConsensusStateRequest](#ibc-core-connection-v1-QueryConnectionConsensusStateRequest) | [QueryConnectionConsensusStateResponse](#ibc-core-connection-v1-QueryConnectionConsensusStateResponse) | ConnectionConsensusState queries the consensus state associated with the connection. |
| ConnectionParams | [QueryConnectionParamsRequest](#ibc-core-connection-v1-QueryConnectionParamsRequest) | [QueryConnectionParamsResponse](#ibc-core-connection-v1-QueryConnectionParamsResponse) | ConnectionParams queries all parameters of the ibc connection submodule. |

 



<a name="ibc_core_connection_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/connection/v1/tx.proto



<a name="ibc-core-connection-v1-MsgConnectionOpenAck"></a>

### MsgConnectionOpenAck
MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
acknowledge the change of connection state to TRYOPEN on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| counterparty_connection_id | [string](#string) |  |  |
| version | [Version](#ibc-core-connection-v1-Version) |  |  |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| proof_try | [bytes](#bytes) |  | proof of the initialization the connection on Chain B: `UNINITIALIZED -&gt; TRYOPEN` |
| proof_client | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_consensus | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| consensus_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | **Deprecated.** Deprecated: this field is unused. |
| signer | [string](#string) |  |  |
| host_consensus_state_proof | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |






<a name="ibc-core-connection-v1-MsgConnectionOpenAckResponse"></a>

### MsgConnectionOpenAckResponse
MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.






<a name="ibc-core-connection-v1-MsgConnectionOpenConfirm"></a>

### MsgConnectionOpenConfirm
MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
acknowledge the change of connection state to OPEN on Chain A.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| connection_id | [string](#string) |  |  |
| proof_ack | [bytes](#bytes) |  | proof for the change of the connection state on Chain A: `INIT -&gt; OPEN` |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-connection-v1-MsgConnectionOpenConfirmResponse"></a>

### MsgConnectionOpenConfirmResponse
MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
response type.






<a name="ibc-core-connection-v1-MsgConnectionOpenInit"></a>

### MsgConnectionOpenInit
MsgConnectionOpenInit defines the msg sent by an account on Chain A to
initialize a connection with Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  |  |
| version | [Version](#ibc-core-connection-v1-Version) |  |  |
| delay_period | [uint64](#uint64) |  |  |
| signer | [string](#string) |  |  |






<a name="ibc-core-connection-v1-MsgConnectionOpenInitResponse"></a>

### MsgConnectionOpenInitResponse
MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
type.






<a name="ibc-core-connection-v1-MsgConnectionOpenTry"></a>

### MsgConnectionOpenTry
MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
connection on Chain B.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| previous_connection_id | [string](#string) |  | **Deprecated.** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  | **Deprecated.** Deprecated: this field is unused. |
| counterparty | [Counterparty](#ibc-core-connection-v1-Counterparty) |  |  |
| delay_period | [uint64](#uint64) |  |  |
| counterparty_versions | [Version](#ibc-core-connection-v1-Version) | repeated |  |
| proof_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| proof_init | [bytes](#bytes) |  | proof of the initialization the connection on Chain A: `UNINITIALIZED -&gt; INIT` |
| proof_client | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| proof_consensus | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |
| consensus_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | **Deprecated.** Deprecated: this field is unused. |
| signer | [string](#string) |  |  |
| host_consensus_state_proof | [bytes](#bytes) |  | **Deprecated.** Deprecated: this field is unused. |






<a name="ibc-core-connection-v1-MsgConnectionOpenTryResponse"></a>

### MsgConnectionOpenTryResponse
MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.






<a name="ibc-core-connection-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams defines the sdk.Msg type to update the connection parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| params | [Params](#ibc-core-connection-v1-Params) |  | params defines the connection parameters to update.

NOTE: All parameters must be supplied. |






<a name="ibc-core-connection-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the MsgUpdateParams response type.





 

 

 


<a name="ibc-core-connection-v1-Msg"></a>

### Msg
Msg defines the ibc/connection Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ConnectionOpenInit | [MsgConnectionOpenInit](#ibc-core-connection-v1-MsgConnectionOpenInit) | [MsgConnectionOpenInitResponse](#ibc-core-connection-v1-MsgConnectionOpenInitResponse) | ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. |
| ConnectionOpenTry | [MsgConnectionOpenTry](#ibc-core-connection-v1-MsgConnectionOpenTry) | [MsgConnectionOpenTryResponse](#ibc-core-connection-v1-MsgConnectionOpenTryResponse) | ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. |
| ConnectionOpenAck | [MsgConnectionOpenAck](#ibc-core-connection-v1-MsgConnectionOpenAck) | [MsgConnectionOpenAckResponse](#ibc-core-connection-v1-MsgConnectionOpenAckResponse) | ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. |
| ConnectionOpenConfirm | [MsgConnectionOpenConfirm](#ibc-core-connection-v1-MsgConnectionOpenConfirm) | [MsgConnectionOpenConfirmResponse](#ibc-core-connection-v1-MsgConnectionOpenConfirmResponse) | ConnectionOpenConfirm defines a rpc handler method for MsgConnectionOpenConfirm. |
| UpdateConnectionParams | [MsgUpdateParams](#ibc-core-connection-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#ibc-core-connection-v1-MsgUpdateParamsResponse) | UpdateConnectionParams defines a rpc handler method for MsgUpdateParams. |

 



<a name="ibc_core_types_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/core/types/v1/genesis.proto



<a name="ibc-core-types-v1-GenesisState"></a>

### GenesisState
GenesisState defines the ibc module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_genesis | [ibc.core.client.v1.GenesisState](#ibc-core-client-v1-GenesisState) |  | ICS002 - Clients genesis state |
| connection_genesis | [ibc.core.connection.v1.GenesisState](#ibc-core-connection-v1-GenesisState) |  | ICS003 - Connections genesis state |
| channel_genesis | [ibc.core.channel.v1.GenesisState](#ibc-core-channel-v1-GenesisState) |  | ICS004 - Channel genesis state |
| client_v2_genesis | [ibc.core.client.v2.GenesisState](#ibc-core-client-v2-GenesisState) |  | ICS002 - Clients/v2 genesis state |
| channel_v2_genesis | [ibc.core.channel.v2.GenesisState](#ibc-core-channel-v2-GenesisState) |  | ICS004 - Channel/v2 genesis state |





 

 

 

 



<a name="ibc_lightclients_attestations_v1_attestations-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/attestations/v1/attestations.proto



<a name="ibc-lightclients-attestations-v1-AttestationProof"></a>

### AttestationProof
AttestationProof is used for client updates and membership verification.
All attestor signatures cover sha256(attestationData).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| attestation_data | [bytes](#bytes) |  | the attestation data that was signed (ABI-encoded StateAttestation or PacketAttestation) |
| signatures | [bytes](#bytes) | repeated | array of 65-byte ECDSA signatures (r||s||v) |






<a name="ibc-lightclients-attestations-v1-ClientState"></a>

### ClientState
ClientState defines an attestor-based light client that tracks the current
consensus state and if the client is frozen.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| attestor_addresses | [string](#string) | repeated | trusted attestor set (EOA addresses) |
| min_required_sigs | [uint32](#uint32) |  | quorum threshold (minimum number of unique attestor signatures required) |
| latest_height | [uint64](#uint64) |  | highest height that has been trusted |
| is_frozen | [bool](#bool) |  | when true, all verification and updates MUST fail |






<a name="ibc-lightclients-attestations-v1-ConsensusState"></a>

### ConsensusState
ConsensusState defines an attestor consensus state. The timestamp of a
consensus state is stored per height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [uint64](#uint64) |  | trusted UNIX timestamp (nanoseconds) for the height |





 

 

 

 



<a name="ibc_lightclients_solomachine_v2_solomachine-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/solomachine/v2/solomachine.proto



<a name="ibc-lightclients-solomachine-v2-ChannelStateData"></a>

### ChannelStateData
ChannelStateData returns the SignBytes data for channel state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| channel | [ibc.core.channel.v1.Channel](#ibc-core-channel-v1-Channel) |  |  |






<a name="ibc-lightclients-solomachine-v2-ClientState"></a>

### ClientState
ClientState defines a solo machine client that tracks the current consensus
state and if the client is frozen.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | latest sequence of the client state |
| is_frozen | [bool](#bool) |  | frozen sequence of the solo machine |
| consensus_state | [ConsensusState](#ibc-lightclients-solomachine-v2-ConsensusState) |  |  |
| allow_update_after_proposal | [bool](#bool) |  | when set to true, will allow governance to update a solo machine client. The client will be unfrozen if it is frozen. |






<a name="ibc-lightclients-solomachine-v2-ClientStateData"></a>

### ClientStateData
ClientStateData returns the SignBytes data for client state verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| client_state | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConnectionStateData"></a>

### ConnectionStateData
ConnectionStateData returns the SignBytes data for connection state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| connection | [ibc.core.connection.v1.ConnectionEnd](#ibc-core-connection-v1-ConnectionEnd) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConsensusState"></a>

### ConsensusState
ConsensusState defines a solo machine consensus state. The sequence of a
consensus state is contained in the &#34;height&#34; key used in storing the
consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public key of the solo machine |
| diversifier | [string](#string) |  | diversifier allows the same public key to be reused across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-ConsensusStateData"></a>

### ConsensusStateData
ConsensusStateData returns the SignBytes data for consensus state
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| consensus_state | [google.protobuf.Any](#google-protobuf-Any) |  |  |






<a name="ibc-lightclients-solomachine-v2-Header"></a>

### Header
Header defines a solo machine consensus header


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | sequence to update solo machine public key at |
| timestamp | [uint64](#uint64) |  |  |
| signature | [bytes](#bytes) |  |  |
| new_public_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| new_diversifier | [string](#string) |  |  |






<a name="ibc-lightclients-solomachine-v2-HeaderData"></a>

### HeaderData
HeaderData returns the SignBytes data for update verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | header public key |
| new_diversifier | [string](#string) |  | header diversifier |






<a name="ibc-lightclients-solomachine-v2-Misbehaviour"></a>

### Misbehaviour
Misbehaviour defines misbehaviour for a solo machine which consists
of a sequence and two signatures over different messages at that sequence.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  |  |
| sequence | [uint64](#uint64) |  |  |
| signature_one | [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData) |  |  |
| signature_two | [SignatureAndData](#ibc-lightclients-solomachine-v2-SignatureAndData) |  |  |






<a name="ibc-lightclients-solomachine-v2-NextSequenceRecvData"></a>

### NextSequenceRecvData
NextSequenceRecvData returns the SignBytes data for verification of the next
sequence to be received.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| next_seq_recv | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketAcknowledgementData"></a>

### PacketAcknowledgementData
PacketAcknowledgementData returns the SignBytes data for acknowledgement
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| acknowledgement | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketCommitmentData"></a>

### PacketCommitmentData
PacketCommitmentData returns the SignBytes data for packet commitment
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |
| commitment | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-PacketReceiptAbsenceData"></a>

### PacketReceiptAbsenceData
PacketReceiptAbsenceData returns the SignBytes data for
packet receipt absence verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-solomachine-v2-SignBytes"></a>

### SignBytes
SignBytes defines the signed bytes used for signature verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |
| timestamp | [uint64](#uint64) |  |  |
| diversifier | [string](#string) |  |  |
| data_type | [DataType](#ibc-lightclients-solomachine-v2-DataType) |  | type of the data used |
| data | [bytes](#bytes) |  | marshaled data |






<a name="ibc-lightclients-solomachine-v2-SignatureAndData"></a>

### SignatureAndData
SignatureAndData contains a signature and the data signed over to create that
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| data_type | [DataType](#ibc-lightclients-solomachine-v2-DataType) |  |  |
| data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v2-TimestampedSignatureData"></a>

### TimestampedSignatureData
TimestampedSignatureData contains the signature data and the timestamp of the
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature_data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |





 


<a name="ibc-lightclients-solomachine-v2-DataType"></a>

### DataType
DataType defines the type of solo machine proof being created. This is done
to preserve uniqueness of different data sign byte encodings.

| Name | Number | Description |
| ---- | ------ | ----------- |
| DATA_TYPE_UNINITIALIZED_UNSPECIFIED | 0 | Default State |
| DATA_TYPE_CLIENT_STATE | 1 | Data type for client state verification |
| DATA_TYPE_CONSENSUS_STATE | 2 | Data type for consensus state verification |
| DATA_TYPE_CONNECTION_STATE | 3 | Data type for connection state verification |
| DATA_TYPE_CHANNEL_STATE | 4 | Data type for channel state verification |
| DATA_TYPE_PACKET_COMMITMENT | 5 | Data type for packet commitment verification |
| DATA_TYPE_PACKET_ACKNOWLEDGEMENT | 6 | Data type for packet acknowledgement verification |
| DATA_TYPE_PACKET_RECEIPT_ABSENCE | 7 | Data type for packet receipt absence verification |
| DATA_TYPE_NEXT_SEQUENCE_RECV | 8 | Data type for next sequence recv verification |
| DATA_TYPE_HEADER | 9 | Data type for header verification |


 

 

 



<a name="ibc_lightclients_solomachine_v3_solomachine-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/solomachine/v3/solomachine.proto



<a name="ibc-lightclients-solomachine-v3-ClientState"></a>

### ClientState
ClientState defines a solo machine client that tracks the current consensus
state and if the client is frozen.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | latest sequence of the client state |
| is_frozen | [bool](#bool) |  | frozen sequence of the solo machine |
| consensus_state | [ConsensusState](#ibc-lightclients-solomachine-v3-ConsensusState) |  |  |






<a name="ibc-lightclients-solomachine-v3-ConsensusState"></a>

### ConsensusState
ConsensusState defines a solo machine consensus state. The sequence of a
consensus state is contained in the &#34;height&#34; key used in storing the
consensus state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| public_key | [google.protobuf.Any](#google-protobuf-Any) |  | public key of the solo machine |
| diversifier | [string](#string) |  | diversifier allows the same public key to be reused across different solo machine clients (potentially on different chains) without being considered misbehaviour. |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v3-Header"></a>

### Header
Header defines a solo machine consensus header


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [uint64](#uint64) |  |  |
| signature | [bytes](#bytes) |  |  |
| new_public_key | [google.protobuf.Any](#google-protobuf-Any) |  |  |
| new_diversifier | [string](#string) |  |  |






<a name="ibc-lightclients-solomachine-v3-HeaderData"></a>

### HeaderData
HeaderData returns the SignBytes data for update verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_pub_key | [google.protobuf.Any](#google-protobuf-Any) |  | header public key |
| new_diversifier | [string](#string) |  | header diversifier |






<a name="ibc-lightclients-solomachine-v3-Misbehaviour"></a>

### Misbehaviour
Misbehaviour defines misbehaviour for a solo machine which consists
of a sequence and two signatures over different messages at that sequence.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  |  |
| signature_one | [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData) |  |  |
| signature_two | [SignatureAndData](#ibc-lightclients-solomachine-v3-SignatureAndData) |  |  |






<a name="ibc-lightclients-solomachine-v3-SignBytes"></a>

### SignBytes
SignBytes defines the signed bytes used for signature verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sequence | [uint64](#uint64) |  | the sequence number |
| timestamp | [uint64](#uint64) |  | the proof timestamp |
| diversifier | [string](#string) |  | the public key diversifier |
| path | [bytes](#bytes) |  | the standardised path bytes |
| data | [bytes](#bytes) |  | the marshaled data bytes |






<a name="ibc-lightclients-solomachine-v3-SignatureAndData"></a>

### SignatureAndData
SignatureAndData contains a signature and the data signed over to create that
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature | [bytes](#bytes) |  |  |
| path | [bytes](#bytes) |  |  |
| data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-solomachine-v3-TimestampedSignatureData"></a>

### TimestampedSignatureData
TimestampedSignatureData contains the signature data and the timestamp of the
signature.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signature_data | [bytes](#bytes) |  |  |
| timestamp | [uint64](#uint64) |  |  |





 

 

 

 



<a name="ibc_lightclients_tendermint_v1_tendermint-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/tendermint/v1/tendermint.proto



<a name="ibc-lightclients-tendermint-v1-ClientState"></a>

### ClientState
ClientState from Tendermint tracks the current validator set, latest height,
and a possible frozen height.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chain_id | [string](#string) |  |  |
| trust_level | [Fraction](#ibc-lightclients-tendermint-v1-Fraction) |  |  |
| trusting_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration of the period since the LatestTimestamp during which the submitted headers are valid for upgrade |
| unbonding_period | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration of the staking unbonding period |
| max_clock_drift | [google.protobuf.Duration](#google-protobuf-Duration) |  | defines how much new (untrusted) header&#39;s Time can drift into the future. |
| frozen_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Block height when the client was frozen due to a misbehaviour |
| latest_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  | Latest height the client was updated to |
| proof_specs | [cosmos.ics23.v1.ProofSpec](#cosmos-ics23-v1-ProofSpec) | repeated | Proof specifications used in verifying counterparty state |
| upgrade_path | [string](#string) | repeated | Path at which next upgraded client will be committed. Each element corresponds to the key for a single CommitmentProof in the chained proof. NOTE: ClientState must stored under `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using the default upgrade module, upgrade_path should be []string{&#34;upgrade&#34;, &#34;upgradedIBCState&#34;}` |
| allow_update_after_expiry | [bool](#bool) |  | **Deprecated.** allow_update_after_expiry is deprecated |
| allow_update_after_misbehaviour | [bool](#bool) |  | **Deprecated.** allow_update_after_misbehaviour is deprecated |






<a name="ibc-lightclients-tendermint-v1-ConsensusState"></a>

### ConsensusState
ConsensusState defines the consensus state from Tendermint.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | timestamp that corresponds to the block height in which the ConsensusState was stored. |
| root | [ibc.core.commitment.v1.MerkleRoot](#ibc-core-commitment-v1-MerkleRoot) |  | commitment root (i.e app hash) |
| next_validators_hash | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-tendermint-v1-Fraction"></a>

### Fraction
Fraction defines the protobuf message type for tmmath.Fraction that only
supports positive values.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| numerator | [uint64](#uint64) |  |  |
| denominator | [uint64](#uint64) |  |  |






<a name="ibc-lightclients-tendermint-v1-Header"></a>

### Header
Header defines the Tendermint client consensus Header.
It encapsulates all the information necessary to update from a trusted
Tendermint ConsensusState. The inclusion of TrustedHeight and
TrustedValidators allows this update to process correctly, so long as the
ConsensusState for the TrustedHeight exists, this removes race conditions
among relayers The SignedHeader and ValidatorSet are the new untrusted update
fields for the client. The TrustedHeight is the height of a stored
ConsensusState on the client that will be used to verify the new untrusted
header. The Trusted ConsensusState must be within the unbonding period of
current time in order to correctly verify, and the TrustedValidators must
hash to TrustedConsensusState.NextValidatorsHash since that is the last
trusted validator set at the TrustedHeight.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signed_header | [tendermint.types.SignedHeader](#tendermint-types-SignedHeader) |  |  |
| validator_set | [tendermint.types.ValidatorSet](#tendermint-types-ValidatorSet) |  |  |
| trusted_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |
| trusted_validators | [tendermint.types.ValidatorSet](#tendermint-types-ValidatorSet) |  |  |






<a name="ibc-lightclients-tendermint-v1-Misbehaviour"></a>

### Misbehaviour
Misbehaviour is a wrapper over two conflicting Headers
that implements Misbehaviour interface expected by ICS-02


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_id | [string](#string) |  | **Deprecated.** ClientID is deprecated |
| header_1 | [Header](#ibc-lightclients-tendermint-v1-Header) |  |  |
| header_2 | [Header](#ibc-lightclients-tendermint-v1-Header) |  |  |





 

 

 

 



<a name="ibc_lightclients_wasm_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/genesis.proto



<a name="ibc-lightclients-wasm-v1-Contract"></a>

### Contract
Contract stores contract code


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code_bytes | [bytes](#bytes) |  | contract byte code |






<a name="ibc-lightclients-wasm-v1-GenesisState"></a>

### GenesisState
GenesisState defines 08-wasm&#39;s keeper genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contracts | [Contract](#ibc-lightclients-wasm-v1-Contract) | repeated | uploaded light client wasm contracts |





 

 

 

 



<a name="ibc_lightclients_wasm_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/query.proto



<a name="ibc-lightclients-wasm-v1-QueryChecksumsRequest"></a>

### QueryChecksumsRequest
QueryChecksumsRequest is the request type for the Query/Checksums RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request. |






<a name="ibc-lightclients-wasm-v1-QueryChecksumsResponse"></a>

### QueryChecksumsResponse
QueryChecksumsResponse is the response type for the Query/Checksums RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksums | [string](#string) | repeated | checksums is a list of the hex encoded checksums of all wasm codes stored. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response. |






<a name="ibc-lightclients-wasm-v1-QueryCodeRequest"></a>

### QueryCodeRequest
QueryCodeRequest is the request type for the Query/Code RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksum | [string](#string) |  | checksum is a hex encoded string of the code stored. |






<a name="ibc-lightclients-wasm-v1-QueryCodeResponse"></a>

### QueryCodeResponse
QueryCodeResponse is the response type for the Query/Code RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |





 

 

 


<a name="ibc-lightclients-wasm-v1-Query"></a>

### Query
Query service for wasm module

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Checksums | [QueryChecksumsRequest](#ibc-lightclients-wasm-v1-QueryChecksumsRequest) | [QueryChecksumsResponse](#ibc-lightclients-wasm-v1-QueryChecksumsResponse) | Get all Wasm checksums |
| Code | [QueryCodeRequest](#ibc-lightclients-wasm-v1-QueryCodeRequest) | [QueryCodeResponse](#ibc-lightclients-wasm-v1-QueryCodeResponse) | Get Wasm code for given checksum |

 



<a name="ibc_lightclients_wasm_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/tx.proto



<a name="ibc-lightclients-wasm-v1-MsgMigrateContract"></a>

### MsgMigrateContract
MsgMigrateContract defines the request type for the MigrateContract rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| client_id | [string](#string) |  | the client id of the contract |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash of the new wasm byte code for the contract |
| msg | [bytes](#bytes) |  | the json encoded message to be passed to the contract on migration |






<a name="ibc-lightclients-wasm-v1-MsgMigrateContractResponse"></a>

### MsgMigrateContractResponse
MsgMigrateContractResponse defines the response type for the MigrateContract rpc






<a name="ibc-lightclients-wasm-v1-MsgRemoveChecksum"></a>

### MsgRemoveChecksum
MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash to be removed from the store |






<a name="ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse"></a>

### MsgRemoveChecksumResponse
MsgStoreChecksumResponse defines the response type for the StoreCode rpc






<a name="ibc-lightclients-wasm-v1-MsgStoreCode"></a>

### MsgStoreCode
MsgStoreCode defines the request type for the StoreCode rpc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer address |
| wasm_byte_code | [bytes](#bytes) |  | wasm byte code of light client contract. It can be raw or gzip compressed |






<a name="ibc-lightclients-wasm-v1-MsgStoreCodeResponse"></a>

### MsgStoreCodeResponse
MsgStoreCodeResponse defines the response type for the StoreCode rpc


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| checksum | [bytes](#bytes) |  | checksum is the sha256 hash of the stored code |





 

 

 


<a name="ibc-lightclients-wasm-v1-Msg"></a>

### Msg
Msg defines the ibc/08-wasm Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| StoreCode | [MsgStoreCode](#ibc-lightclients-wasm-v1-MsgStoreCode) | [MsgStoreCodeResponse](#ibc-lightclients-wasm-v1-MsgStoreCodeResponse) | StoreCode defines a rpc handler method for MsgStoreCode. |
| RemoveChecksum | [MsgRemoveChecksum](#ibc-lightclients-wasm-v1-MsgRemoveChecksum) | [MsgRemoveChecksumResponse](#ibc-lightclients-wasm-v1-MsgRemoveChecksumResponse) | RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. |
| MigrateContract | [MsgMigrateContract](#ibc-lightclients-wasm-v1-MsgMigrateContract) | [MsgMigrateContractResponse](#ibc-lightclients-wasm-v1-MsgMigrateContractResponse) | MigrateContract defines a rpc handler method for MsgMigrateContract. |

 



<a name="ibc_lightclients_wasm_v1_wasm-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ibc/lightclients/wasm/v1/wasm.proto



<a name="ibc-lightclients-wasm-v1-ClientMessage"></a>

### ClientMessage
Wasm light client message (either header(s) or misbehaviour)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  |  |






<a name="ibc-lightclients-wasm-v1-ClientState"></a>

### ClientState
Wasm light client&#39;s Client state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | bytes encoding the client state of the underlying light client implemented as a Wasm contract. |
| checksum | [bytes](#bytes) |  |  |
| latest_height | [ibc.core.client.v1.Height](#ibc-core-client-v1-Height) |  |  |






<a name="ibc-lightclients-wasm-v1-ConsensusState"></a>

### ConsensusState
Wasm light client&#39;s ConsensusState


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | bytes encoding the consensus state of the underlying light client implemented as a Wasm contract. |





 

 

 

 



<a name="osmosis_tokenfactory_v1beta1_authorityMetadata-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## osmosis/tokenfactory/v1beta1/authorityMetadata.proto



<a name="osmosis-tokenfactory-v1beta1-DenomAuthorityMetadata"></a>

### DenomAuthorityMetadata
DenomAuthorityMetadata specifies metadata for addresses that have specific
capabilities over a token factory denom. Right now there is only one Admin
permission, but is planned to be extended to the future.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | Can be empty for no admin, or a valid osmosis address |





 

 

 

 



<a name="osmosis_tokenfactory_v1beta1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## osmosis/tokenfactory/v1beta1/params.proto



<a name="osmosis-tokenfactory-v1beta1-Params"></a>

### Params
Params defines the parameters for the tokenfactory module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom_creation_fee | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated |  |
| denom_creation_gas_consume | [uint64](#uint64) |  | if denom_creation_fee is an empty array, then this field is used to add more gas consumption to the base cost. https://github.com/CosmWasm/token-factory/issues/11 |





 

 

 

 



<a name="osmosis_tokenfactory_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## osmosis/tokenfactory/v1beta1/genesis.proto



<a name="osmosis-tokenfactory-v1beta1-GenesisDenom"></a>

### GenesisDenom
GenesisDenom defines a tokenfactory denom that is defined within genesis
state. The structure contains DenomAuthorityMetadata which defines the
denom&#39;s admin.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |
| authority_metadata | [DenomAuthorityMetadata](#osmosis-tokenfactory-v1beta1-DenomAuthorityMetadata) |  |  |






<a name="osmosis-tokenfactory-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the tokenfactory module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#osmosis-tokenfactory-v1beta1-Params) |  | params defines the parameters of the module. |
| factory_denoms | [GenesisDenom](#osmosis-tokenfactory-v1beta1-GenesisDenom) | repeated |  |





 

 

 

 



<a name="osmosis_tokenfactory_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## osmosis/tokenfactory/v1beta1/query.proto



<a name="osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataRequest"></a>

### QueryDenomAuthorityMetadataRequest
QueryDenomAuthorityMetadataRequest defines the request structure for the
DenomAuthorityMetadata gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denom | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataResponse"></a>

### QueryDenomAuthorityMetadataResponse
QueryDenomAuthorityMetadataResponse defines the response structure for the
DenomAuthorityMetadata gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority_metadata | [DenomAuthorityMetadata](#osmosis-tokenfactory-v1beta1-DenomAuthorityMetadata) |  |  |






<a name="osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminRequest"></a>

### QueryDenomsFromAdminRequest
QueryDenomsFromAdminRequest defines the request structure for the
DenomsFromAdmin gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminResponse"></a>

### QueryDenomsFromAdminResponse
QueryDenomsFromAdminRequest defines the response structure for the
DenomsFromAdmin gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [string](#string) | repeated |  |






<a name="osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorRequest"></a>

### QueryDenomsFromCreatorRequest
QueryDenomsFromCreatorRequest defines the request structure for the
DenomsFromCreator gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| creator | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorResponse"></a>

### QueryDenomsFromCreatorResponse
QueryDenomsFromCreatorRequest defines the response structure for the
DenomsFromCreator gRPC query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| denoms | [string](#string) | repeated |  |






<a name="osmosis-tokenfactory-v1beta1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="osmosis-tokenfactory-v1beta1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#osmosis-tokenfactory-v1beta1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="osmosis-tokenfactory-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#osmosis-tokenfactory-v1beta1-QueryParamsRequest) | [QueryParamsResponse](#osmosis-tokenfactory-v1beta1-QueryParamsResponse) | Params defines a gRPC query method that returns the tokenfactory module&#39;s parameters. |
| DenomAuthorityMetadata | [QueryDenomAuthorityMetadataRequest](#osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataRequest) | [QueryDenomAuthorityMetadataResponse](#osmosis-tokenfactory-v1beta1-QueryDenomAuthorityMetadataResponse) | DenomAuthorityMetadata defines a gRPC query method for fetching DenomAuthorityMetadata for a particular denom. |
| DenomsFromCreator | [QueryDenomsFromCreatorRequest](#osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorRequest) | [QueryDenomsFromCreatorResponse](#osmosis-tokenfactory-v1beta1-QueryDenomsFromCreatorResponse) | DenomsFromCreator defines a gRPC query method for fetching all denominations created by a specific admin/creator. |
| DenomsFromAdmin | [QueryDenomsFromAdminRequest](#osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminRequest) | [QueryDenomsFromAdminResponse](#osmosis-tokenfactory-v1beta1-QueryDenomsFromAdminResponse) | DenomsFromAdmin defines a gRPC query method for fetching all denominations owned by a specific admin. |

 



<a name="osmosis_tokenfactory_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## osmosis/tokenfactory/v1beta1/tx.proto



<a name="osmosis-tokenfactory-v1beta1-MsgBurn"></a>

### MsgBurn
MsgBurn is the sdk.Msg type for allowing an admin account to burn
a token.  For now, we only support burning from the sender account.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| burnFromAddress | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgBurnResponse"></a>

### MsgBurnResponse







<a name="osmosis-tokenfactory-v1beta1-MsgChangeAdmin"></a>

### MsgChangeAdmin
MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
adminship of a denom to a new account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| denom | [string](#string) |  |  |
| new_admin | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgChangeAdminResponse"></a>

### MsgChangeAdminResponse
MsgChangeAdminResponse defines the response structure for an executed
MsgChangeAdmin message.






<a name="osmosis-tokenfactory-v1beta1-MsgCreateDenom"></a>

### MsgCreateDenom
MsgCreateDenom defines the message structure for the CreateDenom gRPC service
method. It allows an account to create a new denom. It requires a sender
address and a sub denomination. The (sender_address, sub_denomination) tuple
must be unique and cannot be re-used.

The resulting denom created is defined as
&lt;factory/{creatorAddress}/{subdenom}&gt;. The resulting denom&#39;s admin is
originally set to be the creator, but this can be changed later. The token
denom does not indicate the current admin.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| subdenom | [string](#string) |  | subdenom can be up to 44 &#34;alphanumeric&#34; characters long. |






<a name="osmosis-tokenfactory-v1beta1-MsgCreateDenomResponse"></a>

### MsgCreateDenomResponse
MsgCreateDenomResponse is the return value of MsgCreateDenom
It returns the full string of the newly created denom


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| new_token_denom | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgForceTransfer"></a>

### MsgForceTransfer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| transferFromAddress | [string](#string) |  |  |
| transferToAddress | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgForceTransferResponse"></a>

### MsgForceTransferResponse







<a name="osmosis-tokenfactory-v1beta1-MsgMint"></a>

### MsgMint
MsgMint is the sdk.Msg type for allowing an admin account to mint
more of a token.  For now, we only support minting to the sender account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) |  |  |
| mintToAddress | [string](#string) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgMintResponse"></a>

### MsgMintResponse







<a name="osmosis-tokenfactory-v1beta1-MsgSetDenomMetadata"></a>

### MsgSetDenomMetadata
MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
the denom&#39;s bank metadata


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  |  |
| metadata | [cosmos.bank.v1beta1.Metadata](#cosmos-bank-v1beta1-Metadata) |  |  |






<a name="osmosis-tokenfactory-v1beta1-MsgSetDenomMetadataResponse"></a>

### MsgSetDenomMetadataResponse
MsgSetDenomMetadataResponse defines the response structure for an executed
MsgSetDenomMetadata message.






<a name="osmosis-tokenfactory-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#osmosis-tokenfactory-v1beta1-Params) |  | params defines the x/mint parameters to update.

NOTE: All parameters must be supplied. |






<a name="osmosis-tokenfactory-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: cosmos-sdk 0.47





 

 

 


<a name="osmosis-tokenfactory-v1beta1-Msg"></a>

### Msg
Msg defines the tokefactory module&#39;s gRPC message service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateDenom | [MsgCreateDenom](#osmosis-tokenfactory-v1beta1-MsgCreateDenom) | [MsgCreateDenomResponse](#osmosis-tokenfactory-v1beta1-MsgCreateDenomResponse) |  |
| Mint | [MsgMint](#osmosis-tokenfactory-v1beta1-MsgMint) | [MsgMintResponse](#osmosis-tokenfactory-v1beta1-MsgMintResponse) |  |
| Burn | [MsgBurn](#osmosis-tokenfactory-v1beta1-MsgBurn) | [MsgBurnResponse](#osmosis-tokenfactory-v1beta1-MsgBurnResponse) |  |
| ChangeAdmin | [MsgChangeAdmin](#osmosis-tokenfactory-v1beta1-MsgChangeAdmin) | [MsgChangeAdminResponse](#osmosis-tokenfactory-v1beta1-MsgChangeAdminResponse) |  |
| SetDenomMetadata | [MsgSetDenomMetadata](#osmosis-tokenfactory-v1beta1-MsgSetDenomMetadata) | [MsgSetDenomMetadataResponse](#osmosis-tokenfactory-v1beta1-MsgSetDenomMetadataResponse) |  |
| ForceTransfer | [MsgForceTransfer](#osmosis-tokenfactory-v1beta1-MsgForceTransfer) | [MsgForceTransferResponse](#osmosis-tokenfactory-v1beta1-MsgForceTransferResponse) |  |
| UpdateParams | [MsgUpdateParams](#osmosis-tokenfactory-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#osmosis-tokenfactory-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is hard-coded to the x/gov module account.

Since: cosmos-sdk 0.47 |

 



<a name="tendermint_libs_bits_types-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## tendermint/libs/bits/types.proto



<a name="tendermint-libs-bits-BitArray"></a>

### BitArray



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bits | [int64](#int64) |  |  |
| elems | [uint64](#uint64) | repeated |  |





 

 

 

 



<a name="xion_dkim_v1_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/dkim/v1/state.proto



<a name="xion-dkim-v1-DkimPubKey"></a>

### DkimPubKey
DkimPubKey represents a DKIM public key with associated metadata.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| domain | [string](#string) |  | domain defines the email domain associated with this DKIM key. |
| pub_key | [string](#string) |  | pub_key defines the base64 encoded public key. |
| poseidon_hash | [bytes](#bytes) |  | poseidon_hash defines the Poseidon hash of the public key. |
| selector | [string](#string) |  | selector defines the DKIM selector for this key. |
| version | [Version](#xion-dkim-v1-Version) |  | version defines the DKIM version. |
| key_type | [KeyType](#xion-dkim-v1-KeyType) |  | key_type defines the cryptographic key type. |





 


<a name="xion-dkim-v1-KeyType"></a>

### KeyType
KeyType defines the supported cryptographic key types for DKIM.

| Name | Number | Description |
| ---- | ------ | ----------- |
| KEY_TYPE_RSA_UNSPECIFIED | 0 | KEY_TYPE_RSA_UNSPECIFIED represents RSA key type (unspecified default). |



<a name="xion-dkim-v1-Version"></a>

### Version
Version defines the supported DKIM versions.

| Name | Number | Description |
| ---- | ------ | ----------- |
| VERSION_DKIM1_UNSPECIFIED | 0 | VERSION_DKIM1_UNSPECIFIED represents DKIM version 1 (unspecified default). |


 

 

 



<a name="xion_dkim_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/dkim/v1/genesis.proto



<a name="xion-dkim-v1-GenesisState"></a>

### GenesisState
GenesisState defines the module genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-dkim-v1-Params) |  | Params defines all the parameters of the module. |
| dkim_pubkeys | [DkimPubKey](#xion-dkim-v1-DkimPubKey) | repeated | dkim_pubkeys stores the list of active DKIM public keys. |
| revoked_pubkeys | [string](#string) | repeated | revoked_pubkeys stores the list of revoked DKIM public keys. |






<a name="xion-dkim-v1-IndexRange"></a>

### IndexRange
IndexRange defines a range of indices [start, end) in the public inputs
array.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start | [uint64](#uint64) |  | start is the inclusive lower bound of the index range. |
| end | [uint64](#uint64) |  | end is the exclusive upper bound of the index range. |






<a name="xion-dkim-v1-Params"></a>

### Params
Params defines the set of module parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkey_identifier | [uint64](#uint64) |  | vkey defines the verification key used by the module. |
| max_pubkey_size_bytes | [uint64](#uint64) |  | max_pubkey_size_bytes caps the allowed DKIM public key size (base64 decoded). |
| public_input_indices | [PublicInputIndices](#xion-dkim-v1-PublicInputIndices) |  | public_input_indices defines the indices for extracting data from public inputs. |






<a name="xion-dkim-v1-PublicInputIndices"></a>

### PublicInputIndices
PublicInputIndices defines the indices for extracting data from public
inputs.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_length | [uint64](#uint64) |  | min_length is the minimum required length of the public inputs array. |
| email_hash_index | [uint64](#uint64) |  | email_hash_index is the index of the email hash in the public inputs. |
| dkim_domain_range | [IndexRange](#xion-dkim-v1-IndexRange) |  | dkim_domain_range is the index range for the DKIM domain in public inputs. |
| dkim_hash_index | [uint64](#uint64) |  | dkim_hash_index is the index of the DKIM signature hash in public inputs. |
| tx_bytes_range | [IndexRange](#xion-dkim-v1-IndexRange) |  | tx_bytes_range is the index range for the transaction bytes in public inputs. |
| email_host_range | [IndexRange](#xion-dkim-v1-IndexRange) |  | email_host_range is the index range for the email host in public inputs. |
| email_subject_range | [IndexRange](#xion-dkim-v1-IndexRange) |  | email_subject_range is the index range for the email subject in public inputs. |





 

 

 

 



<a name="xion_dkim_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/dkim/v1/query.proto



<a name="xion-dkim-v1-AuthenticateResponse"></a>

### AuthenticateResponse
AuthenticateResponse defines the response structure for proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) |  | verified indicates whether the proof verification was successful. |






<a name="xion-dkim-v1-QueryAuthenticateRequest"></a>

### QueryAuthenticateRequest
QueryAuthenticateRequest defines the request structure for proof
verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tx_bytes | [bytes](#bytes) |  | tx_bytes defines the serialized transaction bytes. |
| email_hash | [string](#string) |  | email_hash defines the hash of the email being authenticated. |
| proof | [bytes](#bytes) |  | proof defines the zk proof bytes. |
| public_inputs | [string](#string) | repeated | public_inputs defines the public inputs for the zk proof. |
| allowed_email_hosts | [string](#string) | repeated | allowed_email_hosts defines the list of allowed email hosts. |






<a name="xion-dkim-v1-QueryDkimPubKeyRequest"></a>

### QueryDkimPubKeyRequest
QueryDkimPubKeyRequest is the request type for the Query/DkimPubKey RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| selector | [string](#string) |  | selector defines the DKIM selector to query. |
| domain | [string](#string) |  | domain defines the domain to query. |






<a name="xion-dkim-v1-QueryDkimPubKeyResponse"></a>

### QueryDkimPubKeyResponse
QueryDkimPubKeyResponse is the response type for the Query/DkimPubKey RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dkim_pub_key | [DkimPubKey](#xion-dkim-v1-DkimPubKey) |  | dkim_pub_key defines the DKIM public key. |






<a name="xion-dkim-v1-QueryDkimPubKeysRequest"></a>

### QueryDkimPubKeysRequest
QueryDkimPubKeysRequest is the request type for the Query/DkimPubKeys RPC
method. All fields are optional, and will filter down results.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| selector | [string](#string) |  | selector defines the DKIM selector to filter by. |
| domain | [string](#string) |  | domain defines the domain to filter by. |
| poseidon_hash | [bytes](#bytes) |  | poseidon_hash defines the Poseidon hash to filter by. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines the pagination parameters. |






<a name="xion-dkim-v1-QueryDkimPubKeysResponse"></a>

### QueryDkimPubKeysResponse
QueryDkimPubKeysResponse is the response type for the Query/DkimPubKeys RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dkim_pub_keys | [DkimPubKey](#xion-dkim-v1-DkimPubKey) | repeated | dkim_pub_keys defines the list of DKIM public keys. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination response. |






<a name="xion-dkim-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="xion-dkim-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-dkim-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="xion-dkim-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| DkimPubKey | [QueryDkimPubKeyRequest](#xion-dkim-v1-QueryDkimPubKeyRequest) | [QueryDkimPubKeyResponse](#xion-dkim-v1-QueryDkimPubKeyResponse) | DkimPubKey queries the DKIM public key for a given selector and domain. |
| DkimPubKeys | [QueryDkimPubKeysRequest](#xion-dkim-v1-QueryDkimPubKeysRequest) | [QueryDkimPubKeysResponse](#xion-dkim-v1-QueryDkimPubKeysResponse) | DkimPubKeys queries the DKIM public keys for a given selectors and domains. |
| Authenticate | [QueryAuthenticateRequest](#xion-dkim-v1-QueryAuthenticateRequest) | [AuthenticateResponse](#xion-dkim-v1-AuthenticateResponse) | Authenticate verifies a zk proof for email authentication. |
| Params | [QueryParamsRequest](#xion-dkim-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-dkim-v1-QueryParamsResponse) | Params queries all parameters of the module. |

 



<a name="xion_dkim_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/dkim/v1/tx.proto



<a name="xion-dkim-v1-MsgAddDkimPubKeys"></a>

### MsgAddDkimPubKeys
MsgAddDkimPubKey is the Msg/AddDkimPubKey request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| dkim_pubkeys | [DkimPubKey](#xion-dkim-v1-DkimPubKey) | repeated | dkim_pubkeys defines the DKIM public keys to add. |






<a name="xion-dkim-v1-MsgAddDkimPubKeysResponse"></a>

### MsgAddDkimPubKeysResponse
MsgAddDkimPubKeyResponse defines the response structure for executing a
MsgAddDkimPubKey message.






<a name="xion-dkim-v1-MsgRemoveDkimPubKey"></a>

### MsgRemoveDkimPubKey
MsgRemoveDkimPubKey is the Msg/RemoveDkimPubKey request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| selector | [string](#string) |  | selector defines the DKIM selector to remove. |
| domain | [string](#string) |  | domain defines the domain for the DKIM key to remove. |






<a name="xion-dkim-v1-MsgRemoveDkimPubKeyResponse"></a>

### MsgRemoveDkimPubKeyResponse
MsgRemoveDkimPubKeyResponse defines the response structure for executing a
MsgRemoveDkimPubKey message.






<a name="xion-dkim-v1-MsgRevokeDkimPubKey"></a>

### MsgRevokeDkimPubKey
MsgRevokeDkimPubKey is the Msg/RevokeDkimPubKey request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | signer defines the address of the signer revoking the key. |
| domain | [string](#string) |  | domain defines the domain for the DKIM key to revoke. |
| priv_key | [bytes](#bytes) |  | priv_key defines the private key used to prove ownership for revocation. |






<a name="xion-dkim-v1-MsgRevokeDkimPubKeyResponse"></a>

### MsgRevokeDkimPubKeyResponse
MsgRevokeDkimPubKeyResponse defines the response structure for executing a
MsgRevokeDkimPubKey message.






<a name="xion-dkim-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-dkim-v1-Params) |  | params defines the parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-dkim-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: cosmos-sdk 0.47





 

 

 


<a name="xion-dkim-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AddDkimPubKeys | [MsgAddDkimPubKeys](#xion-dkim-v1-MsgAddDkimPubKeys) | [MsgAddDkimPubKeysResponse](#xion-dkim-v1-MsgAddDkimPubKeysResponse) | AddDkimPubKey defines a message to add DKIM public keys. |
| RemoveDkimPubKey | [MsgRemoveDkimPubKey](#xion-dkim-v1-MsgRemoveDkimPubKey) | [MsgRemoveDkimPubKeyResponse](#xion-dkim-v1-MsgRemoveDkimPubKeyResponse) | RemoveDkimPubKey defines a message to remove a DKIM public key via governance |
| RevokeDkimPubKey | [MsgRevokeDkimPubKey](#xion-dkim-v1-MsgRevokeDkimPubKey) | [MsgRevokeDkimPubKeyResponse](#xion-dkim-v1-MsgRevokeDkimPubKeyResponse) | RevokeDkimPubKey defines a message to remove a DKIM public key without governance, by submitting the compromised privkey |
| UpdateParams | [MsgUpdateParams](#xion-dkim-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-dkim-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the parameters.

Since: cosmos-sdk 0.47 |

 



<a name="xion_feeabs_v1beta1_epoch-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/epoch.proto



<a name="xion-feeabs-v1beta1-EpochInfo"></a>

### EpochInfo
EpochInfo defines information of a epoch


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | identifier is a unique reference to this particular timer. |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | start_time is the time at which the timer first ever ticks. If start_time is in the future, the epoch will not begin until the start time. |
| duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | duration is the time in between epoch ticks. In order for intended behavior to be met, duration should be greater than the chains expected block time. Duration must be non-zero. |
| current_epoch | [int64](#int64) |  | current_epoch is the current epoch number, or in other words, how many times has the timer &#39;ticked&#39;. The first tick (current_epoch=1) is defined as the first block whose blocktime is greater than the EpochInfo start_time. |
| current_epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | current_epoch_start_time describes the start time of the current timer interval. The interval is (current_epoch_start_time, current_epoch_start_time &#43; duration] When the timer ticks, this is set to current_epoch_start_time = last_epoch_start_time &#43; duration only one timer tick for a given identifier can occur per block.

NOTE! The current_epoch_start_time may diverge significantly from the wall-clock time the epoch began at. Wall-clock time of epoch start may be &gt;&gt; current_epoch_start_time. Suppose current_epoch_start_time = 10, duration = 5. Suppose the chain goes offline at t=14, and comes back online at t=30, and produces blocks at every successive time. (t=31, 32, etc.) * The t=30 block will start the epoch for (10, 15] * The t=31 block will start the epoch for (15, 20] * The t=32 block will start the epoch for (20, 25] * The t=33 block will start the epoch for (25, 30] * The t=34 block will start the epoch for (30, 35] * The **t=36** block will start the epoch for (35, 40] |
| epoch_counting_started | [bool](#bool) |  | epoch_counting_started is a boolean, that indicates whether this epoch timer has began yet. |
| current_epoch_start_height | [int64](#int64) |  | current_epoch_start_height is the block height at which the current epoch started. (The block height at which the timer last ticked) |






<a name="xion-feeabs-v1beta1-ExponentialBackoff"></a>

### ExponentialBackoff
ExponentialBackoff defines backoff epoch


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| jump | [int64](#int64) |  | jump defines the exponential backoff multiplier |
| future_epoch | [int64](#int64) |  | future_epoch defines the target epoch for the backoff |





 

 

 

 



<a name="xion_feeabs_v1beta1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/params.proto



<a name="xion-feeabs-v1beta1-Params"></a>

### Params
Params defines the parameters for the feeabs module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| native_ibced_in_osmosis | [string](#string) |  | native ibced in osmosis |
| osmosis_query_twap_path | [string](#string) |  | osmosis query TWAP path |
| chain_name | [string](#string) |  | chain name for ibc path unwinding |
| ibc_transfer_channel | [string](#string) |  | transfer channel for cross chain swap with osmosis |
| ibc_query_icq_channel | [string](#string) |  | query twap price icq channel with osmosis |
| osmosis_crosschain_swap_address | [string](#string) |  | osmosis crosschain swap contract address |





 

 

 

 



<a name="xion_feeabs_v1beta1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/genesis.proto



<a name="xion-feeabs-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the feeabs module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-feeabs-v1beta1-Params) |  | params defines the parameters for the feeabs module |
| epochs | [EpochInfo](#xion-feeabs-v1beta1-EpochInfo) | repeated | epochs defines the list of epoch information |
| port_id | [string](#string) |  | port_id defines the IBC port identifier |





 

 

 

 



<a name="xion_feeabs_v1beta1_osmosisibc-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/osmosisibc.proto



<a name="xion-feeabs-v1beta1-CosmosQuery"></a>

### CosmosQuery
CosmosQuery contains a list of tendermint ABCI query requests. It should be
used when sending queries to an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [tendermint.abci.RequestQuery](#tendermint-abci-RequestQuery) | repeated | requests defines the list of ABCI query requests |






<a name="xion-feeabs-v1beta1-CosmosResponse"></a>

### CosmosResponse
CosmosResponse contains a list of tendermint ABCI query responses. It should
be used when receiving responses from an SDK host chain.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| responses | [tendermint.abci.ResponseQuery](#tendermint-abci-ResponseQuery) | repeated | responses defines the list of ABCI query responses |






<a name="xion-feeabs-v1beta1-InterchainQueryPacketAck"></a>

### InterchainQueryPacketAck
InterchainQueryPacketAck is comprised of an ABCI query response with
non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the query response data |






<a name="xion-feeabs-v1beta1-InterchainQueryPacketData"></a>

### InterchainQueryPacketData
InterchainQueryPacketData is comprised of raw query.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the raw query data |
| memo | [string](#string) |  | optional memo |






<a name="xion-feeabs-v1beta1-InterchainQueryRequest"></a>

### InterchainQueryRequest
InterchainQueryRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [bytes](#bytes) |  | data defines the raw query data |
| path | [string](#string) |  | path defines the query path |






<a name="xion-feeabs-v1beta1-InterchainQueryRequestPacket"></a>

### InterchainQueryRequestPacket
InterchainQueryRequestPacket


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requests | [InterchainQueryRequest](#xion-feeabs-v1beta1-InterchainQueryRequest) | repeated | requests defines the list of interchain query requests |






<a name="xion-feeabs-v1beta1-QueryArithmeticTwapToNowRequest"></a>

### QueryArithmeticTwapToNowRequest
QueryArithmeticTwapToNowRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pool_id | [uint64](#uint64) |  | pool_id defines the pool identifier |
| base_asset | [string](#string) |  | base_asset defines the base asset for the TWAP calculation |
| quote_asset | [string](#string) |  | quote_asset defines the quote asset for the TWAP calculation |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | start_time defines the start time for the TWAP calculation |






<a name="xion-feeabs-v1beta1-QueryArithmeticTwapToNowResponse"></a>

### QueryArithmeticTwapToNowResponse
QueryArithmeticTwapToNowResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| arithmetic_twap | [string](#string) |  | arithmetic_twap defines the calculated arithmetic time-weighted average price |





 

 

 

 



<a name="xion_feeabs_v1beta1_proposal-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/proposal.proto



<a name="xion-feeabs-v1beta1-AddHostZoneProposal"></a>

### AddHostZoneProposal
AddHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-DeleteHostZoneProposal"></a>

### DeleteHostZoneProposal
DeleteHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| ibc_denom | [string](#string) |  | the ibc denom of this token |






<a name="xion-feeabs-v1beta1-HostChainFeeAbsConfig"></a>

### HostChainFeeAbsConfig
HostChainFeeAbsConfig


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | ibc token is allowed to be used as fee token |
| osmosis_pool_token_denom_in | [string](#string) |  | token_in in cross_chain swap contract. |
| pool_id | [uint64](#uint64) |  | pool id |
| status | [HostChainFeeAbsStatus](#xion-feeabs-v1beta1-HostChainFeeAbsStatus) |  | Host chain fee abstraction connection status |






<a name="xion-feeabs-v1beta1-SetHostZoneProposal"></a>

### SetHostZoneProposal
SetHostZoneProposal


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  | the title of the proposal |
| description | [string](#string) |  | the description of the proposal |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |





 


<a name="xion-feeabs-v1beta1-HostChainFeeAbsStatus"></a>

### HostChainFeeAbsStatus
HostChainFeeAbsStatus represents the status of a host chain fee abstraction
configuration

| Name | Number | Description |
| ---- | ------ | ----------- |
| HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED | 0 | HOST_CHAIN_FEE_ABS_STATUS_UNSPECIFIED indicates an unspecified status |
| HOST_CHAIN_FEE_ABS_STATUS_UPDATED | 1 | HOST_CHAIN_FEE_ABS_STATUS_UPDATED indicates the configuration is up to date |
| HOST_CHAIN_FEE_ABS_STATUS_OUTDATED | 2 | HOST_CHAIN_FEE_ABS_STATUS_OUTDATED indicates the configuration is outdated |
| HOST_CHAIN_FEE_ABS_STATUS_FROZEN | 3 | HOST_CHAIN_FEE_ABS_STATUS_FROZEN indicates the configuration is frozen |


 

 

 



<a name="xion_feeabs_v1beta1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/query.proto



<a name="xion-feeabs-v1beta1-QueryAllHostChainConfigRequest"></a>

### QueryAllHostChainConfigRequest
QueryAllHostChainConfigRequest






<a name="xion-feeabs-v1beta1-QueryAllHostChainConfigResponse"></a>

### QueryAllHostChainConfigResponse
QueryAllHostChainConfigResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| all_host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) | repeated | All host chain fee abstraction configurations |






<a name="xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest"></a>

### QueryFeeabsModuleBalancesRequest
QueryFeeabsModuleBalancesRequest is the request type for the Query/Feeabs RPC
method.






<a name="xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse"></a>

### QueryFeeabsModuleBalancesResponse
QueryFeeabsModuleBalancesResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| balances | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The coin balances held by the feeabs module |
| address | [string](#string) |  | The address of the feeabs module |






<a name="xion-feeabs-v1beta1-QueryHostChainConfigRequest"></a>

### QueryHostChainConfigRequest
QueryHostChainConfigRequest


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | The IBC denomination to query configuration for |






<a name="xion-feeabs-v1beta1-QueryHostChainConfigResponse"></a>

### QueryHostChainConfigResponse
QueryHostChainConfigResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | The host chain fee abstraction configuration |






<a name="xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest"></a>

### QueryOsmosisArithmeticTwapRequest
QueryOsmosisArithmeticTwapRequest is the request type for the Query/Feeabs
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ibc_denom | [string](#string) |  | The IBC denomination to query TWAP for |






<a name="xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse"></a>

### QueryOsmosisArithmeticTwapResponse
QueryOsmosisArithmeticTwapResponse


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| arithmetic_twap | [string](#string) |  | The arithmetic time-weighted average price |





 

 

 


<a name="xion-feeabs-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| OsmosisArithmeticTwap | [QueryOsmosisArithmeticTwapRequest](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapRequest) | [QueryOsmosisArithmeticTwapResponse](#xion-feeabs-v1beta1-QueryOsmosisArithmeticTwapResponse) | OsmosisArithmeticTwap return spot price of pair Osmo/nativeToken |
| FeeabsModuleBalances | [QueryFeeabsModuleBalancesRequest](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesRequest) | [QueryFeeabsModuleBalancesResponse](#xion-feeabs-v1beta1-QueryFeeabsModuleBalancesResponse) | FeeabsModuleBalances return total balances of feeabs module |
| HostChainConfig | [QueryHostChainConfigRequest](#xion-feeabs-v1beta1-QueryHostChainConfigRequest) | [QueryHostChainConfigResponse](#xion-feeabs-v1beta1-QueryHostChainConfigResponse) | HostChainConfig |
| AllHostChainConfig | [QueryAllHostChainConfigRequest](#xion-feeabs-v1beta1-QueryAllHostChainConfigRequest) | [QueryAllHostChainConfigResponse](#xion-feeabs-v1beta1-QueryAllHostChainConfigResponse) | AllHostChainConfig |

 



<a name="xion_feeabs_v1beta1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/feeabs/v1beta1/tx.proto



<a name="xion-feeabs-v1beta1-MsgAddHostZone"></a>

### MsgAddHostZone
MsgAddHostZone is the Msg/AddHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-MsgAddHostZoneResponse"></a>

### MsgAddHostZoneResponse
MsgAddHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount"></a>

### MsgFundFeeAbsModuleAccount
MsgFundFeeAbsModuleAccount


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | sender is the that actor that signed the messages |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The amount of coins to fund to the feeabs module account |






<a name="xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse"></a>

### MsgFundFeeAbsModuleAccountResponse
MsgFundFeeAbsModuleAccountResponse






<a name="xion-feeabs-v1beta1-MsgRemoveHostZone"></a>

### MsgRemoveHostZone
MsgRemoveHostZone is the Msg/RemoveHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| ibc_denom | [string](#string) |  | The IBC denomination of the host zone to remove |






<a name="xion-feeabs-v1beta1-MsgRemoveHostZoneResponse"></a>

### MsgRemoveHostZoneResponse
MsgRemoveHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP"></a>

### MsgSendQueryIbcDenomTWAP
MsgSendQueryIbcDenomTWAP


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |






<a name="xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse"></a>

### MsgSendQueryIbcDenomTWAPResponse
MsgSendQueryIbcDenomTWAPResponse






<a name="xion-feeabs-v1beta1-MsgSwapCrossChain"></a>

### MsgSwapCrossChain
MsgSwapCrossChain


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sender | [string](#string) |  | Sender is the that actor that signed the messages |
| ibc_denom | [string](#string) |  | The IBC denomination to swap |






<a name="xion-feeabs-v1beta1-MsgSwapCrossChainResponse"></a>

### MsgSwapCrossChainResponse
MsgSwapCrossChainResponse






<a name="xion-feeabs-v1beta1-MsgUpdateHostZone"></a>

### MsgUpdateHostZone
MsgUpdateHostZone is the Msg/UpdateHostZone request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| host_chain_config | [HostChainFeeAbsConfig](#xion-feeabs-v1beta1-HostChainFeeAbsConfig) |  | the host chain config |






<a name="xion-feeabs-v1beta1-MsgUpdateHostZoneResponse"></a>

### MsgUpdateHostZoneResponse
MsgUpdateHostZoneResponse






<a name="xion-feeabs-v1beta1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-feeabs-v1beta1-Params) |  | params defines the x/feeabs parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-feeabs-v1beta1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="xion-feeabs-v1beta1-Msg"></a>

### Msg
Msg defines the wasm Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| SendQueryIbcDenomTWAP | [MsgSendQueryIbcDenomTWAP](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAP) | [MsgSendQueryIbcDenomTWAPResponse](#xion-feeabs-v1beta1-MsgSendQueryIbcDenomTWAPResponse) | SendQueryIbcDenomTWAP sends a twap query to osmosis |
| SwapCrossChain | [MsgSwapCrossChain](#xion-feeabs-v1beta1-MsgSwapCrossChain) | [MsgSwapCrossChainResponse](#xion-feeabs-v1beta1-MsgSwapCrossChainResponse) | SwapCrossChain submits a swap cross chain request. |
| FundFeeAbsModuleAccount | [MsgFundFeeAbsModuleAccount](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccount) | [MsgFundFeeAbsModuleAccountResponse](#xion-feeabs-v1beta1-MsgFundFeeAbsModuleAccountResponse) | FundFeeAbsModuleAccount funds to feeabs module account. |
| UpdateParams | [MsgUpdateParams](#xion-feeabs-v1beta1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-feeabs-v1beta1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/feeabs module parameters. The authority is defined in the keeper. |
| AddHostZone | [MsgAddHostZone](#xion-feeabs-v1beta1-MsgAddHostZone) | [MsgAddHostZoneResponse](#xion-feeabs-v1beta1-MsgAddHostZoneResponse) | AddHostZone adds a new host zone configuration |
| UpdateHostZone | [MsgUpdateHostZone](#xion-feeabs-v1beta1-MsgUpdateHostZone) | [MsgUpdateHostZoneResponse](#xion-feeabs-v1beta1-MsgUpdateHostZoneResponse) | UpdateHostZone updates an existing host zone configuration |
| RemoveHostZone | [MsgRemoveHostZone](#xion-feeabs-v1beta1-MsgRemoveHostZone) | [MsgRemoveHostZoneResponse](#xion-feeabs-v1beta1-MsgRemoveHostZoneResponse) | RemoveHostZone removes a host zone configuration |

 



<a name="xion_globalfee_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/globalfee/v1/genesis.proto



<a name="xion-globalfee-v1-GenesisState"></a>

### GenesisState
GenesisState - initial state of module


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-globalfee-v1-Params) |  | Params of this module |






<a name="xion-globalfee-v1-Params"></a>

### Params
Params defines the set of module parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimum_gas_prices | [cosmos.base.v1beta1.DecCoin](#cosmos-base-v1beta1-DecCoin) | repeated | minimum_gas_prices stores the minimum gas price(s) for all TX on the chain. When multiple coins are defined then they are accepted alternatively. The list must be sorted by denoms asc. No duplicate denoms or zero amount values allowed. For more information see https://docs.cosmos.network/main/modules/auth#concepts |
| bypass_min_fee_msg_types | [string](#string) | repeated | bypass_min_fee_msg_types defines a list of message type urls that are free of fee charge. |
| max_total_bypass_min_fee_msg_gas_usage | [uint64](#uint64) |  | max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage allowed for a transaction containing only messages of types in bypass_min_fee_msg_types to bypass fee charge. |





 

 

 

 



<a name="xion_globalfee_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/globalfee/v1/query.proto



<a name="xion-globalfee-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryMinimumGasPricesRequest is the request type for the
Query/MinimumGasPrices RPC method.






<a name="xion-globalfee-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryMinimumGasPricesResponse is the response type for the
Query/MinimumGasPrices RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-globalfee-v1-Params) |  | The global fee parameters |





 

 

 


<a name="xion-globalfee-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#xion-globalfee-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-globalfee-v1-QueryParamsResponse) | Params queries the parameters of the module |

 



<a name="xion_globalfee_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/globalfee/v1/tx.proto



<a name="xion-globalfee-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-globalfee-v1-Params) |  | params defines the parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-globalfee-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="xion-globalfee-v1-Msg"></a>

### Msg
Msg defines the globalfee Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#xion-globalfee-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-globalfee-v1-MsgUpdateParamsResponse) | UpdateParams updates the module parameters. Only the governance account may call it. |

 



<a name="xion_indexer_authz_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/indexer/authz/v1/query.proto
Since: cosmos-sdk 0.43


<a name="xion-indexer-authz-v1-QueryGranteeGrantsRequest"></a>

### QueryGranteeGrantsRequest
QueryGranteeGrantsRequest is the request type for the Query/GranteeGrants RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  | grantee is the address of the user receiving an authorization |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines pagination for the request. |






<a name="xion-indexer-authz-v1-QueryGranteeGrantsResponse"></a>

### QueryGranteeGrantsResponse
QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [cosmos.authz.v1beta1.GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted to the grantee. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines pagination for the response. |






<a name="xion-indexer-authz-v1-QueryGranterGrantsRequest"></a>

### QueryGranterGrantsRequest
QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an authorization |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines pagination for the request. |






<a name="xion-indexer-authz-v1-QueryGranterGrantsResponse"></a>

### QueryGranterGrantsResponse
QueryGranterGrantsResponse is the response type for the Query/GranterGrants
RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [cosmos.authz.v1beta1.GrantAuthorization](#cosmos-authz-v1beta1-GrantAuthorization) | repeated | grants is a list of grants granted by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines pagination for the response. |






<a name="xion-indexer-authz-v1-QueryGrantsRequest"></a>

### QueryGrantsRequest
QueryGrantsRequest is the request type for the Query/Grants RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an authorization |
| grantee | [string](#string) |  | grantee is the address of the user receiving an authorization |
| msg_type_url | [string](#string) |  | Optional, msg_type_url, when set, will query only grants matching given msg type. |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines pagination for the request. |






<a name="xion-indexer-authz-v1-QueryGrantsResponse"></a>

### QueryGrantsResponse
QueryGrantsResponse is the response type for the Query/Authorizations RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [cosmos.authz.v1beta1.Grant](#cosmos-authz-v1beta1-Grant) | repeated | authorizations is a list of grants granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines pagination for the response. |





 

 

 


<a name="xion-indexer-authz-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Grants | [QueryGrantsRequest](#xion-indexer-authz-v1-QueryGrantsRequest) | [QueryGrantsResponse](#xion-indexer-authz-v1-QueryGrantsResponse) | Returns list of `Authorization`, granted to the grantee by the granter. |
| GranterGrants | [QueryGranterGrantsRequest](#xion-indexer-authz-v1-QueryGranterGrantsRequest) | [QueryGranterGrantsResponse](#xion-indexer-authz-v1-QueryGranterGrantsResponse) | GranterGrants returns list of `GrantAuthorization`, granted by granter.

Since: cosmos-sdk 0.46 |
| GranteeGrants | [QueryGranteeGrantsRequest](#xion-indexer-authz-v1-QueryGranteeGrantsRequest) | [QueryGranteeGrantsResponse](#xion-indexer-authz-v1-QueryGranteeGrantsResponse) | GranteeGrants returns a list of `GrantAuthorization` by grantee.

Since: cosmos-sdk 0.46 |

 



<a name="xion_indexer_feegrant_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/indexer/feegrant/v1/query.proto



<a name="xion-indexer-feegrant-v1-QueryAllowanceRequest"></a>

### QueryAllowanceRequest
QueryAllowanceRequest is the request type for the Query/Allowance RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting an allowance of their funds. |
| grantee | [string](#string) |  | grantee is the address of the user being granted an allowance of another user&#39;s funds. |






<a name="xion-indexer-feegrant-v1-QueryAllowanceResponse"></a>

### QueryAllowanceResponse
QueryAllowanceResponse is the response type for the Query/Allowance RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [cosmos.feegrant.v1beta1.Grant](#cosmos-feegrant-v1beta1-Grant) |  | allowance is a allowance granted for grantee by granter. |






<a name="xion-indexer-feegrant-v1-QueryAllowancesByGranterRequest"></a>

### QueryAllowancesByGranterRequest
QueryAllowancesByGranterRequest is the request type for the
Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| granter | [string](#string) |  | granter is the address of the user granting fee allowances |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines pagination for the request. |






<a name="xion-indexer-feegrant-v1-QueryAllowancesByGranterResponse"></a>

### QueryAllowancesByGranterResponse
QueryAllowancesByGranterResponse is the response type for the
Query/AllowancesByGranter RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [cosmos.feegrant.v1beta1.Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances that have been issued by the granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines pagination for the response. |






<a name="xion-indexer-feegrant-v1-QueryAllowancesRequest"></a>

### QueryAllowancesRequest
QueryAllowancesRequest is the request type for the Query/Allowances RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  | grantee is the address of the user being granted fee allowances |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines pagination for the request. |






<a name="xion-indexer-feegrant-v1-QueryAllowancesResponse"></a>

### QueryAllowancesResponse
QueryAllowancesResponse is the response type for the Query/Allowances RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [cosmos.feegrant.v1beta1.Grant](#cosmos-feegrant-v1beta1-Grant) | repeated | allowances are allowances granted for grantee by granter. |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines pagination for the response. |





 

 

 


<a name="xion-indexer-feegrant-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Allowance | [QueryAllowanceRequest](#xion-indexer-feegrant-v1-QueryAllowanceRequest) | [QueryAllowanceResponse](#xion-indexer-feegrant-v1-QueryAllowanceResponse) | Allowance returns granted allowance to the grantee by the granter. |
| Allowances | [QueryAllowancesRequest](#xion-indexer-feegrant-v1-QueryAllowancesRequest) | [QueryAllowancesResponse](#xion-indexer-feegrant-v1-QueryAllowancesResponse) | Allowances returns all the grants for the given grantee address. |
| AllowancesByGranter | [QueryAllowancesByGranterRequest](#xion-indexer-feegrant-v1-QueryAllowancesByGranterRequest) | [QueryAllowancesByGranterResponse](#xion-indexer-feegrant-v1-QueryAllowancesByGranterResponse) | AllowancesByGranter returns all the grants given by an address |

 



<a name="xion_jwk_v1_audience-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/audience.proto



<a name="xion-jwk-v1-Audience"></a>

### Audience
Audience represents a JWT audience configuration


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| key | [string](#string) |  | The public key associated with this audience |
| admin | [string](#string) |  | The admin address for this audience |






<a name="xion-jwk-v1-AudienceClaim"></a>

### AudienceClaim
AudienceClaim represents a claim for an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| signer | [string](#string) |  | The signer of the audience claim |





 

 

 

 



<a name="xion_jwk_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/params.proto



<a name="xion-jwk-v1-Params"></a>

### Params
Params defines the parameters for the module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time_offset | [uint64](#uint64) |  | Time offset in nanoseconds for JWT validation |
| deployment_gas | [uint64](#uint64) |  | Gas required to deploy a new project/audience |





 

 

 

 



<a name="xion_jwk_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/genesis.proto



<a name="xion-jwk-v1-GenesisState"></a>

### GenesisState
GenesisState defines the jwk module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-jwk-v1-Params) |  | The module parameters |
| audience_list | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |





 

 

 

 



<a name="xion_jwk_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/query.proto



<a name="xion-jwk-v1-JWTClaim"></a>

### JWTClaim
JWTClaim represents a single JWT claim (standard or private)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  | The claim key |
| value | [string](#string) |  | The claim value (stringified) |






<a name="xion-jwk-v1-PrivateClaim"></a>

### PrivateClaim
PrivateClaim represents a private claim in a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  | The claim key |
| value | [string](#string) |  | The claim value |






<a name="xion-jwk-v1-QueryAllAudienceRequest"></a>

### QueryAllAudienceRequest
QueryAllAudienceRequest is the legacy request type for querying all audiences
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | Pagination parameters |






<a name="xion-jwk-v1-QueryAllAudienceResponse"></a>

### QueryAllAudienceResponse
QueryAllAudienceResponse is the legacy response type for querying all
audiences (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | Pagination response |






<a name="xion-jwk-v1-QueryAudienceAllRequest"></a>

### QueryAudienceAllRequest
QueryAudienceAllRequest is the request type for querying all audiences


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | Pagination parameters |






<a name="xion-jwk-v1-QueryAudienceAllResponse"></a>

### QueryAudienceAllResponse
QueryAudienceAllResponse is the response type for querying all audiences


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) | repeated | List of all audiences |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | Pagination response |






<a name="xion-jwk-v1-QueryAudienceClaimRequest"></a>

### QueryAudienceClaimRequest
QueryAudienceClaimRequest is the request type for querying an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the audience claim to query |






<a name="xion-jwk-v1-QueryAudienceClaimResponse"></a>

### QueryAudienceClaimResponse
QueryAudienceClaimResponse is the response type for querying an audience
claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claim | [AudienceClaim](#xion-jwk-v1-AudienceClaim) |  | The audience claim |






<a name="xion-jwk-v1-QueryAudienceRequest"></a>

### QueryAudienceRequest
QueryAudienceRequest is the request type for querying an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier to query |






<a name="xion-jwk-v1-QueryAudienceResponse"></a>

### QueryAudienceResponse
QueryAudienceResponse is the response type for querying an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The audience information |






<a name="xion-jwk-v1-QueryDecodeJWTRequest"></a>

### QueryDecodeJWTRequest
QueryDecodeJWTRequest is the request type for decoding a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| sub | [string](#string) |  | The subject |
| sig_bytes | [string](#string) |  | The signature bytes (compact JWT) |






<a name="xion-jwk-v1-QueryDecodeJWTResponse"></a>

### QueryDecodeJWTResponse
QueryDecodeJWTResponse is the response type for decoding a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claims | [JWTClaim](#xion-jwk-v1-JWTClaim) | repeated | All claims from the JWT (standard and private), sorted by key |






<a name="xion-jwk-v1-QueryGetAudienceClaimRequest"></a>

### QueryGetAudienceClaimRequest
QueryGetAudienceClaimRequest is the legacy request type for querying an
audience claim (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the audience claim to query |






<a name="xion-jwk-v1-QueryGetAudienceClaimResponse"></a>

### QueryGetAudienceClaimResponse
QueryGetAudienceClaimResponse is the legacy response type for querying an
audience claim (deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| claim | [AudienceClaim](#xion-jwk-v1-AudienceClaim) |  | The audience claim |






<a name="xion-jwk-v1-QueryGetAudienceRequest"></a>

### QueryGetAudienceRequest
QueryGetAudienceRequest is the legacy request type for querying an audience
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier to query |






<a name="xion-jwk-v1-QueryGetAudienceResponse"></a>

### QueryGetAudienceResponse
QueryGetAudienceResponse is the legacy response type for querying an audience
(deprecated)


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The audience information |






<a name="xion-jwk-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is request type for the Query/Params RPC method.






<a name="xion-jwk-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-jwk-v1-Params) |  | params holds all the parameters of this module. |






<a name="xion-jwk-v1-QueryValidateJWTRequest"></a>

### QueryValidateJWTRequest
QueryValidateJWTRequest is the request type for validating a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| sub | [string](#string) |  | The subject |
| sig_bytes | [string](#string) |  | The signature bytes |






<a name="xion-jwk-v1-QueryValidateJWTResponse"></a>

### QueryValidateJWTResponse
QueryValidateJWTResponse is the response type for validating a JWT


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| private_claims | [PrivateClaim](#xion-jwk-v1-PrivateClaim) | repeated | The private claims from the JWT |






<a name="xion-jwk-v1-QueryVerifyJWSRequest"></a>

### QueryVerifyJWSRequest
QueryVerifyJWSRequest is the request type for verifying a JWS signature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| aud | [string](#string) |  | The audience identifier |
| sig_bytes | [string](#string) |  | The JWS signature bytes in compact serialization format |






<a name="xion-jwk-v1-QueryVerifyJWSResponse"></a>

### QueryVerifyJWSResponse
QueryVerifyJWSResponse is the response type for verifying a JWS signature


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| payload | [bytes](#bytes) |  | The verified payload bytes extracted from the JWS |





 

 

 


<a name="xion-jwk-v1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#xion-jwk-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-jwk-v1-QueryParamsResponse) | Parameters queries the parameters of the module. |
| AudienceClaim | [QueryAudienceClaimRequest](#xion-jwk-v1-QueryAudienceClaimRequest) | [QueryAudienceClaimResponse](#xion-jwk-v1-QueryAudienceClaimResponse) | AudienceClaim queries an audience claim by hash |
| Audience | [QueryAudienceRequest](#xion-jwk-v1-QueryAudienceRequest) | [QueryAudienceResponse](#xion-jwk-v1-QueryAudienceResponse) | Queries a list of Audience items. |
| AudienceAll | [QueryAudienceAllRequest](#xion-jwk-v1-QueryAudienceAllRequest) | [QueryAudienceAllResponse](#xion-jwk-v1-QueryAudienceAllResponse) | AudienceAll queries all audiences |
| ValidateJWT | [QueryValidateJWTRequest](#xion-jwk-v1-QueryValidateJWTRequest) | [QueryValidateJWTResponse](#xion-jwk-v1-QueryValidateJWTResponse) | Deprecated: Use DecodeJWT instead, which returns all claims. |
| VerifyJWS | [QueryVerifyJWSRequest](#xion-jwk-v1-QueryVerifyJWSRequest) | [QueryVerifyJWSResponse](#xion-jwk-v1-QueryVerifyJWSResponse) | VerifyJWS verifies a compact JWS signature and returns the payload. |
| DecodeJWT | [QueryDecodeJWTRequest](#xion-jwk-v1-QueryDecodeJWTRequest) | [QueryDecodeJWTResponse](#xion-jwk-v1-QueryDecodeJWTResponse) | DecodeJWT validates a JWT and returns all claims (standard and private). |

 



<a name="xion_jwk_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/jwk/v1/tx.proto



<a name="xion-jwk-v1-MsgCreateAudience"></a>

### MsgCreateAudience
MsgCreateAudience defines the message for creating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address creating the audience |
| aud | [string](#string) |  | The audience identifier |
| key | [string](#string) |  | The public key for this audience |






<a name="xion-jwk-v1-MsgCreateAudienceClaim"></a>

### MsgCreateAudienceClaim
MsgCreateAudienceClaim defines the message for creating an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address creating the claim |
| aud_hash | [bytes](#bytes) |  | The hash of the audience for this claim |






<a name="xion-jwk-v1-MsgCreateAudienceClaimResponse"></a>

### MsgCreateAudienceClaimResponse
MsgCreateAudienceClaimResponse defines the response for creating an audience
claim






<a name="xion-jwk-v1-MsgCreateAudienceResponse"></a>

### MsgCreateAudienceResponse
MsgCreateAudienceResponse defines the response for creating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The created audience |






<a name="xion-jwk-v1-MsgDeleteAudience"></a>

### MsgDeleteAudience
MsgDeleteAudience defines the message for deleting an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address deleting the audience |
| aud | [string](#string) |  | The audience identifier to delete |






<a name="xion-jwk-v1-MsgDeleteAudienceClaim"></a>

### MsgDeleteAudienceClaim
MsgDeleteAudienceClaim defines the message for deleting an audience claim


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The admin address deleting the claim |
| aud_hash | [bytes](#bytes) |  | The hash of the audience for this claim |






<a name="xion-jwk-v1-MsgDeleteAudienceClaimResponse"></a>

### MsgDeleteAudienceClaimResponse
MsgDeleteAudienceClaimResponse defines the response for deleting an audience
claim






<a name="xion-jwk-v1-MsgDeleteAudienceResponse"></a>

### MsgDeleteAudienceResponse
MsgDeleteAudienceResponse defines the response for deleting an audience






<a name="xion-jwk-v1-MsgUpdateAudience"></a>

### MsgUpdateAudience
MsgUpdateAudience defines the message for updating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin | [string](#string) |  | The current admin address |
| new_admin | [string](#string) |  | The new admin address |
| aud | [string](#string) |  | The current audience identifier |
| key | [string](#string) |  | The current public key |
| new_aud | [string](#string) |  | The new audience identifier |






<a name="xion-jwk-v1-MsgUpdateAudienceResponse"></a>

### MsgUpdateAudienceResponse
MsgUpdateAudienceResponse defines the response for updating an audience


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| audience | [Audience](#xion-jwk-v1-Audience) |  | The updated audience |






<a name="xion-jwk-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-jwk-v1-Params) |  | params defines the parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-jwk-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.





 

 

 


<a name="xion-jwk-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAudienceClaim | [MsgCreateAudienceClaim](#xion-jwk-v1-MsgCreateAudienceClaim) | [MsgCreateAudienceClaimResponse](#xion-jwk-v1-MsgCreateAudienceClaimResponse) | CreateAudienceClaim creates a new audience claim |
| DeleteAudienceClaim | [MsgDeleteAudienceClaim](#xion-jwk-v1-MsgDeleteAudienceClaim) | [MsgDeleteAudienceClaimResponse](#xion-jwk-v1-MsgDeleteAudienceClaimResponse) | DeleteAudienceClaim deletes an existing audience claim |
| CreateAudience | [MsgCreateAudience](#xion-jwk-v1-MsgCreateAudience) | [MsgCreateAudienceResponse](#xion-jwk-v1-MsgCreateAudienceResponse) | CreateAudience creates a new audience |
| UpdateAudience | [MsgUpdateAudience](#xion-jwk-v1-MsgUpdateAudience) | [MsgUpdateAudienceResponse](#xion-jwk-v1-MsgUpdateAudienceResponse) | UpdateAudience updates an existing audience |
| DeleteAudience | [MsgDeleteAudience](#xion-jwk-v1-MsgDeleteAudience) | [MsgDeleteAudienceResponse](#xion-jwk-v1-MsgDeleteAudienceResponse) | DeleteAudience deletes an existing audience |
| UpdateParams | [MsgUpdateParams](#xion-jwk-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-jwk-v1-MsgUpdateParamsResponse) | UpdateParams updates the module parameters. Only the governance account may call it. |

 



<a name="xion_mint_v1_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/mint/v1/event.proto



<a name="xion-mint-v1-MintIncentiveTokens"></a>

### MintIncentiveTokens
MintIncentiveTokens defines an event emitted on each block from the mint
module EndBlocker


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bonded_ratio | [string](#string) |  | The ratio of bonded tokens to total supply |
| inflation | [string](#string) |  | The current inflation rate |
| annual_provisions | [string](#string) |  | The total annual provisions for minting |
| needed_amount | [uint64](#uint64) |  | The amount of tokens needed for incentives |
| collected_amount | [uint64](#uint64) |  | The amount of tokens collected for incentives |
| minted_amount | [uint64](#uint64) |  | The amount of tokens minted |
| burned_amount | [uint64](#uint64) |  | The amount of tokens burned |





 

 

 

 



<a name="xion_mint_v1_mint-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/mint/v1/mint.proto



<a name="xion-mint-v1-Minter"></a>

### Minter
Minter represents the minting state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [string](#string) |  | current annual inflation rate |
| annual_provisions | [string](#string) |  | current annual expected provisions |






<a name="xion-mint-v1-Params"></a>

### Params
Params defines the parameters for the x/mint module.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mint_denom | [string](#string) |  | type of coin to mint |
| inflation_rate_change | [string](#string) |  | maximum annual change in inflation rate |
| inflation_max | [string](#string) |  | maximum inflation rate |
| inflation_min | [string](#string) |  | minimum inflation rate |
| goal_bonded | [string](#string) |  | goal of percent bonded atoms |
| blocks_per_year | [uint64](#uint64) |  | expected blocks per year |





 

 

 

 



<a name="xion_mint_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/mint/v1/genesis.proto



<a name="xion-mint-v1-GenesisState"></a>

### GenesisState
GenesisState defines the mint module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minter | [Minter](#xion-mint-v1-Minter) |  | minter is a space for holding current inflation information. |
| params | [Params](#xion-mint-v1-Params) |  | params defines all the parameters of the module. |





 

 

 

 



<a name="xion_mint_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/mint/v1/query.proto



<a name="xion-mint-v1-QueryAnnualProvisionsRequest"></a>

### QueryAnnualProvisionsRequest
QueryAnnualProvisionsRequest is the request type for the
Query/AnnualProvisions RPC method.






<a name="xion-mint-v1-QueryAnnualProvisionsResponse"></a>

### QueryAnnualProvisionsResponse
QueryAnnualProvisionsResponse is the response type for the
Query/AnnualProvisions RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| annual_provisions | [bytes](#bytes) |  | annual_provisions is the current minting annual provisions value. |






<a name="xion-mint-v1-QueryInflationRequest"></a>

### QueryInflationRequest
QueryInflationRequest is the request type for the Query/Inflation RPC method.






<a name="xion-mint-v1-QueryInflationResponse"></a>

### QueryInflationResponse
QueryInflationResponse is the response type for the Query/Inflation RPC
method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inflation | [bytes](#bytes) |  | inflation is the current minting inflation value. |






<a name="xion-mint-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method.






<a name="xion-mint-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-mint-v1-Params) |  | params defines the parameters of the module. |





 

 

 


<a name="xion-mint-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Params | [QueryParamsRequest](#xion-mint-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-mint-v1-QueryParamsResponse) | Params returns the total set of minting parameters. |
| Inflation | [QueryInflationRequest](#xion-mint-v1-QueryInflationRequest) | [QueryInflationResponse](#xion-mint-v1-QueryInflationResponse) | Inflation returns the current minting inflation value. |
| AnnualProvisions | [QueryAnnualProvisionsRequest](#xion-mint-v1-QueryAnnualProvisionsRequest) | [QueryAnnualProvisionsResponse](#xion-mint-v1-QueryAnnualProvisionsResponse) | AnnualProvisions current minting annual provisions value. |

 



<a name="xion_mint_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/mint/v1/tx.proto



<a name="xion-mint-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.

Since: cosmos-sdk 0.47


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| params | [Params](#xion-mint-v1-Params) |  | params defines the x/mint parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-mint-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.

Since: cosmos-sdk 0.47





 

 

 


<a name="xion-mint-v1-Msg"></a>

### Msg
Msg defines the x/mint Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UpdateParams | [MsgUpdateParams](#xion-mint-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-mint-v1-MsgUpdateParamsResponse) | UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is defaults to the x/gov module account.

Since: cosmos-sdk 0.47 |

 



<a name="xion_v1_feegrant-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/feegrant.proto



<a name="xion-v1-AuthzAllowance"></a>

### AuthzAllowance
AuthzAllowance creates allowance only authz message for a specific grantee


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any of basic and periodic fee allowance. |
| authz_grantee | [string](#string) |  | The address that can use this authorization-based allowance |






<a name="xion-v1-ContractsAllowance"></a>

### ContractsAllowance
ContractsAllowance creates allowance only for specific contracts


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowance | [google.protobuf.Any](#google-protobuf-Any) |  | allowance can be any allowance interface type. |
| contract_addresses | [string](#string) | repeated | List of contract addresses that this allowance applies to |






<a name="xion-v1-MultiAnyAllowance"></a>

### MultiAnyAllowance
MultiAnyAllowance creates an allowance that pays if any of the internal
allowances are met


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| allowances | [google.protobuf.Any](#google-protobuf-Any) | repeated | allowance can be any allowance interface type. |





 

 

 

 



<a name="xion_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/genesis.proto



<a name="xion-v1-GenesisState"></a>

### GenesisState
GenesisState defines the xion module&#39;s genesis state


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| platform_percentage | [uint32](#uint32) |  | The percentage fee taken by the platform |
| platform_minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | Minimum amounts required for platform operations |





 

 

 

 



<a name="xion_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/query.proto



<a name="xion-v1-QueryPlatformMinimumRequest"></a>

### QueryPlatformMinimumRequest
QueryPlatformMinimumRequest is the request type for querying platform minimum
fees






<a name="xion-v1-QueryPlatformMinimumResponse"></a>

### QueryPlatformMinimumResponse
QueryPlatformMinimumResponse is the response type for querying platform
minimum fees


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The minimum fees required by the platform |






<a name="xion-v1-QueryPlatformPercentageRequest"></a>

### QueryPlatformPercentageRequest
QueryPlatformPercentageRequest is the request type for querying platform
percentage






<a name="xion-v1-QueryPlatformPercentageResponse"></a>

### QueryPlatformPercentageResponse
QueryPlatformPercentageResponse is the response type for querying platform
percentage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| platform_percentage | [uint64](#uint64) |  | The platform percentage fee |






<a name="xion-v1-QueryWebAuthNVerifyAuthenticateRequest"></a>

### QueryWebAuthNVerifyAuthenticateRequest
QueryWebAuthNVerifyAuthenticateRequest is the request type for WebAuthN
authentication verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr | [string](#string) |  | The account address |
| challenge | [string](#string) |  | The challenge string for authentication |
| rp | [string](#string) |  | The relying party identifier |
| credential | [bytes](#bytes) |  | The credential to verify |
| data | [bytes](#bytes) |  | The authentication data |






<a name="xion-v1-QueryWebAuthNVerifyAuthenticateResponse"></a>

### QueryWebAuthNVerifyAuthenticateResponse
QueryWebAuthNVerifyAuthenticateResponse is the response type for WebAuthN
authentication verification






<a name="xion-v1-QueryWebAuthNVerifyRegisterRequest"></a>

### QueryWebAuthNVerifyRegisterRequest
QueryWebAuthNVerifyRegisterRequest is the request type for WebAuthN
registration verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addr | [string](#string) |  | The account address |
| challenge | [string](#string) |  | The challenge string for registration |
| rp | [string](#string) |  | The relying party identifier |
| data | [bytes](#bytes) |  | The registration data |






<a name="xion-v1-QueryWebAuthNVerifyRegisterResponse"></a>

### QueryWebAuthNVerifyRegisterResponse
QueryWebAuthNVerifyRegisterResponse is the response type for WebAuthN
registration verification


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| credential | [bytes](#bytes) |  | The generated credential |





 

 

 


<a name="xion-v1-Query"></a>

### Query
Query defines the gRPC querier service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| WebAuthNVerifyRegister | [QueryWebAuthNVerifyRegisterRequest](#xion-v1-QueryWebAuthNVerifyRegisterRequest) | [QueryWebAuthNVerifyRegisterResponse](#xion-v1-QueryWebAuthNVerifyRegisterResponse) | WebAuthNVerifyRegister verifies a WebAuthN registration |
| WebAuthNVerifyAuthenticate | [QueryWebAuthNVerifyAuthenticateRequest](#xion-v1-QueryWebAuthNVerifyAuthenticateRequest) | [QueryWebAuthNVerifyAuthenticateResponse](#xion-v1-QueryWebAuthNVerifyAuthenticateResponse) | WebAuthNVerifyAuthenticate verifies a WebAuthN authentication |
| PlatformPercentage | [QueryPlatformPercentageRequest](#xion-v1-QueryPlatformPercentageRequest) | [QueryPlatformPercentageResponse](#xion-v1-QueryPlatformPercentageResponse) | PlatformPercentage queries the platform percentage fee |
| PlatformMinimum | [QueryPlatformMinimumRequest](#xion-v1-QueryPlatformMinimumRequest) | [QueryPlatformMinimumResponse](#xion-v1-QueryPlatformMinimumResponse) | PlatformMinimum queries the platform minimum fees |

 



<a name="xion_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/v1/tx.proto



<a name="xion-v1-MsgMultiSend"></a>

### MsgMultiSend
MsgMultiSend represents an arbitrary multi-in, multi-out send message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputs | [cosmos.bank.v1beta1.Input](#cosmos-bank-v1beta1-Input) | repeated | Inputs, despite being `repeated`, only allows one sender input. This is checked in MsgMultiSend&#39;s ValidateBasic. |
| outputs | [cosmos.bank.v1beta1.Output](#cosmos-bank-v1beta1-Output) | repeated | The outputs specifying recipient addresses and amounts |






<a name="xion-v1-MsgMultiSendResponse"></a>

### MsgMultiSendResponse
MsgMultiSendResponse defines the Msg/MultiSend response type.






<a name="xion-v1-MsgSend"></a>

### MsgSend
MsgSend represents a message to send coins from one account to another.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_address | [string](#string) |  | The address sending the coins |
| to_address | [string](#string) |  | The address receiving the coins |
| amount | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The amount of coins to send |






<a name="xion-v1-MsgSendResponse"></a>

### MsgSendResponse
MsgSendResponse defines the Msg/Send response type.






<a name="xion-v1-MsgSetPlatformMinimum"></a>

### MsgSetPlatformMinimum
MsgSetPlatformMinimum defines the message for setting platform minimum fees


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | The authority address that can set the platform minimums |
| minimums | [cosmos.base.v1beta1.Coin](#cosmos-base-v1beta1-Coin) | repeated | The minimum fees required by the platform |






<a name="xion-v1-MsgSetPlatformMinimumResponse"></a>

### MsgSetPlatformMinimumResponse
MsgSetPlatformMinimumResponse defines the response for setting platform
minimum fees






<a name="xion-v1-MsgSetPlatformPercentage"></a>

### MsgSetPlatformPercentage
MsgSetPlatformPercentage defines the message for setting platform percentage


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | The authority address that can set the platform percentage |
| platform_percentage | [uint32](#uint32) |  | platform_percentage is the platform fee percentage to multiplied by 10000 |






<a name="xion-v1-MsgSetPlatformPercentageResponse"></a>

### MsgSetPlatformPercentageResponse
MsgSetPlatformPercentageResponse defines the response for setting platform
percentage





 

 

 


<a name="xion-v1-Msg"></a>

### Msg
Msg defines the xion Msg service

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Send | [MsgSend](#xion-v1-MsgSend) | [MsgSendResponse](#xion-v1-MsgSendResponse) | Send defines a method for sending coins from one account to another account. |
| MultiSend | [MsgMultiSend](#xion-v1-MsgMultiSend) | [MsgMultiSendResponse](#xion-v1-MsgMultiSendResponse) | MultiSend defines a method for sending coins from some accounts to other accounts. |
| SetPlatformPercentage | [MsgSetPlatformPercentage](#xion-v1-MsgSetPlatformPercentage) | [MsgSetPlatformPercentageResponse](#xion-v1-MsgSetPlatformPercentageResponse) | SetPlatformPercentage defines the method for updating the platform percentage fee |
| SetPlatformMinimum | [MsgSetPlatformMinimum](#xion-v1-MsgSetPlatformMinimum) | [MsgSetPlatformMinimumResponse](#xion-v1-MsgSetPlatformMinimumResponse) | SetPlatformMinimum defines the method for updating the platform percentage fee |

 



<a name="xion_zk_v1_params-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/params.proto



<a name="xion-zk-v1-Params"></a>

### Params
Params defines the zk module parameters.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| max_vkey_size_bytes | [uint64](#uint64) |  | max_vkey_size_bytes caps the size of a verification key JSON payload. |
| upload_chunk_size | [uint64](#uint64) |  | upload_chunk_size defines the byte-size of each gas tier. |
| upload_chunk_gas | [uint64](#uint64) |  | upload_chunk_gas defines the gas cost per upload chunk. |
| max_groth16_proof_size_bytes | [uint64](#uint64) |  | max_groth16_proof_size_bytes caps the size of a Groth16 proof JSON payload. |
| max_groth16_public_input_size_bytes | [uint64](#uint64) |  | max_groth16_public_input_size_bytes caps the size of the Groth16 public inputs. The size is computed as the total UTF-8 byte length of all provided public input strings. |
| max_ultra_honk_proof_size_bytes | [uint64](#uint64) |  | max_ultra_honk_proof_size_bytes caps the size of an UltraHonk proof. |
| max_ultra_honk_public_input_size_bytes | [uint64](#uint64) |  | max_ultra_honk_public_input_size_bytes caps the size of the UltraHonk public inputs. UltraHonk public inputs are provided as raw bytes. |
| max_gnark_proof_size_bytes | [uint64](#uint64) |  | max_gnark_proof_size_bytes caps the size of a gnark native Groth16 proof (binary). |
| max_gnark_public_input_size_bytes | [uint64](#uint64) |  | max_gnark_public_input_size_bytes caps the size of the gnark Groth16 public inputs. Public inputs are provided as raw bytes (concatenated 32-byte big-endian field elements). |





 


<a name="xion-zk-v1-ProofSystem"></a>

### ProofSystem
ProofSystem identifies which ZK backend and wire format a vkey/proof uses.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROOF_SYSTEM_UNSPECIFIED | 0 | PROOF_SYSTEM_UNSPECIFIED is the default unset value. |
| PROOF_SYSTEM_GROTH16 | 1 | PROOF_SYSTEM_GROTH16 uses BN254 Groth16 proofs in snarkjs/circom format. |
| PROOF_SYSTEM_ULTRA_HONK_ZK | 2 | PROOF_SYSTEM_ULTRA_HONK_ZK uses Barretenberg UltraHonk ZK variant (bb &gt;= 0.87). |
| PROOF_SYSTEM_GROTH16_GNARK | 3 | PROOF_SYSTEM_GROTH16_GNARK uses BN254 Groth16 proofs in gnark native format (binary). |


 

 

 



<a name="xion_zk_v1_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/query.proto



<a name="xion-zk-v1-ProofVerifyGnarkResponse"></a>

### ProofVerifyGnarkResponse
ProofVerifyGnarkResponse defines the response structure for gnark Groth16
proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) |  | verified indicates whether the proof verification was successful. |






<a name="xion-zk-v1-ProofVerifyResponse"></a>

### ProofVerifyResponse
ProofVerifyResponse defines the response structure for proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) |  | verified indicates whether the proof verification was successful. |






<a name="xion-zk-v1-ProofVerifyUltraHonkResponse"></a>

### ProofVerifyUltraHonkResponse
ProofVerifyUltraHonkResponse defines the response structure for UltraHonk
proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) |  | verified indicates whether the proof verification was successful. |
| vkey_sha256 | [bytes](#bytes) |  | vkey_sha256 is SHA-256 over the exact stored verification-key bytes that were used for this verification.

A vkey NAME is a mutable binding and an ID&#39;s contents are mutable in place: AddVKey is permissionless, and the key&#39;s owner may later UpdateVKey the bytes under the same name and ID. A consumer that reviewed specific key material therefore cannot establish, from `verified` alone, that this verification used that material. Echoing the digest lets the consumer compare against a pin it derived offline from the reviewed artifact, in the same response that reports the verdict.

Always populated on success, so a consumer may treat an absent value as a server too old to enforce `expected_vkey_sha256` and fail closed. |






<a name="xion-zk-v1-QueryHasVKeyRequest"></a>

### QueryHasVKeyRequest
QueryHasVKeyRequest is the request type for the Query/HasVKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the name of the verification key to check |






<a name="xion-zk-v1-QueryHasVKeyResponse"></a>

### QueryHasVKeyResponse
QueryHasVKeyResponse is the response type for the Query/HasVKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exists | [bool](#bool) |  | exists indicates whether the verification key exists |
| id | [uint64](#uint64) |  | id is the numeric identifier if the key exists (0 if not found) |






<a name="xion-zk-v1-QueryNextVKeyIDRequest"></a>

### QueryNextVKeyIDRequest
QueryNextVKeyIDRequest is the request type for the Query/NextVKeyID RPC
method






<a name="xion-zk-v1-QueryNextVKeyIDResponse"></a>

### QueryNextVKeyIDResponse
QueryNextVKeyIDResponse is the response type for the Query/NextVKeyID RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| next_id | [uint64](#uint64) |  | next_id is the next available verification key ID. |






<a name="xion-zk-v1-QueryParamsRequest"></a>

### QueryParamsRequest
QueryParamsRequest is the request type for the Query/Params RPC method






<a name="xion-zk-v1-QueryParamsResponse"></a>

### QueryParamsResponse
QueryParamsResponse is the response type for the Query/Params RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| params | [Params](#xion-zk-v1-Params) |  | params is the current zk module parameters |






<a name="xion-zk-v1-QueryVKeyByNameRequest"></a>

### QueryVKeyByNameRequest
QueryVKeyByNameRequest is the request type for the Query/VKeyByName RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | name is the unique name of the verification key |






<a name="xion-zk-v1-QueryVKeyByNameResponse"></a>

### QueryVKeyByNameResponse
QueryVKeyByNameResponse is the response type for the Query/VKeyByName RPC
method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |
| id | [uint64](#uint64) |  | id is the numeric identifier of the verification key |






<a name="xion-zk-v1-QueryVKeyRequest"></a>

### QueryVKeyRequest
QueryVKeyRequest is the request type for the Query/VKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique identifier of the verification key |






<a name="xion-zk-v1-QueryVKeyResponse"></a>

### QueryVKeyResponse
QueryVKeyResponse is the response type for the Query/VKey RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |






<a name="xion-zk-v1-QueryVKeysRequest"></a>

### QueryVKeysRequest
QueryVKeysRequest is the request type for the Query/VKeys RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [cosmos.base.query.v1beta1.PageRequest](#cosmos-base-query-v1beta1-PageRequest) |  | pagination defines an optional pagination for the request |






<a name="xion-zk-v1-QueryVKeysResponse"></a>

### QueryVKeysResponse
QueryVKeysResponse is the response type for the Query/VKeys RPC method


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkeys | [VKeyWithID](#xion-zk-v1-VKeyWithID) | repeated | vkeys is the list of all verification keys with their IDs |
| pagination | [cosmos.base.query.v1beta1.PageResponse](#cosmos-base-query-v1beta1-PageResponse) |  | pagination defines the pagination in the response |






<a name="xion-zk-v1-QueryVerifyGnarkRequest"></a>

### QueryVerifyGnarkRequest
QueryVerifyGnarkRequest is the request for ProofVerifyGnark.
The verification key is resolved by vkey_name or vkey_id from the store (must
be groth16_gnark type). Proof and public_inputs are gnark native binary
format.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | proof is the gnark native Groth16 proof bytes (serialized groth16.Proof). |
| public_inputs | [bytes](#bytes) |  | public_inputs is the raw public inputs binary: concatenated 32-byte big-endian field elements (fr.Element serialization). |
| vkey_name | [string](#string) |  | vkey_name is the unique name of the gnark verification key |
| vkey_id | [uint64](#uint64) |  | vkey_id is the numeric id of the gnark verification key |






<a name="xion-zk-v1-QueryVerifyRequest"></a>

### QueryVerifyRequest
QueryVerifyRequest is the request type for the Query/ProofVerify RPC method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | proof is the serialized ZK proof to verify. |
| public_inputs | [string](#string) | repeated | public_inputs is the list of public inputs for the proof. |
| vkey_name | [string](#string) |  | vkey_name is the name of the verification key to use. |
| vkey_id | [uint64](#uint64) |  | vkey_id is the ID of the verification key to use. |






<a name="xion-zk-v1-QueryVerifyUltraHonkRequest"></a>

### QueryVerifyUltraHonkRequest
QueryVerifyUltraHonkRequest is the request for ProofVerifyUltraHonk.
The verification key is resolved by vkey_name or vkey_id from the store (must
be ultrahonk type). Proof and public_inputs are raw binary as produced by
Barretenberg (e.g. bb prove).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| proof | [bytes](#bytes) |  | proof is the raw UltraHonk proof bytes (e.g. from bb prove -o proof.bin). |
| public_inputs | [bytes](#bytes) |  | public_inputs is the raw public inputs binary: concatenated 32-byte big-endian field elements, as produced by Barretenberg (e.g. bb write_inputs or the same flow that generates the proof). |
| vkey_name | [string](#string) |  | vkey_name is the unique name of the UltraHonk verification key |
| vkey_id | [uint64](#uint64) |  | vkey_id is the numeric id of the UltraHonk verification key |
| expected_vkey_sha256 | [bytes](#bytes) |  | expected_vkey_sha256, when set, must equal SHA-256 over the resolved verification key&#39;s stored bytes, or verification fails with verified = false. Must be empty or exactly 32 bytes.

This makes the key-identity check atomic with the verdict: the consumer does not have to read the key back in a second query and hope nothing changed in between. Empty preserves the prior behaviour exactly, so existing callers are unaffected. |






<a name="xion-zk-v1-SnarkJsProof"></a>

### SnarkJsProof
SnarkJsProof represents a ZK-SNARK proof in SnarkJS format.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pi_a | [bytes](#bytes) | repeated | pi_a defines the first component of the proof. |
| pi_b | [bytes](#bytes) | repeated | pi_b defines the second component of the proof. |
| pi_c | [bytes](#bytes) | repeated | pi_c defines the third component of the proof. |






<a name="xion-zk-v1-VKey"></a>

### VKey
VKey represents a verification key for ZK proof verification.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key_bytes | [bytes](#bytes) |  | key_bytes is the raw bytes of the verification key. |
| name | [string](#string) |  | name is the unique human-readable identifier for this key. |
| description | [string](#string) |  | description provides additional context about the verification key. |
| circuit_hash | [string](#string) |  | circuit_hash is the hash of the circuit this key is associated with. |
| authority | [string](#string) |  | authority is the uploader of the verification key. |
| proof_system | [ProofSystem](#xion-zk-v1-ProofSystem) |  | proof_system identifies the ZK backend: GROTH16 (default) or ULTRA_HONK_ZK. |






<a name="xion-zk-v1-VKeyWithID"></a>

### VKeyWithID
VKeyWithID combines a verification key with its ID


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique identifier |
| vkey | [VKey](#xion-zk-v1-VKey) |  | vkey is the verification key |





 

 

 


<a name="xion-zk-v1-Query"></a>

### Query
Query provides defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ProofVerify | [QueryVerifyRequest](#xion-zk-v1-QueryVerifyRequest) | [ProofVerifyResponse](#xion-zk-v1-ProofVerifyResponse) | ProofVerify verifies a zk proof for email authentication. |
| ProofVerifyUltraHonk | [QueryVerifyUltraHonkRequest](#xion-zk-v1-QueryVerifyUltraHonkRequest) | [ProofVerifyUltraHonkResponse](#xion-zk-v1-ProofVerifyUltraHonkResponse) | ProofVerifyUltraHonk verifies an UltraHonk (Barretenberg) proof. The vkey is resolved by vkey_name or vkey_id from the store and must be of type ultrahonk. |
| ProofVerifyGnark | [QueryVerifyGnarkRequest](#xion-zk-v1-QueryVerifyGnarkRequest) | [ProofVerifyGnarkResponse](#xion-zk-v1-ProofVerifyGnarkResponse) | ProofVerifyGnark verifies a gnark native Groth16 proof (BN254). The vkey is resolved by vkey_name or vkey_id from the store and must be of type groth16_gnark. |
| VKey | [QueryVKeyRequest](#xion-zk-v1-QueryVKeyRequest) | [QueryVKeyResponse](#xion-zk-v1-QueryVKeyResponse) | VKey queries a verification key by ID |
| VKeyByName | [QueryVKeyByNameRequest](#xion-zk-v1-QueryVKeyByNameRequest) | [QueryVKeyByNameResponse](#xion-zk-v1-QueryVKeyByNameResponse) | VKeyByName queries a verification key by name |
| VKeys | [QueryVKeysRequest](#xion-zk-v1-QueryVKeysRequest) | [QueryVKeysResponse](#xion-zk-v1-QueryVKeysResponse) | VKeys queries all verification keys with pagination |
| HasVKey | [QueryHasVKeyRequest](#xion-zk-v1-QueryHasVKeyRequest) | [QueryHasVKeyResponse](#xion-zk-v1-QueryHasVKeyResponse) | HasVKey checks if a verification key exists by name |
| NextVKeyID | [QueryNextVKeyIDRequest](#xion-zk-v1-QueryNextVKeyIDRequest) | [QueryNextVKeyIDResponse](#xion-zk-v1-QueryNextVKeyIDResponse) | NextVKeyID queries the next available verification key ID |
| Params | [QueryParamsRequest](#xion-zk-v1-QueryParamsRequest) | [QueryParamsResponse](#xion-zk-v1-QueryParamsResponse) | Params returns zk module parameters. |

 



<a name="xion_zk_v1_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/genesis.proto



<a name="xion-zk-v1-GenesisState"></a>

### GenesisState
GenesisState defines the zk module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vkeys | [VKeyWithID](#xion-zk-v1-VKeyWithID) | repeated | vkeys is the list of all verification keys with their IDs |
| params | [Params](#xion-zk-v1-Params) |  | params defines the module parameters. |





 

 

 

 



<a name="xion_zk_v1_tx-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## xion/zk/v1/tx.proto



<a name="xion-zk-v1-MsgAddVKey"></a>

### MsgAddVKey
MsgAddVKey is the message for adding a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the unique identifier for this verification key |
| description | [string](#string) |  | description provides context about this verification key |
| vkey_bytes | [bytes](#bytes) |  | vkey_bytes is the verification key (Groth16 JSON or Barretenberg binary per proof_system). |
| proof_system | [ProofSystem](#xion-zk-v1-ProofSystem) |  | proof_system identifies the ZK backend: GROTH16 (default) or ULTRA_HONK_ZK. |






<a name="xion-zk-v1-MsgAddVKeyResponse"></a>

### MsgAddVKeyResponse
MsgAddVKeyResponse is the response for MsgAddVKey


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint64](#uint64) |  | id is the unique numeric identifier assigned to the vkey |






<a name="xion-zk-v1-MsgRemoveVKey"></a>

### MsgRemoveVKey
MsgRemoveVKey is the message for removing a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the identifier of the verification key to remove |






<a name="xion-zk-v1-MsgRemoveVKeyResponse"></a>

### MsgRemoveVKeyResponse
MsgRemoveVKeyResponse is the response for MsgRemoveVKey






<a name="xion-zk-v1-MsgUpdateParams"></a>

### MsgUpdateParams
MsgUpdateParams is the Msg/UpdateParams request type.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address of the governance account. |
| params | [Params](#xion-zk-v1-Params) |  | params defines the parameters to update.

NOTE: All parameters must be supplied. |






<a name="xion-zk-v1-MsgUpdateParamsResponse"></a>

### MsgUpdateParamsResponse
MsgUpdateParamsResponse defines the response structure for executing a
MsgUpdateParams message.






<a name="xion-zk-v1-MsgUpdateVKey"></a>

### MsgUpdateVKey
MsgUpdateVKey is the message for updating a verification key


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| authority | [string](#string) |  | authority is the address that controls the module (governance) |
| name | [string](#string) |  | name is the identifier of the verification key to update |
| description | [string](#string) |  | description provides updated context |
| vkey_bytes | [bytes](#bytes) |  | vkey_bytes is the new verification key (Groth16 JSON or Barretenberg binary per proof_system). |
| proof_system | [ProofSystem](#xion-zk-v1-ProofSystem) |  | proof_system identifies the ZK backend: GROTH16 (default) or ULTRA_HONK_ZK. |






<a name="xion-zk-v1-MsgUpdateVKeyResponse"></a>

### MsgUpdateVKeyResponse
MsgUpdateVKeyResponse is the response for MsgUpdateVKey





 

 

 


<a name="xion-zk-v1-Msg"></a>

### Msg
Msg defines the Msg service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| AddVKey | [MsgAddVKey](#xion-zk-v1-MsgAddVKey) | [MsgAddVKeyResponse](#xion-zk-v1-MsgAddVKeyResponse) | AddVKey adds a new verification key |
| UpdateVKey | [MsgUpdateVKey](#xion-zk-v1-MsgUpdateVKey) | [MsgUpdateVKeyResponse](#xion-zk-v1-MsgUpdateVKeyResponse) | UpdateVKey updates an existing verification key |
| RemoveVKey | [MsgRemoveVKey](#xion-zk-v1-MsgRemoveVKey) | [MsgRemoveVKeyResponse](#xion-zk-v1-MsgRemoveVKeyResponse) | RemoveVKey removes a verification key |
| UpdateParams | [MsgUpdateParams](#xion-zk-v1-MsgUpdateParams) | [MsgUpdateParamsResponse](#xion-zk-v1-MsgUpdateParamsResponse) | UpdateParams updates zk module parameters via governance. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

