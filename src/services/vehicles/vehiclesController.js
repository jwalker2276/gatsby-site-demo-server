const Vehicle = require("../vehicles/Vehicle");

exports.getAllVehicleData = (req, res) => {
  Vehicle.findAll()
    .then(vehicles => {
      console.log(vehicles);
      res.status(200).json(vehicles);
    })
    .catch(err => console.log(`ERROR : ${err}`));
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
    .then(createdVehicle => res.json(createdVehicle))
    .catch(errsObj => {
      // Clean up errors object
      const displayErrors = errsObj.errors.map(obj => obj.message);
      // Return display errors array
      res.json(displayErrors);
    });
};
