const database = require('../config/database')

async function queryCarrinho(email) {
  const client = await database()
  const res = await client.query('SELECT carrinho FROM tb_carrinho WHERE email = $1', [email])
  return res.rows
}

async function addItem(email, item) {
  const client = await database()
  const sql = `INSERT INTO tb_carrinho (PARAMS) VALUES ($1, $2, $3, $4, $5, $6, $7);`
  const values = [
    // email,
    // param,
    // param2,    
  ]
  return await client.query(sql, values)
}
module.exports = { queryCarrinho, addItem }