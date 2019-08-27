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
    listCollections: INetbeamService_IListCollections;
    getCollection: INetbeamService_IGetCollection;
    listSources: INetbeamService_IListSources;
    createSource: INetbeamService_ICreateSource;
    updateSourcePriority: INetbeamService_IUpdateSourcePriority;
    deleteSource: INetbeamService_IDeleteSource;
    listMetricsSpecs: INetbeamService_IListMetricsSpecs;
    registerByteMetric: INetbeamService_IRegisterByteMetric;
    registerCounterMetric: INetbeamService_IRegisterCounterMetric;
    registerGaugeMetric: INetbeamService_IRegisterGaugeMetric;
    registerStringMetric: INetbeamService_IRegisterStringMetric;
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
interface INetbeamService_IListCollections extends grpc.MethodDefinition<netbeam_pb.CollectionListRequest, netbeam_pb.CollectionList> {
    path: string; // "/netbeam.Netbeam/ListCollections"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CollectionListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CollectionListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.CollectionList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.CollectionList>;
}
interface INetbeamService_IGetCollection extends grpc.MethodDefinition<netbeam_pb.CollectionRequest, netbeam_pb.Collection> {
    path: string; // "/netbeam.Netbeam/GetCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CollectionRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CollectionRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Collection>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Collection>;
}
interface INetbeamService_IListSources extends grpc.MethodDefinition<netbeam_pb.SourceListRequest, netbeam_pb.SourceList> {
    path: string; // "/netbeam.Netbeam/ListSources"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.SourceListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.SourceListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.SourceList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.SourceList>;
}
interface INetbeamService_ICreateSource extends grpc.MethodDefinition<netbeam_pb.CreateSourceRequest, netbeam_pb.Source> {
    path: string; // "/netbeam.Netbeam/CreateSource"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateSourceRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateSourceRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Source>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Source>;
}
interface INetbeamService_IUpdateSourcePriority extends grpc.MethodDefinition<netbeam_pb.ChangeSourcePriorityRequest, netbeam_pb.Source> {
    path: string; // "/netbeam.Netbeam/UpdateSourcePriority"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.ChangeSourcePriorityRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.ChangeSourcePriorityRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Source>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Source>;
}
interface INetbeamService_IDeleteSource extends grpc.MethodDefinition<netbeam_pb.DeleteSourceRequest, netbeam_pb.Empty> {
    path: string; // "/netbeam.Netbeam/DeleteSource"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.DeleteSourceRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.DeleteSourceRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Empty>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Empty>;
}
interface INetbeamService_IListMetricsSpecs extends grpc.MethodDefinition<netbeam_pb.MetricSpecsRequest, netbeam_pb.MetricSpecList> {
    path: string; // "/netbeam.Netbeam/ListMetricsSpecs"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.MetricSpecsRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.MetricSpecsRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricSpecList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricSpecList>;
}
interface INetbeamService_IRegisterByteMetric extends grpc.MethodDefinition<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec> {
    path: string; // "/netbeam.Netbeam/RegisterByteMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RegisterMetricSpecRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RegisterMetricSpecRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricSpec>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricSpec>;
}
interface INetbeamService_IRegisterCounterMetric extends grpc.MethodDefinition<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec> {
    path: string; // "/netbeam.Netbeam/RegisterCounterMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RegisterMetricSpecRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RegisterMetricSpecRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricSpec>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricSpec>;
}
interface INetbeamService_IRegisterGaugeMetric extends grpc.MethodDefinition<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec> {
    path: string; // "/netbeam.Netbeam/RegisterGaugeMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RegisterMetricSpecRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RegisterMetricSpecRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricSpec>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricSpec>;
}
interface INetbeamService_IRegisterStringMetric extends grpc.MethodDefinition<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec> {
    path: string; // "/netbeam.Netbeam/RegisterStringMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RegisterMetricSpecRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RegisterMetricSpecRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricSpec>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricSpec>;
}

export const NetbeamService: INetbeamService;

export interface INetbeamServer {
    sayHello: grpc.handleUnaryCall<netbeam_pb.HelloRequest, netbeam_pb.HelloReply>;
    fetchTile: grpc.handleUnaryCall<netbeam_pb.TileRequest, pond_pb.TimeSeries>;
    listOrganizations: grpc.handleUnaryCall<netbeam_pb.OrganizationListRequest, netbeam_pb.OrganizationList>;
    getOrganization: grpc.handleUnaryCall<netbeam_pb.OrganizationRequest, netbeam_pb.Organization>;
    listCollections: grpc.handleUnaryCall<netbeam_pb.CollectionListRequest, netbeam_pb.CollectionList>;
    getCollection: grpc.handleUnaryCall<netbeam_pb.CollectionRequest, netbeam_pb.Collection>;
    listSources: grpc.handleUnaryCall<netbeam_pb.SourceListRequest, netbeam_pb.SourceList>;
    createSource: grpc.handleUnaryCall<netbeam_pb.CreateSourceRequest, netbeam_pb.Source>;
    updateSourcePriority: grpc.handleUnaryCall<netbeam_pb.ChangeSourcePriorityRequest, netbeam_pb.Source>;
    deleteSource: grpc.handleUnaryCall<netbeam_pb.DeleteSourceRequest, netbeam_pb.Empty>;
    listMetricsSpecs: grpc.handleUnaryCall<netbeam_pb.MetricSpecsRequest, netbeam_pb.MetricSpecList>;
    registerByteMetric: grpc.handleUnaryCall<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec>;
    registerCounterMetric: grpc.handleUnaryCall<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec>;
    registerGaugeMetric: grpc.handleUnaryCall<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec>;
    registerStringMetric: grpc.handleUnaryCall<netbeam_pb.RegisterMetricSpecRequest, netbeam_pb.MetricSpec>;
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
    listCollections(request: netbeam_pb.CollectionListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    listCollections(request: netbeam_pb.CollectionListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    listCollections(request: netbeam_pb.CollectionListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    getCollection(request: netbeam_pb.CollectionRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    getCollection(request: netbeam_pb.CollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    getCollection(request: netbeam_pb.CollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
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
    public listCollections(request: netbeam_pb.CollectionListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    public listCollections(request: netbeam_pb.CollectionListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    public listCollections(request: netbeam_pb.CollectionListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.CollectionList) => void): grpc.ClientUnaryCall;
    public getCollection(request: netbeam_pb.CollectionRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    public getCollection(request: netbeam_pb.CollectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    public getCollection(request: netbeam_pb.CollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Collection) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    public listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    public listMetricsSpecs(request: netbeam_pb.MetricSpecsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpecList) => void): grpc.ClientUnaryCall;
    public registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerByteMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerCounterMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerGaugeMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
    public registerStringMetric(request: netbeam_pb.RegisterMetricSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.MetricSpec) => void): grpc.ClientUnaryCall;
}
