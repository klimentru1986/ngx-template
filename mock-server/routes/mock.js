var express = require('express');
var router = express.Router();

var users = require('../mock-data/users').users;

/* GET mock data. */
router.get('/', function(req, res, next) {
  res.send('mock data');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.json(users);
});

module.exports = router;
