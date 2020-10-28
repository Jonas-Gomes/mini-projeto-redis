
const redis = require('../databases/db_redis');

module.exports = {
    async newCarrinho(request, response){
        const usuario = request.params.usuarios;
        const {id,nome} = request.body;
        const object = {
           id,
           nome
        }

        //set redis
        redis.setex(usuario,3600, JSON.stringify(object), (err,res) => {
            if(err) throw err;
            console.log(res);

            return response.json(res);
        });
    },

    async getCarrinho(request,response){
        const user = request.params.user;

        //get redis
        redis.get(user,(err,res) => {
            if(res != null){
                const carrinho = JSON.parse(res.toString());
                return response.json(carrinho)
            }else{
                return response.send(err);
            }
        });
    }
}