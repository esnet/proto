const netbeam_pb = require("./js/netbeam_pb");
const netbeam_grpc = require("./js/netbeam_grpc_pb");
const network_pb = require("./js/network_pb");
const network_grpc = require("./js/network_grpc_pb");

module.exports = {
    netbeamCore: netbeam_pb,
    netbeamCoreServices: netbeam_grpc,
    netbeamNetwork: network_pb,
    netbeamNetworkServices: network_grpc
};
