import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const router = require('./routes')
const app = express()

app.use(router)
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/api/', (req, res) => {
  // abra no navegador o link http://localhost:3000/api
  const request = JSON.stringify({
    error: false,
    result: 'Olá mundo isso é um teste',
  })
  res.send(request)
})

app.listen(3000)