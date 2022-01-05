const express = require("express");

const router = express.Router();
const {
  create,
  update,
  remove,
  list,
  listOne,
} = require("../Controller/StudentController");

router.post("/", create);
router.get("/", list);
router.get("/:id", listOne);
router.put("/:id", update);
router.delete("/:id", remove);

// router.get("/update/:id", async (req, res) => {
//   var id = req.params.id;

//   const studentDetails = await Student.findOne({ _id: id });
//   res.send(studentDetails);
// });

module.exports = router;
