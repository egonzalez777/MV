var mongoose = require('mongoose');
var UserModel = require('./schemas/users');

var devDB = 'mongodb://localhost:27017/hadokoa';
var prodDB = '';

var usedDB;
if (process.env.NODE_ENV === 'development') {
	usedDB = devDB;
	console.log('CONNECTING TO DEV ENV');
	try {
  	mongoose.connect(usedDB);	
  } catch(e) {
  	console.log('connect err', e);
  }
}

// If we're in production...
if (process.env.NODE_ENV === 'production') {
    // set our database to the development one
    usedDb = prodDB;
    // connect to it via mongoose
    try {
    	mongoose.connect(usedDb);	
    } catch(e) {
    	console.log('connect err', e);
    }
    
}
console.log(mongoose.connection.readyState);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
	console.log('Database Connection Successfully Opened at ' + usedDB);
});

exports.users = UserModel;