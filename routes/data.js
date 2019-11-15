 var express = require('express');
var router = express.Router();
const {
  User,
  Sensor
} = require('../models');
const db = require('../models');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/Seoul');

router.post('/node/uploadData/:id', function(req, res, next) {
  parseGps = null;
  if(req.body.gps != undefined){
    temp = req.body.gps.split(",");
    firstNum = temp[0].substring(0,2) * 1;
    secondNum = temp[0].substring(2) /60;
    parseGps = firstNum + secondNum + ",";
    firstNum = temp[1].substring(0,3) * 1;
    secondNum = temp[1].substring(3)/60;
    parseGps += firstNum + secondNum;
  }
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
          gps: parseGps,
          gas: req.body.gas,
          fine_dust: req.body.fine_dust,
          machine_type: req.body.machine_type,
          machine_num: req.body.machine_num,
          recorddate: moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'),
        })
        .then((result) => {
          console.log(result);
          console.log(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'));
        })
        .catch((err) => {
          res.send(err);
          console.log(err);
        })
      var io = req.app.get('io');
      io.of('/dbUpdate').to(result.id).emit('news',{text:'data updated',machine_type:req.body.machine_type,machine_num:req.body.machine_num});
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
  else{
    getSensorData = req.query.getSensorData * 1;
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
  else{
    if(req.query.machine_num != undefined){
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

router.get('/node/getRecentData/:id', function(req, res, next){
   db.sequelize.query('select * from sensor where (machine_type,machine_num, recorddate) in ( select machine_type,machine_num, max(recorddate) from sensor group by machine_type,machine_num)order by recorddate desc;')
   .then(data => {
     console.log(data);
     res.send(JSON.stringify(data));
   })
});

module.exports = router;
