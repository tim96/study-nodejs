
// Set port value
var port = 8888;

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});