const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    username : {
        type : String,
        unique : true,
        required : true
    },

    mobile : {
        type : Number,
        minlength : 10,
        required : true
    },
    
    email : {
        type: String,
        required : true,
        minlength : 5,
        unique : true
    },
    password : {
        type : String,
        required: true,
        minlength : 8
    }
})

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;