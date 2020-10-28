const Usuario = require('../models/Usuario');

module.exports = {
    async create(request, response){
        const {id,nome} = request.body;

        await Usuario.create({
            id,
            nome
        });

        return response.json({nome}); 
    },

    async getUsuarios(request, response){
        await Usuario.findAll().then((usuarios => {
            return response.json(usuarios);
        }));
    }
}
