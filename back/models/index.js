const Sequelize = require("sequelize");
const user = require("./user");

const post = require("./post");
const image = require("./image");
const comment = require("./comment");
const hashtag = require("./hashtag");

const diary = require("./diary");
const photo = require("./photo");
const feel = require("./feel");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = user;

db.Post = post;
db.Image = image;
db.Comment = comment;
db.Hashtag = hashtag;

db.Diary = diary;
db.Photo = photo;
db.Feel = feel;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
