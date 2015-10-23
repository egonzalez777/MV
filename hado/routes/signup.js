var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('Chaching...');
});

router.post('/', function (req, res) {

    // show the request body in the command line
    console.log(req.body);

    // return a json response to angular
    res.json({
    	'status': 200,
        'msg': 'success!'
    });
});

module.exports = router;