var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var config = require(__dirname + '/config');

var mongoose = require("mongoose");
mongoose.connect('mongodb://' + "localhost" + '/test');
 
//var myDB = mongoose.createConnection();

server.listen(config.http.port);

app.get("/",function (request, response) {
	// body...
	var user = mongoose.Schema({
    	name: String
	});

	user = mongoose.model('user', user);
	userObj = new user()
	userObj.name = "tilak";

	userObj.save(function(err,result){
		user.find({},function(err,res){
			response.send("Coming here " + res);
		});
	})
	

})