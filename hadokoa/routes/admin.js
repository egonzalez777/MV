var express = require('express');
var app = require('../app');
var router = express.Router();

router.get('/bodypart', function (req, res, next) {
	console.log(req.params);
	res.render('admin/bodypart');
});

module.exports = router;