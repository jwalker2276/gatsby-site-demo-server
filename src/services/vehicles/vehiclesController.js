const validate = require("validator");
const Vehicle = require("../vehicles/Vehicle");

exports.getAllVehicleData = async (req, res) => {
  // Get all vehicles from database
  const vehicleData = await Vehicle.findAll();
  // Return status and data
  res.status(200).json(vehicleData);
};

exports.getVehicleData = async (req, res) => {
  // Make sure the params id is an INT.
  if (!validate.isInt(req.params.id)) {
    throw Error("Id is not a INT");
  }

  // Get data from database
  const vehicleData = await Vehicle.findOne({ where: { id: req.params.id } });

  // Check data
  if (vehicleData !== null) {
    res.status(200).json(vehicleData);
  } else {
    res.status(400).json({ error: "Vehicle does not exist." });
  }
};

exports.setVehicleData = async (req, res) => {
  const {
    year,
    make,
    model,
    trim,
    price,
    mileage,
    engine,
    transmission,
    driveline_type,
    shop_notes,
    seller_id,
    fuel_type,
    color_exterior,
    color_interior,
    dyno_hp,
    dyno_t,
    image_m,
    image_s,
    isSold,
    isConsignment,
    wasImproved
  } = req.body;

  const payload = {
    year: parseInt(year, 10),
    make,
    model,
    trim,
    price: parseInt(price, 10),
    mileage: parseInt(mileage, 10),
    engine,
    transmission,
    driveline_type,
    shop_notes,
    seller_id: parseInt(seller_id, 10),
    fuel_type,
    color_exterior,
    color_interior,
    dyno_hp: parseInt(dyno_hp, 10),
    dyno_t: parseInt(dyno_t, 10),
    image_m,
    image_s,
    isSold,
    isConsignment,
    wasImproved,
    views: 0
  };
  // Create vehicle
  const createdVehicle = await Vehicle.create(payload);
  // Return the new vehicle
  res.status(200).json(createdVehicle);
};

exports.updateVehicleData = async (req, res) => {
  const {
    year,
    make,
    model,
    trim,
    price,
    mileage,
    engine,
    transmission,
    driveline_type,
    shop_notes,
    seller_id,
    fuel_type,
    color_exterior,
    color_interior,
    dyno_hp,
    dyno_t,
    image_m,
    image_s,
    isSold,
    isConsignment,
    wasImproved
  } = req.body;

  const payload = {
    year: parseInt(year, 10),
    make,
    model,
    trim,
    price: parseInt(price, 10),
    mileage: parseInt(mileage, 10),
    engine,
    transmission,
    driveline_type,
    shop_notes,
    seller_id: parseInt(seller_id, 10),
    fuel_type,
    color_exterior,
    color_interior,
    dyno_hp: parseInt(dyno_hp, 10),
    dyno_t: parseInt(dyno_t, 10),
    image_m,
    image_s,
    isSold,
    isConsignment,
    wasImproved,
    views: 0
  };

  // Make sure the params id is an INT.
  if (!validate.isInt(req.params.id)) {
    throw Error("Id is not a INT");
  }
  // Update the vehicle with the new data
  const theUpdatedVehicle = await Vehicle.update(payload, {
    returning: true,
    where: {
      id: req.params.id
    }
  });

  // Rows changed and updateVehicle are returned
  const [rowsChanged, [updatedVehicle]] = theUpdatedVehicle;
  // Display
  if (rowsChanged >= 1) {
    res.status(200).json(updatedVehicle);
  } else {
    res
      .status(400)
      .json({ message: "No changes were made or vehicle id was not found" });
  }
};

exports.deleteVehicleData = async (req, res) => {
  // Make sure the params id is an INT.
  if (!validate.isInt(req.params.id)) {
    throw Error("Id is not a INT");
  }

  // Delete vehicle in database
  const vehicleRow = await Vehicle.destroy({
    where: {
      id: req.params.id
    },
    limit: 1 // Make sure to delete only 1 record.
  });

  // If only one row was return after deleting
  if (vehicleRow >= 1) {
    res.status(200).json({ message: "Deleted vehicle." });
  } else {
    res.status(400).json({ error: "No vehicle data was changed, check id" });
  }
};
