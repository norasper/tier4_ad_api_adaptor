/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.geometry_msgs.msg.Pose');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.geometry_msgs.msg.Point');
goog.require('proto.geometry_msgs.msg.Quaternion');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.geometry_msgs.msg.Pose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.geometry_msgs.msg.Pose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.geometry_msgs.msg.Pose.displayName = 'proto.geometry_msgs.msg.Pose';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.geometry_msgs.msg.Pose.prototype.toObject = function(opt_includeInstance) {
  return proto.geometry_msgs.msg.Pose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.geometry_msgs.msg.Pose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry_msgs.msg.Pose.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.geometry_msgs.msg.Point.toObject(includeInstance, f),
    orientation: (f = msg.getOrientation()) && proto.geometry_msgs.msg.Quaternion.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.geometry_msgs.msg.Pose}
 */
proto.geometry_msgs.msg.Pose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.geometry_msgs.msg.Pose;
  return proto.geometry_msgs.msg.Pose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.geometry_msgs.msg.Pose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.geometry_msgs.msg.Pose}
 */
proto.geometry_msgs.msg.Pose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.geometry_msgs.msg.Point;
      reader.readMessage(value,proto.geometry_msgs.msg.Point.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.geometry_msgs.msg.Quaternion;
      reader.readMessage(value,proto.geometry_msgs.msg.Quaternion.deserializeBinaryFromReader);
      msg.setOrientation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.geometry_msgs.msg.Pose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.geometry_msgs.msg.Pose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.geometry_msgs.msg.Pose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.geometry_msgs.msg.Pose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.geometry_msgs.msg.Point.serializeBinaryToWriter
    );
  }
  f = message.getOrientation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.geometry_msgs.msg.Quaternion.serializeBinaryToWriter
    );
  }
};


/**
 * optional Point position = 1;
 * @return {?proto.geometry_msgs.msg.Point}
 */
proto.geometry_msgs.msg.Pose.prototype.getPosition = function() {
  return /** @type{?proto.geometry_msgs.msg.Point} */ (
    jspb.Message.getWrapperField(this, proto.geometry_msgs.msg.Point, 1));
};


/** @param {?proto.geometry_msgs.msg.Point|undefined} value */
proto.geometry_msgs.msg.Pose.prototype.setPosition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.geometry_msgs.msg.Pose.prototype.clearPosition = function() {
  this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.geometry_msgs.msg.Pose.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion orientation = 2;
 * @return {?proto.geometry_msgs.msg.Quaternion}
 */
proto.geometry_msgs.msg.Pose.prototype.getOrientation = function() {
  return /** @type{?proto.geometry_msgs.msg.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.geometry_msgs.msg.Quaternion, 2));
};


/** @param {?proto.geometry_msgs.msg.Quaternion|undefined} value */
proto.geometry_msgs.msg.Pose.prototype.setOrientation = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.geometry_msgs.msg.Pose.prototype.clearOrientation = function() {
  this.setOrientation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.geometry_msgs.msg.Pose.prototype.hasOrientation = function() {
  return jspb.Message.getField(this, 2) != null;
};


