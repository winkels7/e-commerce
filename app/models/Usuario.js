const database = require('../config/database')

async function getUsuario(usuario) {
  const client = await database()
  const resposta = await client.query('SELECT usuario_id, senha FROM tb_user WHERE email = $1', [
    usuario.email,
  ])
  client.release()
  console.log(resposta.rows)
  return resposta.rows
}

async function addUsuario(usuario) {
  const client = await database()
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
  return resposta.send("Usuário adicionado com sucesso")
}

async function getPerfilUsuario(id){
  const client = await database()
  const sql = `SELECT * FROM tb_user WHERE usuario_id = $1`
  const values = [ id ]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta.send("Perfil carregado com sucesso.")
}

async function updatePerfilUsuario(id, usuario){
  const client = await database()
  const sql = `UPDATE tb_user SET nome = $1, sexo = $2, cpf = $3, tel = $4 WHERE usuario_id = $5;`
  const values = [ usuario.nome, usuario.sexo, usuario.cpf, usuario.tel, id]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta.send("Usuário atualizado com sucesso.")
}
module.exports = { getUsuario, addUsuario, getPerfilUsuario, updatePerfilUsuario }
