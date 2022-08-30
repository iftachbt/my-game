import express from "express";
import { authMid } from "../users/users.auth.js";
import { create, fetchById, deleteOne } from "./character.service.js";
import { characterCreationValidation } from "./character.validation.js";
import { fetchById as fetchSessionById } from "../gameSessions/session.reposetory.js";

export const CharacterRoute = express.Router();
export const CharacterPrefix = "/character";

CharacterRoute.post("/create", authMid, characterCreationValidation, (req, res) => {
  create(req.body, req.user.id);
  res.send(req.body);
});
CharacterRoute.delete("/character", (req, res) => {
  console.log("got to routs");
  deleteOne(req.query.characterId).then((r) => res.send(r));
});
CharacterRoute.get("/character", authMid, (req, res) =>
  fetchById(req.user.id)
    .then((characterList) =>
      Promise.all(
        characterList.map(async (char) => {
          const session = await fetchSessionById(char.id);
          return { ...char._doc, session };
        })
      )
    )
    .then((characterList) => res.send(characterList))
);
