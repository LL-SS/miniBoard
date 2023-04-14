const { Router } = require("express");
const { Post } = require("../models");
const asyncHandler = require("../utils/async-handler");

const router = Router();

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const postId = req.params.id;

    await Post.findByIdAndDelete(postId);

    res.redirect("/list");
  })
);

module.exports = router;
