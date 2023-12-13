const express = require("express");
const app = express();
import logger from "./util/logger";
import db from "./database/index.js";
import { routers } from "./route";
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const initService = () => {
  logger.info("Init - Register services.");
  app.use("/api", routers);
  logger.info(`Init - Register services successfully.`);
  return;
};
const initSequelize = () => {
  logger.info("Init - Establish connection.");
  return db
    .connect()
    .then(() => {
      logger.info("Init - Establish connection successfully.");
      return true;
    })
    .catch((err) => {
      logger.error("Init - Establish connection fail: ", err);
      return false;
    });
};
const startServer = async () => {
  const server = app.listen(process.env.HTTP_PORT, process.env.HTTP_HOST);
  app.use(cors());
  initSequelize();
  initService();
  logger.info(
    `Listening on host ${process.env.HTTP_HOST} on port ${process.env.HTTP_PORT} http://${process.env.HTTP_HOST}:${process.env.HTTP_PORT}`
  );
};
startServer();
