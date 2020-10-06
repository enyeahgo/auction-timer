var express = require('express');
const moment = require('moment');
const Timer = require('timer.js');
const _ = require('lodash');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/timer', function(req, res, next) {
  res.render('timer', {
    serverTime : getServerTime(),
    endTime: "Oct 6, 2020 23:15:00"
  })
});

function getServerTime() {
  return moment().format('MMM DD, YYYY HH:mm:ss');
}

module.exports = router;
