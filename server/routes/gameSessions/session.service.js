import { create as createRep, fetchByUserId } from "./session.reposetory.js";

export const create = (character, characterId) => createRep(character, characterId);

export const fetchById = (characterId) => fetchByUserId(characterId);