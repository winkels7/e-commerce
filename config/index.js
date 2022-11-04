(async () => {
  const database = require("./database");
  console.log('Começou!');
  
  // console.log('INSERT INTO CLIENTES');
  // const result = await database.addUsuario({id: 6, email: 'teste', senha: 'senhateste', nome: 'Nunes', sexo: 18, cpf: '00011100023', tel: '5199438674'});
  // console.log(result.rowCount);

  console.log('SELECT * FROM CLIENTES');
  const usuario = await database.getUsuario();
  console.log(usuario);
})();