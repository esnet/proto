import grpc from "grpc";
import Netbeam from "./proto/netbeam_pb";
import * as Network from "./proto/network_pb";
import Pond from "./proto/pond_pb";
import NetworkService from "./proto/network_grpc_pb";
interface ClientOptions {
    host: string;
    authToken: string;
}
declare class NetworkingAPI {
    client: NetworkService.NetworkClient;
    metadata: grpc.Metadata;
    constructor(options: ClientOptions);
    getAllInterfaces(req: Network.InterfaceListRequest, cb: (err: Error, interfaceList: Network.InterfaceList) => void): void;
}
export { NetworkingAPI, Netbeam, Network, Pond };
