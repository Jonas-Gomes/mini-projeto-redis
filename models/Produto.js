const Sequelize = require('sequelize');
const postgres = require('../databases/db_postgres');

const Produtos = postgres.define('produtos',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING
    },
    preco:{
        type: Sequelize.DOUBLE
    }
});

module.exports = Produtos;