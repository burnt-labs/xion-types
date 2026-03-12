/**
 * CosmWasm Contract Types
 * Auto-generated from contract schemas using @cosmwasm/ts-codegen
 *
 * Types are always available. Client classes and message composers
 * require @cosmjs/* peer dependencies to be installed.
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

// Account contract types
export type {
  Binary as AccountBinary,
  InstantiateMsg as AccountInstantiateMsg,
  ExecuteMsg as AccountExecuteMsg,
  QueryMsg as AccountQueryMsg,
  AddAuthenticator,
  MigrateMsg as AccountMigrateMsg,
} from "./account/ts/Account.types";

// Treasury contract clients (require @cosmjs/cosmwasm-stargate peer dependency)
export {
  TreasuryQueryClient,
  TreasuryClient,
  type TreasuryReadOnlyInterface,
  type TreasuryInterface,
} from "./treasury/ts/Treasury.client";

// Treasury message composer (require @cosmjs/cosmwasm-stargate, @cosmjs/encoding, cosmjs-types peer dependencies)
export {
  TreasuryMsgComposer,
  type TreasuryMsg,
} from "./treasury/ts/Treasury.message-composer";

// Account contract clients (require @cosmjs/cosmwasm-stargate peer dependency)
export {
  AccountQueryClient,
  AccountClient,
  type AccountReadOnlyInterface,
  type AccountInterface,
} from "./account/ts/Account.client";

// Account message composer (require @cosmjs/cosmwasm-stargate, @cosmjs/encoding, cosmjs-types peer dependencies)
export {
  AccountMsgComposer,
  type AccountMsg,
} from "./account/ts/Account.message-composer";
