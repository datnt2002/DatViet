const Game = require("../database/models/game");
const logger = require("../util/logger");
const createGame = async (data) => {
  try {
    const game = await Game.create(data);
    return game;
  } catch (err) {
    logger.error(err.message);
    return err.message;
  }
};
const getGame = async (id) => {
  const game = await Game.findOne({ where: { gameId: id } });
  return game;
};
const getAllGame = async () => {
  const game = await Game.findAll();
  return game;
};
const updateGame = async (id, data) => {
  try {
    const game = await Game.findOne({ where: { gameId: id } });
    if (game) {
      await Game.update(data, { where: { gameId: id } });
      return game;
    }
    return null;
  } catch (err) {
    logger.error(err.message);
    return err.message;
  }
};
const deleteGame = async (id) => {
  const game = await Game.destroy({ where: { gameId: id } });
  return game;
};
export { createGame, getGame, getAllGame, updateGame, deleteGame };
