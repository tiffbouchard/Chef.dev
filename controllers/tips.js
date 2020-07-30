const Tip = require("../models/tip");

module.exports = {
  create,
  getTips,
};

async function create(req, res) {
  const tip = new Tip(req.body);
  console.log("refdafsaf" + req.body);

  console.log("dfadasf" + tip);
  try {
    await tip.save();
    res.json({ tip });
  } catch (err) {
    res.status(400).json(err);
  }
}


async function getTips(req, res) {
  const allTips = await Tip.find().populate("profile").populate("tip");
  res.json(allTips);
  console.log(allTips);
}

