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
    const post = req.body;
    const title = post.title;
    const author = post.author;
    const content = post.content;

    await Post.create({
      title,
      author,
      content,
    });

    res.redirect("/list");
  })
);

module.exports = router;
