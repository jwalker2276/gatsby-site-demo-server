const Sequelize = require("sequelize");
const db = require("../../config/database");

const Vehicle = db.define(
  "vehicle",
  {
    year: {
      type: Sequelize.SMALLINT
    },
    make: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    trim: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    },
    mileage: {
      type: Sequelize.INTEGER
    },
    engine: {
      type: Sequelize.STRING
    },
    transmission: {
      type: Sequelize.STRING
    },
    driveline_type: {
      type: Sequelize.STRING
    },
    creation_date: {
      type: Sequelize.DATE
    },
    shop_notes: {
      type: Sequelize.TEXT
    },
    vehicle_id: {
      type: Sequelize.INTEGER
    },
    seller_id: {
      type: Sequelize.INTEGER
    },
    fuel_type: {
      type: Sequelize.STRING
    },
    color_exterior: {
      type: Sequelize.STRING
    },
    color_interior: {
      type: Sequelize.STRING
    },
    dyno_hp: {
      type: Sequelize.SMALLINT
    },
    dyno_t: {
      type: Sequelize.SMALLINT
    },
    image_m: {
      type: Sequelize.TEXT
    },
    image_s: {
      type: Sequelize.TEXT
    },
    isSold: {
      type: Sequelize.BOOLEAN
    },
    isConsignment: {
      type: Sequelize.BOOLEAN
    },
    views: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);

module.exports = Vehicle;
