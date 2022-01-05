const mongoose = require("mongoose");

const DB_URI = process.env.DATABASE_URI;

const conn = () =>
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successfull !!!");
    })
    .catch((err) => console.log(err));

module.exports = conn;
