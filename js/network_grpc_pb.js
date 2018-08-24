// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var network_pb = require('./network_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var netbeam_pb = require('./netbeam_pb.js');

function serialize_esnet_netbeam_v1_AuthorizeRequest(arg) {
  if (!(arg instanceof network_pb.AuthorizeRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.AuthorizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_AuthorizeRequest(buffer_arg) {
  return network_pb.AuthorizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_AuthorizeResponse(arg) {
  if (!(arg instanceof network_pb.AuthorizeResponse)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.AuthorizeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_AuthorizeResponse(buffer_arg) {
  return network_pb.AuthorizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceList(arg) {
  if (!(arg instanceof network_pb.InterfaceList)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceList(buffer_arg) {
  return network_pb.InterfaceList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceListRequest(arg) {
  if (!(arg instanceof network_pb.InterfaceListRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceListRequest(buffer_arg) {
  return network_pb.InterfaceListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceMonthlyUtilization(arg) {
  if (!(arg instanceof network_pb.InterfaceMonthlyUtilization)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceMonthlyUtilization');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceMonthlyUtilization(buffer_arg) {
  return network_pb.InterfaceMonthlyUtilization.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceTileRequest(arg) {
  if (!(arg instanceof network_pb.InterfaceTileRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceTileRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceTileRequest(buffer_arg) {
  return network_pb.InterfaceTileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceTrafficList(arg) {
  if (!(arg instanceof network_pb.InterfaceTrafficList)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceTrafficList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceTrafficList(buffer_arg) {
  return network_pb.InterfaceTrafficList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceTrafficListRequest(arg) {
  if (!(arg instanceof network_pb.InterfaceTrafficListRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceTrafficListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceTrafficListRequest(buffer_arg) {
  return network_pb.InterfaceTrafficListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceTrafficRequest(arg) {
  if (!(arg instanceof network_pb.InterfaceTrafficRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceTrafficRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceTrafficRequest(buffer_arg) {
  return network_pb.InterfaceTrafficRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_InterfaceUtilizationRequest(arg) {
  if (!(arg instanceof network_pb.InterfaceUtilizationRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.InterfaceUtilizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_InterfaceUtilizationRequest(buffer_arg) {
  return network_pb.InterfaceUtilizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_TimeSeries(arg) {
  if (!(arg instanceof netbeam_pb.TimeSeries)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.TimeSeries');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_TimeSeries(buffer_arg) {
  return netbeam_pb.TimeSeries.deserializeBinary(new Uint8Array(buffer_arg));
}


var NetworkService = exports.NetworkService = {
  authorize: {
    path: '/esnet.netbeam.v1.Network/Authorize',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.AuthorizeRequest,
    responseType: network_pb.AuthorizeResponse,
    requestSerialize: serialize_esnet_netbeam_v1_AuthorizeRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_AuthorizeRequest,
    responseSerialize: serialize_esnet_netbeam_v1_AuthorizeResponse,
    responseDeserialize: deserialize_esnet_netbeam_v1_AuthorizeResponse,
  },
  //
  // Returns the list of current interfaces seen by the SNMP collection
  // system. The result is an object containing a single property `interfaces`.
  // This is a list containing a set of `InterfaceDetail` objects.
  getAllInterfaces: {
    path: '/esnet.netbeam.v1.Network/GetAllInterfaces',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.InterfaceListRequest,
    responseType: network_pb.InterfaceList,
    requestSerialize: serialize_esnet_netbeam_v1_InterfaceListRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_InterfaceListRequest,
    responseSerialize: serialize_esnet_netbeam_v1_InterfaceList,
    responseDeserialize: deserialize_esnet_netbeam_v1_InterfaceList,
  },
  //
  // Returns a map of current interfaces seen by netbeam's SNMP collection
  // system.
  // While the value is an `Event` object containing the `timestamp` and `values`. In
  // this case there is only one value, the latest traffic rate (in bps) for the
  // device, interface and direction (`in` or `out`) encoded in the key.
  getAllInterfacesLatestTraffic: {
    path: '/esnet.netbeam.v1.Network/GetAllInterfacesLatestTraffic',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.InterfaceTrafficListRequest,
    responseType: network_pb.InterfaceTrafficList,
    requestSerialize: serialize_esnet_netbeam_v1_InterfaceTrafficListRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_InterfaceTrafficListRequest,
    responseSerialize: serialize_esnet_netbeam_v1_InterfaceTrafficList,
    responseDeserialize: deserialize_esnet_netbeam_v1_InterfaceTrafficList,
  },
  //
  // Returns a SNMP traffic tile for the specified device and interface. A tile is a `TimeSeries`
  // which contains a known duration of data. The length and location of the tile is determined
  // with an index (a Pond Index string). An example index might be 1d-17646, which is a one
  // day (in UTC time) tile ("1d"), located 17647 days from Jan 1, 1970 midnight UTC.
  getInterfaceTrafficRatesByTile: {
    path: '/esnet.netbeam.v1.Network/GetInterfaceTrafficRatesByTile',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.InterfaceTileRequest,
    responseType: netbeam_pb.TimeSeries,
    requestSerialize: serialize_esnet_netbeam_v1_InterfaceTileRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_InterfaceTileRequest,
    responseSerialize: serialize_esnet_netbeam_v1_TimeSeries,
    responseDeserialize: deserialize_esnet_netbeam_v1_TimeSeries,
  },
  //
  // Returns the interface traffic for the specified `begin` and `end` timerange.
  // The result will be a single `TimeSeries` for that range. Rollups will automatically
  // be applied, depending on the timerange specified.
  getInterfaceTrafficRates: {
    path: '/esnet.netbeam.v1.Network/GetInterfaceTrafficRates',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.InterfaceTrafficRequest,
    responseType: netbeam_pb.TimeSeries,
    requestSerialize: serialize_esnet_netbeam_v1_InterfaceTrafficRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_InterfaceTrafficRequest,
    responseSerialize: serialize_esnet_netbeam_v1_TimeSeries,
    responseDeserialize: deserialize_esnet_netbeam_v1_TimeSeries,
  },
  //
  // Returns the interface utilization as a list of percentiles for a given month
  // based on 5m average samples.
  getMonthlyInterfaceUtilization: {
    path: '/esnet.netbeam.v1.Network/GetMonthlyInterfaceUtilization',
    requestStream: false,
    responseStream: false,
    requestType: network_pb.InterfaceUtilizationRequest,
    responseType: network_pb.InterfaceMonthlyUtilization,
    requestSerialize: serialize_esnet_netbeam_v1_InterfaceUtilizationRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_InterfaceUtilizationRequest,
    responseSerialize: serialize_esnet_netbeam_v1_InterfaceMonthlyUtilization,
    responseDeserialize: deserialize_esnet_netbeam_v1_InterfaceMonthlyUtilization,
  },
};

exports.NetworkClient = grpc.makeGenericClientConstructor(NetworkService);
