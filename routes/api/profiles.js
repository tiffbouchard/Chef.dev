const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");
const profileCtrl = require("../../controllers/profiles");

/*---------- Public Routes ----------*/
router.post("/signup", profileCtrl.signup);
router.post("/login", profileCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;
