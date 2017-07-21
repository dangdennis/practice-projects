var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(client){
	client.on('event', function(data) {

	})
	client.on('disconnect', function(){

	})
})
server.listen(3000, function(){
	console.log('server listening on 3000');
});