const Sequelize = require('sequelize');
const db = require('../db/connection');

const Evento = db.define('evento', {
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
    new_evento: {
        type: Sequelize.STRING,
    },

});

module.exports = Evento
