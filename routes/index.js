var express = require('express');
var router = express.Router();
var { isLoggedIn,isNotLoggedIn } =require('./checkAuth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreshO2',user:null });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'FreshO2',user:null });
});

router.get('/login', isNotLoggedIn ,function(req, res, next) {
  res.render('login', { title: 'FreshO2' ,user:null});
});

router.get('/join', isNotLoggedIn ,function(req, res, next) {
  res.render('join', { title: 'FreshO2' ,user:null});
});

router.get('/dashboard', isLoggedIn , function(req, res, next) {
  res.render('dashboard', { title: 'FreshO2' , user:req.user});
});

module.exports = router;
