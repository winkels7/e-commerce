const Usuario = require('../models/Usuario')

const login = async (req, res) => {
  const usuario = req.body
  console.log(`Usuario recebido do body: ${usuario.email}`)
  console.log(`Senha recebida do body: ${usuario.senha}`)
  const resposta = await Usuario.getUsuario(usuario)
  //   console.log(`Senha Resposta: ${resposta[0].senha}`)
  if (resposta == '') {
    return res.send('Email não encontrado')
  }
  if (usuario.senha != resposta[0].senha) {
    return res.send('Senha inválida')
  }
  return res.json({ resposta })
}

const registrar = async (req, res) => {
  const usuario = req.body
  console.log(usuario)
  const resposta = await Usuario.addUsuario(usuario)
  return res.send(resposta)
}

const atualizar = async (req, res) => {
  //params pega os parametros da url
  const id = req.params.id
  const usuario = req.body
  console.log(`ID atualizar: ${id}`)
  const resposta = await Usuario.updatePerfilUsuario(id, usuario)
  return resposta
}

const perfil = async (req, res) => {
  const id = req.params.id
  console.log(`ID perfil: ${id}`)
  const resposta = await Usuario.getPerfilUsuario(id)
  return resposta.rows
}

module.exports = { login, registrar, atualizar, perfil }
