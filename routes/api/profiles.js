const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");
const profileCtrl = require("../../controllers/profiles");

/*---------- Public Routes ----------*/
router.post("/signup", profileCtrl.signup);
router.post("/login", profileCtrl.login);
router.post("/newprofile", profileCtrl.newProfile);
router.get("/public/:id", profileCtrl.userPublicPosts);
router.get("/:id", profileCtrl.userPosts);

/*---------- Protected Routes ----------*/

module.exports = router;
