import express from "express";
import { authMid } from "../users/users.auth.js";
import { saveCharacter } from "./character.service.js";

export const CharacterRoute = express.Router();

CharacterRoute.post("/save", (req, res) => {
  saveCharacter(req.body);
  res.send(req.body);
});
// UsersRoute.post("/signUp", (req, res) => {
//   signUp(req, res);
// });
