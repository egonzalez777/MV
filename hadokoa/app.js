var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('mongoskin');

var routes = require('./routes/index');
var users = require('./routes/users');
var rest = require('./routes/rest');
var admin = require('./routes/admin');

var app = express();

var fs, configurationFile;

configurationFile = 'local.cfg';
fs = require('fs');

var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*app.use(express.static(path.join(__dirname, 'public'))); // Removed because we are running 
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'modules')));*/

/*app.use('/', routes); // Removed yoeman...
app.use('/admin', admin);
app.use('/users', users);
app.use('/api/v1', rest);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../hadokoa_client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../hadokoa_client/.tmp')));
    app.use(express.static(path.join(__dirname, '../hadokoa_client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.hadokoa = db.db(configuration.db);



module.exports = app;
