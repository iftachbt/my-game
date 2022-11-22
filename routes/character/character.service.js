import { create as createRep, fetchByUserId, deleteById, incrementById } from "./character.reposetory.js";

export const create = (character, userId) => createRep(character, userId);

export const increment = (character) => incrementById(character);

export const fetchById = (userId) => fetchByUserId(userId);

export const deleteOne = (characterId) => deleteById(characterId);
