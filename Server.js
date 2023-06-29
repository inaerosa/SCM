const express = require('express')
const app = require('express')();
require('dotenv').config();
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
const router = require('./src/routes/userRoutes')
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", 'GET,PATCH,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use('/api/users', router)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.listen(3000, () => {
    console.log(`Running at 3000`)
})

