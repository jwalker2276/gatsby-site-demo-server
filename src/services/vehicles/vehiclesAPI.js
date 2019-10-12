const express = require("express");
const {
  getAllVehicleData,
  setVehicleData
} = require("../vehicles/vehiclesController");

const router = express.Router();

//* Route alias = "/api/vehicles"

// Get all vehicles
router.get("/all", getAllVehicleData);

// Post a new vehicle
router.post("/add", setVehicleData);

module.exports = router;
