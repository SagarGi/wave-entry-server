const dotenv = require('dotenv')
const mongoose = require('mongoose')

const express = require('express');

const app = express();

dotenv.config({path:'./config.env'});

require('./Database/DatabaseConnection')
app.use(express.json());

app.use(require('./Route/auth'));

const port = process.env.PORT;




// console.log("Nodemon is working!!")
app.listen(port, () => {
    console.log("Server is running at 3000!!")
})


