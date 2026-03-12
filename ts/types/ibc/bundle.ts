//@ts-nocheck
import * as _157 from "./applications/interchain_accounts/controller/v1/controller";
import * as _158 from "./applications/interchain_accounts/controller/v1/query";
import * as _159 from "./applications/interchain_accounts/controller/v1/tx";
import * as _160 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _161 from "./applications/interchain_accounts/host/v1/host";
import * as _162 from "./applications/interchain_accounts/host/v1/query";
import * as _163 from "./applications/interchain_accounts/host/v1/tx";
import * as _164 from "./applications/interchain_accounts/v1/account";
import * as _165 from "./applications/interchain_accounts/v1/metadata";
import * as _166 from "./applications/interchain_accounts/v1/packet";
import * as _167 from "./applications/transfer/v1/authz";
import * as _168 from "./applications/transfer/v1/denomtrace";
import * as _169 from "./applications/transfer/v1/genesis";
import * as _170 from "./applications/transfer/v1/packet";
import * as _171 from "./applications/transfer/v1/query";
import * as _172 from "./applications/transfer/v1/token";
import * as _173 from "./applications/transfer/v1/transfer";
import * as _174 from "./applications/transfer/v1/tx";
import * as _175 from "./core/channel/v1/channel";
import * as _176 from "./core/channel/v1/genesis";
import * as _177 from "./core/channel/v1/query";
import * as _178 from "./core/channel/v1/tx";
import * as _179 from "./core/channel/v2/genesis";
import * as _180 from "./core/channel/v2/packet";
import * as _181 from "./core/channel/v2/query";
import * as _182 from "./core/channel/v2/tx";
import * as _183 from "./core/client/v1/client";
import * as _184 from "./core/client/v1/genesis";
import * as _185 from "./core/client/v1/query";
import * as _186 from "./core/client/v1/tx";
import * as _187 from "./core/client/v2/config";
import * as _188 from "./core/client/v2/counterparty";
import * as _189 from "./core/client/v2/genesis";
import * as _190 from "./core/client/v2/query";
import * as _191 from "./core/client/v2/tx";
import * as _192 from "./core/commitment/v1/commitment";
import * as _193 from "./core/commitment/v2/commitment";
import * as _194 from "./core/connection/v1/connection";
import * as _195 from "./core/connection/v1/genesis";
import * as _196 from "./core/connection/v1/query";
import * as _197 from "./core/connection/v1/tx";
import * as _198 from "./core/types/v1/genesis";
import * as _199 from "./lightclients/solomachine/v2/solomachine";
import * as _200 from "./lightclients/solomachine/v3/solomachine";
import * as _201 from "./lightclients/tendermint/v1/tendermint";
import * as _202 from "./lightclients/wasm/v1/genesis";
import * as _203 from "./lightclients/wasm/v1/query";
import * as _204 from "./lightclients/wasm/v1/tx";
import * as _205 from "./lightclients/wasm/v1/wasm";
import * as _364 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _365 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _366 from "./applications/transfer/v1/tx.amino";
import * as _367 from "./core/channel/v1/tx.amino";
import * as _368 from "./core/channel/v2/tx.amino";
import * as _369 from "./core/client/v1/tx.amino";
import * as _370 from "./core/client/v2/tx.amino";
import * as _371 from "./core/connection/v1/tx.amino";
import * as _372 from "./lightclients/wasm/v1/tx.amino";
import * as _373 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _374 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _375 from "./applications/transfer/v1/tx.registry";
import * as _376 from "./core/channel/v1/tx.registry";
import * as _377 from "./core/channel/v2/tx.registry";
import * as _378 from "./core/client/v1/tx.registry";
import * as _379 from "./core/client/v2/tx.registry";
import * as _380 from "./core/connection/v1/tx.registry";
import * as _381 from "./lightclients/wasm/v1/tx.registry";
import * as _382 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _383 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _384 from "./applications/transfer/v1/query.lcd";
import * as _385 from "./core/channel/v1/query.lcd";
import * as _386 from "./core/channel/v2/query.lcd";
import * as _387 from "./core/client/v1/query.lcd";
import * as _388 from "./core/client/v2/query.lcd";
import * as _389 from "./core/connection/v1/query.lcd";
import * as _390 from "./lightclients/wasm/v1/query.lcd";
import * as _391 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _392 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _393 from "./applications/transfer/v1/query.rpc.Query";
import * as _394 from "./core/channel/v1/query.rpc.Query";
import * as _395 from "./core/channel/v2/query.rpc.Query";
import * as _396 from "./core/client/v1/query.rpc.Query";
import * as _397 from "./core/client/v2/query.rpc.Query";
import * as _398 from "./core/connection/v1/query.rpc.Query";
import * as _399 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _400 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _401 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _402 from "./applications/transfer/v1/tx.rpc.msg";
import * as _403 from "./core/channel/v1/tx.rpc.msg";
import * as _404 from "./core/channel/v2/tx.rpc.msg";
import * as _405 from "./core/client/v1/tx.rpc.msg";
import * as _406 from "./core/client/v2/tx.rpc.msg";
import * as _407 from "./core/connection/v1/tx.rpc.msg";
import * as _408 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _450 from "./lcd";
import * as _451 from "./rpc.query";
import * as _452 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._157,
          ..._158,
          ..._159,
          ..._364,
          ..._373,
          ..._382,
          ..._391,
          ..._400
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._160
        };
      }
      export namespace host {
        export const v1 = {
          ..._161,
          ..._162,
          ..._163,
          ..._365,
          ..._374,
          ..._383,
          ..._392,
          ..._401
        };
      }
      export const v1 = {
        ..._164,
        ..._165,
        ..._166
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._366,
        ..._375,
        ..._384,
        ..._393,
        ..._402
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._367,
        ..._376,
        ..._385,
        ..._394,
        ..._403
      };
      export const v2 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._368,
        ..._377,
        ..._386,
        ..._395,
        ..._404
      };
    }
    export namespace client {
      export const v1 = {
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._369,
        ..._378,
        ..._387,
        ..._396,
        ..._405
      };
      export const v2 = {
        ..._187,
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._370,
        ..._379,
        ..._388,
        ..._397,
        ..._406
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._192
      };
      export const v2 = {
        ..._193
      };
    }
    export namespace connection {
      export const v1 = {
        ..._194,
        ..._195,
        ..._196,
        ..._197,
        ..._371,
        ..._380,
        ..._389,
        ..._398,
        ..._407
      };
    }
    export namespace types {
      export const v1 = {
        ..._198
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = {
        ..._199
      };
      export const v3 = {
        ..._200
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._201
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._202,
        ..._203,
        ..._204,
        ..._205,
        ..._372,
        ..._381,
        ..._390,
        ..._399,
        ..._408
      };
    }
  }
  export const ClientFactory = {
    ..._450,
    ..._451,
    ..._452
  };
}