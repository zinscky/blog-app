"use strict";

var mongoose = require("mongoose");
var Article = require("./model.article");

var userSchema = mongoose.Schema({
  username: {type: String, index: true, unique: true, required: true},
  email: {type: String, required: true, unique: true},
  firstname: {type String, default: ""},
  lastname: {type: String, default: ""},
  password: {type String, required: true},
  created_on: {type: Date, default: Date.now()},
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
    }
  ]
});

var User = module.exports = mongoose.model("User", userSchema);
