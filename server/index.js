const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv/config');

const MongoDBConnect = require('./config/db');
const userRoutes = require('./routes/users/users')

const app = express();
const port = process.env.PORT || 8000;
MongoDBConnect();

app.use(cors());
app.options('*', cors());
app.use(morgan('tiny'));

//to not get any deprecation warning or error
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//use this to show the image you have in node js
app.use('/uploads', express.static('uploads'));

app.use('/api/users', userRoutes);

app.listen(port, () => {
 console.log(`Server is up and running on port: ${port}`);
})