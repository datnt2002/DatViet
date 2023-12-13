import {
  createQuestionController,
  createConstructedQuestionController,
  updateQuestionController,
  updateConstructedQuestionController,
} from "../controller/questionController.js";
const express = require("express");
const questionRouter = express.Router();

questionRouter.post("/", createQuestionController);
questionRouter.post("/constructed", createConstructedQuestionController);
questionRouter.patch("/", updateQuestionController);
questionRouter.patch("/constructed", updateConstructedQuestionController);
export default questionRouter;
