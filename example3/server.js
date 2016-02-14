var http = require("http");
var url = require("url");
var port = 8888;

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    var queryParams = url.parse(request.url).query;
    console.log("Request for " + pathname + " received. Query params: " + queryParams);

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk (" + postDataChunk.length + ")'"+
          postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started on " + port + ' port');
}

exports.start = start;