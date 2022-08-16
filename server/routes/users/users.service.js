import { registerUser } from "./users.auth.js";

export function signUp(req, res) {
  registerUser(req.body, req, res);
}
