const { Post, Comment, User, Image, Hashtag } = require("../models");

module.exports.postAddPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })
        )
      );
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      // 이미지 여러개
      if (Array.isArray(req.body.image)) {
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
        // 이미지 한개
      } else {
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        { model: Image },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname", "avatar"],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.postImages = (req, res, next) => {
  // console.log(req.files);
  res.json(req.files.map((v) => v.location.replace(/\/original\//, "/thumb/")));
};

module.exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        {
          model: Image,
        },
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
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.postRepost = async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Repost",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    if (
      req.user.id === post.UserId ||
      (post.Repost && post.Repost.UserId === req.user.id)
    ) {
      return res.status(403).send("자신의 글은 공유할 수 없습니다.");
    }
    const repostOriginId = post.RepostId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RepostId: repostOriginId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 공유한 게시물입니다.");
    }
    const repost = await Post.create({
      UserId: req.user.id,
      RepostId: repostOriginId,
      content: "repost",
    });
    const repostWithPostId = await Post.findOne({
      where: { id: repost.id },
      include: [
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
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname", "avatar"],
            },
          ],
        },
        {
          model: User,
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });

    res.status(201).json(repostWithPostId);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.postAddComment = async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "avatar"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.patchLikePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.deleteLikePost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.patchEditPost = async (req, res, next) => {
  const hashtags = req.body.content.match(/#[^\s#]+/g);
  try {
    await Post.update(
      {
        content: req.body.content,
      },
      {
        where: { id: req.params.postId, UserId: req.user.id },
      }
    );
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          Hashtag.findOrCreate({ where: { name: tag.slice(1).toLowerCase() } })
        )
      );
      await post.setHashtags(result.map((v) => v[0]));
    }
    res.status(200).json({
      PostId: parseInt(req.params.postId, 10),
      content: req.body.content,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId, UserId: req.user.id },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
