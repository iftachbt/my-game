import express from "express";
import passport from "passport";
import { signUp } from "./users.service.js";
import { NotFoundError } from "../../error_handling/error.class.js";

export const UsersRoute = express.Router();

UsersRoute.post("/signUp", (req, res) => {
  signUp(req, res);
});

UsersRoute.post("/logIn", passport.authenticate("local"), (req, res) => {
  if (!req.user) throw new NotFoundError("not found user");
  res.send(req.user);
});
UsersRoute.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      res.status(500).send({ msg: "error while logged out" });
    }
    res.status(200).send({ msg: "logged out" });
  });
});

UsersRoute.get("/user", (req, res) => {
  res.send(req.user);
});
