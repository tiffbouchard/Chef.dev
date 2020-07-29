const Post = require("../models/post");

module.exports = {
  search,
};

async function search(req, res) {
  const allPosts = await Post.find();
  res.json(allPosts);
}