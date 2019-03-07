require("dotenv").config();

const knex = require("knex");
const config = require("../knexfile.js");

const db_ENV = process.env.DB_ENV || "development";

const db = knex(config[db_ENV]);

module.exports = db;
