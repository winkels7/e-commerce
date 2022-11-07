const Usuario = require('../models/Usuario')

const login = async (req, res) => {
  const usuario = req.body
  console.log(`Usuario recebido do body: ${usuario}`)
  const resposta = await Usuario.getUsuario(usuario.email)
  console.log(`Resposta: ${resposta}`)
  if (usuario.senha != resposta[0].senha){
    return res.send('Senha inválida')
  }
  if (!resposta){
    return res.send('Email não encontrado')
  }
  return res.json({resposta})
}

const registrar = async (req, res) => {
  const usuario = req.body
  console.log(usuario)
  const resposta = await Usuario.addUsuario(usuario)
  res.send('addUsuario OK')
}
module.exports = { login, registrar }