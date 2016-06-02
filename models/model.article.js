"use strict";

var mongoose = require("mongoose");
var User = require("./model.user");


var articleSchema = mongoose.schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  created_on = {type: Date, default: Date.now()},
  updated_on = {type: Date, default: Date.now()},
  likes: {type: Number, default: 0}
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
});

var Article = module.exports = mongoose.model("Article", articleSchema);
