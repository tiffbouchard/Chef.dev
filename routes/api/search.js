const express = require("express");
const router = express.Router();
const searchCtrl = require("../../controllers/search");

/*---------- Public Routes ----------*/
router.get("/search", searchCtrl.search);



/*---------- Protected Routes ----------*/

module.exports = router;