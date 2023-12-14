import {
  createQuestion,
  createConstructedQuestion,
  updateQuestion,
  updateConstructedQuestion,
} from "../service/questionService.js";
import httpStatus from "http-status";
import { QUESTION_CONSTANTS,QUIZ_CONSTANTS } from "../data/constant.js";
import {
  questionSchema,
  createQuestionSchema,
  questionUpdateSchema,
  createConstructedQuestionSchema,
  ConstructedQuestionUpdateSchema,
} from "../validator/questionValidate.js";
const logger = require("../util/logger.js");
const CreateQuestionController = async (req, res, next) => {
  try {
    const data = req.body;
    const { error, value } = createQuestionSchema.validate(data);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
    logger.info("this is value", value)
    const result = await createQuestion(value);
    if(result ==QUIZ_CONSTANTS.NOT_FOUND){
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: QUIZ_CONSTANTS.NOT_FOUND,
      });
    }
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: QUESTION_CONSTANTS.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const CreateConstructedQuestionController = async (req, res, next) => {
  try {
    const data = req.body;
    console.log("this is data", req.body);
    const { error, value } = createConstructedQuestionSchema.validate(data);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
    const result = await createConstructedQuestion(value);
    if (result == QUIZ_CONSTANTS.NOT_FOUND) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message:QUIZ_CONSTANTS.NOT_FOUND,
      });
    }
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: QUESTION_CONSTANTS.CREATED,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateQuestionController = async (req, res, next) => {
  try {
    const data = req.body;
    const { error, value } = questionUpdateSchema.validate(data);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
    const result = await updateQuestion(value);
    if (result == QUESTION_CONSTANTS.INVALID_AUTHOR) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: QUESTION_CONSTANTS.INVALID_AUTHOR,
      });
    }
    if (result == QUESTION_CONSTANTS.NOT_FOUND) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.BAD_REQUEST,
        message: QUESTION_CONSTANTS.NOT_FOUND,
      });
    }
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: QUESTION_CONSTANTS.UPDATED,
    });
  } catch (error) {
    next(error);
  }
};
const updateConstructedQuestionController = async (req, res, next) => {
  try {
    const data = req.body;
    const { error, value } = ConstructedQuestionUpdateSchema.validate(data);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: error.message,
      });
    }
    const result = await updateConstructedQuestion(value);
    if (result == QUESTION_CONSTANTS.INVALID_AUTHOR) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: QUESTION_CONSTANTS.INVALID_AUTHOR,
      });
    }
    if (result == QUESTION_CONSTANTS.NOT_FOUND) {
      return res.status(httpStatus.NOT_FOUND).json({
        status: httpStatus.BAD_REQUEST,
        message: QUESTION_CONSTANTS.NOT_FOUND,
      });
    }
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: QUESTION_CONSTANTS.UPDATED,
    });
  } catch (error) {
    next(error);
  }
};
export {
  CreateQuestionController,
  CreateConstructedQuestionController,
  updateQuestionController,
  updateConstructedQuestionController,
};
