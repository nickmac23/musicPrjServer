var express = require('express');
  var router = express.Router();
  var data = []

/* GET home page. */
router.post('/', function(req, res, next) {
  data = req.body
  if(data.length === 0 ) res.json('ServerDown!')
  res.json(data)
});
router.get('/', function(req, res, next) {
  res.json(data)
});

module.exports = router;
