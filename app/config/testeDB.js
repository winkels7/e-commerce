//no terminal: 'node testeDB.js'
;(async () => {
  const modelUsuario = require('../models/Usuario')
  console.log('Começou!')

  console.log('SELECT * FROM usuarios')
  const usuario = await modelUsuario.getUsuario()
  console.log(usuario)
})()
