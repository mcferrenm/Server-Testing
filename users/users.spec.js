const request = require("supertest");

const server = require("../api/server.js");

describe("/api/users", () => {
  describe("GET /", () => {
    it("should return 200 status code", async () => {
      const res = await request(server).get("/api/users");

      expect(res.status).toBe(200);
    });

    it("should return json", async () => {
      const res = await request(server).get("/api/users");

      expect(res.type).toBe("application/json");
    });

    it("should return {api: 'hello'}", async () => {
      const res = await request(server).get("/api/users");

      expect(res.body).toEqual({ api: "hello" });
    });
  });
});
