/* global __dirname */
var express            = require("express"),               // Node webserver framework.
	morgan             = require("morgan"),                // Request logger.
	DSServer           = require("deepstream.io"),         // Realtime server framework.
	DSStorageConnector = require("deepstream.io-storage-rethinkdb"); // Database connector.

var app = express(),                   // Init webserver object.
	server = new DSServer();           // Init realtime server object.

var config = require( __dirname + "/config.js");           // Load config object.

// Express configuration;
app.listen(config.exp.port);           // Launch web server.
console.log("Express is ready to go on port " + config.exp.port);    // Notify user.

// Deepstream configuration
server.set("host", config.ds.host);    // Set hostname.
server.set("port", config.ds.port);    // Set port.
server.set("storage", new DSStorageConnector(config.rdb));           // Configure database connector.

server.start();    // Launch deepstream