var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('passport');
require('dotenv').config();

var options = {
  key: fs.readFileSync('cert/domain.key'),
  cert: fs.readFileSync('cert/fullchain.pem')
};

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

var port = 3000;
var port2 = 4000;

var indexRouter = require('./routes/index');
//var dashboardRouter = require('./routes/dashboard');
var { sequelize } = require('./models');
var passportConfig = require('./passport');
var authRouter = require('./routes/auth');
var dataRouter = require('./routes/data');

var app = express();
sequelize.sync();
passportConfig(passport);

var server2 = http.createServer(app);
server2.listen(port2,() =>{
  console.log(port2 + '포트에서 대기중입니다')
});
var server = https.createServer(options, app);
server.listen(port,() =>{
  console.log(port + '포트에서 대기중입니다')
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieParser('secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret code',
  cookie: {
    httpOnly: true,
    secure: true,
  },
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth',authRouter);
app.use('/data',dataRouter);
//app.use('/dashboard',dashboardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
