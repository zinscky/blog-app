"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path")
var fs = require("fs");
var https = require("https");
var favicon = require("serve-favicon");

// Get .env Config
require("dotenv").config({
  silent: false, // Displays warning in console if .env file is not found
  path: ".env", // Its the default path to the .env file
  encoding: "utf8", // Default Encoding is utf8
});

// Get SSL key and certificate
var credentials = {
  key: fs.readFileSync("ssl/key.pem"),
  cert: fs.readFileSync("ssl/cert.pem")
};

// MongoDB Connection
mongoose.connect(process.env.DB_HOST, function(error) {
  if(error) {
    console.log("Mongoose connection error: " + error);
  }
});

// Require API route modules
var home = require("./api_routes/home");

// Init App
var app = express();

// Static Path
app.set(express.static(path.join(__dirname, "public")));

// Serve Favicon
app.use(favicon("public/favicon.ico"));

// Logger
app.use(logger("dev"));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home);

var server = https.createServer(credentials, app);
server.listen(process.env.PORT, function() {
  console.log("Server listening on port: " + process.env.PORT);
});
