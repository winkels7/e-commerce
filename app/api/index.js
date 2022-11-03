const express = require('express')
const router = express.Router()

router.get('/', (req, res) = {
    res.send('App online')
})

router.use('/cadastro', cadastro)

module.exports = router