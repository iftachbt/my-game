import { GameSession } from "../../mongoDB/DB.js";
import { v4 as uuid } from "uuid";

export const create = (character, userId) => GameSession.insertMany([{ ...character, userId, id: uuid() }]);

export const fetchByUserId = (userId) => GameSession.find({ userId: userId }).exec();
