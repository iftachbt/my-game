import express from "express";
import passport from "passport";
import { signUp } from "./users.service.js";
import { NotFoundError, ValidationError } from "../../error_handling/error.class.js";

export const UsersRoute = express.Router();

UsersRoute.post("/signUp", async (req, res) => {
  await signUp(req, res);
});

UsersRoute.post("/logIn", passport.authenticate("local"), (req, res) => {
  if (!req.user) throw new NotFoundError("not found user");
  res.send(req.user);
});
