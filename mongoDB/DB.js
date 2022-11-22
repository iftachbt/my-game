import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { usersSchema } from "../routes/users/users.schema.js";
import { characterSchema } from "../routes/character/character.schema.js";
import { gameSessionSchema } from "../routes/gameSessions/session.schema.js";
import { security } from "../routes/users/users.auth.js";

export const Character = mongoose.model("character", new mongoose.Schema(characterSchema));
export const GameSession = mongoose.model("gameSession", new mongoose.Schema(gameSessionSchema));
export const User = mongoose.model("user", new mongoose.Schema(usersSchema).plugin(passportLocalMongoose));
security(User);

export const connectDB = (dbUrl) => mongoose.connect(dbUrl, { useNewUrlParser: true });

export const closeConnection = (ms) => {
  ms.connection.close();
};
