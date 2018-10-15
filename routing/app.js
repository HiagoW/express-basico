var express = require('express');
var app = express();
var route = require('./routes.js');

app.listen(3000,function(){
	console.log("Go!");
	app.use('/',route);
});