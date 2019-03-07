exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "max", password: "pass" },
        { username: "ben", password: "pass" },
        { username: "marsy", password: "pass" }
      ]);
    });
};
