import { sendGet, sendPost } from "../apiHandle";

export const fetchCharacter = async () => {
  return await sendGet("character/character");
};

export async function saveCharacter(info) {
  return await sendPost("character/create", info);
}
