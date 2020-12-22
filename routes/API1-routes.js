var express = require('express');
var API1_controllers = require('../controllers/API1-controllers.js');
var router = express.Router();

router.post('/fetch', API1_controllers.Fetch);

module.exports = router;