const User = require("../models/userModel");
const generateToken = require('../config/generateToken')
const loginUser = (req, res) => {
  try {
    
    const { email, password } = req.body;
  } catch (error) {
    
  }
};

const signupUser = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const users = await User.findOne({ email });
    if (users) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      pic,
    });
    if (!user) {
      return res.status(400).json({ message: "Failed to create user" });
    }

    let token = generateToken(email);
    
    return res
      .status(201)
      .json({ message: "User Created Successfully!", data: {user,token }});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
