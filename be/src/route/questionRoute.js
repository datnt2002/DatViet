import {
  createQuestionController,
  updateQuestionController,
} from "../controller/questionController.js";
const express = require("express");
const questionRouter = express.Router();

questionRouter.post("/", createQuestionController);
questionRouter.patch("/", updateQuestionController);
export default questionRouter;
