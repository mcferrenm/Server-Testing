const request = require("supertest");

const db = require("../data/dbConfig.js");

const Users = require("../users/userModel");

describe("users model", () => {
  describe("get()", () => {
    it("should return users from the db", async () => {
      const users = await Users.get();

      expect(users).toBeDefined();
    });
  });
  describe("insert()", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert user into the db", async () => {
      const user = await Users.insert({
        username: "Doug",
        password: "pass"
      });
      expect(user.username).toEqual("Doug");
    });
  });
});
