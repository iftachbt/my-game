import { registerUser } from "./users.auth.js";

export function signUp(req, res, next) {
  registerUser(req, res, next);
}
