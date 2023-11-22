import request from "supertest";
import { app } from "../app";
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Earl Grey" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Earl Grey"
  });
});
test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Green" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green"
  });
});
test("GET /tea with no param should return correct object", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Green"
  });
});
test("GET /tea with different param should return correct object", async () => {
  const res = await request(app)
    .get("/tea")
    .query({ teaName: "Lapsang Souchong" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Lapsang Souchong"
  });
});

test("GET /tea with different param should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Genmaicha" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Genmaicha"
  });
});
