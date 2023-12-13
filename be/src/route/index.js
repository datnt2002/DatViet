const fs = require("fs");
const path = require("path");
const express = require("express");
const routers = express.Router();
import gameRouter from "./gameRoute";
import quizRouter from "./quizRoutes";
routers.use("/games", gameRouter);
routers.use("/quizzes", quizRouter);
export { routers };
