const express = require('express')
const app = require('express')();
require('dotenv').config();
const router = require('./src/routes/userRoutes')

app.use(express.json())
app.use('/api/users', router)

app.get('/', (req, res) => {
    res.send('Ola, eu sou o trabalho do roger')
})

app.listen(3000, () => {
    console.log(`Running at 3000`)
})

