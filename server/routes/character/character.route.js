import express from "express";
import { authMid } from "../users/users.auth.js";

export const CharacterRoute = express.Router();

CharacterRoute.get("/create", authMid, (req, res) => {
  console.log(req.user);
  console.log("hello");
  res.send("");
});
