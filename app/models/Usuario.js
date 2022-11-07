const database = require('../config/database')

async function getUsuario(email) {
  const client = await database()
  const res = await client.query('SELECT nome FROM tb_user WHERE email = $1', [email])
  return res.rows
}

async function addUsuario(usuario) {
  const client = await database()
  const sql = `INSERT INTO tb_user (id, email, senha, nome, sexo, cpf, tel) VALUES ($1, $2, $3, $4, $5, $6, $7);`
  const values = [
    usuario.id,
    usuario.email,
    usuario.senha,
    usuario.nome,
    usuario.sexo,
    usuario.cpf,
    usuario.tel,
  ]
  return await client.query(sql, values)
}
module.exports = { getUsuario, addUsuario }