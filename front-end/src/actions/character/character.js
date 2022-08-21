import { sendGet, sendPost } from "../apiHandle";

export const fetchCharacter = async () => {
  return await sendGet("Character");
};

export async function saveCharacter(info) {
  return await sendPost("save", info);
}
