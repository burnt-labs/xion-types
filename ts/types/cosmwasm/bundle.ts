//@ts-nocheck
import * as _149 from "./wasm/v1/authz";
import * as _150 from "./wasm/v1/genesis";
import * as _151 from "./wasm/v1/ibc";
import * as _152 from "./wasm/v1/proposal_legacy";
import * as _153 from "./wasm/v1/query";
import * as _154 from "./wasm/v1/tx";
import * as _155 from "./wasm/v1/types";
import * as _404 from "./wasm/v1/tx.amino";
import * as _405 from "./wasm/v1/tx.registry";
import * as _406 from "./wasm/v1/query.lcd";
import * as _407 from "./wasm/v1/query.rpc.Query";
import * as _408 from "./wasm/v1/tx.rpc.msg";
import * as _481 from "./lcd";
import * as _482 from "./rpc.query";
import * as _483 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._404,
      ..._405,
      ..._406,
      ..._407,
      ..._408
    };
  }
  export const ClientFactory = {
    ..._481,
    ..._482,
    ..._483
  };
}