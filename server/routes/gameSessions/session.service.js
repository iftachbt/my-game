import { create as createRep, fetchById as fetchByCharId } from "./session.reposetory.js";

export const create = (character) => createRep(character);

export const fetchById = (characterId) => fetchByCharId(characterId);
