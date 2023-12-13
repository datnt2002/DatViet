import Joi from "joi";
const gameSchema = Joi.object({
  gameName: Joi.string().min(1).max(50).required().messages({
    "string.min": "Game name must have at least 1 character",
    "string.max": "Game name must have maximum 50 characters",
    "string.empty": "Game name must not be empty",
  }),
});
export { gameSchema };
