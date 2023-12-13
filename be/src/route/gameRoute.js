import {
  createGameController,
  getGameController,
  getAllGameController,
  updateGameController,
  deleteGameController,
} from "../controller/gameController";
const express = require("express");
const gameRouter = express.Router();

gameRouter.post("/", createGameController);
gameRouter.get("/:id", getGameController);
gameRouter.get("/", getAllGameController);
gameRouter.patch("/:id", updateGameController);
gameRouter.delete("/:id", deleteGameController);
export default gameRouter;
