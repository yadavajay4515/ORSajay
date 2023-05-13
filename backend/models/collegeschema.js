
const mongoose = require('mongoose');
const { Schema } = mongoose;
// login registration schema 



const collegedata = new Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
  },  
    name:{
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        required: true,
      
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
      },

  });
  
  module.exports =  mongoose.model('addcollege', collegedata);
 