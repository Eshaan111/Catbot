const express = require('express')
const apiRouter = express.Router();

apiRouter.use(express.json());

apiRouter.get('/', (req, res) => {
    console.log('Api Route Get Request ')
    res.json({
        message: 'success',
        data: 'Hi'
    });
})

module.exports = apiRouter;
