"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Messages
const netbeam_pb_1 = require("./proto/netbeam_pb");
exports.Netbeam = netbeam_pb_1.default;
const Network = require("./proto/network_pb");
exports.Network = Network;
const pond_pb_1 = require("./proto/pond_pb");
exports.Pond = pond_pb_1.default;
Network.InterfaceListRequest;
// Services
//import { NetbeamService } from "./proto/netbeam_grpc_pb";
const network_grpc_pb_1 = require("./proto/network_grpc_pb");
const NetworkAPI = {
    // Returns the list of current interfaces seen by the SNMP collection
    // system. The result is an object containing a single property `interfaces`.
    // This is a list containing a set of `InterfaceDetail` objects.
    getAllInterfaces(req) {
        return network_grpc_pb_1.NetworkService.getAllInterfaces(req);
    },
    // Returns a map of current interfaces seen by netbeam's SNMP collection
    // system.
    // While the value is an `Event` object containing the `timestamp` and `values`. In
    // this case there is only one value, the latest traffic rate (in bps) for the
    // device, interface and direction (`in` or `out`) encoded in the key.
    getAllInterfacesLatestTraffic(req) {
        return network_grpc_pb_1.NetworkService.getAllInterfacesLatestTraffic(req);
    },
    // Returns a SNMP traffic tile for the specified device and interface. A tile is a `TimeSeries`
    // which contains a known duration of data. The length and location of the tile is determined
    // with an index (a Pond Index string). An example index might be 1d-17646, which is a one
    // day (in UTC time) tile ("1d"), located 17647 days from Jan 1, 1970 midnight UTC.
    getInterfaceTrafficRatesByTile(req) {
        return network_grpc_pb_1.NetworkService.getInterfaceTrafficRatesByTile(req);
    },
    // Returns the interface traffic for the specified `begin` and `end` timerange.
    // The result will be a single `TimeSeries` for that range. Rollups will automatically
    // be applied, depending on the timerange specified.
    getInterfaceTrafficRate(req) {
        return network_grpc_pb_1.NetworkService.getInterfaceTrafficRate(req);
    },
    // Returns the interface utilization as a list of percentiles for a given month
    // based on 5m average samples.
    getMonthlyInterfaceUtilization(req) {
        return network_grpc_pb_1.NetworkService.getMonthlyInterfaceUtilization(req);
    }
};
exports.NetworkAPI = NetworkAPI;
