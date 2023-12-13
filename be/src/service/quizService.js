const Quiz = require("../database/models/quiz");
const Question = require("../database/models/question");
const Answer = require("../database/models/answer");
const ConstructedResponse = require("../database/models/constructedResponse");
const { sequelize } = require("../config/database");
import { COMMON_CONSTANTS, QUIZ_CONSTANTS } from "../data/constant";
const getListQuiz = async () => {
  const quizzes = await Quiz.findAll({
    where: { quizType: 1 }, //quizType = 1 is multiple choice
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
const getListConstructedQuiz = async () => {
  const quizzes = await Quiz.findAll({
    where: { quizType: 2 },
    include: [{ model: Question, include: [{ model: ConstructedResponse }] }],
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
const getContructedQuiz = async (quizId) => {
  const quiz = await Quiz.findOne({
    where: { quizId: quizId, quizType: 2 }, //quizType = 2 is constructed response
    include: [{ model: Question, include: [{ model: ConstructedResponse }] }],
  });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }
  return quiz;
};
const createQuizz = async (payload) => {
  const quiz = await Quiz.create(payload);
  if (!quiz) {
    return QUIZ_CONSTANTS.CREATED_FAILED;
  }
  return quiz;
};
const updateQuiz = async (quizId, payload) => {
  const quiz = await Quiz.findOne({ where: { quizId: quizId } });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  }

  const updatedQuiz = await quiz.update(payload);
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
export {
  getListQuiz,
  getListConstructedQuiz,
  getQuiz,
  getContructedQuiz,
  createQuizz,
  updateQuiz,
  deleteQuiz,
};
