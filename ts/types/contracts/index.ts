/**
 * CosmWasm Contract Types
 * Auto-generated from contract schemas using @cosmwasm/ts-codegen
 */

// Treasury contract types
export type {
  Addr as TreasuryAddr,
  Binary as TreasuryBinary,
  InstantiateMsg as TreasuryInstantiateMsg,
  FeeConfig,
  Any as TreasuryAny,
  GrantConfig,
  ExecuteMsg as TreasuryExecuteMsg,
  Uint128,
  Params,
  Coin,
  QueryMsg as TreasuryQueryMsg,
} from "./treasury/ts/Treasury.types";

// Treasury contract clients (cosmjs-based)
export {
  TreasuryQueryClient,
  TreasuryClient,
  type TreasuryReadOnlyInterface,
  type TreasuryInterface,
} from "./treasury/ts/Treasury.client";

// Treasury message composer (cosmjs-based)
export {
  TreasuryMsgComposer,
  type TreasuryMsg,
} from "./treasury/ts/Treasury.message-composer";

// Account contract types
export type {
  Binary as AccountBinary,
  InstantiateMsg as AccountInstantiateMsg,
  ExecuteMsg as AccountExecuteMsg,
  QueryMsg as AccountQueryMsg,
  AddAuthenticator,
  MigrateMsg as AccountMigrateMsg,
} from "./account/ts/Account.types";

// Account contract clients (cosmjs-based)
export {
  AccountQueryClient,
  AccountClient,
  type AccountReadOnlyInterface,
  type AccountInterface,
} from "./account/ts/Account.client";

// Account message composer (cosmjs-based)
export {
  AccountMsgComposer,
  type AccountMsg,
} from "./account/ts/Account.message-composer";
