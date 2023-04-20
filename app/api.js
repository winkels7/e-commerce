const express = require('express')
const cors = require('cors')

const router = require('./routes')
const { addUsuario, loginUsuario } = require('./models/Usuario')
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

app.post('/api/login', async (req, res) => {
  const { email, cpf, senha } = req.body
  try {
    const usuario = {
      email,
      cpf,
      senha
    }
    const result = await loginUsuario(usuario)
    const response = JSON.stringify({
      error: false,
      result,
    })
    res.send(response)
  } catch (error) {
    const response = JSON.stringify({
      error: true,
      message: error.message,
    })
    res.status(500).send(response)
  }
})

app.post('/api/cadastro', async (req, res) => {
  const { email, senha, nome, sexo, cpf, tel } = req.body
  try {
    const usuario = {
      email,
      senha,
      nome,
      sexo,
      cpf,
      tel,
    }
    const result = await addUsuario(usuario)
    const response = JSON.stringify({
      error: false,
      result,
    })
    res.send(response)
  } catch (error) {
    const response = JSON.stringify({
      error: true,
      message: error.message,
    })
    res.status(500).send(response)
  }
})

app.listen(3000)