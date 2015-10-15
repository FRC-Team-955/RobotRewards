var express            = require("express"),        // Node webserver framework.
	r                  = require("rethinkdb"),      // Database connector.
	morgan             = require("morgan"),         // Request logger.
	bodyParser         = require("body-parser"),    // Convert requests to REST standards.
	DSServer           = require("deepstream.io"),  // Realtime server framework.
	DSStorageConnector = require("deepstream.io-storage-rethinkdb");

var app = express(),                   // Init webserver object
	server = new DSServer();           // Init realtime server object

var config = require("config.js");     // Load configuration object