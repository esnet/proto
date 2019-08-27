// package: netbeam
// file: netbeam.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as pond_pb from "./pond_pb";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class Namespace extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Namespace.AsObject;
    static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Namespace;
    static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
    export type AsObject = {
        organization: string,
        collection: string,
    }
}

export class Resource extends jspb.Message { 
    clearPathList(): void;
    getPathList(): Array<string>;
    setPathList(value: Array<string>): void;
    addPath(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Resource.AsObject;
    static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Resource;
    static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
    export type AsObject = {
        pathList: Array<string>,
    }
}

export class Organization extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organization.AsObject;
    static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organization;
    static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
    export type AsObject = {
        id: number,
        name: string,
        description: string,
    }
}

export class OrganizationList extends jspb.Message { 
    clearOrganizationsList(): void;
    getOrganizationsList(): Array<Organization>;
    setOrganizationsList(value: Array<Organization>): void;
    addOrganizations(value?: Organization, index?: number): Organization;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationList.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationList): OrganizationList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationList;
    static deserializeBinaryFromReader(message: OrganizationList, reader: jspb.BinaryReader): OrganizationList;
}

export namespace OrganizationList {
    export type AsObject = {
        organizationsList: Array<Organization.AsObject>,
    }
}

export class Collection extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
    export type AsObject = {
        id: number,
        namespace?: Namespace.AsObject,
        description: string,
    }
}

export class CollectionList extends jspb.Message { 
    clearCollectionsList(): void;
    getCollectionsList(): Array<Collection>;
    setCollectionsList(value: Array<Collection>): void;
    addCollections(value?: Collection, index?: number): Collection;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionList.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionList): CollectionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionList;
    static deserializeBinaryFromReader(message: CollectionList, reader: jspb.BinaryReader): CollectionList;
}

export namespace CollectionList {
    export type AsObject = {
        collectionsList: Array<Collection.AsObject>,
    }
}

export class Source extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getIndex(): number;
    setIndex(value: number): void;

    getPriority(): number;
    setPriority(value: number): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
}

export namespace Source {
    export type AsObject = {
        id: number,
        namespace?: Namespace.AsObject,
        index: number,
        priority: number,
        description: string,
    }
}

export class SourceList extends jspb.Message { 
    clearSourcesList(): void;
    getSourcesList(): Array<Source>;
    setSourcesList(value: Array<Source>): void;
    addSources(value?: Source, index?: number): Source;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceList.AsObject;
    static toObject(includeInstance: boolean, msg: SourceList): SourceList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceList;
    static deserializeBinaryFromReader(message: SourceList, reader: jspb.BinaryReader): SourceList;
}

export namespace SourceList {
    export type AsObject = {
        sourcesList: Array<Source.AsObject>,
    }
}

export class MetricSpec extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getScope(): string;
    setScope(value: string): void;

    getName(): string;
    setName(value: string): void;

    getSuffix(): string;
    setSuffix(value: string): void;

    getAlign(): string;
    setAlign(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricSpec.AsObject;
    static toObject(includeInstance: boolean, msg: MetricSpec): MetricSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricSpec;
    static deserializeBinaryFromReader(message: MetricSpec, reader: jspb.BinaryReader): MetricSpec;
}

export namespace MetricSpec {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        scope: string,
        name: string,
        suffix: string,
        align: string,
    }
}

export class MetricSpecList extends jspb.Message { 
    clearSpecsList(): void;
    getSpecsList(): Array<MetricSpec>;
    setSpecsList(value: Array<MetricSpec>): void;
    addSpecs(value?: MetricSpec, index?: number): MetricSpec;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricSpecList.AsObject;
    static toObject(includeInstance: boolean, msg: MetricSpecList): MetricSpecList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricSpecList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricSpecList;
    static deserializeBinaryFromReader(message: MetricSpecList, reader: jspb.BinaryReader): MetricSpecList;
}

export namespace MetricSpecList {
    export type AsObject = {
        specsList: Array<MetricSpec.AsObject>,
    }
}

export class HelloRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloRequest;
    static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
    export type AsObject = {
        name: string,
    }
}

export class HelloReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): void;


    hasTstamp(): boolean;
    clearTstamp(): void;
    getTstamp(): pond_pb.Timestamp | undefined;
    setTstamp(value?: pond_pb.Timestamp): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HelloReply.AsObject;
    static toObject(includeInstance: boolean, msg: HelloReply): HelloReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HelloReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HelloReply;
    static deserializeBinaryFromReader(message: HelloReply, reader: jspb.BinaryReader): HelloReply;
}

export namespace HelloReply {
    export type AsObject = {
        message: string,
        tstamp?: pond_pb.Timestamp.AsObject,
    }
}

export class TileRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;


    hasResource(): boolean;
    clearResource(): void;
    getResource(): Resource | undefined;
    setResource(value?: Resource): void;

    getMetric(): string;
    setMetric(value: string): void;

    getIndex(): string;
    setIndex(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TileRequest): TileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TileRequest;
    static deserializeBinaryFromReader(message: TileRequest, reader: jspb.BinaryReader): TileRequest;
}

export namespace TileRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        resource?: Resource.AsObject,
        metric: string,
        index: string,
    }
}

export class OrganizationListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationListRequest): OrganizationListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationListRequest;
    static deserializeBinaryFromReader(message: OrganizationListRequest, reader: jspb.BinaryReader): OrganizationListRequest;
}

export namespace OrganizationListRequest {
    export type AsObject = {
    }
}

export class OrganizationRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationRequest): OrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationRequest;
    static deserializeBinaryFromReader(message: OrganizationRequest, reader: jspb.BinaryReader): OrganizationRequest;
}

export namespace OrganizationRequest {
    export type AsObject = {
        name: string,
    }
}

export class CollectionListRequest extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionListRequest): CollectionListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionListRequest;
    static deserializeBinaryFromReader(message: CollectionListRequest, reader: jspb.BinaryReader): CollectionListRequest;
}

export namespace CollectionListRequest {
    export type AsObject = {
        organization: string,
    }
}

export class CollectionRequest extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionRequest): CollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionRequest;
    static deserializeBinaryFromReader(message: CollectionRequest, reader: jspb.BinaryReader): CollectionRequest;
}

export namespace CollectionRequest {
    export type AsObject = {
        organization: string,
        name: string,
    }
}

export class CreateSourceRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getIndex(): number;
    setIndex(value: number): void;

    getPriority(): number;
    setPriority(value: number): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSourceRequest): CreateSourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSourceRequest;
    static deserializeBinaryFromReader(message: CreateSourceRequest, reader: jspb.BinaryReader): CreateSourceRequest;
}

export namespace CreateSourceRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        index: number,
        priority: number,
        description: string,
    }
}

export class ChangeSourcePriorityRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getIndex(): number;
    setIndex(value: number): void;

    getPriority(): number;
    setPriority(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeSourcePriorityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeSourcePriorityRequest): ChangeSourcePriorityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeSourcePriorityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeSourcePriorityRequest;
    static deserializeBinaryFromReader(message: ChangeSourcePriorityRequest, reader: jspb.BinaryReader): ChangeSourcePriorityRequest;
}

export namespace ChangeSourcePriorityRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        index: number,
        priority: number,
    }
}

export class SourceListRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceListRequest): SourceListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceListRequest;
    static deserializeBinaryFromReader(message: SourceListRequest, reader: jspb.BinaryReader): SourceListRequest;
}

export namespace SourceListRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
    }
}

export class SourceRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getIndex(): string;
    setIndex(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SourceRequest): SourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceRequest;
    static deserializeBinaryFromReader(message: SourceRequest, reader: jspb.BinaryReader): SourceRequest;
}

export namespace SourceRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        index: string,
    }
}

export class DeleteSourceRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getIndex(): number;
    setIndex(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteSourceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteSourceRequest): DeleteSourceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteSourceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteSourceRequest;
    static deserializeBinaryFromReader(message: DeleteSourceRequest, reader: jspb.BinaryReader): DeleteSourceRequest;
}

export namespace DeleteSourceRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        index: number,
    }
}

export class MetricSpecsRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricSpecsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MetricSpecsRequest): MetricSpecsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricSpecsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricSpecsRequest;
    static deserializeBinaryFromReader(message: MetricSpecsRequest, reader: jspb.BinaryReader): MetricSpecsRequest;
}

export namespace MetricSpecsRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
    }
}

export class RegisterMetricSpecRequest extends jspb.Message { 

    hasNamespace(): boolean;
    clearNamespace(): void;
    getNamespace(): Namespace | undefined;
    setNamespace(value?: Namespace): void;

    getScope(): string;
    setScope(value: string): void;

    getName(): string;
    setName(value: string): void;

    getSuffix(): string;
    setSuffix(value: string): void;

    getAlign(): string;
    setAlign(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterMetricSpecRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterMetricSpecRequest): RegisterMetricSpecRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterMetricSpecRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterMetricSpecRequest;
    static deserializeBinaryFromReader(message: RegisterMetricSpecRequest, reader: jspb.BinaryReader): RegisterMetricSpecRequest;
}

export namespace RegisterMetricSpecRequest {
    export type AsObject = {
        namespace?: Namespace.AsObject,
        scope: string,
        name: string,
        suffix: string,
        align: string,
    }
}
