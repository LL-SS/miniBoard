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
  "/:title",
  asyncHandler(async (req, res) => {
    const title = req.params.title;
    const post = await Post.findOne({ title });

    res.render("post", { post });
  })
);

module.exports = router;
