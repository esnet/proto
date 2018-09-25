import grpc from "grpc";

// Messages
import Netbeam from "./proto/netbeam_pb";
import * as Network from "./proto/network_pb";
import Pond from "./proto/pond_pb";

Network.InterfaceListRequest;

// Services
//import { NetbeamService } from "./proto/netbeam_grpc_pb";
import NetworkService from "./proto/network_grpc_pb";

interface ClientOptions {
    host: string;
    authToken: string;
}

class NetworkingAPI {
    client: NetworkService.NetworkClient;
    metadata: grpc.Metadata;

    constructor(options: ClientOptions) {
        const { host = "localhost:50051", authToken } = options;

        // Client
        this.client = new NetworkService.NetworkClient(host, grpc.credentials.createInsecure());

        // Metadata
        this.metadata = new grpc.Metadata();
        if (authToken) {
            this.metadata.add("authorization", `Bearer ${authToken}`);
        }
    }

    // Returns the list of current interfaces seen by the SNMP collection system.
    getAllInterfaces(
        req: Network.InterfaceListRequest,
        cb: (err: Error, interfaceList: Network.InterfaceList) => void
    ): void {
        this.client.getAllInterfaces(
            req,
            this.metadata,
            (err: Error, interfaceList: Network.InterfaceList) => {
                cb(err, interfaceList);
            }
        );
    }

    // Returns a map of current interfaces seen by netbeam's SNMP collection
    // system.
    // While the value is an `Event` object containing the `timestamp` and `values`. In
    // this case there is only one value, the latest traffic rate (in bps) for the
    // device, interface and direction (`in` or `out`) encoded in the key.
    // getAllInterfacesLatestTraffic(
    //     req: Network.InterfaceTrafficListRequest
    // ): Network.InterfaceTrafficList {
    //     return NetworkService.getAllInterfacesLatestTraffic(req);
    // },

    // Returns a SNMP traffic tile for the specified device and interface. A tile is a `TimeSeries`
    // which contains a known duration of data. The length and location of the tile is determined
    // with an index (a Pond Index string). An example index might be 1d-17646, which is a one
    // day (in UTC time) tile ("1d"), located 17647 days from Jan 1, 1970 midnight UTC.
    // getInterfaceTrafficRatesByTile(req: Network.InterfaceTileRequest): Netbeam.TimeSeries {
    //     return NetworkService.getInterfaceTrafficRatesByTile(req);
    // },

    // Returns the interface traffic for the specified `begin` and `end` timerange.
    // The result will be a single `TimeSeries` for that range. Rollups will automatically
    // be applied, depending on the timerange specified.
    // getInterfaceTrafficRate(req: Network.InterfaceTrafficRequest): Netbeam.TimeSeries {
    //     return NetworkService.getInterfaceTrafficRate(req);
    // },

    // Returns the interface utilization as a list of percentiles for a given month
    // based on 5m average samples.
    // getMonthlyInterfaceUtilization(
    //     req: Network.InterfaceUtilizationRequest
    // ): Network.InterfaceMonthlyUtilization {
    //     return NetworkService.getMonthlyInterfaceUtilization(req);
    // }
}

export { NetworkingAPI, Netbeam, Network, Pond };
