//@ts-nocheck
import * as _265 from "./feeabs/v1beta1/epoch";
import * as _266 from "./feeabs/v1beta1/genesis";
import * as _267 from "./feeabs/v1beta1/osmosisibc";
import * as _268 from "./feeabs/v1beta1/params";
import * as _269 from "./feeabs/v1beta1/proposal";
import * as _270 from "./feeabs/v1beta1/query";
import * as _271 from "./feeabs/v1beta1/tx";
import * as _272 from "./globalfee/v1/genesis";
import * as _273 from "./globalfee/v1/query";
import * as _274 from "./jwk/v1/audience";
import * as _275 from "./jwk/v1/genesis";
import * as _276 from "./jwk/v1/params";
import * as _277 from "./jwk/v1/query";
import * as _278 from "./jwk/v1/tx";
import * as _279 from "./mint/v1/event";
import * as _280 from "./mint/v1/genesis";
import * as _281 from "./mint/v1/mint";
import * as _282 from "./mint/v1/query";
import * as _283 from "./mint/v1/tx";
import * as _284 from "./v1/feegrant";
import * as _285 from "./v1/genesis";
import * as _286 from "./v1/query";
import * as _287 from "./v1/tx";
import * as _453 from "./feeabs/v1beta1/tx.amino";
import * as _454 from "./jwk/v1/tx.amino";
import * as _455 from "./mint/v1/tx.amino";
import * as _456 from "./v1/tx.amino";
import * as _457 from "./feeabs/v1beta1/tx.registry";
import * as _458 from "./jwk/v1/tx.registry";
import * as _459 from "./mint/v1/tx.registry";
import * as _460 from "./v1/tx.registry";
import * as _461 from "./feeabs/v1beta1/query.lcd";
import * as _462 from "./globalfee/v1/query.lcd";
import * as _463 from "./jwk/v1/query.lcd";
import * as _464 from "./mint/v1/query.lcd";
import * as _465 from "./feeabs/v1beta1/query.rpc.Query";
import * as _466 from "./globalfee/v1/query.rpc.Query";
import * as _467 from "./jwk/v1/query.rpc.Query";
import * as _468 from "./mint/v1/query.rpc.Query";
import * as _469 from "./v1/query.rpc.Query";
import * as _470 from "./feeabs/v1beta1/tx.rpc.msg";
import * as _471 from "./jwk/v1/tx.rpc.msg";
import * as _472 from "./mint/v1/tx.rpc.msg";
import * as _473 from "./v1/tx.rpc.msg";
import * as _486 from "./lcd";
import * as _487 from "./rpc.query";
import * as _488 from "./rpc.tx";
export namespace xion {
  export namespace feeabs {
    export const v1beta1 = {
      ..._265,
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._453,
      ..._457,
      ..._461,
      ..._465,
      ..._470
    };
  }
  export namespace globalfee {
    export const v1 = {
      ..._272,
      ..._273,
      ..._462,
      ..._466
    };
  }
  export namespace jwk {
    export const v1 = {
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._454,
      ..._458,
      ..._463,
      ..._467,
      ..._471
    };
  }
  export namespace mint {
    export const v1 = {
      ..._279,
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._455,
      ..._459,
      ..._464,
      ..._468,
      ..._472
    };
  }
  export const v1 = {
    ..._284,
    ..._285,
    ..._286,
    ..._287,
    ..._456,
    ..._460,
    ..._469,
    ..._473
  };
  export const ClientFactory = {
    ..._486,
    ..._487,
    ..._488
  };
}