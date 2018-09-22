// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var netbeam_pb = require('./netbeam_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_esnet_netbeam_v1_CollectionId(arg) {
  if (!(arg instanceof netbeam_pb.CollectionId)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CollectionId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CollectionId(buffer_arg) {
  return netbeam_pb.CollectionId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CollectionPath(arg) {
  if (!(arg instanceof netbeam_pb.CollectionPath)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CollectionPath');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CollectionPath(buffer_arg) {
  return netbeam_pb.CollectionPath.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CreateCollectionRequest(arg) {
  if (!(arg instanceof netbeam_pb.CreateCollectionRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CreateCollectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CreateCollectionRequest(buffer_arg) {
  return netbeam_pb.CreateCollectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CreateMetricOutputRequest(arg) {
  if (!(arg instanceof netbeam_pb.CreateMetricOutputRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CreateMetricOutputRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CreateMetricOutputRequest(buffer_arg) {
  return netbeam_pb.CreateMetricOutputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CreateMetricProcessorRequest(arg) {
  if (!(arg instanceof netbeam_pb.CreateMetricProcessorRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CreateMetricProcessorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CreateMetricProcessorRequest(buffer_arg) {
  return netbeam_pb.CreateMetricProcessorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CreateMetricRequest(arg) {
  if (!(arg instanceof netbeam_pb.CreateMetricRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CreateMetricRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CreateMetricRequest(buffer_arg) {
  return netbeam_pb.CreateMetricRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_CreateOrganizationRequest(arg) {
  if (!(arg instanceof netbeam_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.CreateOrganizationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_CreateOrganizationRequest(buffer_arg) {
  return netbeam_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_Event(arg) {
  if (!(arg instanceof netbeam_pb.Event)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.Event');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_Event(buffer_arg) {
  return netbeam_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricDescription(arg) {
  if (!(arg instanceof netbeam_pb.MetricDescription)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricDescription');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricDescription(buffer_arg) {
  return netbeam_pb.MetricDescription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricId(arg) {
  if (!(arg instanceof netbeam_pb.MetricId)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricId(buffer_arg) {
  return netbeam_pb.MetricId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricList(arg) {
  if (!(arg instanceof netbeam_pb.MetricList)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricList(buffer_arg) {
  return netbeam_pb.MetricList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricOutputId(arg) {
  if (!(arg instanceof netbeam_pb.MetricOutputId)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricOutputId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricOutputId(buffer_arg) {
  return netbeam_pb.MetricOutputId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricPath(arg) {
  if (!(arg instanceof netbeam_pb.MetricPath)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricPath');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricPath(buffer_arg) {
  return netbeam_pb.MetricPath.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricProcessorId(arg) {
  if (!(arg instanceof netbeam_pb.MetricProcessorId)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricProcessorId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricProcessorId(buffer_arg) {
  return netbeam_pb.MetricProcessorId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_MetricSubscriptionRequest(arg) {
  if (!(arg instanceof netbeam_pb.MetricSubscriptionRequest)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.MetricSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_MetricSubscriptionRequest(buffer_arg) {
  return netbeam_pb.MetricSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_esnet_netbeam_v1_OrganizationId(arg) {
  if (!(arg instanceof netbeam_pb.OrganizationId)) {
    throw new Error('Expected argument of type esnet.netbeam.v1.OrganizationId');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_esnet_netbeam_v1_OrganizationId(buffer_arg) {
  return netbeam_pb.OrganizationId.deserializeBinary(new Uint8Array(buffer_arg));
}


var NetbeamService = exports.NetbeamService = {
  //
  // Add a new organization.
  createOrganization: {
    path: '/esnet.netbeam.v1.Netbeam/CreateOrganization',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CreateOrganizationRequest,
    responseType: netbeam_pb.OrganizationId,
    requestSerialize: serialize_esnet_netbeam_v1_CreateOrganizationRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_CreateOrganizationRequest,
    responseSerialize: serialize_esnet_netbeam_v1_OrganizationId,
    responseDeserialize: deserialize_esnet_netbeam_v1_OrganizationId,
  },
  //
  // Add a new collection to the organization. This returns a new namespace within
  // which metrics can be defined.
  createCollection: {
    path: '/esnet.netbeam.v1.Netbeam/CreateCollection',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CreateCollectionRequest,
    responseType: netbeam_pb.CollectionId,
    requestSerialize: serialize_esnet_netbeam_v1_CreateCollectionRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_CreateCollectionRequest,
    responseSerialize: serialize_esnet_netbeam_v1_CollectionId,
    responseDeserialize: deserialize_esnet_netbeam_v1_CollectionId,
  },
  //
  // Add a new metric description. Returns the internal id of the
  // database record for this metric.
  createMetric: {
    path: '/esnet.netbeam.v1.Netbeam/CreateMetric',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CreateMetricRequest,
    responseType: netbeam_pb.MetricId,
    requestSerialize: serialize_esnet_netbeam_v1_CreateMetricRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_CreateMetricRequest,
    responseSerialize: serialize_esnet_netbeam_v1_MetricId,
    responseDeserialize: deserialize_esnet_netbeam_v1_MetricId,
  },
  //
  // Add a new Processor to an existing metric. A processor will convert
  // measurements of a metric to a new metric in some way. Processors are
  // chosen from a set known to the system. For example a processor my
  // rollup a metric to 5 minute averages and emit that as a new metric
  createMetricProcessor: {
    path: '/esnet.netbeam.v1.Netbeam/CreateMetricProcessor',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CreateMetricProcessorRequest,
    responseType: netbeam_pb.MetricProcessorId,
    requestSerialize: serialize_esnet_netbeam_v1_CreateMetricProcessorRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_CreateMetricProcessorRequest,
    responseSerialize: serialize_esnet_netbeam_v1_MetricProcessorId,
    responseDeserialize: deserialize_esnet_netbeam_v1_MetricProcessorId,
  },
  //
  // Adds a new Output for the metric. An output defines how the metric is
  // written. If you need to persist and later look up a metric, it is necessary
  // to provide at least one Output.
  createMetricOutput: {
    path: '/esnet.netbeam.v1.Netbeam/CreateMetricOutput',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CreateMetricOutputRequest,
    responseType: netbeam_pb.MetricOutputId,
    requestSerialize: serialize_esnet_netbeam_v1_CreateMetricOutputRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_CreateMetricOutputRequest,
    responseSerialize: serialize_esnet_netbeam_v1_MetricOutputId,
    responseDeserialize: deserialize_esnet_netbeam_v1_MetricOutputId,
  },
  //
  // Get a list of registered metrics for a namespace. Returns a list
  // MetricDescriptions.
  listMetrics: {
    path: '/esnet.netbeam.v1.Netbeam/ListMetrics',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.CollectionPath,
    responseType: netbeam_pb.MetricList,
    requestSerialize: serialize_esnet_netbeam_v1_CollectionPath,
    requestDeserialize: deserialize_esnet_netbeam_v1_CollectionPath,
    responseSerialize: serialize_esnet_netbeam_v1_MetricList,
    responseDeserialize: deserialize_esnet_netbeam_v1_MetricList,
  },
  //
  // Get the description of a registered metric
  getMetric: {
    path: '/esnet.netbeam.v1.Netbeam/GetMetric',
    requestStream: false,
    responseStream: false,
    requestType: netbeam_pb.MetricPath,
    responseType: netbeam_pb.MetricDescription,
    requestSerialize: serialize_esnet_netbeam_v1_MetricPath,
    requestDeserialize: deserialize_esnet_netbeam_v1_MetricPath,
    responseSerialize: serialize_esnet_netbeam_v1_MetricDescription,
    responseDeserialize: deserialize_esnet_netbeam_v1_MetricDescription,
  },
  //
  // Watch a metric. Allows you to get a stream of changes to that metrics
  watchMetric: {
    path: '/esnet.netbeam.v1.Netbeam/WatchMetric',
    requestStream: true,
    responseStream: true,
    requestType: netbeam_pb.MetricSubscriptionRequest,
    responseType: netbeam_pb.Event,
    requestSerialize: serialize_esnet_netbeam_v1_MetricSubscriptionRequest,
    requestDeserialize: deserialize_esnet_netbeam_v1_MetricSubscriptionRequest,
    responseSerialize: serialize_esnet_netbeam_v1_Event,
    responseDeserialize: deserialize_esnet_netbeam_v1_Event,
  },
};

exports.NetbeamClient = grpc.makeGenericClientConstructor(NetbeamService);
