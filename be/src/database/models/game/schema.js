const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  gameId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  gameName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};
