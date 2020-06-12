const Sequelize = require('sequelize');

// Definindo dados para conexão
const sequelize = new Sequelize('reminder', 'root', 'L@ncentral1', {
    host: 'localhost',
    dialect: 'mysql'
});