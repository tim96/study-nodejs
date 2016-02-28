// Import the Express module
var express = require('express');

// Import the 'path' module (packaged with Node.js)
var path = require('path');

// Set port value
var port = 8888;

// Create a new Express application
var app = express();

// Serve static html, js, css, and image files from the 'public' directory
// app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Create an http server with Node's HTTP module.
var server = require('http').createServer(app).listen(process.env.PORT || port);
console.log("Server has started on " + port + ' port');
