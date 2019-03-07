require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 8000;

const DB_ENV = process.env.DB_ENV;

server.listen(port, () => {
  console.log(`\n\n*** Now listening on ${port} in ${DB_ENV}***\n`);
});
