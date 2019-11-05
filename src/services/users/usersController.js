const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

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

exports.hashUserData = async (req, res, next) => {
  // Generate password hash
  const saltRounds = 10;

  // Hash password
  await bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      throw Error(err);
    }
    // Update plain text password to hash
    req.body.password = hash;
    next();
  });
};

// Add new user
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const role = "base user";

  const userPayload = {
    username,
    email,
    hash: password,
    role
  };

  // Check if user exist
  const userWasFound = await User.findOne({ where: { email } });

  if (userWasFound === null) {
    // Create new user
    await User.create(userPayload);
    res.render("dashboard");
  } else {
    res.render("login", {
      hasErrors: true,
      errors: [{ msg: "User already exist, please log in." }]
    });
  }
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

// Check Username and password
exports.checkUserPassword = async (req, res, next) => {
  // Fetch hash from db
  const plainTextPassword = req.body.password;
  const userAccount = await User.findOne({
    where: { username: req.body.username }
  });

  // Does account exist
  if (userAccount === null) {
    res.render("login", {
      hasErrors: true,
      errors: [{ msg: "Could not find account, check details and try again." }]
    });
  }

  const accountHash = userAccount.hash;
  // Check password
  const match = await bcrypt.compare(plainTextPassword, accountHash);

  if (match) {
    next();
  } else {
    res.render("login", {
      hasErrors: true,
      errors: [
        { msg: "Account details don't match, check details and try again." }
      ]
    });
  }
};

// Login in user
exports.loginUser = (req, res) => {
  // TODO : Start session
  // TODO : Redirect to dashboard
  //! Make sure "Cannot set headers after they are sent" goes away.

  res.json("dashboard");
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
