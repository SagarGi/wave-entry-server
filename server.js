const dotenv = require('dotenv')
const mongoose = require('mongoose')

const express = require('express');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
  });

dotenv.config({path:'./config.env'});

require('./Database/DatabaseConnection')
app.use(express.json());

app.use(require('./Route/auth'));
const port = process.env.PORT || 3001;




// console.log("Nodemon is working!!
app.listen(port, () => {
    console.log("Server is running at 3001!!")
})


