const express = require("express");
const { Op } = require("sequelize");
const { Post, User, Image, Comment } = require("../models");

const router = express.Router();

// GET /posts
router.get("/", async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"], // 댓글 정렬
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
          model: User, // 좋아요
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

module.exports = router;
