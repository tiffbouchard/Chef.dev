const Tip = require("../models/tip");

module.exports = {
  create,
  getPosts,
};

// when create post query the Profile
async function create(req, res) {
  const tip = new Tip(req.body);
  console.log(req.body);
  try {
    // await post.markModified("ingredients");
    await tip.save();
    res.json({ tip });
  } catch (err) {
    res.status(400).json(err);
  }
}

// async function getPosts(req, res) {
//   const allPosts = await Post.find().populate("profile");
//   res.json(allPosts);
//   // add cursore() here later when lots of posts so not everything is loaded at once
//   // console.log(allPosts);
// }

