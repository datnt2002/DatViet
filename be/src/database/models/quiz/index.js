const BaseModel = require("../base");
const Question = require("../question");
const Game = require("../game");
module.exports = class Quiz extends BaseModel {
  static tableName = "quiz";
  static modelName = "quiz";
  static include = [
    {
      model: Game,
      as: "game",
    },
    {
      model: Question,
      as: "question",
    },
  ];
  static schema = require("./schema");
  static associate = (models) => {
    this.belongsTo(models.Game, { foreignKey: "gameId" });
    this.hasMany(models.Question, { foreignKey: "quizId" });
  };
};
