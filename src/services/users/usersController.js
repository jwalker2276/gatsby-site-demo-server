const { check, body, validationResult } = require("express-validator");

// Model
const User = require("../users/Users");

// Register form
exports.registerForm = (req, res) => {
  res.render("register");
};

// Register a new user
exports.registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render("register", {
      hasErrors: true,
      errors: errors.errors
    });
    return;
  }

  res.status(200);
};

// Login form
exports.loginForm = (req, res) => {
  res.render("login");
};

// Login a user
exports.loginUser = async (req, res, next) => {
  res.json(req.body);
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
