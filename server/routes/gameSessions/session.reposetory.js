import { GameSession } from "../../mongoDB/DB.js";
import { v4 as uuid } from "uuid";

export const create = (character) => GameSession.insertMany([{ ...character, id: uuid() }]);

export const fetchById = (characterId) =>
  GameSession.find({ characterId })
    .exec()
    .then((res) => (res.length ? res[0] : null));

export const deleteById = (characterId) => GameSession.deleteOne({ characterId });
