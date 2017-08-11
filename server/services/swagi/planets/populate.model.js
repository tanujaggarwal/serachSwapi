class PopulateModel {
    constructor() {}
    populateModel(modelRef, planetData){
        modelRef.setName(planetData.name);
        modelRef.setPopulation(planetData.population);
    }
}

module.exports = new PopulateModel()