//no terminal: 'node testeDB.js'
;(async () => {
  const UsuarioCtrl = require('../controllers/UsuarioCtrl')
  console.log('Começou!')
  const email_usuario = {email: 'teste@teste.com'}
  console.log('SELECT * FROM usuarios')
  const usuario = await UsuarioCtrl.getUsuario(email_usuario)
  console.log(usuario)
})()
