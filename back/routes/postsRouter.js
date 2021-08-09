const express = require("express");
const {
  getPosts,
  getFollowingPosts,
} = require("../controller/postsController");

const postsRouter = express.Router();

postsRouter.get("/", getPosts);
postsRouter.get("/related", getFollowingPosts);

module.exports = postsRouter;
