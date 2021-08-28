const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(35),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        mbti: {
          type: DataTypes.STRING(10),
          allowNull: true,
        },
        intro: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        area: {
          type: DataTypes.STRING(10),
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        avatar: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.hasMany(db.Diary);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  }
};
