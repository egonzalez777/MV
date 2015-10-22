'use strict';
var express = require('express');
var app = require('../app');
var router = express.Router();

router.get('/', function (req, res, next) {
	console.log(req);
	console.log(res);
	res.send('default');
	// respond 
});

router.get('/get/all', function (req, res, next) {
	try {
		app.hadokoa.collection('bodyparts').find().toArray(function (err, result) {
			if (err) throw err;
			res.send(JSON.stringify(result));
		});
	} catch(e) {
		console.log(e);
		res.send(JSON.stringify([]));
	}
});

router.post('/insert/bodypart', function(req, res, next) {
	var payload = {'test': 'Meh'};
	// Move this into a singleton library for db interation.
	app.hadokoa.collection('bodyparts').insert(payload, function(err, result) {
    if (err) throw err;
    if (result) console.log('Added!');
	});
  res.send('hi');
});

module.exports = router;