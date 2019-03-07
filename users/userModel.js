const db = require('../data/dbConfig');

module.exports = {
  get: function(id) {
    const query = db("users")

    return query;
  }
}