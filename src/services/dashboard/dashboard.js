const express = require("express");
const { loadDashboard } = require("../dashboard/dashboardController");

const { catchAsyncErrors } = require("../../utils/errorHandlers");

const router = express.Router();

//* Route alias = "/api/dashboard"

// Load dashboard homepage
router.get("/", catchAsyncErrors(loadDashboard));

module.exports = router;
