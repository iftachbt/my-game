import express from "express";
import { authMid } from "../users/users.auth.js";

export const CharacterRoute = express.Router();

CharacterRoute.post("/create", authMid, (req, res) => {
  console.log("hello", req.user);
  res.send("");
});
// UsersRoute.post("/signUp", (req, res) => {
//   signUp(req, res);
// });
