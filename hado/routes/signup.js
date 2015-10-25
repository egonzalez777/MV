var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../database/index');
var Users = db.users;

router.get('/', function (req, res, next) {
	res.send('Chaching...');
});

router.post('/', function (req, res, next) {

  // show the request body in the command line
  var payload = req.body;
  var time = moment().format('MMMM Do YYYY, h:mm:ss a');
  try {
  	Users.findOne({
    	'email': payload.email
    }, function (err, user) {
    	if (err) {
    		console.log('Couldn\'t create new user at ' + color.red(time) + ' by ' + color.red(payload.email) + ' because of: ' + err);
    		res.status(500).json({
    			'message': 'Internal error while creating a new user. Please contact your admin'
    		});
    	}

    	if (!user) {
    		console.log('Creating a new user at ' + color.green(time) + ' with the email: ' + color.green(payload.email));
    		var newUser = new Users({
    			firstname: payload.firstname,
    			lastname: payload.lastname,
    			email: payload.email,
    			password: payload.password
    		});

    		newUser.save(function (err, savedUser, numberAffected) {
    			if (err) {
    				console.log('Problem saving user ' + color.yellow(payload.email) + ' due to error: ' + err);

    				res.status(500).json({
    					'message': 'Database error trying to sign up.'
    				});
    			}

    			console.log('Successfully created new user: ' + color.green(payload.email));

    			res.status(201).json({
            'message': 'Successfully created new user',
            'client': _.omit(savedUser, 'password')
          });

          if (user) {
          	res.status(409).json({
              'message': payload.email + ' already exists!'
            });
          }
    		});
    	}
    });
  } catch(e) {
  	console.log(e);
  	res.send(e);
	}
});

module.exports = router;