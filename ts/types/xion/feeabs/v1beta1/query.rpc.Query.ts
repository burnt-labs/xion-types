//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOsmosisArithmeticTwapRequest, QueryOsmosisArithmeticTwapResponse, QueryFeeabsModuleBalacesRequest, QueryFeeabsModuleBalacesResponse, QueryHostChainConfigRequest, QueryHostChainConfigResponse, AllQueryHostChainConfigRequest, AllQueryHostChainConfigResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** OsmosisArithmeticTwap return spot price of pair Osmo/nativeToken */
  osmosisArithmeticTwap(request: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponse>;
  /** FeeabsModuleBalances return total balances of feeabs module */
  feeabsModuleBalances(request?: QueryFeeabsModuleBalacesRequest): Promise<QueryFeeabsModuleBalacesResponse>;
  /** HostChainConfig */
  hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse>;
  /** AllHostChainConfig */
  allHostChainConfig(request?: AllQueryHostChainConfigRequest): Promise<AllQueryHostChainConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.osmosisArithmeticTwap = this.osmosisArithmeticTwap.bind(this);
    this.feeabsModuleBalances = this.feeabsModuleBalances.bind(this);
    this.hostChainConfig = this.hostChainConfig.bind(this);
    this.allHostChainConfig = this.allHostChainConfig.bind(this);
  }
  osmosisArithmeticTwap(request: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponse> {
    const data = QueryOsmosisArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "OsmosisArithmeticTwap", data);
    return promise.then(data => QueryOsmosisArithmeticTwapResponse.decode(new BinaryReader(data)));
  }
  feeabsModuleBalances(request: QueryFeeabsModuleBalacesRequest = {}): Promise<QueryFeeabsModuleBalacesResponse> {
    const data = QueryFeeabsModuleBalacesRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "FeeabsModuleBalances", data);
    return promise.then(data => QueryFeeabsModuleBalacesResponse.decode(new BinaryReader(data)));
  }
  hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse> {
    const data = QueryHostChainConfigRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "HostChainConfig", data);
    return promise.then(data => QueryHostChainConfigResponse.decode(new BinaryReader(data)));
  }
  allHostChainConfig(request: AllQueryHostChainConfigRequest = {}): Promise<AllQueryHostChainConfigResponse> {
    const data = AllQueryHostChainConfigRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "AllHostChainConfig", data);
    return promise.then(data => AllQueryHostChainConfigResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    osmosisArithmeticTwap(request: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponse> {
      return queryService.osmosisArithmeticTwap(request);
    },
    feeabsModuleBalances(request?: QueryFeeabsModuleBalacesRequest): Promise<QueryFeeabsModuleBalacesResponse> {
      return queryService.feeabsModuleBalances(request);
    },
    hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse> {
      return queryService.hostChainConfig(request);
    },
    allHostChainConfig(request?: AllQueryHostChainConfigRequest): Promise<AllQueryHostChainConfigResponse> {
      return queryService.allHostChainConfig(request);
    }
  };
};