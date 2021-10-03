const mongoose  = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,

    },
    email :{
        type : String,
        required: true,
    },
    phone :{
        type : Number,
        required: true,
    },
    destination :{
        type : String,
        required: true,
    },
    qualification :{
        type: String,
        required :true,
    },
    address:{
        type : String,
        required: true,
    },
    percentage:{
        type : Number,
        required: true,
    }

})

const User = mongoose.model('USER', userSchema);
module.exports = User; 

