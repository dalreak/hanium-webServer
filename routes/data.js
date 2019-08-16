var express = require('express');
var router = express.Router();
const {
  User,
  Sensor
} = require('../models');

router.post('/node/uploadData/:id', function(req, res, next) {
  User.findOne({
      where: {
        email: req.params.id
      }
    })
    .then(async (result) => {
      await Sensor.create({
          deviceid: result.id,
          temperature: req.body.temperature,
          humidity: req.body.humidity,
          gas: req.body.gas,
          fine_dust: req.body.fine_dust,
          machine_type: req.body.machine_type,
          machine_num: req.body.machine_num,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          res.send(err);
          console.log(err);
        })
      res.send("insert Data Complete");
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    })
});

router.get('/node/getData/:id', function(req, res, next) {
  var getSensorData = req.query.getSensorData;
  var setWhere = {};
  if(req.query.getSensorData == undefined){
    getSensorData = 30;
  }
  if (req.query.machine_type != undefined){
    if(req.query.machine_num == undefined){
      setWhere.machine_type = req.query.machine_type;
    }
    else{
      setWhere.machine_type = req.query.machine_type;
      setWhere.machine_num = req.query.machine_num;
    }
  }
    Sensor.findAll({
        include: {
          model: User,
          where: {
            email: req.params.id
          }
        },
        where: setWhere,
        order: [['id','DESC']],
        limit: getSensorData,
      })
      .then((result) => {
res.send(JSON.stringify(result));
      })
      .catch((err) => {
console.log(err);
      })

});

/*
router.get('/login', isNotLoggedIn, function(req, res, next) {
  res.render('login', {
    title: 'FreshO2',
    user: req.user
  });
});

router.get('/join', isNotLoggedIn, function(req, res, next) {
  res.render('join', {
    title: 'FreshO2',
    user: req.user
  });
});
*/

module.exports = router;
