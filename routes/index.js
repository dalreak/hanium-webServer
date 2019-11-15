var express = require('express');
var router = express.Router();
var { isLoggedIn,isNotLoggedIn } =require('./checkAuth');
var cors = require('cors');

var corsOptions = {
  orogin: 'http://map.vworld.kr',
  optionSuccessStatus:200,
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreshO2',user:null,page:0 });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'FreshO2',user:null,page:1 });
});

router.get('/login', isNotLoggedIn ,function(req, res, next) {
  res.render('login', { title: 'FreshO2' ,user:null});
});

router.get('/join', isNotLoggedIn ,function(req, res, next) {
  res.render('join', { title: 'FreshO2' ,user:null,page:2});
});

router.get('/dashboard',cors(corsOptions) ,isLoggedIn , function(req, res, next) {
  res.render('dashboard', { title: 'FreshO2' , user:req.user,page:3});
});

module.exports = router;
