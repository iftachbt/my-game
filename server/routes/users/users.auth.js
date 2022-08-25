import "dotenv/config";
import passport from "passport";
import { User } from "../../mongoDB/DB.js";
import { UnAuthriseError } from "../../error_handling/error.class.js";
import MongoStore from "connect-mongo";
import { v4 as uuid } from "uuid";

export function security(User) {
  return (
    passport.use(User.createStrategy()),
    passport.serializeUser(User.serializeUser()),
    passport.deserializeUser(User.deserializeUser())
  );
}
export function sessionConfig() {
  return {
    secret: process.env.AUTH_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/gameDB" }),
  };
}

export function registerUser(user, req, res) {
  const { userName, fname, lname, email, password } = user;
  console.log("user", user);
  return User.register({ username: userName, fname, lname, email, id: uuid() }, password, (err, user) => {
    if (err) throw new UnAuthriseError("error in registerAuthentication");
    res.send(user);
    passport.authenticate("local")(req, res, function () {});
  });
}

export const authMid = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  throw new UnAuthriseError("error in Authentication");
};
