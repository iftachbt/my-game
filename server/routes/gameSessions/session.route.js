import express from "express";
import { create, fetchById } from "./session.service";
import { gameSessionCreationValidation } from "../utils/validation";

export const gameSessionRoute = express.Router();
export const gameSessionPrefix = "/gameSession";

gameSessionRoute.post("/create", gameSessionCreationValidation, (req, res) => {
  create(req.body);
  res.send(req.body);
});
gameSessionRoute.get("/session", async (req, res) => {
  const session = await fetchById(req.body.id);
  console.log(session);
  res.send(session);
});
