// Chris Joakim, Microsoft, 2018/12/05

const express = require('express');
const router  = express.Router();
const build_timestamp_obj = require("../build_timestamp.json");

router.get('/ping', function(req, res) {
  var now = new Date();
  var body = {};
  body['text'] = 'test message ' + now.getTime();
  body['date'] = now;
  body['epoch'] = now.getTime();
  body['pid'] = req.app.locals.pid;
  body['ENV'] = req.app.locals.ENV;
  body['start_date'] = req.app.locals.start_date;
  body['start_epoch'] = req.app.locals.start_epoch;
  body['some_uuid'] = req.app.locals.some_uuid;
  console.log(body);
  res.json(body);
});

module.exports = router;
