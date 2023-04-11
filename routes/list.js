const { Router } = require("express");
const { Post } = require("../models");
const asyncHandler = require("../utils/async-handler");

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const postList = await Post.find({});

    res.render("list", { postList });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    res.render("post", { post });
  })
);

module.exports = router;
