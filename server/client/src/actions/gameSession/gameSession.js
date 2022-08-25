import { sendGet, sendPost } from "../apiHandle";

export const fetchSession = async () => {
  return await sendGet("gameSession/session");
};

export async function createSession(info) {
  return await sendPost("gameSession/create", info);
}
