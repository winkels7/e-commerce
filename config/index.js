const db = require("./database");

async function inserirUsuario(usuario){
    const client = await db();
    const sql = 'INSERT INTO usuarios (email, senha, nome, cpf)'
    const values = [usuario.email, usuario.senha, usuario.nome, usuario.cpf]
}