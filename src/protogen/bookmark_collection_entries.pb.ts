// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.3
// source: bookmark_collection_entries.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "bookmark_collections_entries";

export interface NewBookmarkCollectionsEntryRequest {
  title: string;
  description: string;
  bookmarkCollectionId: string;
  moreFields: { [key: string]: string };
}

export interface NewBookmarkCollectionsEntryRequest_MoreFieldsEntry {
  key: string;
  value: string;
}

export interface GetBookmarkCollectionsEntryResponse {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  collectionId: string;
  moreFields: { [key: string]: string };
  entryId: string;
}

export interface GetBookmarkCollectionsEntryResponse_MoreFieldsEntry {
  key: string;
  value: string;
}

export interface GetBookmarkCollectionsEntryRequest {
  collectionId: string;
  entryId: string;
}

export interface UpdateBookmarkCollectionsEntryRequest {
  collectionId: string;
  title?: string | undefined;
  description?: string | undefined;
  entryId: string;
}

export interface DeleteBookmarkCollectionsEntryResponse {
  collectionId: string;
  entryId: string;
  status: string;
}

export const BOOKMARK_COLLECTIONS_ENTRIES_PACKAGE_NAME = "bookmark_collections_entries";

export interface BookmarkCollectionsEntriesManagerClient {
  createNewBookmarkCollectionEntry(
    request: NewBookmarkCollectionsEntryRequest,
  ): Observable<GetBookmarkCollectionsEntryResponse>;

  getBookmarkCollectionEntry(
    request: GetBookmarkCollectionsEntryRequest,
  ): Observable<GetBookmarkCollectionsEntryResponse>;

  updateBookmarkCollectionEntry(
    request: UpdateBookmarkCollectionsEntryRequest,
  ): Observable<GetBookmarkCollectionsEntryResponse>;

  deleteBookmarkCollectionEntry(
    request: UpdateBookmarkCollectionsEntryRequest,
  ): Observable<DeleteBookmarkCollectionsEntryResponse>;
}

export interface BookmarkCollectionsEntriesManagerController {
  createNewBookmarkCollectionEntry(
    request: NewBookmarkCollectionsEntryRequest,
  ):
    | Promise<GetBookmarkCollectionsEntryResponse>
    | Observable<GetBookmarkCollectionsEntryResponse>
    | GetBookmarkCollectionsEntryResponse;

  getBookmarkCollectionEntry(
    request: GetBookmarkCollectionsEntryRequest,
  ):
    | Promise<GetBookmarkCollectionsEntryResponse>
    | Observable<GetBookmarkCollectionsEntryResponse>
    | GetBookmarkCollectionsEntryResponse;

  updateBookmarkCollectionEntry(
    request: UpdateBookmarkCollectionsEntryRequest,
  ):
    | Promise<GetBookmarkCollectionsEntryResponse>
    | Observable<GetBookmarkCollectionsEntryResponse>
    | GetBookmarkCollectionsEntryResponse;

  deleteBookmarkCollectionEntry(
    request: UpdateBookmarkCollectionsEntryRequest,
  ):
    | Promise<DeleteBookmarkCollectionsEntryResponse>
    | Observable<DeleteBookmarkCollectionsEntryResponse>
    | DeleteBookmarkCollectionsEntryResponse;
}

export function BookmarkCollectionsEntriesManagerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createNewBookmarkCollectionEntry",
      "getBookmarkCollectionEntry",
      "updateBookmarkCollectionEntry",
      "deleteBookmarkCollectionEntry",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BookmarkCollectionsEntriesManager", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BookmarkCollectionsEntriesManager", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BOOKMARK_COLLECTIONS_ENTRIES_MANAGER_SERVICE_NAME = "BookmarkCollectionsEntriesManager";