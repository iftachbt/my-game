import { Character } from "../../mongoDB/DB.js";
import { v4 as uuid } from "uuid";

export const create = (character, userId) => Character.insertMany([{ ...character, userId, id: uuid() }]);
