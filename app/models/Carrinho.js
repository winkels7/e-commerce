const database = require('../config/database')

async function buscaCarrinho(usuario) {
  const client = await database()
  const sql = `SELECT produto_id, quant FROM tb_carrinho WHERE email = $1;`
  // console.log(`Email recebido por buscaCarrinho: ${usuario.email}`)
  const values = [usuario.email]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta.rows
}

async function addItem(usuario, item) {
  const client = await database()
  const sql = `INSERT INTO tb_carrinho (email, produto_id, quant) VALUES ($1, $2, $3);`
  const values = [
    usuario.email,
    item.produto_id,
    item.quant,
  ]
  const resposta = await client.query(sql, values)
  client.release()
  return resposta
}
module.exports = { buscaCarrinho, addItem }