const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { isLoggedIn, errorHandler } = require("./middlewares");
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

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더 없으므로 생성됨");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + "_" + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB 제한
});

postRouter.post("/", isLoggedIn, upload.none(), postAddPost, errorHandler);
postRouter.post("/images", isLoggedIn, upload.array("image"), postImages);
postRouter.get("/:postId", getPost);

postRouter.post("/:postId/repost", isLoggedIn, postRepost);
postRouter.post("/:postId/comment", isLoggedIn, postAddComment);

postRouter.patch("/:postId/like", isLoggedIn, patchLikePost);
postRouter.delete("/:postId/like", isLoggedIn, deleteLikePost);

postRouter.patch("/:postId", isLoggedIn, patchEditPost);
postRouter.delete("/:postId", isLoggedIn, deletePost);

module.exports = postRouter;
