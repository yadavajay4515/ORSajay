const mongoose = require("mongoose");
const { Schema } = mongoose;


const rolestudent = new Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
  },  
  
    Name:{
        type: String,
        required: true,
        unique: true
    },
    Discription:{
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now,
      },

  });
  
  module.exports =  mongoose.model('addrole', rolestudent );