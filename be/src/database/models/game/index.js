const BaseModel = require("../base");
const Quiz = require("../quiz");
module.exports = class Game extends BaseModel {
  static tableName = "game";
  static modelName = "game";
  static schema = require("./schema");
  static include = [
    {
      model: Quiz,
      as: "quiz",
    },
  ];
  static associate = (models) => {
    this.hasMany(models.Quiz, { foreignKey: "gameId" });
  };
};
