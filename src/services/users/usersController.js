const { validationResult } = require("express-validator");

// Model
const User = require("../users/Users");

// Register form
exports.registerForm = (req, res) => {
  res.render("register");
};

// Check and clean new user data
exports.checkNewUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("register", {
      hasErrors: true,
      errors: errors.errors
    });
    return;
  }

  next();
};

// Login form
exports.loginForm = (req, res) => {
  res.render("login");
};

// Check and clean user login data
exports.checkUserLogin = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("login", {
      hasErrors: true,
      errors: errors.errors
    });
    return;
  }

  next();
};
// Logout a user
exports.logoutUser = async (req, res, next) => {
  res.json("Logout user");
};
// Update user's info
exports.updateUser = async (req, res, next) => {
  res.json("Updated user");
};
// Delete a user
exports.deleteUser = async (req, res, next) => {
  res.json("Deleted user");
};
// Get users data
exports.getUsersData = async (req, res, next) => {
  res.json("Users data");
};
