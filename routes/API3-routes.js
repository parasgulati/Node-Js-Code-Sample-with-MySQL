var express = require('express');
var API3_controllers = require('../controllers/API3-controllers.js');
var router = express.Router();

router.post('/fetch', API3_controllers.fetch);

module.exports = router;