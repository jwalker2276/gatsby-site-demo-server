const express = require("express");
const {
  getAllVehicleData,
  getVehicleData,
  uploadImage,
  resizeImage,
  setVehicleData,
  updateVehicleData,
  deleteVehicleData
} = require("../vehicles/vehiclesController");

const { catchAsyncErrors } = require("../../utils/errorHandlers");

const router = express.Router();

//* Route alias = "/api/vehicles"

// Get all vehicles
router.get("/all", catchAsyncErrors(getAllVehicleData));

// Get a specific vehicle
router.get("/:id", catchAsyncErrors(getVehicleData));

// Post a new vehicle
router.post(
  "/add",
  uploadImage,
  catchAsyncErrors(resizeImage),
  catchAsyncErrors(setVehicleData)
);

// Update a specific vehicle
router.put(
  "/:id",
  uploadImage,
  catchAsyncErrors(resizeImage),
  catchAsyncErrors(updateVehicleData)
);

// Delete a specific vehicle
router.delete("/:id", catchAsyncErrors(deleteVehicleData));

module.exports = router;
