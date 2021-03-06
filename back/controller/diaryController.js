const { User, Diary, Photo, Feel } = require("../models");

module.exports.postAddDiary = async (req, res, next) => {
  try {
    const diary = await Diary.create({
      title: req.body.title,
      content: req.body.content,
      feel: req.body.feel,
      maxtemp: parseInt(req.body.maxtemp, 10),
      mintemp: parseInt(req.body.mintemp, 10),
      UserId: req.user.id,
    });

    const feel = req.body.feel;
    if (feel) {
      const result = await Promise.resolve(
        Feel.findOrCreate({ where: { name: feel } })
      );
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
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.getDiary = async (req, res, next) => {
  try {
    const diary = await Diary.findOne({
      where: { id: req.params.diaryId },
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        { model: Photo },
      ],
    });
    res.status(200).json(diary);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.postAddPhotos = (req, res, next) => {
  // console.log(req.files);
  res.json(req.files.map((v) => v.location));
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
