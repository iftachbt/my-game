import { sendGet, sendPost } from "./apiHandle";

export const fetchUser = async () => {
  return await sendGet("user");
};

export function logIn(info) {
  return sendPost("logIn", info);
}

export function signUp(info) {
  console.log("signUp", info);
  return sendPost("signUp", info);
}

export async function logout() {
  console.log("test");
  await sendGet("logout");
}
