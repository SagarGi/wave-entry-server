const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const conn = require("./connection");
const Admin = require("../Model/AdminSchema");

// default 'admin' user
const admin = new Admin();
admin.username = "admin";
admin.setPassword("admin");

conn().then(async () => {
  console.log("Start seeding...");
  try {
    await Admin.collection.drop();
  } catch (error) {
    console.log("Collection doesn't exist");
  }
  await admin.save((error, result) => {
    if (error) {
      console.error("Cannot seed data");
      console.error(error);
      return;
    }
    console.log("Seeding successful");
    // mongoose.connection.close();
  });
});
