const express = require("express");
const { isLoggedIn, isNotLoggedIn, errorHandler } = require("./middlewares");

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
  patchEditMbti,
} = require("../controller/userController");

const userRouter = express.Router();

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

userRouter.get("/", getMe);
userRouter.get("/followers", isLoggedIn, getFollowers);
userRouter.get("/followings", isLoggedIn, getFollowings);

userRouter.get("/:userId", getUser);
userRouter.get("/:userId/posts", getUserPosts, errorHandler);
userRouter.post("/login", isNotLoggedIn, postLogin, errorHandler);
userRouter.post("/", isNotLoggedIn, postSignup, errorHandler);
userRouter.post("/logout", isLoggedIn, postLogout, errorHandler);

userRouter.patch("/nickname", isLoggedIn, patchEditNickname, errorHandler);
userRouter.patch("/mbti", isLoggedIn, patchEditMbti, errorHandler);
userRouter.patch("/intro", isLoggedIn, patchEditIntro, errorHandler);
userRouter.patch("/area", isLoggedIn, patchEditArea, errorHandler);

userRouter.patch("/:userId/follow", isLoggedIn, patchAddFollower, errorHandler);
userRouter.delete("/:userId/follow", isLoggedIn, deleteFollower, errorHandler);
userRouter.delete(
  "/follower/:userId",
  isLoggedIn,
  deleteFollowing,
  errorHandler
);

userRouter.post("/images", isLoggedIn, upload.array("image"), postAvatarImages);
userRouter.patch("/avatar", isLoggedIn, patchEditAvatar);

module.exports = userRouter;
