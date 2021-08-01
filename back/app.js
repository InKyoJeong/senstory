const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const usersRouter = require("./routes/users");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const passport = require("passport");
const passportConfig = require("./passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

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

app.use(morgan("dev"));
app.use(
  cors({
    origin: true, //http://localhost:3060
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
  res.send("hello express");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/users", usersRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

app.listen(3065, () => {
  console.log("서버 실행중");
});
