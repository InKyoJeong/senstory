const express = require("express");
const { isLoggedIn, isNotLoggedIn, errorHandler } = require("./middlewares");
const { upload } = require("../utils/index.js");

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
