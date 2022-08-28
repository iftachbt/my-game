import express from "express";
import { create, fetchById } from "./session.service.js";
import { gameSessionCreationValidation } from "./session.validation.js";

export const gameSessionRoute = express.Router();
export const gameSessionPrefix = "/gameSession";

gameSessionRoute.post("/create", gameSessionCreationValidation, (req, res) => {
  create(req.body, req.user.id);
  res.send(req.body);
});
// gameSessionRoute.post("/fetchSession", async (req, res) => {
//   const session = await fetchById(req.body);
//   console.log(session);
//   res.send(session);
// });
gameSessionRoute.get("/session", async (req, res) => {
  const session = await fetchById(req.user.id);
  console.log("get", session, req.user.id);
  res.send(session);
});
