const Student = require("../Model/StudentSchema");

const create = async (req, res) => {
  const {
    name,
    address,
    destination,
    qualification,
    ielts,
    phone,
    email,
    percentage,
    listening,
    reading,
    writing,
    speaking,
    overallband,
  } = req.body;

  try {
    const studentExist = await Student.findOne({ email: email });

    if (studentExist) {
      return res
        .status(409)
        .json({ error: "Email Already Exist Cannot Register!!!" });
    }

    const student = new Student({
      name,
      address,
      destination,
      qualification,
      ielts,
      phone,
      email,
      percentage,
      listening,
      reading,
      writing,
      speaking,
      overallband,
    });

    const result = await student.save();
    if (!result) {
      return res.status(400).json({ error: "Bad Request" });
    }

    return res
      .status(201)
      .json({ message: "Student Registration Successfull!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const {
    name,
    email,
    phone,
    address,
    destination,
    qualification,
    percentage,
    ielts,
    listening,
    reading,
    writing,
    speaking,
    overallband,
  } = req.body;

  try {
    await Student.updateOne(
      { _id: id },
      {
        name: name,
        email: email,
        phone: phone,
        address: address,
        destination: destination,
        qualification: qualification,
        percentage: percentage,
        ielts: ielts,
        writing: writing,
        speaking: speaking,
        listening: listening,
        overallband: overallband,
        reading: reading,
      }
    );
    return res.status(200).json({ message: "Student Update Successfull" });
  } catch (error) {
    return res.json({ status: 201 });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Student.findOneAndRemove({ _id: id });

    if (!result) {
      return res.status(400).json({ error: "Bad Request" });
    }

    return res.status(200).send({ message: "Delete Student Successfull" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const list = async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).send(students);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

const listOne = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findOne({ _id: id });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    return res.status(200).send(student);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something wrong in the server" });
  }
};

module.exports = {
  create,
  remove,
  update,
  list,
  listOne,
};
