
// Set port value
var port = 8888;

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function(){
    console.log('listening on *:' + port);
});