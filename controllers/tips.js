const Tip = require("../models/tip");

module.exports = {
  create,
  getTips,
};

async function create(req, res) {
  const tip = new Tip(req.body);
  try {
    await tip.save();
    res.json({ tip });
  } catch (err) {
    res.status(400).json(err);
  }
}


async function getTips(req, res) {
  const id = req.params.id
  // const indexOfMaxValue = arr.indexOf(Math.max(...arr));
  const allTips = await Tip.find({ post: id }).populate("profile")
    .limit(req.query.limit || 6);
  res.json(allTips)
  console.log(allTips);
}

