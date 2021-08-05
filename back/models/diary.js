const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Diary extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        maxtemp: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        mintemp: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
      },
      {
        modelName: "Diary",
        tableName: "diarys",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Diary.belongsTo(db.User);
    // db.Diary.hasMany(db.Image);
    db.Diary.belongsToMany(db.Feel, { through: "DiaryFeel" });
  }
};
