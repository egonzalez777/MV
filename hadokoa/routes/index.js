var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add/bodypart', function (req, res) {
	res.send('Mooo');
});

module.exports = router;
