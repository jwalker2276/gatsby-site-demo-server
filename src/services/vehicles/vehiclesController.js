const Vehicle = require("../vehicles/Vehicle");

exports.getAllVehicleData = (req, res) => {
  Vehicle.findAll()
    .then(vehicles => {
      res.status(200).json(vehicles);
    })
    .catch(err => res.status(500).json(err));
};

exports.getVehicleData = (req, res) => {
  Vehicle.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(queryData => {
      if (queryData !== null) {
        res.status(200).json(queryData);
      } else {
        res.status(400).json({
          error: `Could not find vehicle with id : ${req.params.id}`
        });
      }
    })
    .catch(err => res.status(500).json(err));
};

exports.setVehicleData = (req, res) => {
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

  Vehicle.create(payload)
    .then(createdVehicle => res.status(200).json(createdVehicle))
    .catch(errsObj => {
      // Clean up errors object
      const displayErrors = errsObj.errors.map(obj => obj.message);
      // Return display errors array
      res.status(400).json(displayErrors);
    });
};

exports.updateVehicleData = (req, res) => {
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

  Vehicle.update(payload, {
    returning: true,
    where: {
      id: req.params.id
    }
  })
    .then(([rowsChanged, [updatedVehicle]]) => {
      if (rowsChanged >= 1) {
        res.status(200).json({
          rowsChanged,
          updatedVehicle
        });
      } else {
        res.status(400).json({
          error: "No changes were made or vehicle id was not found."
        });
      }
    })
    .catch(errsObj => {
      // Clean up errors object
      const displayErrors = errsObj.errors.map(obj => obj.message);
      // Return display errors array
      res.status(400).json(displayErrors);
    });
};

exports.deleteVehicleData = (req, res) => {
  Vehicle.destroy({
    where: {
      id: req.params.id
    },
    limit: 1 // Only return 1 row
  })
    .then(rowsDestroyed => {
      if (rowsDestroyed >= 1) {
        res.status(200).json(`Deleted ${rowsDestroyed} vehicle.`);
      } else {
        res
          .status(400)
          .json({ error: `No vehicle data was changed, check id.` });
      }
    })
    .catch(err => res.status(500).json(err));
};
