const express = require("express");
const { catchAsyncErrors } = require("../../utils/errorHandlers");

const {
  validateUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  getUsersData
} = require("../users/usersController");

const router = express.Router();

//* Route alias = "api/users"

// Register a new user
router.post(
  "/add",
  catchAsyncErrors(validateUser),
  catchAsyncErrors(registerUser)
);

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
