var express = require('express');
var stylus = require('stylus');

var http = require('http');
var path = require('path');

var env = process.env.NODE_ENV || 'development';

var app = express();

app.set('port', 3001);

function compile(str, path) {
	return stylus(str).set('filename', path);
}

/*app.configure(function () {
	app.set('views', __dirname + '/server/views');
	app.set('view engine', 'jade');
});*/

app.engine('jade', require('jade').__express);


app.get('*', function (req, res) {
	res.render('index');
});

app.listen(3001);
console.log("Server start at PORT 3001");