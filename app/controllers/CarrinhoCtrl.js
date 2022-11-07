const Usuario = require('../models/Carrinho')

exports.getCarrinho = async (req, res) => {
    // const email = req.body.email
    const email = req.email
    console.log(email)
    const carrinho = await Carrinho.getCarrinho(email)
    // res.send(usuario);
    console.log(carrinho)
}

exports.addItem = (req, res) => {
    const email = req.body
    const item = req.body
    console.log(item)
    Carrinho.addItem(item)
    res.send('addItem OK')
}