const mongoose = require('mongoose');

var schem= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})


const Userdb = mongoose.model('userdb',schem);

module.exports = Userdb;