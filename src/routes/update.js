const { Router } = require("express");
const { Post } = require("../models");
const asyncHandler = require("../utils/async-handler");

const router = Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    res.render("update", { post });
  })
);

router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const { title, author, content } = req.body;

    await Post.findByIdAndUpdate(postId, {
      title: title,
      author: author,
      content: content,
    });

    res.redirect(`/list/${postId}`);
  })
);

module.exports = router;
