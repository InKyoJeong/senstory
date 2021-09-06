const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const { isLoggedIn, errorHandler } = require("./middlewares");
// const { upload } = require("../utils/index.js");
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
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "senstory",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB 제한
});

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
