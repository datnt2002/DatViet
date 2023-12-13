const Quiz = require("../database/models/quiz");
const Question = require("../database/models/question");
const Answer = require("../database/models/answer");
import Game from "../database/models/game";
const { sequelize } = require("../config/database");
import { COMMON_CONSTANTS, QUIZ_CONSTANTS } from "../data/constant";
const getListQuiz = async () => {
  const quizzes = await Quiz.findAll({
    include: [
      {
        model: Question,
        include: [{ model: Answer }],
      },
    ],
  });

  if (!quizzes) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }
  return quizzes;
};
const getQuiz = async (quizId) => {
  const quiz = await Quiz.findOne({
    where: { quizId: quizId },
    include: [{ model: Question, include: [{ model: Answer }] }],
  });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }
  return quiz;
};
const createQuiz = async (payload) => {
  const quiz = await Quiz.create(payload);
  if (!quiz) {
    return QUIZ_CONSTANTS.CREATED_FAILED;
  }
  return quiz;
};
const updateQuiz = async (quizId, title) => {
  const quiz = await Quiz.findOne({ where: { quizId: quizId } });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }

  const updatedQuiz = await quiz.update({ title: title });
  if (!updatedQuiz) {
    return QUIZ_CONSTANTS.UPDATED_FAILED;
  }
  return updatedQuiz;
};
const deleteQuiz = async (quizId) => {
  const quiz = await Quiz.findOne({ where: { quizId: quizId } });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }
  const questions = await Question.findAll({
    where: { quizId: quizId },
    attributes: ["questionId"],
  });

  for (let i = 0; i < questions.length; i++) {
    await Answer.destroy({ where: { questionId: questions[i].questionId } });
    await Question.destroy({ where: { questionId: questions[i].questionId } });
  }
  const deleted = await quiz.destroy();
  if (!deleted) {
    return QUIZ_CONSTANTS.DELETED_FAILED;
  }
  return QUIZ_CONSTANTS.DELETED;
};
export { getListQuiz, getQuiz, createQuiz, updateQuiz, deleteQuiz };
