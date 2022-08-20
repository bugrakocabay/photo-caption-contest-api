const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ where: { username } }).catch(
    (err) => {
      console.log(err);
    }
  );
  if (userExists) {
    return res.status(500).json({ msg: "username already exists!" });
  }
  const newUser = new User({ username, password });

  try {
    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(201).json({ msg: "user created successfully!" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } }).catch((err) => {
    console.log(err);
  });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      const jwtToken = jwt.sign(
        { id: user.id, username: user.username },
        process.env.SECRET
      );
      res.status(200).json({ msg: "auth successful", token: jwtToken });
    } else {
      return res.status(500).json({ msg: "auth failed" });
    }
  } else {
    return res.status(500).json({ msg: "user does not exist" });
  }
};
