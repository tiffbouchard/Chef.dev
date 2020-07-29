const express = require("express");
const router = express.Router();
const Profile = require("../../models/profile");
const profileCtrl = require("../../controllers/profiles");
const searchCtrl = require("../../controllers/search");

/*---------- Public Routes ----------*/
router.get("/search", searchCtrl.signup);



/*---------- Protected Routes ----------*/

module.exports = router;