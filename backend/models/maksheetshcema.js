const mongoose = require("mongoose");
const { Schema } = mongoose;


const marksheetdata = new Schema({
  user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
  },  
  RollNo:{
        type: String,
        required: true
    },
    Name:{
        type: String,
        required: true,
        unique: true
    },
    Physics:{
        type: Number,
        required: true
    },
    chemistry:{
        type: Number,
        required: true
    },
    Maths:{
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
      },

  });
  
  module.exports =  mongoose.model('Marksheet', marksheetdata );