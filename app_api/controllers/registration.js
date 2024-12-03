const mongoose = require('mongoose');
const Registration = mongoose.model('registration');

// Login route
const login = function(req, res) {
  res.render('loginHomePage', { title: 'Login Page' , pageHeader: {
    title: 'The Roast House', strapline: 'Where culinary inspiration comes to you!'
}});

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
const signup = function(req, res){
  res.render('signupHomePage', { title: 'Sign-Up' , pageHeader: {
      title: 'The Roast House', strapline: 'Where culinary inspiration comes to you!'
  }});
  };

const registrationCreate = function(req, res) {
  Registration.create({
    FullName: req.body.FullName,
    username: req.body.username,
    password: req.body.password
  }).then(registration => {
    res.status(201).json(registration);
  }).catch(err => {
    res.status(400).json(err);
  });
};

const loginPage = function(req, res){
  res.render('loginHomePage', { title: 'Login Page' , pageHeader: {
      title: 'The Roast House', strapline: 'Where culinary inspiration comes to you!'
  }});
  };

module.exports = {
  login,
  loginPage,
  signup,
  registrationCreate
};
