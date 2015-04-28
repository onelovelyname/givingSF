var express = require('express');
var db = require('./db/config');
var app = express();

// setup routes (consisting of a path, callback function and HTTP method)
app.get('/', function(request, response) {
	response.send('Good work, Melanie! Making progress.');
});

app.set('db', db);

var port = 8080;
console.log('givingSF is listening on port ', port);
// configure server to listen on a given port
app.listen(port);