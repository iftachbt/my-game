import { create as createRep, fetchById as fetchByCharId, deleteById, updateById } from "./session.reposetory.js";

export const create = (character) => createRep(character);

export const update = (session) => updateById(session);

export const fetchById = (characterId) => fetchByCharId(characterId);

export const deleteOne = (characterId) => deleteById(characterId);
