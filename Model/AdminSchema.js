const mongoose = require("mongoose");
const { hashPassword, generateSalt } = require("../lib/hash");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
});

// arrow function will not work here
AdminSchema.methods.setPassword = function (password) {
  this.salt = generateSalt();
  this.password = hashPassword(password, this.salt);
};

// arrow function will not work here
AdminSchema.methods.verify = function (password) {
  passwordHash = hashPassword(password, this.salt);
  return this.password === passwordHash;
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
