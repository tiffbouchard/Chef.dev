const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
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

// Helper Functions

function createJWT(profile) {
  return jwt.sign({ profile }, SECRET, { expiresIn: "24h" });
}
