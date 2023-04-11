const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  const postList = await Post.find({});

  res.render('list', { postList });
});

router.get('/:title', async (req, res, next) => {
  const title = req.params.title;
  const post = await Post.findOne({ title });

  res.render('post', { post });
});

module.exports = router;