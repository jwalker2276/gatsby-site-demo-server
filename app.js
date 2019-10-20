const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandlers = require("./src/utils/errorHandlers");

// Set up app var
const app = express();

// Load env
require("dotenv").config();

// Database
const db = require("./src/config/database");

// Logger
app.use(logger("dev"));

// Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Compression
app.use(compression());

// Database connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log(err));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change star to domain later.
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

//* Routes --------------------------------------------------

// Vehicle Routes
const vehicleRoutes = require("./src/services/vehicles/vehiclesAPI");

app.use("/api/vehicles", vehicleRoutes);

//! Errors --------------------------------------------------

// 404 error
app.use(errorHandlers.notFound);

// Validation Errros
app.use(errorHandlers.validationErrors);

// Bad errors development
if (app.get("env") === "development") {
  app.use(errorHandlers.devErrors);
}

// Bad errors production
app.use(errorHandlers.prodErrors);

// TODO : Add PM2 for server restart

module.exports = app;
