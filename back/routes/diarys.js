const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
const { User, Image, Diary } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

// GET /diarys/12
router.post("/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const diarys = await Diary.findAll({
      where,
      limit: 10,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        // { model: Image },
      ],
    });
    res.status(200).json(diarys);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
