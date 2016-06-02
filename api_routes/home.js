var express = require("express");
var router = express.Router();

//==============================================================================
// GET Homepage
//==============================================================================
router.get("/", function(req, res) {
  res.json({
    message: "API is at api/v1/"
  });
});

module.exports = router;
