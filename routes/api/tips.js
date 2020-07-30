const express = require("express");
const router = express.Router();
const tipCtrl = require("../../controllers/tips");

/*---------- Public Routes ----------*/
router.post("/new", postCtrl.create);
router.get("/id", postCtrl.getPosts);

/*---------- Protected Routes ----------*/

module.exports = router;