const express = require("express");
const { User, sequelize } = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

// GET /users (random)
router.get("/", async (req, res, next) => {
  try {
    const randomUsers = await User.findAll({
      order: sequelize.random(),
      limit: 4,
      attributes: {
        exclude: ["password"],
      },
      where: { id: { [Op.ne]: req.user.id } },
    });
    res.status(200).json(randomUsers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
