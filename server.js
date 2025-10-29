const path = require('path')
const express = require('express');
const app = express();
const apiRout = require('./routes/api.js');
const { searchLimit } = require('./config/config.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public/'));
app.use('/api', apiRout)

app.get('/', (req, res) => {
    console.log('get landing request , serving index.html')
    res.sendFile(path.join(__dirname, "public", 'index.html'))
})



app.listen(PORT);
console.log('app listening on port ', PORT);


