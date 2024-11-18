default:
    just --list 


[doc('copy the IDL files from the gRPC codegen ')]
copy-proto:
    mkdir -p src/proto
    cp node_modules/bookmark_grpc_codegen/proto/* src/proto/


compile-proto:
    #!/bin/bash
    protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=src/protogen --ts_proto_opt=fileSuffix=.pb  --ts_proto_opt=nestJs=true --experimental_allow_proto3_optional=true   -I=./src/proto  ./src/proto/*.proto 


