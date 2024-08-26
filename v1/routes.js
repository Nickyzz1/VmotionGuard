// inicnaod router express
const express = require("express"); //para redirecionara s coisas back
const home = require('./src/controllers/home');

const route = express.Router(); //protocolo de roteamento

route.get('/', home.pagInicialGet); //Get manda informações na url
route.post("/", home.pagInicialPost);   //Post manda informações no corpo da requisição

// route.get('/editarSala/:id', editar.salas);
// route.post('/editarSala/:id', editar.adicionarSala);

module.exports = route;

// Recebendo arquivo do multer que criamos
// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"