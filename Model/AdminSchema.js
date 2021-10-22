const mongoose  = require("mongoose");
const loginSchema = new mongoose.Schema({
    user_id :{
        type : String,
        required: true,
    },
    username:{
        type : String,
        required: true,

    },
    password :{
        type : String,
        required: true,
    }

})

const LoginUser = mongoose.model('LOGINCREDENTIAL', loginSchema);
module.exports = LoginUser; 