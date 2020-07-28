const Post = require("../models/post");

module.exports = {
  create,
};

async function create(req, res) {
  const post = new Post(req.body);
  console.log(req.body);
  try {
    await post.markModified("ingredients");
    await post.save();
    res.json({ post });
  } catch (err) {
    res.status(400).json(err);
  }
}
