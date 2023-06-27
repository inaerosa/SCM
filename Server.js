const express = require('express')
const app = require('express')();
require('dotenv').config();
const router = require('./src/routes/userRoutes')

app.use(express.json())
app.use('/api/users', router)

app.listen(3000, () => {
    console.log(`Running at 3000`)
})

