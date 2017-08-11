const jwt = require('jsonwebtoken');
var config = require('../../config/config');
var tokenConstants = require('./token.constants');

module.exports = function (req, res, next) {
	var token = jwt.sign({
		id: req.user.id,
		username: req.user.username,
		type: tokenConstants.TYPES.ACCESS_TOKEN
	}, config.SECRET, {expiresIn: config.ACCESS_TOKEN_EXPIRATIONTIME});

	var data = {
		token: token
	};

	req.data = data;
	next();
};
