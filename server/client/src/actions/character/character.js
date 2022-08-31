import { sendGet, sendPost, sendDelete } from "../apiHandle";

export const fetchCharacter = async () => {
  return await sendGet("character/character");
};

export async function saveCharacter(info) {
  return await sendPost("character/character", info);
}

export async function deleteCharacter(characterId) {
  return await sendDelete("character/character?characterId=" + characterId);
}
