// package: netbeam
// file: netbeam.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as netbeam_pb from "./netbeam_pb";

interface INetbeamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: INetbeamService_ISayHello;
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

export const NetbeamService: INetbeamService;

export interface INetbeamServer {
    sayHello: grpc.handleUnaryCall<netbeam_pb.HelloRequest, netbeam_pb.HelloReply>;
}

export interface INetbeamClient {
    sayHello(request: netbeam_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class NetbeamClient extends grpc.Client implements INetbeamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: netbeam_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: netbeam_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: netbeam_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
