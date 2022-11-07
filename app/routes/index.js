import express from 'express'

const routes = express.Router();

//controladores
const UsuarioCtrl = require('../controllers/UsuarioCtrl')
const CarrinhoCtrl = require('../controllers/CarrinhoCtrl')

routes.post('/login', UsuarioCtrl.login)
routes.post('/cadastro', UsuarioCtrl.registrar)
routers.post('/getcarrinho', CarrinhoCtrl.getCarrinho)
routers.post('./setcarrinho', CarrinhoCtrl.setCarrinho)

module.exports = router