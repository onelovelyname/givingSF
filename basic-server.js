var express = require('express');
var app = express();
var db = require('./db/config');
var partials = require('express-partials');


// setup routes (consisting of a path, callback function and HTTP method)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// express-partials enables use of layout.ejs file in combination with other partials
app.use(partials());

app.set('db', db);

app.get('/', function(request, response) {
	response.render('index');
});

var port = 3000;
console.log('givingSF is listening on port ', port);
// configure server to listen on a given port
app.listen(port);