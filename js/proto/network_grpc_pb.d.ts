// package: esnet.netbeam.v1
// file: network.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as network_pb from "./network_pb";
import * as netbeam_pb from "./netbeam_pb";

interface INetworkService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    authorize: INetworkService_IAuthorize;
    getAllInterfaces: INetworkService_IGetAllInterfaces;
    getAllInterfacesLatestTraffic: INetworkService_IGetAllInterfacesLatestTraffic;
    getInterfaceTrafficRatesByTile: INetworkService_IGetInterfaceTrafficRatesByTile;
    getInterfaceTrafficRates: INetworkService_IGetInterfaceTrafficRates;
    getMonthlyInterfaceUtilization: INetworkService_IGetMonthlyInterfaceUtilization;
}

interface INetworkService_IAuthorize extends grpc.MethodDefinition<network_pb.AuthorizeRequest, network_pb.AuthorizeResponse> {
    path: string; // "/esnet.netbeam.v1.Network/Authorize"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.AuthorizeRequest>;
    requestDeserialize: grpc.deserialize<network_pb.AuthorizeRequest>;
    responseSerialize: grpc.serialize<network_pb.AuthorizeResponse>;
    responseDeserialize: grpc.deserialize<network_pb.AuthorizeResponse>;
}
interface INetworkService_IGetAllInterfaces extends grpc.MethodDefinition<network_pb.InterfaceListRequest, network_pb.InterfaceList> {
    path: string; // "/esnet.netbeam.v1.Network/GetAllInterfaces"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.InterfaceListRequest>;
    requestDeserialize: grpc.deserialize<network_pb.InterfaceListRequest>;
    responseSerialize: grpc.serialize<network_pb.InterfaceList>;
    responseDeserialize: grpc.deserialize<network_pb.InterfaceList>;
}
interface INetworkService_IGetAllInterfacesLatestTraffic extends grpc.MethodDefinition<network_pb.InterfaceTrafficListRequest, network_pb.InterfaceTrafficList> {
    path: string; // "/esnet.netbeam.v1.Network/GetAllInterfacesLatestTraffic"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.InterfaceTrafficListRequest>;
    requestDeserialize: grpc.deserialize<network_pb.InterfaceTrafficListRequest>;
    responseSerialize: grpc.serialize<network_pb.InterfaceTrafficList>;
    responseDeserialize: grpc.deserialize<network_pb.InterfaceTrafficList>;
}
interface INetworkService_IGetInterfaceTrafficRatesByTile extends grpc.MethodDefinition<network_pb.InterfaceTileRequest, netbeam_pb.TimeSeries> {
    path: string; // "/esnet.netbeam.v1.Network/GetInterfaceTrafficRatesByTile"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.InterfaceTileRequest>;
    requestDeserialize: grpc.deserialize<network_pb.InterfaceTileRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.TimeSeries>;
    responseDeserialize: grpc.deserialize<netbeam_pb.TimeSeries>;
}
interface INetworkService_IGetInterfaceTrafficRates extends grpc.MethodDefinition<network_pb.InterfaceTrafficRequest, netbeam_pb.TimeSeries> {
    path: string; // "/esnet.netbeam.v1.Network/GetInterfaceTrafficRates"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.InterfaceTrafficRequest>;
    requestDeserialize: grpc.deserialize<network_pb.InterfaceTrafficRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.TimeSeries>;
    responseDeserialize: grpc.deserialize<netbeam_pb.TimeSeries>;
}
interface INetworkService_IGetMonthlyInterfaceUtilization extends grpc.MethodDefinition<network_pb.InterfaceUtilizationRequest, network_pb.InterfaceMonthlyUtilization> {
    path: string; // "/esnet.netbeam.v1.Network/GetMonthlyInterfaceUtilization"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<network_pb.InterfaceUtilizationRequest>;
    requestDeserialize: grpc.deserialize<network_pb.InterfaceUtilizationRequest>;
    responseSerialize: grpc.serialize<network_pb.InterfaceMonthlyUtilization>;
    responseDeserialize: grpc.deserialize<network_pb.InterfaceMonthlyUtilization>;
}

export const NetworkService: INetworkService;

export interface INetworkServer {
    authorize: grpc.handleUnaryCall<network_pb.AuthorizeRequest, network_pb.AuthorizeResponse>;
    getAllInterfaces: grpc.handleUnaryCall<network_pb.InterfaceListRequest, network_pb.InterfaceList>;
    getAllInterfacesLatestTraffic: grpc.handleUnaryCall<network_pb.InterfaceTrafficListRequest, network_pb.InterfaceTrafficList>;
    getInterfaceTrafficRatesByTile: grpc.handleUnaryCall<network_pb.InterfaceTileRequest, netbeam_pb.TimeSeries>;
    getInterfaceTrafficRates: grpc.handleUnaryCall<network_pb.InterfaceTrafficRequest, netbeam_pb.TimeSeries>;
    getMonthlyInterfaceUtilization: grpc.handleUnaryCall<network_pb.InterfaceUtilizationRequest, network_pb.InterfaceMonthlyUtilization>;
}

export interface INetworkClient {
    authorize(request: network_pb.AuthorizeRequest, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: network_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    authorize(request: network_pb.AuthorizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    getAllInterfaces(request: network_pb.InterfaceListRequest, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    getAllInterfaces(request: network_pb.InterfaceListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    getAllInterfaces(request: network_pb.InterfaceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
    getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
    getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
}

export class NetworkClient extends grpc.Client implements INetworkClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public authorize(request: network_pb.AuthorizeRequest, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: network_pb.AuthorizeRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public authorize(request: network_pb.AuthorizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.AuthorizeResponse) => void): grpc.ClientUnaryCall;
    public getAllInterfaces(request: network_pb.InterfaceListRequest, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    public getAllInterfaces(request: network_pb.InterfaceListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    public getAllInterfaces(request: network_pb.InterfaceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceList) => void): grpc.ClientUnaryCall;
    public getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    public getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    public getAllInterfacesLatestTraffic(request: network_pb.InterfaceTrafficListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceTrafficList) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRatesByTile(request: network_pb.InterfaceTileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getInterfaceTrafficRates(request: network_pb.InterfaceTrafficRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
    public getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
    public getMonthlyInterfaceUtilization(request: network_pb.InterfaceUtilizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: network_pb.InterfaceMonthlyUtilization) => void): grpc.ClientUnaryCall;
}
