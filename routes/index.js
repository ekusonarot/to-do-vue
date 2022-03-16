var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { type: process.env.TYPE || "なし" });
});

module.exports = router;
