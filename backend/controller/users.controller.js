const User = require("../model/user.model");

exports.check = (req, res) => {
  res.send("Hello World!");
};

exports.registerUser = async (req, res) => {
  try {
    if (req.body) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await newUser
        .save()
        .then((response) => {
          res.status(201).send({ result: "user created..." });
        })
        .catch((err) => {
          res.status(500).send({ result: err.message });
        });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    if (req.body) {
      const email = req.body.email;
      const password = req.body.password;

      await User.find({ email: email, password: password })
        .then((response) => {
          res.status(200).send({
            result: "login...",
            loginStatus: true,
            token: "token",
            resp: response,
          });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
