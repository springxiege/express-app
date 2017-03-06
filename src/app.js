var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var nunjucks = require('nunjucks');

var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
// var routers = require('./routes/routers.config.js');
var app = express();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:3000/testApp');
// let db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error;'));
// db.once('open', () => {
//     console.log('mongodb connected successful')
// })
// view engine setup
// app.set('views', path.join(__dirname, '/views/jade'));
// app.set('views', path.join(__dirname, '/views/nunjucks'));
// app.set('view engine', 'nunjucks');
nunjucks.configure('views/nunjucks', {
    autoescape: true,
    express: app,
    watch: true
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', [index,register]);
app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;