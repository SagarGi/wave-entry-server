const Admin = require("../Model/AdminSchema");
const { createJSONToken } = require("../lib/jwt");

const create = async (req, res) => {
  try {
    const { username, password } = req.body;
    const adminExist = await Admin.findOne({ username: username });

    if (adminExist) {
      return res.status(409).json({ error: "User already exists." });
    }

    const admin = new Admin();
    admin.username = username;
    admin.setPassword(password);

    const result = await admin.save();

    if (!result) {
      return res.status(400).json({ error: "Bad Request" });
    }

    return res.status(201).json({ _id: result._id, username: result.username });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const remove = async (req, res) => {
  try {
    const { username } = req.body;
    const result = await Admin.findOneAndRemove({ username: username });

    if (!result) {
      return res.status(400).json({ error: "Bad Request" });
    }

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const update = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username: req.user });

    if (admin) {
      admin.username = username;
      admin.setPassword(password);
      const result = await admin.save();

      if (!result) {
        return res.status(400).json({ error: "Bad Request" });
      }

      return res
        .status(200)
        .json({ _id: result._id, username: result.username });
    } else {
      return res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username: username });

    if (admin) {
      if (admin.verify(password)) {
        const token = createJSONToken({ username });

        res
          .status(200)
          .json({ success: "Login successful", accessToken: token });
      } else {
        return res.status(401).json({ error: "Invalid login" });
      }
    } else {
      return res.status(401).json({ error: "Invalid login" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

module.exports = {
  create,
  remove,
  update,
  login,
};
