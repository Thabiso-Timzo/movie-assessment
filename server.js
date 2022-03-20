const express = require('express');
const path = require("path");
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")

require('./config/db')() ;
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/api/users', require('./routes/users'));

app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});