import { sendGet, sendPost } from "./apiHandle";

export const fetchUser = async () => {
  return await sendGet("user");
};

export function logIn(info) {
  return sendPost("logIn", info);
}

export function signIn(info) {
  return sendPost("signUp", info);
}

export async function logout() {
  await sendGet("logout");
}
