async function connect() {
  if (global.connection)
      return global.connection.connect();

  const { Pool } = require('pg')
  const pool = new Pool({
        connectionString: "postgres://sttwtuig:EMHTfQ4XXOIAkrM1f9pPMifuheoJ_26C@babar.db.elephantsql.com/sttwtuig"
        });
   const client = await pool.connect();
   console.log("Criou pool de conexões no PostgreSQL!");

   const res = await client.query('SELECT NOW()');
   console.log(res.rows[0]);
   client.release();

   //guardando para usar sempre o mesmo
   global.connection = pool;
   return pool.connect();
} module.exports = connect

async function getUsuario() {
  const client = await connect();
  const res = await client.query('SELECT * FROM usuarios');
  return res.rows;
} module.exports = { getUsuario }
