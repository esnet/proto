// package: esnet.netbeam.v1
// file: netbeam.proto

import * as netbeam_pb from "./netbeam_pb";
import {grpc} from "grpc-web-client";

type NetbeamCreateOrganization = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CreateOrganizationRequest;
  readonly responseType: typeof netbeam_pb.OrganizationId;
};

type NetbeamCreateCollection = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CreateCollectionRequest;
  readonly responseType: typeof netbeam_pb.CollectionId;
};

type NetbeamCreateMetric = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CreateMetricRequest;
  readonly responseType: typeof netbeam_pb.MetricId;
};

type NetbeamCreateMetricProcessor = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CreateMetricProcessorRequest;
  readonly responseType: typeof netbeam_pb.MetricProcessorId;
};

type NetbeamCreateMetricOutput = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CreateMetricOutputRequest;
  readonly responseType: typeof netbeam_pb.MetricOutputId;
};

type NetbeamListMetrics = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.CollectionPath;
  readonly responseType: typeof netbeam_pb.MetricList;
};

type NetbeamGetMetric = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof netbeam_pb.MetricPath;
  readonly responseType: typeof netbeam_pb.MetricDescription;
};

type NetbeamWatchMetric = {
  readonly methodName: string;
  readonly service: typeof Netbeam;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof netbeam_pb.MetricSubscriptionRequest;
  readonly responseType: typeof netbeam_pb.Event;
};

export class Netbeam {
  static readonly serviceName: string;
  static readonly CreateOrganization: NetbeamCreateOrganization;
  static readonly CreateCollection: NetbeamCreateCollection;
  static readonly CreateMetric: NetbeamCreateMetric;
  static readonly CreateMetricProcessor: NetbeamCreateMetricProcessor;
  static readonly CreateMetricOutput: NetbeamCreateMetricOutput;
  static readonly ListMetrics: NetbeamListMetrics;
  static readonly GetMetric: NetbeamGetMetric;
  static readonly WatchMetric: NetbeamWatchMetric;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<T> {
  write(message: T): BidirectionalStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): BidirectionalStream<T>;
  on(type: 'end', handler: () => void): BidirectionalStream<T>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<T>;
}

export class NetbeamClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  createOrganization(
    requestMessage: netbeam_pb.CreateOrganizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.OrganizationId|null) => void
  ): void;
  createOrganization(
    requestMessage: netbeam_pb.CreateOrganizationRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.OrganizationId|null) => void
  ): void;
  createCollection(
    requestMessage: netbeam_pb.CreateCollectionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.CollectionId|null) => void
  ): void;
  createCollection(
    requestMessage: netbeam_pb.CreateCollectionRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.CollectionId|null) => void
  ): void;
  createMetric(
    requestMessage: netbeam_pb.CreateMetricRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricId|null) => void
  ): void;
  createMetric(
    requestMessage: netbeam_pb.CreateMetricRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricId|null) => void
  ): void;
  createMetricProcessor(
    requestMessage: netbeam_pb.CreateMetricProcessorRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricProcessorId|null) => void
  ): void;
  createMetricProcessor(
    requestMessage: netbeam_pb.CreateMetricProcessorRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricProcessorId|null) => void
  ): void;
  createMetricOutput(
    requestMessage: netbeam_pb.CreateMetricOutputRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricOutputId|null) => void
  ): void;
  createMetricOutput(
    requestMessage: netbeam_pb.CreateMetricOutputRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricOutputId|null) => void
  ): void;
  listMetrics(
    requestMessage: netbeam_pb.CollectionPath,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricList|null) => void
  ): void;
  listMetrics(
    requestMessage: netbeam_pb.CollectionPath,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricList|null) => void
  ): void;
  getMetric(
    requestMessage: netbeam_pb.MetricPath,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricDescription|null) => void
  ): void;
  getMetric(
    requestMessage: netbeam_pb.MetricPath,
    callback: (error: ServiceError, responseMessage: netbeam_pb.MetricDescription|null) => void
  ): void;
  watchMetric(metadata?: grpc.Metadata): BidirectionalStream<netbeam_pb.Event>;
}

