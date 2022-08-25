import express from "express";
import { authMid } from "../users/users.auth.js";
import { create, fetchById } from "./character.service.js";
import { characterCreationValidation } from "./character.validation.js";

export const CharacterRoute = express.Router();
export const CharacterPrefix = "/character";

CharacterRoute.post("/create", authMid, characterCreationValidation, (req, res) => {
  create(req.body, req.user.id);
  res.send(req.body);
});
CharacterRoute.get("/character", authMid, async (req, res) => {
  const characterList = await fetchById(req.user.id);
  console.log(characterList);
  res.send(characterList);
});
