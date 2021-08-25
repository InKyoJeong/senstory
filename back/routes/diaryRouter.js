const express = require("express");
const { isLoggedIn, errorHandler } = require("./middlewares");
const { upload } = require("../utils/index.js");
const {
  postAddDiary,
  postAddPhotos,
  deleteDiary,
  getDiary,
} = require("../controller/diaryController");

const diaryRouter = express.Router();

diaryRouter.post("/", isLoggedIn, upload.none(), postAddDiary, errorHandler);
diaryRouter.get("/:diaryId", isLoggedIn, getDiary, errorHandler);
diaryRouter.delete("/:diaryId", isLoggedIn, deleteDiary, errorHandler);
diaryRouter.post("/photos", isLoggedIn, upload.array("photo"), postAddPhotos);

module.exports = diaryRouter;
