const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('User',UsersSchema);
module.exports = User;