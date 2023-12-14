import {
  CreateQuestionController,
  CreateConstructedQuestionController,
  updateQuestionController,
  updateConstructedQuestionController,
} from "../controller/questionController.js";
const express = require("express");
const questionRouter = express.Router();

questionRouter.post("/constructed", CreateConstructedQuestionController);
questionRouter.patch("/constructed", updateConstructedQuestionController);
questionRouter.post("/", CreateQuestionController);
questionRouter.patch("/", updateQuestionController);
export default questionRouter;
