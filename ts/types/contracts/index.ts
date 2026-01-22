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

// Account contract types - with prefixed names to avoid conflicts
export type {
  Binary as AccountBinary,
  InstantiateMsg as AccountInstantiateMsg,
  ExecuteMsg as AccountExecuteMsg,
  QueryMsg as AccountQueryMsg,
  AddAuthenticator,
} from "./account/ts/Account.types";
