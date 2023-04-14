const { Router } = require('express');
const router = Router();
const asyncHandler = require('../utils/async-handler');

const { Post } = require('../models');

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    res.render("post", { post });
  })
);

module.exports = router;