# proto

## helloworld

These are the Google example protobuf files for testing with. To build the Go source from them you need to use `protoc`.

The Google APIs are needed to build the http_helloworld protobuf def. It needs them for the annotations.
You can git clone those into the project:

```
git clone https://github.com/googleapis/googleapis
```

Then use protoc to do the building:

```
protoc --proto_path=. --proto_path=../googleapis --include_imports --include_source_info --descriptor_set_out api.pb ./http_helloworld.proto --go_out=plugins=grpc:.
```
