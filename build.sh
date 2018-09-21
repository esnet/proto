#!/bin/sh

#
# Script to compile protobuf files
#

PROTO_PATH="protos"

PROTO_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_NODE_PLUGIN_PATH="./node_modules/grpc-tools/bin/grpc_node_plugin"
TS_OUT_DIR="./js"

#
# Cloud Endpoint API descriptor sets
#

# protoc -I=$PROTO_PATH --include_imports --include_source_info netbeam.proto --descriptor_set_out v1/netbeam.pb
# protoc -I=$PROTO_PATH --include_imports --include_source_info network.proto --descriptor_set_out v1/network.pb

#
# Typescript / Javascript build
#

mkdir -p js
protoc \
    --plugin="protoc-gen-ts=${PROTO_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${TS_OUT_DIR}" \
    --ts_out="service=true:${TS_OUT_DIR}" \
    --proto_path=$PROTO_PATH \
    netbeam.proto network.proto pond.proto  google/api/http.proto google/api/annotations.proto google/protobuf/compiler/plugin.proto


#
# Golang builds
#

mkdir -p go/netbeam
mkdir -p go/pond
./node_modules/.bin/grpc_tools_node_protoc -I protos --go_out=go/netbeam --proto_path=$PROTO_PATH netbeam.proto
./node_modules/.bin/grpc_tools_node_protoc -I protos --go_out=go/netbeam --proto_path=$PROTO_PATH network.proto
./node_modules/.bin/grpc_tools_node_protoc -I protos --go_out=go/pond --proto_path=$PROTO_PATH pond.proto
