const express = require('express');
const { Post } = require('../models');

const router = express.Router();

// create Page
router.get('/', function(req, res, next) {
  res.render('create');
});

router.post('/', async (req, res, next) => {
  const post = req.body;
  const title = post.title;
  const author = post.author;
  const content = post.content;

  await Post.create({
    title,
    author,
    content
  });

  res.redirect('/list');
})

module.exports = router;
