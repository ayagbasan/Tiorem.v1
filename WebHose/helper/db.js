const mongoose = require('mongoose');
const config = require('../config'); 

module.exports = () => {

    if (config.environment === "PROD")
        mongoose.connect('mongodb://webhose:aymk2018@ds127841.mlab.com:27841/webhose', { useMongoClient: true });

    else if (config.environment === "DEV")
        mongoose.connect('mongodb://localhost/tiorem', { useMongoClient: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');

       config.get();


    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
};