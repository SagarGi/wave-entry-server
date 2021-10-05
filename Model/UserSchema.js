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
        type : String,
        required: true,
    }
    ,
    ielts:{
        type : String,
        required: true,
    }
    ,
    reading:{
        type : String,
        required: true,
    }
    ,
    writing:{
        type : String,
        required: true,
    }
    ,
    listening:{
        type : String,
        required: true,
    }
    ,
    speaking:{
        type : String,
        required: true,
    }
    ,
    overallband:{
        type : String,
        required: true,
    }

})

const User = mongoose.model('USER', userSchema);
module.exports = User; 

