const express = require('express');

const ControllerUsuario = require('./controllers/ControllerUsuario');
const ControllerProduto = require('./controllers/ControllerProduto');
const ControllerCarrinho = require('./controllers/ControllerCarrinho');

const routes = express.Router();

routes.post('/usuarios', ControllerUsuario.create);
routes.get('/usuarios', ControllerUsuario.getUsuarios);

routes.post('/produtos',ControllerProduto.create);
routes.get('/produtos',ControllerProduto.getProdutos);

routes.post('/carrinho/:usuario', ControllerCarrinho.newCarrinho);
routes.get('/carrinho/:usuario', ControllerCarrinho.getCarrinho);

module.exports = routes;