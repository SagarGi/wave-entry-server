const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");

// load env from .env
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// db connection
require("./Database/connection")();

// enable cors with default config
app.use(cors());

app.use(express.json());
// routes
require("./Route")(app);
require("./Database/seeder");
const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
