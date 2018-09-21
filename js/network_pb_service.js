// package: esnet.netbeam.v1
// file: network.proto

var network_pb = require("./network_pb");
var netbeam_pb = require("./netbeam_pb");
var grpc = require("grpc-web-client").grpc;

var Network = (function () {
  function Network() {}
  Network.serviceName = "esnet.netbeam.v1.Network";
  return Network;
}());

Network.Authorize = {
  methodName: "Authorize",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.AuthorizeRequest,
  responseType: network_pb.AuthorizeResponse
};

Network.GetAllInterfaces = {
  methodName: "GetAllInterfaces",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.InterfaceListRequest,
  responseType: network_pb.InterfaceList
};

Network.GetAllInterfacesLatestTraffic = {
  methodName: "GetAllInterfacesLatestTraffic",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.InterfaceTrafficListRequest,
  responseType: network_pb.InterfaceTrafficList
};

Network.GetInterfaceTrafficRatesByTile = {
  methodName: "GetInterfaceTrafficRatesByTile",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.InterfaceTileRequest,
  responseType: netbeam_pb.TimeSeries
};

Network.GetInterfaceTrafficRates = {
  methodName: "GetInterfaceTrafficRates",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.InterfaceTrafficRequest,
  responseType: netbeam_pb.TimeSeries
};

Network.GetMonthlyInterfaceUtilization = {
  methodName: "GetMonthlyInterfaceUtilization",
  service: Network,
  requestStream: false,
  responseStream: false,
  requestType: network_pb.InterfaceUtilizationRequest,
  responseType: network_pb.InterfaceMonthlyUtilization
};

exports.Network = Network;

function NetworkClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NetworkClient.prototype.authorize = function authorize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.Authorize, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

NetworkClient.prototype.getAllInterfaces = function getAllInterfaces(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.GetAllInterfaces, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

NetworkClient.prototype.getAllInterfacesLatestTraffic = function getAllInterfacesLatestTraffic(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.GetAllInterfacesLatestTraffic, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

NetworkClient.prototype.getInterfaceTrafficRatesByTile = function getInterfaceTrafficRatesByTile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.GetInterfaceTrafficRatesByTile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

NetworkClient.prototype.getInterfaceTrafficRates = function getInterfaceTrafficRates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.GetInterfaceTrafficRates, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

NetworkClient.prototype.getMonthlyInterfaceUtilization = function getMonthlyInterfaceUtilization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Network.GetMonthlyInterfaceUtilization, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.NetworkClient = NetworkClient;

