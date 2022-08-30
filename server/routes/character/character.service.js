import { create as createRep, fetchByUserId, deleteById } from "./character.reposetory.js";

export const create = (character, userId) => createRep(character, userId);

export const fetchById = (userId) => fetchByUserId(userId);

export const deleteOne = (characterId) => deleteById(characterId);
