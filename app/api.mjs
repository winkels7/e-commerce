import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

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
                mensagem: 'Ola mundo'
        })
})

app.listen(3000)
