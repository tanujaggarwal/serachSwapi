var express = require('express');
var router = express.Router();
var loginRouter = require('./login/login.route');
var swagiRouter = require('./swagi/swagi.route');
var verifyToken = require('./login/verifyToken');


module.exports = function () {
	router.use('/login', loginRouter());
	router.use('/swagi', swagiRouter());		
	router.use('*', verifyToken);
  return router;
};
