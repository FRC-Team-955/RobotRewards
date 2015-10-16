/* global __dirname */
var express            = require("express"),        // Node webserver framework.
	r                  = require("rethinkdb"),      // Database connector.
	morgan             = require("morgan"),         // Request logger.
	bodyParser         = require("body-parser"),    // Convert requests to REST standards.
	DSServer           = require("deepstream.io"),  // Realtime server framework.
	DSStorageConnector = require("deepstream.io-storage-rethinkdb");

var app = express(),                   // Init webserver object
	server = new DSServer();           // Init realtime server object

var config = require( __dirname + "/config.js");     // Load configuration object

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.listen(config.exp.port);
console.log("Express is ready to go on port " + config.exp.port);

// RethinkDB configuration
// r.connect(config.rdb);


// Deepstream configuration
server.set("host", config.ds.host);
server.set("port", config.ds.port);

server.start();