const multer = require("multer");
const path = require("path");
const fs = require("fs");

try {
  fs.accessSync("uploads");
} catch (error) {
  // console.log("uploads 폴더 없으므로 생성됨");
  fs.mkdirSync("uploads");
}

module.exports.upload = multer({
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
