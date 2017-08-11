const config = {
    db: {
        url: 'ds131583.mlab.com:31583/swapi',
        dbOptions: {
            db: {
                native_parser: true
            },
            server: {
                poolsize: 10
            },
            user: 'swagi_user',
            pass: 'swagi_user'
        }
    },
    swagi: {
        planets: "https://swapi.co/api/planets/"
    },
    SECRET: 'SIMBUILDER_SECRET',
    ACCESS_TOKEN_EXPIRATIONTIME: 60 * 60 * 12     // SECONDS
};

module.exports = config;
