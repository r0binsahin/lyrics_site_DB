const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.RegisterAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ name: name });
    const existingEmail = await Admin.findOne({ email: email });

    if (existingAdmin) {
      return res.status(400).json({ error: "Adminname is already taken." });
    }

    if (existingEmail) {
      return res.status(400).json({ error: "this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newAdmin = await Admin.create({
      name: name,
      email: email,
      password: hashedPass,
    });

    return res.json(newAdmin);
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const adminname = req.body.adminname;
    const password = req.body.password;

    const admin = await Admin.findOne({
      $or: [{ email: adminname }, { name: adminname }],
    });

    if (!admin) {
      return res.json({
        message: "No admin found",
      });
    }

    bcrypt.compare(password, admin.password, function (err, result) {
      if (err) {
        return res.json({
          error: err,
        });
      }
      if (result) {
        let token = jwt.sign({ name: admin.name }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
        res.json({
          message: "Login Successful!",
          token,
        });
      } else {
        res.json({
          message: "Password wrong!",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
