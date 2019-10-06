const express = require("express");
const db = require("../../config/database");
const Vehicle = require("../vehicles/Vehicle");
const { getAllVehicleData } = require("../vehicles/vehiclesController");

const router = express.Router();

//* Route alias = "/api/vehicles"

// Get all vehicles
router.get("/all", getAllVehicleData);

// Post a new vehicle
router.post("/add");

module.exports = router;
