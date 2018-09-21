const netbeam_pb = require("./js/netbeam_pb");
const netbeam_grpc = require("./js/netbeam_pb_service");
const network_pb = require("./js/network_pb");
const network_grpc = require("./js/network_pb_service");
const pond_pb = require("./js/pond_pb");

module.exports = {
    pond: pond_pb,
    netbeamCore: netbeam_pb,
    netbeamCoreServices: netbeam_grpc,
    netbeamNetwork: network_pb,
    netbeamNetworkServices: network_grpc
};
