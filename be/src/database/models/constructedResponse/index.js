const BaseModel = require("../base");
const Question = require("../question");

module.exports = class ConstructedResponse extends BaseModel {
  static tableName = "constructedResponse";
  static modelName = "constructedResponse";
  static include = [
    {
      model: Question,
      as: "question",
    },
  ];
  static schema = require("./schema");
  static associate = (models) => {
    this.belongsTo(models.Question, { foreignKey: "questionId" });
  };
};
