import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import { usersSchema } from "../routes/users/users.schema.js";
import { security } from "../routes/users/users.auth.js";

export const User = mongoose.model("user", new mongoose.Schema(usersSchema).plugin(passportLocalMongoose));
security(User);

export const connectDB = () => {
  return mongoose.connect("mongodb://localhost:27017/gameDB", { useNewUrlParser: true });
};
