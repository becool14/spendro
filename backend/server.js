const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('SPENDRO BACKEND API');
  });

// Старт сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
