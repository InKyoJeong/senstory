const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Post, User, Image, Comment } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { Op } = require("sequelize");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const {
  getMe,
  getFollowers,
  getFollowings,
  getUser,
  getUserPosts,
  postLogin,
  postSignup,
  postLogout,
  patchEditNickname,
  patchEditIntro,
  patchEditArea,
  patchAddFollower,
  deleteFollower,
  deleteFollowing,
  postAvatarImages,
  patchEditAvatar,
} = require("../controller/userController");

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

router.get("/", getMe);
router.get("/followers", isLoggedIn, getFollowers);
router.get("/followings", isLoggedIn, getFollowings);
router.get("/:userId", getUser);
router.get("/:userId/posts", getUserPosts);
router.post("/login", isNotLoggedIn, postLogin);
router.post("/", isNotLoggedIn, postSignup);
router.post("/logout", isLoggedIn, postLogout);
router.patch("/nickname", isLoggedIn, patchEditNickname);
router.patch("/intro", isLoggedIn, patchEditIntro);
router.patch("/area", isLoggedIn, patchEditArea);
router.patch("/:userId/follow", isLoggedIn, patchAddFollower);
router.delete("/:userId/follow", isLoggedIn, deleteFollower);
router.delete("/follower/:userId", isLoggedIn, deleteFollowing);
router.post("/images", isLoggedIn, upload.array("image"), postAvatarImages);
router.patch("/avatar", isLoggedIn, patchEditAvatar);

module.exports = router;
