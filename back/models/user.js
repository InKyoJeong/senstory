module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // 내 소개컬럼 추가하기
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {};

  return User;
};
