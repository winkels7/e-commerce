async function database() {
  if (global.connection) return global.connection.connect()

  const { Pool } = require('pg')
  const pool = new Pool({
    connectionString:
      'postgres://sttwtuig:EMHTfQ4XXOIAkrM1f9pPMifuheoJ_26C@babar.db.elephantsql.com/sttwtuig',
  })
  const client = await pool.connect()
  console.log('Conexão com ElephantSQL OK!')

  const res = await client.query('SELECT NOW()')
  console.log(res.rows[0])
  client.release()

  global.connection = pool
  return pool.connect()
}
module.exports = database
