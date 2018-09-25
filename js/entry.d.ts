import Netbeam from "./proto/netbeam_pb";
import * as Network from "./proto/network_pb";
import Pond from "./proto/pond_pb";
declare type API = {
    [s: string]: (req: any) => any;
};
declare const NetworkAPI: API;
export { NetworkAPI, Netbeam, Network, Pond };
