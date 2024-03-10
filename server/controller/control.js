// open page response
const bcrypt = require("bcrypt");
const User = require("../model/dbs");
// openPageResponse
module.exports.OpenPageRes = (req, res) => {
  res.status(200).json({ message: "from server" });
};
// user create
module.exports.register = async (req, res) => {
  let userRegisterDataObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const finduser = await User.findOne({ email: userRegisterDataObj.email });
    if (finduser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(
        userRegisterDataObj.password,
        10
      );
      userRegisterDataObj.password = hashedPassword;
      await User.create(userRegisterDataObj);
      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
// finduser
module.exports.finduser = async (req, res) => {
  let userRegisterDataObj = {
    email: req.body.email,
  };
  try {
    const finduser = await User.findOne({ email: userRegisterDataObj.email });
    if (finduser) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
