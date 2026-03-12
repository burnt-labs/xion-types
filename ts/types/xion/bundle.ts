//@ts-nocheck
import * as _216 from "./dkim/v1/genesis";
import * as _217 from "./dkim/v1/query";
import * as _218 from "./dkim/v1/state";
import * as _219 from "./dkim/v1/tx";
import * as _220 from "./feeabs/v1beta1/epoch";
import * as _221 from "./feeabs/v1beta1/genesis";
import * as _222 from "./feeabs/v1beta1/osmosisibc";
import * as _223 from "./feeabs/v1beta1/params";
import * as _224 from "./feeabs/v1beta1/proposal";
import * as _225 from "./feeabs/v1beta1/query";
import * as _226 from "./feeabs/v1beta1/tx";
import * as _227 from "./globalfee/v1/genesis";
import * as _228 from "./globalfee/v1/query";
import * as _229 from "./indexer/authz/v1/query";
import * as _230 from "./indexer/feegrant/v1/query";
import * as _231 from "./jwk/v1/audience";
import * as _232 from "./jwk/v1/genesis";
import * as _233 from "./jwk/v1/params";
import * as _234 from "./jwk/v1/query";
import * as _235 from "./jwk/v1/tx";
import * as _236 from "./mint/v1/event";
import * as _237 from "./mint/v1/genesis";
import * as _238 from "./mint/v1/mint";
import * as _239 from "./mint/v1/query";
import * as _240 from "./mint/v1/tx";
import * as _241 from "./v1/feegrant";
import * as _242 from "./v1/genesis";
import * as _243 from "./v1/query";
import * as _244 from "./v1/tx";
import * as _245 from "./zk/v1/genesis";
import * as _246 from "./zk/v1/params";
import * as _247 from "./zk/v1/query";
import * as _248 from "./zk/v1/tx";
import * as _409 from "./dkim/v1/tx.amino";
import * as _410 from "./feeabs/v1beta1/tx.amino";
import * as _411 from "./jwk/v1/tx.amino";
import * as _412 from "./mint/v1/tx.amino";
import * as _413 from "./v1/tx.amino";
import * as _414 from "./zk/v1/tx.amino";
import * as _415 from "./dkim/v1/tx.registry";
import * as _416 from "./feeabs/v1beta1/tx.registry";
import * as _417 from "./jwk/v1/tx.registry";
import * as _418 from "./mint/v1/tx.registry";
import * as _419 from "./v1/tx.registry";
import * as _420 from "./zk/v1/tx.registry";
import * as _421 from "./dkim/v1/query.lcd";
import * as _422 from "./feeabs/v1beta1/query.lcd";
import * as _423 from "./globalfee/v1/query.lcd";
import * as _424 from "./indexer/authz/v1/query.lcd";
import * as _425 from "./indexer/feegrant/v1/query.lcd";
import * as _426 from "./jwk/v1/query.lcd";
import * as _427 from "./mint/v1/query.lcd";
import * as _428 from "./zk/v1/query.lcd";
import * as _429 from "./dkim/v1/query.rpc.Query";
import * as _430 from "./feeabs/v1beta1/query.rpc.Query";
import * as _431 from "./globalfee/v1/query.rpc.Query";
import * as _432 from "./indexer/authz/v1/query.rpc.Query";
import * as _433 from "./indexer/feegrant/v1/query.rpc.Query";
import * as _434 from "./jwk/v1/query.rpc.Query";
import * as _435 from "./mint/v1/query.rpc.Query";
import * as _436 from "./v1/query.rpc.Query";
import * as _437 from "./zk/v1/query.rpc.Query";
import * as _438 from "./dkim/v1/tx.rpc.msg";
import * as _439 from "./feeabs/v1beta1/tx.rpc.msg";
import * as _440 from "./jwk/v1/tx.rpc.msg";
import * as _441 from "./mint/v1/tx.rpc.msg";
import * as _442 from "./v1/tx.rpc.msg";
import * as _443 from "./zk/v1/tx.rpc.msg";
import * as _453 from "./lcd";
import * as _454 from "./rpc.query";
import * as _455 from "./rpc.tx";
export namespace xion {
  export namespace dkim {
    export const v1 = {
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._409,
      ..._415,
      ..._421,
      ..._429,
      ..._438
    };
  }
  export namespace feeabs {
    export const v1beta1 = {
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._410,
      ..._416,
      ..._422,
      ..._430,
      ..._439
    };
  }
  export namespace globalfee {
    export const v1 = {
      ..._227,
      ..._228,
      ..._423,
      ..._431
    };
  }
  export namespace indexer {
    export namespace authz {
      export const v1 = {
        ..._229,
        ..._424,
        ..._432
      };
    }
    export namespace feegrant {
      export const v1 = {
        ..._230,
        ..._425,
        ..._433
      };
    }
  }
  export namespace jwk {
    export const v1 = {
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._411,
      ..._417,
      ..._426,
      ..._434,
      ..._440
    };
  }
  export namespace mint {
    export const v1 = {
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._412,
      ..._418,
      ..._427,
      ..._435,
      ..._441
    };
  }
  export const v1 = {
    ..._241,
    ..._242,
    ..._243,
    ..._244,
    ..._413,
    ..._419,
    ..._436,
    ..._442
  };
  export namespace zk {
    export const v1 = {
      ..._245,
      ..._246,
      ..._247,
      ..._248,
      ..._414,
      ..._420,
      ..._428,
      ..._437,
      ..._443
    };
  }
  export const ClientFactory = {
    ..._453,
    ..._454,
    ..._455
  };
}