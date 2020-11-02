const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json([
        {
            name: 'spot'
        },
        {
            name: 'rover'
        }
    ]);
});

app.get('/drinks', (req, res) => {
    const drinks = [
        {
            name: 'apple juice'
        },
        {
            name: 'beer'
        },
        {
            name: 'sprite'
        }
    ];

    res.json(drinks);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
