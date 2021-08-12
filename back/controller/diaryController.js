const { User, Diary, Photo, Feel } = require("../models");
const { Op } = require("sequelize");

module.exports.postAddDiary = async (req, res, next) => {
  try {
    const diary = await Diary.create({
      title: req.body.title,
      content: req.body.content,
      feel: req.body.feel,
      maxtemp: req.body.maxtemp,
      mintemp: req.body.mintemp,
      UserId: req.user.id,
    });
    const feel = req.body.feel;
    console.log("feel:", feel);
    if (feel) {
      const result = await Promise.resolve(
        Feel.findOrCreate({ where: { name: feel } })
      );
      console.log("feel프로미스 결과", result); //test
      await diary.addFeels(result[0]);
    }

    if (req.body.photo) {
      if (Array.isArray(req.body.photo)) {
        const photos = await Promise.all(
          req.body.photo.map((photo) => Photo.create({ src: photo }))
        );
        await diary.addPhotos(photos);
      } else {
        const photo = await Photo.create({ src: req.body.photo });
        await diary.addPhotos(photo);
      }
    }
    res.status(201).json(diary);
    console.log("diary route json", diary);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.getDiarys = async (req, res, next) => {
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
          model: User,
          attributes: ["id", "nickname", "avatar"],
        }, // todo: 사용자 include 여부선택
        { model: Photo },
      ],
    });
    res.status(200).json(diarys);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.postAddPhotos = async (req, res, next) => {
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
};

module.exports.deleteDiary = async (req, res, next) => {
  try {
    await Diary.destroy({
      where: { id: req.params.diaryId, UserId: req.user.id },
    });
    res.status(200).json({ DiaryId: parseInt(req.params.diaryId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
