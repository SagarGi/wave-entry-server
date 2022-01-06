const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || "waveentrydatabase";

const DB_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`;

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
