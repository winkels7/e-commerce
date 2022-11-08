const Carrinho = require('../models/Carrinho')

const getCarrinho = async (req, res) => {
  const usuario = req.body
  console.log(`Usuario recebido do body: ${usuario.email}`)

  const resposta = await Carrinho.buscaCarrinho(usuario)
  console.log(`Resposta: ${resposta}`)

  return res.send(resposta)
}

const setCarrinho = async (req, res) => {
  const carrinho = req.body.carrinho
  const usuario = req.body.usuario

  console.log(usuario)
  console.log(carrinho)

  carrinho.forEach(async (item) => {
    await Carrinho.addItem(usuario, item)
  })

  return res.send('setCarrinho OK!')
}
module.exports = { getCarrinho, setCarrinho }
