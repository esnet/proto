"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = require("grpc");
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
class NetworkingAPI {
    constructor(options) {
        const { host = "localhost:50051", authToken } = options;
        // Client
        this.client = new network_grpc_pb_1.default.NetworkClient(host, grpc_1.default.credentials.createInsecure());
        // Metadata
        this.metadata = new grpc_1.default.Metadata();
        if (authToken) {
            this.metadata.add("authorization", `Bearer ${authToken}`);
        }
    }
    // Returns the list of current interfaces seen by the SNMP collection system.
    getAllInterfaces(req, cb) {
        this.client.getAllInterfaces(req, this.metadata, (err, interfaceList) => {
            cb(err, interfaceList);
        });
    }
}
exports.NetworkingAPI = NetworkingAPI;
