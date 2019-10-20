const express = require("express");
const {
  getAllVehicleData,
  getVehicleData,
  setVehicleData,
  updateVehicleData,
  deleteVehicleData
} = require("../vehicles/vehiclesController");

const { catchErrors } = require("../../utils/errorHandlers");

const router = express.Router();

//* Route alias = "/api/vehicles"

// Get all vehicles
router.get("/all", getAllVehicleData);

// Get a specific vehicle
router.get("/:id", catchErrors(getVehicleData));

// Post a new vehicle
router.post("/add", catchErrors(setVehicleData));

// Update a specific vehicle
router.put("/:id", catchErrors(updateVehicleData));

// Delete a specific vehicle
router.delete("/:id", catchErrors(deleteVehicleData));

module.exports = router;
