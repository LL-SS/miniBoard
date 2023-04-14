var express = require("express");
var router = express.Router();
const asyncHandler = require("../utils/async-handler");

/* GET home page. */
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.render("index");
  })
);

module.exports = router;
