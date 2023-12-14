import Joi from "joi";
const createQuizSchema = Joi.object({
  title: Joi.string().min(10).max(50).required().messages({
    "string.empty": "title must not be empty",
    "any.required": "title is required",
    "string.min": "title must be at least 10 characters long",
    "string.max": "title must have maximum 50 characters",
    "string.pattern.base": "title must not have special characters",
  }),
  content: Joi.string().min(10).max(500).required().messages({
    "string.empty": "content must not be empty",
    "any.required": "content is required",
    "string.min": "content must be at least 10 characters long",
    "string.max": "content must have maximum 500 characters",
    "string.pattern.base": "content must not have special characters",
  }),
  quizType: Joi.string()
    .valid("Multiple-choice questions", "Constructed response")
    .required()
    .messages({
      "string.empty": "quizType must not be empty",
      "any.required": "quizType is required",
      "string.pattern.base": "quizType must not have special characters",
    }),
});
export { createQuizSchema };
