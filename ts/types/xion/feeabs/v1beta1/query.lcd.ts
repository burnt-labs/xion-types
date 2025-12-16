//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
import { QueryOsmosisArithmeticTwapRequest, QueryOsmosisArithmeticTwapResponseSDKType, QueryFeeabsModuleBalacesRequest, QueryFeeabsModuleBalacesResponseSDKType, QueryHostChainConfigRequest, QueryHostChainConfigResponseSDKType, AllQueryHostChainConfigRequest, AllQueryHostChainConfigResponseSDKType } from "./query";
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
  async feeabsModuleBalances(_params: QueryFeeabsModuleBalacesRequest = {}): Promise<QueryFeeabsModuleBalacesResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/module-balances`;
    return await this.req.get<QueryFeeabsModuleBalacesResponseSDKType>(endpoint);
  }
  /* HostChainConfig */
  async hostChainConfig(params: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/host-chain-config/${params.ibcDenom}`;
    return await this.req.get<QueryHostChainConfigResponseSDKType>(endpoint);
  }
  /* AllHostChainConfig */
  async allHostChainConfig(_params: AllQueryHostChainConfigRequest = {}): Promise<AllQueryHostChainConfigResponseSDKType> {
    const endpoint = `fee-abstraction/feeabs/v1/all-host-chain-config`;
    return await this.req.get<AllQueryHostChainConfigResponseSDKType>(endpoint);
  }
}