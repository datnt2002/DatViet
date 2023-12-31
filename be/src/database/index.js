const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const config = require("../config");
const { sequelize } = require("../config/database");
const logger = require("../util/logger");
class Db {
  constructor() {
    const models = {};
    fs
      //read all files represent models in folder models
      .readdirSync(path.join(__dirname, "models"), { withFileTypes: true })
      .filter((dir) => dir.isDirectory()) // Use node version >= 10
      .map((dir) => dir.name)
      .forEach((dir) => {
        const model = require(path.join(__dirname, "models", dir));
        model.init(sequelize);
        //models[model.name] = model;
        models[_.upperFirst(dir)] = model;
      });
    Object.values(models)
      .filter((model) => typeof model.associate === "function")
      .forEach((model) => model.associate(models));
  }
  getSequelize() {
    return sequelize;
  }
  connect() {
    let connectPromise = sequelize
      .authenticate()
      .then(() => {
        logger.info(`Connected to database: ${sequelize.config.database}`);
        return sequelize.sync({ force: false, alter: false }).then(() => {
          logger.info("All models were synchronized successfully.");
          return sequelize;
        });
      })
      .catch((error) => {
        throw error;
      });
    return connectPromise;
  }
}
const Database = new Db();
export default Database;
