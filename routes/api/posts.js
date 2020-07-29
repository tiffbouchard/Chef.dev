const express = require("express");
const router = express.Router();
const Post = require("../../models/post");
const postCtrl = require("../../controllers/posts");

/*---------- Public Routes ----------*/
router.post("/new", postCtrl.create);
router.get("/all", postCtrl.getPosts);
router.get("/:id", postCtrl.getPost);

/*---------- Protected Routes ----------*/

module.exports = router;