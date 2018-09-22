// package: esnet.netbeam.v1
// file: netbeam.proto

var netbeam_pb = require("./netbeam_pb");
var grpc = require("grpc-web-client").grpc;

var Netbeam = (function () {
  function Netbeam() {}
  Netbeam.serviceName = "esnet.netbeam.v1.Netbeam";
  return Netbeam;
}());

Netbeam.CreateOrganization = {
  methodName: "CreateOrganization",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CreateOrganizationRequest,
  responseType: netbeam_pb.OrganizationId
};

Netbeam.CreateCollection = {
  methodName: "CreateCollection",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CreateCollectionRequest,
  responseType: netbeam_pb.CollectionId
};

Netbeam.CreateMetric = {
  methodName: "CreateMetric",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CreateMetricRequest,
  responseType: netbeam_pb.MetricId
};

Netbeam.CreateMetricProcessor = {
  methodName: "CreateMetricProcessor",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CreateMetricProcessorRequest,
  responseType: netbeam_pb.MetricProcessorId
};

Netbeam.CreateMetricOutput = {
  methodName: "CreateMetricOutput",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CreateMetricOutputRequest,
  responseType: netbeam_pb.MetricOutputId
};

Netbeam.ListMetrics = {
  methodName: "ListMetrics",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.CollectionPath,
  responseType: netbeam_pb.MetricList
};

Netbeam.GetMetric = {
  methodName: "GetMetric",
  service: Netbeam,
  requestStream: false,
  responseStream: false,
  requestType: netbeam_pb.MetricPath,
  responseType: netbeam_pb.MetricDescription
};

Netbeam.WatchMetric = {
  methodName: "WatchMetric",
  service: Netbeam,
  requestStream: true,
  responseStream: true,
  requestType: netbeam_pb.MetricSubscriptionRequest,
  responseType: netbeam_pb.Event
};

exports.Netbeam = Netbeam;

function NetbeamClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NetbeamClient.prototype.createOrganization = function createOrganization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.CreateOrganization, {
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

NetbeamClient.prototype.createCollection = function createCollection(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.CreateCollection, {
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

NetbeamClient.prototype.createMetric = function createMetric(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.CreateMetric, {
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

NetbeamClient.prototype.createMetricProcessor = function createMetricProcessor(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.CreateMetricProcessor, {
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

NetbeamClient.prototype.createMetricOutput = function createMetricOutput(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.CreateMetricOutput, {
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

NetbeamClient.prototype.listMetrics = function listMetrics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.ListMetrics, {
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

NetbeamClient.prototype.getMetric = function getMetric(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(Netbeam.GetMetric, {
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

NetbeamClient.prototype.watchMetric = function watchMetric(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(Netbeam.WatchMetric, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.end.forEach(function (handler) {
      handler();
    });
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.NetbeamClient = NetbeamClient;

