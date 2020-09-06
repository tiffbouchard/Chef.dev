const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 7;

const profileSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: String,
    github: String,
    linkedin: String,
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

profileSchema.pre("save", function (next) {
  const profile = this;
  if (!profile.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(profile.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    profile.password = hash;
    next();
  });
});

profileSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model("Profile", profileSchema);
