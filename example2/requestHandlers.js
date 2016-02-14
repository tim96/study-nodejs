var exec = require("child_process").exec;
var os = require('os');

function start(response) {
  console.log("Request handler 'start' was called.");

    if (isLinux()) {
        exec("find /",
            {timeout: 10000, maxBuffer: 20000 * 1024},
            function (error, stdout, stderr) {
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write(stdout);
                response.end();
            });
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Start");
        response.end();
    }
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

function isWin()
{
    // or using 'os' module
    var isWin = /^win/.test(process.platform);
    return isWin;
}

function isLinux()
{
    var type = os.platform();
    return type == 'linux';
}

exports.start = start;
exports.upload = upload;