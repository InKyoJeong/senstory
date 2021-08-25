const express = require("express");
const { getHashtagPosts } = require("../controller/hashtagController");
const { errorHandler } = require("./middlewares");

const hashtagRouter = express.Router();

hashtagRouter.get("/:hashtag", getHashtagPosts, errorHandler);

module.exports = hashtagRouter;
