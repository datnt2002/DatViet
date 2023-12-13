const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  questionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  questionImg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};
