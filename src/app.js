import express from 'express'

const app = express()

const PORT = 7777

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '127.0.0.1' //ip locale sur réseau privé / local ip on my network

//##1
app.get('/', (req, res) => {
    res.send(
        `<h1 style="text-align:center">**Exercices express partie 1**</h1>`
    )
})

//##2
app.get('/aboutme', (req, res) => {
    res.send(
        `<h2 style="color:green">A propos de moi : Guillaume, junior dev en formation </h2>`
    )
})

//##3
app.get('/aboutyou', (req, res) => {
    let ip = req.ip
    let agent = req.headers['user-agent']
    res.send(
        `<h2 style="color:blue">A propos de vous : </h2>
    <p style="text-align:center">Votre adresse ip :  
            ${ip}</p>
    <p style="text-align:center">Votre navigateur (user-agent) : ${agent}</p>`
    )
})

//##4
app.get('/vote/age', (req, res) => {
    let age = req.params.age

    if (isNaN(age) || age < 0 || age > 120) {
        res.send(`Merci d'entrez un âge valide.`)
    } else if (age < 18) {
        res.send(`Désolé, vous ne pouvez pas encore voter.`)
    } else res.send(`Merci, vous pouvez voter`)
})

// start the server

app.listen(PORT, IP_LOCAL, () => {
    console.log(`First Express App listening at http://${IP_LOCAL}:${PORT}`)
})
