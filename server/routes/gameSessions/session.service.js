import { create as createRep, fetchById as fetchByCharId, deleteById } from "./session.reposetory.js";

export const create = (character) => createRep(character);

export const fetchById = (characterId) => fetchByCharId(characterId);

export const deleteOne = (characterId) => deleteById(characterId);
