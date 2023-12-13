const { Sequelize, DataTypes } = require("sequelize");
module.exports = {
  quizId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncreament: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quizImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};
