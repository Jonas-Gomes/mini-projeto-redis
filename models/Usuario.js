
const Sequelize = require('sequelize');
const postgres = require('../databases/db_postgres');

const Usuarios = postgres.define('usuarios',{ 
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING
    } 
});

module.exports = Usuarios;