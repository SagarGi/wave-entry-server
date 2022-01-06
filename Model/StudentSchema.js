const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  ielts: {
    type: String,
    required: true,
  },
  reading: {
    type: String,
  },
  writing: {
    type: String,
  },
  listening: {
    type: String,
  },
  speaking: {
    type: String,
  },
  overallband: {
    type: String,
  },
});

const User = mongoose.model("Student", StudentSchema);
module.exports = User;
