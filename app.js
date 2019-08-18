const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Set up app var
const app = express();

// Load env
require("dotenv").config();

// Database
const db = require("./src/config/database");

// Set up port
const PORT = process.env.PORT || 5000;

// Test database connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.log(`Error: ${err}`));

// Test route
app.get("/", (req, res) => res.send("INDEX"));

// Run server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
