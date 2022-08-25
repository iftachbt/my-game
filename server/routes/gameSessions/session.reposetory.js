import { GameSession } from "../../mongoDB/DB.js";
import { v4 as uuid } from "uuid";

export const create = (character, characterId) => GameSession.insertMany([{ ...character, characterId, id: uuid() }]);

export const fetchByUserId = (characterId) => GameSession.find({ characterId: characterId }).exec();
