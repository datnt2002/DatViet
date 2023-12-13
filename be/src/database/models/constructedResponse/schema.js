const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  responseId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
