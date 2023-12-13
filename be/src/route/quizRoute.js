import {
  getListQuizController,
  getListContructedQuizController,
  getQuizzController,
  getContructedQuizController,
  createQuizController,
  updateQuizController,
  deleteQuizController,
} from "../controller/quizController";
const express = require("express");
const quizRouter = express.Router();
quizRouter.get("/constructed", getListContructedQuizController);
quizRouter.get("/constructed/:id", getContructedQuizController);
quizRouter.get("/", getListQuizController);
quizRouter.get("/:id", getQuizzController);
quizRouter.post("/", createQuizController);
quizRouter.put("/:id", updateQuizController);
quizRouter.delete("/:id", deleteQuizController);
export default quizRouter;
