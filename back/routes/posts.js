const express = require("express");
const {
  getPosts,
  getFollowingPosts,
} = require("../controller/postsController");

const router = express.Router();

router.get("/", getPosts);
router.get("/related", getFollowingPosts);

module.exports = router;
