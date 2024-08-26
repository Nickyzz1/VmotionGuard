// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
// Criando a tabela Sala
const localizacao = database.define('Localizacoes', {
    IDLocalizacao: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true
    },
    Nome: {
    type: Sequelize.STRING(50),
    allowNull: true
    }
});
// Exportando essa tabela
module.exports = localizacao;