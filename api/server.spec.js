const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

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

      it("should return json", async () => {
        const res = await request(server).get("/api/users");

        expect(res.type).toBe("application/json");
      });
    });
  });
});
