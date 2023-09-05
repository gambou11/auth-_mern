const Person = require('../models/userModel');

const register = async (req, res) => {
  // ... (your register implementation)
};

const login = async (req, res) => {
  // ... (your login implementation)
};

const getUserData = async (req, res) => {
  try {
    const user = await Person.findOne({ _id: req.personId });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    } else {
      return res.status(200).json({ msg: "User info retrieved successfully", person: user });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = { register, login, getUserData };
