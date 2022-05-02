const Sequelize = require('sequelize');
const db = require('../db/connection');

const Catalogo = db.define('catalogo', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    value: {
        type: Sequelize.INTEGER,
    },
    site: {
        type: Sequelize.STRING,
    },
    date: {
        type: Sequelize.INTEGER,
    },
    new_event: {
        type: Sequelize.STRING,
    },

});

module.exports = Catalogo
