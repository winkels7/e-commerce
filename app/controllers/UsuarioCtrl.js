const Usuario = require('../models/Usuario')

exports.getUsuario = async (req, res) => {
    // const email = req.body.email
    const email = req.email
    console.log(email)
    const usuario = await Usuario.getUsuario(email)
    // res.send(usuario);
    console.log(usuario)
}

exports.addUsuario = (req, res) => {
    const usuario = req.body
    console.log(usuario)
    Usuario.addUsuario(usuario)
    res.send('addUsuario OK')
}