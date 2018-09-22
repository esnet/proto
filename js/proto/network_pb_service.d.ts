// package: esnet.netbeam.v1
// file: network.proto

import * as network_pb from "./network_pb";
import * as netbeam_pb from "./netbeam_pb";
import {grpc} from "grpc-web-client";

type NetworkAuthorize = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.AuthorizeRequest;
  readonly responseType: typeof network_pb.AuthorizeResponse;
};

type NetworkGetAllInterfaces = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.InterfaceListRequest;
  readonly responseType: typeof network_pb.InterfaceList;
};

type NetworkGetAllInterfacesLatestTraffic = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.InterfaceTrafficListRequest;
  readonly responseType: typeof network_pb.InterfaceTrafficList;
};

type NetworkGetInterfaceTrafficRatesByTile = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.InterfaceTileRequest;
  readonly responseType: typeof netbeam_pb.TimeSeries;
};

type NetworkGetInterfaceTrafficRates = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.InterfaceTrafficRequest;
  readonly responseType: typeof netbeam_pb.TimeSeries;
};

type NetworkGetMonthlyInterfaceUtilization = {
  readonly methodName: string;
  readonly service: typeof Network;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof network_pb.InterfaceUtilizationRequest;
  readonly responseType: typeof network_pb.InterfaceMonthlyUtilization;
};

export class Network {
  static readonly serviceName: string;
  static readonly Authorize: NetworkAuthorize;
  static readonly GetAllInterfaces: NetworkGetAllInterfaces;
  static readonly GetAllInterfacesLatestTraffic: NetworkGetAllInterfacesLatestTraffic;
  static readonly GetInterfaceTrafficRatesByTile: NetworkGetInterfaceTrafficRatesByTile;
  static readonly GetInterfaceTrafficRates: NetworkGetInterfaceTrafficRates;
  static readonly GetMonthlyInterfaceUtilization: NetworkGetMonthlyInterfaceUtilization;
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

export class NetworkClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  authorize(
    requestMessage: network_pb.AuthorizeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: network_pb.AuthorizeResponse|null) => void
  ): void;
  authorize(
    requestMessage: network_pb.AuthorizeRequest,
    callback: (error: ServiceError, responseMessage: network_pb.AuthorizeResponse|null) => void
  ): void;
  getAllInterfaces(
    requestMessage: network_pb.InterfaceListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceList|null) => void
  ): void;
  getAllInterfaces(
    requestMessage: network_pb.InterfaceListRequest,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceList|null) => void
  ): void;
  getAllInterfacesLatestTraffic(
    requestMessage: network_pb.InterfaceTrafficListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceTrafficList|null) => void
  ): void;
  getAllInterfacesLatestTraffic(
    requestMessage: network_pb.InterfaceTrafficListRequest,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceTrafficList|null) => void
  ): void;
  getInterfaceTrafficRatesByTile(
    requestMessage: network_pb.InterfaceTileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.TimeSeries|null) => void
  ): void;
  getInterfaceTrafficRatesByTile(
    requestMessage: network_pb.InterfaceTileRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.TimeSeries|null) => void
  ): void;
  getInterfaceTrafficRates(
    requestMessage: network_pb.InterfaceTrafficRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: netbeam_pb.TimeSeries|null) => void
  ): void;
  getInterfaceTrafficRates(
    requestMessage: network_pb.InterfaceTrafficRequest,
    callback: (error: ServiceError, responseMessage: netbeam_pb.TimeSeries|null) => void
  ): void;
  getMonthlyInterfaceUtilization(
    requestMessage: network_pb.InterfaceUtilizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceMonthlyUtilization|null) => void
  ): void;
  getMonthlyInterfaceUtilization(
    requestMessage: network_pb.InterfaceUtilizationRequest,
    callback: (error: ServiceError, responseMessage: network_pb.InterfaceMonthlyUtilization|null) => void
  ): void;
}

