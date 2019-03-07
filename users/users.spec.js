const request = require("supertest");

const db = require("../data/dbConfig.js");
const server = require("../api/server.js");
const Users = require("./userModel");

describe("/api/users", () => {
  describe("routes", () => {
    describe("GET /", () => {
      it("should return 200 status code", async () => {
        const res = await request(server).get("/api/users");

        expect(res.status).toBe(200);
      });

      it("should return json", async () => {
        const res = await request(server).get("/api/users");

        expect(res.type).toBe("application/json");
      });

      it("should return an array", async () => {
        const res = await request(server).get("/api/users");

        expect(res.body).toBeInstanceOf(Array);
      });
    });
    describe("POST /", () => {
      it("should return 200 status code", async () => {
        const res = await request(server).post("/api/users", {
          username: "Doug",
          password: "pass"
        });

        expect(res.status).toBe(200);
      });
    });
    describe("DELETE /", () => {
      it("should return 204 status code", async () => {
        const res = await request(server).delete("/api/users/1");

        expect(res.status).toBe(204);
      });
    });
  });
  describe("user model", () => {
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
    describe("delete()", () => {
      beforeEach(async () => {
        await db("users").truncate();
        await Users.insert({
          username: "Doug",
          password: "pass"
        });
      });

      it("should remove user from the db", async () => {
        const res = await Users.delete(1);

        expect(res).toBe(1);
      });
    });
  });
});
