// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.3
// source: bookmark_collections.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "BookmarkCollection";

export interface BookmarkCollectionEntries {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  BookmarkCollectionId: string;
  moreFields: { [key: string]: string };
}

export interface BookmarkCollectionEntries_MoreFieldsEntry {
  key: string;
  value: string;
}

export interface NewBookmarkCollectionRequest {
  name: string;
  description: string;
}

export interface NewBookmarkCollectionResponse {
  BookmarkCollectionId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBookmarkCollectionRequest {
  BookmarkCollectionId: string;
}

export interface GetBookmarkCollectionResponse {
  BookmarkCollectionId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  entries: BookmarkCollectionEntries[];
}

export interface UpdateBookmarkCollectionRequest {
  BookmarkCollectionId: string;
  name?: string | undefined;
  description?: string | undefined;
}

export interface UpdateBookmarkCollectionResponse {
  BookmarkCollectionId: string;
  status: string;
}

export interface DeleteBookmarkCollectionRequest {
  BookmarkCollectionId: string;
}

export interface DeleteBookmarkCollectionResponse {
  BookmarkCollectionId: string;
  message: string;
}

export interface ListBookmarkCollectionsRequest {
  page: number;
  pageSize: number;
}

export interface BookmarkCollection {
  BookmarkCollectionId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListBookmarkCollectionsResponse {
  BookmarkCollections: BookmarkCollection[];
  totalCount: number;
}

export interface ListBookmarkCollectionEntryRequest {
  BookmarkCollectionId: string;
  page: number;
  pageSize: number;
}

export interface ListBookmarkCollectionEntryResponse {
  BookmarkCollectionEntries: BookmarkCollectionEntries[];
  totalCount: number;
}

export const BOOKMARK_COLLECTION_PACKAGE_NAME = "BookmarkCollection";

export interface BookmarkCollectionManagerClient {
  createNewBookmarkCollection(request: NewBookmarkCollectionRequest): Observable<NewBookmarkCollectionResponse>;

  getBookmarkCollection(request: GetBookmarkCollectionRequest): Observable<GetBookmarkCollectionResponse>;

  updateBookmarkCollection(request: UpdateBookmarkCollectionRequest): Observable<GetBookmarkCollectionResponse>;

  deleteBookmarkCollection(request: DeleteBookmarkCollectionRequest): Observable<DeleteBookmarkCollectionResponse>;

  listBookmarkCollections(request: ListBookmarkCollectionsRequest): Observable<ListBookmarkCollectionsResponse>;

  listBookmarkCollectionEntries(
    request: ListBookmarkCollectionEntryRequest,
  ): Observable<ListBookmarkCollectionEntryResponse>;
}

export interface BookmarkCollectionManagerController {
  createNewBookmarkCollection(
    request: NewBookmarkCollectionRequest,
  ): Promise<NewBookmarkCollectionResponse> | Observable<NewBookmarkCollectionResponse> | NewBookmarkCollectionResponse;

  getBookmarkCollection(
    request: GetBookmarkCollectionRequest,
  ): Promise<GetBookmarkCollectionResponse> | Observable<GetBookmarkCollectionResponse> | GetBookmarkCollectionResponse;

  updateBookmarkCollection(
    request: UpdateBookmarkCollectionRequest,
  ): Promise<GetBookmarkCollectionResponse> | Observable<GetBookmarkCollectionResponse> | GetBookmarkCollectionResponse;

  deleteBookmarkCollection(
    request: DeleteBookmarkCollectionRequest,
  ):
    | Promise<DeleteBookmarkCollectionResponse>
    | Observable<DeleteBookmarkCollectionResponse>
    | DeleteBookmarkCollectionResponse;

  listBookmarkCollections(
    request: ListBookmarkCollectionsRequest,
  ):
    | Promise<ListBookmarkCollectionsResponse>
    | Observable<ListBookmarkCollectionsResponse>
    | ListBookmarkCollectionsResponse;

  listBookmarkCollectionEntries(
    request: ListBookmarkCollectionEntryRequest,
  ):
    | Promise<ListBookmarkCollectionEntryResponse>
    | Observable<ListBookmarkCollectionEntryResponse>
    | ListBookmarkCollectionEntryResponse;
}

export function BookmarkCollectionManagerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createNewBookmarkCollection",
      "getBookmarkCollection",
      "updateBookmarkCollection",
      "deleteBookmarkCollection",
      "listBookmarkCollections",
      "listBookmarkCollectionEntries",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BookmarkCollectionManager", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BookmarkCollectionManager", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BOOKMARK_COLLECTION_MANAGER_SERVICE_NAME = "BookmarkCollectionManager";