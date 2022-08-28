import { create as createRep, fetchByUserId } from "./session.reposetory.js";

export const create = (character, userId) => createRep(character, userId);

export const fetchById = (userId) => fetchByUserId(userId);
