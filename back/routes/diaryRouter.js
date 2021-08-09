const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { isLoggedIn } = require("./middlewares");
const {
  postAddDiary,
  getDiarys,
  postAddPhotos,
} = require("../controller/diaryController");

const diaryRouter = express.Router();

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

diaryRouter.post("/", isLoggedIn, upload.none(), postAddDiary);
diaryRouter.get("/:userId", isLoggedIn, getDiarys);
diaryRouter.post("/photos", isLoggedIn, upload.array("photo"), postAddPhotos);

module.exports = diaryRouter;
