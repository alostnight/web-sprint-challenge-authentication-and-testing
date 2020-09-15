const server = require("../api/server");
const express = require("express");
const supertest = require("supertest");
const db = require("../database/dbConfig");

describe("Get request", () => {
  it("returns 401(no session is found)", async () => {
    const res = await supertest(server).get("/api/jokes");
    expect(res.statusCode).toBe(401);
  });
  it("returns(JSON object)", async () => {
    const res = await supertest(server).get("/api/jokes");
    expect(res.type).toBe("application/json");
  });
});

describe("Register", () => {
  it("returns 500(username already exists)", async () => {
    const data = { username: "alostnight", password: "abc123" };
    const res = await supertest(server).post("/api/auth/register").send(data);
    expect(res.statusCode).toBe(500);
  });
  it("returns 500(no username is entered)", async () => {
    const data = { password: "abc123" };
    const res = await supertest(server).post("/api/auth/register").send(data);
    expect(res.statusCode).toBe(500);
  });
});

describe("Login", () => {
  it("returns 401(username does not exist)", async () => {
    const data = { username: "alostnight1234", password: "abc123" };
    const res = await supertest(server).post("/api/auth/login").send(data);
    expect(res.statusCode).toBe(401);
  });
  it("returns 500(no password entered)", async () => {
    const data = { username: "alostnight" };
    const res = await supertest(server).post("/api/auth/login").send(data);
    expect(res.statusCode).toBe(500);
  });
});