const express = require("express");
const { Post } = require("../models");
const asyncHandler = require("../utils/async-handler");

const router = express.Router();

// create Page
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.render("create");
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, author, content } = req.body;
    
    await Post.create({
      title,
      author,
      content,
    });

    res.redirect("/list");
  })
);

module.exports = router;
