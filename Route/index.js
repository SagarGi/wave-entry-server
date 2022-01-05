module.exports = (app) => {
  const auth = require("../Middleware/auth");
  const adminRoute = require("./admin");
  const studentRoute = require("./student");

  app.all("/", (req, res) => {
    res.send("OK");
  });

  app.use("/admin", auth, adminRoute);
  app.use("/student", auth, studentRoute);
};
