// package: esnet.netbeam.v1
// file: network.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as netbeam_pb from "./netbeam_pb";

export class InterfaceEvent extends jspb.Message {
  getDevice(): string;
  setDevice(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  getDirection(): Direction;
  setDirection(value: Direction): void;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): netbeam_pb.Event | undefined;
  setEvent(value?: netbeam_pb.Event): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceEvent.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceEvent): InterfaceEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceEvent;
  static deserializeBinaryFromReader(message: InterfaceEvent, reader: jspb.BinaryReader): InterfaceEvent;
}

export namespace InterfaceEvent {
  export type AsObject = {
    device: string,
    pb_interface: string,
    direction: Direction,
    event?: netbeam_pb.Event.AsObject,
  }
}

export class InterfaceDetails extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getIfindex(): string;
  setIfindex(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSpeed(): number;
  setSpeed(value: number): void;

  getVisibility(): netbeam_pb.Visible;
  setVisibility(value: netbeam_pb.Visible): void;

  getConnection(): string;
  setConnection(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): void;
  addTags(value: string, index?: number): string;

  getSector(): string;
  setSector(value: string): void;

  getSite(): string;
  setSite(value: string): void;

  getLhcone(): boolean;
  setLhcone(value: boolean): void;

  getOscars(): boolean;
  setOscars(value: boolean): void;

  getIntercloud(): boolean;
  setIntercloud(value: boolean): void;

  getIntracloud(): boolean;
  setIntracloud(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceDetails.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceDetails): InterfaceDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceDetails;
  static deserializeBinaryFromReader(message: InterfaceDetails, reader: jspb.BinaryReader): InterfaceDetails;
}

export namespace InterfaceDetails {
  export type AsObject = {
    name: string,
    device: string,
    ifindex: string,
    description: string,
    speed: number,
    visibility: netbeam_pb.Visible,
    connection: string,
    link: string,
    tagsList: Array<string>,
    sector: string,
    site: string,
    lhcone: boolean,
    oscars: boolean,
    intercloud: boolean,
    intracloud: boolean,
  }
}

export class InterfaceList extends jspb.Message {
  clearInterfacesList(): void;
  getInterfacesList(): Array<InterfaceDetails>;
  setInterfacesList(value: Array<InterfaceDetails>): void;
  addInterfaces(value?: InterfaceDetails, index?: number): InterfaceDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceList.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceList): InterfaceList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceList;
  static deserializeBinaryFromReader(message: InterfaceList, reader: jspb.BinaryReader): InterfaceList;
}

export namespace InterfaceList {
  export type AsObject = {
    interfacesList: Array<InterfaceDetails.AsObject>,
  }
}

export class InterfaceTrafficList extends jspb.Message {
  clearInterfacesList(): void;
  getInterfacesList(): Array<InterfaceEvent>;
  setInterfacesList(value: Array<InterfaceEvent>): void;
  addInterfaces(value?: InterfaceEvent, index?: number): InterfaceEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceTrafficList.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceTrafficList): InterfaceTrafficList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceTrafficList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceTrafficList;
  static deserializeBinaryFromReader(message: InterfaceTrafficList, reader: jspb.BinaryReader): InterfaceTrafficList;
}

export namespace InterfaceTrafficList {
  export type AsObject = {
    interfacesList: Array<InterfaceEvent.AsObject>,
  }
}

export class InterfaceMonthlyUtilization extends jspb.Message {
  getMonth(): string;
  setMonth(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  clearPercentilesList(): void;
  getPercentilesList(): Array<netbeam_pb.Percentile>;
  setPercentilesList(value: Array<netbeam_pb.Percentile>): void;
  addPercentiles(value?: netbeam_pb.Percentile, index?: number): netbeam_pb.Percentile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceMonthlyUtilization.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceMonthlyUtilization): InterfaceMonthlyUtilization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceMonthlyUtilization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceMonthlyUtilization;
  static deserializeBinaryFromReader(message: InterfaceMonthlyUtilization, reader: jspb.BinaryReader): InterfaceMonthlyUtilization;
}

export namespace InterfaceMonthlyUtilization {
  export type AsObject = {
    month: string,
    device: string,
    pb_interface: string,
    percentilesList: Array<netbeam_pb.Percentile.AsObject>,
  }
}

export class InterfaceTileRequest extends jspb.Message {
  getIndex(): string;
  setIndex(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getAgg(): netbeam_pb.AggregationType;
  setAgg(value: netbeam_pb.AggregationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceTileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceTileRequest): InterfaceTileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceTileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceTileRequest;
  static deserializeBinaryFromReader(message: InterfaceTileRequest, reader: jspb.BinaryReader): InterfaceTileRequest;
}

export namespace InterfaceTileRequest {
  export type AsObject = {
    index: string,
    pb_interface: string,
    device: string,
    agg: netbeam_pb.AggregationType,
  }
}

export class InterfaceTrafficRequest extends jspb.Message {
  getBegin(): number;
  setBegin(value: number): void;

  getEnd(): number;
  setEnd(value: number): void;

  getInterface(): string;
  setInterface(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  getAgg(): netbeam_pb.AggregationType;
  setAgg(value: netbeam_pb.AggregationType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceTrafficRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceTrafficRequest): InterfaceTrafficRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceTrafficRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceTrafficRequest;
  static deserializeBinaryFromReader(message: InterfaceTrafficRequest, reader: jspb.BinaryReader): InterfaceTrafficRequest;
}

export namespace InterfaceTrafficRequest {
  export type AsObject = {
    begin: number,
    end: number,
    pb_interface: string,
    device: string,
    agg: netbeam_pb.AggregationType,
  }
}

export class InterfaceListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceListRequest): InterfaceListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceListRequest;
  static deserializeBinaryFromReader(message: InterfaceListRequest, reader: jspb.BinaryReader): InterfaceListRequest;
}

export namespace InterfaceListRequest {
  export type AsObject = {
  }
}

export class InterfaceTrafficListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceTrafficListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceTrafficListRequest): InterfaceTrafficListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceTrafficListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceTrafficListRequest;
  static deserializeBinaryFromReader(message: InterfaceTrafficListRequest, reader: jspb.BinaryReader): InterfaceTrafficListRequest;
}

export namespace InterfaceTrafficListRequest {
  export type AsObject = {
  }
}

export class InterfaceUtilizationRequest extends jspb.Message {
  getMonth(): string;
  setMonth(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  getDevice(): string;
  setDevice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceUtilizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceUtilizationRequest): InterfaceUtilizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InterfaceUtilizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceUtilizationRequest;
  static deserializeBinaryFromReader(message: InterfaceUtilizationRequest, reader: jspb.BinaryReader): InterfaceUtilizationRequest;
}

export namespace InterfaceUtilizationRequest {
  export type AsObject = {
    month: string,
    pb_interface: string,
    device: string,
  }
}

export class AuthorizeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
  }
}

export class AuthorizeResponse extends jspb.Message {
  getError(): string;
  setError(value: string): void;

  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeResponse): AuthorizeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeResponse;
  static deserializeBinaryFromReader(message: AuthorizeResponse, reader: jspb.BinaryReader): AuthorizeResponse;
}

export namespace AuthorizeResponse {
  export type AsObject = {
    error: string,
    accesstoken: string,
  }
}

export enum Direction {
  IN = 0,
  OUT = 1,
}

