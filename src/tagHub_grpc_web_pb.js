/**
 * @fileoverview gRPC-Web generated client stub for demo.grpc.taghub
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.demo = {};
proto.demo.grpc = {};
proto.demo.grpc.taghub = require('./tagHub_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.demo.grpc.taghub.TagHubClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.demo.grpc.taghub.TagHubPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.demo.grpc.taghub.TagUpdateRequest,
 *   !proto.demo.grpc.taghub.EmptyResponse>}
 */
const methodDescriptor_TagHub_SetTag = new grpc.web.MethodDescriptor(
  '/demo.grpc.taghub.TagHub/SetTag',
  grpc.web.MethodType.UNARY,
  proto.demo.grpc.taghub.TagUpdateRequest,
  proto.demo.grpc.taghub.EmptyResponse,
  /**
   * @param {!proto.demo.grpc.taghub.TagUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.demo.grpc.taghub.EmptyResponse.deserializeBinary
);


/**
 * @param {!proto.demo.grpc.taghub.TagUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.demo.grpc.taghub.EmptyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.demo.grpc.taghub.EmptyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.demo.grpc.taghub.TagHubClient.prototype.setTag =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/demo.grpc.taghub.TagHub/SetTag',
      request,
      metadata || {},
      methodDescriptor_TagHub_SetTag,
      callback);
};


/**
 * @param {!proto.demo.grpc.taghub.TagUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.demo.grpc.taghub.EmptyResponse>}
 *     Promise that resolves to the response
 */
proto.demo.grpc.taghub.TagHubPromiseClient.prototype.setTag =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/demo.grpc.taghub.TagHub/SetTag',
      request,
      metadata || {},
      methodDescriptor_TagHub_SetTag);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.demo.grpc.taghub.TagGroupRequest,
 *   !proto.demo.grpc.taghub.TagGroupResponse>}
 */
const methodDescriptor_TagHub_GetTags = new grpc.web.MethodDescriptor(
  '/demo.grpc.taghub.TagHub/GetTags',
  grpc.web.MethodType.UNARY,
  proto.demo.grpc.taghub.TagGroupRequest,
  proto.demo.grpc.taghub.TagGroupResponse,
  /**
   * @param {!proto.demo.grpc.taghub.TagGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.demo.grpc.taghub.TagGroupResponse.deserializeBinary
);


/**
 * @param {!proto.demo.grpc.taghub.TagGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.demo.grpc.taghub.TagGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.demo.grpc.taghub.TagGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.demo.grpc.taghub.TagHubClient.prototype.getTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/demo.grpc.taghub.TagHub/GetTags',
      request,
      metadata || {},
      methodDescriptor_TagHub_GetTags,
      callback);
};


/**
 * @param {!proto.demo.grpc.taghub.TagGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.demo.grpc.taghub.TagGroupResponse>}
 *     Promise that resolves to the response
 */
proto.demo.grpc.taghub.TagHubPromiseClient.prototype.getTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/demo.grpc.taghub.TagHub/GetTags',
      request,
      metadata || {},
      methodDescriptor_TagHub_GetTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.demo.grpc.taghub.TagGroupRequest,
 *   !proto.demo.grpc.taghub.TagGroupResponse>}
 */
const methodDescriptor_TagHub_ConnectToHub = new grpc.web.MethodDescriptor(
  '/demo.grpc.taghub.TagHub/ConnectToHub',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.demo.grpc.taghub.TagGroupRequest,
  proto.demo.grpc.taghub.TagGroupResponse,
  /**
   * @param {!proto.demo.grpc.taghub.TagGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.demo.grpc.taghub.TagGroupResponse.deserializeBinary
);


/**
 * @param {!proto.demo.grpc.taghub.TagGroupRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.demo.grpc.taghub.TagGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.demo.grpc.taghub.TagHubClient.prototype.connectToHub =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/demo.grpc.taghub.TagHub/ConnectToHub',
      request,
      metadata || {},
      methodDescriptor_TagHub_ConnectToHub);
};


/**
 * @param {!proto.demo.grpc.taghub.TagGroupRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.demo.grpc.taghub.TagGroupResponse>}
 *     The XHR Node Readable Stream
 */
proto.demo.grpc.taghub.TagHubPromiseClient.prototype.connectToHub =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/demo.grpc.taghub.TagHub/ConnectToHub',
      request,
      metadata || {},
      methodDescriptor_TagHub_ConnectToHub);
};


module.exports = proto.demo.grpc.taghub;

