/**
 * Compile-time check: xion-types proto fields must use bigint, not Long.
 * Run via: pnpm typecheck
 *
 * If codegen regresses to forceLong=long, this file will fail to compile with
 * "Type 'Long' is not assignable to type 'bigint'".
 */

import { AbstractAccount } from "../types/abstractaccount/v1/account";
import { MsgRegisterAccount } from "../types/abstractaccount/v1/tx";
import { SignDoc, TxBody, AuthInfo, Fee, SignerInfo } from "../types/cosmos/tx/v1beta1/tx";
import { SignMode } from "../types/cosmos/tx/signing/v1beta1/signing";

// Each assignment is a type assertion: if the field is Long, assigning a bigint
// literal will produce a compile error.

const _doc: SignDoc = {
  bodyBytes: new Uint8Array(),
  authInfoBytes: new Uint8Array(),
  chainId: "xion-testnet-2",
  accountNumber: 0n,
};

const _fee: Fee = {
  amount: [],
  gasLimit: 200_000n,
  payer: "",
  granter: "",
};

const _aa: AbstractAccount = {
  address: "xion1test",
  accountNumber: 1n,
  sequence: 0n,
};

const _msg: MsgRegisterAccount = {
  sender: "xion1test",
  codeId: 1n,
  msg: new Uint8Array(),
  funds: [],
  salt: new Uint8Array(),
};

// Verify SignMode is accessible (enum, not bigint — just a smoke check)
const _mode: SignMode = SignMode.SIGN_MODE_DIRECT;

export {};
