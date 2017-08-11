var express = require('express');
var router = express.Router();
var planets = require('./swagi.planets');

module.exports = function () {

    router.use('/planets',planets());
    return router;
};