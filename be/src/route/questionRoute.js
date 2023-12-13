import {
  createQuestionController,
  createConstructedQuestionController,
  updateQuestionController,
} from "../controller/questionController.js";
const express = require("express");
const questionRouter = express.Router();

questionRouter.post("/", createQuestionController);
questionRouter.post("/constructed", createConstructedQuestionController);
questionRouter.patch("/", updateQuestionController);
export default questionRouter;
