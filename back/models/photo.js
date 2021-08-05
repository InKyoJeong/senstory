const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Photo extends Model {
  static init(sequelize) {
    return super.init(
      {
        src: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        modelName: "Photo",
        tableName: "photos",
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Photo.belongsTo(db.Diary);
  }
};
