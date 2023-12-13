import {
  createGame,
  getGame,
  getAllGame,
  updateGame,
  deleteGame,
} from "../service/gameService";
import { COMMON_CONSTANTS, QUIZ_CONSTANTS, QUESTION_CONSTANTS } from "../data/constant";
const { Success, BadRequest } = require("../helper/apiResponse");
import httpStatus from "http-status";
import { gameSchema } from "../validator/gameValidate.js";
const createGameController = async (req, res) => {
  const payload = req.body;
  const { err, value } = gameSchema.validate(payload);
  if (err) {
    return res.status(httpStatus.BAD_REQUEST).json(new BadRequest(err.message));
  }

  const game = await createGame(value);

  if (!game) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(new BadRequest(COMMON_CONSTANTS.CREATE_FAIL));
  }
  return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, game));
};
const getGameController = async (req, res) => {
  const id = req.params.id;
  const game = await getGame(id);
  if (!game) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(new BadRequest(COMMON_CONSTANTS.NOT_FOUND));
  }
  return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, game));
};
const getAllGameController = async (req, res) => {
  const game = await getAllGame();
  if (!game) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(new BadRequest(COMMON_CONSTANTS.NOT_FOUND));
  }
  return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, game));
};
const updateGameController = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const { err, value } = gameSchema.validate(payload);
  if (err) {
    return res.status(httpStatus.BAD_REQUEST).json(new BadRequest(err.message));
  }
  const game = await updateGame(id, value);
  if (!game) {
    return res.status(httpStatus.BAD_REQUEST).json(new BadRequest("GAME NOT FOUND"));
  }
  return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, game));
};
const deleteGameController = async (req, res) => {
  const id = req.params.id;
  const game = await deleteGame(id);
  if (!game) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(new BadRequest(COMMON_CONSTANTS.NOT_FOUND));
  }
  return res.status(httpStatus.OK).json(new Success(COMMON_CONSTANTS.SUCCESS, game));
};
export {
  createGameController,
  getGameController,
  getAllGameController,
  updateGameController,
  deleteGameController,
};
