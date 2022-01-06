const jwt = require("jsonwebtoken");

const createJSONToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });
};

module.exports = {
  createJSONToken,
};
