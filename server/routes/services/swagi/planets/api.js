var request = require('request');
var config = require('../../../../config/config');
var planetsModel = require('../../../../models/swagi/planets.model');
var populateModel = require('./populate.model');

class PlanetsApiService{
    constructor() { }
    getData(query) {
        return new Promise((resolve, reject) => {
            request(`${config.swagi.people}?serach=${query}`, function (error, response, body) {
                if (err) {
                    reject(err);
                }
                else{
                    body = JSON.parse(body);
                    var planetsArr = body.results;
                    var resBody = [];
                    for(var i=0; i<planetsArr.length; i++){
                        var model = new planetsModel();
                        populateModel(model, planetsArr[i]);
                        resBody.push(model);
                    }
                    resolve(resBody);
                }
            });
        });
    }
}

module.exports = PlanetsApiService;
