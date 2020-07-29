const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: String,
    ingredients: { type: [String], required: true },
    goal: { type: String, required: true },
    content: { type: String, required: true },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
