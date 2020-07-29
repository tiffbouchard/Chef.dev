const Profile = require("../models/profile");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  newProfile,
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

<<<<<<< HEAD
    await profile.save(function (err) {
      if (err) return handleError(err);
    });
    console.log("did u get here");
    return res.send({ redirect: "/" });
  } catch (err) {
    return res.status(400).json(err);
  }
=======

        const token = createJWT(profile);
        res.json({ token });

    } catch (err) {
        return res.status(400).json(err);
    }
>>>>>>> 6b2c6dc406e8945e4d3d4d7ef29860ffc0b80b61
}

// Helper Functions

function createJWT(profile) {
  return jwt.sign({ profile }, SECRET, { expiresIn: "24h" });
}
