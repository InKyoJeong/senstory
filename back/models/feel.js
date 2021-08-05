const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Feel extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        modelName: "Feel",
        tableName: "feels",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Feel.belongsToMany(db.Diary, { through: "DiaryFeel" });
  }
};
