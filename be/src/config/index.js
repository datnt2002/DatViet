const dotenv = require("dotenv").config();
const path = require("path");

const configs = {
  base: {
    name: process.env.APP_NAME,
    host: process.env.HTTP_HOST,
    port: process.env.HTTP_PORT,
    // Database
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_dialect: process.env.DB_DIALECT,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,
  },
};
const config = Object.assign(configs.base);

module.exports = config;
