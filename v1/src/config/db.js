const sequelize = require('sequelize'); // é um ORM que bpermite que vc crite tableas que repesentem seu sql 

const database = new sequelize('vmotion', 'nicolle', '235711131719', {
    dialect: 'mssql', host: 'localhost', port: 59099
});
// dialect significa cqualk é o banco de dados, no caso, mssql é o sqls =ser ver
// hoist = server onde ele está sendo rodado
// mssql é um driver que permnite a conxão entre a apliucação e o node.js, ou seja, é um pacote;
 // função do sequileze, comparar modelos existentes no sql e o que vc ce stá criandoe  ajusta para que nn tenha conflito; ele verificxa se a tabela existe, senão cria elas, se sim atualiza elas apenas
database.sync(); // database é o receptor da ação
module.exports = database; // exporta a var database para quee la seja usada em outros arquivos