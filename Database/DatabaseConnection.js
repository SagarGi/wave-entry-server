const mongoose = require('mongoose')

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
} ).then(() =>{
    console.log("Database connection successfull !!!");
}).catch((err) => console.log(err))