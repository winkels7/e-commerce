const Carrinho = require('../models/Carrinho')

const getCarrinho  = async (req, res) => {
  const usuario = req.body
  console.log(`Carrinho recebido do body: ${usuario}`)

  const resposta = await Carrinho.getCarrinho(usuario.email)
  console.log(`Resposta: ${resposta}`)
  if (usuario.senha != resposta[0].senha) {
    return res.send('Senha inválida')
  }
  if (!resposta) {
    return res.send('Email não encontrado')
  }
  return res.json({ resposta })
}

const setCarrinho = async (req, res) => {
  const usuario = req.body
  console.log(usuario)
  Carrinho.addItem(usuario)
  res.send('addUsuario OK')
}
module.exports = { getCarrinho, setCarrinho }
