const express = require("express");
const { body } = require("express-validator");
const { catchAsyncErrors } = require("../../utils/errorHandlers");

const {
  validateUser,
  registerForm,
  registerUser,
  loginForm,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  getUsersData
} = require("../users/usersController");

const router = express.Router();

//* Route alias = "api/users"

// Response with the sign up form
router.get("/register", registerForm);

// Validate then register a new user
router.post(
  "/register",
  [
    body("email", "You must enter a email.")
      .isEmail()
      .normalizeEmail(),
    body("username", "You must enter a username")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    body("password", "You must enter a password.")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    body("password-confirm", "You must enter a password.")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    body("password-confirm").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords don't match!");
      }
      return true;
    })
  ],
  catchAsyncErrors(registerUser)
);

// Response with the login form
router.get("/login", loginForm);

// Login a user
router.post(
  "/login",
  catchAsyncErrors(validateUser),
  catchAsyncErrors(loginUser)
);

// Logout a user
router.post("/logout", catchAsyncErrors(logoutUser));

// Update a user
router.put("/", catchAsyncErrors(validateUser), catchAsyncErrors(updateUser));

// Delete a user
router.delete("/", catchAsyncErrors(deleteUser));

// Get users data, no passwords
router.get("/all", catchAsyncErrors(getUsersData));

module.exports = router;
