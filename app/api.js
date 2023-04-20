const express = require('express')
const cors = require('cors')

const router = require('./routes')
const { addUsuario } = require('./models/Usuario')
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.get('/api/', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá mundo isso é um teste',
  })
  res.send(request)
})

app.post('/api/', async (req, res) => {
  const { name, email, password, }
  req.post(addUsuario)
})

app.listen(3000)