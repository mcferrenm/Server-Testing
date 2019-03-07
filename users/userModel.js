const db = require("../data/dbConfig");

module.exports = {
  get: function(id) {
    const query = db("users");
    if (id) {
      return query.where({ id });
    }
    return query;
  },
  insert: async function(user) {
    const [id] = await db("users").insert(user);

    return db("users")
      .where({ id })
      .first();
  }
};
