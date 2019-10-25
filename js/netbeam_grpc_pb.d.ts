// package: netbeam
// file: netbeam.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as netbeam_pb from "./netbeam_pb";
import * as pond_pb from "./pond_pb";

interface INetbeamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    fetchTile: INetbeamService_IFetchTile;
    listOrganizations: INetbeamService_IListOrganizations;
    getOrganization: INetbeamService_IGetOrganization;
    listCollections: INetbeamService_IListCollections;
    getCollection: INetbeamService_IGetCollection;
    listResourceGroups: INetbeamService_IListResourceGroups;
    listResources: INetbeamService_IlistResources;
    getResource: INetbeamService_IgetResource;
    listSources: INetbeamService_IListSources;
    getSource: INetbeamService_IGetSource;
    createSource: INetbeamService_ICreateSource;
    updateSourcePriority: INetbeamService_IUpdateSourcePriority;
    deleteSource: INetbeamService_IDeleteSource;
    listRules: INetbeamService_IListRules;
    getRule: INetbeamService_IGetRule;
    createRule: INetbeamService_ICreateRule;
    listMatchers: INetbeamService_IListMatchers;
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
interface INetbeamService_IListResourceGroups extends grpc.MethodDefinition<netbeam_pb.ResourceGroupListRequest, netbeam_pb.ResourceGroupList> {
    path: string; // "/netbeam.Netbeam/ListResourceGroups"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.ResourceGroupListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.ResourceGroupListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.ResourceGroupList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.ResourceGroupList>;
}
interface INetbeamService_IlistResources extends grpc.MethodDefinition<netbeam_pb.ResourceListRequest, netbeam_pb.ResourceList> {
    path: string; // "/netbeam.Netbeam/listResources"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.ResourceListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.ResourceListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.ResourceList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.ResourceList>;
}
interface INetbeamService_IgetResource extends grpc.MethodDefinition<netbeam_pb.ResourceRequest, netbeam_pb.ResourceObject> {
    path: string; // "/netbeam.Netbeam/getResource"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.ResourceRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.ResourceRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.ResourceObject>;
    responseDeserialize: grpc.deserialize<netbeam_pb.ResourceObject>;
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
interface INetbeamService_IGetSource extends grpc.MethodDefinition<netbeam_pb.SourceRequest, netbeam_pb.Source> {
    path: string; // "/netbeam.Netbeam/GetSource"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.SourceRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.SourceRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Source>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Source>;
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
interface INetbeamService_IListRules extends grpc.MethodDefinition<netbeam_pb.RuleListRequest, netbeam_pb.RuleList> {
    path: string; // "/netbeam.Netbeam/ListRules"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RuleListRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RuleListRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.RuleList>;
    responseDeserialize: grpc.deserialize<netbeam_pb.RuleList>;
}
interface INetbeamService_IGetRule extends grpc.MethodDefinition<netbeam_pb.RuleRequest, netbeam_pb.Rule> {
    path: string; // "/netbeam.Netbeam/GetRule"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.RuleRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.RuleRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Rule>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Rule>;
}
interface INetbeamService_ICreateRule extends grpc.MethodDefinition<netbeam_pb.CreateRuleRequest, netbeam_pb.Rule> {
    path: string; // "/netbeam.Netbeam/CreateRule"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.CreateRuleRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.CreateRuleRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Rule>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Rule>;
}
interface INetbeamService_IListMatchers extends grpc.MethodDefinition<netbeam_pb.MatchersRequest, netbeam_pb.Matchers> {
    path: string; // "/netbeam.Netbeam/ListMatchers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<netbeam_pb.MatchersRequest>;
    requestDeserialize: grpc.deserialize<netbeam_pb.MatchersRequest>;
    responseSerialize: grpc.serialize<netbeam_pb.Matchers>;
    responseDeserialize: grpc.deserialize<netbeam_pb.Matchers>;
}

export const NetbeamService: INetbeamService;

export interface INetbeamServer {
    fetchTile: grpc.handleUnaryCall<netbeam_pb.TileRequest, pond_pb.TimeSeries>;
    listOrganizations: grpc.handleUnaryCall<netbeam_pb.OrganizationListRequest, netbeam_pb.OrganizationList>;
    getOrganization: grpc.handleUnaryCall<netbeam_pb.OrganizationRequest, netbeam_pb.Organization>;
    listCollections: grpc.handleUnaryCall<netbeam_pb.CollectionListRequest, netbeam_pb.CollectionList>;
    getCollection: grpc.handleUnaryCall<netbeam_pb.CollectionRequest, netbeam_pb.Collection>;
    listResourceGroups: grpc.handleUnaryCall<netbeam_pb.ResourceGroupListRequest, netbeam_pb.ResourceGroupList>;
    listResources: grpc.handleUnaryCall<netbeam_pb.ResourceListRequest, netbeam_pb.ResourceList>;
    getResource: grpc.handleUnaryCall<netbeam_pb.ResourceRequest, netbeam_pb.ResourceObject>;
    listSources: grpc.handleUnaryCall<netbeam_pb.SourceListRequest, netbeam_pb.SourceList>;
    getSource: grpc.handleUnaryCall<netbeam_pb.SourceRequest, netbeam_pb.Source>;
    createSource: grpc.handleUnaryCall<netbeam_pb.CreateSourceRequest, netbeam_pb.Source>;
    updateSourcePriority: grpc.handleUnaryCall<netbeam_pb.ChangeSourcePriorityRequest, netbeam_pb.Source>;
    deleteSource: grpc.handleUnaryCall<netbeam_pb.DeleteSourceRequest, netbeam_pb.Empty>;
    listRules: grpc.handleUnaryCall<netbeam_pb.RuleListRequest, netbeam_pb.RuleList>;
    getRule: grpc.handleUnaryCall<netbeam_pb.RuleRequest, netbeam_pb.Rule>;
    createRule: grpc.handleUnaryCall<netbeam_pb.CreateRuleRequest, netbeam_pb.Rule>;
    listMatchers: grpc.handleUnaryCall<netbeam_pb.MatchersRequest, netbeam_pb.Matchers>;
}

export interface INetbeamClient {
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
    listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    listResources(request: netbeam_pb.ResourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    listResources(request: netbeam_pb.ResourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    listResources(request: netbeam_pb.ResourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    getResource(request: netbeam_pb.ResourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    getResource(request: netbeam_pb.ResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    getResource(request: netbeam_pb.ResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    getSource(request: netbeam_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    getSource(request: netbeam_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    getSource(request: netbeam_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    listRules(request: netbeam_pb.RuleListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    listRules(request: netbeam_pb.RuleListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    listRules(request: netbeam_pb.RuleListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    getRule(request: netbeam_pb.RuleRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    getRule(request: netbeam_pb.RuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    getRule(request: netbeam_pb.RuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    createRule(request: netbeam_pb.CreateRuleRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    createRule(request: netbeam_pb.CreateRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    createRule(request: netbeam_pb.CreateRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    listMatchers(request: netbeam_pb.MatchersRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
    listMatchers(request: netbeam_pb.MatchersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
    listMatchers(request: netbeam_pb.MatchersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
}

export class NetbeamClient extends grpc.Client implements INetbeamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
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
    public listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    public listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    public listResourceGroups(request: netbeam_pb.ResourceGroupListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceGroupList) => void): grpc.ClientUnaryCall;
    public listResources(request: netbeam_pb.ResourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    public listResources(request: netbeam_pb.ResourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    public listResources(request: netbeam_pb.ResourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceList) => void): grpc.ClientUnaryCall;
    public getResource(request: netbeam_pb.ResourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    public getResource(request: netbeam_pb.ResourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    public getResource(request: netbeam_pb.ResourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.ResourceObject) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public listSources(request: netbeam_pb.SourceListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.SourceList) => void): grpc.ClientUnaryCall;
    public getSource(request: netbeam_pb.SourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public getSource(request: netbeam_pb.SourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public getSource(request: netbeam_pb.SourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public createSource(request: netbeam_pb.CreateSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public updateSourcePriority(request: netbeam_pb.ChangeSourcePriorityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Source) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteSource(request: netbeam_pb.DeleteSourceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Empty) => void): grpc.ClientUnaryCall;
    public listRules(request: netbeam_pb.RuleListRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    public listRules(request: netbeam_pb.RuleListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    public listRules(request: netbeam_pb.RuleListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.RuleList) => void): grpc.ClientUnaryCall;
    public getRule(request: netbeam_pb.RuleRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public getRule(request: netbeam_pb.RuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public getRule(request: netbeam_pb.RuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public createRule(request: netbeam_pb.CreateRuleRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public createRule(request: netbeam_pb.CreateRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public createRule(request: netbeam_pb.CreateRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Rule) => void): grpc.ClientUnaryCall;
    public listMatchers(request: netbeam_pb.MatchersRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
    public listMatchers(request: netbeam_pb.MatchersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
    public listMatchers(request: netbeam_pb.MatchersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.Matchers) => void): grpc.ClientUnaryCall;
}
