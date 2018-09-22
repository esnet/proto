#!/usr/bin/env bash

JS_DEST=./js/proto

mkdir -p ${JS_DEST}

# JavaScript code generating
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${JS_DEST} \
    --grpc_out=${JS_DEST} \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I ./proto \
    proto/*.proto proto/google/api/*.proto proto/google/protobuf/*.proto

mkdir -p ${JS_DEST}

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=`which protoc-gen-ts` \
    --ts_out=service=true:${JS_DEST} \
    -I ./proto \
    proto/*.proto proto/google/api/*.proto proto/google/protobuf/*.proto

# TypeScript compiling
tsc -d


#
# Golang builds
#

mkdir -p go/netbeam
mkdir -p go/pond

./node_modules/.bin/grpc_tools_node_protoc -I proto --go_out=go/netbeam --proto_path=./proto netbeam.proto
./node_modules/.bin/grpc_tools_node_protoc -I proto --go_out=go/netbeam --proto_path=./proto network.proto
./node_modules/.bin/grpc_tools_node_protoc -I proto --go_out=go/pond --proto_path=./proto pond.proto
