const { Sequelize, DataTypes } = require("sequelize");
module.exports = {
  answerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
};
