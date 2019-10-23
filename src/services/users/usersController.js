const validate = require("validator");

// Model
const User = require("../users/Users");

// Validate user info
exports.validateUser = async (req, res, next) => {
  console.log("checking user data");
  next();
};

// Register a new user
exports.registerUser = async (req, res, next) => {
  res.json("Register new user");
};

// Login a user
exports.loginUser = async (req, res, next) => {
  res.json("Login user");
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
