import express from 'express'
import cors from 'cors'
import pgp from 'pg-promise'
import parse from 'pg-connection-string'
import bodyParser from 'body-parser'

const app = express()

try {
  var connectionString = 'postgres://sttwtuig@babar.db.elephantsql.com/sttwtuig'
  var config = parse(connectionString)
  config.password = 'EMHTfQ4XXOIAkrM1f9pPMifuheoJ_26C'
  var dbcon = pgp(config)
  app.set('dbCon', dbcon)
} catch (error) {
  console.log(`DB error: ${error} `)
}

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// sequelize.sync().then(() => {
//     console.log('conectado com o banco de dados.')
// })

app.get('/api/', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá mundo isso é um teste',
  })
  res.send(request)
})

const listaLogin = []

app.get('/api/login', (req, res) => {
  res.send(listaLogin)
})

app.post('/api/login', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  console.log(`Email: ${email} Senha: ${password}`)
  listaLogin.push(email)
  res.send('Login adicionado com sucesso!')
})

app.get('/api/cadastro', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/getcarrinho', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/setcarrinho', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/getperfilusuario', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/setperfilusuario', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/getpagamento', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/finalizarcompra', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/getpedidos', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/recuperarsenha', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.get('/api/trocarsenha', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá login',
  })
  res.send(request)
})

app.post('/register', (req, res) => {
  res.send({
    mensagem: `Olá mundo! O seu E-mail é ${req.body.email}`,
  })
})

app.listen(3000)
