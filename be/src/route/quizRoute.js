import {
  getListQuizController,
  getQuizzController,
  createQuizController,
  updateQuizController,
  deleteQuizController,
} from "../controller/quizController";
const express = require("express");
const quizRouter = express.Router();
quizRouter.get("/", getListQuizController);
quizRouter.get("/:id", getQuizzController);
quizRouter.post("/", createQuizController);
quizRouter.put("/:id", updateQuizController);
quizRouter.delete("/:id", deleteQuizController);
export default quizRouter;