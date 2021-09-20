const express = require('express');
const app = express();
const morgan = require('morgan');

//Middleware
app.use(express.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'product 1',
    }
    res.send(product)
})

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
