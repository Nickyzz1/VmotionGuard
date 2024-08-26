const localizacao = require('../model/localizacao');

module.exports = {
    //exportado essa função
    async pagInicialGet(req, res){
        const locais = await localizacao.findAll({
        raw: true, // sem metadados
        attributes: ['IDLocalizacao', 'Nome'] //ele pega da tabela que read
        });
        res.render('../views/index', {locais}); //reenderiza essas informações na pag e manda alunos compo jnulo //get mm recebe nd no coirpo da requisção
    },

    async pagInicialPost(req, res){
       
        res.render('../views/index');
        },
}

