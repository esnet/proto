// package: esnet.netbeam.v1
// file: netbeam.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as netbeam_pb from "./netbeam_pb";

interface INetbeamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrganization: INetbeamService_ICreateOrganization;
    createCollection: INetbeamService_ICreateCollection;
    createMetric: INetbeamService_ICreateMetric;
    createMetricProcessor: INetbeamService_ICreateMetricProcessor;
    createMetricOutput: INetbeamService_ICreateMetricOutput;
    listMetrics: INetbeamService_IListMetrics;
    getMetric: INetbeamService_IGetMetric;
    watchMetric: INetbeamService_IWatchMetric;
}

interface INetbeamService_ICreateOrganization extends grpc.MethodDefinition<netbeam_pb.CreateOrganizationRequest, netbeam_pb.OrganizationId> {
    path: string; // "/esnet.netbeam.v1.Netbeam/CreateOrganization"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateOrganizationRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateOrganizationRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.OrganizationId>;
    responseDeserialize: grpc.deserialize<netbeam_pb.OrganizationId>;
}
interface INetbeamService_ICreateCollection extends grpc.MethodDefinition<netbeam_pb.CreateCollectionRequest, netbeam_pb.CollectionId> {
    path: string; // "/esnet.netbeam.v1.Netbeam/CreateCollection"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateCollectionRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateCollectionRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.CollectionId>;
    responseDeserialize: grpc.deserialize<netbeam_pb.CollectionId>;
}
interface INetbeamService_ICreateMetric extends grpc.MethodDefinition<netbeam_pb.CreateMetricRequest, netbeam_pb.MetricId> {
    path: string; // "/esnet.netbeam.v1.Netbeam/CreateMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateMetricRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateMetricRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricId>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricId>;
}
interface INetbeamService_ICreateMetricProcessor extends grpc.MethodDefinition<netbeam_pb.CreateMetricProcessorRequest, netbeam_pb.MetricProcessorId> {
    path: string; // "/esnet.netbeam.v1.Netbeam/CreateMetricProcessor"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateMetricProcessorRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateMetricProcessorRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricProcessorId>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricProcessorId>;
}
interface INetbeamService_ICreateMetricOutput extends grpc.MethodDefinition<netbeam_pb.CreateMetricOutputRequest, netbeam_pb.MetricOutputId> {
    path: string; // "/esnet.netbeam.v1.Netbeam/CreateMetricOutput"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateMetricOutputRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateMetricOutputRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricOutputId>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricOutputId>;
}
interface INetbeamService_IListMetrics extends grpc.MethodDefinition<netbeam_pb.CollectionPath, netbeam_pb.MetricList> {
    path: string; // "/esnet.netbeam.v1.Netbeam/ListMetrics"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CollectionPath>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CollectionPath>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricList>;
}
interface INetbeamService_IGetMetric extends grpc.MethodDefinition<netbeam_pb.MetricPath, netbeam_pb.MetricDescription> {
    path: string; // "/esnet.netbeam.v1.Netbeam/GetMetric"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.MetricPath>;
    requestDeserialize: grpc.deserialize<netbeam_pb.MetricPath>;
    responseSerialize: grpc.serialize<netbeam_pb.MetricDescription>;
    responseDeserialize: grpc.deserialize<netbeam_pb.MetricDescription>;
}
interface INetbeamService_IWatchMetric extends grpc.MethodDefinition<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event> {
    path: string; // "/esnet.netbeam.v1.Netbeam/WatchMetric"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<netbeam_pb.MetricSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.MetricSubscriptionRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Event>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Event>;
}

export const NetbeamService: INetbeamService;

export interface INetbeamServer {
    createOrganization: grpc.handleUnaryCall<netbeam_pb.CreateOrganizationRequest, netbeam_pb.OrganizationId>;
    createCollection: grpc.handleUnaryCall<netbeam_pb.CreateCollectionRequest, netbeam_pb.CollectionId>;
    createMetric: grpc.handleUnaryCall<netbeam_pb.CreateMetricRequest, netbeam_pb.MetricId>;
    createMetricProcessor: grpc.handleUnaryCall<netbeam_pb.CreateMetricProcessorRequest, netbeam_pb.MetricProcessorId>;
    createMetricOutput: grpc.handleUnaryCall<netbeam_pb.CreateMetricOutputRequest, netbeam_pb.MetricOutputId>;
    listMetrics: grpc.handleUnaryCall<netbeam_pb.CollectionPath, netbeam_pb.MetricList>;
    getMetric: grpc.handleUnaryCall<netbeam_pb.MetricPath, netbeam_pb.MetricDescription>;
    watchMetric: grpc.handleBidiStreamingCall<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
}

export interface INetbeamClient {
    createOrganization(request: netbeam_pb.CreateOrganizationRequest, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    createOrganization(request: netbeam_pb.CreateOrganizationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    createOrganization(request: netbeam_pb.CreateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    createCollection(request: netbeam_pb.CreateCollectionRequest, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    createCollection(request: netbeam_pb.CreateCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    createCollection(request: netbeam_pb.CreateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    createMetric(request: netbeam_pb.CreateMetricRequest, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    createMetric(request: netbeam_pb.CreateMetricRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    createMetric(request: netbeam_pb.CreateMetricRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    listMetrics(request: netbeam_pb.CollectionPath, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    listMetrics(request: netbeam_pb.CollectionPath, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    listMetrics(request: netbeam_pb.CollectionPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    getMetric(request: netbeam_pb.MetricPath, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    getMetric(request: netbeam_pb.MetricPath, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    getMetric(request: netbeam_pb.MetricPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    watchMetric(): grpc.ClientDuplexStream<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
    watchMetric(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
    watchMetric(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
}

export class NetbeamClient extends grpc.Client implements INetbeamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createOrganization(request: netbeam_pb.CreateOrganizationRequest, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    public createOrganization(request: netbeam_pb.CreateOrganizationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    public createOrganization(request: netbeam_pb.CreateOrganizationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.OrganizationId) => void): grpc.ClientUnaryCall;
    public createCollection(request: netbeam_pb.CreateCollectionRequest, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    public createCollection(request: netbeam_pb.CreateCollectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    public createCollection(request: netbeam_pb.CreateCollectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.CollectionId) => void): grpc.ClientUnaryCall;
    public createMetric(request: netbeam_pb.CreateMetricRequest, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    public createMetric(request: netbeam_pb.CreateMetricRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    public createMetric(request: netbeam_pb.CreateMetricRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricId) => void): grpc.ClientUnaryCall;
    public createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    public createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    public createMetricProcessor(request: netbeam_pb.CreateMetricProcessorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricProcessorId) => void): grpc.ClientUnaryCall;
    public createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    public createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    public createMetricOutput(request: netbeam_pb.CreateMetricOutputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricOutputId) => void): grpc.ClientUnaryCall;
    public listMetrics(request: netbeam_pb.CollectionPath, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    public listMetrics(request: netbeam_pb.CollectionPath, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    public listMetrics(request: netbeam_pb.CollectionPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricList) => void): grpc.ClientUnaryCall;
    public getMetric(request: netbeam_pb.MetricPath, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    public getMetric(request: netbeam_pb.MetricPath, metadata: grpc.Metadata, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    public getMetric(request: netbeam_pb.MetricPath, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: netbeam_pb.MetricDescription) => void): grpc.ClientUnaryCall;
    public watchMetric(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
    public watchMetric(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<netbeam_pb.MetricSubscriptionRequest, netbeam_pb.Event>;
}
