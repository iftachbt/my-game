import { sendGet, sendPost } from "../apiHandle";

export async function fetchSessionById() {
  return await sendGet("gameSession/session");
}

export async function createSession(info) {
  return await sendPost("gameSession/create", info);
}
