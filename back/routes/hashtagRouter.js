const express = require("express");
const { getHashtagPosts } = require("../controller/hashtagController");

const hashtagRouter = express.Router();

hashtagRouter.get("/:hashtag", getHashtagPosts);

module.exports = hashtagRouter;
