var express = require('express');
var router = express.Router();
var planetsApiService = require('../../services/swagi/planets/api');

module.exports = function () {

    router.get('/',
        function (req, res) {
            var queryString = req.query.q || "";
            planetsApiService.getData(queryString)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(error);
            });
        }
    );

    return router;
};