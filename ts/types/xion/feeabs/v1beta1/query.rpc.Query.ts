//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOsmosisArithmeticTwapRequest, QueryOsmosisArithmeticTwapResponse, QueryFeeabsModuleBalancesRequest, QueryFeeabsModuleBalancesResponse, QueryHostChainConfigRequest, QueryHostChainConfigResponse, QueryAllHostChainConfigRequest, QueryAllHostChainConfigResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** OsmosisArithmeticTwap return spot price of pair Osmo/nativeToken */
  osmosisArithmeticTwap(request: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponse>;
  /** FeeabsModuleBalances return total balances of feeabs module */
  feeabsModuleBalances(request?: QueryFeeabsModuleBalancesRequest): Promise<QueryFeeabsModuleBalancesResponse>;
  /** HostChainConfig */
  hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse>;
  /** AllHostChainConfig */
  allHostChainConfig(request?: QueryAllHostChainConfigRequest): Promise<QueryAllHostChainConfigResponse>;
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
  feeabsModuleBalances(request: QueryFeeabsModuleBalancesRequest = {}): Promise<QueryFeeabsModuleBalancesResponse> {
    const data = QueryFeeabsModuleBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "FeeabsModuleBalances", data);
    return promise.then(data => QueryFeeabsModuleBalancesResponse.decode(new BinaryReader(data)));
  }
  hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse> {
    const data = QueryHostChainConfigRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "HostChainConfig", data);
    return promise.then(data => QueryHostChainConfigResponse.decode(new BinaryReader(data)));
  }
  allHostChainConfig(request: QueryAllHostChainConfigRequest = {}): Promise<QueryAllHostChainConfigResponse> {
    const data = QueryAllHostChainConfigRequest.encode(request).finish();
    const promise = this.rpc.request("xion.feeabs.v1beta1.Query", "AllHostChainConfig", data);
    return promise.then(data => QueryAllHostChainConfigResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    osmosisArithmeticTwap(request: QueryOsmosisArithmeticTwapRequest): Promise<QueryOsmosisArithmeticTwapResponse> {
      return queryService.osmosisArithmeticTwap(request);
    },
    feeabsModuleBalances(request?: QueryFeeabsModuleBalancesRequest): Promise<QueryFeeabsModuleBalancesResponse> {
      return queryService.feeabsModuleBalances(request);
    },
    hostChainConfig(request: QueryHostChainConfigRequest): Promise<QueryHostChainConfigResponse> {
      return queryService.hostChainConfig(request);
    },
    allHostChainConfig(request?: QueryAllHostChainConfigRequest): Promise<QueryAllHostChainConfigResponse> {
      return queryService.allHostChainConfig(request);
    }
  };
};