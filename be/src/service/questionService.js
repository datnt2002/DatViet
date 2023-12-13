const Question = require("../database/models/question");
const Quiz = require("../database/models/quiz");
const Answer = require("../database/models/answer");
const { sequelize } = require("../config/database");
import { QUIZ_CONSTANTS, QUESTION_CONSTANTS } from "../data/constant";
const createQuestion = async (data) => {
  const quiz = await Quiz.findOne({ where: { quizId: data.quizId } });
  if (!quiz) {
    return QUIZ_CONSTANTS.NOT_FOUND;
  } else {
    let questions = data.questions;
    for (let i = 0; i < questions.length; i++) {
      const newQuestion = await Question.create({
        content: questions[i].content,
        quizId: data.quizId,
      });
      if (!newQuestion) {
        return QUESTION_CONSTANTS.CREATED_FAILED;
      }
      let answers = questions[i].answer;
      for (let j = 0; j < answers.length; j++) {
        const newAnswer = await Answer.create({
          content: answers[j].content,
          isCorrect: answers[j].isCorrect,
          questionId: newQuestion.questionId,
        });
        if (!newAnswer) {
          return QUESTION_CONSTANTS.CREATED_FAILED;
        }
      }
    }
  }
};
const updateQuestion = async (value) => {
  const results = [];

  for (const question of value) {
    const result = await Question.findOne({ where: { questionId: question.questionId } });

    if (!result) {
      results.push(QUESTION_CONSTANTS.NOT_FOUND);
      continue; // Skip to the next iteration
    }

    if (currentUser !== result.createdBy) {
      results.push(QUESTION_CONSTANTS.INVALID_AUTHOR);
      continue; // Skip to the next iteration
    }
    for (const answer of question.answer) {
      console.log("this is answer", answer);
      const result = await Answer.findOne({ where: { answerId: answer.answerId } });
      if (!result) {
        results.push(QUESTION_CONSTANTS.NOT_FOUND);
        continue; // Skip to the next iteration
      }
      if (currentUser !== result.createdBy) {
        results.push(QUESTION_CONSTANTS.INVALID_AUTHOR);
        continue; // Skip to the next iteration
      }
      await result.update({ ...answer });
    }
    await result.update({ ...question });
    results.push(QUESTION_CONSTANTS.UPDATED);
  }

  return results;
};

export { createQuestion, updateQuestion };
