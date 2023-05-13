
const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
const { Schema } = mongoose;
// login registration schema 
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },


  });
  
   const User=  mongoose.model('user', UserSchema);
   module.exports=User;
 

   
   
