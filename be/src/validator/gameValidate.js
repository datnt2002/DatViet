import Joi from "joi";
const gameSchema = Joi.object({
  gameName: Joi.string().min(1).max(50).required().messages({
    "string.min": "Game name must have at least 1 character",
    "string.max": "Game name must have maximum 50 characters",
    "string.empty": "Game name must not be empty",
  }),
  gameType: Joi.number().integer().min(0).max(1).messages({
    "number.min": "Game type must be 0 or 1",
    "number.max": "Game type must be 0 or 1",
    "number.integer": "Game type must be 0 or 1",
  }),
});
export { gameSchema };
