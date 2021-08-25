const express = require("express");
const { isLoggedIn, errorHandler } = require("./middlewares");
const { upload } = require("../utils/index.js");
const {
  postAddPost,
  postImages,
  getPost,
  postRepost,
  postAddComment,
  patchLikePost,
  deleteLikePost,
  patchEditPost,
  deletePost,
} = require("../controller/postController");

const postRouter = express.Router();

postRouter.post("/", isLoggedIn, upload.none(), postAddPost, errorHandler);
postRouter.post("/images", isLoggedIn, upload.array("image"), postImages);
postRouter.get("/:postId", getPost);

postRouter.post("/:postId/repost", isLoggedIn, postRepost, errorHandler);
postRouter.post("/:postId/comment", isLoggedIn, postAddComment, errorHandler);

postRouter.patch("/:postId/like", isLoggedIn, patchLikePost, errorHandler);
postRouter.delete("/:postId/like", isLoggedIn, deleteLikePost, errorHandler);

postRouter.patch("/:postId", isLoggedIn, patchEditPost, errorHandler);
postRouter.delete("/:postId", isLoggedIn, deletePost, errorHandler);

module.exports = postRouter;
