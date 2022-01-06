const jwt = require("jsonwebtoken");
const Admin = require("../Model/AdminSchema");

module.exports = async (req, res, next) => {
  const url = req.url;
  // do not check for auth for login endpoint
  if (url === "/login") {
    return next();
  }

  try {
    const [type, token] = req.headers.authorization.split(" ");

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (type === "Basic") {
      const [username, password] = Buffer.from(token, "base64")
        .toString()
        .split(":");

      const admin = await Admin.findOne({ username: username });
      if (!admin.verify(password)) {
        return res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const admin = await Admin.findOne({ username: payload.username });
      if (!admin) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      req.user = payload.username;
    }
    return next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
