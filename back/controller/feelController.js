const { Diary, User, Photo, Feel } = require("../models");
const { Op } = require("sequelize");

module.exports.getFeelDiarys = async (req, res, next) => {
  try {
    const where = { UserId: req.params.userId };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const diarys = await Diary.findAll({
      where,
      limit: 30,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: Feel,
          where: { name: req.params.feel },
        },
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        { model: Photo },
      ],
    });
    res.status(200).json(diarys);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
