const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { isLoggedIn } = require("./middlewares");
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

const router = express.Router();

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

router.post("/", isLoggedIn, upload.none(), postAddPost);
router.post("/images", isLoggedIn, upload.array("image"), postImages);
router.get("/:postId", getPost);
router.post("/:postId/repost", isLoggedIn, postRepost);
router.post("/:postId/comment", isLoggedIn, postAddComment);
router.patch("/:postId/like", isLoggedIn, patchLikePost);
router.delete("/:postId/like", isLoggedIn, deleteLikePost);
router.patch("/:postId", isLoggedIn, patchEditPost);
router.delete("/:postId", isLoggedIn, deletePost);

module.exports = router;
