// package: netbeam
// file: netbeam.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as netbeam_pb from "./netbeam_pb";
import * as pond_pb from "./pond_pb";

interface INetbeamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: INetbeamService_ISayHello;
    fetchTile: INetbeamService_IFetchTile;
    listOrganizations: INetbeamService_IListOrganizations;
    getOrganization: INetbeamService_IGetOrganization;
}

interface INetbeamService_ISayHello extends grpc.MethodDefinition<netbeam_pb.HelloRequest, netbeam_pb.HelloReply> {
    path: string; // "/netbeam.Netbeam/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.HelloRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<netbeam_pb.HelloReply>;
}
interface INetbeamService_IFetchTile extends grpc.MethodDefinition<netbeam_pb.TileRequest, pond_pb.TimeSeries> {
    path: string; // "/netbeam.Netbeam/FetchTile"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.TileRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.TileRequest>;
    responseSerialize: grpc.serialize<pond_pb.TimeSeries>;
    responseDeserialize: grpc.deserialize<pond_pb.TimeSeries>;
}
interface INetbeamService_IListOrganizations extends grpc.MethodDefinition<netbeam_pb.OrganizationListRequest, netbeam_pb.OrganizationList> {
    path: string; // "/netbeam.Netbeam/ListOrganizations"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.OrganizationListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.OrganizationListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.OrganizationList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.OrganizationList>;
}
interface INetbeamService_IGetOrganization extends grpc.MethodDefinition<netbeam_pb.OrganizationRequest, netbeam_pb.Organization> {
    path: string; // "/netbeam.Netbeam/GetOrganization"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.OrganizationRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.OrganizationRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Organization>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Organization>;
}

export const NetbeamService: INetbeamService;

export interface INetbeamServer {
    sayHello: grpc.handleUnaryCall<netbeam_pb.HelloRequest, netbeam_pb.HelloReply>;
    fetchTile: grpc.handleUnaryCall<netbeam_pb.TileRequest, pond_pb.TimeSeries>;
    listOrganizations: grpc.handleUnaryCall<netbeam_pb.OrganizationListRequest, netbeam_pb.OrganizationList>;
    getOrganization: grpc.handleUnaryCall<netbeam_pb.OrganizationRequest, netbeam_pb.Organization>;
}

export interface INetbeamClient {
    sayHello(request: netbeam_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    fetchTile(request: netbeam_pb.TileRequest, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    fetchTile(request: netbeam_pb.TileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    fetchTile(request: netbeam_pb.TileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    listOrganizations(request: netbeam_pb.OrganizationListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    listOrganizations(request: netbeam_pb.OrganizationListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    listOrganizations(request: netbeam_pb.OrganizationListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    getOrganization(request: netbeam_pb.OrganizationRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
    getOrganization(request: netbeam_pb.OrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
    getOrganization(request: netbeam_pb.OrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
}

export class NetbeamClient extends grpc.Client implements INetbeamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: netbeam_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public fetchTile(request: netbeam_pb.TileRequest, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public fetchTile(request: netbeam_pb.TileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public fetchTile(request: netbeam_pb.TileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: pond_pb.TimeSeries) => void): grpc.ClientUnaryCall;
    public listOrganizations(request: netbeam_pb.OrganizationListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    public listOrganizations(request: netbeam_pb.OrganizationListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    public listOrganizations(request: netbeam_pb.OrganizationListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.OrganizationList) => void): grpc.ClientUnaryCall;
    public getOrganization(request: netbeam_pb.OrganizationRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
    public getOrganization(request: netbeam_pb.OrganizationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
    public getOrganization(request: netbeam_pb.OrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Organization) => void): grpc.ClientUnaryCall;
}
