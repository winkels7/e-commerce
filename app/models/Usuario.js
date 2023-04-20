const { data } = require('../../src/libs/uikit/js/uikit')
const database = require('../config/database')
const validate = require('gerador-validador-cpf')
const bcrypt = require('bcrypt')

async function getUsuario(usuario) {
  const client = await database()
  const resposta = await client.query(
    'SELECT usuario_id, senha FROM tb_user WHERE email = $1',
    [usuario.email]
  )
  client.release()
  console.log(resposta.rows)
  return resposta.rows
}

async function loginUsuario(usuario) {
  try {
    const client = await database()
    const sql = `SELECT senha FROM tb_user WHERE cpf = $1 OR email = $2;`
    const values = [usuario.cpf, usuario.email]
    const resposta = await client.query(sql, values)
    client.release()

    // bcrypt.compare(usuario.senha, resposta.senha, function(err, result) {
    //   // result == true
    // });

    return resposta
  } catch (error) {
    return `Erro: ${error}`
  }
}

async function addUsuario(usuario) {
  try {
    const client = await database()
    // Fazer o bcrypt da senha antes de adicionar na database
    usuario.senha = bcrypt.hash(usuario.senha, 3)

    const sql = `INSERT INTO tb_user (email, senha, nome, sexo, cpf, tel) VALUES ($1, $2, $3, $4, $5, $6);`
    const values = [
      usuario.email,
      usuario.senha,
      usuario.nome,
      usuario.sexo,
      usuario.cpf,
      usuario.tel,
    ]
    const resposta = await client.query(sql, values)
    client.release()
    return resposta
  } catch (error) {
    return `Erro: ${error}`
  }
}

async function getPerfilUsuario(id) {
  const client = await database()
  const sql = `SELECT * FROM tb_user WHERE usuario_id = $1`
  const values = [id]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta.rows
}

async function updatePerfilUsuario(id, usuario) {
  const client = await database()
  const sql = `UPDATE tb_user SET nome = $1, sexo = $2, cpf = $3, tel = $4 WHERE usuario_id = $5;`
  const values = [usuario.nome, usuario.sexo, usuario.cpf, usuario.tel, id]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta
}
module.exports = {
  getUsuario,
  addUsuario,
  loginUsuario,
  getPerfilUsuario,
  updatePerfilUsuario,
}
