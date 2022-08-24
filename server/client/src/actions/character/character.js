import { sendGet, sendPost } from "../apiHandle";

export const fetchCharacter = async () => {
  return await sendGet("character/Character");
};

export async function saveCharacter(info) {
  console.log("info", info);
  return await sendPost("character/save", info);
}
