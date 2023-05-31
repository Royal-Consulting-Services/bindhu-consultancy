

const express = require('express');
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs')
const swaggerJSDocs = yaml.load('./api.yaml')
const app = express();
const cors = require('cors')
const router = require('./routes/router')

app.use(cors());
app.use(express.json());
app.use('/', router, swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))
app.listen(4004, ( )=> {
    console.log('Server Up and Running now....')
})