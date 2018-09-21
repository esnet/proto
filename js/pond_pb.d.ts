// package: pond
// file: pond.proto

import * as jspb from "google-protobuf";

export class Timestamp extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): void;

  getNanos(): number;
  setNanos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class TimeRange extends jspb.Message {
  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): Timestamp | undefined;
  setStartTime(value?: Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): Timestamp | undefined;
  setEndTime(value?: Timestamp): void;

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
    startTime?: Timestamp.AsObject,
    endTime?: Timestamp.AsObject,
  }
}

export class Index extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): void;

  hasTimerange(): boolean;
  clearTimerange(): void;
  getTimerange(): TimeRange | undefined;
  setTimerange(value?: TimeRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Index.AsObject;
  static toObject(includeInstance: boolean, msg: Index): Index.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Index, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Index;
  static deserializeBinaryFromReader(message: Index, reader: jspb.BinaryReader): Index;
}

export namespace Index {
  export type AsObject = {
    index: string,
    timerange?: TimeRange.AsObject,
  }
}

export class Duration extends jspb.Message {
  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    duration: number,
  }
}

export class Period extends jspb.Message {
  hasFrequency(): boolean;
  clearFrequency(): void;
  getFrequency(): Duration | undefined;
  setFrequency(value?: Duration): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    frequency?: Duration.AsObject,
    offset: number,
  }
}

export class TypedKey extends jspb.Message {
  hasTimestampKey(): boolean;
  clearTimestampKey(): void;
  getTimestampKey(): Timestamp | undefined;
  setTimestampKey(value?: Timestamp): void;

  hasTimerangeKey(): boolean;
  clearTimerangeKey(): void;
  getTimerangeKey(): TimeRange | undefined;
  setTimerangeKey(value?: TimeRange): void;

  hasIndexKey(): boolean;
  clearIndexKey(): void;
  getIndexKey(): Index | undefined;
  setIndexKey(value?: Index): void;

  getKeyCase(): TypedKey.KeyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypedKey.AsObject;
  static toObject(includeInstance: boolean, msg: TypedKey): TypedKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypedKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypedKey;
  static deserializeBinaryFromReader(message: TypedKey, reader: jspb.BinaryReader): TypedKey;
}

export namespace TypedKey {
  export type AsObject = {
    timestampKey?: Timestamp.AsObject,
    timerangeKey?: TimeRange.AsObject,
    indexKey?: Index.AsObject,
  }

  export enum KeyCase {
    KEY_NOT_SET = 0,
    TIMESTAMP_KEY = 1,
    TIMERANGE_KEY = 2,
    INDEX_KEY = 3,
  }
}

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

export class FieldValue extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): TypedValue | undefined;
  setValue(value?: TypedValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldValue.AsObject;
  static toObject(includeInstance: boolean, msg: FieldValue): FieldValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldValue;
  static deserializeBinaryFromReader(message: FieldValue, reader: jspb.BinaryReader): FieldValue;
}

export namespace FieldValue {
  export type AsObject = {
    field: string,
    value?: TypedValue.AsObject,
  }
}

export class Event extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): TypedKey | undefined;
  setKey(value?: TypedKey): void;

  clearFieldsList(): void;
  getFieldsList(): Array<FieldValue>;
  setFieldsList(value: Array<FieldValue>): void;
  addFields(value?: FieldValue, index?: number): FieldValue;

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
    key?: TypedKey.AsObject,
    fieldsList: Array<FieldValue.AsObject>,
  }
}

export class Collection extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

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
    eventsList: Array<Event.AsObject>,
  }
}

export class TaggedValue extends jspb.Message {
  getTag(): string;
  setTag(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaggedValue.AsObject;
  static toObject(includeInstance: boolean, msg: TaggedValue): TaggedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaggedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaggedValue;
  static deserializeBinaryFromReader(message: TaggedValue, reader: jspb.BinaryReader): TaggedValue;
}

export namespace TaggedValue {
  export type AsObject = {
    tag: string,
    value: string,
  }
}

export class Point extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): TypedKey | undefined;
  setKey(value?: TypedKey): void;

  clearValuesList(): void;
  getValuesList(): Array<TypedValue>;
  setValuesList(value: Array<TypedValue>): void;
  addValues(value?: TypedValue, index?: number): TypedValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    key?: TypedKey.AsObject,
    valuesList: Array<TypedValue.AsObject>,
  }
}

export class TimeSeries extends jspb.Message {
  clearMetaList(): void;
  getMetaList(): Array<TaggedValue>;
  setMetaList(value: Array<TaggedValue>): void;
  addMeta(value?: TaggedValue, index?: number): TaggedValue;

  clearColumnsList(): void;
  getColumnsList(): Array<string>;
  setColumnsList(value: Array<string>): void;
  addColumns(value: string, index?: number): string;

  clearPointsList(): void;
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): void;
  addPoints(value?: Point, index?: number): Point;

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
    metaList: Array<TaggedValue.AsObject>,
    columnsList: Array<string>,
    pointsList: Array<Point.AsObject>,
  }
}

