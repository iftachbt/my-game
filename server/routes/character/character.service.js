import { create as createRep } from "./character.reposetory.js";

export const create = (character, userId) => createRep(character, userId);
