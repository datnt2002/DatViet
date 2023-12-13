import {
  getListQuiz,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} from "../service/quizServices";
import { COMMON_CONSTANTS, QUIZ_CONSTANTS } from "../data/constant";
import httpStatus from "http-status";
const logger = require("../util/logger");
import { createQuizSchema } from "../validator/quizValidate.js";
const {
  Success,
  CreatedSuccess,
  DeletedSuccess,
  BadRequest,
} = require("../helper/apiResponse");
const getListQuizController = async (req, res, next) => {
  try {
    const result = await getListQuiz();
    if (result === QUIZ_CONSTANTS.NOT_FOUND) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json(new BadRequest(QUIZ_CONSTANTS.NOT_FOUND));
    }
    return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, result));
  } catch (err) {
    console.log(err);
    next(err);
  }
};
const getQuizController = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const result = await getQuiz(quizId);
    if (result === QUIZ_CONSTANTS.NOT_FOUND) {
      return res.status(httpStatus.BAD_REQUEST).json(new BadRequest("Quiz not found"));
    }
    return res.status(httpStatus.OK).json(new Success(QUIZ_CONSTANTS.FOUND, result));
  } catch (err) {
    next(err);
  }
};
const createQuizController = async (req, res, next) => {
  const payload = req.body;
  const { err, value } = createQuizSchema.validate(payload);
  if (err) {
    return res.status(httpStatus.BAD_REQUEST).json(new BadRequest(err));
  }
  try {
    const result = await createQuiz(value);
    if (result === QUIZ_CONSTANTS.CREATED_FAILED) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.CREATED_FAILED));
    } else if (result === "Game not found") {
      return res.status(httpStatus.BAD_REQUEST).json(new BadRequest("Game not found"));
    }
    return res
      .status(httpStatus.CREATED)
      .json(new CreatedSuccess(QUIZ_CONSTANTS.CREATED, result));
  } catch (err) {
    next(err);
  }
};
const updateQuizController = async (req, res, next) => {
  const { err, value } = createQuizSchema.validate(req.body);
  if (err) {
    return res.status(httpStatus.BAD_REQUEST).json(new BadRequest(err));
  }
  const currentUser = req.user.userId;
  const quizId = req.params.id;
  try {
    const result = await updateQuiz(currentUser, quizId, value.title);
    if (result === QUIZ_CONSTANTS.INVALID_AUTHOR) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.INVALID_AUTHOR));
    }
    if (result === QUIZ_CONSTANTS.NOT_FOUND) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.NOT_FOUND));
    }
    if (result === QUIZ_CONSTANTS.UPDATED_FAILED) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.UPDATED_FAILED));
    }
    return res.status(httpStatus.OK).json(new Success(QUIZ_CONSTANTS.UPDATED, result));
  } catch (err) {
    next(err);
  }
};
const deleteQuizController = async (req, res, next) => {
  try {
    const currentUser = req.user.userId;
    const quizId = req.params.id;
    const result = await deleteQuiz(currentUser, quizId);
    if (result === QUIZ_CONSTANTS.INVALID_AUTHOR) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.INVALID_AUTHOR));
    }
    if (result === QUIZ_CONSTANTS.NOT_FOUND) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json(new BadRequest(QUIZ_CONSTANTS.NOT_FOUND));
    }
    return res.status(httpStatus.OK).json(new Success(QUIZ_CONSTANTS.DELETED));
  } catch (err) {
    next(err);
  }
};
export {
  getListQuizController,
  getQuizController,
  createQuizController,
  updateQuizController,
  deleteQuizController,
};
