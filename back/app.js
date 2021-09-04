const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRouter");
const postsRouter = require("./routes/postsRouter");
const userRouter = require("./routes/userRouter");
const usersRouter = require("./routes/usersRouter");
const hashtagRouter = require("./routes/hashtagRouter");
const diarysRouter = require("./routes/diarysRouter");
const diaryRouter = require("./routes/diaryRouter");
const feelRouter = require("./routes/feelRouter");

const db = require("./models");
const passport = require("passport");
const passportConfig = require("./passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

dotenv.config();
const app = express();

db.sequelize
  // .sync({ alter: true }) // 테이블수정
  .sync()
  .then(() => {
    console.log("db 연결성공");
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: ["http://localhost:3060", "senstory.com", "http://3.34.132.251"],
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);
app.use("/diarys", diarysRouter);
app.use("/diary", diaryRouter);
app.use("/feel", feelRouter);

app.listen(80, () => {
  console.log("서버 실행중");
});
