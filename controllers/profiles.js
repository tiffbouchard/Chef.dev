const Profile = require("../models/profile");
const Post = require("../models/post");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  newProfile,
  userPosts,
  userPublicPosts,
};

async function signup(req, res) {
  const profile = new Profile(req.body);
  try {
    await profile.save();
    const token = createJWT(profile);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const profile = await Profile.findOne({ email: req.body.email });
    if (!profile) return res.status(401).json({ err: "bad credentials" });
    profile.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(profile);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function newProfile(req, res) {
  const newProfile = req.body;
  const currentProfile = req.body.email;
  console.log(req.body);
  try {
    let profile = await Profile.findOneAndUpdate(
      { email: req.body.email },
      { $set: newProfile },
      {
        new: true,
      }
    );

    const token = createJWT(profile);
    res.json({ token });
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function userPosts(req, res) {
  const id = req.params.id;
  console.log(id);
  await Post.find({ profile: id }, function (err, posts) {
    if (err) return err;
    console.log(posts);
    return res.json(posts);
  });
}

async function userPublicPosts(req, res) {
  const id = req.params.id;
  const profilePosts = await Post.find({ profile: id }).populate("profile");
  console.log(profilePosts);
  res.json(profilePosts);
}

// Helper Functions
function createJWT(profile) {
  return jwt.sign({ profile }, SECRET, { expiresIn: "24h" });
}
