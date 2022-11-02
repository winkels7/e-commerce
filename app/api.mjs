import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/api/', (req, res) => {
        // abra no navegador o link http://localhost:3000/api
        const request = JSON.stringify({
                error: false,
                result: 'Olá mundo isso é um teste',
        })
        res.send(request)
})

app.get('/api/login', (req, res) => {
        // abra no navegador o link http://localhost:3000/api
        const request = JSON.stringify({
                error: false,
                result: 'Olá login',
        })
        res.send(request)
})

app.post('/register', (req, res) =>{
        res.send({
                mensagem: `Olá mundo! O seu E-mail é ${req.body.email}`
        })
})

app.listen(3000)
