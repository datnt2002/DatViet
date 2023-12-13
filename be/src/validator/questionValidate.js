import Joi from "joi";

const questionSchema = Joi.object({
  content: Joi.string().min(10).max(50).required().messages({
    "string.min": "Question must have at least 10 characters",
    "string.max": "Question must have maximum 50 characters",
    "string.empty": "Question must not be empty",
  }),
  answer: Joi.array()
    .items(
      Joi.object({
        content: Joi.string().min(1).max(50).required().messages({
          "string.min": "Answer must have at least 1 character",
          "string.max": "Answer must have maximum 50 characters",
          "string.empty": "Answer must not be empty",
        }),
        isCorrect: Joi.boolean().required(),
      })
    )
    .required(),
});
const ConstructedResponseSchema = Joi.object({
  content: Joi.string().min(10).max(50).required().messages({
    "string.min": "Question must have at least 10 characters",
    "string.max": "Question must have maximum 50 characters",
    "string.empty": "Question must not be empty",
  }),
  answer: Joi.string().min(1).max(50).required().messages({
    "string.min": "Answer must have at least 1 character",
    "string.max": "Answer must have maximum 50 characters",
    "string.empty": "Answer must not be empty",
  }),
});
const questionUpdateSchema = Joi.array().items({
  questionId: Joi.string().required().messages({
    "string.empty": "Question id must not be empty",
  }),
  content: Joi.string().min(10).max(50).required().messages({
    "string.min": "Question must have at least 10 characters",
    "string.max": "Question must have maximum 50 characters",
    "string.empty": "Question must not be empty",
  }),
  answer: Joi.array()
    .items(
      Joi.object({
        answerId: Joi.string().required().messages({
          "string.empty": "Answer id must not be empty",
        }),
        content: Joi.string().min(1).max(50).required().messages({
          "string.min": "Answer must have at least 1 character",
          "string.max": "Answer must have maximum 50 characters",
          "string.empty": "Answer must not be empty",
        }),
        isCorrect: Joi.boolean().required(),
      })
    )
    .required(),
});
const createQuestionSchema = Joi.object({
  quizId: Joi.string().required().messages({
    "string.empty": "Quiz id must not be empty",
    "any.required": "Quiz id is required",
  }),

  questions: Joi.array().items(questionSchema).required().messages({
    "array.base": "Questions must be an array",
  }),
});
const createConstructedQuestionSchema = Joi.object({
  quizId: Joi.string().required().messages({
    "string.empty": "Quiz id must not be empty",
    "any.required": "Quiz id is required",
  }),

  questions: Joi.array().items(ConstructedResponseSchema).required().messages({
    "array.base": "Questions must be an array",
  }),
});
const ConstructedQuestionUpdateSchema = Joi.array().items({
  questionId: Joi.string().required().messages({
    "string.empty": "Question id must not be empty",
  }),
  content: Joi.string().min(10).max(50).required().messages({
    "string.min": "Question must have at least 10 characters",
    "string.max": "Question must have maximum 50 characters",
    "string.empty": "Question must not be empty",
  }),
  answer: Joi.string().min(1).max(50).required().messages({
    "string.min": "Answer must have at least 1 character",
    "string.max": "Answer must have maximum 50 characters",
    "string.empty": "Answer must not be empty",
  }),
});
export {
  questionSchema,
  createQuestionSchema,
  createConstructedQuestionSchema,
  questionUpdateSchema,
  ConstructedQuestionUpdateSchema,
};
