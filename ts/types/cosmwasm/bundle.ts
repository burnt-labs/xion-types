//@ts-nocheck
import * as _143 from "./wasm/v1/authz";
import * as _144 from "./wasm/v1/genesis";
import * as _145 from "./wasm/v1/ibc";
import * as _146 from "./wasm/v1/proposal_legacy";
import * as _147 from "./wasm/v1/query";
import * as _148 from "./wasm/v1/tx";
import * as _149 from "./wasm/v1/types";
import * as _359 from "./wasm/v1/tx.amino";
import * as _360 from "./wasm/v1/tx.registry";
import * as _361 from "./wasm/v1/query.lcd";
import * as _362 from "./wasm/v1/query.rpc.Query";
import * as _363 from "./wasm/v1/tx.rpc.msg";
import * as _447 from "./lcd";
import * as _448 from "./rpc.query";
import * as _449 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._359,
      ..._360,
      ..._361,
      ..._362,
      ..._363
    };
  }
  export const ClientFactory = {
    ..._447,
    ..._448,
    ..._449
  };
}