var express = require('express');
var API2_controllers = require('../controllers/API2-controllers.js');
var router = express.Router();

router.post('/create', API2_controllers.createUser);
router.post('/login', API2_controllers.login);

module.exports = router;