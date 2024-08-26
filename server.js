const express = require('express');
const routes = require("./routes");

// 59099
//npm init -y
// npm install express mssql sequelize nodemon ejs
// start: nodemon server.js
const app = express();  

app.use(express.urlencoded({ extended: true }));

// static files todos os arquivos estáticos estão na pasta public, sempre que for acessar o caminho é esse

app.use(express.static('public'));

// ejs

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => { console.log('acesse: http://localhost:3000/'); });

// arquivos estáticos são aquelkes que nn mudam facilmente
