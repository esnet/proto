#!/bin/sh

#
# Script to compile protobuf files
#

NETBEAM_PROTO_PATH="netbeam"
POND_PROTO_PATH="pond"

PROTO_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
GRPC_NODE_PLUGIN_PATH="./node_modules/grpc-tools/bin/grpc_node_plugin"

# API
# protoc -I=$PROTO_PATH --include_imports --include_source_info netbeam.proto --descriptor_set_out v1/netbeam.pb
# protoc -I=$PROTO_PATH --include_imports --include_source_info network.proto --descriptor_set_out v1/network.pb

# Javascript netbeam build
./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./js --grpc_out=./js --plugin=protoc-gen-grpc=$GRPC_NODE_PLUGIN_PATH --proto_path=$NETBEAM_PROTO_PATH netbeam.proto google/api/http.proto google/api/annotations.proto google/protobuf/compiler/plugin.proto 
./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./js --grpc_out=./js --plugin=protoc-gen-grpc=$GRPC_NODE_PLUGIN_PATH --proto_path=$NETBEAM_PROTO_PATH network.proto

#Typescript
#protoc --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=true:$OUT_DIR --plugin=protoc-gen-ts=$PROTO_GEN_TS_PATH --proto_path=$PROTO_PATH netbeam.proto
#protoc --js_out=import_style=commonjs,binary:$OUT_DIR --ts_out=service=true:$OUT_DIR --plugin=protoc-gen-ts=$PROTO_GEN_TS_PATH --proto_path=$PROTO_PATH network.proto

# Javascript pond build
./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./js --grpc_out=./js --plugin=protoc-gen-grpc=$GRPC_NODE_PLUGIN_PATH --proto_path=$POND_PROTO_PATH pond.proto
./node_modules/.bin/grpc_tools_node_protoc -I pond --go_out=go --proto_path=$POND_PROTO_PATH pond.proto
