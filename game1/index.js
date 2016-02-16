// Import the Express module
var express = require('express');

// Import the 'path' module (packaged with Node.js)
var path = require('path');

// Set port value
var port = 8888;

// Create a new Express application
var app = express();

// Import the Anagrammatix game file.
var words = require('./wordsgame');

// Serve static html, js, css, and image files from the 'public' directory
// app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Create an http server with Node's HTTP module.
var server = require('http').createServer(app).listen(port);
console.log("Server has started on " + port + ' port');

// Instantiate Socket.IO hand have it listen on the Express/HTTP server
var io = require('socket.io').listen(server);