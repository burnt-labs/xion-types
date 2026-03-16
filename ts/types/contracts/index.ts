/**
 * CosmWasm Contract Types
 * Auto-generated from contract schemas using @cosmwasm/ts-codegen
 *
 * Types are always available. Client classes and message composers
 * require @interchainjs/* peer dependencies and must be imported
 * directly from their respective files.
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
