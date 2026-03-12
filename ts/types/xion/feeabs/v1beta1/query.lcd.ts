//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryOsmosisArithmeticTwapRequest, QueryOsmosisArithmeticTwapResponseSDKType, QueryFeeabsModuleBalancesRequest, QueryFeeabsModuleBalancesResponseSDKType, QueryHostChainConfigRequest, QueryHostChainConfigResponseSDKType, QueryAllHostChainConfigRequest, QueryAllHostChainConfigResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.osmosisArithmeticTwap = this.osmosisArithmeticTwap.bind(this);
    this.feeabsModuleBalances = this.feeabsModuleBalances.bind(this);
    this.hostChainConfig = this.hostChainConfig.bind(this);
    this.allHostChainConfig = this.allHostChainConfig.bind(this);
  }
  /* OsmosisArithmeticTwap return spot price of pair Osmo/nativeToken */
  async osmosisArithmeticTwap(params: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/osmosis-arithmetic-twap/${params.ibcDenom}`;
    return await this.req.get<QueryOsmosisArithmeticTwapResponseSDKType>(endpoint);
  }
  /* FeeabsModuleBalances return total balances of feeabs module */
  async feeabsModuleBalances(_params: QueryFeeabsModuleBalancesRequest = {}): Promise<QueryFeeabsModuleBalancesResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/module-balances`;
    return await this.req.get<QueryFeeabsModuleBalancesResponseSDKType>(endpoint);
  }
  /* HostChainConfig */
  async hostChainConfig(params: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/host-chain-config/${params.ibcDenom}`;
    return await this.req.get<QueryHostChainConfigResponseSDKType>(endpoint);
  }
  /* AllHostChainConfig */
  async allHostChainConfig(_params: QueryAllHostChainConfigRequest = {}): Promise<QueryAllHostChainConfigResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/all-host-chain-config`;
    return await this.req.get<QueryAllHostChainConfigResponseSDKType>(endpoint);
  }
}