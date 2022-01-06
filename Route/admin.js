const express = require("express");

const router = express.Router();
const {
  create,
  login,
  update,
  remove,
} = require("../Controller/AdminController");

router.post("/", create);
router.put("/", update);
router.delete("/", remove);
router.post("/login", login);

module.exports = router;
