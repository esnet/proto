#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
OUT_DIR="./js"

mkdir -p ${OUT_DIR}

# generate js codes via grpc-tools
# grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${JS_DEST} \
#     --grpc_out=${JS_DEST} \
#     --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#     -I ./proto \
#     proto/*.proto proto/google/api/*.proto proto/google/protobuf/*.proto

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    -I ./proto \
    proto/*.proto proto/google/api/*.proto proto/google/protobuf/*.proto


#
# Golang builds
#

mkdir -p go/netbeam
mkdir -p go/pond

protoc -I proto --go_out=go/netbeam --proto_path=./proto netbeam.proto
protoc -I proto --go_out=go/pond --proto_path=./proto pond.proto
