//@ts-nocheck
import * as _207 from "./applications/interchain_accounts/controller/v1/controller";
import * as _208 from "./applications/interchain_accounts/controller/v1/query";
import * as _209 from "./applications/interchain_accounts/controller/v1/tx";
import * as _210 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _211 from "./applications/interchain_accounts/host/v1/host";
import * as _212 from "./applications/interchain_accounts/host/v1/query";
import * as _213 from "./applications/interchain_accounts/host/v1/tx";
import * as _214 from "./applications/interchain_accounts/v1/account";
import * as _215 from "./applications/interchain_accounts/v1/metadata";
import * as _216 from "./applications/interchain_accounts/v1/packet";
import * as _217 from "./applications/transfer/v1/authz";
import * as _218 from "./applications/transfer/v1/denomtrace";
import * as _219 from "./applications/transfer/v1/genesis";
import * as _220 from "./applications/transfer/v1/packet";
import * as _221 from "./applications/transfer/v1/query";
import * as _222 from "./applications/transfer/v1/token";
import * as _223 from "./applications/transfer/v1/transfer";
import * as _224 from "./applications/transfer/v1/tx";
import * as _225 from "./core/channel/v1/channel";
import * as _226 from "./core/channel/v1/genesis";
import * as _227 from "./core/channel/v1/query";
import * as _228 from "./core/channel/v1/tx";
import * as _229 from "./core/channel/v2/genesis";
import * as _230 from "./core/channel/v2/packet";
import * as _231 from "./core/channel/v2/query";
import * as _232 from "./core/channel/v2/tx";
import * as _233 from "./core/client/v1/client";
import * as _234 from "./core/client/v1/genesis";
import * as _235 from "./core/client/v1/query";
import * as _236 from "./core/client/v1/tx";
import * as _237 from "./core/client/v2/config";
import * as _238 from "./core/client/v2/counterparty";
import * as _239 from "./core/client/v2/genesis";
import * as _240 from "./core/client/v2/query";
import * as _241 from "./core/client/v2/tx";
import * as _242 from "./core/commitment/v1/commitment";
import * as _243 from "./core/commitment/v2/commitment";
import * as _244 from "./core/connection/v1/connection";
import * as _245 from "./core/connection/v1/genesis";
import * as _246 from "./core/connection/v1/query";
import * as _247 from "./core/connection/v1/tx";
import * as _248 from "./core/types/v1/genesis";
import * as _249 from "./lightclients/solomachine/v2/solomachine";
import * as _250 from "./lightclients/solomachine/v3/solomachine";
import * as _251 from "./lightclients/tendermint/v1/tendermint";
import * as _252 from "./lightclients/wasm/v1/genesis";
import * as _253 from "./lightclients/wasm/v1/query";
import * as _254 from "./lightclients/wasm/v1/tx";
import * as _255 from "./lightclients/wasm/v1/wasm";
import * as _409 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _410 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _411 from "./applications/transfer/v1/tx.amino";
import * as _412 from "./core/channel/v1/tx.amino";
import * as _413 from "./core/channel/v2/tx.amino";
import * as _414 from "./core/client/v1/tx.amino";
import * as _415 from "./core/client/v2/tx.amino";
import * as _416 from "./core/connection/v1/tx.amino";
import * as _417 from "./lightclients/wasm/v1/tx.amino";
import * as _418 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _419 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _420 from "./applications/transfer/v1/tx.registry";
import * as _421 from "./core/channel/v1/tx.registry";
import * as _422 from "./core/channel/v2/tx.registry";
import * as _423 from "./core/client/v1/tx.registry";
import * as _424 from "./core/client/v2/tx.registry";
import * as _425 from "./core/connection/v1/tx.registry";
import * as _426 from "./lightclients/wasm/v1/tx.registry";
import * as _427 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _428 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _429 from "./applications/transfer/v1/query.lcd";
import * as _430 from "./core/channel/v1/query.lcd";
import * as _431 from "./core/channel/v2/query.lcd";
import * as _432 from "./core/client/v1/query.lcd";
import * as _433 from "./core/client/v2/query.lcd";
import * as _434 from "./core/connection/v1/query.lcd";
import * as _435 from "./lightclients/wasm/v1/query.lcd";
import * as _436 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _437 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _438 from "./applications/transfer/v1/query.rpc.Query";
import * as _439 from "./core/channel/v1/query.rpc.Query";
import * as _440 from "./core/channel/v2/query.rpc.Query";
import * as _441 from "./core/client/v1/query.rpc.Query";
import * as _442 from "./core/client/v2/query.rpc.Query";
import * as _443 from "./core/connection/v1/query.rpc.Query";
import * as _444 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _445 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _446 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _447 from "./applications/transfer/v1/tx.rpc.msg";
import * as _448 from "./core/channel/v1/tx.rpc.msg";
import * as _449 from "./core/channel/v2/tx.rpc.msg";
import * as _450 from "./core/client/v1/tx.rpc.msg";
import * as _451 from "./core/client/v2/tx.rpc.msg";
import * as _452 from "./core/connection/v1/tx.rpc.msg";
import * as _453 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _484 from "./lcd";
import * as _485 from "./rpc.query";
import * as _486 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._207,
          ..._208,
          ..._209,
          ..._409,
          ..._418,
          ..._427,
          ..._436,
          ..._445
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._210
        };
      }
      export namespace host {
        export const v1 = {
          ..._211,
          ..._212,
          ..._213,
          ..._410,
          ..._419,
          ..._428,
          ..._437,
          ..._446
        };
      }
      export const v1 = {
        ..._214,
        ..._215,
        ..._216
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._217,
        ..._218,
        ..._219,
        ..._220,
        ..._221,
        ..._222,
        ..._223,
        ..._224,
        ..._411,
        ..._420,
        ..._429,
        ..._438,
        ..._447
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._225,
        ..._226,
        ..._227,
        ..._228,
        ..._412,
        ..._421,
        ..._430,
        ..._439,
        ..._448
      };
      export const v2 = {
        ..._229,
        ..._230,
        ..._231,
        ..._232,
        ..._413,
        ..._422,
        ..._431,
        ..._440,
        ..._449
      };
    }
    export namespace client {
      export const v1 = {
        ..._233,
        ..._234,
        ..._235,
        ..._236,
        ..._414,
        ..._423,
        ..._432,
        ..._441,
        ..._450
      };
      export const v2 = {
        ..._237,
        ..._238,
        ..._239,
        ..._240,
        ..._241,
        ..._415,
        ..._424,
        ..._433,
        ..._442,
        ..._451
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._242
      };
      export const v2 = {
        ..._243
      };
    }
    export namespace connection {
      export const v1 = {
        ..._244,
        ..._245,
        ..._246,
        ..._247,
        ..._416,
        ..._425,
        ..._434,
        ..._443,
        ..._452
      };
    }
    export namespace types {
      export const v1 = {
        ..._248
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._249
      };
      export const v3 = {
        ..._250
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._251
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._252,
        ..._253,
        ..._254,
        ..._255,
        ..._417,
        ..._426,
        ..._435,
        ..._444,
        ..._453
      };
    }
  }
  export const ClientFactory = {
    ..._484,
    ..._485,
    ..._486
  };
}