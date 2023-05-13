const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddStudent = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  collegeid: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//  export default ajay;
module.exports = mongoose.model("AddstudentData", AddStudent);;
