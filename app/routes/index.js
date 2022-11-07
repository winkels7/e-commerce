const express = require('express')

const routes = express.Router();

//controladores
const UsuarioCtrl = require('../controllers/UsuarioCtrl')
const CarrinhoCtrl = require('../controllers/CarrinhoCtrl')

routes.post('/login', UsuarioCtrl.login)
routes.post('/cadastro', UsuarioCtrl.registrar)
routes.post('/getperfilusuario/:id', UsuarioCtrl.perfil)
routes.post('/setperfilusuario/:id', UsuarioCtrl.atualizar)
routes.post('/getcarrinho', CarrinhoCtrl.getCarrinho)
routes.post('/setcarrinho', CarrinhoCtrl.setCarrinho)

module.exports = routes