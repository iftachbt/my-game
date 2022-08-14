import { registerUser } from "./users.auth.js";

export async function signUp(req, res) {
  await registerUser(req.body, req, res);
}
