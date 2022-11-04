async function connect() {
  if (global.connection) return global.connection.connect()

  const { Pool } = require('pg')
  const pool = new Pool({
    connectionString:
      'postgres://sttwtuig:EMHTfQ4XXOIAkrM1f9pPMifuheoJ_26C@babar.db.elephantsql.com/sttwtuig',
  })
  const client = await pool.connect()
  console.log('Criou pool de conexões no PostgreSQL!')

  const res = await client.query('SELECT NOW()')
  console.log(res.rows[0])
  client.release()

  //guardando para usar sempre o mesmo
  global.connection = pool
  return pool.connect()
}
module.exports = connect

async function getUsuario() {
  const client = await connect()
  const res = await client.query('SELECT * FROM tb_user')
  return res.rows
}

async function addUsuario(usuario) {
  const client = await connect()
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