import express from "express";
import { create, fetchById, deleteOne } from "./session.service.js";
import { gameSessionCreationValidation } from "./session.validation.js";

export const gameSessionRoute = express.Router();
export const gameSessionPrefix = "/game";

gameSessionRoute.post("/session", gameSessionCreationValidation, (req, res) => {
  create(req.body);
  res.send(req.body);
});
gameSessionRoute.delete("/session", async (req, res) => {
  console.log("first del " + req.query.characterId);
  const result = await deleteOne(req.query.characterId);
  res.send(result);
});

gameSessionRoute.get("/session", async (req, res) => {
  const session = await fetchById(req.query.characterId);
  res.send(session);
});
