import { sendGet, sendPost, sendDelete, sendUpdate } from "../apiHandle";

export async function fetchSessionById(characterId) {
  return await sendGet("gameSession/session?characterId=" + characterId);
}

export async function createSession(info) {
  return await sendPost("gameSession/session", info);
}
export async function deleteSession(info) {
  return await sendDelete("gameSession/session", info);
}
export async function updateSession(info) {
  return await sendUpdate("gameSession/session", info);
}
