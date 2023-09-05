const Person = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator'); // Corrected import name

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } // Added closing curly brace for the validation check

    const { email, name, password, address } = req.body;
    const newUSER = await Person.findOne({ email });

    if (newUSER) {
      return res.status(400).json({ message: "User exists, try to connect" });
    } else {
      const hashedPw = await bcrypt.hash(password, 10);
      const createUSER = await Person.create({
        email,
        name,
        password: hashedPw,
        address
      });

      const token = jwt.sign({ id: createUSER._id }, process.env.jwt_SECRET, { expiresIn: '7d' });

      return res.status(201).json({ msg: "User registered successfully", token: token, person: createUSER });
    }
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Person.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist, try to register" });
    } else {
      const checkPw = await bcrypt.compare(password, user.password); // Added await here

      if (!checkPw) {
        return res.status(400).json({ message: "Wrong password, try again" });
      } else {
        const token = jwt.sign({ id: user._id }, process.env.jwt_SECRET, { expiresIn: '7d' });
        console.log(token);
        return res.status(201).json({ msg: "Login success", token: token, person: user });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "An error occurred", error: error.message });
  }
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



