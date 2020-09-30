import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.12' //ip locale sur réseau privé / local ip on my network

app.get('/', (req, res) => {
    res.send('**Exercices express partie 1**')
})
