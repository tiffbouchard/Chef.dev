const express = require("express");
const router = express.Router();
const tipsCtrl = require("../../controllers/tips");

/*---------- Public Routes ----------*/
router.post("/new", tipsCtrl.create);
router.get("/all", tipsCtrl.getTips);

/*---------- Protected Routes ----------*/

module.exports = router;