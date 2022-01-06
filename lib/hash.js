const crypto = require("crypto");

const hashPassword = (password, salt) => {
  const hashedPassword = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hashedPassword;
};

const generateSalt = () => {
  return crypto.randomBytes(10).toString("hex");
};

module.exports = {
  hashPassword,
  generateSalt,
};
