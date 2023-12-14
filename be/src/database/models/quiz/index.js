const BaseModel = require("../base");
const Question = require("../question");
module.exports = class Quiz extends BaseModel {
  static tableName = "quiz";
  static modelName = "quiz";
  static include = [
    {
      model: Question,
      as: "question",
    },
  ];
  static schema = require("./schema");
  static associate = (models) => {
    this.hasMany(models.Question, { foreignKey: "quizId" });
  };
};
