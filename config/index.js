// const db = require("./database");

// async function inserirUsuario(usuario){
//     const client = await db();
//     const sql = 'INSERT INTO usuarios (email, senha, nome, cpf)'
//     const values = [usuario.email, usuario.senha, usuario.nome, usuario.cpf]
// }

;(async () => {
  const db = require('./database')
  console.log('Começou!')

  console.log('SELECT * FROM usuarios')
  const usuario = await db.getUsuario()
  console.log(usuario)
})()
