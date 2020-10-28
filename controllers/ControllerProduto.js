const { sync } = require('../databases/db_redis');
const Produtos = require('../models/Produto');

module.exports = {
    async create(request, response){
        const {id,descricao,preco} = request.body;

        await Products.create({
            id,
            descricao,
            preco
        });

        return response.json({descricao});
    },

    async getProdutos(request,response){
            await Produtos.findAll().then(produtos => {
            return response.json(produtos);
        })
    }
}