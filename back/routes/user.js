const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { Post, User, Image, Comment } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const { Op } = require("sequelize");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

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

// GET /user (loadMe)
router.get("/", async (req, res, next) => {
  console.log(req.headers);
  try {
    if (req.user) {
      const userWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          { model: User, as: "Followings", attributes: ["id"] },
          { model: User, as: "Followers", attributes: ["id"] },
        ],
      });
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/followers
router.get("/followers", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자입니다.");
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
      // limit: req.query.limit,
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/followings
router.get("/followings", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자입니다.");
    }
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/1
router.get("/:userId", async (req, res, next) => {
  try {
    const userWithoutPassword = await User.findOne({
      where: { id: req.params.userId },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Post,
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });
    if (userWithoutPassword) {
      const data = userWithoutPassword.toJSON();
      data.Posts = data.Posts.length;
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      res.status(200).json(data);
    } else {
      res.status(404).json("존재하지 않는 사용자입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// GET /user/1/posts
router.get("/:userId/posts", async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        { model: Image },

        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname", "avatar"],
              order: [["createdAt", "DESC"]],
            },
          ],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Repost",
          include: [
            {
              model: User,
              attributes: ["id", "nickname", "avatar"],
            },
            { model: Image },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /user/login
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const userWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          { model: User, as: "Followings", attributes: ["id"] },
          { model: User, as: "Followers", attributes: ["id"] },
        ],
      });
      return res.status(200).json(userWithoutPassword);
    });
  })(req, res, next);
});

// POST /user/ (signUp)
router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 이메일입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

// PATCH /user/nickname
router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /user/intro
router.patch("/intro", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        intro: req.body.intro,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ intro: req.body.intro });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /user/area
router.patch("/area", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        area: req.body.area,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ area: req.body.area });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// PATCH /user/1/follow
router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자입니다.");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) }); // action.data
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /user/1/follow
router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자입니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// DELETE /user/follower/2
router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      return res.status(403).send("존재하지 않는 사용자입니다.");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// POST /user/images
router.post(
  "/images",
  isLoggedIn,
  upload.array("image"),
  async (req, res, next) => {
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
  }
);

// PATCH /user/avatar
router.patch("/avatar", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        avatar: req.body.avatar,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ avatar: req.body.avatar });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
