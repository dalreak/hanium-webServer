var express = require('express');
var router = express.Router();
var { isLoggedIn,isNotLoggedIn } =require('./checkAuth');

/* GET users listing. */
router.get('/', isLoggedIn , function(req, res, next) {
  res.render('dashboard', { title: 'FreshO2' , user:req.user});
});

router.get('/stationary',isLoggedIn , function(req, res, next) {
  res.render('dashboard', { title: 'FreshO2' , user:req.user});
});

router.get('/removable',isLoggedIn , function(req, res, next) {
  res.render('dashboard', { title: 'FreshO2' , user:req.user});
});
module.exports = router;
