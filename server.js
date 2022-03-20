const express = require('express');
//require('./config/db').();
require('dotenv').config();

const port = process.env.PORT || 5000;


const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});