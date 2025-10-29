const express = require('express')
const apiRouter = express.Router();
const config = require('../config/config');
const api_key = config.apiKey;

apiRouter.use(express.json());

console.log('API KEY FROM API.js', api_key);

apiRouter.get('/', (req, res) => {
    console.log('Api Route Get Request ')
    query = req.query  // RETURNS JS OBJECT 
    console.log(`queries = `,query)
    res.json({
        message: 'success',
        data: query,
    });
    // res.status(404).send('not-found');
})

module.exports = apiRouter;
