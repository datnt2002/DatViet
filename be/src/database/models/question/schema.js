const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  questionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncreament: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
