//@ts-nocheck
import * as _266 from "./feeabs/v1beta1/epoch";
import * as _267 from "./feeabs/v1beta1/genesis";
import * as _268 from "./feeabs/v1beta1/osmosisibc";
import * as _269 from "./feeabs/v1beta1/params";
import * as _270 from "./feeabs/v1beta1/proposal";
import * as _271 from "./feeabs/v1beta1/query";
import * as _272 from "./feeabs/v1beta1/tx";
import * as _273 from "./globalfee/v1/genesis";
import * as _274 from "./globalfee/v1/query";
import * as _275 from "./jwk/v1/audience";
import * as _276 from "./jwk/v1/genesis";
import * as _277 from "./jwk/v1/params";
import * as _278 from "./jwk/v1/query";
import * as _279 from "./jwk/v1/tx";
import * as _280 from "./mint/v1/event";
import * as _281 from "./mint/v1/genesis";
import * as _282 from "./mint/v1/mint";
import * as _283 from "./mint/v1/query";
import * as _284 from "./mint/v1/tx";
import * as _285 from "./v1/feegrant";
import * as _286 from "./v1/genesis";
import * as _287 from "./v1/query";
import * as _288 from "./v1/tx";
import * as _454 from "./feeabs/v1beta1/tx.amino";
import * as _455 from "./jwk/v1/tx.amino";
import * as _456 from "./mint/v1/tx.amino";
import * as _457 from "./v1/tx.amino";
import * as _458 from "./feeabs/v1beta1/tx.registry";
import * as _459 from "./jwk/v1/tx.registry";
import * as _460 from "./mint/v1/tx.registry";
import * as _461 from "./v1/tx.registry";
import * as _462 from "./feeabs/v1beta1/query.lcd";
import * as _463 from "./globalfee/v1/query.lcd";
import * as _464 from "./jwk/v1/query.lcd";
import * as _465 from "./mint/v1/query.lcd";
import * as _466 from "./feeabs/v1beta1/query.rpc.Query";
import * as _467 from "./globalfee/v1/query.rpc.Query";
import * as _468 from "./jwk/v1/query.rpc.Query";
import * as _469 from "./mint/v1/query.rpc.Query";
import * as _470 from "./v1/query.rpc.Query";
import * as _471 from "./feeabs/v1beta1/tx.rpc.msg";
import * as _472 from "./jwk/v1/tx.rpc.msg";
import * as _473 from "./mint/v1/tx.rpc.msg";
import * as _474 from "./v1/tx.rpc.msg";
import * as _487 from "./lcd";
import * as _488 from "./rpc.query";
import * as _489 from "./rpc.tx";
export namespace xion {
  export namespace feeabs {
    export const v1beta1 = {
      ..._266,
      ..._267,
      ..._268,
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._454,
      ..._458,
      ..._462,
      ..._466,
      ..._471
    };
  }
  export namespace globalfee {
    export const v1 = {
      ..._273,
      ..._274,
      ..._463,
      ..._467
    };
  }
  export namespace jwk {
    export const v1 = {
      ..._275,
      ..._276,
      ..._277,
      ..._278,
      ..._279,
      ..._455,
      ..._459,
      ..._464,
      ..._468,
      ..._472
    };
  }
  export namespace mint {
    export const v1 = {
      ..._280,
      ..._281,
      ..._282,
      ..._283,
      ..._284,
      ..._456,
      ..._460,
      ..._465,
      ..._469,
      ..._473
    };
  }
  export const v1 = {
    ..._285,
    ..._286,
    ..._287,
    ..._288,
    ..._457,
    ..._461,
    ..._470,
    ..._474
  };
  export const ClientFactory = {
    ..._487,
    ..._488,
    ..._489
  };
}