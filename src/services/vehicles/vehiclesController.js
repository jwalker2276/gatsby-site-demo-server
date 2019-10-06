const Vehicle = require("../vehicles/Vehicle");

exports.getAllVehicleData = (req, res) => {
  Vehicle.findAll()
    .then(vehicles => {
      console.log(vehicles);
      res.status(200).json(vehicles);
    })
    .catch(err => console.log(`ERROR : ${err}`));
};
