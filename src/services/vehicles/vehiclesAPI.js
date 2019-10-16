const express = require("express");
const {
  getAllVehicleData,
  getVehicleData,
  setVehicleData,
  updateVehicleData,
  deleteVehicleData
} = require("../vehicles/vehiclesController");

const router = express.Router();

//* Route alias = "/api/vehicles"

// Get all vehicles
router.get("/all", getAllVehicleData);

// Get a specific vehicle
router.get("/:id", getVehicleData);

// Post a new vehicle
router.post("/add", setVehicleData);

// Update a specific vehicle
router.put("/:id", updateVehicleData);

// Delete a specific vehicle
router.delete("/:id", deleteVehicleData);

module.exports = router;
