import express from "express";
import { create, fetchById } from "./session.service.js";
import { gameSessionCreationValidation } from "./session.validation.js";

export const gameSessionRoute = express.Router();
export const gameSessionPrefix = "/gameSession";

gameSessionRoute.post("/session", gameSessionCreationValidation, (req, res) => {
  create(req.body);
  res.send(req.body);
});
gameSessionRoute.delete("/session", async (req, res) => {
  const result = await deleteOne(req.body);
  res.send(result);
});

gameSessionRoute.get("/session", async (req, res) => {
  const session = await fetchById(req.query.characterId);
  res.send(session);
});
