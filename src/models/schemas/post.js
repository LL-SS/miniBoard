const { Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    shortId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
