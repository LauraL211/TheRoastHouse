const mongoose = require('mongoose');
const Registration = mongoose.model('registration');

// Login route
const login = function(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  Registration.findOne({ username, password })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "Login successful", user });
    })
    .catch(err => {
      res.status(500).json({ message: "Error during login", error: err });
    });
};

// Sign-up route
const signup = function(req, res) {
    res.status(200).json({"status": "success"});
};


module.exports = {
  login,
  signup
};
