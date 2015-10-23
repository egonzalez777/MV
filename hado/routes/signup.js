var express = require('express');
var router = express.Router();

/*router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.header('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
    next();
});*/

router.get('/', function (req, res, next) {
	res.send('Chaching...');
});

router.post('/', function (req, res, next) {

    // show the request body in the command line
    console.log(req.body);
    console.log(req.params);

    // return a json response to angular
    res.json({
    	'status': 200,
        'msg': 'success!'
    });
});

module.exports = router;