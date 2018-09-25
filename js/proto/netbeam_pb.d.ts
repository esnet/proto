// package: esnet.netbeam.v1
// file: netbeam.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class TypedValue extends jspb.Message { 

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): void;


    hasInt64Value(): boolean;
    clearInt64Value(): void;
    getInt64Value(): number;
    setInt64Value(value: number): void;


    hasDoubleValue(): boolean;
    clearDoubleValue(): void;
    getDoubleValue(): number;
    setDoubleValue(value: number): void;


    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): string;
    setStringValue(value: string): void;


    getValueCase(): TypedValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypedValue.AsObject;
    static toObject(includeInstance: boolean, msg: TypedValue): TypedValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypedValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypedValue;
    static deserializeBinaryFromReader(message: TypedValue, reader: jspb.BinaryReader): TypedValue;
}

export namespace TypedValue {
    export type AsObject = {
        boolValue: boolean,
        int64Value: number,
        doubleValue: number,
        stringValue: string,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
    
    BOOL_VALUE = 1,

    INT64_VALUE = 2,

    DOUBLE_VALUE = 3,

    STRING_VALUE = 4,

    }

}

export class ResourcePath extends jspb.Message { 
    clearNamespaceList(): void;
    getNamespaceList(): Array<string>;
    setNamespaceList(value: Array<string>): void;
    addNamespace(value: string, index?: number): string;

    clearResourceList(): void;
    getResourceList(): Array<string>;
    setResourceList(value: Array<string>): void;
    addResource(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourcePath.AsObject;
    static toObject(includeInstance: boolean, msg: ResourcePath): ResourcePath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourcePath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourcePath;
    static deserializeBinaryFromReader(message: ResourcePath, reader: jspb.BinaryReader): ResourcePath;
}

export namespace ResourcePath {
    export type AsObject = {
        namespaceList: Array<string>,
        resourceList: Array<string>,
    }
}

export class MetricIngestEvent extends jspb.Message { 
    clearResourcepathList(): void;
    getResourcepathList(): Array<string>;
    setResourcepathList(value: Array<string>): void;
    addResourcepath(value: string, index?: number): string;


    hasMetricpath(): boolean;
    clearMetricpath(): void;
    getMetricpath(): MetricPath | undefined;
    setMetricpath(value?: MetricPath): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): TypedValue | undefined;
    setValue(value?: TypedValue): void;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricIngestEvent.AsObject;
    static toObject(includeInstance: boolean, msg: MetricIngestEvent): MetricIngestEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricIngestEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricIngestEvent;
    static deserializeBinaryFromReader(message: MetricIngestEvent, reader: jspb.BinaryReader): MetricIngestEvent;
}

export namespace MetricIngestEvent {
    export type AsObject = {
        resourcepathList: Array<string>,
        metricpath?: MetricPath.AsObject,
        timestamp: number,
        value?: TypedValue.AsObject,
        tagsList: Array<string>,
    }
}

export class TimeRange extends jspb.Message { 
    getBegin(): number;
    setBegin(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRange;
    static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
    export type AsObject = {
        begin: number,
        end: number,
    }
}

export class Event extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): void;

    clearValuesList(): void;
    getValuesList(): Array<TypedValue>;
    setValuesList(value: Array<TypedValue>): void;
    addValues(value?: TypedValue, index?: number): TypedValue;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        timestamp: number,
        valuesList: Array<TypedValue.AsObject>,
    }
}

export class Percentile extends jspb.Message { 
    getPercentile(): number;
    setPercentile(value: number): void;

    clearValuesList(): void;
    getValuesList(): Array<number>;
    setValuesList(value: Array<number>): void;
    addValues(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Percentile.AsObject;
    static toObject(includeInstance: boolean, msg: Percentile): Percentile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Percentile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Percentile;
    static deserializeBinaryFromReader(message: Percentile, reader: jspb.BinaryReader): Percentile;
}

export namespace Percentile {
    export type AsObject = {
        percentile: number,
        valuesList: Array<number>,
    }
}

export class TimeSeries extends jspb.Message { 
    getName(): string;
    setName(value: string): void;

    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): void;
    addColumns(value: string, index?: number): string;

    clearPointsList(): void;
    getPointsList(): Array<Event>;
    setPointsList(value: Array<Event>): void;
    addPoints(value?: Event, index?: number): Event;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeSeries.AsObject;
    static toObject(includeInstance: boolean, msg: TimeSeries): TimeSeries.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeSeries, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeSeries;
    static deserializeBinaryFromReader(message: TimeSeries, reader: jspb.BinaryReader): TimeSeries;
}

export namespace TimeSeries {
    export type AsObject = {
        name: string,
        columnsList: Array<string>,
        pointsList: Array<Event.AsObject>,
    }
}

export class MetricSubscriptionRequest extends jspb.Message { 
    getCmd(): SubscriptionCommand;
    setCmd(value: SubscriptionCommand): void;


    hasPath(): boolean;
    clearPath(): void;
    getPath(): MetricPath | undefined;
    setPath(value?: MetricPath): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MetricSubscriptionRequest): MetricSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricSubscriptionRequest;
    static deserializeBinaryFromReader(message: MetricSubscriptionRequest, reader: jspb.BinaryReader): MetricSubscriptionRequest;
}

export namespace MetricSubscriptionRequest {
    export type AsObject = {
        cmd: SubscriptionCommand,
        path?: MetricPath.AsObject,
    }
}

export class RollupArgs extends jspb.Message { 
    getFunction(): AggregationType;
    setFunction(value: AggregationType): void;

    getWindow(): string;
    setWindow(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RollupArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RollupArgs): RollupArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RollupArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RollupArgs;
    static deserializeBinaryFromReader(message: RollupArgs, reader: jspb.BinaryReader): RollupArgs;
}

export namespace RollupArgs {
    export type AsObject = {
        pb_function: AggregationType,
        window: string,
    }
}

export class RateArgs extends jspb.Message { 
    getAllownegative(): boolean;
    setAllownegative(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RateArgs.AsObject;
    static toObject(includeInstance: boolean, msg: RateArgs): RateArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RateArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RateArgs;
    static deserializeBinaryFromReader(message: RateArgs, reader: jspb.BinaryReader): RateArgs;
}

export namespace RateArgs {
    export type AsObject = {
        allownegative: boolean,
    }
}

export class MetricProcessor extends jspb.Message { 
    getType(): MetricProcessorType;
    setType(value: MetricProcessorType): void;


    hasRollupArgs(): boolean;
    clearRollupArgs(): void;
    getRollupArgs(): RollupArgs | undefined;
    setRollupArgs(value?: RollupArgs): void;


    hasRateArgs(): boolean;
    clearRateArgs(): void;
    getRateArgs(): RateArgs | undefined;
    setRateArgs(value?: RateArgs): void;

    getMetric(): string;
    setMetric(value: string): void;


    getArgsCase(): MetricProcessor.ArgsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricProcessor.AsObject;
    static toObject(includeInstance: boolean, msg: MetricProcessor): MetricProcessor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricProcessor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricProcessor;
    static deserializeBinaryFromReader(message: MetricProcessor, reader: jspb.BinaryReader): MetricProcessor;
}

export namespace MetricProcessor {
    export type AsObject = {
        type: MetricProcessorType,
        rollupArgs?: RollupArgs.AsObject,
        rateArgs?: RateArgs.AsObject,
        metric: string,
    }

    export enum ArgsCase {
        ARGS_NOT_SET = 0,
    
    ROLLUP_ARGS = 2,

    RATE_ARGS = 3,

    }

}

export class TileArgs extends jspb.Message { 
    getSpan(): string;
    setSpan(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TileArgs.AsObject;
    static toObject(includeInstance: boolean, msg: TileArgs): TileArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TileArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TileArgs;
    static deserializeBinaryFromReader(message: TileArgs, reader: jspb.BinaryReader): TileArgs;
}

export namespace TileArgs {
    export type AsObject = {
        span: string,
    }
}

export class CurrentArgs extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrentArgs.AsObject;
    static toObject(includeInstance: boolean, msg: CurrentArgs): CurrentArgs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrentArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrentArgs;
    static deserializeBinaryFromReader(message: CurrentArgs, reader: jspb.BinaryReader): CurrentArgs;
}

export namespace CurrentArgs {
    export type AsObject = {
    }
}

export class MetricOutput extends jspb.Message { 
    getType(): MetricOutputType;
    setType(value: MetricOutputType): void;


    hasTileArgs(): boolean;
    clearTileArgs(): void;
    getTileArgs(): TileArgs | undefined;
    setTileArgs(value?: TileArgs): void;


    hasCurrentArgs(): boolean;
    clearCurrentArgs(): void;
    getCurrentArgs(): CurrentArgs | undefined;
    setCurrentArgs(value?: CurrentArgs): void;


    hasRollingArgs(): boolean;
    clearRollingArgs(): void;
    getRollingArgs(): RollupArgs | undefined;
    setRollingArgs(value?: RollupArgs): void;


    getArgsCase(): MetricOutput.ArgsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricOutput.AsObject;
    static toObject(includeInstance: boolean, msg: MetricOutput): MetricOutput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricOutput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricOutput;
    static deserializeBinaryFromReader(message: MetricOutput, reader: jspb.BinaryReader): MetricOutput;
}

export namespace MetricOutput {
    export type AsObject = {
        type: MetricOutputType,
        tileArgs?: TileArgs.AsObject,
        currentArgs?: CurrentArgs.AsObject,
        rollingArgs?: RollupArgs.AsObject,
    }

    export enum ArgsCase {
        ARGS_NOT_SET = 0,
    
    TILE_ARGS = 2,

    CURRENT_ARGS = 3,

    ROLLING_ARGS = 4,

    }

}

export class MetricDescription extends jspb.Message { 
    getType(): MetricType;
    setType(value: MetricType): void;

    getDescription(): string;
    setDescription(value: string): void;

    getUnits(): string;
    setUnits(value: string): void;

    clearScopesList(): void;
    getScopesList(): Array<string>;
    setScopesList(value: Array<string>): void;
    addScopes(value: string, index?: number): string;

    getAlign(): string;
    setAlign(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricDescription.AsObject;
    static toObject(includeInstance: boolean, msg: MetricDescription): MetricDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricDescription;
    static deserializeBinaryFromReader(message: MetricDescription, reader: jspb.BinaryReader): MetricDescription;
}

export namespace MetricDescription {
    export type AsObject = {
        type: MetricType,
        description: string,
        units: string,
        scopesList: Array<string>,
        align: string,
    }
}

export class Metric extends jspb.Message { 

    hasPath(): boolean;
    clearPath(): void;
    getPath(): MetricPath | undefined;
    setPath(value?: MetricPath): void;


    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): MetricDescription | undefined;
    setDescription(value?: MetricDescription): void;

    clearOutputsList(): void;
    getOutputsList(): Array<MetricOutput>;
    setOutputsList(value: Array<MetricOutput>): void;
    addOutputs(value?: MetricOutput, index?: number): MetricOutput;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metric.AsObject;
    static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metric;
    static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

export namespace Metric {
    export type AsObject = {
        path?: MetricPath.AsObject,
        description?: MetricDescription.AsObject,
        outputsList: Array<MetricOutput.AsObject>,
    }
}

export class CreateMetricRequest extends jspb.Message { 

    hasPath(): boolean;
    clearPath(): void;
    getPath(): MetricPath | undefined;
    setPath(value?: MetricPath): void;


    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): MetricDescription | undefined;
    setDescription(value?: MetricDescription): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMetricRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMetricRequest): CreateMetricRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMetricRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMetricRequest;
    static deserializeBinaryFromReader(message: CreateMetricRequest, reader: jspb.BinaryReader): CreateMetricRequest;
}

export namespace CreateMetricRequest {
    export type AsObject = {
        path?: MetricPath.AsObject,
        description?: MetricDescription.AsObject,
    }
}

export class MetricId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricId.AsObject;
    static toObject(includeInstance: boolean, msg: MetricId): MetricId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricId;
    static deserializeBinaryFromReader(message: MetricId, reader: jspb.BinaryReader): MetricId;
}

export namespace MetricId {
    export type AsObject = {
        id: string,
    }
}

export class MetricOutputId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricOutputId.AsObject;
    static toObject(includeInstance: boolean, msg: MetricOutputId): MetricOutputId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricOutputId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricOutputId;
    static deserializeBinaryFromReader(message: MetricOutputId, reader: jspb.BinaryReader): MetricOutputId;
}

export namespace MetricOutputId {
    export type AsObject = {
        id: string,
    }
}

export class MetricProcessorId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricProcessorId.AsObject;
    static toObject(includeInstance: boolean, msg: MetricProcessorId): MetricProcessorId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricProcessorId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricProcessorId;
    static deserializeBinaryFromReader(message: MetricProcessorId, reader: jspb.BinaryReader): MetricProcessorId;
}

export namespace MetricProcessorId {
    export type AsObject = {
        id: string,
    }
}

export class MetricDescriptionList extends jspb.Message { 
    clearDescriptionsList(): void;
    getDescriptionsList(): Array<MetricDescription>;
    setDescriptionsList(value: Array<MetricDescription>): void;
    addDescriptions(value?: MetricDescription, index?: number): MetricDescription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricDescriptionList.AsObject;
    static toObject(includeInstance: boolean, msg: MetricDescriptionList): MetricDescriptionList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricDescriptionList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricDescriptionList;
    static deserializeBinaryFromReader(message: MetricDescriptionList, reader: jspb.BinaryReader): MetricDescriptionList;
}

export namespace MetricDescriptionList {
    export type AsObject = {
        descriptionsList: Array<MetricDescription.AsObject>,
    }
}

export class MetricList extends jspb.Message { 
    clearMetricsList(): void;
    getMetricsList(): Array<Metric>;
    setMetricsList(value: Array<Metric>): void;
    addMetrics(value?: Metric, index?: number): Metric;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricList.AsObject;
    static toObject(includeInstance: boolean, msg: MetricList): MetricList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricList;
    static deserializeBinaryFromReader(message: MetricList, reader: jspb.BinaryReader): MetricList;
}

export namespace MetricList {
    export type AsObject = {
        metricsList: Array<Metric.AsObject>,
    }
}

export class CollectionPath extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionPath.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionPath): CollectionPath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionPath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionPath;
    static deserializeBinaryFromReader(message: CollectionPath, reader: jspb.BinaryReader): CollectionPath;
}

export namespace CollectionPath {
    export type AsObject = {
        organization: string,
        collection: string,
    }
}

export class CollectionId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CollectionId.AsObject;
    static toObject(includeInstance: boolean, msg: CollectionId): CollectionId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CollectionId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CollectionId;
    static deserializeBinaryFromReader(message: CollectionId, reader: jspb.BinaryReader): CollectionId;
}

export namespace CollectionId {
    export type AsObject = {
        id: string,
    }
}

export class MetricPath extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getMetric(): string;
    setMetric(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MetricPath.AsObject;
    static toObject(includeInstance: boolean, msg: MetricPath): MetricPath.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MetricPath, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MetricPath;
    static deserializeBinaryFromReader(message: MetricPath, reader: jspb.BinaryReader): MetricPath;
}

export namespace MetricPath {
    export type AsObject = {
        organization: string,
        collection: string,
        metric: string,
    }
}

export class CreateMetricProcessorRequest extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getCollection(): string;
    setCollection(value: string): void;

    getMetric(): string;
    setMetric(value: string): void;


    hasProcessor(): boolean;
    clearProcessor(): void;
    getProcessor(): MetricProcessor | undefined;
    setProcessor(value?: MetricProcessor): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMetricProcessorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMetricProcessorRequest): CreateMetricProcessorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMetricProcessorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMetricProcessorRequest;
    static deserializeBinaryFromReader(message: CreateMetricProcessorRequest, reader: jspb.BinaryReader): CreateMetricProcessorRequest;
}

export namespace CreateMetricProcessorRequest {
    export type AsObject = {
        organization: string,
        collection: string,
        metric: string,
        processor?: MetricProcessor.AsObject,
    }
}

export class CreateMetricOutputRequest extends jspb.Message { 

    hasPath(): boolean;
    clearPath(): void;
    getPath(): MetricPath | undefined;
    setPath(value?: MetricPath): void;


    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): MetricOutput | undefined;
    setOutput(value?: MetricOutput): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMetricOutputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMetricOutputRequest): CreateMetricOutputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMetricOutputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMetricOutputRequest;
    static deserializeBinaryFromReader(message: CreateMetricOutputRequest, reader: jspb.BinaryReader): CreateMetricOutputRequest;
}

export namespace CreateMetricOutputRequest {
    export type AsObject = {
        path?: MetricPath.AsObject,
        output?: MetricOutput.AsObject,
    }
}

export class OrganizationId extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationId.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationId): OrganizationId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationId;
    static deserializeBinaryFromReader(message: OrganizationId, reader: jspb.BinaryReader): OrganizationId;
}

export namespace OrganizationId {
    export type AsObject = {
        id: string,
    }
}

export class CreateOrganizationRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getFullname(): string;
    setFullname(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
    static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
    export type AsObject = {
        id: string,
        fullname: string,
    }
}

export class CreateCollectionRequest extends jspb.Message { 
    getOrganization(): string;
    setOrganization(value: string): void;

    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCollectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCollectionRequest): CreateCollectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCollectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCollectionRequest;
    static deserializeBinaryFromReader(message: CreateCollectionRequest, reader: jspb.BinaryReader): CreateCollectionRequest;
}

export namespace CreateCollectionRequest {
    export type AsObject = {
        organization: string,
        name: string,
        description: string,
    }
}

export enum AggregationType {
    NONE = 0,
    AVG = 1,
    MAX = 2,
    MIN = 3,
}

export enum Visible {
    SHOW = 0,
    HIDE = 1,
}

export enum SubscriptionCommand {
    SUBSCRIBE = 0,
    UNSUBSCRIBE = 1,
}

export enum MetricType {
    COUNTER = 0,
    GUAGE = 1,
    STRING = 3,
    BOOL = 4,
}

export enum MetricProcessorType {
    ROLLUP = 0,
    RATE = 1,
}

export enum MetricOutputType {
    TILE = 0,
    CURRENT = 1,
    ROLLING = 2,
}
