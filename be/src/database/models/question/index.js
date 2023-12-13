const BaseModel = require("../base");
const Quiz = require("../quiz");
const Answer = require("../answer");
const ConstructedResponse = require("../constructedResponse");
module.exports = class Question extends BaseModel {
  static tableName = "question";
  static modelName = "Question";
  static include = [
    {
      model: Quiz,
      as: "quiz",
    },
    {
      model: Answer,
      as: "answers",
    },
    {
      model: ConstructedResponse,
      as: "constructedresponse",
    },
  ];
  static schema = require("./schema");
  static associate = (models) => {
    this.belongsTo(models.Quiz, { foreignKey: "quizId" });
    this.hasMany(models.Answer, { foreignKey: "questionId" });
    this.hasOne(models.ConstructedResponse, { foreignKey: "questionId" });
  };
};
